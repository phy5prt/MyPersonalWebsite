//should exclude scroll bars 

var W = document.documentElement.clientWidth;
var H = document.documentElement.clientHeight;

//the degrees is used to calulate the gradient of the line is used to work out where the perpendicular line of colour is to the grad line
//its not really the center its the transforms point of rotation ..transform divTransOriginXAdjustment
//code assumes placement based on top right // should it be bottom right?
//adjustments should be based on same top right
function gradLinePosCalc(linearGradDeg, gradPerc,xLoc, divTransOriginXAdjustment, divTransOriginYAdjustment, useLeft =true){
var placementSign = useLeft?  1:-1;

var linearGradRad = linearGradDeg * Math.PI / 180; //gradient into radians



//y=mx+c    were finding m here
//the angle we have is between the y and the gradient line so take it for 90 to get x axis to gradient line
//the gradLine is measured clockwise from north we need measure anticlockwise from east. so 360 - the angle will give us how to get to it anticlockwise from north but we want from east so take off an extra quater

var angleBetweenY0AndGradLine = linearGradRad + 2 * Math.PI / 4; //(A-2*Math.PI/2)+A;//A;//( 2*Math.PI-A-2*Math.PI/4);
var gradLineGrad = Math.tan(angleBetweenY0AndGradLine);
var blackLineGrad = placementSign*1 / gradLineGrad;

//the gradline passes through 0,0 which is W/2 H/2 for us
//y=mx+c so c=y-mx x= y-c/m
//var gradLineC = H / 2 - gradLineGrad * W / 2;
//now have y = gradLineGrad*x+GradLineC

//the line goes until 70% across screen so 70% of my W;
//the gradLine is at 43-45



var gradLineLength = Math.abs(W * Math.sin(linearGradRad)) + Math.abs(H * Math.cos(linearGradRad));
var deltaHypotenuse = (50 - gradPerc) / 100 * gradLineLength; //where does the 100 and the 50 come from i cant remember
var angBetweenX0AndGradientLine = (linearGradRad - 2 * Math.PI / 2);


//had to swop sin and cos my math seemed right but maybe its due to everything being upside down
var deltaX = deltaHypotenuse * Math.sin(angBetweenX0AndGradientLine);
var deltaY = deltaHypotenuse * Math.cos(angBetweenX0AndGradientLine);
//page is 2 widths wide 2 screen high
var intersectX = W / 2 + deltaX;
var intersectY = H / 2 - deltaY;

var blackLineC = intersectY - blackLineGrad * intersectX;
//var blackLineCReverse = intersectY - (-1)*blackLineGrad * intersectX;

//does this make sense we want to find something relative to a point on an object
//but move their corner based on top left,
    var right = xLoc+divTransOriginXAdjustment;
  //  console.log("blackLineGrad=  "+blackLineGrad+"  blackLineC= " + blackLineC +"  divTransOriginYAdjustment=  "+divTransOriginYAdjustment);
    var top = blackLineGrad * (right)+ blackLineC+divTransOriginYAdjustment; //but some cards wont be placed
//this is so when we run out of project cards we just start again at the begginging
var posOnLineAdjustedForDivCenterPoint = [];
posOnLineAdjustedForDivCenterPoint.push( right, top);

return posOnLineAdjustedForDivCenterPoint;
}
