/*! For license information please see main.bundle.js.LICENSE.txt */
(()=>{var t={61:(t,e,r)=>{var n=r(698).default;function o(){"use strict";t.exports=o=function(){return r},t.exports.__esModule=!0,t.exports.default=t.exports;var e,r={},i=Object.prototype,a=i.hasOwnProperty,c=Object.defineProperty||function(t,e,r){t[e]=r.value},s="function"==typeof Symbol?Symbol:{},u=s.iterator||"@@iterator",l=s.asyncIterator||"@@asyncIterator",f=s.toStringTag||"@@toStringTag";function h(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(e){h=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var o=e&&e.prototype instanceof b?e:b,i=Object.create(o.prototype),a=new T(n||[]);return c(i,"_invoke",{value:I(t,r,a)}),i}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}r.wrap=p;var v="suspendedStart",y="suspendedYield",g="executing",m="completed",w={};function b(){}function _(){}function x(){}var E={};h(E,u,(function(){return this}));var j=Object.getPrototypeOf,S=j&&j(j(M([])));S&&S!==i&&a.call(S,u)&&(E=S);var L=x.prototype=b.prototype=Object.create(E);function P(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,i,c,s){var u=d(t[o],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==n(f)&&a.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,c,s)}),(function(t){r("throw",t,c,s)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,s)}))}s(u.arg)}var o;c(this,"_invoke",{value:function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}})}function I(t,r,n){var o=v;return function(i,a){if(o===g)throw new Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:e,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var s=O(c,n);if(s){if(s===w)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===v)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=g;var u=d(t,r,n);if("normal"===u.type){if(o=n.done?m:y,u.arg===w)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=m,n.method="throw",n.arg=u.arg)}}}function O(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,O(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),w;var i=d(o,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,w;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,w):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,w)}function D(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function B(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(D,this),this.reset(!0)}function M(t){if(t||""===t){var r=t[u];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(a.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}throw new TypeError(n(t)+" is not iterable")}return _.prototype=x,c(L,"constructor",{value:x,configurable:!0}),c(x,"constructor",{value:_,configurable:!0}),_.displayName=h(x,f,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,h(t,f,"GeneratorFunction")),t.prototype=Object.create(L),t},r.awrap=function(t){return{__await:t}},P(k.prototype),h(k.prototype,l,(function(){return this})),r.AsyncIterator=k,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new k(p(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},P(L),h(L,f,"Generator"),h(L,u,(function(){return this})),h(L,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=M,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(B),!t)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=a.call(i,"catchLoc"),u=a.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,w):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),w},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),B(r),w}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;B(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:M(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),w}},r}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},698:t=>{function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},687:(t,e,r)=>{var n=r(61)();t.exports=n;try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";try{self["workbox:window:7.0.0"]&&_()}catch(t){}function t(t,e){return new Promise((function(r){var n=new MessageChannel;n.port1.onmessage=function(t){r(t.data)},t.postMessage(e,[n.port2])}))}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function n(t,r){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,r){if(t){if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(t,r):void 0}}(t))||r&&t&&"number"==typeof t.length){n&&(t=n);var o=0;return function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=t[Symbol.iterator]()).next.bind(n)}try{self["workbox:core:7.0.0"]&&_()}catch(t){}var o=function(){var t=this;this.promise=new Promise((function(e,r){t.resolve=e,t.reject=r}))};function i(t,e){var r=location.href;return new URL(t,r).href===new URL(e,r).href}var a=function(t,e){this.type=t,Object.assign(this,e)};function c(t,e,r){return r?e?e(t):t:(t&&t.then||(t=Promise.resolve(t)),e?t.then(e):t)}function s(){}var u={type:"SKIP_WAITING"};function l(t,e){if(!e)return t&&t.then?t.then(s):Promise.resolve()}var f=function(e){var r,n;function s(t,r){var n,s;return void 0===r&&(r={}),(n=e.call(this)||this).nn={},n.tn=0,n.rn=new o,n.en=new o,n.on=new o,n.un=0,n.an=new Set,n.cn=function(){var t=n.fn,e=t.installing;n.tn>0||!i(e.scriptURL,n.sn.toString())||performance.now()>n.un+6e4?(n.vn=e,t.removeEventListener("updatefound",n.cn)):(n.hn=e,n.an.add(e),n.rn.resolve(e)),++n.tn,e.addEventListener("statechange",n.ln)},n.ln=function(t){var e=n.fn,r=t.target,o=r.state,i=r===n.vn,c={sw:r,isExternal:i,originalEvent:t};!i&&n.mn&&(c.isUpdate=!0),n.dispatchEvent(new a(o,c)),"installed"===o?n.wn=self.setTimeout((function(){"installed"===o&&e.waiting===r&&n.dispatchEvent(new a("waiting",c))}),200):"activating"===o&&(clearTimeout(n.wn),i||n.en.resolve(r))},n.dn=function(t){var e=n.hn,r=e!==navigator.serviceWorker.controller;n.dispatchEvent(new a("controlling",{isExternal:r,originalEvent:t,sw:e,isUpdate:n.mn})),r||n.on.resolve(e)},n.gn=(s=function(t){var e=t.data,r=t.ports,o=t.source;return c(n.getSW(),(function(){n.an.has(o)&&n.dispatchEvent(new a("message",{data:e,originalEvent:t,ports:r,sw:o}))}))},function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];try{return Promise.resolve(s.apply(this,t))}catch(t){return Promise.reject(t)}}),n.sn=t,n.nn=r,navigator.serviceWorker.addEventListener("message",n.gn),n}n=e,(r=s).prototype=Object.create(n.prototype),r.prototype.constructor=r,r.__proto__=n;var f,h=s.prototype;return h.register=function(t){var e=(void 0===t?{}:t).immediate,r=void 0!==e&&e;try{var n=this;return function(t,e){var r=t();return r&&r.then?r.then(e):e()}((function(){if(!r&&"complete"!==document.readyState)return l(new Promise((function(t){return window.addEventListener("load",t)})))}),(function(){return n.mn=Boolean(navigator.serviceWorker.controller),n.yn=n.pn(),c(n.bn(),(function(t){n.fn=t,n.yn&&(n.hn=n.yn,n.en.resolve(n.yn),n.on.resolve(n.yn),n.yn.addEventListener("statechange",n.ln,{once:!0}));var e=n.fn.waiting;return e&&i(e.scriptURL,n.sn.toString())&&(n.hn=e,Promise.resolve().then((function(){n.dispatchEvent(new a("waiting",{sw:e,wasWaitingBeforeRegister:!0}))})).then((function(){}))),n.hn&&(n.rn.resolve(n.hn),n.an.add(n.hn)),n.fn.addEventListener("updatefound",n.cn),navigator.serviceWorker.addEventListener("controllerchange",n.dn),n.fn}))}))}catch(t){return Promise.reject(t)}},h.update=function(){try{return this.fn?l(this.fn.update()):void 0}catch(t){return Promise.reject(t)}},h.getSW=function(){return void 0!==this.hn?Promise.resolve(this.hn):this.rn.promise},h.messageSW=function(e){try{return c(this.getSW(),(function(r){return t(r,e)}))}catch(t){return Promise.reject(t)}},h.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&t(this.fn.waiting,u)},h.pn=function(){var t=navigator.serviceWorker.controller;return t&&i(t.scriptURL,this.sn.toString())?t:void 0},h.bn=function(){try{var t=this;return function(t,e){try{var r=t()}catch(t){return e(t)}return r&&r.then?r.then(void 0,e):r}((function(){return c(navigator.serviceWorker.register(t.sn,t.nn),(function(e){return t.un=performance.now(),e}))}),(function(t){throw t}))}catch(t){return Promise.reject(t)}},(f=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&function(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}(s.prototype,f),s}(function(){function t(){this.Pn=new Map}var e=t.prototype;return e.addEventListener=function(t,e){this.Sn(t).add(e)},e.removeEventListener=function(t,e){this.Sn(t).delete(e)},e.dispatchEvent=function(t){t.target=this;for(var e,r=n(this.Sn(t.type));!(e=r()).done;)(0,e.value)(t)},e.Sn=function(t){return this.Pn.has(t)||this.Pn.set(t,new Set),this.Pn.get(t)},t}());function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function p(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(o=n.key,i=void 0,i=function(t,e){if("object"!==h(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==h(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o),"symbol"===h(i)?i:String(i)),n)}var o,i}function d(t,e,r){return e&&p(t.prototype,e),r&&p(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function v(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}function y(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){v(i,n,o,a,c,"next",t)}function c(t){v(i,n,o,a,c,"throw",t)}a(void 0)}))}}var g=r(687),m=r.n(g);const w=(t,e)=>e.some((e=>t instanceof e));let b,x;const E=new WeakMap,j=new WeakMap,S=new WeakMap,L=new WeakMap,P=new WeakMap;let k={get(t,e,r){if(t instanceof IDBTransaction){if("done"===e)return j.get(t);if("objectStoreNames"===e)return t.objectStoreNames||S.get(t);if("store"===e)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return O(t[e])},set:(t,e,r)=>(t[e]=r,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function I(t){return"function"==typeof t?(e=t)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(x||(x=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(D(this),t),O(E.get(this))}:function(...t){return O(e.apply(D(this),t))}:function(t,...r){const n=e.call(D(this),t,...r);return S.set(n,t.sort?t.sort():[t]),O(n)}:(t instanceof IDBTransaction&&function(t){if(j.has(t))return;const e=new Promise(((e,r)=>{const n=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",i),t.removeEventListener("abort",i)},o=()=>{e(),n()},i=()=>{r(t.error||new DOMException("AbortError","AbortError")),n()};t.addEventListener("complete",o),t.addEventListener("error",i),t.addEventListener("abort",i)}));j.set(t,e)}(t),w(t,b||(b=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(t,k):t);var e}function O(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,r)=>{const n=()=>{t.removeEventListener("success",o),t.removeEventListener("error",i)},o=()=>{e(O(t.result)),n()},i=()=>{r(t.error),n()};t.addEventListener("success",o),t.addEventListener("error",i)}));return e.then((e=>{e instanceof IDBCursor&&E.set(e,t)})).catch((()=>{})),P.set(e,t),e}(t);if(L.has(t))return L.get(t);const e=I(t);return e!==t&&(L.set(t,e),P.set(e,t)),e}const D=t=>P.get(t);function B(t,e,{blocked:r,upgrade:n,blocking:o,terminated:i}={}){const a=indexedDB.open(t,e),c=O(a);return n&&a.addEventListener("upgradeneeded",(t=>{n(O(a.result),t.oldVersion,t.newVersion,O(a.transaction),t)})),r&&a.addEventListener("blocked",(t=>r(t.oldVersion,t.newVersion,t))),c.then((t=>{i&&t.addEventListener("close",(()=>i())),o&&t.addEventListener("versionchange",(t=>o(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),c}const T=["get","getKey","getAll","getAllKeys","count"],M=["put","add","delete","clear"],W=new Map;function N(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(W.get(e))return W.get(e);const r=e.replace(/FromIndex$/,""),n=e!==r,o=M.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!o&&!T.includes(r))return;const i=async function(t,...e){const i=this.transaction(t,o?"readwrite":"readonly");let a=i.store;return n&&(a=a.index(e.shift())),(await Promise.all([a[r](...e),o&&i.done]))[0]};return W.set(e,i),i}var A;A=k,k={...A,get:(t,e,r)=>N(t,e)||A.get(t,e,r),has:(t,e)=>!!N(t,e)||A.has(t,e)};var C=function(){var t=y(m().mark((function t(){return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,B("jate",1,{upgrade:function(t){t.objectStoreNames.contains("jate")?console.log("jate database already exists"):(t.createObjectStore("jate",{keyPath:"id",autoIncrement:!0}),console.log("jate database created"))}});case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.error("Error initializing database:",t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(){return t.apply(this,arguments)}}(),R=function(){var t=y(m().mark((function t(e){var r,n,o,i,a;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,B("jate",1);case 3:return r=t.sent,n=r.transaction("jate","readwrite"),o=n.objectStore("jate"),i=o.add({jate:e}),t.next=9,i;case 9:a=t.sent,console.log("Data saved to the database",a),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),console.error("Error saving data to database:",t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e){return t.apply(this,arguments)}}(),G=function(){var t=y(m().mark((function t(){var e,r,n,o,i;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,B("jate",1);case 3:return e=t.sent,r=e.transaction("jate","readonly"),n=r.objectStore("jate"),o=n.getAll(),t.next=9,o;case 9:return i=t.sent,console.log("Data retrieved from the database",i),t.abrupt("return",i.length>0?i[i.length-1].jate:null);case 14:t.prev=14,t.t0=t.catch(0),console.error("Error getting data from database:",t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(){return t.apply(this,arguments)}}();C();var U,V=d((function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var r=localStorage.getItem("content");if("undefined"==typeof CodeMirror)throw new Error("CodeMirror is not loaded");this.editor=CodeMirror(document.querySelector("#main"),{value:"",mode:"javascript",theme:"monokai",lineNumbers:!0,lineWrapping:!0,autofocus:!0,indentUnit:2,tabSize:2}),G().then((function(t){console.info("Loaded data from IndexedDB, injecting into editor"),e.editor.setValue(t||r||"\n/*\n        ____  ____________\n      / /   |/_  __/ ____/\n __  / / /| | / / / __/   \n/ /_/ / ___ |/ / / /___   \n ____/_/  |_/_/ /_____/   \njust another text editor\n*/                          \n")})),this.editor.on("change",(function(){localStorage.setItem("content",e.editor.getValue())})),this.editor.on("blur",(function(){console.log("The editor has lost focus"),R(localStorage.getItem("content"))}))})),F=document.querySelector("#main");F.innerHTML="",void 0===new V&&((U=document.createElement("div")).classList.add("spinner"),U.innerHTML='\n        <div class="loading-container">\n        <div class="loading-spinner" />\n        </div>\n    ',F.appendChild(U)),"serviceWorker"in navigator?(new f("/src-sw.js").register(),console.log("Service worker registered! 😎")):console.error("Service workers are not supported in this browser.")})()})();