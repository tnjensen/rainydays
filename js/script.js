var links = document.querySelector('nav a [href="'+document.URL+'"]');

for (var i = 0; i < document.links.length; i++) {
    if (document.links[i].href == document.URL) {
        document.links[i].className = 'active';
    }
}
//This gets the entire html with tags and doctype
/* var doc = new XMLSerializer().serializeToString(document); */
var markup = document.documentElement.outerHTML;
/* console.log(markup); */
var searchBtn = document.querySelector('.fa-search');

/* console.log(searchInput); */
var searchTerm = document.querySelector('.search-term');
var searchResult = document.querySelector('.search-results');

function displaySearch(){
  var searchInput = document.getElementById('searchInput').value;
  /* alert(searchInput); */
  /* console.log(searchInput); */
  
  searchResult.innerHTML = searchInput;
  searchTerm.innerHTML = `"${searchInput}"`;
}
searchBtn.onclick = displaySearch;

  /* for(let i = 0; i < markup.length; i++){
    if(!markup[i].innerHTML.toLowerCase.includes(searchInput)){
      searchResult.innerHTML = "";
    }
    else{
      searchResult.innerHTML = `<div class="search-results>${doc[i]}</div>">`;
    }
  } */

/* $(document).ready(function(){
  var arrowLogin = $(".arrow-up-login");
  var arrowRegister = $(".arrow-up-register");
  var arrowCart = $(".arrow-up-cart");
  var login = $(".login-form");
  var register = $(".register-form");
  var cart = $(".cart-form");
  var status = false;
  $("#login").click(function(event){
    event.preventDefault();
    if(status == false){
      arrowLogin.fadeIn();
      login.fadeIn();
      status = true;
    }else{
      arrowLogin.fadeOut();
      login.fadeOut();
      status = false;
    }
  })
  $("#register").click(function(event){
    event.preventDefault();
    if(status == false){
      arrowRegister.fadeIn();
      register.fadeIn();
      status = true;
    }else{
      arrowRegister.fadeOut();
      register.fadeOut();
      status = false;
    }
  })
  $("#cart").click(function(event){
    event.preventDefault();
    if(status == false){
      arrowCart.fadeIn();
      cart.fadeIn();
      status = true;
    }else{
      arrowCart.fadeOut();
      cart.fadeOut();
      status = false;
    }
  })
}) */


