import ExternalServices from "./ExternalServices.mjs";
import LaunchList from "./LaunchList.mjs";
import { qs } from "./utils.mjs";

// const category = getParams("category");
// show the list of products
var launches = new ExternalServices();
var listElement = qs(".mission_list");
// var titleElement = qs(".title");
// var title = category.toString();
// title = title[0].toUpperCase() + title.slice(1);
// titleElement.textContent = title;

var list = new LaunchList(launches, listElement);
list.init();
