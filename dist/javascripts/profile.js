"use strict";requirejs(["jquery"],function(e){function a(e){var a=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return a.test(e)}function l(e){return e+="",e=e.replace(/^\s*|\s*$/g,""),""!=e&&!isNaN(e)}var t=e,s=t("#phone"),r=t("#btn_modify_phone"),n=t("#email"),o=t("#btn_modify_email"),c=t("#password"),i=t("#password_confirm"),u=t("#btn_modify_password");r.on("click",function(){return s.val()?l(s.val())?s.val().length<10||s.val().length>11?(alert("최소 10자, 최대 11자까지 숫자로만 입력해주세요."),s.select(),!1):void t.ajax({type:"POST",url:"/profile/reset-phone",data:{phone:s.val()}}).done(function(e){e.success?(alert("핸드폰 번호를 변경하였습니다."),s.val("")):(alert(e.msg),s.select())}):(alert("숫자만 입력해주세요."),s.select(),!1):(alert("핸드폰 번호를 입력하세요."),s.focus(),!1)}),o.on("click",function(){return n.val()?a(n.val())?void t.ajax({type:"POST",url:"/profile/reset-email",data:{email:n.val()}}).done(function(e){e.success?(alert("이메일을 변경하였습니다."),n.val("")):(alert(e.msg),n.select())}):(alert("올바른 이메일을 입력하세요."),n.select(),!1):(alert("이메일을 입력하세요."),n.focus(),!1)}),u.on("click",function(){return c.val()?i.val()?void t.ajax({type:"POST",url:"/profile/reset-password",data:{pass:c.val(),re_pass:i.val()}}).done(function(e){e.success?(alert("비밀번호를 변경하였습니다."),c.val(""),i.val("")):(alert(e.msg),i.select())}):(alert("비밀번호 확인란을 입력하세요."),i.focus(),!1):(alert("비밀번호를 입력하세요."),c.focus(),!1)})});