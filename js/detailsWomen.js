/* import { womensProducts } from "./womens.js"; */
const url = 'https://noroff.tnjensen.com/rainydays_headless/wp-json/wc/store/products/';
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const productId = params.get("id");
const productContainer = document.querySelector(".product-detail");
const product = womensProducts.find(({id}) => id == productId);
const cart = document.querySelector(".cart");
const cartList = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total");
let cartArray = []; 
let counter = 1;
const checkoutButton = document.querySelector('.checkout-btn');

async function getProduct(){
    try{
        let response = await fetch(url + productId);
        let result = await response.json();
        createHTML(result); 
    }
    catch(error){
        console.log(error);
        
    }
}
getProduct();

function createHTML(product){
    console.log(product);
        productContainer.innerHTML = `<h1>${product.name}</h1>
        <p class="product-description">${product.description}</p>      
        <div class="product-detail-item">
            <div class="icons-aside">
                <img src="../images/Icon awesome-skiing.svg" alt="Downhill skier icon">
                <img src="../images/Icon map-cross-country-skiing.svg" alt="cross country skier icon">
                <img src="../images/Icon awesome-hiking.svg" alt="Hiking person icon">
                <img src="../images/Icon ionic-ios-bicycle.svg" alt="Cycling person icon">
            </div>
            <img src="${product.images[0].src}" alt="Illustration of male raincoat">
            <div class="detail-aside">
                <h2>Price: NOK ${product.prices.price}</h2>
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
            //const itemToAdd = mensProducts.find(item => productId === event.target.dataset.product);
            const itemToAdd = product;
            //console.log(product);
            cartArray.push(itemToAdd);
            showCart(cartArray);
            localStorage.setItem("cartList", JSON.stringify(cartArray));
        }
}


    function showCart(cartItems){
        cart.style.display = "flex";
        cartList.innerHTML = "";
        counter = 1;
        let total = 0;
        let newCartList = "";
        cartArray.forEach((cartElement,index) => {
            total += cartElement.prices.price;
        newCartList +=
        `<div class="cart-item">
        <div class="count">${counter}</div>
        <h4>${cartElement.name}</h4>
        <div class="cart-image" style="background-image: url(${cartElement.image})" alt="${cartElement.name}"></div>
        <div>
        <!--<button class="plus"><i class="fa fa-plus"></i></button>
        <button class="minus"><i class="fa fa-minus"></i></button></div>-->       
        <span><i class="fa fa-trash" data-item=${index}"></i></span>
        </div>
        `
        })
        if(cartItems){
        cartList.innerHTML = newCartList;
    }
        const trashCans = document.querySelectorAll('span i');
    
        trashCans.forEach(function(index){
            index.addEventListener('click', deleteItem);
        })
        
        totalContainer.innerHTML = "Total: NOK" + total;
    } 
    function deleteItem(index){
        let getLocalStorageData = localStorage.getItem("cartList");
        if(cartArray.length !== null){
        cartArray = JSON.parse(getLocalStorageData); 
        cartArray.splice(index, 1); //delete the index
        localStorage.setItem("cartList", JSON.stringify(cartArray));
        
        showCart(cartArray);
        }
        if(cartArray.length === 0){
           checkoutButton.href = "women.html";
           checkoutButton.textContent = `Continue shopping`;    
        }
    }
    