/* i18format.js */
!function () {
	function formatString(value) { return value.toString() }
	function formatDate(value) { return value.toLocaleDateString() }
	function formatTime(value) { return value.toUTCString() }
	function formatNumber(value) { return value.toLocaleString() }
	function formatHex(value) { return value.toString(16) }
	function formatBinary(value) { return value.toString(2) }
	function formatPercentage(value) { return Math.round(value*100).toString() }
	var FORMATS = {
		":": formatString,
		":s": formatString,
		":d": formatDate,
		":t": formatTime,
		":n": formatNumber,
		":x": formatHex,
		":b": formatBinary,
		":p": formatPercentage
	};
	function compile(template) {
		var parts = template.split(/[{]([0-9]+|[^:^}]+)?(:[^}]+)?[}]/), 
			P = Math.floor(parts.length/3);
		if (P === 0) {
			return template;
		}
		var formats = [], 
			indexes = [], 
			tail = (parts.length % 3 === 1) ? parts[parts.length-1] : "";
		for (var i=0, k, f ; i<P ; i++) {
			k = parts[i*3+1];
			indexes.push((k === undefined) ? i+1 : k.match(/[0-9]+/) ? parseInt(k)+1 : k);
			f = FORMATS[parts[i*3+2]||":"];
			if (f === undefined) {
				throw "Format Error - format "+parts[i*3+2]+" is undefined";
			}
			formats.push(f);
		}
		return function () {
			var buffer = [];
			for (var i=0, j, v; i<P; i++) {
				buffer.push(parts[i*3]);
				j = indexes[i];
				v = (typeof j === "string") ? this[j] : arguments[j];
				if (v !== undefined) {
					buffer.push(formats[i](v));
				}
			}
			buffer.push(tail);
			return buffer.join("");
		}
	}
	var N, D = {};
	function i18f (text) {
		var t = D[text];
		if (t === undefined) {
			t = D[text] = compile(text);
		} 
		return (typeof t === "string") ? t : t.apply(this, arguments);
	} 
	i18f.setLanguage = function (name, dictionnary) { 
		N = name;
		D = {};
		for (var k in dictionnary) {
			D[k] = compile(dictionnary[k]);
		}
	}
	i18f.getLanguageName = function () { 
		return N;
	}
	i18f.getKeys = function () { 
		return Object.keys(D);
	}
	i18f.setFormat = function (name, format) {
		FORMATS[name] = format;
	}
	window.i18format = i18f;
}();
// that's all ;-)