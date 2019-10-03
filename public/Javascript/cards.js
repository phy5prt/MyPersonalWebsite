


function initSetCards(parent){
    parent.find(".scaleable-wrapper").each(
     function(){
                var vsd = $(this).find(".aCard,.theExplanationCard");
                 var scale = Math.min(
                         $(this).width() / vsd.outerWidth(),
                          $(this).height() / vsd.outerHeight()
       );

    // vsd.css({transform: "translate(-50%, -50%) " + "scale(" + scale + ")"  });
     vsd.css({transform: "translate(-50%, 0%) " + "scale(" + scale + ")"  });

     });

}
var allCards = $('body');
initSetCards(allCards);


$(".aCard").on('click',
function cardToFront(e){

$(".singleCardOverlay").removeClass("singleCardOverlayDisplayNone");
$('section').not('.singleCardOverlay').addClass("singleCardDisplayingBlur");
var copyForSingleCardDisplay = $(this).parent().clone();
$(".singleCardContainer").html(copyForSingleCardDisplay);
initSetCards($(".singleCardContainer"));
copyForSingleCardDisplay.find(".aMarble").click(
function(ev){ev.stopPropagation();
    var saughtTechnology = $(this).attr('value');  /*var attr = $(this).attr('name'); */
  //  console.log(saughtTechnology);
  $(".carouselOverlay").removeClass("carouselDisplayNone");
  $('section').not('.carouselOverlay, .singleCardOverlay').addClass("carouselBlur");
   if(typeof saughtTechnology  !== typeof undefined && saughtTechnology  !== false){


       $("#carouselTechTitle").text(saughtTechnology+ " Projects"); // will need some formatting
    //putting the generation into get saughts code so it happen in right order another approach would be to make getCards async
  getSaughtTechnologyProjectCardsAndMakeCarousel(saughtTechnology);}else{

 $("#carouselTechTitle").text("All "+ "Projects");
  generateCarouselWithSaughtTechnologyCards(); /*if havent found the technology just show all its a graceful fail*/
  }

}


);


copyForSingleCardDisplay.on('click',function removeSingleCardOverlay(e){ //rename glass blur when can refactor and put on the carousel too //problem is triggers even if display none
//do not do anything if this event was propagated from children
  if( e.target !== this ){  return;}else{
$(".singleCardOverlay").addClass("singleCardOverlayDisplayNone");
$('section').not('.singleCardOverlay').removeClass("singleCardDisplayingBlur");
}
});
});



$(" .singleCardOverlayBackground").on('click',function removeSingleCardOverlay(e){ //rename glass blur when can refactor and put on the carousel too //problem is triggers even if display none
//   if( e.target !== this ){ return;}else{
// e.stopPropagation();
$(".singleCardOverlay").addClass("singleCardOverlayDisplayNone");
$('section').not('.singleCardOverlay').removeClass("singleCardDisplayingBlur");}
//}
);


$(".theExplanationCard").on('click',
function cardToFront(e){
  var copyForSingleCardDisplay = $(this).parent().clone();
  //!!!!!!!!!!!!!!!!!!!!!added bit
  $(".pg2CardContainer").addClass("invisible");
  $(".philProfileMarbleImg").addClass("rollingAntiClockwise");
  ///!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
  setTimeout(function(){
$(".singleCardOverlay").removeClass("singleCardOverlayDisplayNone");
$('section').not('.singleCardOverlay').addClass("singleCardDisplayingBlur");

$(".singleCardContainer").html(copyForSingleCardDisplay);
initSetCards($(".singleCardContainer"));
copyForSingleCardDisplay.on('click',function removeSingleCardOverlay(e){ //rename glass blur when can refactor and put on the carousel too //problem is triggers even if display none
//do not do anything if this event was propagated from children
  if( e.target !== this ){  return;}else{
$(".singleCardOverlay").addClass("singleCardOverlayDisplayNone");
$('section').not('.singleCardOverlay').removeClass("singleCardDisplayingBlur");

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!111 the different bit
animateToPage3();
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!111 the different bit
}
});
},100);});
const cardTemplateMaster = $("#cardTemplate").contents();
const $cardTechnologyButtonTemplateMaster = $("#cardTechnologyButtonTemplate").contents();
const $cardHyperlinkTemplateMaster = $("#cardHyperlinkTemplate").contents();
function makeACard(projectCard){

    var cardTemplate = cardTemplateMaster.clone(true); /*not sure if clone is needed just worried about overwriting template*/

  cardTemplate.find('.projectTitle').html(projectCard.projectName);
  cardTemplate.find('.projectDescriptionText').html(projectCard.projectDescription);
    cardTemplate.find('.projectImage').attr("src", projectCard.projectImagePath);


  for (var j = 0; j < projectCard.technologiesArray.length; j++){
        var technology = projectCard.technologiesArray[j];
    var cardTechnologyButtonTemplate = $cardTechnologyButtonTemplateMaster.clone(true); /*not sure if clone is needed just worried about overwriting template*/
   cardTechnologyButtonTemplate.find('.cardTechlinksImg').attr("src", technology.technologyImagePath);
  cardTemplate.find('.topRightProjectTechnologiesArea').append(cardTechnologyButtonTemplate.clone(true));
  }
  for (var k = 0; k < projectCard.linksArray.length; k++){
    var link = projectCard.linksArray[k];
  var cardHyperlinkTemplate =$cardHyperlinkTemplateMaster.clone(true); /*not sure if clone is needed just worried about overwriting template*/
  cardHyperlinkTemplate.find('.cardHyperlinksImg').attr("src", link.linkImagePath);
  cardHyperlinkTemplate.find('.hyperlinkAnchor').attr("href", link.linkHyperlink);
  cardTemplate.find('.cardHyperlinksArea').append(cardHyperlinkTemplate.clone(true));



  }
  return cardTemplate;
}
