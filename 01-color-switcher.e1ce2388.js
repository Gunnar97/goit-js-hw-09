!function(){let t;let e={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")};var a={activStop:function(){e.startBtn.disabled=!0,e.stopBtn.disabled=!1},activStart:function(){e.startBtn.disabled=!1,e.stopBtn.disabled=!0},refs:e};let n=document.querySelector("body");a.refs.startBtn.addEventListener("click",function(e){a.activStop(),t=setInterval(()=>n.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`,1e3)}),a.refs.stopBtn.addEventListener("click",function(e){a.activStart(),clearInterval(t)})}();
//# sourceMappingURL=01-color-switcher.e1ce2388.js.map