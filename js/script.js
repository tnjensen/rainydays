var links = document.querySelector('nav a [href="'+document.URL+'"]');

for (var i = 0; i < document.links.length; i++) {
    if (document.links[i].href == document.URL) {
        document.links[i].className = 'active';
    }
}

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


