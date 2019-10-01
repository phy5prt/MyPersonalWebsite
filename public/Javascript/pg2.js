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

var endLinePosPG2 = gradLinePosCalc(165, 43,W, 0, 0);


  let marbleWorkingOnProf = $(".philProfileMarble");
let marble3 =  $(".marbleOnShape3");

let slopeTravelTime = 500;
let jumpTravelTime = 300;
let landTravelTime = 300;

let jumpRightPos = ((W - (parseInt(marble3.css('left')+100)))/2 + endLinePosPG2[0]-50);
let jumpTopPos=(H/4);
// var testHtml;
// testHtml += " <div class=' squarePG4 ' style='top:" +jumpTopPos + "px;right:" + jumpRightPos + "px;'></div>";
// testHtml += " <div class=' dot ' style='top:" + jumpTopPos + "px;right:" + jumpRightPos + "px;'></div>";
// $(".page2X0Y1").html(testHtml);
let marbleOldOffsetProf;
  marbleWorkingOnProf
   //down slope calculate bottom location
   .animate({
    right: endLinePosPG2[0]-50, //these vars same as pg1
    top: endLinePosPG2[1]-95,
  },slopeTravelTime, 'linear')
//jump
.animate({

 right:jumpRightPos, //the end vars same as pg1 the rest to calc half gap between shape and end pg2 line
 top: jumpTopPos,
}, jumpTravelTime, 'swing', function(){
  marbleOldOffsetProf =  marbleWorkingOnProf.offset();
marbleWorkingOnProf.css({'right':'auto'}).appendTo(".page3").offset( marbleOldOffsetProf);});

  //to marb 3

  setTimeout(function(){



//marbleWorkingOnProf.css({'top': (parseInt(marbleWorkingOnProf.css('top'))-H/2)});



    marbleWorkingOnProf.animate({
    left: marble3.css('left'),
    top:  marble3.css('top')
  }, (landTravelTime +100) //incase of delay
  , function() {
    $(".philProfileMarbleImg").removeClass("rollingAntiClockwise");
    makeMarble3philProfileMarble();
  }
);
},slopeTravelTime+jumpTravelTime);

//move view screen
  $('html, body').animate({
    scrollTop: $(".page3").offset().top,
    scrollLeft: $(".page3").offset().left
  }, 1000);



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
  //console.log("make resizeable called");
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

//    console.log("stopping resize");
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




slideInDrawAffordance();
/* copies instead of using resize code on refactor integrate*/
function slideInDrawAffordance(){


  const element = document.querySelector('.case2position');

  let startPos =0; //needs to be where case starts minus its own width i think as does not go to zero thought his may be ebcause of its max
  let endPos = (document.documentElement.clientWidth/100)*15-70-50; //95vw //so needs to travel 10vw //i must get px as pencent a few time //im minusing borderer width and half a ball
  let direction = -1; //are we measure from right or left traveling right or left
  let posToTravel = direction*(startPos - endPos);
let timeToCloseIn = 100; //750
  let timePerLoop = 30;//30

let k = {pageX:startPos};//need to start as right hand edge pixels in which we should set to right 15vw so in line with tab




original_width = parseFloat(getComputedStyle(element, null).getPropertyValue('width').replace('px', ''));//seems to be out by an amount because its based on left?
original_x =element.getBoundingClientRect().left;
original_mouse_x = k.pageX;

  //  let original_width = 0;




    let resizeMarbleCase = function(e) {


  const width = original_width - (e.pageX - original_mouse_x);
        element.style.width = width + 'px';
        element.style.left = original_x + (e.pageX - original_mouse_x) +'px';//-70 to counteract the right pos

    };


let resizeIncrementer =function(){



let incrementWidthPerLoop = posToTravel/(timeToCloseIn/timePerLoop);

    k.pageX+=incrementWidthPerLoop;
    console.log("k.pageX is now " + k.pageX );
    resizeMarbleCase(k);     // Do something every 2 seconds

}
let mySetInterval = setInterval(resizeIncrementer, timePerLoop);

//mySetInterval();
setTimeout(function(){
  console.log("!!!!!!!!!!!!!!1   CLEARING INTERVAL !!!!!!!!!!!!!!!!!!!");
  clearInterval(mySetInterval);
},timeToCloseIn);
}
