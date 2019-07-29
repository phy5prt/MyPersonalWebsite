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

var gapAroundCard=20;
var cardWidth = 125+gapAroundCard;
var cardHeight = 150 + gapAroundCard;
var inset = cardWidth / 120;
var measureFromCardCenter = (cardWidth - gapAroundCard) / 2;
var x;
var y;




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
  var arrayLoopInt = 0;
  var steps = 0;
  var cardsPlaced = 0;
  var cardsConsecutivelyNotPlaced = 0;
  var htmlString = "";
  var techArrayHtml="";
  var linksArrayHtml="";

var cardHtml1 = " <div class='aCard'> <div class='topRightProjectTechnologiesArea'> "
//<% for (let i = 0; i<page2BestCard.technologiesArray.length; i++) { %>


var cardHtml2 = " <form class='formTechBtn' action='/carousel' method='get'> <button class='submitButtonNoStyle' type='submit' name='techButton' value= ";
var cardHtml2technologyName = " 'unity' >";
//<%= page2BestCard.technologiesArray[i].technologyName %> >
var cardHtml3 = " <Img class='cardHyperlinksImg' src= ";
var cardHtml3technologyImagePath = " 'Images/tea.png' ";
//<%=page2BestCard.technologiesArray[i].technologyImagePath %>
var cardHtml4 = " alt='gitLink'>  </button>  </form> "
var cardHtml4Endloop = " </div> <div class='aCardWritingArea'> <div class='projectTitle'> ";
var cardHtml4projectName = "Project Title";
//<%= page2BestCard.projectName %>
var cardHtml5 = " </div> <img class='projectImage ' src= ";
var cardHtml5projectImagePath = " Images/postman.jpg ";
//<%= page2BestCard.projectImagePath %>
var cardHtml6 = " alt='projectImg'>  <div class='projectDescriptionSubtitle'>Description</div>  <div class='projectDescriptionText'> ";
var cardHtml6projectDescription = "A very very good project";
 //<%= page2BestCard.projectDescription %>
var cardHtml7 = " </div> </div> <div class='cardHyperlinksArea'> ";
// <% for (let i = 0; i<page2BestCard.linksArray.length; i++) { %>
var cardHtml8 =  " <a href= ";
var cardHtml8linkHyperlink = "https://unity.com/ ";
// <%= page2BestCard.linksArray[i].linkHyperlink %>
 var cardHtml9 =  " ><Img class='cardHyperlinksImg' src= ";
var cardHtml9linkImagePath = " 'Images/cocktailStraw.png' ";
// <%= page2BestCard.linksArray[i].linkImagePath %>
 var cardHtml10 = " alt='gitLink'> </a> "
 var cardHtml11 = " </div></div> ";

var projectCards = [{
  projectName:cardHtml4projectName,
  overallProjectRating:"10",
  projectDescription:cardHtml6projectDescription,
  projectImagePath:cardHtml5projectImagePath,
  technologiesArray:[{
    technologyName:cardHtml2technologyName,
    technologyImagePath:cardHtml3technologyImagePath,
    technologyExampleRating:"10"
  },
  {
    technologyName:cardHtml2technologyName,
    technologyImagePath:cardHtml3technologyImagePath,
    technologyExampleRating:"10"
  },
  {
    technologyName:cardHtml2technologyName,
    technologyImagePath:" 'Images/postman.jpg' ",
    technologyExampleRating:"10"
  }],
  linksArray:[{
    linkName:"unity",
    linkImagePath:" 'Images/postman.jpg' ",
    linkHyperlink:cardHtml8linkHyperlink
  },
  {
    linkName:"unity",
    linkImagePath:" 'Images/Shotglass.png' ",
    linkHyperlink:cardHtml8linkHyperlink
  },
  {
    linkName:"unity",
    linkImagePath:" 'Images/postman.jpg' ",
    linkHyperlink:cardHtml8linkHyperlink
  }]
}, {
  projectName: " Example2  ",
  overallProjectRating:"10",
  projectDescription:" Lauren Ipsum Latin bloke some writting here as vague as smoke, all it gives is space and shape, with less draw backs than a vape",
  projectImagePath: " 'Images/cocktailOlive.png' " ,
  technologiesArray:[
  {
    technologyName:cardHtml2technologyName,
    technologyImagePath:" ' Images/cocktailOlive.png ' ",
    technologyExampleRating:"10"
  },
  {
    technologyName:cardHtml2technologyName,
    technologyImagePath:" 'Images/postman.jpg' ",
    technologyExampleRating:"10"
  }],
  linksArray:[{
    linkName:"unity",
    linkImagePath:" 'Images/postman.jpg' ",
    linkHyperlink:cardHtml8linkHyperlink
  },
  {
    linkName:"unity",
    linkImagePath:" 'Images/waterglass.png' ",
    linkHyperlink:cardHtml8linkHyperlink
  }]
}]


  while (cardsStillToBePlaced) {

    x = (steps % numCols) * cardWidth + inset;
    y = blackLineGrad * (x + measureFromCardCenter) + blackLineC + cardHeight * Math.floor(steps / numCols); //but some cards wont be placed
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
              linksArrayHtml +=  cardHtml8+projectCards[arrayLoopInt].linksArray[0].linkHyperlink+cardHtml9+projectCards[arrayLoopInt].linksArray[0].linkImagePath+cardHtml10;
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
        htmlString = "<div class='pg4Text'>Phil Tate</div>" + htmlString;
        $(".page4X0Y0").html(htmlString);
      }
    }
  }
}

var updatePG4WithWindow = function() {
  placementLoop();
};
