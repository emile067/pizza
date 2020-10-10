$(document).ready(function(){
  $('#order-form').submit(function(event){
    event.preventDefault();
    var pizzaNbr= $("#pizza-number").val();
    var pizzaCrust= $("#crust").val();
    var toppings= [];
    $(':checkbox:checked').each(function(i){
      toppings[i] = $(this).val();
    });
  });
});