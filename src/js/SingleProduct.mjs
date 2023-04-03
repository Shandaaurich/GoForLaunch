
export default class SingleProduct {
    constructor(listElement, productId) {
        this.listElement = listElement;
        this.productId = productId;
    }



    async productById() {
        const productURL = `https://api.escuelajs.co/api/v1/products/${this.productId}`;

        const response = await fetch(productURL);

        if (response.ok) {
            const data = await response.json();
            this.productByIdTemplate(data);
        }
    }

    productByIdTemplate(product) {
        let element = this.listElement;
        let prodDiv = document.createElement("div");
        prodDiv.className = "single-product";

        let imgDiv = document.createElement("div")
        imgDiv.className = "productImg"
        let img = document.createElement("img");
        img.setAttribute("src", "https://placeimg.com/640/480/any?r=0.9178516507833767");
        img.setAttribute("alt", product.title);
        imgDiv.appendChild(img);

        let descDiv = document.createElement("div");
        descDiv.className = "product-desc"
        let descP = document.createElement("p");
        let description = product.description;
        descP.innerHTML = description;
        descDiv.appendChild(descP);

        let priceDiv = document.createElement("div");
        let priceP = document.createElement("p");
        let price = product.price;
        priceP.innerHTML = `$${price}.00`;
        priceDiv.appendChild(priceP);

        prodDiv.appendChild(imgDiv);
        descDiv.appendChild(priceDiv);
        prodDiv.appendChild(descDiv);
        element.appendChild(prodDiv);


        
//         `
//             <section class="product-section">
//             <div class="category" id="${product.title}category">
//             <a href="../singleProduct/index.html?product=${product.id}">
//             <img src="${product.category.image}" alt="${product.title} Products"/>
//             <h2>Space ${product.title}</h2>
//             </a>
//             </div>
//             </section>
//   `
    }
};