import Weather from "./Weather.mjs";
import { qs, getParams } from "./utils.mjs";

const latitude = getParams("lat");
const longitude = getParams("lon");

var listElement = qs(".agencyWeather");

var weather = new Weather(listElement, latitude, longitude);
weather.init();
