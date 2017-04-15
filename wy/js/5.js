/*j-topnav j-loginRemind*/
var oLoginRemind = document.getElementById("j-loginRemind");
var oClose = oLoginRemind.getElementsByClassName("u-lgb")[0];
var c=true;

oClose.onclick = function(){
	oLoginRemind.style.display = "none";
	c=false;
};

window.onscroll=function(){
	var t = document.documentElement.scrollTop||document.body.scrollTop;
	//document.title = t;
	var oHeader = document.getElementById("header");
	var oBox = document.getElementById("box");
	var oTopnav = document.getElementById("j-topnav");
	var oLoginRemind = document.getElementById("j-loginRemind");
	var oFooter = document.getElementById("j-footer");
	var oClose = oLoginRemind.getElementsByClassName("u-lgb")[0];
	var t1 =  oHeader.offsetHeight+oBox.offsetHeight;
	//document.title = t1;

	zWidth(oFooter);
	//zWidth(oLoginRemind);

	if(t>=t1){
		oTopnav.style.display = "block";
	}else{
		oTopnav.style.display = "none";	
	}

	if(t>=t1&&c==true){
		oLoginRemind.style.display = "block";
	}else{
		oLoginRemind.style.display = "none";
	}
};

/*width*/
function zWidth(obj){
	var w=document.documentElement.clientWidth||document.body.clientWidth;
	var w1=document.documentElement.scrollLeft||document.body.scrollLeft;
	obj.style.width = w+w1+"px";
};
window.onresize =function(){
	var oFooter = document.getElementById("j-footer");
	zWidth(oFooter);
};

