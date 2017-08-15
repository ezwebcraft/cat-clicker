// creae a base model for clicker

var kitty_Model = {
    currentKitty: null,
    Kitty: [
      {
            clickCount : 0,
            name : 'Kitty1',
            imgSrc : 'http://placekitten.com/g/800/410',
            imgAttribution : 'http://placekitten.com/g/800/410'
        },
        {
            clickCount : 0,
            name : 'Kitty2',
            imgSrc : 'http://placekitten.com/g/800/420',
            imgAttribution : 'http://placekitten.com/g/800/420'
        }
    ]
  };

var kitty_controller = {

  init: function(){

  },
  getKitty:function(){

  },
  setKitty: function(){
    
  }

};

var kitty_View = {


};




var kitty = $(".kitty");
var buttons = $("button");

function hidding_kitty() {
  //hidding each kitty
  for (var i = 0; i < kitty.length; i++) {
    $(kitty[i]).hide();
  }
}

function binding_kitty(num_id) {
  $("#button" + num_id).click(function() {
    // call the hidding kitty and switch binding
    hidding_kitty();
    $('#kitty' + num_id).show();
  })
}

function binding_counter_kitty(num_id) {
  var kitty = "#kitty" + num_id;
  $(kitty).click(function() {
    var count = $(kitty + " > .counter").text();
    count = parseInt(count) + 1;
    $(kitty + " > .counter").text(count);
  })
  $(kitty + " > .name").text(kitty);
}

// loop thu each function

for (var a = 1; a <= buttons.length; a++) {
  binding_kitty(a);
}

for (var b = 1; b <= kitty.length; b++) {
  binding_counter_kitty(b);
}

hidding_kitty();
$('#kitty1').show();
