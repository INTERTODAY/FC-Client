"use strict";window.requirejs(["jquery","axios"],function(a,n){function o(){return navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)?"iOS":navigator.userAgent.match(/Android/i)?"Android":navigator.userAgent.match(/Mac/i)?"Mac":void 0}function t(){var a=o();n.get("/api/v1/aquaplayer",{params:{userid:123,device_type:a}}).then(function(n){if(console.log(n.data),"iOS"===a){var o=(new Date).getTime();console.log(n.data.iosUrl),window.location.href=n.data.iosUrl,setTimeout(function(){setTimeout(function(){var a=(new Date).getTime();a-o<400&&(window.location="https://itunes.apple.com/kr/app/aquanmanager/id1048325731")},10)},300)}else"Android"===a&&(console.log(n.data.androidUrl),window.location.href=n.data.androidUrl)}).catch(function(a){console.log(a)})}a(function(){}),a("#start-player").on("click",function(){console.log("start!"),t()})});