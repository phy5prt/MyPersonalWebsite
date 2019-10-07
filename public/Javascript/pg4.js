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



  var allProjectCards=[{}];

const getAllProjectCards = function () {
var allCrds;
$.ajax({ url: '/projectCards', method: 'GET' })
.then(function (allCrds) {
  allProjectCards=allCrds;
})
.catch(function (err) {
console.log(err);
});
}
  getAllProjectCards();






function makeMarbLocArrPG4(){

var  marbleLineLocationArr = [];
  var marbleOnLineWidth = 100; // later just make marble width in utils
    var marbleOnLineHeight = 100;
  var divTransOriginYAdjustment = -(marbleOnLineHeight+25);
  var divTransOriginXAdjustment = 0;
  var linearGradDeg = 195;
  var gradPerc = 43;
    for ( i = 0; i<= (W-marbleOnLineWidth); i+=marbleOnLineWidth){
      var xLoc=i;
    //  gradLinePosCalc(linearGradDeg, gradPerc,xLoc, divTransOriginXAdjustment, divTransOriginYAdjustment)
    var pos = gradLinePosCalc(linearGradDeg, gradPerc,xLoc, divTransOriginXAdjustment, divTransOriginYAdjustment);

  //this is so when we run out of project cards we just start again at the begginging

  marbleLineLocationArr.push(pos);

        }
return marbleLineLocationArr;
}


function makeMarbSpawnLoc(xValueRightRelPg4){



  var marbleOnLineHeight = 100;
  var divTransOriginYAdjustment = -(marbleOnLineHeight+25);
  var divTransOriginXAdjustment = 0;
  var linearGradDeg = 195;
  var gradPerc = 44;

      var xLoc=xValueRightRelPg4;
    //  gradLinePosCalc(linearGradDeg, gradPerc,xLoc, divTransOriginXAdjustment, divTransOriginYAdjustment)
    var pos = gradLinePosCalc(linearGradDeg, gradPerc,xLoc, divTransOriginXAdjustment, divTransOriginYAdjustment);

  //this is so when we run out of project cards we just start again at the begginging

return pos;
}



// for(var i=0; i++){
//   allCaseMarbles[i].appendTo('.page4X0Y0'); //i could use detach().append this would take it from the glass case so im not copying ids because marbles cut and pasted not copied
//   allCaseMarbles[i].css({right:locationArr[i][0] , top:locationArr[i][1]});

function recalcAndPlaceMarblePosOnResizePG4(){
  //for every marble make it part of the section and put it on line
  var locationArr = makeMarbLocArrPG4();
  const allCaseMarbles = $(".aMarble");




  allCaseMarbles.each(function(i,value){

                if(i<locationArr.length && i<allCaseMarbles.length){ //if run out of either places or marbles stop
                  //i could use detach().append this would take it from the glass case so im not copying ids because marbles cut and pasted not copied
                    $(this)
                    .css({right:locationArr[i][0] , top:locationArr[i][1], position:'absolute'})
                    .appendTo('.page4X0Y0');
                    $(this).css("z-index","3");
  console.log("locationArr.length =  " + locationArr.length +"     allCaseMarbles.length =  " + allCaseMarbles.length);
}else{console.log("return called"); return false;}
        });
  }



