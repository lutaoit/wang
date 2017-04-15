$(document).ready(function(){
	$(".auto").mouseover(function(){
		$(".navusermenu-1").css("display","block");
	});
	$(".auto").mouseout(function(){
		$(".navusermenu-1").css("display","none");
	});

	$("#auto-id-1488692376261 .nitem").mouseover(function(){
		$("#auto-id-1488692376261 .navdropmenu").css("display","block");
		$(".courses").css({"background":"#31a030","color":"#fff"});
	});
	$("#auto-id-1488692376261 .nitem").mouseout(function(){
		$("#auto-id-1488692376261 .navdropmenu").css("display","none");
		$(".courses").css({"background":"#fff","color":"#000"});
	});

	$("#navshow .hoverItem").mouseover(function(){
		$("#navshow .navapptip").css("display","block");
		$("#navshow .download").css({"background":"green","color":"#fff"});
	});
	$("#navshow .hoverItem").mouseout(function(){
		$("#navshow .navapptip").css("display","none");
		$("#navshow .download").css({"background":"#fff","color":"#000"});
	});
	$("#j-topnav .hoverItem").mouseover(function(){
		$("#j-topnav .navapptip").css("display","block");
		$("#j-topnav .download").css({"color":"#fff"});
	});
	$("#j-topnav .hoverItem").mouseout(function(){
		$("#j-topnav .navapptip").css("display","none");
		$("#j-topnav .download").css({"color":"#fff"});
	});

	/*indexcatedialog*/
	$(".items li").mouseover(function(){
		//alert($(this).index());
		$(".rwrap").css("display","none");
		$(this).children(".rwrap").css("display","block");
	});
	$(".items li").mouseout(function(){
		//alert($(this).index());
		$(this).children(".rwrap").css("display","none");
	});

	$("#j-micro").mouseover(function(){
		$("#j-larr").css("display","block");
		$("#j-rarr").css("display","block");
	});
	$("#j-micro").mouseout(function(){
		$("#j-larr").css("display","none");
		$("#j-rarr").css("display","none");
	});
});
