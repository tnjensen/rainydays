import { womensProducts } from "./womens.js";
const jacketsContainer = document.querySelector('.product-list');

for(var i = 0; i < womensProducts.length; i++){
    let productLink = `<a href="detail-women.html?id=${womensProducts[i].id}" class="cta cta-small">View</a>`;
    if(womensProducts[i].sales === true){
        productLink = `<a href="detail-women.html?id=${womensProducts[i].id}" class="cta cta-small cta-sale">On Sale</a>`;
    }
    jacketsContainer.innerHTML += `<div class="product-list-item">
    <img src="${womensProducts[i].image}" alt="${womensProducts[i].description}" />
    <h2>${womensProducts[i].name}</h2>
    <p>Price: $${womensProducts[i].price}</p>
    ${productLink}
    </div>`
}