import { renderListWithTemplate } from "./utils.mjs";


function launchCardTemplate(rocket) {

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

  return `
    <article>
    <div class="rocketInfo">
    <h3>Mission: ${rocket.mission.name}</h3>
    <p>Agency: ${rocket.launch_service_provider.name} </p>
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
        `

    ;

}

export default class LaunchList {
  constructor(dataSource, listElement) {

    this.dataSource = dataSource;
    this.listElement = listElement;
  }
  async init() {

    const list = await this.dataSource.getData();
    console.log(list);
    this.renderList(list);

  }
  renderList(list) {
    renderListWithTemplate(launchCardTemplate, this.listElement, list);
  }
}