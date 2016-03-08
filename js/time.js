var t = null;
function time(){
 dt = new Date();
 var y=dt.getFullYear();
 var h=dt.getHours();
 var m=dt.getMinutes();
 var s=dt.getSeconds();
 document.getElementById("timeShow").innerHTML="<h1>当前时间</h1>"+"<h2>"+y+"年"+"</h2>"+"<h3>"+h+"时"+m+"分"+s+"秒"+"</h3>";
 t = setTimeout(time,1000);    
} 
window.onload=function(){time()}