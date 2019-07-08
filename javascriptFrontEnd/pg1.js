/*jshint esversion: 6 */
 $(".page1X0Y0").get(0).scrollIntoView();

//think will need document ready in all the code files
$(document).ready(function() {
    var windowHeight = $(window).height();
    
 $(" .drinkButton ").click(function(e) {


   /*need to set it to permament tilt then disable or when mouse comes off hover will set
   directory off the other trajectory*/
   $(".drinkButton").prop("disabled", true);
   /*so hovering doesnt tilt it during flight*/
   /*
   $(this).find("img").unbind("mouseenter mouseleave");
   $(this).unbind("mouseenter mouseleave");
   */
   $(this).find("img").css(
     "pointer-events", "none"
   );
   $(this).css(
     "pointer-events", "none"
   );
   /*doesnt seem to stop it reverting on not hover*/

   /*this moves the chosen glass*/
   $(this).find("img").addClass("my-animation");


   /*this fades in corner*/
   $("#corner-nav").addClass("fade-in-corner");
   /*this delays and fades in drink*/
   /*set image source to the one they chose*/
   $("#chosen-beverage").attr('src', $(this).find("img").attr('src'));
   $("#chosen-beverage").addClass("fade-in-beverage");


   $('.myMarbleY').addClass("myMarbleYAnim");

   $('.myMarbleX').addClass("myMarbleXAnim");
   /*use transition to make it fade in*/
   $(".myMarbleImg").removeClass("invisible");
   $(".myMarbleImg").addClass("visible");

   /*as the ball reaches the top of the screen we want to follow it a little and drop
   a tab with an arrow and the marble collected that when clicked on move you to the next screen

   /*used to be a bit of kick with bounce which i liked lost it not needs tuning*/
   e.preventDefault();
   $('html, body').delay(3500).animate({
     scrollTop: windowHeight - 20
   }, '300');
   setTimeout(function() {
     $(".tab2").removeClass("invisible").addClass("visible");
   }, 3800);

 });


 $(".tab2").click(function() {
   /*maybe later allow it to toggle between backward and forward navigation*/
   $(".drinkButton").prop("disabled", true);

   /*place marble may animate later*/
   $(".myMarbleImg").removeClass("rollingClockwise");
   /*think i need to contain the whole marble in someting to move it so can keep its animate x and y div*/
   /*also there is two! so need to select only first*/
   /*myMarbleX and myMarble y have a left and top position, but they should just be handles the marble should of started in a container with these handles
when redo animation will have to put it in such a container or have it start invisible and change the animation start location for Now
will just remove these attributes
   */
   $('.myMarbleY').removeClass("myMarbleYAnim");
   $('.myMarbleX').removeClass("myMarbleXAnim");
   $('.myMarbleY').css({"top":"0"});
   $('.myMarbleX').css({"left":"0"});
   /*
   $(".myMarble").detach().prependTo(".containerToReceiveMyMarblePG2");*/
   /*going to put it in the page as im hoping if in the same space as the background can move it in parrallel easier */
   $(".myMarble").detach().prependTo(".page2X0Y1");
   $(".myMarble").addClass("myMarblePg2Start");


   /*
   $(".myMarbleY").css("top", "-53vh").css("right", "16vw");
*/

   $('html, body').animate({
     scrollTop: $(".page2X0Y1").offset().top
   }, 800);
   /*im not dealing with this at moment so getting marble in the right place is just so i can see what im making*/

   /*should i delete the other page with transition*/
   /*for now I am going to delete the bits im not ready to use*/
   /*i should be using toggle*/
   $(".tab2").removeClass("visible").addClass("invisible");
   /*probably dont need time out probs can just put it on the end*/
   setTimeout(function() {
     $(".tab2").remove();

   }, 3000);
   /*later make the handle slide into view instead from the right*/
   /*dont like should be positioned where i want it then should change it fixed*/
   $(".case2position");
 });



});
