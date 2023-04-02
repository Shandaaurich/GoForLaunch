import ExternalServices from "./ExternalServices.mjs";
import { qs } from "./utils.mjs";

import GiftShop from "./GiftShop.mjs";


const catElement = qs(".product-categories");
const catData = new ExternalServices();
const category = new GiftShop(catData, catElement);
category.initCat();

const topElement = qs(".product-top");
const topData = new ExternalServices();
const topProducts = new GiftShop(topData, topElement);
topProducts.initTop();

