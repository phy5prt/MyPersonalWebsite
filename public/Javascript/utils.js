/*jshint esversion: 6 */

var windowHeight = $(window).height();

function anchorClick(){
event.cancelBubble = true; if(event.stopPropagation) {
    window.open(url,'_blank');
  event.stopPropagation();


}}


//should keep const here that grab the marbles etc
//probably need a page manager function for make files relevant and use that in the pg.js to call events
