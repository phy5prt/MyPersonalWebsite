/*jshint esversion: 6 */

//need to make code run and stop run only on going to page 3

//difference with first pass version - third ball sometimes forgotten and put off screen, loses tightness to ellipse i think to do with the +10 stuff compare with https://codepen.io/phy5prt/pen/RzyxJy?editors=0100

//ask ione about unit tests
//ask woody about the geometry and refining the equations, first look up the css code for curving the sides, try do it then stack overflow


//the code is moving philProfileMarble in page 2 this code should not be exectued until the transistion is finished

//This code moves the balls around the squared ellipse anticlockwise with wheelscroll or pulling the magnifier or a combination
//at the end of the arc next page animation is triggered

//just used for invis and vis so wont be need if make function to adjust between mag/ellipse center



const marb2Img = $(".marbleOnShape2").find("img");
var marb3Img = $(".marbleOnShape3").find("img");

//the marble
var marbleOnShape1 = ".marbleOnShape1";
var marbleOnShape2 = ".marbleOnShape2";
var marbleOnShape3 = ".marbleOnShape3"; // replace with ".philProfileMarble";
function makeMarble3philProfileMarble() {

  //marb3Img =  $(marbleOnShape3).find("img"); // maybe better to remove the html just get rid but sort on next run through

//issue is we want to retain it


$(".philProfileMarble").css("left", 'auto');
$(".philProfileMarble").css("right", 'auto');
$(".philProfileMarble").css("top", 'auto');
$(".marbleOnShape3").empty();
$(".philProfileMarble").detach().appendTo(".marbleOnShape3"); //append rather than prepend because better as last child just for consistency
//$(".marbleOnShape3").detach();
//marbleOnShape3 = ".philProfileMarble";

  // $(".philProfileMarble").css("left", $(marbleOnShape3).css("left"));
  // $(".philProfileMarble").css("top", $(marbleOnShape3).css("top"));
  // $(".philProfileMarble").detach().appendTo(".page3"); //append rather than prepend because better as last child just for consistency
  // $(".marbleOnShape3").detach();
  // marbleOnShape3 = ".philProfileMarble";



}



//                                                       !!!!!!!!!!      Variables
const marbleRadius = $(".marbleOnShape1").find("img").width(); //replace these with marbleDiameter
const $dial = $('.dial'); //the magnifier glass
var fakeObject = new Object(); //I dont like this


const radCircle = 2 * Math.PI; // full circle to ease the math
var totalRadDragCovered = 0; //Remembers magRotation

//angles in rads assume clockwise is positive from north position (should it be radCircle/8 and radCircle/4 ???)
var angToTopRightCorner = 2 * radCircle / 8; // used to calculate initAngFirstMarble
var endAngFirstMarble = 2 * radCircle / 8;
var initAngFirstMarble = 0;
var midAngBetweenInitAndEnd = 0;
var midAngBetweenInitAndEndBeforeResize = 0; //only necessary while dont have a function to translate between centers

var radIncPerWheelClick = radCircle / 100; //this is how much movement around the circle each wheel click causes

//angles to make north the zero position and angles to be measured anti clock wise
var initRadRotToMakeMagNorth = -radCircle / 18;
$dial.css('transform', 'rotate(' + initRadRotToMakeMagNorth + 'rad)');
var startEllipse0North = -radCircle / 4;

//These center the magnifiers point of rotation on the glass center //these variables not recalculated on window change yet
var centerMagImgX = parseInt($dial.css('transform-origin').split(' ')[0]);
var centerMagImgY = parseInt($dial.css('transform-origin').split(' ')[1]);
//These center the magnifiers point of rotation on the page adjusting for its rotation point not being central
var centerMagGlobalX = $dial.offset().left + centerMagImgX;
var centerMagGlobalY = $dial.offset().top + centerMagImgY;


//These variables are used for producing the ellipse they assume the center of the ellipse is center of the page instead of calculating it
var centerEllipseX = [document.documentElement.clientWidth] / 2;
var centerEllipseY = [document.documentElement.clientHeight] / 2;

var halfEllipseWidth = parseInt($(".bestCardsArea").css("width"), 10) / 2;
var halfEllipseHeight = parseInt($(".bestCardsArea").css("height"), 10) / 2;
//if i dont squew i dont need below and can simplify equation*/
var rightMidY = 0;
var leftMidX = 0;

