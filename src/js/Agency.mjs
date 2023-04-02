import { renderListWithTemplate } from "./utils.mjs";


function agencyCardTemplate(agency) {

    let localDate = new Date(agency.window_start);
    let localDateFormated = localDate.toLocaleString();
    let now = new Date().getTime();
    let t = localDate.getTime() - now;
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));


  return `
  <article class="rocket-article">
  <div class="rocketInfo">
  <h3>Mission: ${agency.name}</h3>
  <p> Agency: <strong>${agency.launch_service_provider.name}</strong> </p>

  <p>Rocket: <strong>${agency.name}</strong> </p>
  <p>Location: <strong>${agency.pad.location.name}</strong> </p>  

  </div>              
  <div class="rocketImg">
  <img src="${agency.image}" alt="${agency.name} ">
  </div>
  <div class="rocketCountdown">

  <h3>Expected Launch Date: </h3>
  <p>${localDateFormated} Local</p>
  <h3>Countdown to liftoff: </h3>
  <p>${days} days and ${hours} hours.</p> 
  <h3>Launch status: </h3>
  <p>${agency.status.name}</p>
  </div>
  <div class="agencyPara">
  <a href="./agency/index.html?agencyId=${agency.launch_service_provider.id}&agencyName=${agency.launch_service_provider.name}">
  </a>
  </div>
  </article>
        `;

}

export default class Agency {
  constructor(dataSource, listElement, agencyId) {

    this.dataSource = dataSource;
    this.listElement = listElement;
    this.agencyId = agencyId;
  }
  async init() {
    const list = await this.dataSource.agencyData(this.agencyId);
    this.renderList(list);

  }
  renderList(list) {
    renderListWithTemplate(agencyCardTemplate, this.listElement, list);
  }
}