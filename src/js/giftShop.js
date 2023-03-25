
import { qs, getParams } from "./utils.mjs";

import GiftShop from "./GiftShop.mjs";
import ProductCategories from "./ProductCategories.mjs";
import categoryData from "../public/json/giftShopCat.json";
import productData from "../public/json/giftShopProducts.json";


//category list on giftshop index page
const category = new GiftShop(categoryData);

category.renderCategoryDetails();

//top products list on GiftShop index page
const topProducts = new GiftShop(productData);

topProducts.renderTopProductDetails();

//product listing by category on category index page
const singleCategory = getParams("category");
const element = qs(".single-category")

const singleCategories = new ProductCategories(singleCategory, element);

singleCategories.getProductByCategoryId();

// const titleElement = qs("#single-category");
// let title = singleCategory.toString();
// title = title[0].toUpperCase() + title.slice(1);
// titleElement.textContent = title;