//These are the variables used to tune the loop that works out how close the marbles sit to each other
var radsInc = radCircle / 400; //could make this same as the step of the mouse
var maxRadStepsClockwiseToTry = 120; //clockwise
var stepsToSkipBeforeCheckNextMarble = 1; //the next marble will not be right next to the first so can skip a few steps

///////!!!!!!!!!!                                                      !!!!!!!!!!!!!!!!!!!!Recalculating variables on screensize change

var updatePG3VarsWithWindow = function() {


  midAngBetweenInitAndEndBeforeResize = midAngBetweenInitAndEnd;
  ////magnifier variables
  centerMagImgX = parseInt($dial.css('transform-origin').split(' ')[0]);
  centerMagImgY = parseInt($dial.css('transform-origin').split(' ')[1]);
  centerMagGlobalX = $dial.offset().left + centerMagImgX;
  centerMagGlobalY = $dial.offset().top + centerMagImgY;
  ////ellipse variables
  //this is center of the screen not center of the shape --- though the shape is centered
  centerEllipseX = [document.documentElement.clientWidth] / 2;
  centerEllipseY = [document.documentElement.clientHeight] / 2;
  //ellipse size
  halfEllipseWidth = parseInt($(".bestCardsArea").css("width"), 10) / 2;
  halfEllipseHeight = parseInt($(".bestCardsArea").css("height"), 10) / 2;
  /*if i dont squew i dont need below and can simplify equation*/
  rightMidY = 0;
  leftMidX = 0;

  ////arc limits update
  setInitVars();

  //there are issues with the previous angle now being out of the arc, this if function (copying the arc check function a fair bit) catches the angle if out of arc and makes it a step from it
  catchViewPortResizeCausingOutOfArc();
  //replace the balls (within trigger limits)
  ifInArcApplyDrag(totalRadDragCovered);

};



function catchViewPortResizeCausingOutOfArc() {
  if (totalRadDragCovered < endAngFirstMarble && totalRadDragCovered > initAngFirstMarble) {
    if (totalRadDragCovered > midAngBetweenInitAndEndBeforeResize) //need to work out which side of the arc it was on before we shrank the screen
    {
      totalRadDragCovered = endAngFirstMarble + radIncPerWheelClick;
    } else {
      totalRadDragCovered = initAngFirstMarble - radIncPerWheelClick;
    }
  }
}


///                                                                    !!!!!!!!!!!!!!!!!!!!Setting the initial states and variables

function setInitVars() {

  topRightCornerLoc = calcEllipsePos(fakeObject, angToTopRightCorner);
  topRightCornerLoc.pageX -= marbleRadius * 1.5; // this is three marbles in. the marbles because of their width and center point start with a width added
  //the above is accurate but put it back into the equation and the positioning is out because of difference between mag center and pagecenter

  //this angle is the angle the magnifier will start from and move anticlockwise, it is the angle the first marble will be created on
  initAngFirstMarble = -1 * getRadOfARelativeToB(centerMagGlobalX, centerMagGlobalY, topRightCornerLoc.pageX, topRightCornerLoc.pageY); //minus 1 because it counts anticlockwise from north?

  //the middle angle of the start and end of the prohibited part of the arc so the limiter knows whether to trigger the anim or just disable the mouse hold
  midAngBetweenInitAndEnd = (endAngFirstMarble - initAngFirstMarble) / 2 + initAngFirstMarble;

  //return ang to set the magnifier and Marb1 to the start angle
  return initAngFirstMarble;
}

//!!!!!!!!           functions for dragging the magnifier !!!!!!!!!!!!!


function ifInArcApplyDrag(radTravelledThisDrag) {

  if (radTravelledThisDrag < 0) {
    radTravelledThisDrag += radCircle;
  }
  if (radTravelledThisDrag > radCircle) {
    radTravelledThisDrag -= radCircle;
  } //making sure no negs etc

  if (!outOfArcTriggerAnimOrStop(radTravelledThisDrag)) {
    totalRadDragCovered = radTravelledThisDrag; //the wheel uses this

    placeMarbles(totalRadDragCovered);

    var rotMagAmountFinal = totalRadDragCovered + initRadRotToMakeMagNorth; //the number added is to correct for the image not naturally pointing north

    $dial.css('transform', 'rotate(' + rotMagAmountFinal + 'rad)'); // this is changing the magnifier angle
  }
}

