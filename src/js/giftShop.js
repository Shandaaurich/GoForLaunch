import GiftShop from "./GiftShop.mjs";
import categoryData from "../public/json/giftShopCat.json";
import productData from "../public/json/giftShopProducts.json";

const category = new GiftShop(categoryData);

category.renderCategoryDetails();

const topProducts = new GiftShop(productData);

topProducts.renderTopProductDetails();