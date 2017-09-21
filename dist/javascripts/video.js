"use strict";requirejs(["jquery","axios","Vimeo","easyTimer","jqueryTimer"],function(n,o,e,t){function i(){var n={loop:!1};m=new e("videoplayer",n),m.setVolume(.5),m.ready().then(function(){console.info("Player is ready."),m.getDuration().then(function(n){console.log("duration : ",n),T=n,r()}).catch(function(n){console.error(n)}),O<T-5&&window.confirm("마지막 재생시점으로 이동하시겠습니까?")&&m.setCurrentTime(O).then(function(n){m.pause()}).catch(function(n){console.error(n)})}).catch(function(n){console.error(n)})}function r(){T?(v=n.timer(1e3*_,a,!0),v.stop(),s()):console.error("재생시간을 확인할 수 없습니다.")}function s(){c(V)}function c(n){Math.floor(T*(w/100))<=n&&(C.removeClass("blind"),S.addClass("blind"))}function a(){console.log("logging..."),y+=_,m.getCurrentTime().then(function(o){return g>0&&g===o?void m.pause().then(function(){console.log("비디오가 중지되었습니다."),S.removeClass("blind")}).catch(function(n){console.error(n)}):(g=o,void n.ajax({type:"POST",url:"/video/log/playtime",data:{training_user_id:q,video_id:P,played_seconds:y,video_duration:T,currenttime:o}}).done(function(n){n.success?(y=0,V=n.total_played_seconds,c(V)):(console.error(n.msg),m.pause().then(function(){}).catch(function(n){console.error(n)}))}))}).catch(function(n){console.error(n)})}function l(){console.log("video log end"),n.ajax({type:"POST",url:"/video/log/endtime",data:{video_id:P}}).done(function(n){n.success||console.error(n.msg)})}function u(){console.log("session log start"),n.ajax({type:"POST",url:"/session/log/starttime",data:{training_user_id:q,course_id:D,course_list_id:E}}).done(function(n){n.success?j=n.hasEnded:(console.error(n.msg),v.stop(),m.stop())})}function d(){console.log("session log end"),n.ajax({type:"POST",url:"/session/log/endtime",data:{training_user_id:q,course_id:D,course_list_id:E}}).done(function(n){n.success?window.location.href=x:(console.error(n.msg),v.stop(),m.stop())})}function f(){return o.delete("/video/log",{params:{video_id:P}}).then(function(n){}).catch(function(n){console.error(n)})}function p(){return o.delete("/session/log",{params:{training_user_id:q,course_list_id:E}}).then(function(n){}).catch(function(n){console.error(n)})}var g,m=null,h=n(".videoplayer"),_=h.data("interval"),v=null,y=0,w=(h.data("wait-seconds"),h.data("passive-rate")),T=null,b=n("#countdown .values"),j=!1,C=n("#btn_play_next"),x=C.parent().attr("href"),S=n("#btn_replay_video"),P=h.data("id"),V=h.data("total-play"),O=h.data("current-time"),q=C.data("training-user-id"),D=C.data("course-id"),E=C.data("course-list-id"),k=new t;n(function(){i()}),C.on("click",function(n){n.preventDefault(),k.stop(),d()}),m.on("play",function(n){u(),v.reset(1e3*_)}),m.on("error",function(n){console.info("error!"),console.error(n)}),m.on("pause",function(n){console.info("player: pause"),v.pause(),l()}),m.on("ended",function(e){console.info("player: ended"),v.pause(),c(V+_),l(),j||setTimeout(function(){n(".timer").removeClass("blind"),console.log("second timer started"),k.start({countdown:!0,startValues:{seconds:30}}),b.html(k.getTimeValues().toString()+" 초 이내 <b>다음</b> 버튼을 클릭해주세요."),k.addEventListener("secondsUpdated",function(n){b.html(k.getTimeValues().toString()+" 초 이내 <b>다음</b> 버튼을 클릭해주세요.")}),k.addEventListener("targetAchieved",function(n){b.html("학습 초기화 중입니다.."),setTimeout(function(){window.alert("30초 동안 다음 버튼을 누르지 않아 학습을 초기화 하였습니다.\n\n재시청 해주시기 바랍니다."),o.all([f(),p()]).then(o.spread(function(n,o){window.location.reload()}))},3e3)})},1e3)}),S.on("click",function(n){n.preventDefault(),m.unload().then(function(){S.addClass("blind")}).catch(function(n){console.log(n)})})});
//# sourceMappingURL=../maps/video.js.map
