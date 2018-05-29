
$(document).ready(function(){



	var time=0;//时间（分数）
	var jinbi_total=0;//金币总数
	var gongji_total=100;//炸弹总数
	var gongjiwu_jia_ge=200;//金币每200加攻击物
	
	//Interval
	var time_leiji;
	var ss_zaw1;
	var ss_zaw2;
	var ss_zaw_qiang;
	var ss_zaw_keng;
	var peng;
	var jinbi_img;
	var jinbi_peng;
	var big_guaiwu1;
	var gongjiwu_jia;

	
	document.getElementById("left_font").innerHTML="";
	//倒计时
	document.getElementById("center_font").innerHTML=3;
	setTimeout(function(){document.getElementById("center_font").innerHTML=2;},1000);
	setTimeout(function(){document.getElementById("center_font").innerHTML=1;},2000);
	setTimeout(function(){document.getElementById("center_font").innerHTML="";$("#daojishi").hide();},3000);

	


	//游戏正式开始
	setTimeout(function(){

		

		//背景音乐
		//document.getElementById("bgMusic").src="./bgMusic.mp3";

		//人物出现
		
		document.getElementById("manPerson_img").src="./game21.gif";
		$("#manPerson").show();
		$("#manPerson").animate({marginTop:"250px",marginLeft:"30px"},1000);

		//加油动画出现
		document.getElementById("jiayou_img").src="./game28.gif";
		$("#jiayou").show();
		$("#jiayou").animate({marginLeft:"40%"},2000);
		
		//上天按钮出现
		$("#xuangua").show();

		//障碍物持（球）续出现1111
		ss_zaw1=setInterval(function(){
			var zaw_color=["#F36E9C","#F33726","#F3C143","#81F334","#5FF3D3","#72A6F3","#F35FEE","#E4A7F3","#7CB9F3","#F39885"];
			var	i=parseInt(Math.random()*(9-0+1)+0);
			$("#zhangaiWu").css("backgroundColor",zaw_color[i]);
			$("#zhangaiWu").show();
			$("#zhangaiWu").animate({marginLeft:"-50px"},4000,function(){
				$("#zhangaiWu").hide();
				$("#zhangaiWu").css("marginLeft","100%");
			});
		},4000);

		//障碍物持续出现（球）2222
		ss_zaw2=start_zaw=setInterval(function(){
			var zaw_color=["#F36E9C","#F33726","#F3C143","#81F334","#5FF3D3","#72A6F3","#F35FEE","#E4A7F3","#7CB9F3","#F39885"];
			var	i=parseInt(Math.random()*(9-0+1)+0);
			$("#zhangaiWu").css("backgroundColor",zaw_color[i]);
			$("#zhangaiWu2").show();
			$("#zhangaiWu2").animate({marginLeft:"-50px"},4000,function(){
				$("#zhangaiWu").hide();
				$("#zhangaiWu2").css("marginLeft","100%");
			});
		},9000);

		//障碍物坑持续出现
		ss_zaw_keng=setInterval(function(){
			$("#keng").show();
			$("#keng").animate({marginLeft:"-80px"},5000,function(){
				$("#keng").css("marginLeft","100%");
			});
		},5000);

		//障碍物（路面上的墙）持续出现
		ss_zaw_qiang=setInterval(function(){
			var qiang_color=["#F36E9C","#F33726","#F3C143","#81F334","#5FF3D3","#72A6F3","#F35FEE","#E4A7F3","#7CB9F3","#F39885"];
			var qiang_bottom=parseInt(Math.random()*(9-0+1)+0);
			var qiang_center=parseInt(Math.random()*(9-0+1)+0);
			var qiang_top=parseInt(Math.random()*(9-0+1)+0);
			$("#zhangaiWuTop1").css("backgroundColor",qiang_color[qiang_top]);
			$("#zhangaiWuTop2").css("backgroundColor",qiang_color[qiang_center]);
			$("#zhangaiWuTop3").css("backgroundColor",qiang_color[qiang_bottom]);
			$("#zhangaiWuTop").show();
			$("#zhangaiWuTop").animate({marginLeft:"-100px"},8000,function(){
				$("#zhangaiWuTop").css("marginLeft","100%");
			});
		},3000);

		//大怪物1持续出现
		big_guaiwu1=setInterval(function(){
			var guaiwu_img=["./game22.gif","./game23.gif","./game24.gif","./game25.gif","./game26.gif","./game27.gif","./game29.gif"];
			var	i=parseInt(Math.random()*(6-0+1)+0);
			$("#guaiwu_img").attr("src",guaiwu_img[i]);
			$("#big_guaiwu1").show();
			$("#big_guaiwu1").animate({marginLeft:"-200px"},5000,function(){
				//$("#zhangaiWu").hide();
				$("#big_guaiwu1").css("marginLeft","100%");
			});
		},10000);


		//金币持续出现
		jinbi_img=setInterval(function(){
			var mm=parseInt(Math.random()*(10-1+1)+1);
			var n;

			for(n=1;n<=mm;n++){
				$(".jinbi").append("<img id='jinbi"+n+"' class='jinbi_img' src='./jinbi.png' style='width:30px;height:30px;margin-left:10px;'>");
			}
			
			var yy=parseInt(Math.random()*(1-0+1)+0);
			
			if(yy==1){
				$(".jinbi").css("marginTop","100px").show().animate({marginLeft:"-200%"},5000,function(){
					$(".jinbi").css({"marginLeft":"100%","marginTop":"270px"});
					for(n=1;n<=mm;n++){
						$("#jinbi"+n).remove();
						
					}
				});
			}
			else{
				$(".jinbi").show().animate({marginLeft:"-200%"},5000,function(){
					$(".jinbi").css({"marginLeft":"100%"});
					for(n=1;n<=mm;n++){
						$("#jinbi"+n).remove();
						
					}
				});
			}
			
			//检测金币是否和主角碰到
			jinbi_peng=setInterval(function(){
				for(n=1;n<=mm;n++){
					//主角坐标
					var Man_x=$("#manPerson").offset().left;
					var Man_y=$("#manPerson").offset().top;
					var Man_w=50;
					var Man_h=50;
					//金币坐标
					var jinbi_img_x=$("#jinbi"+n).offset().left;
					var jinbi_img_y=$("#jinbi"+n).offset().top;
					var jinbi_img_w=30;
					var jinbi_img_h=30;

					
					if(!((Man_x+Man_w)<jinbi_img_x||(jinbi_img_x+jinbi_img_w)<Man_x||(Man_y+Man_h)<jinbi_img_y||(jinbi_img_y+jinbi_img_h)<Man_y)){
						jinbi_total=jinbi_total+0.02;
						$("#jinbi"+n).css({"backgroundColor":"#94CCB5"});
						$("#jinbi_total").text(parseInt(jinbi_total));
						
					}

				}

			},0.25);

			
		},13000);


		//单击跳跃按键时
		$("#jump").click(function(){
			//document.getElementById("jumpMusic").src="./jump.mp3";
			//终止音乐
			setTimeout(function(){
				document.getElementById("jumpMusic").src="";
			},400);
			$("#jump").css("backgroundColor","#7CDDF3");
			setTimeout(function(){
				$("#jump").css("backgroundColor","#329FC4");
			},300);
			var juliTop=$("#manPerson").css("marginTop");
			if(juliTop=="250px"){
				$("#manPerson").animate({marginTop:"80px",marginLeft:"50px"},300);
				$("#manPerson").animate({marginLeft:"80px"},100);
				$("#manPerson").animate({marginTop:"250px",marginLeft:"80px"},300);
				$("#manPerson").animate({marginLeft:"50px"},400);
			}
		});

		
		//单击攻击按钮时
		$("#gongji").click(function(){
			$("#gongji_total").html(--gongji_total);

			$("#gongji").css("backgroundColor","#F36E91");
			setTimeout(function(){
				$("#gongji").css("backgroundColor","#C45162");
			},300);

			var width=$(window).width()+"px";
			
			$(".gongji_g").show().animate({width:"50px",height:"50px",marginTop:"0px"},300);
			$(".gongji_g").animate({marginLeft:width},400,function(){
				$(".gongji_g").css({"marginLeft":"0px","width":"20px","height":"20px","marginTop":"15px"}).hide();
			});
			
		});


		//点击上天按钮悬挂上天
		$("#xuangua").click(function(){
			var c=$("#sxFont").html();
			if(c=="上天"){
				$("#tianxian").show();
				$("#manPerson").animate({marginTop:"80px",marginLeft:"100px"},100);
				$("#sxFont").html("下地");
			}
			if(c=="下地"){
				$("#tianxian").hide();
				$("#manPerson").animate({marginTop:"250px",marginLeft:"50px"},100);

				$("#sxFont").html("上天");
			}
		});

		//攻击物在某个金币分数达标后加
		gongjiwu_jia=setInterval(function(){
			if(jinbi_total>gongjiwu_jia_ge){
				gongji_total=gongji_total+20;
				$("#gongji_total").text(gongji_total);
				gongjiwu_jia_ge=gongjiwu_jia_ge+200;
			}
		},20000);

		
		//核心公式(以左上角的坐标为中心)
		//(x1 + w1) < x2 || (x2 + w2) < x1 || (y1 + h1) < y2 || (y2 + h2) < y1
		//计算人和物体(怪物)之间是否碰撞
		
		var peng=setInterval(function(){
			//主角坐标
			var Man_x=$("#manPerson").offset().left;
			var Man_y=$("#manPerson").offset().top;
			var Man_w=50;
			var Man_h=50;

			//攻击武器的坐标
			var gongji_x=$(".gongji_g").offset().left;
			var gongji_y=$(".gongji_g").offset().top;
			var gongji_w=50;
			var gongji_h=50;

			//大怪物坐标
			var big_guaiwu_x=$("#big_guaiwu1").offset().left;
			var big_guaiwu_y=$("#big_guaiwu1").offset().top;
			var big_guaiwu_w=200;
			var big_guaiwu_h=100;

			//墙坐标
			var Qiang_x=$("#zhangaiWuTop").offset().left;
			var Qiang_y=$("#zhangaiWuTop").offset().top;
			var Qiang_w=20;
			var Qiang_h=36;
			
			//障碍物1（路面上的怪物上）坐标
			var zaw_top_x=$("#zhangaiWu").offset().left;
			var zaw_top_y=$("#zhangaiWu").offset().top;
			var zaw_top_w=25;
			var zaw_top_h=25;

			//障碍物2（路面上的怪物下）坐标
			var zaw_bottom_x=$("#zhangaiWu2").offset().left;
			var zaw_bottom_y=$("#zhangaiWu2").offset().top;
			var zaw_bottom_w=25;
			var zaw_bottom_h=25;

			//坑坐标
			var keng_x=$("#keng").offset().left;
			var keng_y=$("#keng").offset().top;
			var keng_w=80;
			var keng_h=50;

			//主角碰到墙，减分
			if(!((Man_x+Man_w)<Qiang_x||(Qiang_x+Qiang_w)<Man_x||(Man_y+Man_h)<Qiang_y||(Qiang_y+Qiang_h)<Man_y)){
				jinbi_total=jinbi_total-0.05;
				$("#jinbi_total").text(parseInt(jinbi_total));
				$("#jiafen").show();
				$("#jiafen_total").text("碰墙");
				setTimeout(function(){
					$("#jiafen").hide();
				},1000);
			}
			
			//没碰到怪物
			//攻击物是否碰到怪物
			if(((Man_x+Man_w)<zaw_bottom_x||(zaw_bottom_x+zaw_bottom_w)<Man_x||(Man_y+Man_h)<zaw_bottom_y||(zaw_bottom_y+zaw_bottom_h)<Man_y)&&((Man_x+Man_w)<zaw_top_x||(zaw_top_x+zaw_top_w)<Man_x||(Man_y+Man_h)<zaw_top_y||(zaw_top_y+zaw_top_h)<Man_y)&&!(Man_y+Man_h==keng_y&&Man_x>keng_x&&(Man_x+Man_w)<keng_x+keng_w)&&((Man_x+Man_w)<big_guaiwu_x||(big_guaiwu_x+big_guaiwu_w)<Man_x||(Man_y+Man_h)<big_guaiwu_y||(big_guaiwu_y+big_guaiwu_h)<Man_y)){
				
				//攻击物碰到大怪物
				if(!((gongji_x+gongji_w)<big_guaiwu_x||(big_guaiwu_x+big_guaiwu_w)<gongji_x||(gongji_y+gongji_h)<big_guaiwu_y||(big_guaiwu_y+big_guaiwu_h)<gongji_y)){
					$(".gongji_g").hide().stop().css("marginLeft","0px");
					$("#big_guaiwu1").hide().stop().css("marginLeft","100%");
					/*jinbi_total=jinbi_total+0.01;
					$("#jinbi_total").text(parseInt(jinbi_total));*/

				}

				//如果碰到地上障碍物下
				if(!((gongji_x+gongji_w)<zaw_bottom_x||(zaw_bottom_x+zaw_bottom_w)<gongji_x||(gongji_y+gongji_h)<zaw_bottom_y||(zaw_bottom_y+zaw_bottom_h)<gongji_y)){
					jinbi_total=jinbi_total+0.01;
					$("#zhangaiWu2").hide().stop().css("marginLeft","100%");
					$(".gongji_g").hide().stop().css("marginLeft","0px");
					$("#jinbi_total").text(parseInt(jinbi_total));
					
				}
				//如果碰到地上障碍物上
				if(!((gongji_x+gongji_w)<zaw_top_x||(zaw_top_x+zaw_top_w)<gongji_x||(gongji_y+gongji_h)<zaw_top_y||(zaw_top_y+zaw_top_h)<gongji_y)){
					jinbi_total=jinbi_total+0.01;
					
					$("#zhangaiWu").hide().stop().css("marginLeft","100%");
					$(".gongji_g").hide().stop().css("marginLeft","0px");
					$("#jinbi_total").text(parseInt(jinbi_total));
					
					
				}

				
			}
			else{
				stop();
				
			}
		},0.25);




	},3000);



	//时间（分数）累计
	setTimeout(function(){
		time_leiji=setInterval(function(){
			document.getElementById("left_font").innerHTML=++time;
			if(time==20000){
				//游戏结束终止所有Interva
				stop();
			}
		},1000);

	},2000);

	//游戏结束终止所有Interva
	function stop(){
		$("#manPerson").animate({marginTop:"0px"},1900);
		setTimeout(function(){
			$("#finish").show();
			$("#manPerson").hide();
			$("#total_score").text(parseInt(jinbi_total)+"分");
		},2000);

		$("#big_guaiwu1").stop().hide();
		$("#zhangaiWu").stop();
		$("#zhangaiWu2").stop();
		$("#zhangaiWuTop").stop();
		$("#keng").stop();
		clearInterval(time_leiji);
		clearInterval(ss_zaw_qiang);
		clearInterval(ss_zaw_keng);
		clearInterval(ss_zaw1);
		clearInterval(ss_zaw2);
		clearInterval(peng);
		clearInterval(jinbi_img);
		clearInterval(big_guaiwu1);
		
		$("#jiayou").hide();
		$("#tianxian").hide();

	}
	
	



	

});
	


