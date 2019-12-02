/*jshint esversion: 6 */
/*when refactor consider using .done rather than succes*/
var saughtTechnologyProjectCards=[{}];
var showcase = $("#showcase")
function     getSaughtTechnologyProjectCardsAndMakeCarousel(saughtTechnology) {

if(typeof saughtTechnology  !== typeof undefined && saughtTechnology  !== false){

if(saughtTechnology=="allProjects"){  $("#carouselTechTitle").text("All "+ "Projects");generateCarouselWithSaughtTechnologyCards();}else{
      $("#carouselTechTitle").text(saughtTechnology+ " Projects"); // will need some formatting
   //putting the generation into get saughts code so it happen in right order another approach would be to make getCards async




var sghtCrds;
//carousel?techButton=Botox
//this may need to be synchronouse
$.ajax({
  url: '/carousel',
  method: 'GET',
data: {techButton: saughtTechnology},
 success: function (saughtTechnologyProjectCards) {
  // console.log("complete: getSaughtTechnology is returning: " + saughtTechnologyProjectCards.Length + " cards of technology: " + saughtTechnology +  " they look like this " + JSON.stringify(saughtTechnologyProjectCards) + "  " + JSON.stringify(saughtTechnologyProjectCards[0]))
  generateCarouselWithSaughtTechnologyCards(saughtTechnologyProjectCards);

 //data: {query: saughtTechnology}       //this is the bit i need to check if it is right
}})
// .then(function (saughtTechnologyProjectCards) {
//   console.log("then: getSaughtTechnology is returning: " + saughtTechnologyProjectCards.Length + " cards of technology: " + saughtTechnology +  " they look like this " + saughtTechnologyProjectCards + "  " + saughtTechnologyProjectCards[0]);
//   //generateCarouselWithSaughtTechnologyCards(saughtTechnologyProjectCards);
// })
.catch(function (err) {
console.log(err);
});

}}else{

  $("#carouselTechTitle").text("All "+ "Projects");generateCarouselWithSaughtTechnologyCards();}
}










//
// function generateCarousel(saughtTechnologyProjectCards = "allTechnologies") {
//
// //trying to make it happen within itself so it does not run async
// if (saughtTechnologyProjectCards=="allTechnologies") {generateCarouselCards();}else{generateCarouselCards(saughtTechnologyProjectCards);}
//
// }


  var showcase = $("#showcase");

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
      showcase.css( 'visibility', 'visible' );
      showcase.css( 'display', 'none' );
      showcase.fadeIn( 100 );
    }
  } );

//$(document).keydown( function( e ) {
$(document).keydown( function( e ) {
  //
  // More codes: http://www.javascripter.net/faq/keycodes.htm
  //
  console.log("applying behaviours of the arrows now");
  switch( e.keyCode ) {
    /* left arrow */
    case 37:
      $('.nav.left').click();

      break;
      /* I added down/bottom arrow */
      case 40:
        $('.nav.bottom').click();
        break;
/* I added up shall be to open it arrow */
        case 38:
          $('.nav.top').click();
          break;

    /* right arrow */
    case 39:
      $('.nav.right').click();
  }
} );

  //
  // Simulate physical button click effect
  //

  $('.nav').click( function( e ) {
    var b =

    $(e.target).addClass( 'down' );
    setTimeout( function() { b.removeClass( 'down' ); }, 80 );
  } );


//using const to try and reduce the ammount of searched need to do

const cloud9ItemTemplateMaster =  $("#cloud9ItemTemplate").contents();

const $showcase = $("#showcase");

function generateCarouselWithSaughtTechnologyCards(saughtTechnologyProjectCards = "allTechnologies"){
//var carouselCards=[{}];
//rename project cards carousel cards, pg 4 make the all cards
//makeCarousel(          ((saughtTechnologyProjectCards == "allTechnologies")?carouselCards = allProjectCards  :   carouselCards=saughtTechnologyProjectCards    );
//wipe the currentshowcase
if(saughtTechnologyProjectCards == "allTechnologies"){makeCarousel(allProjectCards);}
  else if(saughtTechnologyProjectCards.length==0){
       $("#carouselTechTitle").append(" couldn't be found showing all projects instead");
    makeCarousel(allProjectCards);}
  else{makeCarousel(saughtTechnologyProjectCards);}
}


