


function initSetCards(parent){
    parent.find(".scaleable-wrapper").each(
     function(){
                var vsd = $(this).find(".aCard");
                 var scale = Math.min(
                         $(this).width() / vsd.outerWidth(),
                          $(this).height() / vsd.outerHeight()
       );

    // vsd.css({transform: "translate(-50%, -50%) " + "scale(" + scale + ")"  });
     vsd.css({transform: "translate(-50%, 0%) " + "scale(" + scale + ")"  });

     });

}
var allCards = $('body');
initSetCards(allCards);


$(".aCard").on('click',
function cardToFront(e){

$(".singleCardOverlay").removeClass("singleCardOverlayDisplayNone");
$('section').not('.singleCardOverlay').addClass("carouselBlur");
var copyForSingleCardDisplay = $(this).parent().clone();
$(".singleCardContainer").html(copyForSingleCardDisplay);
initSetCards($(".singleCardContainer"));

copyForSingleCardDisplay.on('click',function removeSingleCardOverlay(e){ //rename glass blur when can refactor and put on the carousel too //problem is triggers even if display none
//do not do anything if this event was propagated from children
  if( e.target !== this ){  return;}else{
$(".singleCardOverlay").addClass("singleCardOverlayDisplayNone");
$('section').not('.singleCardOverlay').removeClass("carouselBlur");
}
});
});

$(" .singleCardOverlayBackground").on('click',function removeSingleCardOverlay(e){ //rename glass blur when can refactor and put on the carousel too //problem is triggers even if display none
  if( e.target !== this ){ return;}else{
e.stopPropagation();
$(".singleCardOverlay").addClass("singleCardOverlayDisplayNone");
$('section').not('.singleCardOverlay').removeClass("carouselBlur");}
});
