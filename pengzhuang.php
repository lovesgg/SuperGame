<!DOCTYPE html>
<html>
 <head>
 <meta charset="UTF-8">
 <title>碰撞检测</title>
 <style type="text/css">
  *{
  margin: 0;
  padding: 0;
  }
  #divA,#divB{
  width: 200px;
  height: 200px;
  background-color: purple;
  font-size: 50px;
  line-height: 200px;
  text-align: center;
  position: absolute;
  color: #fff;
  }
  #divA{
  left: 30px;
  top: 30px;
  z-index: 5;
  }
  #divB{
  left: 300px;
  top: 300px;
  }
 </style>
 </head>
 <body>
 <div id="divA">A</div>
 <div id="divB">B</div>
 </body>
 <script type="text/javascript">
 var divA = document.getElementById("divA");
 var divB = document.getElementById("divB");
  
  
 divA.onmousedown = function (e) {
   
  var event1 = window.event || e;
   
   
  var startX = event1.clientX;
   
  var startY = event1.clientY;
   
  document.onmousemove = function (j) {
   
  var event2 = window.event || j;
   
  var endX = event2.clientX;
  var endY = event2.clientY;
   
  divA.style.left = divA.offsetLeft + (endX - startX) + "px";
  divA.style.top = divA.offsetTop + (endY - startY) + "px";
   
  startX = endX;
  startY = endY;
   
  if (isCrash(divA,divB) == true) {
    
   divA.style.backgroundColor = "red";
  } else{
    
   divA.style.backgroundColor = "purple";
  };
  }
 }
  
  
 divA.onmouseup = function () {
   
  document.onmousemove = null;
 }
  
  
 function isCrash (obj1,obj2) {
   
  var boolCrash = true;
   
  var left1 = obj1.offsetLeft;
   
  var right1 = obj1.offsetLeft + obj1.offsetWidth;
   
  var top1 = obj1.offsetTop;
   
  var bottom1 = obj1.offsetTop + obj1.offsetHeight;
   
  var left2 = obj2.offsetLeft;
   
  var right2 = obj2.offsetLeft + obj2.offsetWidth;
   
  var top2 = obj2.offsetTop;
   
  var bottom2 = obj2.offsetTop + obj2.offsetHeight;
   
   
  if (right1 > left2 && left1 < right2 && bottom1 > top2 && top1 < bottom2) {
  boolCrash = true;
  } else{
  boolCrash = false;
  }
  return boolCrash;
 }
  
 </script>
</html>