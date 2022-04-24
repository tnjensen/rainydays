/* import { womensProducts } from "./womens.js"; */
const url = 'https://noroff.tnjensen.com/rainydays_headless/wp-json/wc/store/products';
const productContainer = document.querySelector('.product-list');

/* for(var i = 0; i < womensProducts.length; i++){
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
} */
async function getProducts(){
    try{
        let response = await fetch(url);
        let results = await response.json();
        createHTML(results); 
    }
    catch(error){
        console.log(error);
        
    }
}
getProducts();

function createHTML(products){
    console.log(products);
   products.forEach(function(product){
       if(product.categories[0].name === "Female"){
        let productLink = `<a href="detail-men.html?id=${product.id}" class="cta cta-small">View</a>`;
        
        if(product.sales === true){
            productLink = `<a href="detail-men.html?id=${product.id}" class="cta cta-small cta-sale">On Sale</a>`;
        }
        productContainer.innerHTML += 
        `<div class="product">
           <h3>${product.name}</h3>
           <img src="${product.images[0].src}" alt="${product.name}">
           <p>${product.short_description}</p>
           <p class="product-price"><b>Price: NOK ${product.prices.price}</b></p>
           <p>${productLink}</p>
       </div>`;
       }
   })
}