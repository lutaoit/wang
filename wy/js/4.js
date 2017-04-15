/*lunbo img fangda*/

window.onload = function(){
	var oDiv=document.getElementById('box');
	mouseScroll(oDiv);
	arrmove();

	var aImg = document.getElementsByClassName("img");
	for(var i=0;i<aImg.length;i++){
		imgmove(aImg[i]);
	}

	var oCell=document.getElementById('g-cell');
	imgmove(oCell);
	var aCxkctj = document.getElementsByClassName("cxkctj")[0];
	var aLi = aCxkctj.getElementsByTagName("li");
	for(var i=0;i<aLi.length;i++){
		imgmove(aLi[i]);
	}
	var aBox = document.getElementsByClassName("imgbox3");
	for(var i=0;i<aBox.length;i++){
		imgmove(aBox[i]);
	}

	var aCxkctj2 = document.getElementsByClassName("cxkctj2");
	for(var i=0;i<aCxkctj2.length;i++){
		var aLi = aCxkctj2[i].getElementsByTagName("li");
		for(var i=0;i<aLi.length;i++){
			imgmove(aLi[i]);
		}
	}

	var aImgbox5 = document.getElementsByClassName("imgbox5");
	for(var i=0;i<aImgbox5.length;i++){
		imgmove(aImgbox5[i]);
	}
};

function mouseScroll(obj){
	if(!obj) return false;
	var oUl=obj.getElementsByTagName('ul')[0];
	var aLi=oUl.getElementsByTagName('li');
	var aImg=oUl.getElementsByTagName('img');
	var oSpan = obj.getElementsByTagName('span');
	var oJ=254;
	var oW = 1206;
	var oH = obj.offsetHeight;
	var iLiWidth=[];
	var iUlResult=0;
	var iCurr=0;
	var iPicTarget=0;
	var iSummation=0;
	var iNow=1;
	var iCountTime=null;
	var autoTime=null;
	/*初始化*/
	function autoStyle(){
		var x= document.documentElement.clientWidth||document.body.clientWidth;
		if(x<oW){
			x=ow;
		}
		for(var i=0;i<aImg.length;i++){
			aImg[i].style.width = x +'px';
			aImg[i].style.height = oH +'px';
			iLiWidth.push(aImg[i].offsetWidth);
		}
		iSummation = sumFn(iLiWidth);

		obj.style.width = x +'px';
		obj.style.marginLeft = -(x-oW)/2+'px';
		oUl.style.width = iSummation + 'px';
		oSpan[0].style.top =(obj.offsetHeight-oSpan[0].offsetHeight)/2+"px";
		oSpan[1].style.top =(obj.offsetHeight-oSpan[0].offsetHeight)/2+"px";
		oSpan[0].style.left =((x-oW)/2+oJ)+"px";
		oSpan[1].style.left =(obj.offsetWidth-oJ-(x-oW)/2)+"px";
	};
	autoStyle();
	autoStyle()

	window.onresize = function(){
		autoStyle();
		picScroll();
	};
	obj.onmouseover = function(ev){
		
			oSpan[0].style.display = 'block';

			oSpan[1].style.display = 'block';
		
	};
	obj.onmouseout = function(ev){
		
			oSpan[0].style.display = 'none';

			oSpan[1].style.display = 'none';
		
	};

	oSpan[1].onclick = function(){
		if(iCurr>aLi.length-1){
			iCurr=aLi.length-1;
		}
		iCurr++;
		picScroll();
	};
	oSpan[0].onclick = function(){
		if(iCurr<0){
			iCurr=0;
		}
		iCurr--;
		picScroll();
	};


	var oP = document.createElement('p');
	for(var i=0;i<aLi.length;i++){
		var oA = document.createElement('a');
		oA.href = '#';
		oP.appendChild(oA);
	}
	oP.getElementsByTagName('a')[0].className='active';
	obj.appendChild(oP);

	for(var i=0,aA=obj.getElementsByTagName('p')[0].getElementsByTagName('a'); i<aA.length; i++)
	{
		aA[i].index=i;
		aA[i].onmouseover=function()
		{
			//clearInterval(autoTime);
			iCurr=this.index;
			picScroll();
		};
		aA[i].onmouseout=function(){
			//countTime();
		};
	}

	function picScroll(){
		if(iCurr>aLi.length-1){
			iCurr=aLi.length-1;
		}
		if(iCurr<0){
			iCurr=0;
		}

		for(var i=0;i<aLi.length;i++){
			oP.getElementsByTagName('a')[i].className='';	
		}
		oP.getElementsByTagName('a')[iCurr].className='active';

		var tmpArr=[];
		for(var i=0;i<iCurr;i++){
			tmpArr.push(aLi[i].offsetWidth);
		}
		iPicTarget = sumFn(tmpArr);
		oUl.style.left = -iPicTarget +'px';
	};

	function autoPlay(){
		clearInterval(autoTime);
		autoTime = setInterval(function(){
			if(iCurr == aLi.length-1){
				iNow =-1;
			}
			if(iCurr==0){
				iNow=1;
			}
			iCurr+=iNow;
			picScroll();

		},5000);
	};
	autoPlay();

};

function sumFn(arr){
	var result = 0;
	for(var i=0;i<arr.length ;i++){
		result += arr[i];
	} 
	return result;
};

/*lunbotuxia*/
function arrmove(){
	var larr=document.getElementById("j-larr");
	var rarr=document.getElementById("j-rarr");
	var cntlist=document.getElementById("j-cntlist");
	var aLi = cntlist.getElementsByTagName("li");
	var icur = 0;
	rarr.onclick = function(){
		if(icur<(aLi.length-5)){
			icur++;
		}
		move();
	};
	larr.onclick = function(){
		if(icur>1){
			icur--;
		}
		move();
	};
	function move(){
		var h= aLi[0].offsetWidth;
		cntlist.style.marginLeft = -(icur*h)+"px"; 
	};
};

/*imgmove*/
function imgmove(obj){
	var oImg = obj.getElementsByTagName("img")[0];
	var w= oImg.offsetWidth;
	var h=oImg.offsetHeight;
	var oW= oImg.offsetWidth;
	var oH=oImg.offsetHeight;
	var iSpeed=8;
	var l=0;
	var t=0;
	obj.onmouseover =function(){
		//alert(w);
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
			if(oW<=w*1.3 ){
				oW+=iSpeed;
				l-=iSpeed;
				oImg.style.width =oW+"px";
				oImg.style.marginLeft=l/2+"px";
			}
			if(oH<=h*1.3){
				oH+=iSpeed*h/w
				t-=iSpeed*h/w;
				oImg.style.height = oH+"px";
				oImg.style.marginTop=t/2+"px";
			}
		},60);
	};
	obj.onmouseout =function(){
		//alert(w);
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
			if(oW>w ){
				oW=oW-iSpeed;
				l=l+iSpeed;
			}else{
				oW=w;
				l=0;
			}
			oImg.style.width =oW+"px";
			oImg.style.marginLeft=l/2+"px";
			if(oH>h){
				oH=oH-iSpeed*h/w;
				t=t+iSpeed*h/w;
			}else{
				oH=h;
				t=0;
			}
			oImg.style.height =Math.floor(oH)+"px";
			oImg.style.marginTop=Math.floor(t/2)+"px";
		},60);
	};
};