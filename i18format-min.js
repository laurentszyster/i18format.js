!function(){function t(t){return t.toString()}function n(t){return t.toLocaleDateString()}function r(t){return t.toUTCString()}function o(t){return t.toLocaleString()}function i(t){return t.toString(16)}function u(t){return t.toString(2)}function e(t){return Math.round(100*t).toString()}function f(t){var n=t.split(/[{]([0-9]+|[^:^}]+)?(:[^}]+)?[}]/),r=Math.floor(n.length/3);if(0===r)return t;for(var o,i,u=[],e=[],f=n.length%3===1?n[n.length-1]:"",a=0;r>a;a++){if(o=n[3*a+1],e.push(void 0===o?a+1:o.match(/[0-9]+/)?parseInt(o)+1:o),i=c[n[3*a+2]||":"],void 0===i)throw"Format Error - format "+n[3*a+2]+" is undefined";u.push(i)}return function(){for(var t,o,i=[],a=0;r>a;a++)i.push(n[3*a]),t=e[a],o="string"==typeof t?this[t]:arguments[t],void 0!==o&&i.push(u[a](o));return i.push(f),i.join("")}}function a(t){var n=s[t];return void 0===n&&(n=s[t]=f(t)),"string"==typeof n?n:n.apply(this,arguments)}var g,c={":":t,":s":t,":d":n,":t":r,":n":o,":x":i,":b":u,":p":e},s={};a.setLanguage=function(t,n){g=t,s={};for(var r in n)s[r]=f(n[r])},a.getLanguageName=function(){return g},a.getKeys=function(){return Object.keys(s)},a.setFormat=function(t,n){c[t]=n},window.i18format=a}();