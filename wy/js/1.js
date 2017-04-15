
	//alert(1)
	var oHeader = document.getElementById('j-header');
	var oAuto = oHeader.getElementsByClassName('auto')[0];

	/*oAuto*/
	oAuto.onmouseover = function(){
		//alert(1);
		var oNavusermenu = oAuto.getElementsByClassName('u-navusermenu')[0];
		oNavusermenu.style.display = 'block';
	};
	oAuto.onmouseout = function(){
		var oNavusermenu = oAuto.getElementsByClassName('u-navusermenu')[0];
		oNavusermenu.style.display = 'none';			
	};

	var oMenu = oAuto.getElementsByTagName('ul')[0];
	var aLi = oMenu.getElementsByTagName('li');
	for(var i=0;i<aLi.length;i++){
		aLi[i].onmouseover = function(){
			this.style.background = '#ccffff';
		};
		aLi[i].onmouseout = function(){
			this.style.background = '';
		};
	}

	var oFcp = document.getElementById('f-cp');
	var oFpa =oFcp.getElementsByClassName('f-pa')[0];
	oFcp.onmouseover = function(){
		oFpa.style.display ='block' ;
	};
	oFcp.onmouseout = function(){
		oFpa.style.display ='none' ;
	};
	var oJ = document.getElementById('j-nav-indexcatebtn');
	var oItems = oJ.getElementsByClassName('items')[0];
	var oUl = oItems.getElementsByTagName('ul')[0];
	var aLi = oUl.getElementsByTagName('li');

	for(var i=0;i<aLi.length;i++){
		aLi[i].onmouseover = function(){
			var oDiv = this.getElementsByClassName('curr')[0];
			var oColor = this.getElementsByClassName('color');
			for(var j=0;j<oColor.length;j++){
				oColor[j].style.color = 'black';
			}
			oDiv.style.display = 'block';
		};
		aLi[i].onmouseout = function(){
			var oDiv = this.getElementsByClassName('curr')[0];
			var oColor = this.getElementsByClassName('color');
			for(var j=0;j<oColor.length;j++){
				oColor[j].style.color = '#fff';
			}
			oDiv.style.display = 'none';
		};
	}
