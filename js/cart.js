const cartItems = JSON.parse(localStorage.getItem("cartList"));
const cartContainer = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total");
const cancelButton = document.querySelector('.cancel');

let total = 0;
cartItems.forEach(function(cartElement){
    total += cartElement.price;
    cartContainer.innerHTML +=         
    `<div class="cart-item">
        <img src="${cartElement.image}" class="cart-image" />
        <h4>${cartElement.name}</h4>
        </div>
    `
})
cancelButton.onclick = cancelPurchase;

function cancelPurchase(){
    cartContainer.innerHTML = "";
    localStorage.removeItem("cartList");
    window.location.href = "checkout.html";
}
totalContainer.innerHTML = `Total: $${total}`;

