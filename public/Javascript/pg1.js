/*jshint esversion: 6 */
$(".bottomRightPage1").get(0).scrollIntoView();
$(".grayUntilJQueryLoads").remove();

$(" .drinkButton ").click(function(e) {

  $(".drinkButton").prop("disabled", true); //TODO need to stop unhovering from drinks Div changing animation trajectory

  $(this).find("img").css(
    "pointer-events", "none"
  );
  $(this).css(
    "pointer-events", "none"
  );

  /*this moves the chosen glass*/
  $(this).find("img").addClass("my-animation");

  /*this fades in corner*/
  $("#corner-nav").addClass("fade-in-corner");
  /*this delays and fades in drink*/
  /*set image source to the one they chose*/
  $("#chosen-beverage").attr('src', $(this).find("img").attr('src'));
  $("#chosen-beverage").addClass("fade-in-beverage");


  $('.philProfileMarbleY').addClass("philProfileMarbleYAnim");
  $('.philProfileMarbleX').addClass("philProfileMarbleXAnim");
  /*use transition to make it fade in*/
  $(".philProfileMarbleImg").removeClass("invisible");
  $(".philProfileMarbleImg").addClass("visible");

  //as the ball reaches the top of the screen we want to follow it a little and drop

  //used to be a bit of kick with bounce which i liked lost it not needs tuning
  e.preventDefault();

  $('html, body').delay(3500).animate({
    scrollTop: windowHeight - 20
  }, '300');
  setTimeout(function() {
    $(".tabPage1To2").removeClass("invisible").addClass("visible");
  }, 3800);

  setTimeout(function() {

    /*maybe later allow it to toggle between backward and forward navigation*/
    $(".drinkButton").prop("disabled", true);

    /*place marble may animate later*/
    $(".philProfileMarbleImg").removeClass("rollingClockwise");
    /*think i need to contain the whole marble in someting to move it so can keep its animate x and y div*/
    /*also there is two! so need to select only first*/
    /*philProfileMarbleX and philProfileMarble y have a left and top position, but they should just be handles the marble should of started in a container with these handles
       when redo animation will have to put it in such a container or have it start invisible and change the animation start location for Now
       will just remove these attributes
        */
    $('.philProfileMarbleY').removeClass("philProfileMarbleYAnim");
    $('.philProfileMarbleX').removeClass("philProfileMarbleXAnim");
    $('.philProfileMarbleY').css({
      "top": "0"
    });
    $('.philProfileMarbleX').css({
      "left": "0"
    });
    /*
    $(".philProfileMarble").detach().prependTo(".containerToReceivephilProfileMarblePG2");*/
    /*going to put it in the page as im hoping if in the same space as the background can move it in parrallel easier */
    $(".philProfileMarble").detach().prependTo(".page2X0Y1");
    $(".philProfileMarble").addClass("philProfileMarblePg2Start");


    /*
        $(".philProfileMarbleY").css("top", "-53vh").css("right", "16vw");
       */

  }, 4150); //this is a magic number at moment it should be all the animation times added together

});


$(".tabPage1To2").click(function() {

  //this should end up in some setups js file
ifInArcApplyDrag(setInitVars());//seems to work nicer than resizing not quite noticeable
//updatePG3VarsWithWindow(); //this is here so balls dont start on pg2 but they still dont start in correct location they start left a bit

  $('html, body').animate({
    scrollTop: $(".page2X0Y1").offset().top
  }, 800);
  /*im not dealing with this at moment so getting marble in the right place is just so i can see what im making*/

  /*should i delete the other page with transition*/
  /*for now I am going to delete the bits im not ready to use*/
  /*i should be using toggle*/
  $(".tabPage1To2").removeClass("visible").addClass("invisible");
  $(".tabPage1To2").children('img').removeClass("visible").addClass("invisible");
  /*probably dont need time out probs can just put it on the end*/
  setTimeout(function() {
    $(".tabPage1To2").remove();

  }, 3000);
  /*later make the handle slide into view instead from the right*/
  /*dont like should be positioned where i want it then should change it fixed*/
  //$(".case2position");
});