//this works out where you click at the start of the drag and adds rads covered by previous drags
function getStartClickRad(event) {
  //You do not drag necessarily from zero degrees so need to know start radsTravelledAroundEllipsele
  //here i add what already dragged from last time so it isnt forgotted
  var startDragRad = getRadOfARelativeToB(event.pageX, event.pageY, centerMagGlobalX, centerMagGlobalY) + totalRadDragCovered;
  return startDragRad;
}

//this works out how far from where you click you dragged
var calcCurrentRadDragCoveredAndApply = function(event, startDragRad) {
  var currentDragRad = getRadOfARelativeToB(event.pageX, event.pageY, centerMagGlobalX, centerMagGlobalY);
  var radTravelledThisDrag = startDragRad - currentDragRad; //this way round as we want to go backwards // ive switched it again now rads relative counts from upwards pos
  ifInArcApplyDrag(radTravelledThisDrag);
};

function getRadOfARelativeToB(AXCoord, AYCoord, BXCoord, BYCoord) { // i think this function goes from east anti clockwise
  var radsRelative = Math.atan2(AXCoord - BXCoord, AYCoord - BYCoord); //this goes in reverse also doesnt reverse ycoord despite screen increasing y downwards
  return radsRelative;
}


function  fadeBackInTopNavRow() {
$(document).unbind('mouseup',fadeBackInTopNavRow);

    $("#firstRowCornerNav").fadeTo(1000,1);
     $(".cornerNav").css( 'background-color', '	rgba(128,128,128,1)');


   }

//applies the function to the down event
$dial.mousedown(function(event) {

  $("#firstRowCornerNav").fadeTo(500,0);
   $(".cornerNav").css( 'background-color', '	rgba(128,128,128,0)');

  var startDragRad = getStartClickRad(event);
  $(document).bind('mousemove', startDragRad, function(event) {

    calcCurrentRadDragCoveredAndApply(event, startDragRad);
  });
  $(document).bind('mouseup',fadeBackInTopNavRow);
  //believe this is so you dont pull the image using normal drag rules

  return false;

});


//why isnt there another mouse up
//so want to include if mouse up happens after no longer over element so using page
//could do mouse leave mouse out etc


/* - moving this to the transistion for now - but it has two issue
 - one using bind is seems too global as effects the glass case
 - two it should sit on this page and in this section so if the page sections code was only active on their pages would be better
$(document).mouseup(function() {
  $(document).unbind('mousemove');

  return false;
});
*/
//                                                                 !!!!!!!!!!!!!!!!!!!!!!!!Limiting how much of the arc the magnifier can be pulled in


function outOfArcTriggerAnimOrStop(radsOfMag) {

  if (radsOfMag < endAngFirstMarble && radsOfMag > initAngFirstMarble) {
    //is angle in the denied range and the end part of that range
    if (radsOfMag > midAngBetweenInitAndEnd) {
      runPageTransistion();
    }
    $(document).unbind('mousemove');
    return true;
  } else {
    return false;
  }
}

///                             !!!functions to stop marble 2 3 going too far clockwise due to difference in ellipse/mag center - del when resolved

//this function should be redundant however it isnt because the difference between magnifier center and ellipse center is enough rads that marbles can appear over the right edge
function outOfArcInvisMarb23(marbleNo, marble1Rads, radsOfMag) {
  //check if marble 2 or 3 out of their range

  radsOfMag %= radCircle; // big screen changes can cause large jumps so this keep it 0-2pi
  //if 1st marble in top  other marbles shouldnt be in bottom right
  if (marble1Rads <= initAngFirstMarble || marble1Rads >= 3 * Math.PI / 2) {
    //if marble placing is in the bottom half and the first marble in the top half its gone round the top right corner
    if (radsOfMag > angToTopRightCorner && radsOfMag <= 3 * Math.PI / 2) {
      switch (marbleNo) {
        case 2:
          marb2Img.hide();
          marb3Img.hide();
        //  console.log("im hiding marble 3");
          break;
        case 3:
          marb3Img.hide();
        //  console.log("im hiding marble 3");
          break;

      }
    }
  }
}
//make marbles visible - this function pairs with the above so it isnt necessaru if get the difference between center of ellipse and magnifier sorted

function makeMarb23Vis() {
  marb2Img.show();
  marb3Img.show();
}





//                                                                   !!!!!!!!!!!!!!!!!!!!!!!!Wheel section  //needs disabling if buttons are down or become down

