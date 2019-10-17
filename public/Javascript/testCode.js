/*jshint esversion: 6 */
/*
<button class="test">ClickMe</button>
*/



//
// function hi(){alert('Hi!');}
// function doIHaveEvent(event){
//   console.log(event);
//     console.log(event.data.aStringPP);
// }
// {aStringPP:"goat"},doIHaveEvent
$(".test").click(

// function(){
//
//    $("#firstRowCornerNav").fadeTo(1000, 0);
//    $("#firstRowCornerNav").
  // children.fadeOut(1000);



}

);



  // var allCards = $('body');
  // initSetCards(allCards);
  //
  //
  // $(".aCard").on('click',
  // function cardToFront(e){
  //
  // $(".singleCardOverlay").removeClass("singleCardOverlayDisplayNone");
  // $('section').not('.singleCardOverlay').addClass("carouselBlur");
  // var copyForSingleCardDisplay = $(this).parent().clone();
  // $(".singleCardContainer").html(copyForSingleCardDisplay);
  // initSetCards($(".singleCardContainer"));
  //
  // copyForSingleCardDisplay.on('click',function removeSingleCardOverlay(e){ //rename glass blur when can refactor and put on the carousel too //problem is triggers even if display none
  // //do not do anything if this event was propagated from children
  //   if( e.target !== this ){  return;}else{
  // $(".singleCardOverlay").addClass("singleCardOverlayDisplayNone");
  // $('section').not('.singleCardOverlay').removeClass("carouselBlur");
  // }
  // });
  // });
  //
  // $(" .singleCardOverlayBackground").on('click',function removeSingleCardOverlay(e){ //rename glass blur when can refactor and put on the carousel too //problem is triggers even if display none
  //   if( e.target !== this ){ return;}else{
  // e.stopPropagation();
  // $(".singleCardOverlay").addClass("singleCardOverlayDisplayNone");
  // $('section').not('.singleCardOverlay').removeClass("carouselBlur");}
  // });
  //


// $(".carouselOverlay").toggleClass("carouselDisplayNone");
// $('section').not('.carouselOverlay').toggleClass("carouselBlur");
//   generateCarousel();


//  $(".page2X0Y1").html(marbleLineLocationsPG2());
//$(".page4X0Y0").html(showMarbleLocations(makeMarbLocArrPG4()));
//recalcAndPlaceMarblePosOnResizePG4();
//rollMarblesInPG4();
// reparentKeepLocation();
//newPG2PosShower();


// updateDummyData();
// console.log(projectCards);
// setTimeout(function(){
//   $('body').addClass("affordanceDropShadow");
// setTimeout(function () {
//     $('body').removeClass("affordanceDropShadow");
// }, 2000);},2000);


// var data = updateDummyDataWithCardsOfTechla();
// console.log("this should appear last, it is the data from the backend: " + data);

// var data = updateDummyDataWithCardsOfTechla();



//slideInDraw();


//});


// var resizeMarbleCase = function(e) {
//
//   const width = original_width - (e.pageX - original_mouse_x);
//
//   if (width > minimum_size && width < maximum_size) {
//     element.style.width = width + 'px';
//     element.style.left = original_x + (e.pageX - original_mouse_x) + 'px';
//   }
//
// };


// $(".aCard").on('click',
// function cardToFront(e){
// $(".singleCardOverlay").toggleClass("singleCardOverlayDisplayNone");
// $('section').not('.singleCardOverlay').toggleClass("carouselBlur");
// var copyForSingleCardDisplay = $(this).parent().clone();
// $(".singleCardContainer").html(copyForSingleCardDisplay);
// initSetCards($(".singleCardContainer"));
// copyForSingleCardDisplay.on('click',function toggleSingleCardOverlay(e){ //rename glass blur when can refactor and put on the carousel too //problem is triggers even if display none
// //do not do anything if this event was propagated from children
//   if( e.target !== this ){  return;}else{
// $(".singleCardOverlay").addClass("singleCardOverlayDisplayNone");
// $('section').not('.singleCardOverlay').removeClass("carouselBlur");}
// });
// });

