import ExternalServices from "./ExternalServices.mjs";
import { qs, getParams } from "./utils.mjs";
import SingleProduct from "./SingleProduct.mjs";


const productId = getParams("product");
console.log(productId);
const prodName = getParams("prodName");


var titleElement = qs(".productIdName");
var title = prodName.toString();
title = title[0].toUpperCase() + title.slice(1);
titleElement.textContent = title;

const productElement = qs(".product");
const product = new SingleProduct(productElement, productId);
product.productById()