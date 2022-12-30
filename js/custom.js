$(window).on('load',function() {
  $('.preloader').delay(2000).fadeOut('slow');
});


let backdrop = $('.backdrop');
let pillar = $('.pillar');
let ceiling = $('.ceiling');
let seat = $('.seat');
let backdropitems = $('.backdropitemsrc');
let pillaritems = $('.pillaritemsrc');
let ceilingitems = $('.ceilingitems');
let seatitems = $('.seatitems');
let itemsbox = $('.single-item');


backdropitems.on('click', function(){
  backdrop.attr("src", this.src);
});

pillaritems.on('click', function(){
  pillar.attr("src", this.src);
});

ceilingitems.on('click', function(){
  ceiling.attr("src", this.src);
});

seatitems.on('click', function(){
  seat.attr("src", this.src);
});

itemsbox.on('click', function(){
  itemsbox.removeClass("active");
  $(this).addClass("active");
});