function rollInFirst3Marbles (){ //want to make this redundants

    var locationArr = makeMarbLocArrPG4();




    //maybe use calc to adjust for lower marbles have them all to same percentage minus their widths
    //timeout so one happen after another
    //animation goes up down then rolls down the linear
    //later put line or marbles on the line to attack as button to bring up projects, cards under the linear
    //need to take 3 marbles on the far left as invisible and use their position as the end point for the marbles coming from pg 3
  var launchLocationAsOffset =  $(".marbleOnShape1").offset();
  var peakOfJumpLeft;
  var peakOfJumpTop = "-300px";//peak halfway between set off point and the edge pg4 let say 3 marbles high
var coordsLandingPoint = locationArr[locationArr.length-3];
var lineLandPosRight = coordsLandingPoint[0]+100;
var lineLandPosTop =  coordsLandingPoint[1];

var coordsEndPoint;
var lineEndPosRight;
var lineEndPosTop;

 //3 ball spaces from top right
//here will have end point calculated using i

//set to startpoint maybe later put into animate()
var marbleName;
for(let i=0;i<=2;i++){


setTimeout(
  function(){



   marbleName =".marbleOnShape"+(i+1).toString();
    coordsEndPoint = locationArr[i];
    lineEndPosRight = coordsEndPoint[0]+100; //why isnt it returning it with the width ... coz i used xloc?
    lineEndPosTop =  coordsEndPoint[1];
let currentMarble = keepPosChangeParentToPG4TopRightCoords($(marbleName),launchLocationAsOffset);
  //$(".marbleOnShape1").appendTo(".page4X0Y0").offset(launchLocationAsOffset);
  // var marbleWorkingOn = $(".marbleOnShape1");
  //   var magicNumber = 35;
  // var calcRightFromLeft = 2*W+magicNumber - (marbleWorkingOn.offset().left +  marbleWorkingOn.outerWidth());
  //  $(".marbleOnShape1").css({
  //   'right':calcRightFromLeft+'px',
  //   'left': 'auto'
  //  });
  //position is relative to parent and offset to doc
//peakOfJumpLeft = ($(".marbleOnShape1").position().left)/2;
if(i==0){peakOfJumpRight = ((  parseInt(currentMarble.css('right')) -W)/2) +W;} // only do first time
//animate to peak
let spinnableElement = currentMarble.find(".aMarble");
spinnableElement.addClass("rollingClockwise");
    currentMarble.animate({
      right: peakOfJumpRight, //'5vw', //left: '105vw',
      top: peakOfJumpTop//20vh;
    }, 200 , 'swing')

//animate to landing point
  //.css('left', 'unset')
  .animate({
//horrible magic number because going between right and left
    right: lineLandPosRight + "px",  //  left: W- lineLandPosRight-73 + "px",                   //left:     //'9vw',//  left: '109vw',
      top:     lineLandPosTop + "px" //'13vh'//top:63vh
    }, 200//200
    , 'swing').

//animate to end point
    animate({

    right:lineEndPosRight + "px",    //  left: W- lineEndPosRight-73 + "px",                   //left:     //'9vw',//  left: '109vw',
      top:     lineEndPosTop + "px"
      // left: '95vw',//  left: '195vw',
      // top: '55vh'//top: '105vh'
    }, 1500, 'swing'
    , function() {
       spinnableElement.removeClass("rollingClockwise");//spinnableElement.removeClass("rollingClockwise");
      // $(".philProfileMarbleImg").removeClass("rollingAntiClockwise");
      // makeMarble3philProfileMarble();
    });

    },i*300);
  }
    //
    // //a little wait first 50ms
    // setTimeout($(".marbleOnShape2").animate({
    //   left: '100vw',
    //   top: '20vh',
    // }, 200, 'swing').animate({
    //   left: '105vw',
    //   top: '60vh'
    // }, 200, 'swing').animate({
    //   left: '190vw',
    //   top: '103vh'
    // }, 1500, 'swing', function() {
    //   $(".aMarble").removeClass("rollingClockwise");
    //   makeMarble3philProfileMarble();
    // }), 100);
    //
    // setTimeout($(".philProfileMarble").animate({
    //   left: '96vw',
    //   top: '20vh',
    // }, 200, 'swing').animate({
    //   left: '100vw',
    //   top: '58vh'
    // }, 200, 'swing').animate({
    //   left: '185vw',
    //   top: '100vh'
    // }, 1500, 'swing', function() {
    //   $(".philProfileMarbleImg").removeClass("rollingClockwise");
    //   makeMarble3philProfileMarble();
    // }), 200);
    //
    // // setTimeout($('html, body').animate({
    // //   scrollTop: $(".page4X0Y0").offset().top,
    // //   scrollLeft: $(".page4X0Y0").offset().left
    // // }, 1400), 400);
  }


