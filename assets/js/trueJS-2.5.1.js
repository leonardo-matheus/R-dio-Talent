function tSec(fn) {
	if (fn === undefined) {
	}else if(typeof(fn) === 'function') {
		return t.extends.ready(fn);
	}else{
		return t(fn);
	}
}
var t;
t = '';
var prefixes = ['-moz-', '-ms-','-o-','-webkit-','-khtml-'];
t = function(select){
	newdocument = doc();
	type = '';
	sl = '';
	get = '';
	type = select.nodeName;
	sl = select;
	if (type == "#document") {
		get = select;
	}else{
		if(typeof(select) === "object") {
			get = select;
		}else if(typeof(select) === "ig") {
		}else if(typeof(select) === "extra") {
		}else if(typeof(select) === 'this') {
		}else if(typeof(select) === "string") {
			get = newdocument.querySelectorAll(select);
		}else{
			get = select;
		}
	}
	// if (get === undefined || get.length <= 0) {
	// }else{
	// }
	return t.extends;
}
t.extends = {
	ready: function(fn) {
		if (doc().readyState != 'loading'){
			fn();
		}else{
			doc().addEventListener('DOMContentLoaded', fn);
		}
	},
	css: function(ot, st) {
		var getat = get;
		var total = Object.keys(getat).length;
		if (st != undefined) {
			if (total <= 0) {
				for (var i in ot) {
					getat.style[ot] = st;
				}
			}else{
				for (var i in get) {
					if (typeof(getat[i]) != 'object') {
					}else{
						getat[i].style[ot] = st;
					}
				}
			}
		}else{
			if (typeof(ot) == 'string') {
				for (var i in getat) {
						return getat[i].style[ot];
					}
			}else{
				if (total <= 1) {
					for (var i in ot) {
						if (typeof(getat) == 'object' && getat.length <= 1) {
							getat[0].style[i] = ot[i];
						}else{
							getat.style[i] = ot[i];
						}
					}
				}else{
					for (var i in get) {
						var ago = getat[i];
						for (var i in ot) {
							var aot = ot[i]
							if (typeof(ago) != 'object') {
							}else{
								ago.style[i] = aot;
							}
						}
					}
				}
			}
		}
	},
	str: function(obj) {
		"use strict";
	    var pairs = [];
	    for (var prop in obj) {
	        if (!obj.hasOwnProperty(prop)) {
	            continue;
	        }
	        pairs.push(prop + '=' + obj[prop]);
	    }
	    return pairs.join('&');
	},
	deepStr: function(obj) {
	    var pairs = [];
	    for (var prop in obj) {
	        if (!obj.hasOwnProperty(prop)) {
	            continue;
	        }
	        if (Object.prototype.toString.call(obj[prop]) === '[object Object]') {
	            pairs.push(t.deepStr(obj[prop]));
	            continue;
	        }
	        pairs.push(prop + '=' + obj[prop]);
	    }
	    return pairs.join('&');
	},
	keypress: function(func) {
		var getat = get;
		for (var i = 0; i < get.length; i++) {
		    getat[i].addEventListener('keypress', func, true);
		}
	},
	keydown: function(func) {
		var getat = get;
		for (var i = 0; i < get.length; i++) {
		    getat[i].addEventListener('keydown', func, true);
		}
	},
	keyup: function(func) {
		var getat = get;
		for (var i = 0; i < get.length; i++) {
		    getat[i].addEventListener('keyup', func, true);
		}
	},
	click: function(func) {
		var getat = get;
		for (var i = 0; i < get.length; i++) {
		    getat[i].addEventListener('click', func, true);
		}
	},
	mousedown: function(func) {
		var getat = get;
		for (var i = 0; i < get.length; i++) {
		    getat[i].addEventListener('mousedown', func, true);
		}
	},
	mouseup: function(func) {
		var getat = get;
		for (var i = 0; i < get.length; i++) {
		    getat[i].addEventListener('mouseup', func, true);
		}
	},
	mousemove: function(func) {
		var getat = get;
		for (var i = 0; i < get.length; i++) {
		    getat[i].addEventListener('mousemove', func, true);
		}
	},
	mousedown: function(func) {
		var getat = get;
		for (var i = 0; i < get.length; i++) {
		    getat[i].addEventListener('mousemove', func, true);
		}
	},
	mouseenter: function(func) {
		var getat = get;
		for (var i = 0; i < get.length; i++) {
		    getat[i].addEventListener('mousemove', func, true);
		}
	},
	mouseover: function(func) {
		var getat = get;
		for (var i = 0; i < get.length; i++) {
		    getat[i].addEventListener('mousemove', func, true);
		}
	},
	mouseout: function(func) {
		var getat = get;
		for (var i = 0; i < get.length; i++) {
		    getat[i].addEventListener('mousemove', func, true);
		}
	},
	mouseup: function(func) {
		var getat = get;
		for (var i = 0; i < get.length; i++) {
		    getat[i].addEventListener('mousemove', func, true);
		}
	},
	change: function(func) {
		var getat = get;
		for (var i = 0; i < get.length; i++) {
		    getat[i].addEventListener('change', func, true);
		}
	},
	timeupdate: function(func) {
		var getat = get;
		for (var i = 0; i < get.length; i++) {
		    getat[i].addEventListener('timeupdate', func, true);
		}
	},
	submit: function(func) {
		var getat = get;
		for (var i = 0; i < get.length; i++) {
		    getat[i].addEventListener('submit', func, true);
		}
	},
	focus: function(func) {
		var getat = get;
		for (var i = 0; i < get.length; i++) {
		    getat[i].addEventListener('focus', func, true);
		}
	},
	blur: function(func) {
		var getat = get;
		for (var i = 0; i < get.length; i++) {
		    getat[i].addEventListener('blur', func, true);
		}
	},
	load: function(func) {
		var getat = get;
		for (var i = 0; i < get.length; i++) {
		    getat[i].addEventListener('load', func, true);
		}
	},
	find: function(el) {
		var getat = get;
		newdocument = doc();
		type = '';
		sl = '';
		get = getat.querySelectorAll(el);
		type = el.nodeName;
		sl = el;
		return t.extends;
	},
	attr: function(el, val) {
		type = typeof(el);
		if (type === 'string') {
			if (val != undefined || val != null) {
				volt = t.extends.attrset(el, val);
			}else{
				volt = t.extends.attrget(el);
			}
		}else{
			for (var i in el) {
				volt = t.extends.attrset([i], el[i]);
			}
		}
		return volt;
	},
	ajax: function(output) {
		var request;
		if (window.XMLHttpRequest) {
		    request = new XMLHttpRequest();
		}else{
		    request = new ActiveXObject("Microsoft.XMLHTTP");
		}
		url = output.url;
		type = output.type.toUpperCase();
		dataType = output.dataType.toUpperCase();
		data = output.data;
		if(type === 'POST') {
			data = t.extends.deepStr(data);
			request.open('POST', url, true);
			request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			request.setRequestHeader("Cache-Control", "no-cache");
			request.setRequestHeader("Pragma", "no-cache");
			request.setRequestHeader("If-Modified-Since", "Sat, 1 Jan 2000 00:00:00 GMT");
			request.send(data);
		}else{
			data = t.extends.deepStr(data);
			request.open('GET', url+'?'+data, true);
			request.setRequestHeader("Cache-Control", "no-cache");
			request.setRequestHeader("Pragma", "no-cache");
			request.setRequestHeader("If-Modified-Since", "Sat, 1 Jan 2000 00:00:00 GMT");
			request.send();
		}
		request.onreadystatechange = function() {
			if (request.readyState === 4) {
				if (request.status >= 200 && request.status < 400) {
					if (dataType == 'JSON') {
						result = JSON.parse(request.responseText);
					}else{
						result = request.responseText;
					}
					if (typeof(output.success) === 'function') {
						output.success(result);
					}else{
						console.log('faça um callback success');
					}
				}else{
					if (typeof(output.fail) === 'function') {
						output.fail(request);
					}else{
						console.log('faça um callback fail');
					}
				}
			}
		};
	},
	html: function(val) {
		var getat = get;
		var ttl = Object.keys(getat).length;
		if (getat === undefined || getat.length <= 0) {
		}else{
			if (val != undefined || val != null) {
				getat[0].innerHTML = val;
			}else{
				if (ttl <= 0) {
					ret = getat.innerHTML;
					return ret;
				}else{
					ret = getat[0].innerHTML;
					return ret;
				}
			}
		}
	},
	val: function(sttr) {
		var ttl = Object.keys(get).length;
		var getat = get;
		var slat = sl;
		var str = sttr;
		if (str != undefined || str != null) {
			getat[0].value = str;
		}else{
			if (ttl <= 0) {
				ret = getat.value;
				return ret;
			}else{
				ret = getat[0].value;
				return ret;
			}
		}
	},
	append: function(ret) {
		var slat = sl;
		var getat = document.querySelectorAll(slat);
		var tag = String(ret.match(/^[^\>|\s]*/g));
		var tag1 = tag.replace(/\</g, '');
		var ttl = Object.keys(getat).length;
		var apagarTag = String(ret.replace(/^<[^>]*>/g, ''));
		var apagarTag1 = String(apagarTag.replace(/<[^>]*>$/g, ''));
		var node = document.createElement(tag1);
		var atributo = String(ret.match(/^<[^>]*>/g));
		var atributo1 = String(atributo.match(/([a-zA-Z0-9]*\=)['"](?:[^"'\/]*\/)*([^'"]+)['"]/g));
		var split = atributo1.split(',');
		// ([a-zA-Z0-9]*\=)['"](?:[^"'\/]*\/)*([^'"]+)['"]
		// #addall > li[liaddall=a0] > .embeds > .ulli > ul
		// #addall > li[liaddall=a0] > .embeds > .ulli > ul
    	node.innerHTML = apagarTag1;
    	if (ttl <= 1) {
    		for (var i = 0; i < split.length; i++) {
				var splitfor = split[i];
				var name = String(splitfor.match(/^[^\=]*/g));
				var valor = String(splitfor.match(/["']([^"'\/]*\/)*([^'"]+)['"]/g));
				var valor1 = String(valor.replace(/\"/gi, ''));
				var valor2 = String(valor1.replace(/\'/gi, ''));
		   		if (name === null || name == 'null' || name == undefined) {
				}else{
					var att = document.createAttribute(name);
		   			att.value = valor2;
	   				node.setAttributeNode(att);
				}
			}
			getat[0].appendChild(node);
		}else{
			for (var i = 0; i < split.length; i++) {
				var splitfor = split[i];
				var name = String(splitfor.match(/^[^\=]*/g));
				var valor = String(splitfor.match(/["']([^"'\/]*\/)*([^'"]+)['"]/g));
				var valor1 = String(valor.replace(/\"/gi, ''));
				var valor2 = String(valor1.replace(/\'/gi, ''));
				if (name === null || name == 'null' || name == undefined) {
				}else{
					var att = document.createAttribute(name);
		   			att.value = valor2;
	   				node.setAttributeNode(att);
				}
			}
			for (var i = 0; i < ttl; i++) {
				getat[i].appendChild(node);
			}
		}
	},
	appendTo: function(ret) {
		var getat = get;
		var ttl = Object.keys(getat).length;
		var slat = sl;
		// var html = t(slat).html();
		for (var i = 0; i < getat.length; i++) {
		    getat[i].insertAdjacentHTML('afterbegin', ret);
		}
		// var el = document.querySelector('div');
		// var newEl = document.createElement('p');
		// newEl.appendChild(document.createTextNode('Hello World!'));
		// el.appendChild(newEl);
		// el.insertBefore(newEl, null);
		// el.insertBefore(newEl, el.childNodes[0]);
	},
	fadeIn: function(fn) {
		var cat = get[0];
		fdin = setInterval( function(){
	        if (parseFloat(cat.style.opacity) < 1) {
	            cat.style.opacity = parseFloat(cat.style.opacity) + 0.01;
	        } else {
	            clearInterval(fdin);
	        }
	    }, 10 );
		var fn = fn;
		var getat = get;
		var ttl = Object.keys(getat).length;
		var slat = sl;
		if (typeof(getat) === 'object' && ttl <= 0) {
			var atget = getat;
		}else{
			var atget = getat[0];
		}
		var padrao = atget.style['display'];
		// if (padrao == 'none') {
		// 	padrao = 'block';
		// }
		atget.style['opacity'] = 0;
		var last = +new Date();
		var callbk = function() {
			atget.style.display = 'block';
			atget.style['opacity'] = +atget.style['opacity'] + (new Date() - last) / 500;
			last = +new Date();
			if (+atget.style['opacity'] < 1) {
				(window.requestAnimationFrame && requestAnimationFrame(callbk)) || setTimeout(callbk, 16);
			}else{
				if (typeof(fn) === 'function') {
					clearInterval(callbk);
					fn();
				}
			}
		};
		callbk();
	},
	fadeOut: function(fn) {
		var fn = fn;
		var getat = get;
		var ttl = Object.keys(getat).length;
		if (typeof(getat) === 'object' && ttl <= 0) {
			var atget = getat;
		}else{
			var atget = getat[0];
		}
		var last = +new Date();
		var callbk = function() {
			atget.style['opacity'] = +atget.style['opacity'] - (new Date() - last) / 200;
			last = +new Date();
			if (-atget.style['opacity'] < 0.0) {
				(window.requestAnimationFrame && requestAnimationFrame(callbk)) || setTimeout(callbk, 16);
			}else{
				if (typeof(fn) === 'function') {
					fn();
					clearInterval(callbk);
				}
				atget.style.display = 'none';
			}
		};
		callbk();
	},
	animate: function(el, spd, fn) {
		var atget = get[0];
		var slat = sl;
		var el = el;
		var spd = spd;
		var fn = fn;
		for (var i = 0; i < prefixes.length; i++) {
			if (spd === undefined || spd === null || spd === 'function') {
				atget.style[prefixes[i]+'transition-duration'] = '1s';
				if (i >= (prefixes.length - 1)) {
				}
			}else{
				atget.style[prefixes[i]+'transition-duration'] = spd+'s';
			}
		}
		if (i >= (prefixes.length - 1)) {
			setTimeout(function() {
				t(slat).css(el);
			}, 100);
		}
		if (typeof(fn) === 'function') {
			return fn();
		}else if(typeof(spd) === 'function') {
			return spd();
		}else{
		}
	},
	getret: function() {
		return t.extends.getret.extra;
	},
	// length: function() {
	// 	var getat = get;
	// 	var ttl = Object.keys(getat).length;
	// 	return t.extends.getret.extra.row();
	// },
	remove: function() {
		var getat = get;
		var slat = sl;
		var ttl = Object.keys(getat).length;
		for (var i = 0; i < ttl; i++) {
			getat[i].parentNode.removeChild(getat[i]);
		}
	},
	width: function() {
		var getat = get;
		var slat = sl;
		var ttl = Object.keys(getat).length;
		for (var i = 0; i < ttl; i++) {
			return getat[i].offsetWidth;
		}
	},
	widthN: function() {
		var getat = get;
		var slat = sl;
		var ttl = Object.keys(getat).length;
		for (var i = 0; i < ttl; i++) {
			return getat[i].clientWidth;
		}
	},
	height: function() {
		var getat = get;
		var slat = sl;
		var ttl = Object.keys(getat).length;
		for (var i = 0; i < ttl; i++) {
			return getat[i].offsetHeight;
		}
	},
	heightN: function() {
		var getat = get;
		var slat = sl;
		var ttl = Object.keys(getat).length;
		for (var i = 0; i < ttl; i++) {
			return getat[i].clientHeight;
		}
	},
	is: function(dmc ,elementSelector) {
		var regex = /^./g;
		var elementSelectorFilter = elementSelector.match(regex)[0];
	    switch(elementSelectorFilter) {
	        case ".":
	            var er = new RegExp(elementSelector.replace(".", ""));
	            return dmc.className.match(er);
	            break;
	        case "#":
	            return dmc.getAttribute("id") === elementSelector.replace("#", "");
	            break;
	        default:
	            return dmc.tagName === elementSelector.toUpperCase();
	            // return ;
	            break;
	    }
	},
	on: function(eventName, elementSelector, cb) {
		var getat = get;
		var slat = sl;
		var ttl = Object.keys(getat).length;
		if (ttl > 1 || getat != undefined) {
			for (var i = 0; i < ttl; i++) {
			    getat[i].addEventListener(eventName, function (evt) {
			        var getat = evt.target;
			        if (t(slat).is(getat,elementSelector)) {
			            cb.call(getat, evt);
			        }
			    });
			}
		}else{
		}
	},
	trigger: function(eventname) {
		var getat = get;
		var event = new Event(eventname, {"bubbles":true, "cancelable":false});
		for (var i = 0; i < get.length; i++) {
		    getat[i].dispatchEvent(event);
		}
	},
	get: function() {
		var getat = get;
		return getat;
	},
	length: function() {
		var getat = get;
		return getat.length;
	},
	parent: function() {
		var getat = get;
		newdocument = doc();
		type = '';
		get = getat.parentElement;
		return t.extends;
	}
};
tSec.ajax = function(output) {
	var request;
	if (window.XMLHttpRequest) {
	    request = new XMLHttpRequest();
	}else{
	    request = new ActiveXObject("Microsoft.XMLHTTP");
	}
	url = output.url;
	type = output.type.toUpperCase();
	dataType = output.dataType.toUpperCase();
	data = output.data;
	if(type === 'POST') {
		data = t.extends.deepStr(data);
		request.open('POST', url, true);
		request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		request.setRequestHeader("Cache-Control", "no-cache");
		request.setRequestHeader("Pragma", "no-cache");
		request.setRequestHeader("If-Modified-Since", "Sat, 1 Jan 2000 00:00:00 GMT");
		request.send(data);
	}else{
		data = t.extends.deepStr(data);
		request.open('GET', url+'?'+data, true);
		request.setRequestHeader("Cache-Control", "no-cache");
		request.setRequestHeader("Pragma", "no-cache");
		request.setRequestHeader("If-Modified-Since", "Sat, 1 Jan 2000 00:00:00 GMT");
		request.send();
	}
	request.onreadystatechange = function() {
		if (request.readyState === 4) {
			if (request.status >= 200 && request.status < 400) {
				if (dataType == 'JSON') {
					// console.log(eval(request.responseText));
					if (typeof(request.responseText) == "json") {}
					result = JSON.parse(request.responseText);
				}else{
					result = request.responseText;
				}
				if (typeof(output.success) === 'function') {
					output.success(result);
				}else{
					console.log('faça um callback success');
				}
			}else{
				if (typeof(output.fail) === 'function') {
					output.fail(request);
				}else{
					console.log('faça um callback fail');
				}
			}
		}
	};
};
t.extends.attrget = function(at) {
	var getat = get;
	var ttl = Object.keys(getat).length;
	if (typeof(getat) === 'object') {
		return getat.getAttribute(at);
	}else{
		return getat.getAttribute(at);
	}
};
t.extends.attrset = function(at, ct) {
	var getat = get;
	var ttl = Object.keys(getat).length;
	if (typeof(getat) == 'object') {
		if (ttl == 0) {
			getat.setAttribute(at, ct);
		}else{
			for (var i = 0; i < getat.length; i++) {
				getat[i].setAttribute(at, ct);
			}
		}
	}else{
		getat.setAttribute(at, ct);
	}
};
/* Extends function getret()*/
	t.extends.getret.extra = {
		count: function() {
			var getat = get;
			return getat.length;
		},
		get: function() {
			var getat = get;
			return getat;
		},
		row: function() {
			var getat = get;
			var ttl = Object.keys(getat).length;
			return ttl;
		}
	};
/* Extends function getret()*/

function doc() {
	return document;
}

var Base64 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function(input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;

        input = Base64._utf8_encode(input);

        while (i < input.length) {

            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);

            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;

            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }

            output = output + this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) + this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

        }

        return output;
    },
    decode: function(input) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (i < input.length) {
            enc1 = this._keyStr.indexOf(input.charAt(i++));
            enc2 = this._keyStr.indexOf(input.charAt(i++));
            enc3 = this._keyStr.indexOf(input.charAt(i++));
            enc4 = this._keyStr.indexOf(input.charAt(i++));
            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;
            output = output + String.fromCharCode(chr1);

            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }
        }
        output = Base64._utf8_decode(output);
        return output;

    },
    _utf8_encode: function(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";

        for (var n = 0; n < string.length; n++) {

            var c = string.charCodeAt(n);

            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }

        }

        return utftext;
    },

    _utf8_decode: function(utftext) {
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;

        while (i < utftext.length) {

            c = utftext.charCodeAt(i);

            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            }
            else if ((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i + 1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            }
            else {
                c2 = utftext.charCodeAt(i + 1);
                c3 = utftext.charCodeAt(i + 2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }

        }

        return string;
    }

}