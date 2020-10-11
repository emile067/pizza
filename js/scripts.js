var sumTotal = 0;
var toppingsArray= [];
var toppingsList;
var toppingsNbr;
var pizzaSize;
var pizzaCrust;
var pizzaNbr;

$(document).ready(function(){
  $('#order-form').submit(function(event){
    event.preventDefault();
    pizzaSize= $('#pizza-size').val();
    pizzaNbr= $("#pizza-number").val();
    pizzaCrust= $("#crust").val();
    var pizzaToppings= [];
    var toppingsList;
    $(':checkbox:checked').each(function(i){
      pizzaToppings[i] = $(this).val();
      toppingsArray[i] = $(this).attr('name')
    });
    toppingsList = toppingsArray.join(',');
    toppingsNbr= toppingsArray.length;
  });
});


