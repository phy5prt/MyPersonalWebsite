/*jshint esversion: 6 */

// function giveObjectItsMarblesTechClicks(objectWithMarbles, propagate = false  ){
//   objectWithMarbles.find(".aMarble").click(
//     function(ev){
      function marbleTechClick(event){
    if(event.data.propagate==false){event.stopPropagation();}
  //  ev.stopPropagation(); //!!!! we want it to close the card too

    //  console.log(saughtTechnology);
    $(".carouselOverlay").removeClass("carouselDisplayNone");
    $('section').not('.carouselOverlay, .singleCardOverlay').addClass("carouselBlur");


    /*!!!!!!!!!Make this a function */
//console.log($(this));
        var saughtTechnology = $(this).attr('value');  /*var attr = $(this).attr('name'); */

  getSaughtTechnologyProjectCardsAndMakeCarousel(saughtTechnology);


  }


$(".aMarble").not("#myMarble").click({propagate:false},marbleTechClick);
