/*jshint esversion: 6 */

var windowHeight = $(window).height();

function anchorClick(){
event.cancelBubble = true; if(event.stopPropagation) {

  event.stopPropagation();


}}



//should keep const here that grab the marbles etc
//probably need a page manager function for make files relevant and use that in the pg.js to call events


// $(function () {
//   $('[data-toggle="tooltip"]').tooltip()
// })
/*so focus only from hover so if button clicked doesnt stay on with button being down*/
$('[data-toggle="tooltip"]').tooltip({
    trigger : 'hover'
})
