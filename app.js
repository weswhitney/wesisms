'use strict';

var audio = document.getElementsByTagName("audio")[0];


$('button').on('click', function() {
  audio.play();
})
