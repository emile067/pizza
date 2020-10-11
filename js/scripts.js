var sumTotal = 0;
var toppingsArray= [];
var toppingsList;
var toppingsNbr;
var pizzaSize;
var pizzaCrust;
var pizzaNbr;
function Order(number,size,crust,toppings,price){
  this.number = number;
  this.size=size;
  this.crust=crust;
  this.toppings=toppings;
  this.price=price;
}
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
function priceCalc(){
  var crustPrice,toppingsPrice;
  var sizeChange;
  var totalPrice;
  if(pizzaSize=='Small'){
    sizeChange=1;
  }else if(pizzaSize=='Medium'){
    sizeChange=1.5;
  }else if(pizzaSize=='Large'){
    sizeChange=2;
  }
  if (pizzaCrust=='Thin Crust'){
    crustPrice=sizeChange*2.5;
  }else if(pizzaCrust=='Thick Crust'){
    crustPrice=sizeChange * 3;
  }else if(pizzaCrust=='Pan Crust'){
    crustPrice=sizeChange*2.5;
  }else if(pizzaCrust=='Cheese Filled Crust'){
    crustPrice=sizeChange*2.5;
  }
  toppingsPrice= toppingsNbr * sizeChange;
  totalPrice= (crustPrice+toppingsPrice)*pizzaNbr;
  return totalPrice;
}


