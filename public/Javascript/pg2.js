/*jshint esversion: 6 */



$(".pg2CardContainer").click(function() {

  /*detach page 1 replace with page 4*/
  /*where keep pg4*/
  /*code whole page in*/
  /*im building the html in here maybe its better to have it at the beginning but hidden or something or build it somewhere offscreen and then swap it in*/
  $(".bottomRightPage1").replaceWith(
    "<section class='page4X0Y0'>      </section>"
  );

  /*later replace making it invisible with rotating it looking at it and popping a second marble out of its middles
shrink and drop it behind and both can roll to next page
    */
  $(".pg2CardContainer").addClass("invisible");
  /*make spin*/
  $(".philProfileMarbleImg").addClass("rollingAntiClockwise");
  /*move marble same angle as the background gap 135*/
  /*really need some code to trace the trajectory */
  /*
  instead use jquery animate

  $(".containerToReceivephilProfileMarblePG2").addClass("pg2MarbleAnimX");
  $(".containerToReceivephilProfileMarblePG2").addClass("pg2MarbleAnimY");
  $(".philProfileMarbleX").addClass("pg2MarbleAnimX");
  $(".philProfileMarbleY").addClass("pg2MarbleAnimY");
  */

  /*seems to ease in and ease out which dont want */
  /*here is the math to make it work but already seems to https://medium.com/@patrickbrosset/do-you-really-understand-css-linear-gradients-631d9a895caf*/

  //get next page already
  window.addEventListener("resize", updatePG3VarsWithWindow);
  ifInArcApplyDrag(setInitVars());





  let marbleWorkingOnProf = $(".philProfileMarble");
let marbleOldOffsetProf =  marbleWorkingOnProf.offset();
  marbleWorkingOnProf.appendTo(".page3").offset( marbleOldOffsetProf);
let marble3Offset =  $(".marbleOnShape3");

  marbleWorkingOnProf
   //down slope calculate bottom location
  //  .animate({
  //   left: '-10vw',
  //   top: '50vh',
  // }, 800, 'linear')

  //to marb 3
  .animate({
    left: marble3Offset.css('left'),
    top:  marble3Offset.css('top')
  }, 2000
  , function() {
    $(".philProfileMarbleImg").removeClass("rollingAntiClockwise");
    makeMarble3philProfileMarble();
  }
);
//
//
//
//
//
//   $('html, body').animate({
//     scrollTop: $(".page3").offset().top,
//     scrollLeft: $(".page3").offset().left
//   }, 1000);



  /*
  .prependTo(".page2X0Y1");
  */

  /*here or elsewhere change pg1 replace it with pg 4*/
  /*load up pg 3 it middle at the join between one a two and screen one screen to left*/
  /*roll the philProfileMarble down the slope and follow it*/

  window.addEventListener('wheel', wheelListnerIncMagRad, false);
  window.addEventListener("resize", updatePG3VarsWithWindow);




  $(document).mouseup(function() {$(document).unbind('mousemove'); return false;}); // dont like this here nor how global it is should be on pg3 and use listner functions



});


/*Make resizable div a simplified version base on one by Hung Nguyen*/
function makeResizableDiv(div) {
  console.log("make resizeable called");
  const element = document.querySelector('div');

  const minimum_size = 180;
  const maximum_size = 800;
  let original_width = 0;
  let original_x = 0;
  let original_mouse_x = 0;

  var resizeMarbleCase = function(e) {

    const width = original_width - (e.pageX - original_mouse_x);

    if (width > minimum_size && width < maximum_size) {
      element.style.width = width + 'px';
      element.style.left = original_x + (e.pageX - original_mouse_x) + 'px';
    }

  };

  var stopResizeMarbleCase = function() {

    console.log("stopping resize");
    window.removeEventListener('mousemove', resizeMarbleCase);
  };

  element.addEventListener('mousedown', function(e) {


    e.preventDefault();
    original_width = parseFloat(getComputedStyle(element, null).getPropertyValue('width').replace('px', ''));

    original_x = element.getBoundingClientRect().left;
    original_mouse_x = e.pageX;

    window.addEventListener('mousemove', resizeMarbleCase);



    window.addEventListener('mouseup', stopResizeMarbleCase); //if doesnt work because conflict pg3/pg2 unbind transistion

  });



}
/*applies resizeable*/
makeResizableDiv('.case2position');
