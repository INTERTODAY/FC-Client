"use strict";requirejs(["jquery"],function(n){var i=n,l=i("#navigation"),e=i(".nav_link"),t=i(".exit_link"),c=(i(".back_link"),i("#bg_screen"));e.bind("click",function(n){n.preventDefault(),l.toggleClass("blind"),c.toggleClass("blind")}),c.bind("click",function(){l.toggleClass("blind"),c.toggleClass("blind")}),t.bind("click",function(n){confirm("강의페이지로 이동하시겠습니까?")||n.preventDefault()})});