function moveScreenWithPG3Transistion(){
  setTimeout($('html, body').animate({
    scrollTop: $(".page4X0Y0").offset().top,
    scrollLeft: $(".page4X0Y0").offset().left
  }, 1400), 400);
}



  //will need a seperate bit for first 3
  function rollAllMarblesInPG4(){



    //for every marble make it part of the section and put it on line
    var locationArr = makeMarbLocArrPG4();  // i do this in both functions need to share it
    const allCaseMarbles = $("ul li .aMarble");

    var deltaY = Math.pow((locationArr[0][1]-locationArr[locationArr.length-1][1]),2);
    var deltaX = Math.pow((locationArr[locationArr.length-1][0]-locationArr[0][1]),2);
    var lineLength = Math.sqrt((deltaY+deltaX));

var delayBeginningAtFirstAnim =0 ;//i*animationTimeForConstSpeed/2;

var reservedLocations = 3;



moveScreenWithPG3Transistion();
 rollInFirst3Marbles();
 var timeToRollInFirst3 = 1200;
 var caseMarbleSpawnPos = makeMarbSpawnLoc(W+300); //later change to 2W calculate travel time to visual area
setTimeout(function(){
    allCaseMarbles.each(function(i,value){ //need to ensure
var j=i+reservedLocations;
 //dont place first 3
                  if(j<locationArr.length){ //if run out of either places or marbles stop
                    //i could use detach().append this would take it from the glass case so im not copying ids because marbles cut and pasted not copied
//var animationTime =(2000*locationArr.length)/ (locationArr.length - i); //it takes more time to cover more distance so should be large when i small


//animationTime calculated so all balls same speed
var distanceToTravel = lineLength-(lineLength/locationArr.length)*j; //units of line length
var desiredSpeed = 1;//seems yo be upset and not spin when less than 1

var animationTimeForConstSpeed = (distanceToTravel)/desiredSpeed;
delayBeginningAtFirstAnim+=animationTimeForConstSpeed/2; //think needs setTimeout with param as console log says each iteration has same value
//var delayBeginningAtFirstAnim =0 ;//i*animationTimeForConstSpeed/2;

//console.log("i = " + i + " animation time = "+animationTime+ "   timeBetweenAnimations = " + timeBetweenAnimations);
                      var thisMarble = $(this);
                      thisMarble
                      .appendTo('.page4X0Y0')
                      .css({right:caseMarbleSpawnPos[0] , top:caseMarbleSpawnPos[1], position:'absolute'});//.css({right:W+100 , top:-100, position:'absolute'}); // change to offscreen continuation of the line
                      thisMarble.css("z-index","3");
                      thisMarble.addClass("rollingClockwise");

//setTimeout needs to take parameters otherwise the values updatted efore it is ready
        setTimeout(function(){

                                  thisMarble.animate({ right:locationArr[j][0] , top:locationArr[j][1] },animationTimeForConstSpeed, 'swing', function(){thisMarble.removeClass("rollingClockwise");
                                 //console.log("animationTimeForConstSpeed = " + animationTimeForConstSpeed + "  delayBeginningAtFirstAnim  = "+ delayBeginningAtFirstAnim);
                                }
                    );
                }, delayBeginningAtFirstAnim );
                       //timeout so not all same time





  }else{return false;}
})},timeToRollInFirst3);
    }

