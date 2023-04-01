import { renderListWithTemplate } from "./utils.mjs";


function launchCardTemplate(rocket) {


  let localDate = new Date(rocket.window_start);
  let localDateFormated = localDate.toLocaleString();
  let now = new Date().getTime();
  let t = localDate.getTime() - now;
  let days = Math.floor(t / (1000 * 60 * 60 * 24));
  let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));


  return `
  <article class="rocket-article">
  <div class="rocketInfo">
  <h3>Mission: ${rocket.name}</h3>
  <p> Agency: <strong>${rocket.launch_service_provider.name}</strong> </p>

  <p>Rocket: <strong>${rocket.name}</strong> </p>
  <p>Location: <strong>${rocket.pad.location.name}</strong> </p>  

  </div>              
  <div class="rocketImg">
  <img src="${rocket.image}" alt="${rocket.name} ">
  </div>
  <div class="rocketCountdown">

  <h3>Expected Launch Date: </h3>
  <p>${localDateFormated} Local</p>
  <h3>Countdown to liftoff: </h3>
  <p>${days} days and ${hours} hours.</p> 
  <h3>Launch status: </h3>
  <p>${rocket.status.name}</p>
  </div>
  <div class="agencyPara">
  <a href="./agency/index.html?agencyId=${rocket.launch_service_provider.id}&agencyName=${rocket.launch_service_provider.name}&lat=${rocket.pad.latitude}&lon=${rocket.pad.longitude}">
  <p>Click <strong>here</strong> to learn more about ${rocket.launch_service_provider.name}'s upcoming launches</p>
  </a>
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
    this.renderList(list);

  }
  renderList(list) {
    renderListWithTemplate(launchCardTemplate, this.listElement, list);
  }

  
}