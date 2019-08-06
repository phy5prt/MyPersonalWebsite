

 function generateCarousel() {
  var showcase = $("#showcase")

  showcase.Cloud9Carousel( {
  yOrigin: 150, /* Calc js and get half of the viewport height */
   yRadius: 150,
    farScale:0.5,
    itemClass: "cloud9-item",
    buttonLeft: $(".nav.left"),
    buttonRight: $(".nav.right"),
    buttonBottom:$(".nav.bottom"),
    buttonTop:$('.nav.top'), /*but there isnt one*/
    bringToFront: true,
    onLoaded: function() {
      showcase.css( 'visibility', 'visible' )
      showcase.css( 'display', 'none' )
      showcase.fadeIn( 100 )
    }
  } )

  //
  // Simulate physical button click effect
  //
  $('.nav').click( function( e ) {
    var b =

    $(e.target).addClass( 'down' )
    setTimeout( function() { b.removeClass( 'down' ) }, 80 )
  } )

  $(document).keydown( function( e ) {
    //
    // More codes: http://www.javascripter.net/faq/keycodes.htm
    //
    switch( e.keyCode ) {
      /* left arrow */
      case 37:
        $('.nav.left').click()
        break
        /* I added down/bottom arrow */
        case 40:
          $('.nav.bottom').click()
          break
  /* I added up shall be to open it arrow */
          case 38:
            $('.nav.top').click()
            break

      /* right arrow */
      case 39:
        $('.nav.right').click()
    }
  } )
}
  generateCarousel();
