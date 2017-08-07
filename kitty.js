var kitty = $(".kitty");
var buttons = $("button");

function hidding_kitty(){
  //hidding each kitty
  for(var i = ; i < kitty.length;i++){
    $(kitty[i]).hide();
  }
}

function binding_kitty(){
  $().click(){
    // call the hidding kitty
    hidding_kitty();
  }
}

function binding_counter_kitty(){

}


hidding_kitty();
$('#kitty').show();
