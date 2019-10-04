/*jshint esversion: 6 */

// function giveObjectItsMarblesTechClicks(objectWithMarbles, propagate = false  ){
//   objectWithMarbles.find(".aMarble").click(
//     function(ev){
      function marbleTechClick(event){
    if(event.data.propagate==false){event.stopPropagation();}
  //  ev.stopPropagation(); //!!!! we want it to close the card too
      var saughtTechnology = $(this).attr('value');  /*var attr = $(this).attr('name'); */
    //  console.log(saughtTechnology);
    $(".carouselOverlay").removeClass("carouselDisplayNone");
    $('section').not('.carouselOverlay, .singleCardOverlay').addClass("carouselBlur");


    /*!!!!!!!!!Make this a function */
     if(typeof saughtTechnology  !== typeof undefined && saughtTechnology  !== false){


         $("#carouselTechTitle").text(saughtTechnology+ " Projects"); // will need some formatting
      //putting the generation into get saughts code so it happen in right order another approach would be to make getCards async
    getSaughtTechnologyProjectCardsAndMakeCarousel(saughtTechnology);}else{

   $("#carouselTechTitle").text("All "+ "Projects");
    generateCarouselWithSaughtTechnologyCards(); /*if havent found the technology just show all its a graceful fail*/
    }

  }


$(".aMarble").click({propagate:false},marbleTechClick);
