const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const productId = params.get("id");
const productContainer = document.querySelector(".product-detail");

const product = womensProducts.find(({id}) => id == productId);

productContainer.innerHTML = `<h1>Title</h1>
<p class="product-description">Description</p>      
<div class="product-detail-item">
    <div class="icons-aside">
    <img src="../images/Icon awesome-skiing.svg" alt="Downhill skier icon">
    <img src="../images/Icon map-cross-country-skiing.svg" alt="cross country skier icon">
    <img src="../images/Icon awesome-hiking.svg" alt="Hiking person icon">
    <img src="../images/Icon ionic-ios-bicycle.svg" alt="Cycling person icon">
    </div>
    <img src="images/raincoat_female_large.png" alt="Illustration of female raincoat">
    <div class="detail-aside">
        <p>Rating, store</p>
        <p>Article No.</p>
        <h2>$ Price</h2>
        <div class="detail-counter-aside">
        <button class="counter-minus-btn"><h2>-</h2></button>
        <h2 class="counter">1</h2>
        <button class="counter-plus-btn"><h2>+</h2></button>
        </div>
        <div>
        <a href="cart.html" class="addcart cta-small">Add to Cart</a>
        </div>
    </div>`