// $(".singleCardOverlay .singleCardContainer, .singleCardOverlayBackground").on('click',function toggleSingleCardOverlay(e){ //rename glass blur when can refactor and put on the carousel too //problem is triggers even if display none
//   if( e.target !== this ){ console.log(" not !UN! toggling because of this being "+ this + " and target being " + e.target.getClass); return;}else{
//
// console.log("hide overlay triggered"+ e);
// $(".singleCardOverlay").toggleClass("singleCardOverlayDisplayNone");
// $('section').not('.singleCardOverlay').toggleClass("carouselBlur");}
//
// });
// $(" .singleCardContainer").on('click',function toggleSingleCardOverlay(e){ //rename glass blur when can refactor and put on the carousel too //problem is triggers even if display none
//   if( e.target !== this ){ console.log(" not !UN! toggling because of this being "+ this + " and target being " + e.target.getClass); return;}else{
//
// console.log("hide overlay triggered"+ e);
// $(".singleCardOverlay").toggleClass("singleCardOverlayDisplayNone");
// $('section').not('.singleCardOverlay').toggleClass("carouselBlur");}
//
// });

// $(" .singleCardOverlayBackground").on('click',function toggleSingleCardOverlay(e){ //rename glass blur when can refactor and put on the carousel too //problem is triggers even if display none
//   if( e.target !== this ){ return;}else{
// e.stopPropagation();
// $(".singleCardOverlay").addClass("singleCardOverlayDisplayNone");
// $('section').not('.singleCardOverlay').removeClass("carouselBlur");}
// });



// function toggleSingleCardOverlay(e){ //rename glass blur when can refactor and put on the carousel too //problem is triggers even if display none
//   if( e.target !== this ){console.log(" not toggling because of this being "+ this + " and target being " + e.target);  return;}
//
//
// $(".singleCardOverlay").toggleClass("singleCardOverlayDisplayNone");
// $('section').not('.singleCardOverlay').toggleClass("carouselBlur");
//
// }


