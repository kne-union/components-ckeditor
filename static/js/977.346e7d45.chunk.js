(self.webpackChunk_kne_components_components_ckeditor=self.webpackChunk_kne_components_components_ckeditor||[]).push([[977],{77977:(t,e,r)=>{var o;t=r.nmd(t),self,o=o=>(()=>{var n={703:(t,e,r)=>{"use strict";var o=r(414);function n(){}function i(){}i.resetWarningCache=n,t.exports=function(){function t(t,e,r,n,i,s){if(s!==o){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function e(){return t}t.isRequired=t;var r={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:n};return r.PropTypes=r,r}},697:(t,e,r)=>{t.exports=r(703)()},414:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},787:t=>{"use strict";t.exports=o}},i={};function s(t){var e=i[t];if(void 0!==e)return e.exports;var r=i[t]={exports:{}};return n[t](r,r.exports,s),r.exports}s.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return s.d(e,{a:e}),e},s.d=(t,e)=>{for(var r in e)s.o(e,r)&&!s.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),s.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var a={};return(()=>{"use strict";s.r(a),s.d(a,{CKEditor:()=>ar,CKEditorContext:()=>ir,useMultiRootEditor:()=>hr});var o=s(787),n=s.n(o),i=s(697),c=s.n(i);const u=new Array(256).fill("").map(((t,e)=>("0"+e.toString(16)).slice(-2)));class h{constructor(t){if(this.crashes=[],this.state="initializing",this._now=Date.now,this.crashes=[],this._crashNumberLimit="number"==typeof t.crashNumberLimit?t.crashNumberLimit:3,this._minimumNonErrorTimePeriod="number"==typeof t.minimumNonErrorTimePeriod?t.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=t=>{const e="error"in t?t.error:t.reason;e instanceof Error&&this._handleError(e,t)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}destroy(){this._stopErrorHandling(),this._listeners={}}on(t,e){this._listeners[t]||(this._listeners[t]=[]),this._listeners[t].push(e)}off(t,e){this._listeners[t]=this._listeners[t].filter((t=>t!==e))}_fire(t){const e=this._listeners[t]||[];for(var r=arguments.length,o=new Array(r>1?r-1:0),n=1;n<r;n++)o[n-1]=arguments[n];for(const i of e)i.apply(this,[null,...o])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(t,e){if(this._shouldReactToError(t)){this.crashes.push({message:t.message,stack:t.stack,filename:e instanceof ErrorEvent?e.filename:void 0,lineno:e instanceof ErrorEvent?e.lineno:void 0,colno:e instanceof ErrorEvent?e.colno:void 0,date:this._now()});const r=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:t,causesRestart:r}),r?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(t){return t.is&&t.is("CKEditorError")&&void 0!==t.context&&null!==t.context&&"ready"===this.state&&this._isErrorComingFromThisItem(t)}_shouldRestart(){return this.crashes.length<=this._crashNumberLimit||(this.crashes[this.crashes.length-1].date-this.crashes[this.crashes.length-1-this._crashNumberLimit].date)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}function d(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Set;const r=[t],o=new Set;let n=0;for(;r.length>n;){const i=r[n++];if(!o.has(i)&&l(i)&&!e.has(i))if(o.add(i),Symbol.iterator in i)try{for(const t of i)r.push(t)}catch(t){}else for(const t in i)"defaultValue"!==t&&r.push(i[t])}return o}function l(t){const e=Object.prototype.toString.call(t),r=typeof t;return!("number"===r||"boolean"===r||"string"===r||"symbol"===r||"function"===r||"[object Date]"===e||"[object RegExp]"===e||"[object Module]"===e||null==t||t._watchdogExcluded||t instanceof EventTarget||t instanceof Event)}function f(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new Set;if(t===e&&"object"==typeof(o=t)&&null!==o)return!0;var o;const n=d(t,r),i=d(e,r);for(const s of n)if(i.has(s))return!0;return!1}const p=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},g="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;var _="object"==typeof self&&self&&self.Object===Object&&self;const y=g||_||Function("return this")(),b=function(){return y.Date.now()};var m=/\s/,v=/^\s+/;const w=function(t){return t?t.slice(0,function(t){for(var e=t.length;e--&&m.test(t.charAt(e)););return e}(t)+1).replace(v,""):t},j=y.Symbol;var E=Object.prototype,O=E.hasOwnProperty,x=E.toString,C=j?j.toStringTag:void 0,R=Object.prototype.toString,A=j?j.toStringTag:void 0;const S=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":A&&A in Object(t)?function(t){var e=O.call(t,C),r=t[C];try{t[C]=void 0;var o=!0}catch(t){}var n=x.call(t);return o&&(e?t[C]=r:delete t[C]),n}(t):function(t){return R.call(t)}(t)},P=function(t){return null!=t&&"object"==typeof t};var T=/^[-+]0x[0-9a-f]+$/i,D=/^0b[01]+$/i,k=/^0o[0-7]+$/i,N=parseInt;const W=function(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||P(t)&&"[object Symbol]"==S(t)}(t))return NaN;if(p(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=p(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=w(t);var r=D.test(t);return r||k.test(t)?N(t.slice(2),r?2:8):T.test(t)?NaN:+t};var I=Math.max,z=Math.min;const U=function(t,e,r){var o=!0,n=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return p(r)&&(o="leading"in r?!!r.leading:o,n="trailing"in r?!!r.trailing:n),function(t,e,r){var o,n,i,s,a,c,u=0,h=!1,d=!1,l=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function f(e){var r=o,i=n;return o=n=void 0,u=e,s=t.apply(i,r)}function g(t){var r=t-c;return void 0===c||r>=e||r<0||d&&t-u>=i}function _(){var t=b();if(g(t))return y(t);a=setTimeout(_,function(t){var r=e-(t-c);return d?z(r,i-(t-u)):r}(t))}function y(t){return a=void 0,l&&o?f(t):(o=n=void 0,s)}function m(){var t=b(),r=g(t);if(o=arguments,n=this,c=t,r){if(void 0===a)return function(t){return u=t,a=setTimeout(_,e),h?f(t):s}(c);if(d)return clearTimeout(a),a=setTimeout(_,e),f(c)}return void 0===a&&(a=setTimeout(_,e)),s}return e=W(e)||0,p(r)&&(h=!!r.leading,i=(d="maxWait"in r)?I(W(r.maxWait)||0,e):i,l="trailing"in r?!!r.trailing:l),m.cancel=function(){void 0!==a&&clearTimeout(a),u=0,o=c=n=a=void 0},m.flush=function(){return void 0===a?s:y(b())},m}(t,e,{leading:o,maxWait:e,trailing:n})},M=function(t,e){return function(r){return t(e(r))}},F=M(Object.getPrototypeOf,Object);var L=Function.prototype,q=Object.prototype,J=L.toString,B=q.hasOwnProperty,H=J.call(Object);const $=function(t){return P(t)&&1===t.nodeType&&!function(t){if(!P(t)||"[object Object]"!=S(t))return!1;var e=F(t);if(null===e)return!0;var r=B.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&J.call(r)==H}(t)},K=function(t,e){return t===e||t!=t&&e!=e},V=function(t,e){for(var r=t.length;r--;)if(K(t[r][0],e))return r;return-1};var Q=Array.prototype.splice;function G(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}G.prototype.clear=function(){this.__data__=[],this.size=0},G.prototype.delete=function(t){var e=this.__data__,r=V(e,t);return!(r<0)&&(r==e.length-1?e.pop():Q.call(e,r,1),--this.size,!0)},G.prototype.get=function(t){var e=this.__data__,r=V(e,t);return r<0?void 0:e[r][1]},G.prototype.has=function(t){return V(this.__data__,t)>-1},G.prototype.set=function(t,e){var r=this.__data__,o=V(r,t);return o<0?(++this.size,r.push([t,e])):r[o][1]=e,this};const Y=G,X=function(t){if(!p(t))return!1;var e=S(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},Z=y["__core-js_shared__"];var tt=function(){var t=/[^.]+$/.exec(Z&&Z.keys&&Z.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),et=Function.prototype.toString;const rt=function(t){if(null!=t){try{return et.call(t)}catch(t){}try{return t+""}catch(t){}}return""};var ot=/^\[object .+?Constructor\]$/,nt=Function.prototype,it=Object.prototype,st=nt.toString,at=it.hasOwnProperty,ct=RegExp("^"+st.call(at).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const ut=function(t){return!(!p(t)||function(t){return!!tt&&tt in t}(t))&&(X(t)?ct:ot).test(rt(t))},ht=function(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return ut(r)?r:void 0},dt=ht(y,"Map"),lt=ht(Object,"create");var ft=Object.prototype.hasOwnProperty,pt=Object.prototype.hasOwnProperty;function gt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}gt.prototype.clear=function(){this.__data__=lt?lt(null):{},this.size=0},gt.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},gt.prototype.get=function(t){var e=this.__data__;if(lt){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return ft.call(e,t)?e[t]:void 0},gt.prototype.has=function(t){var e=this.__data__;return lt?void 0!==e[t]:pt.call(e,t)},gt.prototype.set=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=lt&&void 0===e?"__lodash_hash_undefined__":e,this};const _t=gt,yt=function(t,e){var r=t.__data__;return function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}(e)?r["string"==typeof e?"string":"hash"]:r.map};function bt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}bt.prototype.clear=function(){this.size=0,this.__data__={hash:new _t,map:new(dt||Y),string:new _t}},bt.prototype.delete=function(t){var e=yt(this,t).delete(t);return this.size-=e?1:0,e},bt.prototype.get=function(t){return yt(this,t).get(t)},bt.prototype.has=function(t){return yt(this,t).has(t)},bt.prototype.set=function(t,e){var r=yt(this,t),o=r.size;return r.set(t,e),this.size+=r.size==o?0:1,this};const mt=bt;function vt(t){var e=this.__data__=new Y(t);this.size=e.size}vt.prototype.clear=function(){this.__data__=new Y,this.size=0},vt.prototype.delete=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r},vt.prototype.get=function(t){return this.__data__.get(t)},vt.prototype.has=function(t){return this.__data__.has(t)},vt.prototype.set=function(t,e){var r=this.__data__;if(r instanceof Y){var o=r.__data__;if(!dt||o.length<199)return o.push([t,e]),this.size=++r.size,this;r=this.__data__=new mt(o)}return r.set(t,e),this.size=r.size,this};const wt=vt,jt=function(){try{var t=ht(Object,"defineProperty");return t({},"",{}),t}catch(t){}}(),Et=function(t,e,r){"__proto__"==e&&jt?jt(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r};var Ot=Object.prototype.hasOwnProperty;const xt=function(t,e,r){var o=t[e];Ot.call(t,e)&&K(o,r)&&(void 0!==r||e in t)||Et(t,e,r)},Ct=function(t,e,r,o){var n=!r;r||(r={});for(var i=-1,s=e.length;++i<s;){var a=e[i],c=o?o(r[a],t[a],a,r,t):void 0;void 0===c&&(c=t[a]),n?Et(r,a,c):xt(r,a,c)}return r},Rt=function(t){return P(t)&&"[object Arguments]"==S(t)};var At=Object.prototype,St=At.hasOwnProperty,Pt=At.propertyIsEnumerable;const Tt=Rt(function(){return arguments}())?Rt:function(t){return P(t)&&St.call(t,"callee")&&!Pt.call(t,"callee")},Dt=Array.isArray;var kt=e&&!e.nodeType&&e,Nt=kt&&t&&!t.nodeType&&t,Wt=Nt&&Nt.exports===kt?y.Buffer:void 0;const It=(Wt?Wt.isBuffer:void 0)||function(){return!1};var zt=/^(?:0|[1-9]\d*)$/;const Ut=function(t,e){var r=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&zt.test(t))&&t>-1&&t%1==0&&t<e},Mt=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991};var Ft={};Ft["[object Float32Array]"]=Ft["[object Float64Array]"]=Ft["[object Int8Array]"]=Ft["[object Int16Array]"]=Ft["[object Int32Array]"]=Ft["[object Uint8Array]"]=Ft["[object Uint8ClampedArray]"]=Ft["[object Uint16Array]"]=Ft["[object Uint32Array]"]=!0,Ft["[object Arguments]"]=Ft["[object Array]"]=Ft["[object ArrayBuffer]"]=Ft["[object Boolean]"]=Ft["[object DataView]"]=Ft["[object Date]"]=Ft["[object Error]"]=Ft["[object Function]"]=Ft["[object Map]"]=Ft["[object Number]"]=Ft["[object Object]"]=Ft["[object RegExp]"]=Ft["[object Set]"]=Ft["[object String]"]=Ft["[object WeakMap]"]=!1;const Lt=function(t){return function(e){return t(e)}};var qt=e&&!e.nodeType&&e,Jt=qt&&t&&!t.nodeType&&t,Bt=Jt&&Jt.exports===qt&&g.process;const Ht=function(){try{return Jt&&Jt.require&&Jt.require("util").types||Bt&&Bt.binding&&Bt.binding("util")}catch(o){}}();var $t=Ht&&Ht.isTypedArray;const Kt=$t?Lt($t):function(t){return P(t)&&Mt(t.length)&&!!Ft[S(t)]};var Vt=Object.prototype.hasOwnProperty;const Qt=function(t,e){var r=Dt(t),o=!r&&Tt(t),n=!r&&!o&&It(t),i=!r&&!o&&!n&&Kt(t),s=r||o||n||i,a=s?function(t,e){for(var r=-1,o=Array(t);++r<t;)o[r]=e(r);return o}(t.length,String):[],c=a.length;for(var u in t)!e&&!Vt.call(t,u)||s&&("length"==u||n&&("offset"==u||"parent"==u)||i&&("buffer"==u||"byteLength"==u||"byteOffset"==u)||Ut(u,c))||a.push(u);return a};var Gt=Object.prototype;const Yt=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||Gt)},Xt=M(Object.keys,Object);var Zt=Object.prototype.hasOwnProperty;const te=function(t){return null!=t&&Mt(t.length)&&!X(t)},ee=function(t){return te(t)?Qt(t):function(t){if(!Yt(t))return Xt(t);var e=[];for(var r in Object(t))Zt.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)};var re=Object.prototype.hasOwnProperty;const oe=function(t){if(!p(t))return function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e}(t);var e=Yt(t),r=[];for(var o in t)("constructor"!=o||!e&&re.call(t,o))&&r.push(o);return r},ne=function(t){return te(t)?Qt(t,!0):oe(t)};var ie=e&&!e.nodeType&&e,se=ie&&t&&!t.nodeType&&t,ae=se&&se.exports===ie?y.Buffer:void 0,ce=ae?ae.allocUnsafe:void 0;const ue=function(){return[]};var he=Object.prototype.propertyIsEnumerable,de=Object.getOwnPropertySymbols;const le=de?function(t){return null==t?[]:(t=Object(t),function(t,e){for(var r=-1,o=null==t?0:t.length,n=0,i=[];++r<o;){var s=t[r];e(s,r,t)&&(i[n++]=s)}return i}(de(t),(function(e){return he.call(t,e)})))}:ue,fe=function(t,e){for(var r=-1,o=e.length,n=t.length;++r<o;)t[n+r]=e[r];return t},pe=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)fe(e,le(t)),t=F(t);return e}:ue,ge=function(t,e,r){var o=e(t);return Dt(t)?o:fe(o,r(t))},_e=function(t){return ge(t,ee,le)},ye=function(t){return ge(t,ne,pe)},be=ht(y,"DataView"),me=ht(y,"Promise"),ve=ht(y,"Set"),we=ht(y,"WeakMap");var je="[object Map]",Ee="[object Promise]",Oe="[object Set]",xe="[object WeakMap]",Ce="[object DataView]",Re=rt(be),Ae=rt(dt),Se=rt(me),Pe=rt(ve),Te=rt(we),De=S;(be&&De(new be(new ArrayBuffer(1)))!=Ce||dt&&De(new dt)!=je||me&&De(me.resolve())!=Ee||ve&&De(new ve)!=Oe||we&&De(new we)!=xe)&&(De=function(t){var e=S(t),r="[object Object]"==e?t.constructor:void 0,o=r?rt(r):"";if(o)switch(o){case Re:return Ce;case Ae:return je;case Se:return Ee;case Pe:return Oe;case Te:return xe}return e});const ke=De;var Ne=Object.prototype.hasOwnProperty;const We=y.Uint8Array,Ie=function(t){var e=new t.constructor(t.byteLength);return new We(e).set(new We(t)),e};var ze=/\w*$/,Ue=j?j.prototype:void 0,Me=Ue?Ue.valueOf:void 0;const Fe=function(t,e,r){var o=t.constructor;switch(e){case"[object ArrayBuffer]":return Ie(t);case"[object Boolean]":case"[object Date]":return new o(+t);case"[object DataView]":return function(t,e){var r=e?Ie(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(t,e){var r=e?Ie(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,r);case"[object Map]":case"[object Set]":return new o;case"[object Number]":case"[object String]":return new o(t);case"[object RegExp]":return function(t){var e=new t.constructor(t.source,ze.exec(t));return e.lastIndex=t.lastIndex,e}(t);case"[object Symbol]":return function(t){return Me?Object(Me.call(t)):{}}(t)}};var Le=Object.create;const qe=function(){function t(){}return function(e){if(!p(e))return{};if(Le)return Le(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();var Je=Ht&&Ht.isMap;const Be=Je?Lt(Je):function(t){return P(t)&&"[object Map]"==ke(t)};var He=Ht&&Ht.isSet;const $e=He?Lt(He):function(t){return P(t)&&"[object Set]"==ke(t)};var Ke="[object Arguments]",Ve="[object Function]",Qe="[object Object]",Ge={};Ge[Ke]=Ge["[object Array]"]=Ge["[object ArrayBuffer]"]=Ge["[object DataView]"]=Ge["[object Boolean]"]=Ge["[object Date]"]=Ge["[object Float32Array]"]=Ge["[object Float64Array]"]=Ge["[object Int8Array]"]=Ge["[object Int16Array]"]=Ge["[object Int32Array]"]=Ge["[object Map]"]=Ge["[object Number]"]=Ge[Qe]=Ge["[object RegExp]"]=Ge["[object Set]"]=Ge["[object String]"]=Ge["[object Symbol]"]=Ge["[object Uint8Array]"]=Ge["[object Uint8ClampedArray]"]=Ge["[object Uint16Array]"]=Ge["[object Uint32Array]"]=!0,Ge["[object Error]"]=Ge[Ve]=Ge["[object WeakMap]"]=!1;const Ye=function t(e,r,o,n,i,s){var a,c=1&r,u=2&r,h=4&r;if(o&&(a=i?o(e,n,i,s):o(e)),void 0!==a)return a;if(!p(e))return e;var d=Dt(e);if(d){if(a=function(t){var e=t.length,r=new t.constructor(e);return e&&"string"==typeof t[0]&&Ne.call(t,"index")&&(r.index=t.index,r.input=t.input),r}(e),!c)return function(t,e){var r=-1,o=t.length;for(e||(e=Array(o));++r<o;)e[r]=t[r];return e}(e,a)}else{var l=ke(e),f=l==Ve||"[object GeneratorFunction]"==l;if(It(e))return function(t,e){if(e)return t.slice();var r=t.length,o=ce?ce(r):new t.constructor(r);return t.copy(o),o}(e,c);if(l==Qe||l==Ke||f&&!i){if(a=u||f?{}:function(t){return"function"!=typeof t.constructor||Yt(t)?{}:qe(F(t))}(e),!c)return u?function(t,e){return Ct(t,pe(t),e)}(e,function(t,e){return t&&Ct(e,ne(e),t)}(a,e)):function(t,e){return Ct(t,le(t),e)}(e,function(t,e){return t&&Ct(e,ee(e),t)}(a,e))}else{if(!Ge[l])return i?e:{};a=Fe(e,l,c)}}s||(s=new wt);var g=s.get(e);if(g)return g;s.set(e,a),$e(e)?e.forEach((function(n){a.add(t(n,r,o,n,e,s))})):Be(e)&&e.forEach((function(n,i){a.set(i,t(n,r,o,i,e,s))}));var _=d?void 0:(h?u?ye:_e:u?ne:ee)(e);return function(t,e){for(var r=-1,o=null==t?0:t.length;++r<o&&!1!==e(t[r],r,t););}(_||e,(function(n,i){_&&(n=e[i=n]),xt(a,i,t(n,r,o,i,e,s))})),a};class Xe extends h{constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};super(e),this._editor=null,this._initUsingData=!0,this._editables={},this._throttledSave=U(this._save.bind(this),"number"==typeof e.saveInterval?e.saveInterval:5e3),t&&(this._creator=(e,r)=>t.create(e,r)),this._destructor=t=>t.destroy()}get editor(){return this._editor}get _item(){return this._editor}setCreator(t){this._creator=t}setDestructor(t){this._destructor=t}_restart(){return Promise.resolve().then((()=>(this.state="initializing",this._fire("stateChange"),this._destroy()))).catch((t=>{console.error("An error happened during the editor destroying.",t)})).then((()=>{const t={},e=[],r=this._config.rootsAttributes||{},o={};for(const[i,s]of Object.entries(this._data.roots))s.isLoaded?(t[i]="",o[i]=r[i]||{}):e.push(i);const n={...this._config,extraPlugins:this._config.extraPlugins||[],lazyRoots:e,rootsAttributes:o,_watchdogInitialData:this._data};return delete n.initialData,n.extraPlugins.push(Ze),this._initUsingData?this.create(t,n,n.context):$(this._elementOrData)?this.create(this._elementOrData,n,n.context):this.create(this._editables,n,n.context)})).then((()=>{this._fire("restart")}))}create(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._elementOrData,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._config,r=arguments.length>2?arguments[2]:void 0;return Promise.resolve().then((()=>(super._startErrorHandling(),this._elementOrData=t,this._initUsingData="string"==typeof t||Object.keys(t).length>0&&"string"==typeof Object.values(t)[0],this._config=this._cloneEditorConfiguration(e)||{},this._config.context=r,this._creator(t,this._config)))).then((t=>{this._editor=t,t.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=t.model.document.version,this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this.state="ready",this._fire("stateChange")}))}destroy(){return Promise.resolve().then((()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy())))}_destroy(){return Promise.resolve().then((()=>{this._stopErrorHandling(),this._throttledSave.cancel();const t=this._editor;return this._editor=null,t.model.document.off("change:data",this._throttledSave),this._destructor(t)}))}_save(){const t=this._editor.model.document.version;try{this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this._lastDocumentVersion=t}catch(t){console.error(t,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(t){this._excludedProps=t}_getData(){const t=this._editor,e=t.model.document.roots.filter((t=>t.isAttached()&&"$graveyard"!=t.rootName)),{plugins:r}=t,o=r.has("CommentsRepository")&&r.get("CommentsRepository"),n=r.has("TrackChanges")&&r.get("TrackChanges"),i={roots:{},markers:{},commentThreads:JSON.stringify([]),suggestions:JSON.stringify([])};e.forEach((t=>{i.roots[t.rootName]={content:JSON.stringify(Array.from(t.getChildren())),attributes:JSON.stringify(Array.from(t.getAttributes())),isLoaded:t._isLoaded}}));for(const s of t.model.markers)s._affectsData&&(i.markers[s.name]={rangeJSON:s.getRange().toJSON(),usingOperation:s._managedUsingOperations,affectsData:s._affectsData});return o&&(i.commentThreads=JSON.stringify(o.getCommentThreads({toJSON:!0,skipNotAttached:!0}))),n&&(i.suggestions=JSON.stringify(n.getSuggestions({toJSON:!0,skipNotAttached:!0}))),i}_getEditables(){const t={};for(const e of this.editor.model.document.getRootNames()){const r=this.editor.ui.getEditableElement(e);r&&(t[e]=r)}return t}_isErrorComingFromThisItem(t){return f(this._editor,t.context,this._excludedProps)}_cloneEditorConfiguration(t){return function(t,e){return Ye(t,5,e="function"==typeof e?e:void 0)}(t,((t,e)=>$(t)||"context"===e?t:void 0))}}class Ze{constructor(t){this.editor=t,this._data=t.config.get("_watchdogInitialData")}init(){this.editor.data.on("init",(t=>{t.stop(),this.editor.model.enqueueChange({isUndoable:!1},(t=>{this._restoreCollaborationData(),this._restoreEditorData(t)})),this.editor.data.fire("ready")}),{priority:999})}_createNode(t,e){if("name"in e){const r=t.createElement(e.name,e.attributes);if(e.children)for(const o of e.children)r._appendChild(this._createNode(t,o));return r}return t.createText(e.data,e.attributes)}_restoreEditorData(t){const e=this.editor;Object.entries(this._data.roots).forEach((r=>{let[o,{content:n,attributes:i}]=r;const s=JSON.parse(n),a=JSON.parse(i),c=e.model.document.getRoot(o);for(const[e,u]of a)t.setAttribute(e,u,c);for(const e of s){const r=this._createNode(t,e);t.insert(r,c,"end")}})),Object.entries(this._data.markers).forEach((r=>{let[o,n]=r;const{document:i}=e.model,{rangeJSON:{start:s,end:a},...c}=n,u=i.getRoot(s.root),h=t.createPositionFromPath(u,s.path,s.stickiness),d=t.createPositionFromPath(u,a.path,a.stickiness),l=t.createRange(h,d);t.addMarker(o,{range:l,...c})}))}_restoreCollaborationData(){const t=JSON.parse(this._data.commentThreads),e=JSON.parse(this._data.suggestions);t.forEach((t=>{const e=this.editor.config.get("collaboration.channelId"),r=this.editor.plugins.get("CommentsRepository");r.hasCommentThread(t.threadId)&&r.getCommentThread(t.threadId).remove(),r.addCommentThread({channelId:e,...t})})),e.forEach((t=>{const e=this.editor.plugins.get("TrackChangesEditing");e.hasSuggestion(t.id)?e.getSuggestion(t.id).attributes=t.attributes:e.addSuggestionData(t)}))}}const tr=Symbol("MainQueueId");class er extends h{constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};super(e),this._watchdogs=new Map,this._context=null,this._contextProps=new Set,this._actionQueues=new rr,this._watchdogConfig=e,this._creator=e=>t.create(e),this._destructor=t=>t.destroy(),this._actionQueues.onEmpty((()=>{"initializing"===this.state&&(this.state="ready",this._fire("stateChange"))}))}setCreator(t){this._creator=t}setDestructor(t){this._destructor=t}get context(){return this._context}create(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._actionQueues.enqueue(tr,(()=>(this._contextConfig=t,this._create())))}getItem(t){return this._getWatchdog(t)._item}getItemState(t){return this._getWatchdog(t).state}add(t){const e=or(t);return Promise.all(e.map((t=>this._actionQueues.enqueue(t.id,(()=>{if("destroyed"===this.state)throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let e;if(this._watchdogs.has(t.id))throw new Error("Item with the given id is already added: '".concat(t.id,"'."));if("editor"===t.type)return e=new Xe(null,this._watchdogConfig),e.setCreator(t.creator),e._setExcludedProperties(this._contextProps),t.destructor&&e.setDestructor(t.destructor),this._watchdogs.set(t.id,e),e.on("error",((r,o)=>{let{error:n,causesRestart:i}=o;this._fire("itemError",{itemId:t.id,error:n}),i&&this._actionQueues.enqueue(t.id,(()=>new Promise((r=>{const o=()=>{e.off("restart",o),this._fire("itemRestart",{itemId:t.id}),r()};e.on("restart",o)}))))})),e.create(t.sourceElementOrData,t.config,this._context);throw new Error("Not supported item type: '".concat(t.type,"'."))})))))}remove(t){const e=or(t);return Promise.all(e.map((t=>this._actionQueues.enqueue(t,(()=>{const e=this._getWatchdog(t);return this._watchdogs.delete(t),e.destroy()})))))}destroy(){return this._actionQueues.enqueue(tr,(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy())))}_restart(){return this._actionQueues.enqueue(tr,(()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch((t=>{console.error("An error happened during destroying the context or items.",t)})).then((()=>this._create())).then((()=>this._fire("restart"))))))}_create(){return Promise.resolve().then((()=>(this._startErrorHandling(),this._creator(this._contextConfig)))).then((t=>(this._context=t,this._contextProps=d(this._context),Promise.all(Array.from(this._watchdogs.values()).map((t=>(t._setExcludedProperties(this._contextProps),t.create(void 0,void 0,this._context))))))))}_destroy(){return Promise.resolve().then((()=>{this._stopErrorHandling();const t=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map((t=>t.destroy()))).then((()=>this._destructor(t)))}))}_getWatchdog(t){const e=this._watchdogs.get(t);if(!e)throw new Error("Item with the given id was not registered: ".concat(t,"."));return e}_isErrorComingFromThisItem(t){for(const e of this._watchdogs.values())if(e._isErrorComingFromThisItem(t))return!1;return f(this._context,t.context)}}class rr{constructor(){this._onEmptyCallbacks=[],this._queues=new Map,this._activeActions=0}onEmpty(t){this._onEmptyCallbacks.push(t)}enqueue(t,e){const r=t===tr;this._activeActions++,this._queues.get(t)||this._queues.set(t,Promise.resolve());const o=(r?Promise.all(this._queues.values()):Promise.all([this._queues.get(tr),this._queues.get(t)])).then(e),n=o.catch((()=>{}));return this._queues.set(t,n),o.finally((()=>{this._activeActions--,this._queues.get(t)===n&&0===this._activeActions&&this._onEmptyCallbacks.forEach((t=>t()))}))}}function or(t){return Array.isArray(t)?t:[t]}const nr=n().createContext("contextWatchdog");class ir extends n().Component{constructor(t,e){super(t,e),this.contextWatchdog=null,this.props.isLayoutReady&&this._initializeContextWatchdog(this.props.config)}shouldComponentUpdate(t){return this._shouldComponentUpdate(t)}async _shouldComponentUpdate(t){return t.id!==this.props.id&&(this.contextWatchdog&&await this.contextWatchdog.destroy(),await this._initializeContextWatchdog(t.config)),t.isLayoutReady&&!this.contextWatchdog?(await this._initializeContextWatchdog(t.config),!0):this.props.children!==t.children}render(){return n().createElement(nr.Provider,{value:this.contextWatchdog},this.props.children)}componentWillUnmount(){this._destroyContext()}async _initializeContextWatchdog(t){this.contextWatchdog=new er(this.props.context,this.props.watchdogConfig),this.contextWatchdog.on("error",((t,e)=>{this.props.onError(e.error,{phase:"runtime",willContextRestart:e.causesRestart})})),this.contextWatchdog.on("stateChange",(()=>{"ready"===this.contextWatchdog.state&&this.props.onReady&&this.props.onReady(this.contextWatchdog.context)})),await this.contextWatchdog.create(t).catch((t=>{this.props.onError(t,{phase:"initialization",willContextRestart:!1})}))}async _destroyContext(){this.contextWatchdog&&(await this.contextWatchdog.destroy(),this.contextWatchdog=null)}}ir.defaultProps={isLayoutReady:!0,onError:(t,e)=>console.error(t,e)},ir.propTypes={id:c().string,isLayoutReady:c().bool,context:c().func,watchdogConfig:c().object,config:c().object,onReady:c().func,onError:c().func};const sr="Lock from React integration (@ckeditor/ckeditor5-react)";class ar extends n().Component{constructor(t){super(t),this.editorDestructionInProgress=null,this.domContainer=n().createRef(),this.watchdog=null;const{CKEDITOR_VERSION:e}=window;if(e){const[t]=e.split(".").map(Number);t<37&&console.warn("The <CKEditor> component requires using CKEditor 5 in version 37 or higher.")}else console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.')}get editor(){return this.props.disableWatchdog?this.instance:this.watchdog?this.watchdog.editor:null}shouldComponentUpdate(t){return!!this.editor&&(t.id!==this.props.id||t.disableWatchdog!==this.props.disableWatchdog||(this._shouldUpdateEditor(t)&&this.editor.data.set(t.data),"disabled"in t&&(t.disabled?this.editor.enableReadOnlyMode(sr):this.editor.disableReadOnlyMode(sr)),!1))}async componentDidMount(){await this._initializeEditor()}async componentDidUpdate(){await this._destroyEditor(),await this._initializeEditor()}async componentWillUnmount(){await this._destroyEditor()}render(){return n().createElement("div",{ref:this.domContainer})}async _initializeEditor(){await this.editorDestructionInProgress,this.props.disableWatchdog?this.instance=await this._createEditor(this.domContainer.current,this._getConfig()):this.watchdog||(this.context instanceof er?this.watchdog=new cr(this.context):this.watchdog=new ar._EditorWatchdog(this.props.editor,this.props.watchdogConfig),this.watchdog.setCreator(((t,e)=>this._createEditor(t,e))),this.watchdog.on("error",((t,e)=>{let{error:r,causesRestart:o}=e;(this.props.onError||console.error)(r,{phase:"runtime",willEditorRestart:o})})),await this.watchdog.create(this.domContainer.current,this._getConfig()).catch((t=>{(this.props.onError||console.error)(t,{phase:"initialization",willEditorRestart:!1})})))}_createEditor(t,e){return this.props.editor.create(t,e).then((t=>{"disabled"in this.props&&this.props.disabled&&t.enableReadOnlyMode(sr);const e=t.model.document,r=t.editing.view.document;return e.on("change:data",(e=>{this.props.onChange&&this.props.onChange(e,t)})),r.on("focus",(e=>{this.props.onFocus&&this.props.onFocus(e,t)})),r.on("blur",(e=>{this.props.onBlur&&this.props.onBlur(e,t)})),setTimeout((()=>{this.props.onReady&&this.props.onReady(t)})),t}))}async _destroyEditor(){this.editorDestructionInProgress=new Promise((t=>{setTimeout((async()=>this.watchdog?(await this.watchdog.destroy(),this.watchdog=null,t()):this.instance?(await this.instance.destroy(),this.instance=null,t()):void t()))}))}_shouldUpdateEditor(t){return this.props.data!==t.data&&this.editor.data.get()!==t.data}_getConfig(){const t=this.props.config||{};return this.props.data&&t.initialData&&console.warn("Editor data should be provided either using `config.initialData` or `content` property. The config value takes precedence over `content` property and will be used when both are specified."),{...t,initialData:t.initialData||this.props.data||""}}}ar.contextType=nr,ar.propTypes={editor:c().func.isRequired,data:c().string,config:c().object,disableWatchdog:c().bool,watchdogConfig:c().object,onChange:c().func,onReady:c().func,onFocus:c().func,onBlur:c().func,onError:c().func,disabled:c().bool,id:c().any},ar._EditorWatchdog=Xe;class cr{constructor(t){this._contextWatchdog=t,this._id=function(){const t=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,r=4294967296*Math.random()>>>0,o=4294967296*Math.random()>>>0;return"e"+u[t>>0&255]+u[t>>8&255]+u[t>>16&255]+u[t>>24&255]+u[e>>0&255]+u[e>>8&255]+u[e>>16&255]+u[e>>24&255]+u[r>>0&255]+u[r>>8&255]+u[r>>16&255]+u[r>>24&255]+u[o>>0&255]+u[o>>8&255]+u[o>>16&255]+u[o>>24&255]}()}setCreator(t){this._creator=t}create(t,e){return this._contextWatchdog.add({sourceElementOrData:t,config:e,creator:this._creator,id:this._id,type:"editor"})}on(t,e){this._contextWatchdog.on("itemError",((t,r)=>{let{itemId:o,error:n}=r;o===this._id&&e(null,{error:n,causesRestart:void 0})}))}destroy(){return"ready"===this._contextWatchdog.state?this._contextWatchdog.remove(this._id):Promise.resolve()}get editor(){return this._contextWatchdog.getItem(this._id)}}const ur="Lock from React integration (@ckeditor/ckeditor5-react)",hr=t=>{let e=null;const r=(0,o.useRef)(null),i=(0,o.useContext)(nr),[s,a]=(0,o.useState)(null),[c,u]=(0,o.useState)(t.data),[h,d]=(0,o.useState)(t.rootsAttributes||{}),[l,f]=(0,o.useState)([]),p=(0,o.useRef)(!0),g=(0,o.useRef)(null),_=n().createElement("div",{ref:g});(0,o.useEffect)((()=>((async()=>{await r.current,!1!==t.isLayoutReady&&w()})(),()=>{v().then((()=>{r.current=null}))})),[t.isLayoutReady]),(0,o.useEffect)((()=>{s&&(t.disabled?s.enableReadOnlyMode(ur):s.disableReadOnlyMode(ur))}),[t.disabled]),(0,o.useEffect)((()=>{const t=g.current;if(s&&!r.current){const e=s.getFullData();u({...e}),d({...s.getRootsAttributes()}),f([...Object.keys(e).map((t=>b(s,t)))]),t&&t.appendChild(s.ui.view.toolbar.element)}return()=>{t&&t.firstChild&&t.removeChild(t.firstChild)}}),[s&&s.id]);const y=()=>{const e=t.config||{};return t.data&&e.initialData&&console.warn("Editor data should be provided either using `config.initialData` or `data` property. The config value takes precedence over `data` property and will be used when both are specified."),{...e,rootsAttributes:h}},b=(t,e)=>n().createElement("div",{id:e,key:e,ref:r=>{if(r){const o=t.ui.view.createEditable(e,r);t.ui.addEditable(o),t.editing.view.forceRender()}}}),m=(e,r)=>t.editor.create(e,r).then((e=>{t.disabled&&t.disabled&&e.enableReadOnlyMode(ur);const r=e.model.document,o=e.editing.view.document;return r.on("change:data",(r=>((e,r)=>{const o=e.model.document,n={},i={};o.differ.getChanges().forEach((t=>{let r;if(r="insert"==t.type||"remove"==t.type?t.position.root:t.range.root,!r.isAttached())return;const{rootName:o}=r;n[o]=e.getData({rootName:o})})),o.differ.getChangedRoots().forEach((t=>{if(t.state)return void(void 0!==n[t.name]&&delete n[t.name]);const r=t.name;i[r]=e.getRootAttributes(r)})),Object.keys(n).length&&u((t=>({...t,...n}))),Object.keys(i).length&&d((t=>({...t,...i}))),t.onChange&&t.onChange(r,e)})(e,r))),e.on("addRoot",((t,r)=>((t,e,r)=>{const o=r.rootName,n=b(t,o);u((e=>({...e,[o]:t.getData({rootName:o})}))),d((e=>({...e,[o]:t.getRootAttributes(o)}))),f((t=>[...t,n]))})(e,0,r))),e.on("detachRoot",((t,r)=>((t,e,r)=>{const o=r.rootName;f((t=>t.filter((t=>t.props.id!==o)))),u((t=>{const{[o]:e,...r}=t;return{...r}})),d((t=>{const{[o]:e,...r}=t;return{...r}})),t.detachEditable(r)})(e,0,r))),o.on("focus",(r=>{t.onFocus&&t.onFocus(r,e)})),o.on("blur",(r=>{t.onBlur&&t.onBlur(r,e)})),a(e),t.onReady&&t.onReady(e),e})),v=async()=>{a(null),u({}),d({}),f([]),r.current=new Promise((t=>{setTimeout((async()=>e?(await e.destroy(),e=null,t()):s?(await s.destroy(),t()):void t()))}))},w=async()=>{t.disableWatchdog?await m(t.data,y()):e||(e=i instanceof er?new cr(i):new Xe(t.editor,t.watchdogConfig),e.setCreator(((t,e)=>m(t,e))),e.on("error",((e,r)=>{let{error:o,causesRestart:n}=r;(t.onError||console.error)(o,{phase:"runtime",willEditorRestart:n})})),await e.create(c,y()).catch((e=>{(t.onError||console.error)(e,{phase:"initialization",willEditorRestart:!1})})))};(0,o.useEffect)((()=>{if(s&&p.current){p.current=!1;const t=Object.keys(c),e=Object.keys(h);if(!t.every((t=>e.includes(t))))throw new Error("`data` and `attributes` objects must have the same keys (roots).");const r=s.getFullData(),o=s.getRootsAttributes(),{addedKeys:n,removedKeys:i}=j(r,c||{}),a=t.some((t=>void 0!==r[t]&&JSON.stringify(r[t])!==JSON.stringify(c[t]))),u=e.filter((t=>JSON.stringify(o[t])!==JSON.stringify(h[t])));s.model.change((t=>{E(n),O(i),a&&x(),u.length&&C(t,u)}))}}),[c,h]);const j=(t,e)=>{const r=Object.keys(t),o=Object.keys(e);return{addedKeys:o.filter((t=>!r.includes(t))),removedKeys:r.filter((t=>!o.includes(t)))}},E=t=>{t.forEach((t=>{s.addRoot(t,{data:c[t]||"",attributes:(null==h?void 0:h[t])||{},isUndoable:!0})}))},O=t=>{t.forEach((t=>{s.detachRoot(t,!0)}))},x=()=>{s.data.set(c,{suppressErrorInCollaboration:!0})},C=(t,e)=>{e.forEach((e=>{Object.keys(h[e]).forEach((t=>{s.registerRootAttribute(t)})),t.clearAttributes(s.model.document.getRoot(e)),t.setAttributes(h[e],s.model.document.getRoot(e))}))},R=(0,o.useCallback)((t=>{p.current=!0,u(t)}),[u]),A=(0,o.useCallback)((t=>{p.current=!0,d(t)}),[d]);return{editor:s,editableElements:l,toolbarElement:_,data:c,setData:R,attributes:h,setAttributes:A}}})(),a})(),t.exports=o(r(73884))}}]);
//# sourceMappingURL=977.346e7d45.chunk.js.map