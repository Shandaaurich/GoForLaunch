import { qs } from "./utils.mjs";


export default class Weather {
  constructor(listElement, latitude, longitude) {
    this.listElement = listElement;
    this.latitude = latitude;
    this.longitude = longitude;
  }

  async init() {

    //use the location information for each launch to format the API URL to pull in weather data for each location and add it to HTMl elements on the page. 
    const weatherURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${this.latitude}&lon=${this.longitude}&appid=946ee3e55995e79e2d6f02d00a3dce79&units=imperial`

    const response = await fetch(weatherURL);

    if (response.ok) {
      const data = await response.json();
      this.weatherTemplate(data);
    }
  }
  weatherTemplate(weather) {

    const temp = weather.current.temp.toFixed(0);
    const description = weather.current.weather[0].description;

    let weatherSpan = qs(".agencyWeather");
    let h4_4 = document.createElement("h3");
    h4_4.innerHTML = `Current weather: ${temp}&#176; F, ${description}`

    weatherSpan.appendChild(h4_4);
  }
}