$(".test").click(function() {

  $('html, body').animate({
    scrollTop: $(".page2X0Y1").offset().top
  }, 1);
  $(".myMarbleImg").removeClass("invisible");

  $(".myMarbleImg").addClass("visible");
  $(".myMarbleImg").removeClass("rollingClockwise");


  $(".myMarbleY").css("transform", "translateY(-81vh)");
  $(".myMarbleX").css("transform", "translateX(69vw)");

  /*once cant see bottom screen should replace it with another ready for when we follow the ball down diagonally to the third*/
});