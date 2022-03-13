const cartItems = JSON.parse(localStorage.getItem("cartList"));
const cartContainer = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total");
const cancelButton = document.querySelector('.cancel');
const removeButton = document.querySelector('.remove-btn');

let total = 0;
if(localStorage.getItem("cartList") !== null){
    cartItems.forEach(function(cartElement){
        total += cartElement.price;
        cartContainer.innerHTML +=         
        `<div class="cart-item">
            <img src="${cartElement.image}" class="cart-image" />
            <h4>${cartElement.name}</h4>
            </div>`
    })
    removeButton.innerHTML = `<button class="remove cta-small">Remove</button>`;
    totalContainer.innerHTML = `Total: $${total}`;
}

removeButton.onclick = cancelPurchase;

function cancelPurchase(){
    cartContainer.innerHTML = "";
    localStorage.removeItem("cartList");
    window.location.href = "checkout.html";
}
