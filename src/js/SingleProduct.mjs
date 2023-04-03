import { getLocalStorage, setLocalStorage, alertMessage } from "./utils.mjs";
import { updateCartIcon } from "./Cart.mjs";


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
        
        document.getElementById("addToCart")
                .addEventListener("click", this.addToCart.bind(this));
    }

    addToCart() {
        let products = []; // init cart array
        let numberOfItems = 0; //init cart bubble

        if (localStorage.getItem("so-cart")) {
            //if contents in previous array
            products = getLocalStorage("so-cart"); //add old contents to array
        }
        //check to see if item exists in local storage
        const productIndex = products.findIndex(
            (product) => product.Name === this.product.Name
        );
        //if item exists in local storage, remove item, increment quantity
        if (productIndex !== -1) {
            this.product.quantity += 1;
            // console.log(this.product.quantity)
            products.splice(productIndex, 1);
        }
        //add item into cart

        products.push(this.product); // add new content to array
        setLocalStorage("so-cart", products); //push to storage



        numberOfItems = getLocalStorage("numberOfItems");
        numberOfItems += 1
        setLocalStorage("numberOfItems", numberOfItems);
        //update the cart icon bubble text
        updateCartIcon(numberOfItems);
        alertMessage(`Item added to cart! <a href="../cart/index.html">Go to cart</a>`)
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

        let buttonDiv = document.createElement("div");
        buttonDiv.className = "product-detail__add";
        let button = document.createElement("button");
        button.setAttribute("id", "addToCart");
        button.setAttribute("data-id", `"${product.id}"`);
        button.innerHTML = "Add to Cart";
        buttonDiv.appendChild(button);

        prodDiv.appendChild(imgDiv);
        descDiv.appendChild(priceDiv);
        descDiv.appendChild(buttonDiv);
        prodDiv.appendChild(descDiv);
        element.appendChild(prodDiv);

    }
};