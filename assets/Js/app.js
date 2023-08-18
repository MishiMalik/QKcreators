// =============================================header
$(window).scroll(function () {
  if ($(this).scrollTop() > 88) {
    $(".navbar").css('box-shadow','0 3px 2px -2px rgba(0, 0, 0, 0.2)');
  } else {
    $(".navbar").css('box-shadow','none');
  }
});


// ============================================logo slider
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  autoplay:false,
  autoplayTimeout:1500,
  autoplayHoverPause:true,
  responsive:{
      0:{
          items:1,
          nav:true,
          autoplay:true,
      },
      600:{
        items:3,
        nav:false,
        loop:true,
        autoplay:true,
    },
      1200:{
          items:4,
          nav:false,
          loop:true,
          autoplay:true,
      },
      1300:{
          items:6,
          nav:true,
          loop:false,
          autoplay:true,
      }
  }
})
