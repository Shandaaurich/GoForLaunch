import { renderListWithTemplate } from "./utils.mjs";

export default class ProductList {
  constructor(category, dataSource, listElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }
  async init() {
    // our dataSource will return a Promise...so we can use await to resolve it.
    const list = await this.dataSource.getData(this.category);

    console.log(list);
    this.renderList(list);

  }
  renderList(list) {
    renderListWithTemplate(productCardTemplate, this.listElement, list);
  }
}

function productCardTemplate(products) {

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
    prod_h2.innerText = product.title;

    prod_anchor.appendChild(prod_img);
    prod_anchor.appendChild(prod_h2);
    prod_div.appendChild(prod_anchor);

    prodSection.appendChild(prod_div);
});

}


