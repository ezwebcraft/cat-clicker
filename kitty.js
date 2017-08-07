var kitty = $(".kitty");
var buttons = $("button");

function hidding_kitty(){
  //hidding each kitty
  for(var i = ; i < kitty.length;i++){
    $(kitty[i]).hide();
  }
}

function binding_kitty(num_id){
  $("#button"+num_id).click(function(){
    // call the hidding kitty and switch binding
    hidding_kitty();
    $('#kitty'+ num_id).show();
  });
}

function binding_counter_kitty(num_id){
 var kitty = "#kitty";
 $(kitty).click(function(){
   var counter = $(kitty+" > .counter").text();
   		counter = parseInt(counter) + 1;
   		$(kitty+" > .counter").text(counter);
 })

}

// loop thu each function

hidding_kitty();
$('#kitty').show();
