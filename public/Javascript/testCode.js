/*jshint esversion: 6 */

$(".test").click(function() {


// $(".carouselOverlay").toggleClass("carouselDisplayNone");
// $('section').not('.carouselOverlay').toggleClass("carouselBlur");
//   generateCarousel();


//  $(".page2X0Y1").html(marbleLineLocationsPG2());

//$(".page4X0Y0").html(testPlacementFunction());
placeCardsPG4();
});




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


function makeMarbLocArrPG4(){












var  marbleLineLocationArr = [];
  var marbleOnLineWidth = 100; // later just make marble width in utils
    var marbleOnLineHeight = 100;
  var divTransOriginYAdjustment = -(marbleOnLineHeight+25);
  var divTransOriginXAdjustment = 0;
  var linearGradDeg = 195;
  var gradPerc = 44;
    for ( i = 0; i<= (W-marbleOnLineWidth); i+=marbleOnLineWidth){
      var xLoc=i;
    //  gradLinePosCalc(linearGradDeg, gradPerc,xLoc, divTransOriginXAdjustment, divTransOriginYAdjustment)
    var pos = gradLinePosCalc(linearGradDeg, gradPerc,xLoc, divTransOriginXAdjustment, divTransOriginYAdjustment);

  //this is so when we run out of project cards we just start again at the begginging

  marbleLineLocationArr.push(pos);

        }

      var htmlSquaresOnGradLine = "";
  marbleLineLocationArr.forEach(function(position){
  //make box here
   htmlSquaresOnGradLine += " <div class=' squarePG4 ' style='top:" + position[1] + "px;right:" + position[0] + "px;'></div>";

  });
  return htmlSquaresOnGradLine;
  }


  function placeCardsPG4(){




    var divTransOriginYAdjustment;
    var divTransOriginXAdjustment;
    var linearGradDeg = 195;//195
    var gradPerc = 44;

        var xLoc;
      //  gradLinePosCalc(linearGradDeg, gradPerc,xLoc, divTransOriginXAdjustment, divTransOriginYAdjustment)

    //this is so when we run out of project cards we just start again at the begginging

    var gapAroundCard=20;
    var cardWidth = 125+gapAroundCard;
    var cardHeight = 150 + gapAroundCard;
    var inset = cardWidth / 120;
    var measureFromCardCenter = (cardWidth - gapAroundCard) / 2;




          var numCols = Math.ceil(W / cardWidth);
          var cardsStillToBePlaced = true;
          var arrayLoopInt = 0;
          var steps = 0;
          var cardsPlaced = 0;
          var cardsConsecutivelyNotPlaced = 0;
          var htmlString = "";
          var techArrayHtml="";
          var linksArrayHtml="";

          var cardHtml1 = " <div class='scaleable-wrapper'> <div class='aCard'>    <div class='topRightRibbonArea'> <div class='topRightProjectTechnologiesArea'> ";
          var cardHtml2 = " <form class='formTechBtn' action='/carousel' method='get'> <button class='submitButtonNoStyle' type='submit' name='techButton' value= "; /*make sure value given single speach marks */
          var cardHtml3 = " ><img type='image' class='cardTechlinksImg' src= "; /*make sure gets two single marks*/
          var cardHtml4 = " alt='gitLink'></img>  </button>  </form> "
          var cardHtml4Endloop = "  </div> <div class='ribbonEnd'> </div>  </div> <div class='aCardWritingArea'> <div class='projectTitle'> ";
          var cardHtml5 = " </div> <img class='projectImage ' src= ";   /* make sure gets double '' */
          var cardHtml6 = " alt='projectImg'></img>  <div class='projectDescriptionSubtitle'>Description</div>  <div class='projectDescriptionText'> ";
          var cardHtml7 = " </div> </div> <div class='cardHyperlinksArea'> ";
          var cardHtml8 =  " <a href= "; /* marks needed '' */
           var cardHtml9 =  " ><img class='cardHyperlinksImg' src= "; /* marks needed */
           var cardHtml10 = " alt='gitLink'></img> </a> ";
           var cardHtml11 = " </div></div></div> ";




          while (cardsStillToBePlaced) {

            xLoc =  (steps % numCols) * cardWidth + inset;
            divTransOriginYAdjustment = cardHeight * Math.floor(steps / numCols);
           divTransOriginXAdjustment =   measureFromCardCenter;
            var pos = gradLinePosCalc(linearGradDeg, gradPerc,xLoc, divTransOriginXAdjustment, divTransOriginYAdjustment,false);
var x = xLoc; //w- because the while is based on placing using left and we use right
var y = pos[1]


          //this is so when we run out of project cards we just start again at the begginging
          arrayLoopInt = ((cardsPlaced)%projectCards.length);//not certanin will place whole loop// ((cardsPlaced-1)%projectCards.length)+1; //ones so modulus doesnt end on zero before steps incremented as want to start at zerosa
          //alert(cardsPlaced + "<--cardsPlaced" + projectCards.length + "  <--length  " + "array loop int -->"+arrayLoopInt);
            steps++;
            if (y < H) {
              cardsConsecutivelyNotPlaced = 0;
            cardsPlaced++; //put this where aCardHtml is to get the numbers
            // htmlString+= cardHtml;
          techArrayHtml="";
          linksArrayHtml="";
          console.log(" arrayLoopInt " +arrayLoopInt +" cardsPlaced " + cardsPlaced + " projectCards.length " + projectCards.length);
            for(var j=0; j<projectCards[arrayLoopInt].technologiesArray.length; j++ ){
                  techArrayHtml += cardHtml2 + projectCards[arrayLoopInt].technologiesArray[j].technologyName +
                  cardHtml3+projectCards[arrayLoopInt].technologiesArray[j].technologyImagePath+cardHtml4;}

            for(var k=0; k<projectCards[arrayLoopInt].linksArray.length; k++){
                      linksArrayHtml +=  cardHtml8+projectCards[arrayLoopInt].linksArray[k].linkHyperlink+cardHtml9+projectCards[arrayLoopInt].linksArray[k].linkImagePath+cardHtml10;
                  }
              htmlString += "<div class=' cardPG4 ' style='top:" + y + "px;left:" + x + "px;'> " +   cardHtml1+

          //start technologies array loop

          //end technologies array loop
          techArrayHtml+
              cardHtml4Endloop + projectCards[arrayLoopInt].projectName + cardHtml5 +projectCards[arrayLoopInt].projectImagePath+
              cardHtml6 +projectCards[arrayLoopInt].projectDescription+cardHtml7+
          //start links loop

          //end links loop
          linksArrayHtml+
              cardHtml11+" </div> ";
            } else {
              cardsConsecutivelyNotPlaced++;
              if (cardsConsecutivelyNotPlaced > numCols) {
                cardsStillToBePlaced = false;
                htmlString = "<div class='pg4Text'>Phil Tate</div>" + htmlString ;
                $(".page4X0Y0").html(htmlString);
              }
            }
          }
    }
