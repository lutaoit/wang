window.onload=function()
{
	var oDiv=document.getElementById('box');
	mouseScroll(oDiv);
};

function mouseScroll(obj)
{
	if(!obj) return false;
	var oUl=obj.getElementsByTagName('ul')[0];
	var aLi=oUl.getElementsByTagName('li');
	var aImg=oUl.getElementsByTagName('img');
	var oSpan = obj.getElementsByTagName('span');
	var oBox2 = document.getElementById('box2');
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
	//alert(oJ);
	/*for(var i=0;i<aImg.length;i++){
		aImg[i].style.width = document.documentElement.clientWidth +'px';
		aImg[i].style.height = oH +'px';
		iLiWidth.push(aImg[i].offsetWidth);
	}
	iSummation = sumFn(iLiWidth);
	oUl.style.width = iSummation + 'px';
	obj.style.width = document.documentElement.clientWidth +'px';
	obj.style.marginLeft = -(document.documentElement.clientWidth-oW)/2+'px';*/

	function autoStyle(){
		var oJ=document.getElementById('header');
		var oBox2 = document.getElementById('box2');

		var x= document.documentElement.clientWidth;

		if(x<oW){
			x=oW;
		}
		for(var i=0;i<aImg.length;i++){
			aImg[i].style.width = x +'px';
			aImg[i].style.height = oH +'px';
			iLiWidth.push(aImg[i].offsetWidth);
		}
		iSummation = sumFn(iLiWidth);
		oUl.style.width = iSummation + 'px';
		//obj.style.width = document.documentElement.clientWidth +'px';
		//obj.style.marginLeft = -(document.documentElement.clientWidth-oW)/2+'px';
		
		oSpan[1].style.display = 'block';
		oSpan[0].style.display = 'block';
		oBox2.style.left = (x-oW)/2+oJ.offsetWidth+'px';
		oSpan[0].style.top = (oBox2.offsetHeight-oSpan[1].offsetHeight)/2+'px';
		oSpan[1].style.top = (oBox2.offsetHeight-oSpan[1].offsetHeight)/2+'px';
		//oSpan[1].style.display = 'block';
		//oSpan[0].style.display = 'block';
		oSpan[0].style.left = 0+'px';
		oSpan[1].style.right =0+'px';
		obj.style.height = oH +'px';
		obj.style.width = x +'px';
		obj.style.marginLeft = -(x-oW)/2+'px';
	};
	autoStyle()

	window.onresize = function(){
		autoStyle();
		picScroll();
	};
	oBox2.onmouseover = function(ev){
		
			oSpan[0].style.display = 'block';

			oSpan[1].style.display = 'block';
		
	};
	oBox2.onmouseout = function(ev){
		
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

		},3000);
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