/*jshint esversion: 6 */



//the line im after is about at 44
/*  background: linear-gradient(-165deg, white, plum 43%, plum, transparent, yellow, yellow 45%, white), black;*/

/*
https://medium.com/@patrickbrosset/do-you-really-understand-css-linear-gradients-631d9a895caf
https://hugogiraudel.com/2013/02/04/css-gradients/
https://codepen.io/phy5prt/pen/agPJEG
https://codepen.io/phy5prt/pen/NZepMr
*/


//To do grab card variables
//TODO create locations for marbles to go to
//to do share variables with other pages like idth height of screen

var W = document.documentElement.clientWidth;
var H = document.documentElement.clientHeight;
//-165 195 is sane
var A = 195 * Math.PI / 180; //does this angle need units changing or coordinates changed it assumes north clockwise



//y=mx+c    were finding m here
//the angle we have is between the y and the gradient line so take it for 90 to get x axis to gradient line
//the gradLine is measured clockwise from north we need measure anticlockwise from east. so 360 - the angle will give us how to get to it anticlockwise from north but we want from east so take off an extra quater

var angleBetweenY0AndGradLine = A + 2 * Math.PI / 4; //(A-2*Math.PI/2)+A;//A;//( 2*Math.PI-A-2*Math.PI/4);
var gradLineGrad = Math.tan(angleBetweenY0AndGradLine);
var blackLineGrad = -1 / gradLineGrad;

//the gradline passes through 0,0 which is W/2 H/2 for us
//y=mx+c so c=y-mx x= y-c/m
var gradLineC = H / 2 - gradLineGrad * W / 2;
//now have y = gradLineGrad*x+GradLineC


var gradPerc = 44;
var deltaX = 0;

var gradLineLength = Math.abs(W * Math.sin(A)) + Math.abs(H * Math.cos(A));
var deltaHypotenuse = (50 - gradPerc) / 100 * gradLineLength;
var angBetweenX0AndGradientLine = (A - 2 * Math.PI / 2);


//had to swop sin and cos my math seemed right but maybe its due to everything being upside down
var deltaX = deltaHypotenuse * Math.sin(angBetweenX0AndGradientLine);
var deltaY = deltaHypotenuse * Math.cos(angBetweenX0AndGradientLine);
var intersectX = W / 2 + deltaX;
var intersectY = H / 2 - deltaY;
var blackLineC = intersectY - blackLineGrad * intersectX;


var cardWidth = 170;
var cardHeight = 220;
var inset = cardWidth / 120;
var measureFromCardCenter = (cardWidth - 20) / 2;




//placementLoop(); called by transistion
function placementLoop() {
  //all variables could be kepted inside because only running when they have changed however i eo intend to use them later for marble placement
  W = document.documentElement.clientWidth;
  H = document.documentElement.clientHeight;
  gradLineLength = Math.abs(W * Math.sin(A)) + Math.abs(H * Math.cos(A));
  deltaHypotenuse = (50 - gradPerc) / 100 * gradLineLength;
  deltaX = deltaHypotenuse * Math.sin(angBetweenX0AndGradientLine);
  deltaY = deltaHypotenuse * Math.cos(angBetweenX0AndGradientLine);
  intersectX = W / 2 + deltaX;
  intersectY = H / 2 - deltaY;
  blackLineC = intersectY - blackLineGrad * intersectX;
  var numCols = Math.ceil(W / cardWidth);
  var cardsStillToBePlaced = true;
  var steps = 0;
  var cardsPlaced = 0;
  var cardsConsecutivelyNotPlaced = 0;
  var htmlString = "";


  while (cardsStillToBePlaced) {

    x = (steps % numCols) * cardWidth + inset;
    y = blackLineGrad * (x + measureFromCardCenter) + blackLineC + cardHeight * Math.floor(steps / numCols); //but some cards wont be placed
    steps++;
    if (y < H) {
      cardsConsecutivelyNotPlaced = 0;
      cardsPlaced++;
      htmlString += "<div class=' cardPG4 ' style='top:" + y + "px;left:" + x + "px;'>" + cardsPlaced + "</div>";
    } else {
      cardsConsecutivelyNotPlaced++;
      if (cardsConsecutivelyNotPlaced > numCols) {
        cardsStillToBePlaced = false;
        htmlString = "<div class='pg4Text'>Phil Tate</div>" + htmlString;
        $(".page4X0Y0").html(htmlString);
      }
    }
  }
}

var updatePG4WithWindow = function() {
  placementLoop();
};
