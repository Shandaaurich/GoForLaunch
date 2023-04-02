import Weather from "./Weather.mjs";
import { qs, getParams } from "./utils.mjs";

const latitude = getParams("lat");
const longitude = getParams("lon");

// var titleElement = qs(".agencyName");
// var title = agencyName.toString();
// title = title[0].toUpperCase() + title.slice(1);
// titleElement.textContent = title;

var listElement = qs(".agencyWeather");

var weather = new Weather(listElement, latitude, longitude);
weather.init();
