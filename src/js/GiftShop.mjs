
import { qs } from "./utils.mjs";

export default class GiftShop {
  constructor(dataSource) {
    this.dataSource = dataSource;
  }

  renderCategoryDetails() {
    //select the element of the page and prepend the category section to it
    const element = qs(".product-categories");
    element.prepend(categoryTemplate(this.dataSource));
  }
  renderTopProductDetails() {
    //select the element of the page and prepend the top products section to it
    const element = qs(".product-top");
    element.prepend(topProductTemplate(this.dataSource));
  }

  async renderSingleCategoryDetails(categoryId) {
    const element = qs(".single-category");
    const products = this.dataSource.getProductByCategoryId(categoryId)
    element.prepend(topProductTemplate(products));
  }
}
function topProductTemplate(products) {    
  const prodSection = document.createElement("section");
  prodSection.classList.add("product-section");
  products.slice(0,9).forEach(product => {

    const prod_div = document.createElement("div");
    prod_div.classList.add("category");
    prod_div.setAttribute("id", `${product.title}category`);

    const prod_anchor = document.createElement("a");
    prod_anchor.setAttribute("href", `./product-pages/index.html?product=${product.name}`);

    const prod_img = document.createElement("img");
    prod_img.classList.add("gifts");
    prod_img.setAttribute("src", product.category.image);
    prod_img.setAttribute("alt", `"${product.title} Products"`);

    const prod_h2 = document.createElement("h2");
    prod_h2.innerText = `Space ${product.title}`;

    prod_anchor.appendChild(prod_img);
    prod_anchor.appendChild(prod_h2);
    prod_div.appendChild(prod_anchor);

    prodSection.appendChild(prod_div);
});
return prodSection;
}
function categoryTemplate(categories) {    
    const catSection = document.createElement("section");
    catSection.classList.add("category-section");
    categories.slice(0,8).forEach(category => {

      const cat_div = document.createElement("div");
      cat_div.classList.add("category");
      cat_div.setAttribute("id", `${category.name}category`);

      const cat_anchor = document.createElement("a");
      cat_anchor.setAttribute("href", `./product-listing/index.html?category=${category.id}`);

      const cat_img = document.createElement("img");
      cat_img.classList.add("gifts");
      cat_img.setAttribute("src", category.image);
      cat_img.setAttribute("alt", `"${category.name} Products"`);

      const cat_h2 = document.createElement("h2");
      cat_h2.innerText = `Space ${category.name}`;

      cat_anchor.appendChild(cat_img);
      cat_anchor.appendChild(cat_h2);
      cat_div.appendChild(cat_anchor);

      catSection.appendChild(cat_div);
});
return catSection;
}



