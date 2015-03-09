Object.prototype.onScreen = function(callback){
	if ((this.nodeType != 1 && this.constructor.name != 'HTMLCollection') || (this.nodeType != 1 && this.constructor.name != 'HTMLCollection')) return;
	if ( this.constructor.name == 'HTMLCollection' ) {
		for ( var i=0; i < this.length; i++ ) {
			this[i].callbackOn = callback;
		}
	} else {
		this.callbackOn = callback;
	}
}

Object.prototype.outScreen = function(callback){
	if ((this.nodeType != 1 && this.constructor.name != 'HTMLCollection')) return;
	if (this.constructor.name == 'HTMLCollection') {
		for ( var i=0; i < this.length; i++ ) {
			this[i].callbackOut = callback;
		}
	} else {
		this.callbackOut = callback;
	}
}

Object.prototype.initCheck = function(){
	var list = new Array();
	if ((this.nodeType != 1 && this.constructor.name != 'HTMLCollection')) return;
	if (this.constructor.name == 'HTMLCollection') {
		list = this;
		console.log(this);
	} else {
		list.push(this);
	}

	window.addEventListener('scroll', getCheckFunction(list));
	window.addEventListener('pageshow', getCheckFunction(list));
	window.addEventListener('resize', getCheckFunction(list));

	function getCheckFunction( lista ){
		return function() {
			for (var i=0; i < lista.length; i++) {
				var obj = lista[i];
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
	}
}