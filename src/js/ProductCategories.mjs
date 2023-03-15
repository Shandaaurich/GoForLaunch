import { renderListWithTemplate } from "./utils.mjs";

function productCardTemplate(category) {

    return `<li id="category">
        <a href="./product-listing/index.html?category=${category}">
        <img src="public/images/products/${category}.jpg" alt="${category} Products" />
        <h2>${category}</h2>
      </a>
    </li>
    `

}

export default class ProductCategory {
  constructor(dataSource, listElement) {
    // We passed in this information to make our class as reusable as possible.
    // Being able to define these things when we use the class will make it very flexible
    this.dataSource = dataSource;
    this.listElement = listElement;
  }
  async init() {
    // our dataSource will return a Promise...so we can use await to resolve it.
    const list = await this.dataSource.getProductCategories();

    this.renderList(list);

  }
  renderList(list) {
    renderListWithTemplate(productCardTemplate, this.listElement, list);
  }
}