var wheelListnerIncMagRad = function(e) {

  //minus one because want downwards to be anti clockwise, total radDrag covered because want to move from current position
  totalTurn = -1 * radIncPerWheelClick * Math.sign(e.deltaY) + totalRadDragCovered;

  ifInArcApplyDrag(totalTurn); //will be normalised between o and radcircle in ifInArcApplyDrag
  //  return false; //to stop the scroll bar scroll might work outside of code pen
};

/*change name so its runTransistionPG3To4*/
function runPageTransistion() {
  $('.dial').removeClass("pulseAffordanceBox");
  console.log("page transistion triggered");

  window.removeEventListener("resize", updatePG3VarsWithWindow);
  window.removeEventListener("wheel", wheelListnerIncMagRad);
  placeCardsPG4();
  var pg4Cards = $('.page4X0Y0')
    initSetCards(pg4Cards);
  window.addEventListener("resize", updatePG4WithWindow);


rollAllMarblesInPG4();



}



//////                                                                                                    !!!!!!!!the ellipse equation
function calcEllipsePos(objectToMove, ang) {
//unfortunately being here means it runs 3x once per marble not once per distance turned
magnifyCards(ang);

  //trying to find the center based on shape top offset too large - wondering if its the editor
  //var centerEllipseX = parseInt($(".bestCardsArea").css("width"), 10) / 2 + $(".bestCardsArea").offset().left;
  //var centerEllipseY = parseInt($(".bestCardsArea").css("height"), 10) / 2 + $(".bestCardsArea").offset().top;

  var calcEllipsePos = {
    objectToMove: objectToMove,
    pageX: 0,
    pageY: 0
  };

  //we need to start it at north we just want 0 radians to mean the same for both balls and magnifier

  ang += startEllipse0North;

  var cosAng = Math.cos(ang);
  var sinAng = Math.sin(ang);

  //the ten is border width however need for the corners to do the circle equation
  //this is the marble centers
  //if you add a marble width you get the center point of the marble but then because you dont want the center point moving around the line you want the marble edge you then have to shift the ellipse by -marbleRadiuss and then it looks the same anyway

  var adjustXMovePoint = -marbleRadius;
  var adjustYMovePoint = -marbleRadius;
  //i believe the ten could be implemented using the circle equation for the whole thing

  if (cosAng >= 0 && sinAng <= 0) { //console.log("top right");
    sinAng = -1;
    //adjustYMovePoint = adjustYMovePoint + 10;

  } else if (cosAng <= 0 && sinAng < 0) { //console.log("top left");
    adjustXMovePoint = adjustXMovePoint - marbleRadius / 2 * sinAng + 10;
    adjustYMovePoint = adjustYMovePoint - marbleRadius / 2 * cosAng;// + 10;
  } else if (cosAng < 0 && sinAng >= 0) { //console.log("bottom left");
    if (sinAng < 0.5) { //"bottom left top, halved this is the left section");
      cosAng = -1; //stick left hand side
      sinAng = sinAng + (sinAng - 0.5) + (0.5 - 0); //first brackets tend to zero start -0.5  //stretch so doesnt jump
      adjustXMovePoint = adjustXMovePoint;// + 10; // just trying to adjust for it being off 10px
    } else if (sinAng >= 0.5) { //"bottom left top, halved this is the right section");
      //console.log("bottom flat");
      sinAng = 1; //stickToBottom
      //= desiredStart+(finish-desiredStart)*(progress-start)/(finish-start)   //stretchBackWardsLeft
      var whereCosAWillActuallyStart = -Math.cos(Math.asin(0.5));
      cosAng = -1 + (1) * ((cosAng - whereCosAWillActuallyStart) / (0 - whereCosAWillActuallyStart));
      adjustXMovePoint = adjustXMovePoint;// + 10 * cosAng;
      adjustYMovePoint = adjustYMovePoint- 10 * sinAng;
    }
  } else if (cosAng > 0 && sinAng > 0) { //console.log("bottom right");
    adjustXMovePoint = adjustXMovePoint; //+ 10 * cosAng;
    adjustYMovePoint = adjustYMovePoint - 10 * sinAng-10;
  } else {
  //  console.log("at angle " + ang + " sinAng was " + sinAng + " cosAng was " + cosAng + " and they didnt fall into an if ");
  }

  calcEllipsePos.pageX = centerEllipseX + leftMidX * sinAng + halfEllipseWidth * cosAng + adjustXMovePoint;
  calcEllipsePos.pageY = centerEllipseY + halfEllipseHeight * sinAng + rightMidY * cosAng + adjustYMovePoint;
  return calcEllipsePos;
}

