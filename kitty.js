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
// function Hide_kitties(){
// 	for (var i=0; i<kitty.length; i++){
// 		$(kitty[i]).hide();
// 	}
// }
//
// function Bind_kitties( Num_Id){
// 	$("#button"+ Num_Id).click(function(){
// 		Hide_kitties();
// 		$("#kitty"+ Num_Id).show();
// 	})
// }
//
// function Bind_Counter_kitties( Num_Id){
// 	var kitty = "#kitty"+ Num_Id
// 	$(kitty).click(function(){
// 		var count = $(kitty+" > .counter").text();
// 		count = parseInt(count) + 1;
// 		$(kitty+" > .counter").text(count);
// 	})
// }
//
//
// for (var i=1; i<=buttons.length; i++){
// 	Bind_Counter_kitties(i);
// }
//
// for (var i=1; i<=cats.length; i++){
// 	Bind_Counter_kitties(i);
// }
