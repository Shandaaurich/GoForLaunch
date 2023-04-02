import ExternalServices from "./ExternalServices.mjs";
import Agency from "./Agency.mjs";
import { qs, getParams } from "./utils.mjs";

const agencyName = getParams("agencyName");

var titleElement = qs(".agencyName");
var title = agencyName.toString();
title = title[0].toUpperCase() + title.slice(1);
titleElement.textContent = title;

var agency = new ExternalServices();
var listElement = qs(".agency-launches");

var list = new Agency(agency, listElement, agencyName);
list.init();
