

 function generateCarousel() {

generateAllCarouselCards();

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

function generateAllCarouselCards(){
  //lots of finds and searches but really only need the template and components once
  //so if just make a copy that stays in the loop will reduce the searches
//master and working template one global as var then using let to make second copy
  for (var i = 0; i < projectCards.length; i++) {

    var projectCard = projectCards[i];
    var cloud9CardTemplate = $("#cloud9CardTemplate").contents().clone(true); /*not sure if clone is needed just worried about overwriting template*/

  cloud9CardTemplate.find('.projectTitle').html(projectCard.projectName);
  cloud9CardTemplate.find('.projectDescriptionText').html(projectCard.projectDescription);
    cloud9CardTemplate.find('.projectImage').attr("src", projectCard.projectImagePath);


for (var j = 0; j < projectCard.technologiesArray.length; j++){
      var technology = projectCard.technologiesArray[j];
  var cardTechnologyButtonTemplate = $("#cardTechnologyButtonTemplate").contents().clone(true); /*not sure if clone is needed just worried about overwriting template*/
 cardTechnologyButtonTemplate.find('.cardHyperlinksImg').attr("src", technology.technologyImagePath);
cloud9CardTemplate.find('.topRightProjectTechnologiesArea').append(cardTechnologyButtonTemplate.clone(true))
}
for (var k = 0; k < projectCard.linksArray.length; k++){
  var link = projectCard.linksArray[k];
var cardHyperlinkTemplate = $("#cardHyperlinkTemplate").contents().clone(true); /*not sure if clone is needed just worried about overwriting template*/
cardHyperlinkTemplate.find('.cardHyperlinksImg').attr("src", link.linkImagePath);
cardHyperlinkTemplate.find('.hyperlinkAnchor').attr("href", link.linkHyperlink);
cloud9CardTemplate.find('.cardHyperlinksArea').append(cardHyperlinkTemplate.clone(true))

}

$("#showcase").append(cloud9CardTemplate.clone(true))
}


}
