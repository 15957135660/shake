// JavaScript Document
window.onload=function()
{
	var oDiv1=document.getElementById('glass');
	var aImg=oDiv1.getElementsByTagName('img');
	var oUl=document.getElementsByTagName('ul');
	var aLi=document.getElementsByTagName('li');
	
	aLi[3].onclick=function()
	{
		addClass(aImg[0],"rotate");
        addClass(aImg[1],"roll");
        addClass(aImg[2],"roll1");
        addClass(aImg[3],"roll2");
        addClass(aImg[4],"roll3");
        addClass(aImg[5],"roll4");
        addClass(aImg[6],"roll5");
        addClass(aImg[7],"roll6");
        addClass(aImg[8],"roll7");
        addClass(aImg[9],"roll8");
	}
	
}

function addClass(obj, cls) {  
    if (!this.hasClass(obj, cls)) obj.className += " " + cls;  
}
function hasClass(obj, cls) {  
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));  
} 
