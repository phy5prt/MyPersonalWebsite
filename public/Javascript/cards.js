/*jshint esversion: 6 */


function initSetCards(parent){
    parent.find(".scaleable-wrapper").each(
     function(){
                var vsd = $(this).find(".aCard,.theExplanationCard");
                 var scale = Math.min(
                         $(this).width() / vsd.outerWidth(),
                          $(this).height() / vsd.outerHeight()
       );

    // vsd.css({transform: "translate(-50%, -50%) " + "scale(" + scale + ")"  });
    if(vsd.is("#shapeCardsOriginalScale")){$shapeCardsOriginalScale = scale;} //this is because it is hard to read style element for scale

     vsd.css({transform: "translate(-50%, 0%) " + "scale(" + scale + ")"  });

     });

}
var allCards = $('body');
initSetCards(allCards);




function cardToFrontClick(event){

$(".singleCardOverlay").removeClass("singleCardOverlayDisplayNone");
$('section').not('.singleCardOverlay').addClass("singleCardDisplayingBlur");
var copyForSingleCardDisplay = $(this).parent().clone();
copyForSingleCardDisplay.find(".aCard").removeAttr('id');
copyForSingleCardDisplay.find(".aCard").css('cursor','zoom-out');
$(".singleCardContainer").html(copyForSingleCardDisplay);

//do we need to step between two.

initSetCards($(".singleCardContainer"));

copyForSingleCardDisplay.find(".aMarble").click({propagate:event.data.propagate},marbleTechClick);


copyForSingleCardDisplay.on('click',function removeSingleCardOverlay(e){ //rename glass blur when can refactor and put on the carousel too //problem is triggers even if display none
//do not do anything if this event was propagated from children
//  if( event.target !== this ){  return;}else{
$(".singleCardOverlay").addClass("singleCardOverlayDisplayNone");
$('section').not('.singleCardOverlay').removeClass("singleCardDisplayingBlur");
//}
});
}


$(".aCard").on('click',{propagation:false},cardToFrontClick

);



$(" .singleCardOverlayBackground").on('click',function removeSingleCardOverlay(e){ //rename glass blur when can refactor and put on the carousel too //problem is triggers even if display none
//   if( e.target !== this ){ return;}else{
// e.stopPropagation();
$(".singleCardOverlay").addClass("singleCardOverlayDisplayNone");
$('section').not('.singleCardOverlay').removeClass("singleCardDisplayingBlur");}
//}
);

//!!!!!!!!    This the same except im inserting the animation so if i put cardToFrontClick in time out it will not have the animation in its
//click to close single card display function, so i would need to find the event function and add to it so for now leaving it
$(".theExplanationCard, #myMarble").on('click',exampleCardToFront);



function exampleCardToFront(){
  let $pg2CardContainer = $(".pg2CardContainer");
$pg2CardContainer.removeClass("pulseAffordanceBoxStrong").addClass("pg2CardContainerAnim");
// setInterval(alertFunc, 2000, "First param", "Second param");

let throwToFront = setInterval(initSetCards, 10, $pg2CardContainer);

setTimeout(function(){
  clearInterval(throwToFront);
  $(".pg2CardContainer").addClass("invisible");
  $(".philProfileMarbleImg").addClass("rollingAntiClockwise");


  var copyForSingleCardDisplay =  $(".theExplanationCard").parent().clone();
  copyForSingleCardDisplay.find(".theExplanationCard").css('cursor','zoom-out');
  //!!!!!!!!!!!!!!!!!!!!!added bit

  ///!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1

$(".singleCardOverlay").removeClass("singleCardOverlayDisplayNone");
$('section').not('.singleCardOverlay').addClass("singleCardDisplayingBlur");

$(".singleCardContainer").html(copyForSingleCardDisplay);
initSetCards($(".singleCardContainer"));
//copyForSingleCardDisplay.on('click',function removeSingleCardOverlay(e){ //rename glass blur when can refactor and put on the carousel too //problem is triggers even if display none

$(".singleCardOverlay").on('click',function removeSingleCardOverlay(e){
//do not do anything if this event was propagated from children
  //if( e.target !== this ){  return;}else{
$(".singleCardOverlay").addClass("singleCardOverlayDisplayNone");
$('section').not('.singleCardOverlay').removeClass("singleCardDisplayingBlur");


//were excluding the me marble initially so easy to click eithe marble or card to start the roll on pg2 then setting it to how it should be
$(".singleCardOverlay").off('click',removeSingleCardOverlay);
$("#myMarble").off('click',exampleCardToFront);
$("#myMarble").click({propagate:false},marbleTechClick);


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!111 the different bit
animateToPage3();
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!111 the different bit
//}
});
},150);}

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
    cardTechnologyButtonTemplate.find('.cardTechlinksImg').attr("value", technology.technologyName);
  cardTemplate.find('.topRightProjectTechnologiesArea').append(cardTechnologyButtonTemplate.clone(true));
  }
  for (var k = 0; k < projectCard.linksArray.length; k++){
    var link = projectCard.linksArray[k];
  var cardHyperlinkTemplate =$cardHyperlinkTemplateMaster.clone(true); /*not sure if clone is needed just worried about overwriting template*/

  cardHyperlinkTemplate.find('.cardHyperlinksImg').attr("src", link.linkImagePath);

  cardHyperlinkTemplate.attr('href', link.linkHyperlink  ); //wasnt working coz find only works on children not self
//but cardTemplate.find('a').attr('href', link.linkHyperlink  ); does work is this an execution order thing
  cardTemplate.find('.cardHyperlinksArea').append(cardHyperlinkTemplate.clone(true));



  }
  return cardTemplate;
}
