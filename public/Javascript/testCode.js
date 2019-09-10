/*jshint esversion: 6 */

$(".test").click(function() {


// $(".carouselOverlay").toggleClass("carouselDisplayNone");
// $('section').not('.carouselOverlay').toggleClass("carouselBlur");
//   generateCarousel();


//  $(".page2X0Y1").html(marbleLineLocationsPG2());
//$(".page4X0Y0").html(showMarbleLocations(makeMarbLocArrPG4()));
//recalcAndPlaceMarblePosOnResizePG4();
rollMarblesInPG4();
})




//-165 195 is same
var APG2 = -165 * Math.PI / 180; //does this angle need units changing or coordinates changed it assumes north clockwise



//y=mx+c    were finding m here
//the angle we have is between the y and the gradient line so take it for 90 to get x axis to gradient line
//the gradLine is measured clockwise from north we need measure anticlockwise from east. so 360 - the angle will give us how to get to it anticlockwise from north but we want from east so take off an extra quater

var angleBetweenY0AndGradLinePG2 = APG2 + 2 * Math.PI / 4; //(A-2*Math.PI/2)+A;//A;//( 2*Math.PI-A-2*Math.PI/4);
var gradLineGradPG2 = Math.tan(angleBetweenY0AndGradLinePG2);
var blackLineGradPG2 = 1 / gradLineGradPG2;

//the gradline passes through 0,0 which is W/2 H/2 for us
//y=mx+c so c=y-mx x= y-c/m
var gradLineCPG2 = H / 2 - gradLineGradPG2 * W / 2;
//now have y = gradLineGrad*x+GradLineC

//the line goes until 70% across screen so 70% of my W;
//the gradLine is at 43-45
var gradPercPG2 = 44;
var deltaXPG2 = 0;

var gradLineLengthPG2 = Math.abs(W * Math.sin(APG2)) + Math.abs(H * Math.cos(APG2));
var deltaHypotenusePG2 = (50 - gradPercPG2) / 100 * gradLineLengthPG2;
var angBetweenX0AndGradientLinePG2 = (APG2 - 2 * Math.PI / 2);


//had to swop sin and cos my math seemed right but maybe its due to everything being upside down
var deltaXPG2 = deltaHypotenusePG2 * Math.sin(angBetweenX0AndGradientLinePG2);
var deltaYPG2 = deltaHypotenusePG2 * Math.cos(angBetweenX0AndGradientLinePG2);
var intersectXPG2 = W / 2 + deltaXPG2;
var intersectYPG2 = H / 2 - deltaYPG2;
var blackLineCPG2 = intersectYPG2 - blackLineGradPG2 * intersectXPG2;


var xPG2;
var yPG2;



var marbleLineLocationArrPG2 = [];
var blackLineCReversePG2 = intersectYPG2 - (-1)*blackLineGradPG2 * intersectXPG2;

function marbleLineLocationsPG2(){

//the index will be the x in from the right
//
var marbleOnLineWidthPG2 = 100; // later just make marble width in utils
var measureFromMarbleTopRightPG2 = 75;

for( i=0;i<101;i+=100){
    xForMarblePG2 = W*(0.3)-marbleOnLineWidthPG2/2+i; //the marble width is to account from where measure from
    yForMarblePG2 = (-1)*blackLineGradPG2 * (xForMarblePG2)+ blackLineCReversePG2-measureFromMarbleTopRightPG2; //but some cards wont be placed
//this is so when we run out of project cards we just start again at the begginging

marbleLineLocationArrPG2.push([  xForMarblePG2, yForMarblePG2]);
}
var fudgeDown =0; var fudgeLeft=0;
var halfCardHeight = $(".pg2CardContainer").height()/2;


$(".pg2CardContainer").css({'top':marbleLineLocationArrPG2[0][1] -halfCardHeight+ fudgeDown + 'px' }).css({'right': marbleLineLocationArrPG2[0][0] + fudgeLeft+ 'px'});/*doesnt work because based on marble size*/

 //     var htmlSquaresOnGradLinePG2 = "";
 // marbleLineLocationArrPG2.forEach(function(position){
 // //make box here
 //  htmlSquaresOnGradLinePG2 += " <div class=' squarePG4 ' style='top:" + position[1] + "px;right:" + position[0] + "px;'></div>";
 //
 // });
 // return htmlSquaresOnGradLinePG2;
}




function showMarbleLocations(  marbleLineLocationArr){
var htmlSquaresOnGradLine = "";
  marbleLineLocationArr.forEach(function(position){
  //make box here
   htmlSquaresOnGradLine += " <div class=' squarePG4 ' style='top:" + position[1] + "px;right:" + position[0] + "px;'></div>";

  });
  return htmlSquaresOnGradLine;
  }
