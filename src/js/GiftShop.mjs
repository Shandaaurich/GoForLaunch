import { renderListWithTemplate } from "./utils.mjs";

export default class GiftShop {
  constructor(dataSource, listElement, categoryId) {
    this.dataSource = dataSource;
    this.listElement = listElement;
    this.categoryId = categoryId;
  }

  async initCat() {
    const list = await this.dataSource.prodCategories();
    this.renderCategoryDetails(list);
  }

  async initTop() {
    const list = await this.dataSource.allProducts();
    this.renderTopProductDetails(list)
  }

  async initFilter() {
    const list = await this.dataSource.filteredCategories(this.categoryId)
    this.renderFilteredCategoryDetails(list)
  }

  renderCategoryDetails(list) {
    renderListWithTemplate(categoryTemplate, this.listElement, list);
  }
  
  renderTopProductDetails(list) {
    renderListWithTemplate(topProductTemplate, this.listElement, list);
  }

  renderFilteredCategoryDetails(list) {
    renderListWithTemplate(filteredCategoryTemplate, this.listElement, list);
  }
};


function categoryTemplate(category) { 
  return `
  <section class="category-section">
  <div class="category" id="$${category.name}category">
  <a href="../category-listing/index.html?category=${category.id}&catName=${category.name}">
  <img src="${category.image}" alt="${category.name} Products"/>
  <h2>Space ${category.name}</h2>
  </a>
  </div>
  </section>
  `  
};


function topProductTemplate(product) {    

  return `
  <section class="product-section">
  <div class="category" id="${product.title}category">
  <a href="./product-pages/index.html?product=${product.name}">
  <img src="${product.category.image}" alt="${product.title} Products"/>
  <h2>Space ${product.title}</h2>
  </a>
  </div>
  </section>
  `
};

function filteredCategoryTemplate(products) {

  return `
  <section class="product-section">
  <div class="category" id="${products.title}category">
  <a href="../category-listing/index.html?product=${products.name}">
  <img src="${products.category.image}" alt="${products.title} Products"/>
  <h2>Space ${products.title}</h2>
  </a>
  </div>
  </section>
  `
}


