// import { getParams, 
//     // loadHeaderFooter
//  } from "./utils.mjs";
// import ExternalServices from "./ExternalServices.mjs";
// import ProductCategory from "./ProductCategories.mjs";
// // import { initCartIcon } from "./Cart.mjs";

// const dataSource = new ExternalServices();
// const category = new ProductCategory(dataSource, ".product-categories");
// category.init();

// // loadHeaderFooter(null);


import { qs } from "./utils.mjs";

const fakeStoreAPIcat = "https://fakestoreapi.com/products/categories";
const fakeStoreAPItop = "https://fakestoreapi.com/products?limit=8";

const categoryOutput = qs(".product-categories");

function categoryTemplate(categories) {

    categories.forEach(async category => {

        let catTemplate = `
        <li class ="category" id="category">
        <a href="./product-listing/index.html?category=${category}">
        <img class="gifts" src="/images/products/${category}.jpg" alt="${category} Products" />
        <h2>${category}</h2>
        </a>
        </li>
        `;
        categoryOutput.insertAdjacentHTML("afterbegin", catTemplate)
    });
}

async function categoryList() {

    const response = await fetch(fakeStoreAPIcat)
    if (response.ok) {
        const data = await response.json();
        categoryTemplate(data)
    }
}

categoryList();

const topOutput = qs(".product-top");

function topTemplate(topProducts) {

    topProducts.forEach(async product => {

        let productTemplate = `
        <li class ="category" id="category">
        <a href="./product-listing/index.html?category=${product.id}">
        <img class="gifts" src="${product.image}" alt="${product} Products" />
        <h2>${product.title}</h2>
        </a>
        </li>
        `;
        topOutput.insertAdjacentHTML("afterbegin", productTemplate)
    });
}

async function topProductsList() {

    const response = await fetch(fakeStoreAPItop)
    if (response.ok) {
        const data = await response.json();
        topTemplate(data)
    }
}
topProductsList();
