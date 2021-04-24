import { mensProducts } from "./mens.js";
const jacketsContainer = document.querySelector('.product-list');

for(var i = 0; i < mensProducts.length; i++){
    let productLink = `<a href="detail-men.html?id=${mensProducts[i].id}" class="cta cta-small">View</a>`;
    if(mensProducts[i].sales === true){
        productLink = `<a href="detail-men.html?id=${mensProducts[i].id}" class="cta cta-small cta-sale">On Sale</a>`;
    }
    jacketsContainer.innerHTML += `<div class="product-list-item">
    <img src="${mensProducts[i].image}" alt="${mensProducts[i].description}" />
    <h2>${mensProducts[i].name}</h2>
    <h3>${mensProducts[i].description}</h3>
    <p>Price: $${mensProducts[i].price}</p>
    ${productLink}
    </div>`
}