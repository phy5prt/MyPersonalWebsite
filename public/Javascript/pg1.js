/*jshint esversion: 6 */
//$(".bottomRightPage1").get(0).scrollIntoView();



$(window).on('beforeunload', function() {
$("body").prepend("<div class='grayUntilJQueryLoads'></div>");
$(".bottomRightPage1").get(0).scrollIntoView({block: "center", inline: "center"});
});

 //$(document).ready(function(){ //breaks the marblecase!
//setTimeout( function () {

  //something is interupting it give it a second and it will move
    //thought not to the right place

$(".bottomRightPage1").get(0).scrollIntoView({block: "center", inline: "center"});
// var viewStart = document.getElementById('viewStart');
// viewStart.scrollIntoView();

$(".grayUntilJQueryLoads").remove();
//}, 1000);
// });


let delayBetweenGlassAnim = 300;
let delayToAllowRead = 4000;
//step function so can access rotate which cant normy be animated
var clickMeDrinkAffordanceTimeout;
function turnOnDrinkButtonAffordanceTimer(){clickMeDrinkAffordanceTimeout = setTimeout(clickMeDrinkAffordance,delayToAllowRead);}
turnOnDrinkButtonAffordanceTimer();

  function clickMeDrinkAffordance(){
  $(".drinkButton").each(function (index) {

    let thisDrink = $(this);

    setTimeout(function(){ thisDrink.addClass("pulseAffordanceBox"); }, delayBetweenGlassAnim*2*index+delayToAllowRead); /*so get read delay twice*/

    setTimeout(function(){ thisDrink.addClass("affordanceDropShadow"); }, delayBetweenGlassAnim*index);



    thisDrink.delay(delayBetweenGlassAnim*index).animate({  borderSpacing: -10 }, {
    step: function(now,fx) {
    thisDrink.css('-webkit-transform','rotate('+now+'deg)');
    thisDrink.css('-moz-transform','rotate('+now+'deg)');
    thisDrink.css('transform','rotate('+now+'deg)');

    },
    duration:delayBetweenGlassAnim/3
},'linear').animate({  borderSpacing: 10 }, {
    step: function(now,fx) {
    thisDrink.css('-webkit-transform','rotate('+now+'deg)');
    thisDrink.css('-moz-transform','rotate('+now+'deg)');
    thisDrink.css('transform','rotate('+now+'deg)');
    },
    duration:delayBetweenGlassAnim/3
}, 'linear')
 .animate({  borderSpacing: '0' }, {
    step: function(now,fx) {
    thisDrink.css('-webkit-transform','rotate('+now+'deg)');
    thisDrink.css('-moz-transform','rotate('+now+'deg)');
    thisDrink.css('transform','rotate('+now+'deg)');
    },
    duration:delayBetweenGlassAnim/3, complete: // ,
       function(){
        thisDrink.removeClass("affordanceDropShadow");

    }
},
  'linear'
   )
}).promise().done(function removeSetRotation(){
    $(".drinkButton").removeAttr('style'); //seems heavy handed but struggledto get anything else to work
    });
}


