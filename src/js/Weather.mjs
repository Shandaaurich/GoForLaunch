import { renderListWithTemplate } from "./utils.mjs";

function weatherTemplate(weather) {

      
      const temp = weather.current.temp.toFixed(0);
      const description = weather.current.weather[0].description;

      return `
      <h4> Current weather: ${temp}&#176; F, ${description}</h4>
      `

}

export default class Weather {
      constructor(datasource, listElement, latitude, longitude) {
            this.datasource = datasource;
            this.listElement = listElement;
            this.latitude = latitude;
            this.longitude = longitude;
      }

      async init (){

        //use the location information for each launch to format the API URL to pull in weather data for each location and add it to HTMl elements on the page. 
      //   const weatherURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${this.latitude}&lon=${this.longitude}&appid=946ee3e55995e79e2d6f02d00a3dce79&units=imperial`

        const list = await this.datasource.weather(this.latitude, this.longitude);
        this.renderList(list);

      }
      renderList(list) {
        renderListWithTemplate(weatherTemplate, this.listElement, list);
      }
  }