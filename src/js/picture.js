import ExternalServices from "./ExternalServices.mjs";
import Picture from "./Picture.mjs";
import { qs } from "./utils.mjs";

var pictures = new ExternalServices();
var listElement = qs(".pictureSection");

var list = new Picture(pictures, listElement);
list.init();