//////////////////////////////////                                                         !!!!!!!!!!!!!!!!!!!!!!!!Placing marbles

//loops through placing first marble then fitting the others a set distance behind
function placeMarbles(rads1stMarble) {

  var marbleToMove = 1;
  var rads2ndMarble = rads1stMarble;
  var radsClockwiseMax = rads1stMarble + radsInc * maxRadStepsClockwiseToTry; //clockwise

  makeMarb23Vis(); //make marbles visible - making invis and vis only necessary because difference between mag and ellipse center allows them to go over edge


  for (i = rads1stMarble; i <= radsClockwiseMax; i += radsInc) {

    if (marbleToMove == 1) {
      //places the second object if it is not too close to the first, it is the same object and the distance is zero so the second object is placed

      if (checkIfSpaceToMoveIfSoMove(0, calcEllipsePos(marbleOnShape1, rads1stMarble), calcEllipsePos(marbleOnShape1, i))) {
        marbleToMove++;
        rads1stMarble = i; // shouldnt have change as should place it first go
        i += radsInc * stepsToSkipBeforeCheckNextMarble; //there will be more gap needed
        continue;
      } else {
        continue;
      }
    }
    if (marbleToMove == 2) {

      /*if there is a gap set the location and move on to next sequence*/
      if (checkIfSpaceToMoveIfSoMove(marbleRadius, calcEllipsePos(marbleOnShape1, rads1stMarble), calcEllipsePos(marbleOnShape2, i))) {
        marbleToMove++;
        rads2ndMarble = i;

        outOfArcInvisMarb23(2, rads1stMarble, i); //this is a fix for the different centers issue
        i += radsInc * stepsToSkipBeforeCheckNextMarble;

        continue;
      } else {
        continue;
      }
    }

    if (marbleToMove == 3) {
      /*if there is a gap set the location and move on to next sequence*/
      if (checkIfSpaceToMoveIfSoMove(marbleRadius, calcEllipsePos(marbleOnShape2, rads2ndMarble), calcEllipsePos(marbleOnShape3, i))) {
      //  console.log("placing marble3");
        outOfArcInvisMarb23(3, rads1stMarble, i); //this is a fix for the different centers issue
        marbleToMove++;
        break;
      } else {
        continue;
      }
    }
  }
  if (marbleToMove < 4) {
  //  console.log(" not all marbles placed the marbles not placed have been made invisible  the  variables for the loop need to be tweaked so this doesnt happen ");
    switch (marbleToMove) {
      case 2:
        marb2Img.hide();
        marb3Img.hide();
        break;
      case 3:
        marb3Img.hide();
        break;
    }
  }

}

function checkIfSpaceToMoveIfSoMove(minSeperation, aheadObjectLocation, behindObjectAndLocation) {

  var deltaX = aheadObjectLocation.pageX - behindObjectAndLocation.pageX;
  var deltaY = aheadObjectLocation.pageY - behindObjectAndLocation.pageY;
  var calculatedSeperation = Math.sqrt((Math.pow(deltaX, 2) + Math.pow(deltaY, 2)));

  if (minSeperation > calculatedSeperation) {
    return false;
  } else {

    /*rotate first as need to know distance travelled using current location to work out the rotation*/
    rotateMarbleBasedOnDelta(behindObjectAndLocation);
    /*move*/
    moveMyObject(behindObjectAndLocation);
    return true;
  }
}

//this places the top left of the marble we want to adjust it to bottom right
function moveMyObject(ObjAndMoveLoc) {
  var pushFromLeft = ObjAndMoveLoc.pageX; //- marbleRadius/2;
  var pushFromTop = ObjAndMoveLoc.pageY; //-marbleRadius/2;
  $(ObjAndMoveLoc.objectToMove).css("left", pushFromLeft);
  $(ObjAndMoveLoc.objectToMove).css("top", pushFromTop);
}

/////////////////////////////////                             !!!!!!!!!!!!!!!!!!!!Rotate the marbles

