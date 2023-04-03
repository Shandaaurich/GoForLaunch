import {
    // getLocalStorage,
    // renderListWithTemplate,
    qs,
  } from "./utils.mjs";
  import ShoppingCart from "./ShoppingCart.mjs";
  
  const cart = new ShoppingCart("so-cart", qs(".product-list"));
  cart.init();
  