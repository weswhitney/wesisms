"use strict";


var v = document.getElementsByTagName("audio")[0];

$('.sound').on("click", function() {
  v.play();
})
