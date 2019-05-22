/*jshint esversion: 6 */
$(document).ready(function() {
  $(".page1X0Y0").get(0).scrollIntoView();

  var windowHeight = $(window).height();

  $(" .drinkButton ").click(function(e) {


    /*need to set it to permament tilt then disable or when mouse comes off hover will set
    directory off the other trajectory*/
    $(".drinkButton").prop("disabled", true);
    /*so hovering doesnt tilt it during flight*/
    /*
    $(this).find("img").unbind("mouseenter mouseleave");
    $(this).unbind("mouseenter mouseleave");
    */
    $(this).find("img").css(
      "pointer-events", "none"
    );
    $(this).css(
      "pointer-events", "none"
    );
    /*doesnt seem to stop it reverting on not hover*/

    /*this moves the chosen glass*/
    $(this).find("img").addClass("my-animation");


    /*this fades in corner*/
    $("#corner-nav").addClass("fade-in-corner");
    /*this delays and fades in drink*/
    /*set image source to the one they chose*/
    $("#chosen-beverage").attr('src', $(this).find("img").attr('src'));
    $("#chosen-beverage").addClass("fade-in-beverage");


    $('.myMarbleY').addClass("myMarbleYAnim");

    $('.myMarbleX').addClass("myMarbleXAnim");
    /*use transition to make it fade in*/
    $(".myMarbleImg").removeClass("invisible");
    $(".myMarbleImg").addClass("visible");

    /*as the ball reaches the top of the screen we want to follow it a little and drop
    a tab with an arrow and the marble collected that when clicked on move you to the next screen

    /*used to be a bit of kick with bounce which i liked lost it not needs tuning*/
    e.preventDefault();
    $('html, body').delay(3500).animate({
      scrollTop: windowHeight - 20
    }, '300');
    setTimeout(function() {
      $(".tab2").removeClass("invisible").addClass("visible");
    }, 3800);

  });

  $(".tab2").click(function() {
    /*maybe later allow it to toggle between backward and forward navigation*/
    $(".drinkButton").prop("disabled", true);

    /*place marble may animate later*/
    $(".myMarbleImg").removeClass("rollingClockwise");
    /*think i need to contain the whole marble in someting to move it so can keep its animate x and y div*/
    /*also there is two! so need to select only first*/
    /*myMarbleX and myMarble y have a left and top position, but they should just be handles the marble should of started in a container with these handles
when redo animation will have to put it in such a container or have it start invisible and change the animation start location for Now
will just remove these attributes
    */
    $('.myMarbleY').removeClass("myMarbleYAnim");
    $('.myMarbleX').removeClass("myMarbleXAnim");
    $('.myMarbleY').css({"top":"0"});
    $('.myMarbleX').css({"left":"0"});
    /*
    $(".myMarble").detach().prependTo(".containerToReceiveMyMarblePG2");*/
    /*going to put it in the page as im hoping if in the same space as the background can move it in parrallel easier */
    $(".myMarble").detach().prependTo(".page2X0Y1");
    $(".myMarble").addClass("myMarblePg2Start");


    /*
    $(".myMarbleY").css("top", "-53vh").css("right", "16vw");
*/

    $('html, body').animate({
      scrollTop: $(".page2X0Y1").offset().top
    }, 800);
    /*im not dealing with this at moment so getting marble in the right place is just so i can see what im making*/

    /*should i delete the other page with transition*/
    /*for now I am going to delete the bits im not ready to use*/
    /*i should be using toggle*/
    $(".tab2").removeClass("visible").addClass("invisible");
    /*probably dont need time out probs can just put it on the end*/
    setTimeout(function() {
      $(".tab2").remove();

    }, 3000);
    /*later make the handle slide into view instead from the right*/
    /*dont like should be positioned where i want it then should change it fixed*/
    $(".case2position");
  });
  /*the test button is like cheat short cut of the moment*/
  $(".test").click(function() {

    $('html, body').animate({
      scrollTop: $(".page2X0Y1").offset().top
    }, 1);
    $(".myMarbleImg").removeClass("invisible");

    $(".myMarbleImg").addClass("visible");
    $(".myMarbleImg").removeClass("rollingClockwise");


    $(".myMarbleY").css("transform", "translateY(-81vh)");
    $(".myMarbleX").css("transform", "translateX(69vw)");

    /*once cant see bottom screen should replace it with another ready for when we follow the ball down diagonally to the third*/
  });

  $(".pCard").click(function() {
    /*later replace making it invisible with rotating it looking at it and popping a second marble out of its middles
shrink and drop it behind and both can roll to next page
    */
$(".pCard").addClass("invisible");
/*make spin*/
$(".myMarbleImg").addClass("rollingAntiClockwise");
/*move marble same angle as the background gap 135*/
/*really need some code to trace the trajectory */
/*
instead use jquery animate

$(".containerToReceiveMyMarblePG2").addClass("pg2MarbleAnimX");
$(".containerToReceiveMyMarblePG2").addClass("pg2MarbleAnimY");
$(".myMarbleX").addClass("pg2MarbleAnimX");
$(".myMarbleY").addClass("pg2MarbleAnimY");
*/

/*seems to ease in and ease out which dont want */
/*here is the math to make it work but already seems to https://medium.com/@patrickbrosset/do-you-really-understand-css-linear-gradients-631d9a895caf*/
$(".myMarble").animate({left: '-10vw', top:'50vh',


/*
  scrollTop: $(".page2X0Y1").offset().top,

  */



},1000, 'linear');

/*detach page 1 replace with page 4*/
/*where keep pg4*/
/*code whole page in*/
$(".page1X0Y0").replaceWith(
  "<section class='page4X0Y0'  ></section>"
);
/*the issue is that the page isnt existing*/


/*
$('html, body').animate({

/*worked before isnt now does work if replace it with 4X0Y0*/
/*  scrollTop: $(".page3X-1Y0.5").offset().top
}, 1000);
*/
$('html, body').animate({
  scrollTop: $(".page3X-1Y0.5").offset().top
}, 1);

/*
.prependTo(".page2X0Y1");
*/

/*here or elsewhere change pg1 replace it with pg 4*/
/*load up pg 3 it middle at the join between one a two and screen one screen to left*/
/*roll the myMarble down the slope and follow it*/

  });


  /*Make resizable div a simplified version base on one by Hung Nguyen*/
    function makeResizableDiv(div) {
      const element = document.querySelector('div');

      const minimum_size = 180;
      const maximum_size = 800;
      let original_width = 0;
      let original_x = 0;
      let original_mouse_x = 0;

        element.addEventListener('mousedown', function(e) {
          e.preventDefault();
          original_width = parseFloat(getComputedStyle(element, null).getPropertyValue('width').replace('px', ''));

          original_x = element.getBoundingClientRect().left;
          original_mouse_x = e.pageX;

          window.addEventListener('mousemove', resize);
          window.addEventListener('mouseup', stopResize);
        });

        function resize(e) {

            const width = original_width - (e.pageX - original_mouse_x);

            if (width > minimum_size && width < maximum_size) {
              element.style.width = width + 'px';
              element.style.left = original_x + (e.pageX - original_mouse_x) + 'px';
            }

          }

        function stopResize() {
          window.removeEventListener('mousemove', resize);
        }

    }
    /*applies resizeable*/
    makeResizableDiv('.case2position');
});
