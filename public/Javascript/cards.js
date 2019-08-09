


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
console.log("updated a card");
     });

}
var allCards = $('body');
initSetCards(allCards);