function rotateMarbleBasedOnDelta(marble) {
  /*rotation direction based on x direction*/

  var marbleWillTravelX = marble.pageX - parseInt($(marble.objectToMove).css("left"), 10);

  var rotDirection = Math.sign(marbleWillTravelX); //put in math round?
  /*need drop the px*/
  var marbleWillTravelY = marble.pageY - parseInt($(marble.objectToMove).css("top"), 10);

  /*flawed because not measuring arc but straight but at this scale doesnt really matter*/
  var distanceTravelled = Math.sqrt((Math.pow(marbleWillTravelX, 2) + Math.pow(marbleWillTravelY, 2))); /*same math as min distance calcuation but needs current location marble.css right etc*/


  /*im rotating by an amount that is change in distance from where it was last, divided by pi*diameter of the image
  this will give how many circumferences the move is (the movement is actually straight line between two old position so bigger jumps will be less acurate representation of the arc distance covered) then i multiply by 2*Pi which is a full rotation in radians
  im not cancelling so easier to follow later*/

  var rotAmount = rotDirection * distanceTravelled * 2 * Math.PI / (Math.PI * marbleRadius);

  var currentRotationRad = getRotationRad($(marble.objectToMove).find("img")); //expensive to keep looking this up couldnt each marble remember its own rotation
  var rotToApplyRad = currentRotationRad + rotAmount;


  $(marble.objectToMove).find("img").css({
    'transform': 'rotate(' + rotToApplyRad + 'rad)'
  });

}

function getRotationRad(obj) {
  var matrix = obj.css("transform");
  if (matrix !== 'none') {
    var values = matrix.split('(')[1].split(')')[0].split(',');
    var a = values[0];
    var b = values[1];
    var angle = Math.round(Math.atan2(b, a));
  } else {
    var angle = 0;
  }
  return angle; //(angle < 0) ? angle + radCircle : angle;
}


$lgLeftCard = $("#lgLeftCard").find(".aCard");
$lgRightCard = $("#lgRightCard").find(".aCard");
$lgMiddleCard = $("#lgMiddleCard").find(".aCard");

var $shapeCardsOriginalScale;
let lgLeftCardScaleChange, lgMiddleCardScaleChange, lgRightCardScaleChange,cosAngVal,  sinAngVal;
let maxScalePercChange = 0.75;//0.25;

function magnifyCards(magCardAng){
  cosAngVal = Math.cos(magCardAng);
  sinAngVal = Math.sin(magCardAng);

lgLeftCardScaleChange = maxScalePercChange*cosAngVal;
if(lgLeftCardScaleChange<0){lgLeftCardScaleChange=0;}
lgMiddleCardScaleChange = maxScalePercChange*(sinAngVal);
if(lgMiddleCardScaleChange<0){lgMiddleCardScaleChange=0;}
lgRightCardScaleChange = maxScalePercChange*(-1)*sinAngVal;
if(lgRightCardScaleChange<0){lgRightCardScaleChange=0;}

//console.log("lgLeftCardScaleChange = " + lgLeftCardScaleChange +" were using cosAngVal = "+cosAngVal+" sinAngVal = "+ sinAngVal)

$lgLeftCard.css({transform: "translate(-50%, 0%) " + "scale(" + $shapeCardsOriginalScale*(lgLeftCardScaleChange+1) + ")"  });
//+"+(-1)*100*lgLeftCardScaleChange + "+
$lgRightCard.css({transform: "translate(-50%, 0%) " + "scale(" + $shapeCardsOriginalScale*(lgRightCardScaleChange+1) + ")"  });
//+"+(-1)*100*lgRightCardScaleChange + "+
$lgMiddleCard.css({transform: "translate(-50%, 0%) " + "scale(" + $shapeCardsOriginalScale*(lgMiddleCardScaleChange+1) + ")"  });
//+"+(-1)*100*lgMiddleCardScaleChange +"+

}


////                                                           !!!!!!!!!! Notes for when return to doing the front end

//make the searches like $(".objects1") const and call marb1 etc using an enum to identify them


//later a function that translates rads around the mag, to rads around the ellipse accounting for their different center points would be cool
//currently the difference between centerMag and page allows the balls to roll off the back


//disable mouse scroll while dragging
//end drag of cursor leaves window
//Magnify cards based on magnifier position

//add some momentum to mouse wheel effect
//the rolling doesnt work very much with small increment maybe a round ceiling, or make sure it not changing direction alot cancelling itself out

//need to make the resize function be added when go to page 3 and remove when transistion

//the balls are not correctly placed maybe because of wanting to place them relative to the part of the ball touching
//so maybe change ellipse size and center on the middle of the marble - or calculate the adjustment to the circle placement based on its width
