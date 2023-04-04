import { initCartIcon } from "./Cart.mjs";
import { loadHeaderFooter, loadGiftHeaderFooter, loadNavbar } from "./utils.mjs";

//call header and footer and navBar from the template
loadHeaderFooter();
loadGiftHeaderFooter(null, initCartIcon);

loadNavbar();
