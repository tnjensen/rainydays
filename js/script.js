var links = document.querySelector('nav a [href="'+document.URL+'"]');
const dropItem = document.querySelectorAll('.has-dropdown');
const menuBtn = document.querySelector('.menu-icon');
const year = document.querySelector('#year');
const createdYear = 2021; 

let date = new Date().getFullYear();
if( date > createdYear){
  year.innerHTML =  `${createdYear} - ` + date;
}else{
  year.innerHTML = date;
}

for (var i = 0; i < document.links.length; i++) {
    if (document.links[i].href == document.URL) {
        document.links[i].className = 'active';
    }
}

dropItem.forEach( item =>{
  item.addEventListener('click', function(event){
    item.classList.toggle('visible');

    // Ensure only one dropdown open 
    for (var i = 0; i < dropItem.length; i++) {

      // If the item is the one clicked, skip it
      if (dropItem[i] === event.target) continue;
  
      dropItem[i].classList.remove('visible');
    }
  })
});

/* Close dropdown when clicking outside */
window.addEventListener('mouseup', function(event){
   if(!event.target.closest('.secondary-nav')){
        for (var i = 0; i < dropItem.length; i++) {
        dropItem[i].classList.remove('visible');
        }
      }
  if(!event.target.closest('.menu-icon')){
    menuBtn.classList.remove('visible');
  }
})

menuBtn.addEventListener('click', function(event){
  menuBtn.classList.toggle('visible');
 /*  console.log(event.target); */
})
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


