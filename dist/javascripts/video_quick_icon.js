"use strict";window.requirejs(["jquery","Vimeo"],function(e,o){function n(){var e={loop:!1};r=new o("videoplayer",e),r.setVolume(.5),r.ready().then(function(){console.info("Player is ready.")}).catch(function(e){console.error(e)})}var r;e(function(){n()})});