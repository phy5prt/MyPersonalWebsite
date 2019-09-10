/*jshint esversion: 6 */
//can i replace card placement with res.write

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
return marbleLineLocationArr;
}


//placeCardsPG4(); called by transistion

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

//marble placement will need to update too later
var updatePG4WithWindow = function() {
  placeCardsPG4();
};
