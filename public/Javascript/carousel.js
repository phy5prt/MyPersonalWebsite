
var projectCards = [{
  projectName:" Banana ",
  overallProjectRating:"10",
  projectDescription: "A very very good project",
  projectImagePath:" Images/postman.jpg ",
  technologiesArray:[{
    technologyName:"unity",
    technologyImagePath:" 'Images/tea.png' ",
    technologyExampleRating:"10"
  },
  {
    technologyName:"unity",
    technologyImagePath:" 'Images/tea.png' ",
    technologyExampleRating:"10"
  },
  {
    technologyName:"unity",
    technologyImagePath:" 'Images/postman.jpg' ",
    technologyExampleRating:"10"
  }],
  linksArray:[{
    linkName:"unity",
    linkImagePath:" 'Images/postman.jpg' ",
    linkHyperlink:"https://unity.com/ "
  },
  {
    linkName:"unity",
    linkImagePath:" 'Images/Shotglass.png' ",
    linkHyperlink:"https://unity.com/ "
  },
  {
    linkName:"unity",
    linkImagePath: " 'Images/cocktailStraw.png' ",
    linkHyperlink:"https://unity.com/ "
  }]
}, {
  projectName: " Example2  ",
  overallProjectRating:"10",
  projectDescription:" Lauren Ipsum Latin bloke some writting here as vague as smoke, all it gives is space and shape, with less draw backs than a vape",
  projectImagePath: " 'Images/cocktailOlive.png' " ,
  technologiesArray:[
  {
    technologyName:"unity",
    technologyImagePath:" ' Images/cocktailOlive.png ' ",
    technologyExampleRating:"10"
  },
  {
    technologyName:"unity",
    technologyImagePath:" 'Images/postman.jpg' ",
    technologyExampleRating:"10"
  }],
  linksArray:[{
    linkName:"unity",
    linkImagePath:" 'Images/postman.jpg' ",
    linkHyperlink:"https://unity.com/ "
  },
  {
    linkName:"unity",
    linkImagePath:" 'Images/waterglass.png' ",
    linkHyperlink:"https://unity.com/ "
  }]
}]
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
  /*
  const cloud9CardTemplate = document.querySelector('#cloud9CardTemplate');
  const node = document.importNode(cloud9CardTemplate.content, true); works but trying something else*/

  for (var i = 0; i < projectCards.length; i++) {
    var projectCard = projectCards[i];
    var cloud9CardTemplate = $("#cloud9CardTemplate").clone(true);
    cloud9CardTemplate.find('.projectTitle').html = projectCard.projectTitle;
    cloud9CardTemplate.find('.projectDescriptionText').html = projectCard.projectDescription;
$("#showcase").append(cloud9CardTemplate.contents());
}


}
  generateCarousel();
