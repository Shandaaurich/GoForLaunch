import ExternalServices from "./ExternalServices.mjs";
import Agency from "./Agency.mjs";
import { qs, getParams } from "./utils.mjs";

const agencyName = getParams("agencyName");
const agencyId = getParams("agencyId");
console.log(agencyName);
console.log(agencyId);

var titleElement = qs(".agencyName");
var title = agencyName.toString();
title = title[0].toUpperCase() + title.slice(1);
titleElement.textContent = title;


var agency = new ExternalServices();
var listElement = qs(".mission_list");


var list = new Agency(agency, listElement, agencyId);
list.init();