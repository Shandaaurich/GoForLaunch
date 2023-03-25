import { renderListWithTemplate } from "./utils.mjs";


function agencyCardTemplate(agency) {

  // const temp = weather.current.temp.toFixed(0);
  // const description = weather.current.weather[0].description;
//   let localDate = new Date(agency.window_start);
//   let localDateFormated = localDate.toLocaleString();
//   let now = new Date().getTime();
//   let t = localDate.getTime() - now;
//   let days = Math.floor(t / (1000 * 60 * 60 * 24));
//   let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  // let latitude = agency.pad.latitude;
  // let longitude = agency.pad.longitude;

  //use the location information for each launch to format the API URL to pull in weather data for each location and add it to HTMl elements on the page. 
  // const weatherURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=946ee3e55995e79e2d6f02d00a3dce79&units=imperial`


  
  return `
  <article class="agency-article">
  <div class="agencyInfo">
  <h3>Mission: ${agency.name}</h3>`


    ;

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