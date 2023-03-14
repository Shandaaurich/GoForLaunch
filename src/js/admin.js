import Admin from "./Admin.mjs";
// import { initCartIcon } from "./Cart.mjs";
import { loadHeaderFooter, loadNavbar } from "./utils.mjs";

//const outputSelector = qs("#loginForm");

// loadHeaderFooter(null, initCartIcon);
loadHeaderFooter(null);
loadNavbar();

const myAdmin = new Admin("main");

myAdmin.showlogin();