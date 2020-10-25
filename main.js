'use strict'

$('ul').hover( function(){
  $(".home").css('opacity', '0.5');
},
function() {
  $(".home").css('opacity', '1');
}
);

$('.home').hover( function(){
  $("ul").css('opacity', '0.5');
},
function() {
  $("ul").css('opacity', '1');
}
);

$('ul').hover( function(){
  $('ul').css('opacity', '0.5');
},
function(){
    $('ul').css('opacity', '1');
});

$('.homes').addClass('.home_border'）;
