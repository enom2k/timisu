
$(document).ready(function(){
    var owl = $('.owl-carousel');
    
  owl.owlCarousel({
    loop: true,
    items: 3.6, 
    autoplay: true,
    slideTransition: 'linear',
    autoplaySpeed: 5000,
    smartSpeed: 5000,
    center: true,
    margin: 15
      
  });    

  jQuery('.owl-carousel').trigger('play.owl.autoplay',[2000]);

function setSpeed(){
    jQuery('.owl-carousel').trigger('play.owl.autoplay',[5000]);
}

setTimeout(setSpeed, 1000);
    
});
         

     
