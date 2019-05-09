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
    $(".myMarble").removeClass("invisible");
    $(".myMarble").addClass("visible");

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
    $(".myMarble").removeClass("rolling");
    $(".myMarbleY").css("top", "-53vh").css("right", "16vw");


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

  });
  /*the test button is like cheat short cut of the moment*/
  $(".test").click(function() {

    $('html, body').animate({
      scrollTop: $(".page2X0Y1").offset().top
    }, 1);
    $(".myMarble").removeClass("invisible");

    $(".myMarble").addClass("visible");
    $(".myMarble").removeClass("rolling");
    $(".myMarbleY").css("transform", "translateY(-81vh)");
    $(".myMarbleX").css("transform", "translateX(69vw)");
  });




  /*Make resizable div a simplified version base on one by Hung Nguyen*/
  function makeResizableDiv(div) {
    const element = document.querySelector('div');

    const minimum_size = 220;
    const maximum_size = 400;
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
