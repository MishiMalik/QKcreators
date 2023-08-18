$(window).scroll(function () {
  if ($(this).scrollTop() > 88) {
    $(".navbar").css('box-shadow','0 3px 2px -2px rgba(0, 0, 0, 0.2)');
  } else {
    $(".navbar").css('box-shadow','none');
  }
});
