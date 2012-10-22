window.imported = {};

// synchronous shim-require for CommonJS in browser
var require = function (name, path) {
	var AJAX;
	var path = path || '../../';
	if (!window.imported[name]){
		if (window.XMLHttpRequest) {              
			AJAX=new XMLHttpRequest();              
		} else {                                  
			AJAX=new ActiveXObject("Microsoft.XMLHTTP");
		}

		if (AJAX) {
			// path is set to root of project
			AJAX.open("GET", path + name + '.js', false);                             
			AJAX.send(null);
			window.imported[name] = new Function('var exports={};' + AJAX.responseText + ';return exports;')();
		} else {
			return false;
		}
	}
	return window.imported[name];                                    
}