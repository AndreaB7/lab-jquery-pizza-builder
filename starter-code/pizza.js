// Write your Pizza Builder JavaScript in this file.

$(document).ready(function() {

  var price = 13;
  var activeItems = [];

// DEFAULT SETTINGS
$('.crust').removeClass('crust-gluten-free');
$(".crust section:nth-child(2)").removeClass("sauce-white");

$(".btn-sauce").toggleClass("active");
$(".btn-crust").toggleClass("active");

$(".panel.price li:nth-child(4)").toggle();
$(".panel.price li:nth-child(5)").toggle();

$(".panel.price strong").html("$" + price);

// END DEFAULT SETTINGS


//quitar clase acive de white-sauce
//"" ""  crust-gluten-free


//// iteration 1

 // PROCESO INDUCTIVO DETALLADO
  // El usuario hace click en el boton  --------- DONE
  $(".btn-green-peppers").click(function(){
    $(".green-pepper").toggle();
    // Reviso si el boton tiene la clase .active ------- DONE
    $(".btn-green-peppers").toggleClass("active");
    $(".panel.price li:nth-child(3)").toggle();

    // Si la tiene :   le añado a la variable Price el ingrediente
    if ($(".btn-green-peppers").hasClass("active")) {
      price++
      //price+= 1
      //price = price + 1
      console.log("true: The prices is" + price);
    }
    // Si no la tiene:  le quito;
    else {
      price--
      console.log("false: The prices is" + price);
    }
    // Print el valor nuevo en el html
    $(".panel.price strong").html("$" + price);


    // PROCESO DEDUCTIVO
    // Calcular precio
    // Sumar items
    // Activar items
    // Clicar botón

  });

   // console.log("You clicked the button!");
  $(".btn-mushrooms").click(function(){
    $(".mushroom").toggle();
    $(".btn-mushrooms").toggleClass("active");
    $(".panel.price li:nth-child(2)").toggle();

    // Si la tiene :   le añado a la variable Price el ingrediente
    if ($(".btn-mushrooms").hasClass("active")) {
      price++
      //price+= 1
      //price = price + 1
      console.log("true: The prices is" + price);
    }
    // Si no la tiene:  le quito;
    else {
      price--
      console.log("false: The prices is" + price);
    }
    // Print el valor nuevo en el html
    $(".panel.price strong").html("$" + price);
  });


  $(".btn-pepperonni").click(function(){
    $(".pep").toggle();
    $(".btn-pepperonni").toggleClass("active");
    $(".panel.price li:nth-child(1)").toggle();

    // Si la tiene :   le añado a la variable Price el ingrediente
    if ($(".btn-pepperonni").hasClass("active")) {
      price++
      //price+= 1
      //price = price + 1
      console.log("true: The prices is" + price);
    }
    // Si no la tiene:  le quito;
    else {
      price--
      console.log("false: The prices is" + price);
    }
    // Print el valor nuevo en el html
    $(".panel.price strong").html("$" + price);


  });


  $(".btn-sauce").click(function(){
    $(".crust section:nth-child(2)").toggleClass("sauce-white");
    $(".btn.btn-sauce").toggleClass("active");
    $(".panel.price li:nth-child(4)").toggle();

    // Si la tiene :   le añado a la variable Price el ingrediente
    if ($(".btn-sauce").hasClass("active")) {
      price+=3

      console.log("true: The prices is" + price);
    }
    // Si no la tiene:  le quito;
    else {
      price-=3
      console.log("false: The prices is" + price);
    }
    // Print el valor nuevo en el html
    $(".panel.price strong").html("$" + price);

  });


  $(".btn-crust").click(function(){
    $(".crust").toggleClass('crust-gluten-free');
    $(".btn-crust").toggleClass("active");
    $(".panel.price li:nth-child(5)").toggle();


   // Si la tiene :   le añado a la variable Price el ingrediente
    if ($(".btn-crust").hasClass("active")) {
      price+=5

      console.log("true: The prices is" + price);
    }
    // Si no la tiene:  le quito;
    else {
      price-=5
      console.log("false: The prices is" + price);
    }
    // Print el valor nuevo en el html
    $(".panel.price strong").html("$" + price);

  });

});

function calculatePrice(activeItems){
}













