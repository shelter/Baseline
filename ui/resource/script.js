(function(win, doc, undef) {
	var slice = Array.prototype.slice;

	function tabs(container) {
		var triggers, panes,

			TRIGGER = 'trigger',
			PANE = 'pane',
			LINE = '-',
			TRIGGER_PREFIX = TRIGGER + LINE,
			PANE_PREFIX = PANE + LINE,
			BLOCK = 'block', NONE = 'none';

		if(!(container = $(container))) {
			return ;
		}

		triggers = getElementsByClassName(TRIGGER, container);
		panes = getElementsByClassName(PANE, container);
		arrEach(slice.call(triggers, 0), function(item) {
			item.onclick = switchPanes;
		});
	
		function switchPanes() {
			var self = this,
				currentPane =  PANE_PREFIX + catchSuffix(self.className, TRIGGER_PREFIX);
					
			arrEach(slice.call(panes, 0), function(item) {
				if(hasClass(item, currentPane)) {
					item.style.display = BLOCK;
				} else {
					item.style.display = NONE;
				} 
			});
		}	
	}

	function viewCodes(container) {
		var htmlCode, cssCode, htmlCodeView, cssCodeView,
			CODE_HTML = 'code-html',
			CODE_CSS = 'code-css',
			PREFIX = 'view-';
		
		if(!(container = $(container))) {
			return ;
		}

		htmlCode = getElementsByClassName(CODE_HTML, container)[0];
		cssCode = getElementsByClassName(CODE_CSS, container)[0];
		htmlCodeView = getElementsByClassName(PREFIX + CODE_HTML, container)[0];
		cssCodeView = getElementsByClassName(PREFIX + CODE_CSS, container)[0];
		
		renderView(htmlCode, htmlCodeView);
		renderView(cssCode, cssCodeView);

		htmlCodeView.value = fomartCode(htmlCode.innerHTML);
		cssCodeView.value = fomartCode(cssCode.innerHTML);
	}

	function renderView(code, view) {
		var codeVal = code.innerHTML || '\n',
			lines, height;

		lines = codeVal.match(/\n/g).length;
		if(lines < 10) {
			lines = 10;
		} else if(lines > 30) {
			lines = 30;
		}
		height = lines * 1.5;
		view.style.height = height + 'em';	
	}

	function fomartCode(code) {
 		code = code.replace(/^[\r\n]+|[\s\r\n]+$/g,'');
        var tabs = code.match(/^\s*/)[0];
        code = code.replace(new RegExp(tabs,'g'),'');
		
		return code.toLowerCase();//如果class中有大些字符串会出现BUG，简单修复IE8及一下浏览器标签大写
	}

	function arrEach(arr, fn, thisP) {
		var i = 0, len, item; 
		if(Array.prototype.forEach) {
			arr.forEach(fn, thisP);
		} else {
			thisP = thisP || win;
			for(len = arr.length; i < len; i++) {
				item = arr[i];
				fn.call(thisP, item, i, arr);
			}
		}
	}

	function $(r) { return typeof r === 'string' ? document.getElementById(r) : r;}

	function hasClass(elem, className) {
		var ret = false, t = $(elem).className.split(' '), i = 0, len;
		
		for(len = t.length; i < len; i++) {	
			if(t[i] === className) {
				ret = true;
			}
		}
		return ret;
	}
	
	function getElementsByClassName(className, rootElement) {
		var ret = [], tags, tag,
			rootElement = $(rootElement) || doc;
		
		if(doc.getElementsByClassName) {
			ret = rootElement.getElementsByClassName(className);
		} else {
		tags = rootElement.getElementsByTagName('*');
			for(var i  = 0, len = tags.length; i < len; i++) {
				tag = tags[i];

				if(hasClass(tag, className)) {	
					ret.push(tag);
				}
			}
		}
		return ret;
	}

	function catchSuffix(s, prefix) {
		var ret, arr = s.split(' ');
		for(var i = 0; i< arr.length; i++) {
			if(arr[i].indexOf(prefix) > -1) {
				ret = arr[i].substring(arr[i].indexOf(prefix) + prefix.length, arr[i].length);
				break;
			}
		}
		return ret;
	}

	win.arrEach = arrEach;
	win.tabs = tabs;
	win.viewCodes = viewCodes;

})(window, document)