//
//
//
// function slideInDraw(){
//
//
//   const element = document.querySelector('.case2position');
//
//   let startPos =0; //needs to be where case starts minus its own width i think as does not go to zero thought his may be ebcause of its max
//   let endPos = (document.documentElement.clientWidth/100)*15-70-50; //95vw //so needs to travel 10vw //i must get px as pencent a few time //im minusing borderer width and half a ball
//   let direction = -1; //are we measure from right or left traveling right or left
//   let posToTravel = direction*(startPos - endPos);
// let timeToCloseIn = 100; //750
//   let timePerLoop = 30;//30
//
// let k = {pageX:startPos};//need to start as right hand edge pixels in which we should set to right 15vw so in line with tab
//
//
//
//
// original_width = parseFloat(getComputedStyle(element, null).getPropertyValue('width').replace('px', ''));//seems to be out by an amount because its based on left?
// original_x =element.getBoundingClientRect().left;
// original_mouse_x = k.pageX;
//
//   //  let original_width = 0;
//
//
//
//
//     let resizeMarbleCase = function(e) {
//
//
//   const width = original_width - (e.pageX - original_mouse_x);
//         element.style.width = width + 'px';
//         element.style.left = original_x + (e.pageX - original_mouse_x) +'px';//-70 to counteract the right pos
//
//     };
//
//
// let resizeIncrementer =function(){
//
//
//
// let incrementWidthPerLoop = posToTravel/(timeToCloseIn/timePerLoop);
//
//     k.pageX+=incrementWidthPerLoop;
//     console.log("k.pageX is now " + k.pageX );
//     resizeMarbleCase(k);     // Do something every 2 seconds
//
// }
// let mySetInterval = setInterval(resizeIncrementer, timePerLoop);
//
// //mySetInterval();
// setTimeout(function(){
//   console.log("!!!!!!!!!!!!!!1   CLEARING INTERVAL !!!!!!!!!!!!!!!!!!!");
//   clearInterval(mySetInterval);
// },timeToCloseIn);
// }
//
//
// const updateDummyDataWithCardsOfTechla = function updateDummyDataWithCardsOfTechla(saughtTechnology = "la") {
//   console.log("using get saught technology test");
// var sghtCrds;
// //carousel?techButton=Botox
// //this may need to be synchronouse
// var allCrds;
// $.ajax({
//   url: '/carousel',
//   method: 'GET',
// data: {techButton: saughtTechnology},
//  success: function (allCrds) {
//      generateCarouselWithSaughtTechnologyCards(allCrds);
//    projectCards=allCrds;
//  let htmlstr = '';
//  allCrds.forEach(prjCard => {
//  htmlstr += "<h1 class='content'>"+prjCard.projectName+"</h1>";
//  });
//  $('.page2X0Y1').html(htmlstr);
// }})
// // .then(function (saughtTechnologyProjectCards) {
// //
// //   console.log("getSaughtTechnology is returning: " + saughtTechnologyProjectCards.Length + " cards of technology: " + saughtTechnology +  " they look like this " + saughtTechnologyProjectCards + "  " + saughtTechnologyProjectCards[0]);
// // return saughtTechnologyProjectCards;
// // })
// .catch(function (err) {
// console.log(err);
// });}
//
//
//
//
//
//
//
// const updateDummyData = function () {
// projectCards = $.ajax({ url: '/projectCards', method: 'GET' })
// .catch(function (err) {
// console.log(err);
// });
// }
//
//
// const render = function () {
//   var allCrds;//i added
// $.ajax({ url: '/projectCards', method: 'GET' })
// .then(function (allCrds) {
//   projectCards=allCrds;
// let htmlstr = '';
// allCrds.forEach(prjCard => {
// htmlstr += "<h1 class='content'>"+prjCard.projectName+"</h1>";
// });
// $('.page2X0Y1').html(htmlstr);
// })
//
// .catch(function (err) {
// console.log(err);
// });
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// function newPG2PosShower(){
// var arrMarbAndCardPos=[];
// //for(let i=0;i<101;i+=100){arrMarbAndCardPos.push( gradLinePosCalc(165, 43,0.3*W+i, 0, 0));}
// arrMarbAndCardPos.push( gradLinePosCalc(165, 43,(W), 0, 0));
// //just to testing
// $(".page2X0Y1").html((showMarbleLocations(arrMarbAndCardPos)));
// console.log("should be able to see boxes");
// }
//
//
// function reparentKeepLocation(){
//   var marbleWorkingOn = $(".marbleOnShape1");
//     var magicNumber = 35;
//   var marbleOldOffset =  marbleWorkingOn.offset();
//   marbleWorkingOn.appendTo(".page4X0Y0").offset( marbleOldOffset);
//
// //change it to right based property
//
// //$('body').width() - (el.offsetParent.offset().left + el.offsetParent().width())
// //console.log("W = " + W + "    $('body').width() = "+$('body').width()+  " $(document).width() = "+ $(document).width() +" marbleWorkingOn.offset().left =  " + marbleWorkingOn.offset().left + " marbleWorkingOn.outerWidth() = " + marbleWorkingOn.width());
// var calcRightFromLeft = 2*W+magicNumber - (marbleWorkingOn.offset().left +  marbleWorkingOn.outerWidth());
//  $(".marbleOnShape1").css({
//   'right':calcRightFromLeft+'px',
//   'left': 'auto'
//  });
//
// }
//
// //-165 195 is same
// var APG2 = -165 * Math.PI / 180; //does this angle need units changing or coordinates changed it assumes north clockwise
//
//
//
// //y=mx+c    were finding m here
// //the angle we have is between the y and the gradient line so take it for 90 to get x axis to gradient line
// //the gradLine is measured clockwise from north we need measure anticlockwise from east. so 360 - the angle will give us how to get to it anticlockwise from north but we want from east so take off an extra quater
//
// var angleBetweenY0AndGradLinePG2 = APG2 + 2 * Math.PI / 4; //(A-2*Math.PI/2)+A;//A;//( 2*Math.PI-A-2*Math.PI/4);
// var gradLineGradPG2 = Math.tan(angleBetweenY0AndGradLinePG2);
// var blackLineGradPG2 = 1 / gradLineGradPG2;
//
// //the gradline passes through 0,0 which is W/2 H/2 for us
// //y=mx+c so c=y-mx x= y-c/m
// var gradLineCPG2 = H / 2 - gradLineGradPG2 * W / 2;
// //now have y = gradLineGrad*x+GradLineC
//
// //the line goes until 70% across screen so 70% of my W;
// //the gradLine is at 43-45
// var gradPercPG2 = 44;
// var deltaXPG2 = 0;
//
// var gradLineLengthPG2 = Math.abs(W * Math.sin(APG2)) + Math.abs(H * Math.cos(APG2));
// var deltaHypotenusePG2 = (50 - gradPercPG2) / 100 * gradLineLengthPG2;
// var angBetweenX0AndGradientLinePG2 = (APG2 - 2 * Math.PI / 2);
//
//
// //had to swop sin and cos my math seemed right but maybe its due to everything being upside down
// var deltaXPG2 = deltaHypotenusePG2 * Math.sin(angBetweenX0AndGradientLinePG2);
// var deltaYPG2 = deltaHypotenusePG2 * Math.cos(angBetweenX0AndGradientLinePG2);
// var intersectXPG2 = W / 2 + deltaXPG2;
// var intersectYPG2 = H / 2 - deltaYPG2;
// var blackLineCPG2 = intersectYPG2 - blackLineGradPG2 * intersectXPG2;
//
//
// var xPG2;
// var yPG2;
//
//
//
// var marbleLineLocationArrPG2 = [];
// var blackLineCReversePG2 = intersectYPG2 - (-1)*blackLineGradPG2 * intersectXPG2;
//
// function marbleLineLocationsPG2(){
//
// //the index will be the x in from the right
// //
// var marbleOnLineWidthPG2 = 100; // later just make marble width in utils
// var measureFromMarbleTopRightPG2 = 75;
//
// for( i=0;i<101;i+=100){
//     xForMarblePG2 = W*(0.3)-marbleOnLineWidthPG2/2+i; //the marble width is to account from where measure from
//     yForMarblePG2 = (-1)*blackLineGradPG2 * (xForMarblePG2)+ blackLineCReversePG2-measureFromMarbleTopRightPG2; //but some cards wont be placed
// //this is so when we run out of project cards we just start again at the begginging
//
// marbleLineLocationArrPG2.push([  xForMarblePG2, yForMarblePG2]);
// }
// var fudgeDown =0; var fudgeLeft=0;
// var halfCardHeight = $(".pg2CardContainer").height()/2;
//
//
// $(".pg2CardContainer").css({'top':marbleLineLocationArrPG2[0][1] -halfCardHeight+ fudgeDown + 'px' }).css({'right': marbleLineLocationArrPG2[0][0] + fudgeLeft+ 'px'});/*doesnt work because based on marble size*/
//
//  //     var htmlSquaresOnGradLinePG2 = "";
//  // marbleLineLocationArrPG2.forEach(function(position){
//  // //make box here
//  //  htmlSquaresOnGradLinePG2 += " <div class=' squarePG4 ' style='top:" + position[1] + "px;right:" + position[0] + "px;'></div>";
//  //
//  // });
//  // return htmlSquaresOnGradLinePG2;
// }
//
//
//
//
// function showMarbleLocations(  marbleLineLocationArr){
// var htmlSquaresOnGradLine = "";
//   marbleLineLocationArr.forEach(function(position){
//   //make box here
//    htmlSquaresOnGradLine += " <div class=' squarePG4 ' style='top:" + position[1] + "px;right:" + position[0] + "px;'></div>";
//  htmlSquaresOnGradLine += " <div class=' dot ' style='top:" + position[1] + "px;right:" + position[0] + "px;'></div>";
//   });
//   return htmlSquaresOnGradLine;
//   }