//placeCardsPG4(); called by transistion

  function placeCardsPG4(){
    const cardHolderPG4MasterTemplate = $("#cardHolderPG4Template").contents();
    const page4TitleMasterTemplate = $("#page4TitleTemplate").contents();
    var page4TitleTemplate = page4TitleMasterTemplate.clone(true)


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
          // var techArrayHtml="";
          // var linksArrayHtml="";
          //
          // var cardHtml1 = " <div class='scaleable-wrapper'> <div class='aCard'>    <div class='topRightRibbonArea'> <div class='topRightProjectTechnologiesArea'><div class ='ribbonLoopShadowSpacer'></div> ";
          // var cardHtml2 = " <div class='cardTechMarbleImgHolder'>"; /*make sure value given single speach marks */
          // var cardHtml3 = " <img type='image' class='cardTechlinksImg aMarble' src= "; /*make sure gets two single marks*/
          // var cardHtml4 = " alt='gitLink'></img>  </div> "
          // var cardHtml4Endloop = "  </div> <div class='ribbonEnd'> </div>  </div> <div class='aCardWritingArea'> <div class='projectTitle'> ";
          // var cardHtml5 = " </div> <img class='projectImage ' src= ";   /* make sure gets double '' */
          // var cardHtml6 = " alt='projectImg'></img>  <div class='projectDescriptionSubtitle'>Description</div>  <div class='projectDescriptionText'> ";
          // var cardHtml7 = " </div> </div> <div class='cardHyperlinksArea'> ";
          // var cardHtml8 =  " <a href= "; /* marks needed '' */
          //  var cardHtml9 =  " ><img class='cardHyperlinksImg' src= "; /* marks needed */
          //  var cardHtml10 = " alt='gitLink'></img> </a> ";
          //  var cardHtml11 = " </div></div></div> ";




          while (cardsStillToBePlaced) {

            xLoc =  (steps % numCols) * cardWidth + inset;
            divTransOriginYAdjustment = cardHeight * Math.floor(steps / numCols);
           divTransOriginXAdjustment =   measureFromCardCenter;
            var pos = gradLinePosCalc(linearGradDeg, gradPerc,xLoc, divTransOriginXAdjustment, divTransOriginYAdjustment, false);
  var x = xLoc; //w- because the while is based on placing using left and we use right
  var y = pos[1]
var cardsForPage4;

          //this is so when we run out of project cards we just start again at the begginging
          arrayLoopInt = ((cardsPlaced)%allProjectCards.length);//not certanin will place whole loop// ((cardsPlaced-1)%allProjectCards.length)+1; //ones so modulus doesnt end on zero before steps incremented as want to start at zerosa
          //alert(cardsPlaced + "<--cardsPlaced" + allProjectCards.length + "  <--length  " + "array loop int -->"+arrayLoopInt);
            steps++;
            if (y < H) {
              cardsConsecutivelyNotPlaced = 0;
            cardsPlaced++; //put this where aCardHtml is to get the numbers


          var cardHolderPG4Template = cardHolderPG4MasterTemplate.clone(true);
           cardHolderPG4Template.attr('style','top:'+y+'px; left:'+x+'px;');

            cardHolderPG4Template.html(makeACard(allProjectCards[arrayLoopInt]));
            page4TitleTemplate.append(cardHolderPG4Template);

          //cardHolderPG4Template.insertAfter(page4TitleTemplate);

            // htmlString+= cardHtml;
          // techArrayHtml="";
          // linksArrayHtml="";
          // console.log(" arrayLoopInt " +arrayLoopInt +" cardsPlaced " + cardsPlaced + " allProjectCards.length " + allProjectCards.length);
          //   for(var j=0; j<allProjectCards[arrayLoopInt].technologiesArray.length; j++ ){
          //         techArrayHtml += cardHtml2 + allProjectCards[arrayLoopInt].technologiesArray[j].technologyName +
          //         cardHtml3+allProjectCards[arrayLoopInt].technologiesArray[j].technologyImagePath+cardHtml4;}
          //
          //   for(var k=0; k<allProjectCards[arrayLoopInt].linksArray.length; k++){
          //             linksArrayHtml +=  cardHtml8+allProjectCards[arrayLoopInt].linksArray[k].linkHyperlink+cardHtml9+allProjectCards[arrayLoopInt].linksArray[k].linkImagePath+cardHtml10;
          //         }
          //     htmlString += "<div class=' cardPG4 ' style='top:" + y + "px;left:" + x + "px;'> " +   cardHtml1+
          //
          // //start technologies array loop
          //
          // //end technologies array loop
          // techArrayHtml+
          //     cardHtml4Endloop + allProjectCards[arrayLoopInt].projectName + cardHtml5 +allProjectCards[arrayLoopInt].projectImagePath+
          //     cardHtml6 +allProjectCards[arrayLoopInt].projectDescription+cardHtml7+
          // //start links loop
          //
          // //end links loop
          // linksArrayHtml+
          //     cardHtml11+" </div> ";

            } else {
              cardsConsecutivelyNotPlaced++;
              if (cardsConsecutivelyNotPlaced > numCols) {
                cardsStillToBePlaced = false;


                $(".page4X0Y0").html(  page4TitleTemplate);
              }
            }
          }


/*after make cards make them clickable*/
$(".page4X0Y0").find(".aCard").on('click', {propagation:false},cardToFrontClick
// function cardToFront(e){
//
// $(".singleCardOverlay").removeClass("singleCardOverlayDisplayNone");
// $('section').not('.singleCardOverlay').addClass("singleCardDisplayingBlur");
// var copyForSingleCardDisplay = $(this).parent().clone();
// $(".singleCardContainer").html(copyForSingleCardDisplay);
// initSetCards($(".singleCardContainer"));
// copyForSingleCardDisplay.find(".aMarble").click({propagate:false},marbleTechClick);
//
// // copyForSingleCardDisplay.find(".aMarble").click(
// // function(ev){ev.stopPropagation();
// //     var saughtTechnology = $(this).attr('value');  /*var attr = $(this).attr('name'); */
// //   //  console.log(saughtTechnology);
// //   $(".carouselOverlay").toggleClass("carouselDisplayNone");
// //   $('section').not('.carouselOverlay, .singleCardOverlay').toggleClass("carouselBlur");
// //    if(typeof saughtTechnology  !== typeof undefined && saughtTechnology  !== false){
// //
// //
// //        $("#carouselTechTitle").text(saughtTechnology+ " Projects"); // will need some formatting
// //     //putting the generation into get saughts code so it happen in right order another approach would be to make getCards async
// //   getSaughtTechnologyProjectCardsAndMakeCarousel(saughtTechnology);}else{
// //
// //  $("#carouselTechTitle").text("All "+ "Projects");
// //   generateCarouselWithSaughtTechnologyCards(); /*if havent found the technology just show all its a graceful fail*/
// //   }
// //
// // }
// //
// //
// // );
// copyForSingleCardDisplay.on('click',function removeSingleCardOverlay(e){ //rename glass blur when can refactor and put on the carousel too //problem is triggers even if display none
// //do not do anything if this event was propagated from children
// //  if( e.target !== this ){  return;}else{
// $(".singleCardOverlay").addClass("singleCardOverlayDisplayNone");
// $('section').not('.singleCardOverlay').removeClass("singleCardDisplayingBlur");
// }
// //}
// );
// }
);
/*and make their links clickable*/
//copyForSingleCardDisplay($(".page4X0Y0").find(".cardTechlinksImg.aMarble"));
// $(".page4X0Y0").find(".cardTechlinksImg.aMarble").click( //so dont double apply it to the marbles not in cards
// function(ev){ev.stopPropagation();
//     var saughtTechnology = $(this).attr('value');  /*var attr = $(this).attr('name'); */
//   //  console.log(saughtTechnology);
//   $(".carouselOverlay").toggleClass("carouselDisplayNone");
//   $('section').not('.carouselOverlay, .singleCardOverlay').toggleClass("carouselBlur");
//    if(typeof saughtTechnology  !== typeof undefined && saughtTechnology  !== false){
//
//
//        $("#carouselTechTitle").text(saughtTechnology+ " Projects"); // will need some formatting
//     //putting the generation into get saughts code so it happen in right order another approach would be to make getCards async
//   getSaughtTechnologyProjectCardsAndMakeCarousel(saughtTechnology);}else{
//
//  $("#carouselTechTitle").text("All "+ "Projects");
//   generateCarouselWithSaughtTechnologyCards(); /*if havent found the technology just show all its a graceful fail*/
//   }
//
// }
//
//
// );

}



//marble placement will need to update too later
var updatePG4WithWindow = function() {
  placeCardsPG4();
};

function keepPosChangeParentToPG4TopRightCoords(div, desiredPos){
  div.appendTo(".page4X0Y0").offset(desiredPos);

    var magicNumber = 35;
  var calcRightFromLeft = 2*W+magicNumber - (div.offset().left); //+  div.outerWidth());
  div.css({
    'right':calcRightFromLeft+'px',
    'left': 'auto'
   });

   return div;
}
