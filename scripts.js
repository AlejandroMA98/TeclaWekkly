$(document).ready(() => {
  $('#ejecutar').on('click', function (event) {
      event.preventDefault();
      $('.caja').show();
      $('.caja2').hide();
    });
    $('#ejecutar2').on('click', function (event) {
      event.preventDefault();
      $('.caja2').show();
      $('.caja').hide();
    });
  
    $('#cart').on('click', function (event) {
      event.preventDefault();
      $('#cart-items').show();
    });
  
    $('#close').on('click', function (event) {
      event.preventDefault();
      $('#cart-items').hide();
    });
  

  const indexpro = () => {
      $.ajax({
          url: `https://api.mercadolibre.com/sites/MLM/search?q=Computación`,
          type: 'GET',
          crossDomain: true,
          datatype: 'json',
          success: function (response) {
              for (var i = 0; i <= 11; i++) {
                  var photo = response.results[i].thumbnail;
                  console.log(photo);

                  var titleProduct = response.results[i].title;
                  var priceProduct = '$' + '' + response.results[i].price;
                  var template = `
                  <div class="card h-100 simpleCart_shelfItem" style="width: 22rem; margin-top: 19px; padding-bottom: 1rem; padding-top: 1rem;">
                       <img class="card-img-top item_image" width="200" height="300"  src="${photo}" alt="...">
                            <div class="card-body">
                                   <h5 class="card-title"></h5>
                                   <p class="card-text item_name">${titleProduct}</p>
                                   <p class="card-text item_price"">${priceProduct}</p>
                                   
                               </div>
                               <input class="item_Quantity" type="number" min="1" max="10" value="1"/>
                               <a style="background-color: rgb(255, 196, 0);" class="btn btn-block item_add" href="javascript:;"> Añadir al carrito </a>
                     </div>`;

                  $('#index').append(template);
              };
          }
      }).done((response) => {
          console.log(response);
          console.log(response.results["0"].thumbnail);
      });
  }
  indexpro();
  
  const productos1 = () => {
    $.ajax({
        url: `https://api.mercadolibre.com/sites/MLM/search?q=Computacion`,
        type: 'GET',
        crossDomain: true,
        datatype: 'json',
        success: function (response) {
            for (var i = 0; i <= 20; i++) {
                var photo = response.results[i].thumbnail;
                console.log(photo);

                var titleProduct = response.results[i].title;
                var priceProduct = '$' + '' + response.results[i].price;
                var template = `
                <div class="card" style="width: 18rem; margin-top: 20px;">
                      <div class="card-body">
                          <img class="card-img-top" style="width: 10rem;" src="${photo}" alt="Card image cap">
                          <h5 class="card-title">${titleProduct}</h5>
                          <p class="card-text">${priceProduct}</p>
                          <a href="#" class="btn btn-primary" style="background-color:#77a8a8"><i class="fas fa-cart-plus"></i></a>  
                          <div id="paypal-button"></div>                          
                      </div>
                   </div>`;

                $('#productos1').append(template);
            };
        }
    }).done((response) => {
        console.log(response);
        console.log(response.results["0"].thumbnail);
    });
}
productos1();

const productos = () => {
    $.ajax({
        url: `https://api.mercadolibre.com/sites/MLM/search?q=Consolas y Videojuegos`,
        type: 'GET',
        crossDomain: true,
        datatype: 'json',
        success: function (response) {
            for (var i = 0; i <= 20; i++) {
                var photo = response.results[i].thumbnail;
                console.log(photo);

                var titleProduct = response.results[i].title;
                var priceProduct = '$' + '' + response.results[i].price;
                var template = `<div class="card" style="width: 18rem; margin-top: 20px;">
                      <div class="card-body">
                          <img class="card-img-top" style="width: 10rem;" src="${photo}" alt="Card image cap">
                          <h5 class="card-title">${titleProduct}</h5>
                          <p class="card-text">${priceProduct}</p>
                          <a href="#" class="btn btn-primary" style="background-color:#77a8a8"><i class="fas fa-cart-plus"></i></a>  
                          <div id="paypal-button"></div>                          
                      </div>
                   </div>`;

                $('#productos2').append(template);
            };
        }
    }).done((response) => {
        console.log(response);
        console.log(response.results["0"].thumbnail);
    });
}
productos();


});


$(document).ready(function($) {
  
  $('.carrito-total').click(function() {
 
    $('.bolsa').slideToggle();
  });

});

//SIMPLE CART
simpleCart({
cartColumns: [
    { view:'image' , attr:'image', label: "Imagen"}, //obtiene la imagen
    { attr: "name", label: "Name"}, //obtiene el nombre
    { view: "currency", attr: "price", label: "Price"},//obtiene el precio
    { view: "decrement", label: "-"}, //Resta el producto
    { attr: "quantity", label: "Qty"}, //obtiene la cantidad del producto
    { view: "increment", label: "+"}, //Suma el producto
    { view: "currency", attr: "total", label: "SubTotal" },// Obtiene el precio total del producto
    { view: "remove", text: "Remover", label: false} //Quita o remueve el producto
],

cartStyle: "table", 


});