function makeCarousel(carouselCards){
$showcase.html('');

  for (var i = 0; i < carouselCards.length; i++) {


var cloud9ItemTemplate = cloud9ItemTemplateMaster.clone(true);



// /*filtering now done by backend*/
// var saughtTechnology= "la"; //added in coz func no longer provides its for testing
// var saughtTechnologyArray =carouselCard.technologiesArray.filter(technologyObject => (technologyObject.technologyName === saughtTechnology));
// var hasSaughtTechnology;
// if(saughtTechnologyArray && saughtTechnologyArray.length)
//  { hasSaughtTechnology = true;}else{hasSaughtTechnology = false;}
//
//     if(saughtTechnology == "allTechnologies" || hasSaughtTechnology){






/*do i need the cloning?*/
cloud9ItemTemplate.html(makeACard(carouselCards[i]));

$showcase.append(cloud9ItemTemplate);
}

/*this doesnt apply on load because hidden maybe needs something done with it like sepereate function or so it does find it but for now need quick fix*/

/*allowing cards to be scaled and clickable*/
initSetCards( $showcase);

 $showcase.find(".aCard").on('click',
 {propagation:true},cardToFrontClick
// function cardToFrontClick (e){
//
// $(".singleCardOverlay").removeClass("singleCardOverlayDisplayNone");
// $('section').not('.singleCardOverlay').addClass("singleCardDisplayingBlur");
// var copyForSingleCardDisplay = $(this).parent().clone();
// $(".singleCardContainer").html(copyForSingleCardDisplay);
// initSetCards($(".singleCardContainer"));
//
// copyForSingleCardDisplay.find(".aMarble").click({propagate:true},marbleTechClick);
// // copyForSingleCardDisplay.find(".aMarble").click(function(ev){
// // //  ev.stopPropagation(); //!!!! we want it to close the card too
// //     var saughtTechnology = $(this).attr('value');  /*var attr = $(this).attr('name'); */
// //   //  console.log(saughtTechnology);
// //   $(".carouselOverlay").removeClass("carouselDisplayNone");
// //   $('section').not('.carouselOverlay, .singleCardOverlay').addClass("carouselBlur");
// //    if(typeof saughtTechnology  !== typeof undefined && saughtTechnology  !== false){
// //
// //
// //        $("#carouselTechTitle").text(saughtTechnology+ " Projects"); // will need some formatting
// //     //putting the generation into get saughts code so it happen in right order another approach would be to make getCards async
// //   getSaughtTechnologyProjectCardsAndMakeCarousel(saughtTechnology);}else{
// //
// //  $("#carouselTechTitle").text("All "+ "Projects");
// //   generateCarouselWithSaughtTechnologyCards(); /*if havent found the technology just show all its a graceful fail*/
// //   }
// //
// // })
// copyForSingleCardDisplay.on('click',function removeSingleCardOverlay(e){ //rename glass blur when can refactor and put on the carousel too //problem is triggers even if display none
// //do not do anything if this event was propagated from children
// //  if( e.target !== this ){  return;}else{
// $(".singleCardOverlay").addClass("singleCardOverlayDisplayNone");
// $('section').not('.singleCardOverlay').removeClass("singleCardDisplayingBlur");
// })
// }
);

$showcase.find(".aMarble").click({propagate:false},marbleTechClick);



//
// $(".aMarble").click(
// function(ev){
//   ev.stopPropagation();
//     var saughtTechnology = $(this).attr('value');  /*var attr = $(this).attr('name'); */
//   //  console.log(saughtTechnology);
//   $(".carouselOverlay").removeClass("carouselDisplayNone");
//   $('section').not('.carouselOverlay, .singleCardOverlay').addClass("carouselBlur");
//    if(typeof saughtTechnology  !== typeof undefined && saughtTechnology  !== false){
//
//
//        $("#carouselTechTitle").text(saughtTechnology+ " Projects"); // will need some formatting
//     //putting the generation into get saughts code so it happen in right order another approach would be to make getCards async
//   getSaughtTechnologyProjectCardsAndMakeCarousel(saughtTechnology);}else{
//
//  $("#carouselTechTitle").text("All "+ "Projects");
//   generateCarouselWithSaughtTechnologyCards(); /*if havent found the technology just show all its a graceful fail*/
//   }
//
// }
//
//
// );


showcase.Cloud9Carousel( {
yOrigin: ($(window).height()/100)*35/4 +($(window).height()/100)*5, /*second is half marging*//* Calc js and get half of the viewport height */
//
 yRadius: ($(window).height()/100)*35/2, /*why divided by two twice from 70vh to 35 then again is it giving height whole page*/
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
} );

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
} );

}




// }
