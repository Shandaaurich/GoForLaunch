import ExternalServices from "./ExternalServices.mjs";
import LaunchList from "./LaunchList.mjs";
import { qs } from "./utils.mjs";

var launches = new ExternalServices();
var listElement = qs(".mission_list");

var list = new LaunchList(launches, listElement);
list.init();
