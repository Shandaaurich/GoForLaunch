import ExternalServices from "./ExternalServices.mjs";
import Weather from "./Weather.mjs";
import { qs, getParams } from "./utils.mjs";

const latitude = getParams("lat");
const longitude = getParams("lon");

// var titleElement = qs(".agencyName");
// var title = agencyName.toString();
// title = title[0].toUpperCase() + title.slice(1);
// titleElement.textContent = title;


var agency = new ExternalServices();
var listElement = qs(".agencyWeater");


var list = new Weather(agency, listElement, latitude, longitude);
list.init();