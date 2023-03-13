import { qs } from "./utils.mjs";

const launchURL = "https://lldev.thespacedevs.com/2.2.0/launch/upcoming?format=json";
// const launchURL = "https://ll.thespacedevs.com/2.2.0/launch/upcoming/?format=json";

const missionOutput = qs(".mission_list")

function launchCardTemplate(rockets) {

    rockets.forEach(async rocket => {
        // const temp = weather.current.temp.toFixed(0);
        // const description = weather.current.weather[0].description;
        let localDate = new Date(rocket.window_start);
        let localDateFormated = localDate.toLocaleString();
        console.log(rocket.mission.name);
        console.log(rocket.launch_service_provider.name);
        // let latitude = rocket.pad.latitude;
        // let longitude = rocket.pad.longitude;
        let now = new Date().getTime();
        let t = localDate.getTime() - now;
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        let launchTemplate = `
    <article class="rocket-article">
    <div class="rocketInfo">
    <h3>Mission: ${rocket.mission.name}</h3>
    <p><a href="${rocket.launch_service_provider.url}"> Agency: ${rocket.launch_service_provider.name} </a></p>
    <p>Rocket: ${rocket.name} </p>
    <p>Location: ${rocket.pad.location.name} </p>
    </div>
    <div class="rocketImg">
    <img src="${rocket.image}" alt="${rocket.name} ">
    </div>
    <div id="rocketCountdown">
   
    <h3>Expected Launch Date: 
    ${localDateFormated}</h3>
    <h3>Countdown to liftoff: 
    ${days} days and ${hours} hours. 
        Launch status: ${rocket.status.name}</h3>
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
        console.log(data.results);
        launchCardTemplate(data.results)
    }
}
testLaunch();