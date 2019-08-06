//var receivedVars=require('./server.js'); //exposing backend ?

/*
<script type="module" src="D:\website\backend\server.js"></script>
import {projectCards} from "D:\website\backend\server.js"
*/







$(".test").click(function() {


$(".carouselOverlay").toggleClass("carouselDisplayNone");
$('section').not('.carouselOverlay').toggleClass("carouselBlur");
  generateCarousel();
});
