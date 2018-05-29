<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<title>碰撞实例</title>
	<script src="/jquery/jquery.js"></script>

<style type="text/css">
*{margin:0px;padding:0px;}
</style>

</head>
<body>

<div id="A" style="width:100px;height:100px;background-color:red;margin-top:0px;margin-left:0px;"></div>

<div id="B" style="width:100px;height:100px;background-color:green;margin-top:50px;margin-left:120px;"></div>
<p id="ifp"></p>
<p id="x1"></p>
<p id="y1"></p>
<p id="x2"></p>
<p id="y2"></p>
<script type="text/javascript">
$(document).ready(function(){
	

	
	var s=setInterval(function(){
		var x1=$("#A").offset().left;
		var y1=$("#A").offset().top;
		var w1=100;
		var h1=100;

		var x2=$("#B").offset().left;
		var y2=$("#B").offset().top;
		var w2=100;
		var h2=100;
		//document.write("x1:",+x1+",y1:"+y1+"x2:"+x2+",y2"+y2+"<br>");
		document.getElementById('x1').innerHTML=x1;
		document.getElementById('y1').innerHTML=y1;
		document.getElementById('x2').innerHTML=x2;
		document.getElementById('y2').innerHTML=y2;
		if((x1+w1)<x2||(x2+w2)<x1||(y1+h1)<y2||(y2+h2)<y1){
			document.getElementById('ifp').innerHTML="NNNNNNNN";
		}
		else{
			document.getElementById('ifp').innerHTML="YYYYYYYY";
		}
	},0.00001);

	
	
});

//(x1 + w1) < x2 || (x2 + w2) < x1 || (y1 + h1) < y2 || (y2 + h2) < y1
</script>


















</body>
</html>