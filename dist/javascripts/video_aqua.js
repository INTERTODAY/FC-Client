"use strict";window.requirejs(["jquery","axios","aquaNManagerService","easyTimer","jqueryTimer"],function(t,e,a,i){function n(){t.ajax({type:"POST",url:"/session/log/starttime",data:{training_user_id:d.data("training-user-id"),course_id:d.data("course-id"),course_list_id:d.data("course-list-id")}}).done(function(t){t.success||console.error(t.msg)})}function s(){t.ajax({type:"POST",url:"/session/log/endtime",data:{training_user_id:d.data("training-user-id"),course_id:d.data("course-id"),course_list_id:d.data("course-list-id")}}).done(function(t){t.success?window.location.href=c:console.error(t.msg)})}function o(){"done"===d.data("status")&&(u.removeClass("blind"),l.addClass("blind"))}var d=t(".videoplayer"),r=t("#btn_play_video"),u=t("#btn_play_next"),c=u.parent().attr("href"),l=t("#btn_replay_video"),m=t("#countdown .values");t(function(){var e={videoUrl:"cdnetworks.mp4",trainingUserId:d.data("training-user-id"),courseId:d.data("course-id"),courseListId:d.data("course-list-id"),videoId:d.data("id"),videoStatus:d.data("status"),totalPlayedSeconds:d.data("total-play")};a=new a(e),"1"==d.data("confirm")&&(t(".timer").removeClass("blind"),setTimeout(function(){var t=new i;t.start({countdown:!0,startValues:{seconds:30}}),m.html(t.getTimeValues().toString()+" 초 이내 다음 버튼을 클릭해주세요."),t.addEventListener("secondsUpdated",function(e){m.html(t.getTimeValues().toString()+" 초 이내 다음 버튼을 클릭해주세요.")}),t.addEventListener("targetAchieved",function(t){m.html("학습 초기화 중입니다.."),setTimeout(function(){window.alert("30초 동안 다음 버튼을 누르지 않아 학습을 초기화 하였습니다.\n\n재시청 해주시기 바랍니다.")},3e3)})},1e3)),o()}),r.on("click",function(){n(),a.startPlayer()}),u.on("click",function(t){t.preventDefault(),s()})});
//# sourceMappingURL=../maps/video_aqua.js.map
