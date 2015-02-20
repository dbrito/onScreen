Object.prototype.onScreen = function(callback){
	if (this.nodeType != 1) return;
	this.callbackOn = callback;
}

Object.prototype.outScreen = function(callback){
	if (this.nodeType != 1) return;
	this.callbackOut = callback;
}

Object.prototype.initCheck = function(){
	var obj = this;
	console.log(obj);
	if (obj.nodeType != 1) return;
	window.onscroll = check;
	window.onpageshow = check;

	function check(){
		var top = obj.offsetTop;
		var altura = obj.offsetHeight;
		var scrollPosY = window.scrollY;
		var alturaTela = window.innerHeight;
		var left = obj.offsetLeft;
		var largura = obj.offsetWidth;
		var scrollPosX = window.scrollX;
		var larguraTela = window.innerWidth;

		var vertical = ( scrollPosY <= ( top + altura ) && ( scrollPosY + alturaTela ) >= top );
		var horizontal = ( scrollPosX <= ( left + largura ) && ( scrollPosX + larguraTela ) >= left );

		if ( vertical && horizontal ) {
			if ( obj.isOnScreen == undefined || obj.isOnScreen == false ) {
				obj.isOnScreen = true;
				obj.callbackOn(obj);
			}
		} else {
			if ( obj.isOnScreen == undefined || obj.isOnScreen == true ) {
				obj.isOnScreen = false;	
				obj.callbackOut(obj);
			}
		}
	}
}