$(" .drinkButton ").click(function(e) {

$(this).tooltip('hide');

clearTimeout(clickMeDrinkAffordanceTimeout);
//gradLinePosCalc(linearGradDeg, gradPerc,xLoc, divTransOriginXAdjustment, divTransOriginYAdjustment, useLeft =true)
var arrMarbAndCardPos=[];
// this works for(let i=0;i<101;i+=100){arrMarbAndCardPos.push( gradLinePosCalc(165, 43,0.3*W+i, -50, -90));}
//the object are different sizies so not altering the x and y here really should calc seperately
//using i as pixel doesnt make sense card is in vw and is transformed with perspective
for(let i=0;i<41;i+=30){arrMarbAndCardPos.push( gradLinePosCalc(165, 43,0.3*W+i, 0, 0));}
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

  },{ duration: 300
    //,   complete: function(){$(".case2position").animate({width:'765px',left:'824px'},6000);}
  });
  setTimeout(function() {
    $(".tabPage1To2").removeClass("invisible").addClass("visible");
  }, 1000);

  setTimeout(function() {

$('.businessCard').css('background', '#262626');
    $(".drinkButton").prop("disabled", true);


    $(".philProfileMarbleImg").removeClass("rollingClockwise");
   $("#myMarble").removeClass("noHover");

    /*philProfileMarbleX and philProfileMarble y have a left and top position, but they should just be handles the marble should of started in a container with these handles
       when redo animation will have to put it in such a container or have it start invisible and change the animation start location for Now
       will just remove these attributes
        */

      //!!!!!!!!!!!!!  //needs to be above screen view then remove classes and change position
      //can i remove the Y and X I dont think i use them again for animating

  let marbleOldOffsetMyMarb =    $(".philProfileMarble").offset(); //get position before move everything

    $('.philProfileMarbleY').removeClass("philProfileMarbleYAnim");
    $('.philProfileMarbleX').removeClass("philProfileMarbleXAnim");
    $('.philProfileMarbleY').css({"top": "0"}); $('.philProfileMarbleX').css({"left": "0"});


//!!!!!!!! here put into top right coords keep location

 $(".philProfileMarble").css({ 'display':'block','position':'absolute'});

 $(".philProfileMarble").prependTo(".page2X0Y1").offset( marbleOldOffsetMyMarb);
let calcRightFromLeftMyMarb = W- ($(".philProfileMarble").offset().left +  $(".philProfileMarble").outerWidth());

   $(".philProfileMarble").css({
    'right':calcRightFromLeftMyMarb+'px',
    'left': 'auto'
   });
   /*affordance for clicking !!!*/
    $(".philProfileMarble").addClass("rollingAntiClockwise");
    $(".pg2CardContainer").addClass("shakeCardAffordance");

////!!!!!!!!!!!!!!!!!!!!!!!!! place marble on line and add ajust for that we are placing by top but want bottom on line
///console.log("right = " + arrMarbAndCardPos[0][0] + " top = " + arrMarbAndCardPos[0][1] );
$(".philProfileMarble").css({
 'right':  arrMarbAndCardPos[0][0]-55 +'px',
 'top':  arrMarbAndCardPos[0][1]-105+'px'

});
//the cards transform is after card placed
$(".pg2CardContainer").css({
 'right': arrMarbAndCardPos[1][0]-55 +'px' , //minus 50 so touching card
 'top':  'calc(' + (arrMarbAndCardPos[1][1]-10)+'px' + ' - 18vh )'  //this is the height of card 20vh and a bit to adjust for perspective

});

/*the shake animation if it occurs during this will re show the glasses*/
  $(" .drinkButton ").not(this).fadeTo(1000,0); //hide the other buttons
  $(".fontOrnaments, #fancyADrink ").fadeTo(1000,0);

//hide works but is too distracting
// $(" .drinkButton ").not(this).hide("slow"); //hide the other buttons
// $(".fontOrnaments, #fancyADrink ").hide("slow");
 //css in buis card make this take 4 seconds

   }, 4150); //this is a magic number at moment it should be all the animation times added together

 });




$(".tabPage1To2").click(function() {

  //this should end up in some setups js file
ifInArcApplyDrag(setInitVars());//seems to work nicer than resizing not quite noticeable
//updatePG3VarsWithWindow(); //this is here so balls dont start on pg2 but they still dont start in correct location they start left a bit

  $('html, body').animate({
    scrollTop: $(".page2X0Y1").offset().top
  },{duration: 800, complete: function(){
    slideInDrawAffordance();
setTimeout(function(){$(".philProfileMarble").removeClass("rollingAntiClockwise");
$(".pg2CardContainer").removeClass("shakeCardAffordance");},2000)
  }});

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
/*drop-shadow(offset-x offset-y blur-radius spread-radius color)*/






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

    resizeMarbleCase(k);     // Do something every 2 seconds

}
let mySetInterval = setInterval(resizeIncrementer, timePerLoop);

//mySetInterval();
setTimeout(function(){

  clearInterval(mySetInterval);
},timeToCloseIn);
}
