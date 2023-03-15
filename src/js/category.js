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

const fakeStoreAPI = "https://fakestoreapi.com/products/categories";

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

    const response = await fetch(fakeStoreAPI)
    if (response.ok) {
        const data = await response.json();
        console.log(data)
        categoryTemplate(data)
    }
}
categoryList();