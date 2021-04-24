import { mensProducts } from "./mens.js";
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const productId = params.get("id");
const productContainer = document.querySelector(".product-detail");
const product = mensProducts.find(({id}) => id == productId);
const cart = document.querySelector(".cart");
const cartList = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total");
let cartArray = []; 

productContainer.innerHTML = `<h1>${product.name}</h1>
<p class="product-description">${product.description}</p>      
<div class="product-detail-item">
    <div class="icons-aside">
        <img src="../images/Icon awesome-skiing.svg" alt="Downhill skier icon">
        <img src="../images/Icon map-cross-country-skiing.svg" alt="cross country skier icon">
        <img src="../images/Icon awesome-hiking.svg" alt="Hiking person icon">
        <img src="../images/Icon ionic-ios-bicycle.svg" alt="Cycling person icon">
    </div>
    <img src="${product.image}" alt="Illustration of male raincoat">
    <div class="detail-aside">
        <h2>Price: $${product.price}</h2>
        <div class="detail-counter-aside">
        <button class="counter-minus-btn"><h2>-</h2></button>
        <h2 class="counter">1</h2>
        <button class="counter-plus-btn"><h2>+</h2></button>
        </div>
        <div>
        <button class="addcart cta-small" data-product="${productId}">Add to Cart</button>
        </div>
    </div>`

    const button = document.querySelector(".addcart");

    button.onclick = function(event){
        const itemToAdd = mensProducts.find(item => productId === event.target.dataset.product);
        //console.log(event.target.dataset.product);
        cartArray.push(itemToAdd);
        showCart(cartArray);
        localStorage.setItem("cartList", JSON.stringify(cartArray));
    }

function showCart(cartItems){
    cart.style.display = "flex";
    cartList.innerHTML = "";
    let total = 0;
    cartItems.forEach(function(cartElement){
        total += cartElement.price;
        cartList.innerHTML += 
        `<div class="cart-item">
            <h4>${cartElement.name}</h4>
            <img src="${cartElement.image}" class="cart-image"></div>
        </div>
        `
    })
    totalContainer.innerHTML = `Total: $${total}`;
}