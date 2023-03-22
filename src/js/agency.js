import { qs } from "./utils.mjs";

const launchURL = "https://lldev.thespacedevs.com/2.2.0/launch/upcoming?format=json";
// const launchURL = "https://ll.thespacedevs.com/2.2.0/launch/upcoming/?format=json";
const agencySearchBase = "https://lldev.thespacedevs.com/2.2.0/agencies/?search="

const missionOutput = qs(".mission_list")

function launchCardTemplate(rockets) {

    rockets.slice(0, 12).forEach(async rocket => {
        // const temp = weather.current.temp.toFixed(0);
        // const description = weather.current.weather[0].description;
        let localDate = new Date(rocket.window_start);
        let localDateFormated = localDate.toLocaleString();
        // let latitude = rocket.pad.latitude;
        // let longitude = rocket.pad.longitude;
        let now = new Date().getTime();
        let t = localDate.getTime() - now;
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

//button for agency page:             
{/* <button class="agencyLink" data-id="${rocket.launch_service_provider.name}">${rocket.launch_service_provider.name} launches</button>  */}
        let launchTemplate = `
            <article class="rocket-article">
            <div class="rocketInfo">
            <h3>Mission: ${rocket.mission.name}</h3>
            <p> Agency: <strong>${rocket.launch_service_provider.name}</strong> </p>

            <p>Rocket: <strong>${rocket.name}</strong> </p>
            <p>Location: <strong>${rocket.pad.location.name}</strong> </p>
            </div>
            <div class="rocketImg">
            <img src="${rocket.image}" alt="${rocket.name} ">
            </div>
            <div id="rocketCountdown">
        
            <h3>Expected Launch Date: </h3>
            <p>${localDateFormated} Local</p>
            <h3>Countdown to liftoff: </h3>
            <p>${days} days and ${hours} hours.</p> 
            <h3>Launch status: </h3>
            <p>${rocket.status.name}</p>
            </div>
            </article>
            `;
        missionOutput.insertAdjacentHTML("afterbegin", launchTemplate)
    });
    

}

async function testLaunch() {
    const response = await fetch(launchURL)
    if (response.ok) {
        const data = await response.json();
        launchCardTemplate(data.results)
    }
}
testLaunch();