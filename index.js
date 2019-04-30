

$(document).ready(function(){



var windowHeight=$(window).height();
/*just testing*/


/*
var goUp = $('#goUp');
var windowHeight=$(window).height();

  goUp.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop: windowHeight-20}, '300');

});*/


/*around time of doing that it no longer exstends the scroll*/
/*need to make it not button but buttons that are drinks*/
$(" .drinkButton ").click(function(e){









/*need to set it to permament tilt then disable or when mouse comes offset
will effect trajectory*/
$(".drinkButton").prop("disabled", true);
/*so hovering doesnt tilt it during flight*/

/*
$(this).find("img").unbind("mouseenter mouseleave");
$(this).unbind("mouseenter mouseleave");
*/
$(this).find("img").css({"pointer-events":"none"});
$(this).css({"pointer-events":"none"});
/*doesnt seem to stop it reverting on not hover*/
/*when mouse leaves the square the glass rotates*/



/*this moves the chosen glass*/

$(this).find("img").addClass("my-animation");


/*this fades in corner*/
$("#corner-nav").addClass("fade-in-corner");
/*this delays and fades in drink*/
/*set image source to the one they chose*/
$("#chosen-beverage").attr('src',$(this).find("img").attr('src'));
$("#chosen-beverage").addClass("fade-in-beverage");







/*im moving a div used for y and x seperately and doing seperate
keyframes because running same twice not easy and reading up ussually have to add
remove class
*/
$('.myMarbleY').addClass("myMarbleYAnim");

$('.myMarbleX').addClass("myMarbleXAnim");
/*use transition to make it fade in*/
 $(".myMarble").removeClass("invisible");
  $(".myMarble").addClass("visible");

/*as the ball reaches the top of the screen we want to follow it a little and drop
a tab with an arrow and the marble collected that when clicked on move you to the next screen



goUp.removeClass("btnbefore").addClass("btnafter");

/*scroll  working can just do 0.95* however but want fixed number*/
/*the delay is to allow the css animation which i dont like i feel all animation should be in one place*/
/*.delay(350)*/
e.preventDefault();
$('html, body').delay(3800).animate({scrollTop: windowHeight-20}, '300');

$(".tab").delay(4000).removeClass("invisible").addClass("visible");





/*
maybe dont reveal scroll bar just lift the screen
*/
/*
this works but is a sudden jump
$(".page2X0Y1").get(0).scrollIntoView();
*/

/**/
/*get because we want js dom not jq dom*/


/*
  $("body").removeClass("noScroll");
  $("body").addClass("scroll");
*/

});



});
