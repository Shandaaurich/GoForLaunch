
import ExternalServices from "./ExternalServices.mjs";
import { qs, getParams } from "./utils.mjs";

import GiftShop from "./GiftShop.mjs";


const catId = getParams("category");
const catName = getParams("catName");


var titleElement = qs(".single-category");
var title = catName.toString();
title = title[0].toUpperCase() + title.slice(1);
titleElement.textContent = title;

const filteredCatElement = qs(".categories-filtered");
const filteredCatData = new ExternalServices();
const filteredCategories = new GiftShop(filteredCatData, filteredCatElement, catId);
filteredCategories.initFilter()