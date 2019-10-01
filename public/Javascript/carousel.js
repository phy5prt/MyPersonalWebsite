/*jshint esversion: 6 */
/*when refactor consider using .done rather than succes*/
var saughtTechnologyProjectCards=[{}];
var showcase = $("#showcase")
function getSaughtTechnologyProjectCardsAndMakeCarousel(saughtTechnology) {

  console.log("using get saught technology");
var sghtCrds;
//carousel?techButton=Botox
//this may need to be synchronouse
$.ajax({
  url: '/carousel',
  method: 'GET',
data: {techButton: saughtTechnology},
 success: function (saughtTechnologyProjectCards) {
   console.log("complete: getSaughtTechnology is returning: " + saughtTechnologyProjectCards.Length + " cards of technology: " + saughtTechnology +  " they look like this " + JSON.stringify(saughtTechnologyProjectCards) + "  " + JSON.stringify(saughtTechnologyProjectCards[0]))
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


const cloud9CardTemplateMaster = $("#cloud9CardTemplate").contents();
const $cardTechnologyButtonTemplateMaster = $("#cardTechnologyButtonTemplate").contents();
const $cardHyperlinkTemplateMaster = $("#cardHyperlinkTemplate").contents();
const $showcase = $("#showcase");

function generateCarouselWithSaughtTechnologyCards(saughtTechnologyProjectCards = "allTechnologies"){
var carouselCards=[{}];
//rename project cards carousel cards, pg 4 make the all cards
makeCarousel(           (saughtTechnologyProjectCards == "allTechnologies")?carouselCards = allProjectCards  :   carouselCards=saughtTechnologyProjectCards    );
//wipe the currentshowcase

}


function makeCarousel(carouselCards){
$showcase.html('');

  for (var i = 0; i < carouselCards.length; i++) {



    var carouselCard = carouselCards[i];


// /*filtering now done by backend*/
// var saughtTechnology= "la"; //added in coz func no longer provides its for testing
// var saughtTechnologyArray =carouselCard.technologiesArray.filter(technologyObject => (technologyObject.technologyName === saughtTechnology));
// var hasSaughtTechnology;
// if(saughtTechnologyArray && saughtTechnologyArray.length)
//  { hasSaughtTechnology = true;}else{hasSaughtTechnology = false;}
//
//     if(saughtTechnology == "allTechnologies" || hasSaughtTechnology){


    var cloud9CardTemplate = cloud9CardTemplateMaster.clone(true); /*not sure if clone is needed just worried about overwriting template*/

  cloud9CardTemplate.find('.projectTitle').html(carouselCard.projectName);
  cloud9CardTemplate.find('.projectDescriptionText').html(carouselCard.projectDescription);
    cloud9CardTemplate.find('.projectImage').attr("src", carouselCard.projectImagePath);


for (var j = 0; j < carouselCard.technologiesArray.length; j++){
      var technology = carouselCard.technologiesArray[j];
  var cardTechnologyButtonTemplate = $cardTechnologyButtonTemplateMaster.clone(true); /*not sure if clone is needed just worried about overwriting template*/
 cardTechnologyButtonTemplate.find('.cardHyperlinksImg').attr("src", technology.technologyImagePath);
cloud9CardTemplate.find('.topRightProjectTechnologiesArea').append(cardTechnologyButtonTemplate.clone(true));
}
for (var k = 0; k < carouselCard.linksArray.length; k++){
  var link = carouselCard.linksArray[k];
var cardHyperlinkTemplate =$cardHyperlinkTemplateMaster.clone(true); /*not sure if clone is needed just worried about overwriting template*/
cardHyperlinkTemplate.find('.cardHyperlinksImg').attr("src", link.linkImagePath);
cardHyperlinkTemplate.find('.hyperlinkAnchor').attr("href", link.linkHyperlink);
cloud9CardTemplate.find('.cardHyperlinksArea').append(cardHyperlinkTemplate.clone(true));

}

$showcase.append(cloud9CardTemplate.clone(true));
}

/*this doesnt apply on load because hidden maybe needs something done with it like sepereate function or so it does find it but for now need quick fix*/





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



$(".aMarble").click(
function(){
    var saughtTechnology = $(this).attr('value');  /*var attr = $(this).attr('name'); */
  //  console.log(saughtTechnology);
  $(".carouselOverlay").toggleClass("carouselDisplayNone");
  $('section').not('.carouselOverlay').toggleClass("carouselBlur");
   if(typeof saughtTechnology  !== typeof undefined && saughtTechnology  !== false){


       $("#carouselTechTitle").text(saughtTechnology+ " Projects"); // will need some formatting
    //putting the generation into get saughts code so it happen in right order another approach would be to make getCards async
  getSaughtTechnologyProjectCardsAndMakeCarousel(saughtTechnology);}else{

 $("#carouselTechTitle").text("All "+ "Projects");
  generateCarouselWithSaughtTechnologyCards(); /*if havent found the technology just show all its a graceful fail*/
  }

}


);
