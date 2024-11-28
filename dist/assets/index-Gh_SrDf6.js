function z0(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function $0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Xm={exports:{}},ll={},Jm={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qs=Symbol.for("react.element"),H0=Symbol.for("react.portal"),W0=Symbol.for("react.fragment"),G0=Symbol.for("react.strict_mode"),K0=Symbol.for("react.profiler"),q0=Symbol.for("react.provider"),Q0=Symbol.for("react.context"),Y0=Symbol.for("react.forward_ref"),X0=Symbol.for("react.suspense"),J0=Symbol.for("react.memo"),Z0=Symbol.for("react.lazy"),kf=Symbol.iterator;function eA(t){return t===null||typeof t!="object"?null:(t=kf&&t[kf]||t["@@iterator"],typeof t=="function"?t:null)}var Zm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},eg=Object.assign,tg={};function Ii(t,e,n){this.props=t,this.context=e,this.refs=tg,this.updater=n||Zm}Ii.prototype.isReactComponent={};Ii.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ii.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ng(){}ng.prototype=Ii.prototype;function th(t,e,n){this.props=t,this.context=e,this.refs=tg,this.updater=n||Zm}var nh=th.prototype=new ng;nh.constructor=th;eg(nh,Ii.prototype);nh.isPureReactComponent=!0;var Nf=Array.isArray,rg=Object.prototype.hasOwnProperty,rh={current:null},ig={key:!0,ref:!0,__self:!0,__source:!0};function sg(t,e,n){var r,i={},s=null,a=null;if(e!=null)for(r in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)rg.call(e,r)&&!ig.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),d=0;d<l;d++)u[d]=arguments[d+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:qs,type:t,key:s,ref:a,props:i,_owner:rh.current}}function tA(t,e){return{$$typeof:qs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ih(t){return typeof t=="object"&&t!==null&&t.$$typeof===qs}function nA(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Df=/\/+/g;function ou(t,e){return typeof t=="object"&&t!==null&&t.key!=null?nA(""+t.key):e.toString(36)}function Yo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case qs:case H0:a=!0}}if(a)return a=t,i=i(a),t=r===""?"."+ou(a,0):r,Nf(i)?(n="",t!=null&&(n=t.replace(Df,"$&/")+"/"),Yo(i,e,n,"",function(d){return d})):i!=null&&(ih(i)&&(i=tA(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Df,"$&/")+"/")+t)),e.push(i)),1;if(a=0,r=r===""?".":r+":",Nf(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+ou(s,l);a+=Yo(s,e,n,u,i)}else if(u=eA(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+ou(s,l++),a+=Yo(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Po(t,e,n){if(t==null)return t;var r=[],i=0;return Yo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function rA(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var nt={current:null},Xo={transition:null},iA={ReactCurrentDispatcher:nt,ReactCurrentBatchConfig:Xo,ReactCurrentOwner:rh};function og(){throw Error("act(...) is not supported in production builds of React.")}Q.Children={map:Po,forEach:function(t,e,n){Po(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Po(t,function(){e++}),e},toArray:function(t){return Po(t,function(e){return e})||[]},only:function(t){if(!ih(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Q.Component=Ii;Q.Fragment=W0;Q.Profiler=K0;Q.PureComponent=th;Q.StrictMode=G0;Q.Suspense=X0;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iA;Q.act=og;Q.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=eg({},t.props),i=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=rh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)rg.call(e,u)&&!ig.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:qs,type:t.type,key:i,ref:s,props:r,_owner:a}};Q.createContext=function(t){return t={$$typeof:Q0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:q0,_context:t},t.Consumer=t};Q.createElement=sg;Q.createFactory=function(t){var e=sg.bind(null,t);return e.type=t,e};Q.createRef=function(){return{current:null}};Q.forwardRef=function(t){return{$$typeof:Y0,render:t}};Q.isValidElement=ih;Q.lazy=function(t){return{$$typeof:Z0,_payload:{_status:-1,_result:t},_init:rA}};Q.memo=function(t,e){return{$$typeof:J0,type:t,compare:e===void 0?null:e}};Q.startTransition=function(t){var e=Xo.transition;Xo.transition={};try{t()}finally{Xo.transition=e}};Q.unstable_act=og;Q.useCallback=function(t,e){return nt.current.useCallback(t,e)};Q.useContext=function(t){return nt.current.useContext(t)};Q.useDebugValue=function(){};Q.useDeferredValue=function(t){return nt.current.useDeferredValue(t)};Q.useEffect=function(t,e){return nt.current.useEffect(t,e)};Q.useId=function(){return nt.current.useId()};Q.useImperativeHandle=function(t,e,n){return nt.current.useImperativeHandle(t,e,n)};Q.useInsertionEffect=function(t,e){return nt.current.useInsertionEffect(t,e)};Q.useLayoutEffect=function(t,e){return nt.current.useLayoutEffect(t,e)};Q.useMemo=function(t,e){return nt.current.useMemo(t,e)};Q.useReducer=function(t,e,n){return nt.current.useReducer(t,e,n)};Q.useRef=function(t){return nt.current.useRef(t)};Q.useState=function(t){return nt.current.useState(t)};Q.useSyncExternalStore=function(t,e,n){return nt.current.useSyncExternalStore(t,e,n)};Q.useTransition=function(){return nt.current.useTransition()};Q.version="18.3.1";Jm.exports=Q;var $=Jm.exports;const sA=$0($),oA=z0({__proto__:null,default:sA},[$]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aA=$,lA=Symbol.for("react.element"),uA=Symbol.for("react.fragment"),cA=Object.prototype.hasOwnProperty,hA=aA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,dA={key:!0,ref:!0,__self:!0,__source:!0};function ag(t,e,n){var r,i={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)cA.call(e,r)&&!dA.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:lA,type:t,key:s,ref:a,props:i,_owner:hA.current}}ll.Fragment=uA;ll.jsx=ag;ll.jsxs=ag;Xm.exports=ll;var te=Xm.exports,lg={exports:{}},gt={},ug={exports:{}},cg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(j,G){var K=j.length;j.push(G);e:for(;0<K;){var fe=K-1>>>1,ie=j[fe];if(0<i(ie,G))j[fe]=G,j[K]=ie,K=fe;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var G=j[0],K=j.pop();if(K!==G){j[0]=K;e:for(var fe=0,ie=j.length,Ae=ie>>>1;fe<Ae;){var Kt=2*(fe+1)-1,qt=j[Kt],Qt=Kt+1,Yt=j[Qt];if(0>i(qt,K))Qt<ie&&0>i(Yt,qt)?(j[fe]=Yt,j[Qt]=K,fe=Qt):(j[fe]=qt,j[Kt]=K,fe=Kt);else if(Qt<ie&&0>i(Yt,K))j[fe]=Yt,j[Qt]=K,fe=Qt;else break e}}return G}function i(j,G){var K=j.sortIndex-G.sortIndex;return K!==0?K:j.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();t.unstable_now=function(){return a.now()-l}}var u=[],d=[],f=1,m=null,v=3,R=!1,k=!1,D=!1,x=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(j){for(var G=n(d);G!==null;){if(G.callback===null)r(d);else if(G.startTime<=j)r(d),G.sortIndex=G.expirationTime,e(u,G);else break;G=n(d)}}function O(j){if(D=!1,I(j),!k)if(n(u)!==null)k=!0,Oi(F);else{var G=n(d);G!==null&&Gt(O,G.startTime-j)}}function F(j,G){k=!1,D&&(D=!1,T(g),g=-1),R=!0;var K=v;try{for(I(G),m=n(u);m!==null&&(!(m.expirationTime>G)||j&&!S());){var fe=m.callback;if(typeof fe=="function"){m.callback=null,v=m.priorityLevel;var ie=fe(m.expirationTime<=G);G=t.unstable_now(),typeof ie=="function"?m.callback=ie:m===n(u)&&r(u),I(G)}else r(u);m=n(u)}if(m!==null)var Ae=!0;else{var Kt=n(d);Kt!==null&&Gt(O,Kt.startTime-G),Ae=!1}return Ae}finally{m=null,v=K,R=!1}}var b=!1,A=null,g=-1,_=5,E=-1;function S(){return!(t.unstable_now()-E<_)}function P(){if(A!==null){var j=t.unstable_now();E=j;var G=!0;try{G=A(!0,j)}finally{G?w():(b=!1,A=null)}}else b=!1}var w;if(typeof y=="function")w=function(){y(P)};else if(typeof MessageChannel<"u"){var yt=new MessageChannel,tr=yt.port2;yt.port1.onmessage=P,w=function(){tr.postMessage(null)}}else w=function(){x(P,0)};function Oi(j){A=j,b||(b=!0,w())}function Gt(j,G){g=x(function(){j(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(j){j.callback=null},t.unstable_continueExecution=function(){k||R||(k=!0,Oi(F))},t.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<j?Math.floor(1e3/j):5},t.unstable_getCurrentPriorityLevel=function(){return v},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(j){switch(v){case 1:case 2:case 3:var G=3;break;default:G=v}var K=v;v=G;try{return j()}finally{v=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(j,G){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var K=v;v=j;try{return G()}finally{v=K}},t.unstable_scheduleCallback=function(j,G,K){var fe=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?fe+K:fe):K=fe,j){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=K+ie,j={id:f++,callback:G,priorityLevel:j,startTime:K,expirationTime:ie,sortIndex:-1},K>fe?(j.sortIndex=K,e(d,j),n(u)===null&&j===n(d)&&(D?(T(g),g=-1):D=!0,Gt(O,K-fe))):(j.sortIndex=ie,e(u,j),k||R||(k=!0,Oi(F))),j},t.unstable_shouldYield=S,t.unstable_wrapCallback=function(j){var G=v;return function(){var K=v;v=G;try{return j.apply(this,arguments)}finally{v=K}}}})(cg);ug.exports=cg;var fA=ug.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pA=$,mt=fA;function V(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var hg=new Set,Es={};function Nr(t,e){ci(t,e),ci(t+"Capture",e)}function ci(t,e){for(Es[t]=e,t=0;t<e.length;t++)hg.add(e[t])}var cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$u=Object.prototype.hasOwnProperty,mA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xf={},Of={};function gA(t){return $u.call(Of,t)?!0:$u.call(xf,t)?!1:mA.test(t)?Of[t]=!0:(xf[t]=!0,!1)}function vA(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function yA(t,e,n,r){if(e===null||typeof e>"u"||vA(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function rt(t,e,n,r,i,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){je[t]=new rt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];je[e]=new rt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){je[t]=new rt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){je[t]=new rt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){je[t]=new rt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){je[t]=new rt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){je[t]=new rt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){je[t]=new rt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){je[t]=new rt(t,5,!1,t.toLowerCase(),null,!1,!1)});var sh=/[\-:]([a-z])/g;function oh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(sh,oh);je[e]=new rt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(sh,oh);je[e]=new rt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(sh,oh);je[e]=new rt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){je[t]=new rt(t,1,!1,t.toLowerCase(),null,!1,!1)});je.xlinkHref=new rt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){je[t]=new rt(t,1,!1,t.toLowerCase(),null,!0,!0)});function ah(t,e,n,r){var i=je.hasOwnProperty(e)?je[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(yA(e,n,i,r)&&(n=null),r||i===null?gA(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var vn=pA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ro=Symbol.for("react.element"),Br=Symbol.for("react.portal"),zr=Symbol.for("react.fragment"),lh=Symbol.for("react.strict_mode"),Hu=Symbol.for("react.profiler"),dg=Symbol.for("react.provider"),fg=Symbol.for("react.context"),uh=Symbol.for("react.forward_ref"),Wu=Symbol.for("react.suspense"),Gu=Symbol.for("react.suspense_list"),ch=Symbol.for("react.memo"),In=Symbol.for("react.lazy"),pg=Symbol.for("react.offscreen"),Lf=Symbol.iterator;function Ki(t){return t===null||typeof t!="object"?null:(t=Lf&&t[Lf]||t["@@iterator"],typeof t=="function"?t:null)}var ge=Object.assign,au;function ns(t){if(au===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);au=e&&e[1]||""}return`
`+au+t}var lu=!1;function uu(t,e){if(!t||lu)return"";lu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),s=r.stack.split(`
`),a=i.length-1,l=s.length-1;1<=a&&0<=l&&i[a]!==s[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==s[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==s[l]){var u=`
`+i[a].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=a&&0<=l);break}}}finally{lu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ns(t):""}function _A(t){switch(t.tag){case 5:return ns(t.type);case 16:return ns("Lazy");case 13:return ns("Suspense");case 19:return ns("SuspenseList");case 0:case 2:case 15:return t=uu(t.type,!1),t;case 11:return t=uu(t.type.render,!1),t;case 1:return t=uu(t.type,!0),t;default:return""}}function Ku(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case zr:return"Fragment";case Br:return"Portal";case Hu:return"Profiler";case lh:return"StrictMode";case Wu:return"Suspense";case Gu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case fg:return(t.displayName||"Context")+".Consumer";case dg:return(t._context.displayName||"Context")+".Provider";case uh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ch:return e=t.displayName||null,e!==null?e:Ku(t.type)||"Memo";case In:e=t._payload,t=t._init;try{return Ku(t(e))}catch{}}return null}function AA(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ku(e);case 8:return e===lh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Kn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function mg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function EA(t){var e=mg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ko(t){t._valueTracker||(t._valueTracker=EA(t))}function gg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=mg(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function va(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function qu(t,e){var n=e.checked;return ge({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Vf(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Kn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function vg(t,e){e=e.checked,e!=null&&ah(t,"checked",e,!1)}function Qu(t,e){vg(t,e);var n=Kn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Yu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Yu(t,e.type,Kn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Mf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Yu(t,e,n){(e!=="number"||va(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var rs=Array.isArray;function ei(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Kn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Xu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(V(91));return ge({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Uf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(V(92));if(rs(n)){if(1<n.length)throw Error(V(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Kn(n)}}function yg(t,e){var n=Kn(e.value),r=Kn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ff(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function _g(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ju(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?_g(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var No,Ag=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(No=No||document.createElement("div"),No.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=No.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ws(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var as={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wA=["Webkit","ms","Moz","O"];Object.keys(as).forEach(function(t){wA.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),as[e]=as[t]})});function Eg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||as.hasOwnProperty(t)&&as[t]?(""+e).trim():e+"px"}function wg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Eg(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var TA=ge({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zu(t,e){if(e){if(TA[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(V(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(V(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(V(61))}if(e.style!=null&&typeof e.style!="object")throw Error(V(62))}}function ec(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tc=null;function hh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var nc=null,ti=null,ni=null;function bf(t){if(t=Xs(t)){if(typeof nc!="function")throw Error(V(280));var e=t.stateNode;e&&(e=fl(e),nc(t.stateNode,t.type,e))}}function Tg(t){ti?ni?ni.push(t):ni=[t]:ti=t}function Ig(){if(ti){var t=ti,e=ni;if(ni=ti=null,bf(t),e)for(t=0;t<e.length;t++)bf(e[t])}}function Sg(t,e){return t(e)}function Cg(){}var cu=!1;function Pg(t,e,n){if(cu)return t(e,n);cu=!0;try{return Sg(t,e,n)}finally{cu=!1,(ti!==null||ni!==null)&&(Cg(),Ig())}}function Ts(t,e){var n=t.stateNode;if(n===null)return null;var r=fl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(V(231,e,typeof n));return n}var rc=!1;if(cn)try{var qi={};Object.defineProperty(qi,"passive",{get:function(){rc=!0}}),window.addEventListener("test",qi,qi),window.removeEventListener("test",qi,qi)}catch{rc=!1}function IA(t,e,n,r,i,s,a,l,u){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(f){this.onError(f)}}var ls=!1,ya=null,_a=!1,ic=null,SA={onError:function(t){ls=!0,ya=t}};function CA(t,e,n,r,i,s,a,l,u){ls=!1,ya=null,IA.apply(SA,arguments)}function PA(t,e,n,r,i,s,a,l,u){if(CA.apply(this,arguments),ls){if(ls){var d=ya;ls=!1,ya=null}else throw Error(V(198));_a||(_a=!0,ic=d)}}function Dr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Rg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function jf(t){if(Dr(t)!==t)throw Error(V(188))}function RA(t){var e=t.alternate;if(!e){if(e=Dr(t),e===null)throw Error(V(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return jf(i),t;if(s===r)return jf(i),e;s=s.sibling}throw Error(V(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=s;break}if(l===r){a=!0,r=i,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,r=i;break}if(l===r){a=!0,r=s,n=i;break}l=l.sibling}if(!a)throw Error(V(189))}}if(n.alternate!==r)throw Error(V(190))}if(n.tag!==3)throw Error(V(188));return n.stateNode.current===n?t:e}function kg(t){return t=RA(t),t!==null?Ng(t):null}function Ng(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ng(t);if(e!==null)return e;t=t.sibling}return null}var Dg=mt.unstable_scheduleCallback,Bf=mt.unstable_cancelCallback,kA=mt.unstable_shouldYield,NA=mt.unstable_requestPaint,Ee=mt.unstable_now,DA=mt.unstable_getCurrentPriorityLevel,dh=mt.unstable_ImmediatePriority,xg=mt.unstable_UserBlockingPriority,Aa=mt.unstable_NormalPriority,xA=mt.unstable_LowPriority,Og=mt.unstable_IdlePriority,ul=null,bt=null;function OA(t){if(bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(ul,t,void 0,(t.current.flags&128)===128)}catch{}}var Ot=Math.clz32?Math.clz32:MA,LA=Math.log,VA=Math.LN2;function MA(t){return t>>>=0,t===0?32:31-(LA(t)/VA|0)|0}var Do=64,xo=4194304;function is(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ea(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=is(l):(s&=a,s!==0&&(r=is(s)))}else a=n&~i,a!==0?r=is(a):s!==0&&(r=is(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ot(e),i=1<<n,r|=t[n],e&=~i;return r}function UA(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function FA(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Ot(s),l=1<<a,u=i[a];u===-1?(!(l&n)||l&r)&&(i[a]=UA(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function sc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Lg(){var t=Do;return Do<<=1,!(Do&4194240)&&(Do=64),t}function hu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Qs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ot(e),t[e]=n}function bA(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ot(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function fh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ot(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var re=0;function Vg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Mg,ph,Ug,Fg,bg,oc=!1,Oo=[],Mn=null,Un=null,Fn=null,Is=new Map,Ss=new Map,Cn=[],jA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zf(t,e){switch(t){case"focusin":case"focusout":Mn=null;break;case"dragenter":case"dragleave":Un=null;break;case"mouseover":case"mouseout":Fn=null;break;case"pointerover":case"pointerout":Is.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ss.delete(e.pointerId)}}function Qi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Xs(e),e!==null&&ph(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function BA(t,e,n,r,i){switch(e){case"focusin":return Mn=Qi(Mn,t,e,n,r,i),!0;case"dragenter":return Un=Qi(Un,t,e,n,r,i),!0;case"mouseover":return Fn=Qi(Fn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Is.set(s,Qi(Is.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ss.set(s,Qi(Ss.get(s)||null,t,e,n,r,i)),!0}return!1}function jg(t){var e=ur(t.target);if(e!==null){var n=Dr(e);if(n!==null){if(e=n.tag,e===13){if(e=Rg(n),e!==null){t.blockedOn=e,bg(t.priority,function(){Ug(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Jo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ac(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);tc=r,n.target.dispatchEvent(r),tc=null}else return e=Xs(n),e!==null&&ph(e),t.blockedOn=n,!1;e.shift()}return!0}function $f(t,e,n){Jo(t)&&n.delete(e)}function zA(){oc=!1,Mn!==null&&Jo(Mn)&&(Mn=null),Un!==null&&Jo(Un)&&(Un=null),Fn!==null&&Jo(Fn)&&(Fn=null),Is.forEach($f),Ss.forEach($f)}function Yi(t,e){t.blockedOn===e&&(t.blockedOn=null,oc||(oc=!0,mt.unstable_scheduleCallback(mt.unstable_NormalPriority,zA)))}function Cs(t){function e(i){return Yi(i,t)}if(0<Oo.length){Yi(Oo[0],t);for(var n=1;n<Oo.length;n++){var r=Oo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Mn!==null&&Yi(Mn,t),Un!==null&&Yi(Un,t),Fn!==null&&Yi(Fn,t),Is.forEach(e),Ss.forEach(e),n=0;n<Cn.length;n++)r=Cn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Cn.length&&(n=Cn[0],n.blockedOn===null);)jg(n),n.blockedOn===null&&Cn.shift()}var ri=vn.ReactCurrentBatchConfig,wa=!0;function $A(t,e,n,r){var i=re,s=ri.transition;ri.transition=null;try{re=1,mh(t,e,n,r)}finally{re=i,ri.transition=s}}function HA(t,e,n,r){var i=re,s=ri.transition;ri.transition=null;try{re=4,mh(t,e,n,r)}finally{re=i,ri.transition=s}}function mh(t,e,n,r){if(wa){var i=ac(t,e,n,r);if(i===null)Eu(t,e,r,Ta,n),zf(t,r);else if(BA(i,t,e,n,r))r.stopPropagation();else if(zf(t,r),e&4&&-1<jA.indexOf(t)){for(;i!==null;){var s=Xs(i);if(s!==null&&Mg(s),s=ac(t,e,n,r),s===null&&Eu(t,e,r,Ta,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Eu(t,e,r,null,n)}}var Ta=null;function ac(t,e,n,r){if(Ta=null,t=hh(r),t=ur(t),t!==null)if(e=Dr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Rg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ta=t,null}function Bg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(DA()){case dh:return 1;case xg:return 4;case Aa:case xA:return 16;case Og:return 536870912;default:return 16}default:return 16}}var xn=null,gh=null,Zo=null;function zg(){if(Zo)return Zo;var t,e=gh,n=e.length,r,i="value"in xn?xn.value:xn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var a=n-t;for(r=1;r<=a&&e[n-r]===i[s-r];r++);return Zo=i.slice(t,1<r?1-r:void 0)}function ea(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Lo(){return!0}function Hf(){return!1}function vt(t){function e(n,r,i,s,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Lo:Hf,this.isPropagationStopped=Hf,this}return ge(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Lo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Lo)},persist:function(){},isPersistent:Lo}),e}var Si={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vh=vt(Si),Ys=ge({},Si,{view:0,detail:0}),WA=vt(Ys),du,fu,Xi,cl=ge({},Ys,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xi&&(Xi&&t.type==="mousemove"?(du=t.screenX-Xi.screenX,fu=t.screenY-Xi.screenY):fu=du=0,Xi=t),du)},movementY:function(t){return"movementY"in t?t.movementY:fu}}),Wf=vt(cl),GA=ge({},cl,{dataTransfer:0}),KA=vt(GA),qA=ge({},Ys,{relatedTarget:0}),pu=vt(qA),QA=ge({},Si,{animationName:0,elapsedTime:0,pseudoElement:0}),YA=vt(QA),XA=ge({},Si,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),JA=vt(XA),ZA=ge({},Si,{data:0}),Gf=vt(ZA),eE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=nE[t])?!!e[t]:!1}function yh(){return rE}var iE=ge({},Ys,{key:function(t){if(t.key){var e=eE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ea(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?tE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yh,charCode:function(t){return t.type==="keypress"?ea(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ea(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),sE=vt(iE),oE=ge({},cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kf=vt(oE),aE=ge({},Ys,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yh}),lE=vt(aE),uE=ge({},Si,{propertyName:0,elapsedTime:0,pseudoElement:0}),cE=vt(uE),hE=ge({},cl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),dE=vt(hE),fE=[9,13,27,32],_h=cn&&"CompositionEvent"in window,us=null;cn&&"documentMode"in document&&(us=document.documentMode);var pE=cn&&"TextEvent"in window&&!us,$g=cn&&(!_h||us&&8<us&&11>=us),qf=" ",Qf=!1;function Hg(t,e){switch(t){case"keyup":return fE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $r=!1;function mE(t,e){switch(t){case"compositionend":return Wg(e);case"keypress":return e.which!==32?null:(Qf=!0,qf);case"textInput":return t=e.data,t===qf&&Qf?null:t;default:return null}}function gE(t,e){if($r)return t==="compositionend"||!_h&&Hg(t,e)?(t=zg(),Zo=gh=xn=null,$r=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return $g&&e.locale!=="ko"?null:e.data;default:return null}}var vE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!vE[t.type]:e==="textarea"}function Gg(t,e,n,r){Tg(r),e=Ia(e,"onChange"),0<e.length&&(n=new vh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var cs=null,Ps=null;function yE(t){rv(t,0)}function hl(t){var e=Gr(t);if(gg(e))return t}function _E(t,e){if(t==="change")return e}var Kg=!1;if(cn){var mu;if(cn){var gu="oninput"in document;if(!gu){var Xf=document.createElement("div");Xf.setAttribute("oninput","return;"),gu=typeof Xf.oninput=="function"}mu=gu}else mu=!1;Kg=mu&&(!document.documentMode||9<document.documentMode)}function Jf(){cs&&(cs.detachEvent("onpropertychange",qg),Ps=cs=null)}function qg(t){if(t.propertyName==="value"&&hl(Ps)){var e=[];Gg(e,Ps,t,hh(t)),Pg(yE,e)}}function AE(t,e,n){t==="focusin"?(Jf(),cs=e,Ps=n,cs.attachEvent("onpropertychange",qg)):t==="focusout"&&Jf()}function EE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return hl(Ps)}function wE(t,e){if(t==="click")return hl(e)}function TE(t,e){if(t==="input"||t==="change")return hl(e)}function IE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Vt=typeof Object.is=="function"?Object.is:IE;function Rs(t,e){if(Vt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!$u.call(e,i)||!Vt(t[i],e[i]))return!1}return!0}function Zf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ep(t,e){var n=Zf(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Zf(n)}}function Qg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Qg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Yg(){for(var t=window,e=va();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=va(t.document)}return e}function Ah(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function SE(t){var e=Yg(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Qg(n.ownerDocument.documentElement,n)){if(r!==null&&Ah(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=ep(n,s);var a=ep(n,r);i&&a&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var CE=cn&&"documentMode"in document&&11>=document.documentMode,Hr=null,lc=null,hs=null,uc=!1;function tp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;uc||Hr==null||Hr!==va(r)||(r=Hr,"selectionStart"in r&&Ah(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),hs&&Rs(hs,r)||(hs=r,r=Ia(lc,"onSelect"),0<r.length&&(e=new vh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Hr)))}function Vo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Wr={animationend:Vo("Animation","AnimationEnd"),animationiteration:Vo("Animation","AnimationIteration"),animationstart:Vo("Animation","AnimationStart"),transitionend:Vo("Transition","TransitionEnd")},vu={},Xg={};cn&&(Xg=document.createElement("div").style,"AnimationEvent"in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),"TransitionEvent"in window||delete Wr.transitionend.transition);function dl(t){if(vu[t])return vu[t];if(!Wr[t])return t;var e=Wr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Xg)return vu[t]=e[n];return t}var Jg=dl("animationend"),Zg=dl("animationiteration"),ev=dl("animationstart"),tv=dl("transitionend"),nv=new Map,np="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jn(t,e){nv.set(t,e),Nr(e,[t])}for(var yu=0;yu<np.length;yu++){var _u=np[yu],PE=_u.toLowerCase(),RE=_u[0].toUpperCase()+_u.slice(1);Jn(PE,"on"+RE)}Jn(Jg,"onAnimationEnd");Jn(Zg,"onAnimationIteration");Jn(ev,"onAnimationStart");Jn("dblclick","onDoubleClick");Jn("focusin","onFocus");Jn("focusout","onBlur");Jn(tv,"onTransitionEnd");ci("onMouseEnter",["mouseout","mouseover"]);ci("onMouseLeave",["mouseout","mouseover"]);ci("onPointerEnter",["pointerout","pointerover"]);ci("onPointerLeave",["pointerout","pointerover"]);Nr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Nr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Nr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Nr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Nr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Nr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ss="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kE=new Set("cancel close invalid load scroll toggle".split(" ").concat(ss));function rp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,PA(r,e,void 0,t),t.currentTarget=null}function rv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var a=r.length-1;0<=a;a--){var l=r[a],u=l.instance,d=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;rp(i,l,d),s=u}else for(a=0;a<r.length;a++){if(l=r[a],u=l.instance,d=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;rp(i,l,d),s=u}}}if(_a)throw t=ic,_a=!1,ic=null,t}function ue(t,e){var n=e[pc];n===void 0&&(n=e[pc]=new Set);var r=t+"__bubble";n.has(r)||(iv(e,t,2,!1),n.add(r))}function Au(t,e,n){var r=0;e&&(r|=4),iv(n,t,r,e)}var Mo="_reactListening"+Math.random().toString(36).slice(2);function ks(t){if(!t[Mo]){t[Mo]=!0,hg.forEach(function(n){n!=="selectionchange"&&(kE.has(n)||Au(n,!1,t),Au(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Mo]||(e[Mo]=!0,Au("selectionchange",!1,e))}}function iv(t,e,n,r){switch(Bg(e)){case 1:var i=$A;break;case 4:i=HA;break;default:i=mh}n=i.bind(null,e,n,t),i=void 0,!rc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Eu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;a=a.return}for(;l!==null;){if(a=ur(l),a===null)return;if(u=a.tag,u===5||u===6){r=s=a;continue e}l=l.parentNode}}r=r.return}Pg(function(){var d=s,f=hh(n),m=[];e:{var v=nv.get(t);if(v!==void 0){var R=vh,k=t;switch(t){case"keypress":if(ea(n)===0)break e;case"keydown":case"keyup":R=sE;break;case"focusin":k="focus",R=pu;break;case"focusout":k="blur",R=pu;break;case"beforeblur":case"afterblur":R=pu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=Wf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=KA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=lE;break;case Jg:case Zg:case ev:R=YA;break;case tv:R=cE;break;case"scroll":R=WA;break;case"wheel":R=dE;break;case"copy":case"cut":case"paste":R=JA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=Kf}var D=(e&4)!==0,x=!D&&t==="scroll",T=D?v!==null?v+"Capture":null:v;D=[];for(var y=d,I;y!==null;){I=y;var O=I.stateNode;if(I.tag===5&&O!==null&&(I=O,T!==null&&(O=Ts(y,T),O!=null&&D.push(Ns(y,O,I)))),x)break;y=y.return}0<D.length&&(v=new R(v,k,null,n,f),m.push({event:v,listeners:D}))}}if(!(e&7)){e:{if(v=t==="mouseover"||t==="pointerover",R=t==="mouseout"||t==="pointerout",v&&n!==tc&&(k=n.relatedTarget||n.fromElement)&&(ur(k)||k[hn]))break e;if((R||v)&&(v=f.window===f?f:(v=f.ownerDocument)?v.defaultView||v.parentWindow:window,R?(k=n.relatedTarget||n.toElement,R=d,k=k?ur(k):null,k!==null&&(x=Dr(k),k!==x||k.tag!==5&&k.tag!==6)&&(k=null)):(R=null,k=d),R!==k)){if(D=Wf,O="onMouseLeave",T="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(D=Kf,O="onPointerLeave",T="onPointerEnter",y="pointer"),x=R==null?v:Gr(R),I=k==null?v:Gr(k),v=new D(O,y+"leave",R,n,f),v.target=x,v.relatedTarget=I,O=null,ur(f)===d&&(D=new D(T,y+"enter",k,n,f),D.target=I,D.relatedTarget=x,O=D),x=O,R&&k)t:{for(D=R,T=k,y=0,I=D;I;I=Fr(I))y++;for(I=0,O=T;O;O=Fr(O))I++;for(;0<y-I;)D=Fr(D),y--;for(;0<I-y;)T=Fr(T),I--;for(;y--;){if(D===T||T!==null&&D===T.alternate)break t;D=Fr(D),T=Fr(T)}D=null}else D=null;R!==null&&ip(m,v,R,D,!1),k!==null&&x!==null&&ip(m,x,k,D,!0)}}e:{if(v=d?Gr(d):window,R=v.nodeName&&v.nodeName.toLowerCase(),R==="select"||R==="input"&&v.type==="file")var F=_E;else if(Yf(v))if(Kg)F=TE;else{F=EE;var b=AE}else(R=v.nodeName)&&R.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(F=wE);if(F&&(F=F(t,d))){Gg(m,F,n,f);break e}b&&b(t,v,d),t==="focusout"&&(b=v._wrapperState)&&b.controlled&&v.type==="number"&&Yu(v,"number",v.value)}switch(b=d?Gr(d):window,t){case"focusin":(Yf(b)||b.contentEditable==="true")&&(Hr=b,lc=d,hs=null);break;case"focusout":hs=lc=Hr=null;break;case"mousedown":uc=!0;break;case"contextmenu":case"mouseup":case"dragend":uc=!1,tp(m,n,f);break;case"selectionchange":if(CE)break;case"keydown":case"keyup":tp(m,n,f)}var A;if(_h)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else $r?Hg(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&($g&&n.locale!=="ko"&&($r||g!=="onCompositionStart"?g==="onCompositionEnd"&&$r&&(A=zg()):(xn=f,gh="value"in xn?xn.value:xn.textContent,$r=!0)),b=Ia(d,g),0<b.length&&(g=new Gf(g,t,null,n,f),m.push({event:g,listeners:b}),A?g.data=A:(A=Wg(n),A!==null&&(g.data=A)))),(A=pE?mE(t,n):gE(t,n))&&(d=Ia(d,"onBeforeInput"),0<d.length&&(f=new Gf("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:d}),f.data=A))}rv(m,e)})}function Ns(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ia(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ts(t,n),s!=null&&r.unshift(Ns(t,s,i)),s=Ts(t,e),s!=null&&r.push(Ns(t,s,i))),t=t.return}return r}function Fr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ip(t,e,n,r,i){for(var s=e._reactName,a=[];n!==null&&n!==r;){var l=n,u=l.alternate,d=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&d!==null&&(l=d,i?(u=Ts(n,s),u!=null&&a.unshift(Ns(n,u,l))):i||(u=Ts(n,s),u!=null&&a.push(Ns(n,u,l)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var NE=/\r\n?/g,DE=/\u0000|\uFFFD/g;function sp(t){return(typeof t=="string"?t:""+t).replace(NE,`
`).replace(DE,"")}function Uo(t,e,n){if(e=sp(e),sp(t)!==e&&n)throw Error(V(425))}function Sa(){}var cc=null,hc=null;function dc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var fc=typeof setTimeout=="function"?setTimeout:void 0,xE=typeof clearTimeout=="function"?clearTimeout:void 0,op=typeof Promise=="function"?Promise:void 0,OE=typeof queueMicrotask=="function"?queueMicrotask:typeof op<"u"?function(t){return op.resolve(null).then(t).catch(LE)}:fc;function LE(t){setTimeout(function(){throw t})}function wu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Cs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Cs(e)}function bn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ap(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ci=Math.random().toString(36).slice(2),Ft="__reactFiber$"+Ci,Ds="__reactProps$"+Ci,hn="__reactContainer$"+Ci,pc="__reactEvents$"+Ci,VE="__reactListeners$"+Ci,ME="__reactHandles$"+Ci;function ur(t){var e=t[Ft];if(e)return e;for(var n=t.parentNode;n;){if(e=n[hn]||n[Ft]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ap(t);t!==null;){if(n=t[Ft])return n;t=ap(t)}return e}t=n,n=t.parentNode}return null}function Xs(t){return t=t[Ft]||t[hn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Gr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(V(33))}function fl(t){return t[Ds]||null}var mc=[],Kr=-1;function Zn(t){return{current:t}}function ce(t){0>Kr||(t.current=mc[Kr],mc[Kr]=null,Kr--)}function oe(t,e){Kr++,mc[Kr]=t.current,t.current=e}var qn={},Ye=Zn(qn),at=Zn(!1),_r=qn;function hi(t,e){var n=t.type.contextTypes;if(!n)return qn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function lt(t){return t=t.childContextTypes,t!=null}function Ca(){ce(at),ce(Ye)}function lp(t,e,n){if(Ye.current!==qn)throw Error(V(168));oe(Ye,e),oe(at,n)}function sv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(V(108,AA(t)||"Unknown",i));return ge({},n,r)}function Pa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||qn,_r=Ye.current,oe(Ye,t),oe(at,at.current),!0}function up(t,e,n){var r=t.stateNode;if(!r)throw Error(V(169));n?(t=sv(t,e,_r),r.__reactInternalMemoizedMergedChildContext=t,ce(at),ce(Ye),oe(Ye,t)):ce(at),oe(at,n)}var en=null,pl=!1,Tu=!1;function ov(t){en===null?en=[t]:en.push(t)}function UE(t){pl=!0,ov(t)}function er(){if(!Tu&&en!==null){Tu=!0;var t=0,e=re;try{var n=en;for(re=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}en=null,pl=!1}catch(i){throw en!==null&&(en=en.slice(t+1)),Dg(dh,er),i}finally{re=e,Tu=!1}}return null}var qr=[],Qr=0,Ra=null,ka=0,_t=[],At=0,Ar=null,tn=1,nn="";function or(t,e){qr[Qr++]=ka,qr[Qr++]=Ra,Ra=t,ka=e}function av(t,e,n){_t[At++]=tn,_t[At++]=nn,_t[At++]=Ar,Ar=t;var r=tn;t=nn;var i=32-Ot(r)-1;r&=~(1<<i),n+=1;var s=32-Ot(e)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,tn=1<<32-Ot(e)+i|n<<i|r,nn=s+t}else tn=1<<s|n<<i|r,nn=t}function Eh(t){t.return!==null&&(or(t,1),av(t,1,0))}function wh(t){for(;t===Ra;)Ra=qr[--Qr],qr[Qr]=null,ka=qr[--Qr],qr[Qr]=null;for(;t===Ar;)Ar=_t[--At],_t[At]=null,nn=_t[--At],_t[At]=null,tn=_t[--At],_t[At]=null}var pt=null,ft=null,de=!1,kt=null;function lv(t,e){var n=Et(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function cp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,pt=t,ft=bn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,pt=t,ft=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ar!==null?{id:tn,overflow:nn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Et(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,pt=t,ft=null,!0):!1;default:return!1}}function gc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function vc(t){if(de){var e=ft;if(e){var n=e;if(!cp(t,e)){if(gc(t))throw Error(V(418));e=bn(n.nextSibling);var r=pt;e&&cp(t,e)?lv(r,n):(t.flags=t.flags&-4097|2,de=!1,pt=t)}}else{if(gc(t))throw Error(V(418));t.flags=t.flags&-4097|2,de=!1,pt=t}}}function hp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;pt=t}function Fo(t){if(t!==pt)return!1;if(!de)return hp(t),de=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!dc(t.type,t.memoizedProps)),e&&(e=ft)){if(gc(t))throw uv(),Error(V(418));for(;e;)lv(t,e),e=bn(e.nextSibling)}if(hp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(V(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ft=bn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ft=null}}else ft=pt?bn(t.stateNode.nextSibling):null;return!0}function uv(){for(var t=ft;t;)t=bn(t.nextSibling)}function di(){ft=pt=null,de=!1}function Th(t){kt===null?kt=[t]:kt.push(t)}var FE=vn.ReactCurrentBatchConfig;function Ji(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(V(309));var r=n.stateNode}if(!r)throw Error(V(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var l=i.refs;a===null?delete l[s]:l[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(V(284));if(!n._owner)throw Error(V(290,t))}return t}function bo(t,e){throw t=Object.prototype.toString.call(e),Error(V(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function dp(t){var e=t._init;return e(t._payload)}function cv(t){function e(T,y){if(t){var I=T.deletions;I===null?(T.deletions=[y],T.flags|=16):I.push(y)}}function n(T,y){if(!t)return null;for(;y!==null;)e(T,y),y=y.sibling;return null}function r(T,y){for(T=new Map;y!==null;)y.key!==null?T.set(y.key,y):T.set(y.index,y),y=y.sibling;return T}function i(T,y){return T=$n(T,y),T.index=0,T.sibling=null,T}function s(T,y,I){return T.index=I,t?(I=T.alternate,I!==null?(I=I.index,I<y?(T.flags|=2,y):I):(T.flags|=2,y)):(T.flags|=1048576,y)}function a(T){return t&&T.alternate===null&&(T.flags|=2),T}function l(T,y,I,O){return y===null||y.tag!==6?(y=Nu(I,T.mode,O),y.return=T,y):(y=i(y,I),y.return=T,y)}function u(T,y,I,O){var F=I.type;return F===zr?f(T,y,I.props.children,O,I.key):y!==null&&(y.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===In&&dp(F)===y.type)?(O=i(y,I.props),O.ref=Ji(T,y,I),O.return=T,O):(O=aa(I.type,I.key,I.props,null,T.mode,O),O.ref=Ji(T,y,I),O.return=T,O)}function d(T,y,I,O){return y===null||y.tag!==4||y.stateNode.containerInfo!==I.containerInfo||y.stateNode.implementation!==I.implementation?(y=Du(I,T.mode,O),y.return=T,y):(y=i(y,I.children||[]),y.return=T,y)}function f(T,y,I,O,F){return y===null||y.tag!==7?(y=pr(I,T.mode,O,F),y.return=T,y):(y=i(y,I),y.return=T,y)}function m(T,y,I){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Nu(""+y,T.mode,I),y.return=T,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ro:return I=aa(y.type,y.key,y.props,null,T.mode,I),I.ref=Ji(T,null,y),I.return=T,I;case Br:return y=Du(y,T.mode,I),y.return=T,y;case In:var O=y._init;return m(T,O(y._payload),I)}if(rs(y)||Ki(y))return y=pr(y,T.mode,I,null),y.return=T,y;bo(T,y)}return null}function v(T,y,I,O){var F=y!==null?y.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return F!==null?null:l(T,y,""+I,O);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Ro:return I.key===F?u(T,y,I,O):null;case Br:return I.key===F?d(T,y,I,O):null;case In:return F=I._init,v(T,y,F(I._payload),O)}if(rs(I)||Ki(I))return F!==null?null:f(T,y,I,O,null);bo(T,I)}return null}function R(T,y,I,O,F){if(typeof O=="string"&&O!==""||typeof O=="number")return T=T.get(I)||null,l(y,T,""+O,F);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Ro:return T=T.get(O.key===null?I:O.key)||null,u(y,T,O,F);case Br:return T=T.get(O.key===null?I:O.key)||null,d(y,T,O,F);case In:var b=O._init;return R(T,y,I,b(O._payload),F)}if(rs(O)||Ki(O))return T=T.get(I)||null,f(y,T,O,F,null);bo(y,O)}return null}function k(T,y,I,O){for(var F=null,b=null,A=y,g=y=0,_=null;A!==null&&g<I.length;g++){A.index>g?(_=A,A=null):_=A.sibling;var E=v(T,A,I[g],O);if(E===null){A===null&&(A=_);break}t&&A&&E.alternate===null&&e(T,A),y=s(E,y,g),b===null?F=E:b.sibling=E,b=E,A=_}if(g===I.length)return n(T,A),de&&or(T,g),F;if(A===null){for(;g<I.length;g++)A=m(T,I[g],O),A!==null&&(y=s(A,y,g),b===null?F=A:b.sibling=A,b=A);return de&&or(T,g),F}for(A=r(T,A);g<I.length;g++)_=R(A,T,g,I[g],O),_!==null&&(t&&_.alternate!==null&&A.delete(_.key===null?g:_.key),y=s(_,y,g),b===null?F=_:b.sibling=_,b=_);return t&&A.forEach(function(S){return e(T,S)}),de&&or(T,g),F}function D(T,y,I,O){var F=Ki(I);if(typeof F!="function")throw Error(V(150));if(I=F.call(I),I==null)throw Error(V(151));for(var b=F=null,A=y,g=y=0,_=null,E=I.next();A!==null&&!E.done;g++,E=I.next()){A.index>g?(_=A,A=null):_=A.sibling;var S=v(T,A,E.value,O);if(S===null){A===null&&(A=_);break}t&&A&&S.alternate===null&&e(T,A),y=s(S,y,g),b===null?F=S:b.sibling=S,b=S,A=_}if(E.done)return n(T,A),de&&or(T,g),F;if(A===null){for(;!E.done;g++,E=I.next())E=m(T,E.value,O),E!==null&&(y=s(E,y,g),b===null?F=E:b.sibling=E,b=E);return de&&or(T,g),F}for(A=r(T,A);!E.done;g++,E=I.next())E=R(A,T,g,E.value,O),E!==null&&(t&&E.alternate!==null&&A.delete(E.key===null?g:E.key),y=s(E,y,g),b===null?F=E:b.sibling=E,b=E);return t&&A.forEach(function(P){return e(T,P)}),de&&or(T,g),F}function x(T,y,I,O){if(typeof I=="object"&&I!==null&&I.type===zr&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case Ro:e:{for(var F=I.key,b=y;b!==null;){if(b.key===F){if(F=I.type,F===zr){if(b.tag===7){n(T,b.sibling),y=i(b,I.props.children),y.return=T,T=y;break e}}else if(b.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===In&&dp(F)===b.type){n(T,b.sibling),y=i(b,I.props),y.ref=Ji(T,b,I),y.return=T,T=y;break e}n(T,b);break}else e(T,b);b=b.sibling}I.type===zr?(y=pr(I.props.children,T.mode,O,I.key),y.return=T,T=y):(O=aa(I.type,I.key,I.props,null,T.mode,O),O.ref=Ji(T,y,I),O.return=T,T=O)}return a(T);case Br:e:{for(b=I.key;y!==null;){if(y.key===b)if(y.tag===4&&y.stateNode.containerInfo===I.containerInfo&&y.stateNode.implementation===I.implementation){n(T,y.sibling),y=i(y,I.children||[]),y.return=T,T=y;break e}else{n(T,y);break}else e(T,y);y=y.sibling}y=Du(I,T.mode,O),y.return=T,T=y}return a(T);case In:return b=I._init,x(T,y,b(I._payload),O)}if(rs(I))return k(T,y,I,O);if(Ki(I))return D(T,y,I,O);bo(T,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,y!==null&&y.tag===6?(n(T,y.sibling),y=i(y,I),y.return=T,T=y):(n(T,y),y=Nu(I,T.mode,O),y.return=T,T=y),a(T)):n(T,y)}return x}var fi=cv(!0),hv=cv(!1),Na=Zn(null),Da=null,Yr=null,Ih=null;function Sh(){Ih=Yr=Da=null}function Ch(t){var e=Na.current;ce(Na),t._currentValue=e}function yc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ii(t,e){Da=t,Ih=Yr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ot=!0),t.firstContext=null)}function Tt(t){var e=t._currentValue;if(Ih!==t)if(t={context:t,memoizedValue:e,next:null},Yr===null){if(Da===null)throw Error(V(308));Yr=t,Da.dependencies={lanes:0,firstContext:t}}else Yr=Yr.next=t;return e}var cr=null;function Ph(t){cr===null?cr=[t]:cr.push(t)}function dv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ph(e)):(n.next=i.next,i.next=n),e.interleaved=n,dn(t,r)}function dn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Sn=!1;function Rh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function an(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function jn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Z&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,dn(t,n)}return i=r.interleaved,i===null?(e.next=e,Ph(r)):(e.next=i.next,i.next=e),r.interleaved=e,dn(t,n)}function ta(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,fh(t,n)}}function fp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function xa(t,e,n,r){var i=t.updateQueue;Sn=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,d=u.next;u.next=null,a===null?s=d:a.next=d,a=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==a&&(l===null?f.firstBaseUpdate=d:l.next=d,f.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;a=0,f=d=u=null,l=s;do{var v=l.lane,R=l.eventTime;if((r&v)===v){f!==null&&(f=f.next={eventTime:R,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var k=t,D=l;switch(v=e,R=n,D.tag){case 1:if(k=D.payload,typeof k=="function"){m=k.call(R,m,v);break e}m=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=D.payload,v=typeof k=="function"?k.call(R,m,v):k,v==null)break e;m=ge({},m,v);break e;case 2:Sn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,v=i.effects,v===null?i.effects=[l]:v.push(l))}else R={eventTime:R,lane:v,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(d=f=R,u=m):f=f.next=R,a|=v;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;v=l,l=v.next,v.next=null,i.lastBaseUpdate=v,i.shared.pending=null}}while(!0);if(f===null&&(u=m),i.baseState=u,i.firstBaseUpdate=d,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do a|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);wr|=a,t.lanes=a,t.memoizedState=m}}function pp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(V(191,i));i.call(r)}}}var Js={},jt=Zn(Js),xs=Zn(Js),Os=Zn(Js);function hr(t){if(t===Js)throw Error(V(174));return t}function kh(t,e){switch(oe(Os,e),oe(xs,t),oe(jt,Js),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ju(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ju(e,t)}ce(jt),oe(jt,e)}function pi(){ce(jt),ce(xs),ce(Os)}function pv(t){hr(Os.current);var e=hr(jt.current),n=Ju(e,t.type);e!==n&&(oe(xs,t),oe(jt,n))}function Nh(t){xs.current===t&&(ce(jt),ce(xs))}var pe=Zn(0);function Oa(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Iu=[];function Dh(){for(var t=0;t<Iu.length;t++)Iu[t]._workInProgressVersionPrimary=null;Iu.length=0}var na=vn.ReactCurrentDispatcher,Su=vn.ReactCurrentBatchConfig,Er=0,me=null,Se=null,ke=null,La=!1,ds=!1,Ls=0,bE=0;function He(){throw Error(V(321))}function xh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Vt(t[n],e[n]))return!1;return!0}function Oh(t,e,n,r,i,s){if(Er=s,me=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,na.current=t===null||t.memoizedState===null?$E:HE,t=n(r,i),ds){s=0;do{if(ds=!1,Ls=0,25<=s)throw Error(V(301));s+=1,ke=Se=null,e.updateQueue=null,na.current=WE,t=n(r,i)}while(ds)}if(na.current=Va,e=Se!==null&&Se.next!==null,Er=0,ke=Se=me=null,La=!1,e)throw Error(V(300));return t}function Lh(){var t=Ls!==0;return Ls=0,t}function Ut(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ke===null?me.memoizedState=ke=t:ke=ke.next=t,ke}function It(){if(Se===null){var t=me.alternate;t=t!==null?t.memoizedState:null}else t=Se.next;var e=ke===null?me.memoizedState:ke.next;if(e!==null)ke=e,Se=t;else{if(t===null)throw Error(V(310));Se=t,t={memoizedState:Se.memoizedState,baseState:Se.baseState,baseQueue:Se.baseQueue,queue:Se.queue,next:null},ke===null?me.memoizedState=ke=t:ke=ke.next=t}return ke}function Vs(t,e){return typeof e=="function"?e(t):e}function Cu(t){var e=It(),n=e.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=t;var r=Se,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=a=null,u=null,d=s;do{var f=d.lane;if((Er&f)===f)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var m={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(l=u=m,a=r):u=u.next=m,me.lanes|=f,wr|=f}d=d.next}while(d!==null&&d!==s);u===null?a=r:u.next=l,Vt(r,e.memoizedState)||(ot=!0),e.memoizedState=r,e.baseState=a,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,me.lanes|=s,wr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Pu(t){var e=It(),n=e.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=t(s,a.action),a=a.next;while(a!==i);Vt(s,e.memoizedState)||(ot=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function mv(){}function gv(t,e){var n=me,r=It(),i=e(),s=!Vt(r.memoizedState,i);if(s&&(r.memoizedState=i,ot=!0),r=r.queue,Vh(_v.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ke!==null&&ke.memoizedState.tag&1){if(n.flags|=2048,Ms(9,yv.bind(null,n,r,i,e),void 0,null),De===null)throw Error(V(349));Er&30||vv(n,e,i)}return i}function vv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=me.updateQueue,e===null?(e={lastEffect:null,stores:null},me.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function yv(t,e,n,r){e.value=n,e.getSnapshot=r,Av(e)&&Ev(t)}function _v(t,e,n){return n(function(){Av(e)&&Ev(t)})}function Av(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Vt(t,n)}catch{return!0}}function Ev(t){var e=dn(t,1);e!==null&&Lt(e,t,1,-1)}function mp(t){var e=Ut();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vs,lastRenderedState:t},e.queue=t,t=t.dispatch=zE.bind(null,me,t),[e.memoizedState,t]}function Ms(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=me.updateQueue,e===null?(e={lastEffect:null,stores:null},me.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function wv(){return It().memoizedState}function ra(t,e,n,r){var i=Ut();me.flags|=t,i.memoizedState=Ms(1|e,n,void 0,r===void 0?null:r)}function ml(t,e,n,r){var i=It();r=r===void 0?null:r;var s=void 0;if(Se!==null){var a=Se.memoizedState;if(s=a.destroy,r!==null&&xh(r,a.deps)){i.memoizedState=Ms(e,n,s,r);return}}me.flags|=t,i.memoizedState=Ms(1|e,n,s,r)}function gp(t,e){return ra(8390656,8,t,e)}function Vh(t,e){return ml(2048,8,t,e)}function Tv(t,e){return ml(4,2,t,e)}function Iv(t,e){return ml(4,4,t,e)}function Sv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Cv(t,e,n){return n=n!=null?n.concat([t]):null,ml(4,4,Sv.bind(null,e,t),n)}function Mh(){}function Pv(t,e){var n=It();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&xh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Rv(t,e){var n=It();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&xh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function kv(t,e,n){return Er&21?(Vt(n,e)||(n=Lg(),me.lanes|=n,wr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ot=!0),t.memoizedState=n)}function jE(t,e){var n=re;re=n!==0&&4>n?n:4,t(!0);var r=Su.transition;Su.transition={};try{t(!1),e()}finally{re=n,Su.transition=r}}function Nv(){return It().memoizedState}function BE(t,e,n){var r=zn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Dv(t))xv(e,n);else if(n=dv(t,e,n,r),n!==null){var i=tt();Lt(n,t,r,i),Ov(n,e,r)}}function zE(t,e,n){var r=zn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Dv(t))xv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,l=s(a,n);if(i.hasEagerState=!0,i.eagerState=l,Vt(l,a)){var u=e.interleaved;u===null?(i.next=i,Ph(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=dv(t,e,i,r),n!==null&&(i=tt(),Lt(n,t,r,i),Ov(n,e,r))}}function Dv(t){var e=t.alternate;return t===me||e!==null&&e===me}function xv(t,e){ds=La=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Ov(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,fh(t,n)}}var Va={readContext:Tt,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useInsertionEffect:He,useLayoutEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useMutableSource:He,useSyncExternalStore:He,useId:He,unstable_isNewReconciler:!1},$E={readContext:Tt,useCallback:function(t,e){return Ut().memoizedState=[t,e===void 0?null:e],t},useContext:Tt,useEffect:gp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ra(4194308,4,Sv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ra(4194308,4,t,e)},useInsertionEffect:function(t,e){return ra(4,2,t,e)},useMemo:function(t,e){var n=Ut();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Ut();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=BE.bind(null,me,t),[r.memoizedState,t]},useRef:function(t){var e=Ut();return t={current:t},e.memoizedState=t},useState:mp,useDebugValue:Mh,useDeferredValue:function(t){return Ut().memoizedState=t},useTransition:function(){var t=mp(!1),e=t[0];return t=jE.bind(null,t[1]),Ut().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=me,i=Ut();if(de){if(n===void 0)throw Error(V(407));n=n()}else{if(n=e(),De===null)throw Error(V(349));Er&30||vv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,gp(_v.bind(null,r,s,t),[t]),r.flags|=2048,Ms(9,yv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Ut(),e=De.identifierPrefix;if(de){var n=nn,r=tn;n=(r&~(1<<32-Ot(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ls++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=bE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},HE={readContext:Tt,useCallback:Pv,useContext:Tt,useEffect:Vh,useImperativeHandle:Cv,useInsertionEffect:Tv,useLayoutEffect:Iv,useMemo:Rv,useReducer:Cu,useRef:wv,useState:function(){return Cu(Vs)},useDebugValue:Mh,useDeferredValue:function(t){var e=It();return kv(e,Se.memoizedState,t)},useTransition:function(){var t=Cu(Vs)[0],e=It().memoizedState;return[t,e]},useMutableSource:mv,useSyncExternalStore:gv,useId:Nv,unstable_isNewReconciler:!1},WE={readContext:Tt,useCallback:Pv,useContext:Tt,useEffect:Vh,useImperativeHandle:Cv,useInsertionEffect:Tv,useLayoutEffect:Iv,useMemo:Rv,useReducer:Pu,useRef:wv,useState:function(){return Pu(Vs)},useDebugValue:Mh,useDeferredValue:function(t){var e=It();return Se===null?e.memoizedState=t:kv(e,Se.memoizedState,t)},useTransition:function(){var t=Pu(Vs)[0],e=It().memoizedState;return[t,e]},useMutableSource:mv,useSyncExternalStore:gv,useId:Nv,unstable_isNewReconciler:!1};function Pt(t,e){if(t&&t.defaultProps){e=ge({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function _c(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ge({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var gl={isMounted:function(t){return(t=t._reactInternals)?Dr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=tt(),i=zn(t),s=an(r,i);s.payload=e,n!=null&&(s.callback=n),e=jn(t,s,i),e!==null&&(Lt(e,t,i,r),ta(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=tt(),i=zn(t),s=an(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=jn(t,s,i),e!==null&&(Lt(e,t,i,r),ta(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=tt(),r=zn(t),i=an(n,r);i.tag=2,e!=null&&(i.callback=e),e=jn(t,i,r),e!==null&&(Lt(e,t,r,n),ta(e,t,r))}};function vp(t,e,n,r,i,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,a):e.prototype&&e.prototype.isPureReactComponent?!Rs(n,r)||!Rs(i,s):!0}function Lv(t,e,n){var r=!1,i=qn,s=e.contextType;return typeof s=="object"&&s!==null?s=Tt(s):(i=lt(e)?_r:Ye.current,r=e.contextTypes,s=(r=r!=null)?hi(t,i):qn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=gl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function yp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&gl.enqueueReplaceState(e,e.state,null)}function Ac(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Rh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Tt(s):(s=lt(e)?_r:Ye.current,i.context=hi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(_c(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&gl.enqueueReplaceState(i,i.state,null),xa(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function mi(t,e){try{var n="",r=e;do n+=_A(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ru(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ec(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var GE=typeof WeakMap=="function"?WeakMap:Map;function Vv(t,e,n){n=an(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ua||(Ua=!0,Dc=r),Ec(t,e)},n}function Mv(t,e,n){n=an(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ec(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ec(t,e),typeof r!="function"&&(Bn===null?Bn=new Set([this]):Bn.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function _p(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new GE;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=ow.bind(null,t,e,n),e.then(t,t))}function Ap(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ep(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=an(-1,1),e.tag=2,jn(n,e,1))),n.lanes|=1),t)}var KE=vn.ReactCurrentOwner,ot=!1;function et(t,e,n,r){e.child=t===null?hv(e,null,n,r):fi(e,t.child,n,r)}function wp(t,e,n,r,i){n=n.render;var s=e.ref;return ii(e,i),r=Oh(t,e,n,r,s,i),n=Lh(),t!==null&&!ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,fn(t,e,i)):(de&&n&&Eh(e),e.flags|=1,et(t,e,r,i),e.child)}function Tp(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Hh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Uv(t,e,s,r,i)):(t=aa(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Rs,n(a,r)&&t.ref===e.ref)return fn(t,e,i)}return e.flags|=1,t=$n(s,r),t.ref=e.ref,t.return=e,e.child=t}function Uv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Rs(s,r)&&t.ref===e.ref)if(ot=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ot=!0);else return e.lanes=t.lanes,fn(t,e,i)}return wc(t,e,n,r,i)}function Fv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},oe(Jr,dt),dt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,oe(Jr,dt),dt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,oe(Jr,dt),dt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,oe(Jr,dt),dt|=r;return et(t,e,i,n),e.child}function bv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function wc(t,e,n,r,i){var s=lt(n)?_r:Ye.current;return s=hi(e,s),ii(e,i),n=Oh(t,e,n,r,s,i),r=Lh(),t!==null&&!ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,fn(t,e,i)):(de&&r&&Eh(e),e.flags|=1,et(t,e,n,i),e.child)}function Ip(t,e,n,r,i){if(lt(n)){var s=!0;Pa(e)}else s=!1;if(ii(e,i),e.stateNode===null)ia(t,e),Lv(e,n,r),Ac(e,n,r,i),r=!0;else if(t===null){var a=e.stateNode,l=e.memoizedProps;a.props=l;var u=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=Tt(d):(d=lt(n)?_r:Ye.current,d=hi(e,d));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";m||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||u!==d)&&yp(e,a,r,d),Sn=!1;var v=e.memoizedState;a.state=v,xa(e,r,a,i),u=e.memoizedState,l!==r||v!==u||at.current||Sn?(typeof f=="function"&&(_c(e,n,f,r),u=e.memoizedState),(l=Sn||vp(e,n,l,r,v,u,d))?(m||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),a.props=r,a.state=u,a.context=d,r=l):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{a=e.stateNode,fv(t,e),l=e.memoizedProps,d=e.type===e.elementType?l:Pt(e.type,l),a.props=d,m=e.pendingProps,v=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=Tt(u):(u=lt(n)?_r:Ye.current,u=hi(e,u));var R=n.getDerivedStateFromProps;(f=typeof R=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==m||v!==u)&&yp(e,a,r,u),Sn=!1,v=e.memoizedState,a.state=v,xa(e,r,a,i);var k=e.memoizedState;l!==m||v!==k||at.current||Sn?(typeof R=="function"&&(_c(e,n,R,r),k=e.memoizedState),(d=Sn||vp(e,n,d,r,v,k,u)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,k,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,k,u)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=k),a.props=r,a.state=k,a.context=u,r=d):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),r=!1)}return Tc(t,e,n,r,s,i)}function Tc(t,e,n,r,i,s){bv(t,e);var a=(e.flags&128)!==0;if(!r&&!a)return i&&up(e,n,!1),fn(t,e,s);r=e.stateNode,KE.current=e;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&a?(e.child=fi(e,t.child,null,s),e.child=fi(e,null,l,s)):et(t,e,l,s),e.memoizedState=r.state,i&&up(e,n,!0),e.child}function jv(t){var e=t.stateNode;e.pendingContext?lp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&lp(t,e.context,!1),kh(t,e.containerInfo)}function Sp(t,e,n,r,i){return di(),Th(i),e.flags|=256,et(t,e,n,r),e.child}var Ic={dehydrated:null,treeContext:null,retryLane:0};function Sc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Bv(t,e,n){var r=e.pendingProps,i=pe.current,s=!1,a=(e.flags&128)!==0,l;if((l=a)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),oe(pe,i&1),t===null)return vc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=r.children,t=r.fallback,s?(r=e.mode,s=e.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=_l(a,r,0,null),t=pr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Sc(n),e.memoizedState=Ic,t):Uh(e,a));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return qE(t,e,a,r,l,i,n);if(s){s=r.fallback,a=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=$n(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=$n(l,s):(s=pr(s,a,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,a=t.child.memoizedState,a=a===null?Sc(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Ic,r}return s=t.child,t=s.sibling,r=$n(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Uh(t,e){return e=_l({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function jo(t,e,n,r){return r!==null&&Th(r),fi(e,t.child,null,n),t=Uh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function qE(t,e,n,r,i,s,a){if(n)return e.flags&256?(e.flags&=-257,r=Ru(Error(V(422))),jo(t,e,a,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=_l({mode:"visible",children:r.children},i,0,null),s=pr(s,i,a,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&fi(e,t.child,null,a),e.child.memoizedState=Sc(a),e.memoizedState=Ic,s);if(!(e.mode&1))return jo(t,e,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(V(419)),r=Ru(s,r,void 0),jo(t,e,a,r)}if(l=(a&t.childLanes)!==0,ot||l){if(r=De,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,dn(t,i),Lt(r,t,i,-1))}return $h(),r=Ru(Error(V(421))),jo(t,e,a,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=aw.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,ft=bn(i.nextSibling),pt=e,de=!0,kt=null,t!==null&&(_t[At++]=tn,_t[At++]=nn,_t[At++]=Ar,tn=t.id,nn=t.overflow,Ar=e),e=Uh(e,r.children),e.flags|=4096,e)}function Cp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),yc(t.return,e,n)}function ku(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function zv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(et(t,e,r.children,n),r=pe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Cp(t,n,e);else if(t.tag===19)Cp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(oe(pe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Oa(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ku(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Oa(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ku(e,!0,n,null,s);break;case"together":ku(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ia(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function fn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),wr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(V(153));if(e.child!==null){for(t=e.child,n=$n(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=$n(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function QE(t,e,n){switch(e.tag){case 3:jv(e),di();break;case 5:pv(e);break;case 1:lt(e.type)&&Pa(e);break;case 4:kh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;oe(Na,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(oe(pe,pe.current&1),e.flags|=128,null):n&e.child.childLanes?Bv(t,e,n):(oe(pe,pe.current&1),t=fn(t,e,n),t!==null?t.sibling:null);oe(pe,pe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return zv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),oe(pe,pe.current),r)break;return null;case 22:case 23:return e.lanes=0,Fv(t,e,n)}return fn(t,e,n)}var $v,Cc,Hv,Wv;$v=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Cc=function(){};Hv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,hr(jt.current);var s=null;switch(n){case"input":i=qu(t,i),r=qu(t,r),s=[];break;case"select":i=ge({},i,{value:void 0}),r=ge({},r,{value:void 0}),s=[];break;case"textarea":i=Xu(t,i),r=Xu(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Sa)}Zu(n,r);var a;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Es.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in r){var u=r[d];if(l=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&u!==l&&(u!=null||l!=null))if(d==="style")if(l){for(a in l)!l.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&l[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(s||(s=[]),s.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Es.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&ue("scroll",t),s||l===u||(s=[])):(s=s||[]).push(d,u))}n&&(s=s||[]).push("style",n);var d=s;(e.updateQueue=d)&&(e.flags|=4)}};Wv=function(t,e,n,r){n!==r&&(e.flags|=4)};function Zi(t,e){if(!de)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function We(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function YE(t,e,n){var r=e.pendingProps;switch(wh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(e),null;case 1:return lt(e.type)&&Ca(),We(e),null;case 3:return r=e.stateNode,pi(),ce(at),ce(Ye),Dh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Fo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,kt!==null&&(Lc(kt),kt=null))),Cc(t,e),We(e),null;case 5:Nh(e);var i=hr(Os.current);if(n=e.type,t!==null&&e.stateNode!=null)Hv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(V(166));return We(e),null}if(t=hr(jt.current),Fo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Ft]=e,r[Ds]=s,t=(e.mode&1)!==0,n){case"dialog":ue("cancel",r),ue("close",r);break;case"iframe":case"object":case"embed":ue("load",r);break;case"video":case"audio":for(i=0;i<ss.length;i++)ue(ss[i],r);break;case"source":ue("error",r);break;case"img":case"image":case"link":ue("error",r),ue("load",r);break;case"details":ue("toggle",r);break;case"input":Vf(r,s),ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ue("invalid",r);break;case"textarea":Uf(r,s),ue("invalid",r)}Zu(n,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Uo(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Uo(r.textContent,l,t),i=["children",""+l]):Es.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ue("scroll",r)}switch(n){case"input":ko(r),Mf(r,s,!0);break;case"textarea":ko(r),Ff(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Sa)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=_g(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=a.createElement(n,{is:r.is}):(t=a.createElement(n),n==="select"&&(a=t,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):t=a.createElementNS(t,n),t[Ft]=e,t[Ds]=r,$v(t,e,!1,!1),e.stateNode=t;e:{switch(a=ec(n,r),n){case"dialog":ue("cancel",t),ue("close",t),i=r;break;case"iframe":case"object":case"embed":ue("load",t),i=r;break;case"video":case"audio":for(i=0;i<ss.length;i++)ue(ss[i],t);i=r;break;case"source":ue("error",t),i=r;break;case"img":case"image":case"link":ue("error",t),ue("load",t),i=r;break;case"details":ue("toggle",t),i=r;break;case"input":Vf(t,r),i=qu(t,r),ue("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ge({},r,{value:void 0}),ue("invalid",t);break;case"textarea":Uf(t,r),i=Xu(t,r),ue("invalid",t);break;default:i=r}Zu(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?wg(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Ag(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ws(t,u):typeof u=="number"&&ws(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Es.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ue("scroll",t):u!=null&&ah(t,s,u,a))}switch(n){case"input":ko(t),Mf(t,r,!1);break;case"textarea":ko(t),Ff(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Kn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ei(t,!!r.multiple,s,!1):r.defaultValue!=null&&ei(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Sa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return We(e),null;case 6:if(t&&e.stateNode!=null)Wv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(V(166));if(n=hr(Os.current),hr(jt.current),Fo(e)){if(r=e.stateNode,n=e.memoizedProps,r[Ft]=e,(s=r.nodeValue!==n)&&(t=pt,t!==null))switch(t.tag){case 3:Uo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Uo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ft]=e,e.stateNode=r}return We(e),null;case 13:if(ce(pe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(de&&ft!==null&&e.mode&1&&!(e.flags&128))uv(),di(),e.flags|=98560,s=!1;else if(s=Fo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(V(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(V(317));s[Ft]=e}else di(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;We(e),s=!1}else kt!==null&&(Lc(kt),kt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||pe.current&1?Ce===0&&(Ce=3):$h())),e.updateQueue!==null&&(e.flags|=4),We(e),null);case 4:return pi(),Cc(t,e),t===null&&ks(e.stateNode.containerInfo),We(e),null;case 10:return Ch(e.type._context),We(e),null;case 17:return lt(e.type)&&Ca(),We(e),null;case 19:if(ce(pe),s=e.memoizedState,s===null)return We(e),null;if(r=(e.flags&128)!==0,a=s.rendering,a===null)if(r)Zi(s,!1);else{if(Ce!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Oa(t),a!==null){for(e.flags|=128,Zi(s,!1),r=a.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return oe(pe,pe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ee()>gi&&(e.flags|=128,r=!0,Zi(s,!1),e.lanes=4194304)}else{if(!r)if(t=Oa(a),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Zi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!de)return We(e),null}else 2*Ee()-s.renderingStartTime>gi&&n!==1073741824&&(e.flags|=128,r=!0,Zi(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ee(),e.sibling=null,n=pe.current,oe(pe,r?n&1|2:n&1),e):(We(e),null);case 22:case 23:return zh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?dt&1073741824&&(We(e),e.subtreeFlags&6&&(e.flags|=8192)):We(e),null;case 24:return null;case 25:return null}throw Error(V(156,e.tag))}function XE(t,e){switch(wh(e),e.tag){case 1:return lt(e.type)&&Ca(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return pi(),ce(at),ce(Ye),Dh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Nh(e),null;case 13:if(ce(pe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(V(340));di()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ce(pe),null;case 4:return pi(),null;case 10:return Ch(e.type._context),null;case 22:case 23:return zh(),null;case 24:return null;default:return null}}var Bo=!1,qe=!1,JE=typeof WeakSet=="function"?WeakSet:Set,B=null;function Xr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ye(t,e,r)}else n.current=null}function Pc(t,e,n){try{n()}catch(r){ye(t,e,r)}}var Pp=!1;function ZE(t,e){if(cc=wa,t=Yg(),Ah(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,l=-1,u=-1,d=0,f=0,m=t,v=null;t:for(;;){for(var R;m!==n||i!==0&&m.nodeType!==3||(l=a+i),m!==s||r!==0&&m.nodeType!==3||(u=a+r),m.nodeType===3&&(a+=m.nodeValue.length),(R=m.firstChild)!==null;)v=m,m=R;for(;;){if(m===t)break t;if(v===n&&++d===i&&(l=a),v===s&&++f===r&&(u=a),(R=m.nextSibling)!==null)break;m=v,v=m.parentNode}m=R}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(hc={focusedElem:t,selectionRange:n},wa=!1,B=e;B!==null;)if(e=B,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,B=t;else for(;B!==null;){e=B;try{var k=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var D=k.memoizedProps,x=k.memoizedState,T=e.stateNode,y=T.getSnapshotBeforeUpdate(e.elementType===e.type?D:Pt(e.type,D),x);T.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(V(163))}}catch(O){ye(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,B=t;break}B=e.return}return k=Pp,Pp=!1,k}function fs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Pc(e,n,s)}i=i.next}while(i!==r)}}function vl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Rc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Gv(t){var e=t.alternate;e!==null&&(t.alternate=null,Gv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ft],delete e[Ds],delete e[pc],delete e[VE],delete e[ME])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Kv(t){return t.tag===5||t.tag===3||t.tag===4}function Rp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Kv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function kc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Sa));else if(r!==4&&(t=t.child,t!==null))for(kc(t,e,n),t=t.sibling;t!==null;)kc(t,e,n),t=t.sibling}function Nc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Nc(t,e,n),t=t.sibling;t!==null;)Nc(t,e,n),t=t.sibling}var Le=null,Rt=!1;function wn(t,e,n){for(n=n.child;n!==null;)qv(t,e,n),n=n.sibling}function qv(t,e,n){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(ul,n)}catch{}switch(n.tag){case 5:qe||Xr(n,e);case 6:var r=Le,i=Rt;Le=null,wn(t,e,n),Le=r,Rt=i,Le!==null&&(Rt?(t=Le,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Le.removeChild(n.stateNode));break;case 18:Le!==null&&(Rt?(t=Le,n=n.stateNode,t.nodeType===8?wu(t.parentNode,n):t.nodeType===1&&wu(t,n),Cs(t)):wu(Le,n.stateNode));break;case 4:r=Le,i=Rt,Le=n.stateNode.containerInfo,Rt=!0,wn(t,e,n),Le=r,Rt=i;break;case 0:case 11:case 14:case 15:if(!qe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Pc(n,e,a),i=i.next}while(i!==r)}wn(t,e,n);break;case 1:if(!qe&&(Xr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ye(n,e,l)}wn(t,e,n);break;case 21:wn(t,e,n);break;case 22:n.mode&1?(qe=(r=qe)||n.memoizedState!==null,wn(t,e,n),qe=r):wn(t,e,n);break;default:wn(t,e,n)}}function kp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new JE),e.forEach(function(r){var i=lw.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ct(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,a=e,l=a;e:for(;l!==null;){switch(l.tag){case 5:Le=l.stateNode,Rt=!1;break e;case 3:Le=l.stateNode.containerInfo,Rt=!0;break e;case 4:Le=l.stateNode.containerInfo,Rt=!0;break e}l=l.return}if(Le===null)throw Error(V(160));qv(s,a,i),Le=null,Rt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(d){ye(i,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Qv(e,t),e=e.sibling}function Qv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ct(e,t),Mt(t),r&4){try{fs(3,t,t.return),vl(3,t)}catch(D){ye(t,t.return,D)}try{fs(5,t,t.return)}catch(D){ye(t,t.return,D)}}break;case 1:Ct(e,t),Mt(t),r&512&&n!==null&&Xr(n,n.return);break;case 5:if(Ct(e,t),Mt(t),r&512&&n!==null&&Xr(n,n.return),t.flags&32){var i=t.stateNode;try{ws(i,"")}catch(D){ye(t,t.return,D)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&vg(i,s),ec(l,a);var d=ec(l,s);for(a=0;a<u.length;a+=2){var f=u[a],m=u[a+1];f==="style"?wg(i,m):f==="dangerouslySetInnerHTML"?Ag(i,m):f==="children"?ws(i,m):ah(i,f,m,d)}switch(l){case"input":Qu(i,s);break;case"textarea":yg(i,s);break;case"select":var v=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var R=s.value;R!=null?ei(i,!!s.multiple,R,!1):v!==!!s.multiple&&(s.defaultValue!=null?ei(i,!!s.multiple,s.defaultValue,!0):ei(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ds]=s}catch(D){ye(t,t.return,D)}}break;case 6:if(Ct(e,t),Mt(t),r&4){if(t.stateNode===null)throw Error(V(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(D){ye(t,t.return,D)}}break;case 3:if(Ct(e,t),Mt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Cs(e.containerInfo)}catch(D){ye(t,t.return,D)}break;case 4:Ct(e,t),Mt(t);break;case 13:Ct(e,t),Mt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(jh=Ee())),r&4&&kp(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(qe=(d=qe)||f,Ct(e,t),qe=d):Ct(e,t),Mt(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!f&&t.mode&1)for(B=t,f=t.child;f!==null;){for(m=B=f;B!==null;){switch(v=B,R=v.child,v.tag){case 0:case 11:case 14:case 15:fs(4,v,v.return);break;case 1:Xr(v,v.return);var k=v.stateNode;if(typeof k.componentWillUnmount=="function"){r=v,n=v.return;try{e=r,k.props=e.memoizedProps,k.state=e.memoizedState,k.componentWillUnmount()}catch(D){ye(r,n,D)}}break;case 5:Xr(v,v.return);break;case 22:if(v.memoizedState!==null){Dp(m);continue}}R!==null?(R.return=v,B=R):Dp(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,d?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,u=m.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Eg("display",a))}catch(D){ye(t,t.return,D)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(D){ye(t,t.return,D)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ct(e,t),Mt(t),r&4&&kp(t);break;case 21:break;default:Ct(e,t),Mt(t)}}function Mt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Kv(n)){var r=n;break e}n=n.return}throw Error(V(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ws(i,""),r.flags&=-33);var s=Rp(t);Nc(t,s,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Rp(t);kc(t,l,a);break;default:throw Error(V(161))}}catch(u){ye(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ew(t,e,n){B=t,Yv(t)}function Yv(t,e,n){for(var r=(t.mode&1)!==0;B!==null;){var i=B,s=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Bo;if(!a){var l=i.alternate,u=l!==null&&l.memoizedState!==null||qe;l=Bo;var d=qe;if(Bo=a,(qe=u)&&!d)for(B=i;B!==null;)a=B,u=a.child,a.tag===22&&a.memoizedState!==null?xp(i):u!==null?(u.return=a,B=u):xp(i);for(;s!==null;)B=s,Yv(s),s=s.sibling;B=i,Bo=l,qe=d}Np(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,B=s):Np(t)}}function Np(t){for(;B!==null;){var e=B;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:qe||vl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!qe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Pt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&pp(e,s,r);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}pp(e,a,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&Cs(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(V(163))}qe||e.flags&512&&Rc(e)}catch(v){ye(e,e.return,v)}}if(e===t){B=null;break}if(n=e.sibling,n!==null){n.return=e.return,B=n;break}B=e.return}}function Dp(t){for(;B!==null;){var e=B;if(e===t){B=null;break}var n=e.sibling;if(n!==null){n.return=e.return,B=n;break}B=e.return}}function xp(t){for(;B!==null;){var e=B;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{vl(4,e)}catch(u){ye(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){ye(e,i,u)}}var s=e.return;try{Rc(e)}catch(u){ye(e,s,u)}break;case 5:var a=e.return;try{Rc(e)}catch(u){ye(e,a,u)}}}catch(u){ye(e,e.return,u)}if(e===t){B=null;break}var l=e.sibling;if(l!==null){l.return=e.return,B=l;break}B=e.return}}var tw=Math.ceil,Ma=vn.ReactCurrentDispatcher,Fh=vn.ReactCurrentOwner,wt=vn.ReactCurrentBatchConfig,Z=0,De=null,Ie=null,Fe=0,dt=0,Jr=Zn(0),Ce=0,Us=null,wr=0,yl=0,bh=0,ps=null,st=null,jh=0,gi=1/0,Zt=null,Ua=!1,Dc=null,Bn=null,zo=!1,On=null,Fa=0,ms=0,xc=null,sa=-1,oa=0;function tt(){return Z&6?Ee():sa!==-1?sa:sa=Ee()}function zn(t){return t.mode&1?Z&2&&Fe!==0?Fe&-Fe:FE.transition!==null?(oa===0&&(oa=Lg()),oa):(t=re,t!==0||(t=window.event,t=t===void 0?16:Bg(t.type)),t):1}function Lt(t,e,n,r){if(50<ms)throw ms=0,xc=null,Error(V(185));Qs(t,n,r),(!(Z&2)||t!==De)&&(t===De&&(!(Z&2)&&(yl|=n),Ce===4&&Pn(t,Fe)),ut(t,r),n===1&&Z===0&&!(e.mode&1)&&(gi=Ee()+500,pl&&er()))}function ut(t,e){var n=t.callbackNode;FA(t,e);var r=Ea(t,t===De?Fe:0);if(r===0)n!==null&&Bf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Bf(n),e===1)t.tag===0?UE(Op.bind(null,t)):ov(Op.bind(null,t)),OE(function(){!(Z&6)&&er()}),n=null;else{switch(Vg(r)){case 1:n=dh;break;case 4:n=xg;break;case 16:n=Aa;break;case 536870912:n=Og;break;default:n=Aa}n=iy(n,Xv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Xv(t,e){if(sa=-1,oa=0,Z&6)throw Error(V(327));var n=t.callbackNode;if(si()&&t.callbackNode!==n)return null;var r=Ea(t,t===De?Fe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ba(t,r);else{e=r;var i=Z;Z|=2;var s=Zv();(De!==t||Fe!==e)&&(Zt=null,gi=Ee()+500,fr(t,e));do try{iw();break}catch(l){Jv(t,l)}while(!0);Sh(),Ma.current=s,Z=i,Ie!==null?e=0:(De=null,Fe=0,e=Ce)}if(e!==0){if(e===2&&(i=sc(t),i!==0&&(r=i,e=Oc(t,i))),e===1)throw n=Us,fr(t,0),Pn(t,r),ut(t,Ee()),n;if(e===6)Pn(t,r);else{if(i=t.current.alternate,!(r&30)&&!nw(i)&&(e=ba(t,r),e===2&&(s=sc(t),s!==0&&(r=s,e=Oc(t,s))),e===1))throw n=Us,fr(t,0),Pn(t,r),ut(t,Ee()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(V(345));case 2:ar(t,st,Zt);break;case 3:if(Pn(t,r),(r&130023424)===r&&(e=jh+500-Ee(),10<e)){if(Ea(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){tt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=fc(ar.bind(null,t,st,Zt),e);break}ar(t,st,Zt);break;case 4:if(Pn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var a=31-Ot(r);s=1<<a,a=e[a],a>i&&(i=a),r&=~s}if(r=i,r=Ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*tw(r/1960))-r,10<r){t.timeoutHandle=fc(ar.bind(null,t,st,Zt),r);break}ar(t,st,Zt);break;case 5:ar(t,st,Zt);break;default:throw Error(V(329))}}}return ut(t,Ee()),t.callbackNode===n?Xv.bind(null,t):null}function Oc(t,e){var n=ps;return t.current.memoizedState.isDehydrated&&(fr(t,e).flags|=256),t=ba(t,e),t!==2&&(e=st,st=n,e!==null&&Lc(e)),t}function Lc(t){st===null?st=t:st.push.apply(st,t)}function nw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Vt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Pn(t,e){for(e&=~bh,e&=~yl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ot(e),r=1<<n;t[n]=-1,e&=~r}}function Op(t){if(Z&6)throw Error(V(327));si();var e=Ea(t,0);if(!(e&1))return ut(t,Ee()),null;var n=ba(t,e);if(t.tag!==0&&n===2){var r=sc(t);r!==0&&(e=r,n=Oc(t,r))}if(n===1)throw n=Us,fr(t,0),Pn(t,e),ut(t,Ee()),n;if(n===6)throw Error(V(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ar(t,st,Zt),ut(t,Ee()),null}function Bh(t,e){var n=Z;Z|=1;try{return t(e)}finally{Z=n,Z===0&&(gi=Ee()+500,pl&&er())}}function Tr(t){On!==null&&On.tag===0&&!(Z&6)&&si();var e=Z;Z|=1;var n=wt.transition,r=re;try{if(wt.transition=null,re=1,t)return t()}finally{re=r,wt.transition=n,Z=e,!(Z&6)&&er()}}function zh(){dt=Jr.current,ce(Jr)}function fr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,xE(n)),Ie!==null)for(n=Ie.return;n!==null;){var r=n;switch(wh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ca();break;case 3:pi(),ce(at),ce(Ye),Dh();break;case 5:Nh(r);break;case 4:pi();break;case 13:ce(pe);break;case 19:ce(pe);break;case 10:Ch(r.type._context);break;case 22:case 23:zh()}n=n.return}if(De=t,Ie=t=$n(t.current,null),Fe=dt=e,Ce=0,Us=null,bh=yl=wr=0,st=ps=null,cr!==null){for(e=0;e<cr.length;e++)if(n=cr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=i,r.next=a}n.pending=r}cr=null}return t}function Jv(t,e){do{var n=Ie;try{if(Sh(),na.current=Va,La){for(var r=me.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}La=!1}if(Er=0,ke=Se=me=null,ds=!1,Ls=0,Fh.current=null,n===null||n.return===null){Ce=1,Us=e,Ie=null;break}e:{var s=t,a=n.return,l=n,u=e;if(e=Fe,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var v=f.alternate;v?(f.updateQueue=v.updateQueue,f.memoizedState=v.memoizedState,f.lanes=v.lanes):(f.updateQueue=null,f.memoizedState=null)}var R=Ap(a);if(R!==null){R.flags&=-257,Ep(R,a,l,s,e),R.mode&1&&_p(s,d,e),e=R,u=d;var k=e.updateQueue;if(k===null){var D=new Set;D.add(u),e.updateQueue=D}else k.add(u);break e}else{if(!(e&1)){_p(s,d,e),$h();break e}u=Error(V(426))}}else if(de&&l.mode&1){var x=Ap(a);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Ep(x,a,l,s,e),Th(mi(u,l));break e}}s=u=mi(u,l),Ce!==4&&(Ce=2),ps===null?ps=[s]:ps.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var T=Vv(s,u,e);fp(s,T);break e;case 1:l=u;var y=s.type,I=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(Bn===null||!Bn.has(I)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=Mv(s,l,e);fp(s,O);break e}}s=s.return}while(s!==null)}ty(n)}catch(F){e=F,Ie===n&&n!==null&&(Ie=n=n.return);continue}break}while(!0)}function Zv(){var t=Ma.current;return Ma.current=Va,t===null?Va:t}function $h(){(Ce===0||Ce===3||Ce===2)&&(Ce=4),De===null||!(wr&268435455)&&!(yl&268435455)||Pn(De,Fe)}function ba(t,e){var n=Z;Z|=2;var r=Zv();(De!==t||Fe!==e)&&(Zt=null,fr(t,e));do try{rw();break}catch(i){Jv(t,i)}while(!0);if(Sh(),Z=n,Ma.current=r,Ie!==null)throw Error(V(261));return De=null,Fe=0,Ce}function rw(){for(;Ie!==null;)ey(Ie)}function iw(){for(;Ie!==null&&!kA();)ey(Ie)}function ey(t){var e=ry(t.alternate,t,dt);t.memoizedProps=t.pendingProps,e===null?ty(t):Ie=e,Fh.current=null}function ty(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=XE(n,e),n!==null){n.flags&=32767,Ie=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ce=6,Ie=null;return}}else if(n=YE(n,e,dt),n!==null){Ie=n;return}if(e=e.sibling,e!==null){Ie=e;return}Ie=e=t}while(e!==null);Ce===0&&(Ce=5)}function ar(t,e,n){var r=re,i=wt.transition;try{wt.transition=null,re=1,sw(t,e,n,r)}finally{wt.transition=i,re=r}return null}function sw(t,e,n,r){do si();while(On!==null);if(Z&6)throw Error(V(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(V(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(bA(t,s),t===De&&(Ie=De=null,Fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||zo||(zo=!0,iy(Aa,function(){return si(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=wt.transition,wt.transition=null;var a=re;re=1;var l=Z;Z|=4,Fh.current=null,ZE(t,n),Qv(n,t),SE(hc),wa=!!cc,hc=cc=null,t.current=n,ew(n),NA(),Z=l,re=a,wt.transition=s}else t.current=n;if(zo&&(zo=!1,On=t,Fa=i),s=t.pendingLanes,s===0&&(Bn=null),OA(n.stateNode),ut(t,Ee()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ua)throw Ua=!1,t=Dc,Dc=null,t;return Fa&1&&t.tag!==0&&si(),s=t.pendingLanes,s&1?t===xc?ms++:(ms=0,xc=t):ms=0,er(),null}function si(){if(On!==null){var t=Vg(Fa),e=wt.transition,n=re;try{if(wt.transition=null,re=16>t?16:t,On===null)var r=!1;else{if(t=On,On=null,Fa=0,Z&6)throw Error(V(331));var i=Z;for(Z|=4,B=t.current;B!==null;){var s=B,a=s.child;if(B.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var d=l[u];for(B=d;B!==null;){var f=B;switch(f.tag){case 0:case 11:case 15:fs(8,f,s)}var m=f.child;if(m!==null)m.return=f,B=m;else for(;B!==null;){f=B;var v=f.sibling,R=f.return;if(Gv(f),f===d){B=null;break}if(v!==null){v.return=R,B=v;break}B=R}}}var k=s.alternate;if(k!==null){var D=k.child;if(D!==null){k.child=null;do{var x=D.sibling;D.sibling=null,D=x}while(D!==null)}}B=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,B=a;else e:for(;B!==null;){if(s=B,s.flags&2048)switch(s.tag){case 0:case 11:case 15:fs(9,s,s.return)}var T=s.sibling;if(T!==null){T.return=s.return,B=T;break e}B=s.return}}var y=t.current;for(B=y;B!==null;){a=B;var I=a.child;if(a.subtreeFlags&2064&&I!==null)I.return=a,B=I;else e:for(a=y;B!==null;){if(l=B,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:vl(9,l)}}catch(F){ye(l,l.return,F)}if(l===a){B=null;break e}var O=l.sibling;if(O!==null){O.return=l.return,B=O;break e}B=l.return}}if(Z=i,er(),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(ul,t)}catch{}r=!0}return r}finally{re=n,wt.transition=e}}return!1}function Lp(t,e,n){e=mi(n,e),e=Vv(t,e,1),t=jn(t,e,1),e=tt(),t!==null&&(Qs(t,1,e),ut(t,e))}function ye(t,e,n){if(t.tag===3)Lp(t,t,n);else for(;e!==null;){if(e.tag===3){Lp(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Bn===null||!Bn.has(r))){t=mi(n,t),t=Mv(e,t,1),e=jn(e,t,1),t=tt(),e!==null&&(Qs(e,1,t),ut(e,t));break}}e=e.return}}function ow(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=tt(),t.pingedLanes|=t.suspendedLanes&n,De===t&&(Fe&n)===n&&(Ce===4||Ce===3&&(Fe&130023424)===Fe&&500>Ee()-jh?fr(t,0):bh|=n),ut(t,e)}function ny(t,e){e===0&&(t.mode&1?(e=xo,xo<<=1,!(xo&130023424)&&(xo=4194304)):e=1);var n=tt();t=dn(t,e),t!==null&&(Qs(t,e,n),ut(t,n))}function aw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ny(t,n)}function lw(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(V(314))}r!==null&&r.delete(e),ny(t,n)}var ry;ry=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||at.current)ot=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ot=!1,QE(t,e,n);ot=!!(t.flags&131072)}else ot=!1,de&&e.flags&1048576&&av(e,ka,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ia(t,e),t=e.pendingProps;var i=hi(e,Ye.current);ii(e,n),i=Oh(null,e,r,t,i,n);var s=Lh();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,lt(r)?(s=!0,Pa(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Rh(e),i.updater=gl,e.stateNode=i,i._reactInternals=e,Ac(e,r,t,n),e=Tc(null,e,r,!0,s,n)):(e.tag=0,de&&s&&Eh(e),et(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ia(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=cw(r),t=Pt(r,t),i){case 0:e=wc(null,e,r,t,n);break e;case 1:e=Ip(null,e,r,t,n);break e;case 11:e=wp(null,e,r,t,n);break e;case 14:e=Tp(null,e,r,Pt(r.type,t),n);break e}throw Error(V(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pt(r,i),wc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pt(r,i),Ip(t,e,r,i,n);case 3:e:{if(jv(e),t===null)throw Error(V(387));r=e.pendingProps,s=e.memoizedState,i=s.element,fv(t,e),xa(e,r,null,n);var a=e.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=mi(Error(V(423)),e),e=Sp(t,e,r,n,i);break e}else if(r!==i){i=mi(Error(V(424)),e),e=Sp(t,e,r,n,i);break e}else for(ft=bn(e.stateNode.containerInfo.firstChild),pt=e,de=!0,kt=null,n=hv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(di(),r===i){e=fn(t,e,n);break e}et(t,e,r,n)}e=e.child}return e;case 5:return pv(e),t===null&&vc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,a=i.children,dc(r,i)?a=null:s!==null&&dc(r,s)&&(e.flags|=32),bv(t,e),et(t,e,a,n),e.child;case 6:return t===null&&vc(e),null;case 13:return Bv(t,e,n);case 4:return kh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=fi(e,null,r,n):et(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pt(r,i),wp(t,e,r,i,n);case 7:return et(t,e,e.pendingProps,n),e.child;case 8:return et(t,e,e.pendingProps.children,n),e.child;case 12:return et(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,a=i.value,oe(Na,r._currentValue),r._currentValue=a,s!==null)if(Vt(s.value,a)){if(s.children===i.children&&!at.current){e=fn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){a=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=an(-1,n&-n),u.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?u.next=u:(u.next=f.next,f.next=u),d.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),yc(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(V(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),yc(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}et(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ii(e,n),i=Tt(i),r=r(i),e.flags|=1,et(t,e,r,n),e.child;case 14:return r=e.type,i=Pt(r,e.pendingProps),i=Pt(r.type,i),Tp(t,e,r,i,n);case 15:return Uv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pt(r,i),ia(t,e),e.tag=1,lt(r)?(t=!0,Pa(e)):t=!1,ii(e,n),Lv(e,r,i),Ac(e,r,i,n),Tc(null,e,r,!0,t,n);case 19:return zv(t,e,n);case 22:return Fv(t,e,n)}throw Error(V(156,e.tag))};function iy(t,e){return Dg(t,e)}function uw(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Et(t,e,n,r){return new uw(t,e,n,r)}function Hh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function cw(t){if(typeof t=="function")return Hh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===uh)return 11;if(t===ch)return 14}return 2}function $n(t,e){var n=t.alternate;return n===null?(n=Et(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function aa(t,e,n,r,i,s){var a=2;if(r=t,typeof t=="function")Hh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case zr:return pr(n.children,i,s,e);case lh:a=8,i|=8;break;case Hu:return t=Et(12,n,e,i|2),t.elementType=Hu,t.lanes=s,t;case Wu:return t=Et(13,n,e,i),t.elementType=Wu,t.lanes=s,t;case Gu:return t=Et(19,n,e,i),t.elementType=Gu,t.lanes=s,t;case pg:return _l(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case dg:a=10;break e;case fg:a=9;break e;case uh:a=11;break e;case ch:a=14;break e;case In:a=16,r=null;break e}throw Error(V(130,t==null?t:typeof t,""))}return e=Et(a,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function pr(t,e,n,r){return t=Et(7,t,r,e),t.lanes=n,t}function _l(t,e,n,r){return t=Et(22,t,r,e),t.elementType=pg,t.lanes=n,t.stateNode={isHidden:!1},t}function Nu(t,e,n){return t=Et(6,t,null,e),t.lanes=n,t}function Du(t,e,n){return e=Et(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function hw(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hu(0),this.expirationTimes=hu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Wh(t,e,n,r,i,s,a,l,u){return t=new hw(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Et(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rh(s),t}function dw(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Br,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function sy(t){if(!t)return qn;t=t._reactInternals;e:{if(Dr(t)!==t||t.tag!==1)throw Error(V(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(lt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(V(171))}if(t.tag===1){var n=t.type;if(lt(n))return sv(t,n,e)}return e}function oy(t,e,n,r,i,s,a,l,u){return t=Wh(n,r,!0,t,i,s,a,l,u),t.context=sy(null),n=t.current,r=tt(),i=zn(n),s=an(r,i),s.callback=e??null,jn(n,s,i),t.current.lanes=i,Qs(t,i,r),ut(t,r),t}function Al(t,e,n,r){var i=e.current,s=tt(),a=zn(i);return n=sy(n),e.context===null?e.context=n:e.pendingContext=n,e=an(s,a),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=jn(i,e,a),t!==null&&(Lt(t,i,a,s),ta(t,i,a)),a}function ja(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Vp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Gh(t,e){Vp(t,e),(t=t.alternate)&&Vp(t,e)}function fw(){return null}var ay=typeof reportError=="function"?reportError:function(t){console.error(t)};function Kh(t){this._internalRoot=t}El.prototype.render=Kh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(V(409));Al(t,e,null,null)};El.prototype.unmount=Kh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Tr(function(){Al(null,t,null,null)}),e[hn]=null}};function El(t){this._internalRoot=t}El.prototype.unstable_scheduleHydration=function(t){if(t){var e=Fg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Cn.length&&e!==0&&e<Cn[n].priority;n++);Cn.splice(n,0,t),n===0&&jg(t)}};function qh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function wl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Mp(){}function pw(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var d=ja(a);s.call(d)}}var a=oy(e,r,t,0,null,!1,!1,"",Mp);return t._reactRootContainer=a,t[hn]=a.current,ks(t.nodeType===8?t.parentNode:t),Tr(),a}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var d=ja(u);l.call(d)}}var u=Wh(t,0,!1,null,null,!1,!1,"",Mp);return t._reactRootContainer=u,t[hn]=u.current,ks(t.nodeType===8?t.parentNode:t),Tr(function(){Al(e,u,n,r)}),u}function Tl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var l=i;i=function(){var u=ja(a);l.call(u)}}Al(e,a,t,i)}else a=pw(n,e,t,i,r);return ja(a)}Mg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=is(e.pendingLanes);n!==0&&(fh(e,n|1),ut(e,Ee()),!(Z&6)&&(gi=Ee()+500,er()))}break;case 13:Tr(function(){var r=dn(t,1);if(r!==null){var i=tt();Lt(r,t,1,i)}}),Gh(t,1)}};ph=function(t){if(t.tag===13){var e=dn(t,134217728);if(e!==null){var n=tt();Lt(e,t,134217728,n)}Gh(t,134217728)}};Ug=function(t){if(t.tag===13){var e=zn(t),n=dn(t,e);if(n!==null){var r=tt();Lt(n,t,e,r)}Gh(t,e)}};Fg=function(){return re};bg=function(t,e){var n=re;try{return re=t,e()}finally{re=n}};nc=function(t,e,n){switch(e){case"input":if(Qu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=fl(r);if(!i)throw Error(V(90));gg(r),Qu(r,i)}}}break;case"textarea":yg(t,n);break;case"select":e=n.value,e!=null&&ei(t,!!n.multiple,e,!1)}};Sg=Bh;Cg=Tr;var mw={usingClientEntryPoint:!1,Events:[Xs,Gr,fl,Tg,Ig,Bh]},es={findFiberByHostInstance:ur,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gw={bundleType:es.bundleType,version:es.version,rendererPackageName:es.rendererPackageName,rendererConfig:es.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=kg(t),t===null?null:t.stateNode},findFiberByHostInstance:es.findFiberByHostInstance||fw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$o.isDisabled&&$o.supportsFiber)try{ul=$o.inject(gw),bt=$o}catch{}}gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mw;gt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qh(e))throw Error(V(200));return dw(t,e,null,n)};gt.createRoot=function(t,e){if(!qh(t))throw Error(V(299));var n=!1,r="",i=ay;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Wh(t,1,!1,null,null,n,!1,r,i),t[hn]=e.current,ks(t.nodeType===8?t.parentNode:t),new Kh(e)};gt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(V(188)):(t=Object.keys(t).join(","),Error(V(268,t)));return t=kg(e),t=t===null?null:t.stateNode,t};gt.flushSync=function(t){return Tr(t)};gt.hydrate=function(t,e,n){if(!wl(e))throw Error(V(200));return Tl(null,t,e,!0,n)};gt.hydrateRoot=function(t,e,n){if(!qh(t))throw Error(V(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",a=ay;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=oy(e,null,t,1,n??null,i,!1,s,a),t[hn]=e.current,ks(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new El(e)};gt.render=function(t,e,n){if(!wl(e))throw Error(V(200));return Tl(null,t,e,!1,n)};gt.unmountComponentAtNode=function(t){if(!wl(t))throw Error(V(40));return t._reactRootContainer?(Tr(function(){Tl(null,null,t,!1,function(){t._reactRootContainer=null,t[hn]=null})}),!0):!1};gt.unstable_batchedUpdates=Bh;gt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!wl(n))throw Error(V(200));if(t==null||t._reactInternals===void 0)throw Error(V(38));return Tl(t,e,n,!1,r)};gt.version="18.3.1-next-f1338f8080-20240426";function ly(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ly)}catch(t){console.error(t)}}ly(),lg.exports=gt;var vw=lg.exports,uy,Up=vw;uy=Up.createRoot,Up.hydrateRoot;/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fs(){return Fs=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Fs.apply(this,arguments)}var Ln;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ln||(Ln={}));const Fp="popstate";function yw(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:a,hash:l}=r.location;return Vc("",{pathname:s,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:hy(i)}return Aw(e,n,null,t)}function Pe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function cy(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function _w(){return Math.random().toString(36).substr(2,8)}function bp(t,e){return{usr:t.state,key:t.key,idx:e}}function Vc(t,e,n,r){return n===void 0&&(n=null),Fs({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Pi(e):e,{state:n,key:e&&e.key||r||_w()})}function hy(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Pi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Aw(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,a=i.history,l=Ln.Pop,u=null,d=f();d==null&&(d=0,a.replaceState(Fs({},a.state,{idx:d}),""));function f(){return(a.state||{idx:null}).idx}function m(){l=Ln.Pop;let x=f(),T=x==null?null:x-d;d=x,u&&u({action:l,location:D.location,delta:T})}function v(x,T){l=Ln.Push;let y=Vc(D.location,x,T);d=f()+1;let I=bp(y,d),O=D.createHref(y);try{a.pushState(I,"",O)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;i.location.assign(O)}s&&u&&u({action:l,location:D.location,delta:1})}function R(x,T){l=Ln.Replace;let y=Vc(D.location,x,T);d=f();let I=bp(y,d),O=D.createHref(y);a.replaceState(I,"",O),s&&u&&u({action:l,location:D.location,delta:0})}function k(x){let T=i.location.origin!=="null"?i.location.origin:i.location.href,y=typeof x=="string"?x:hy(x);return y=y.replace(/ $/,"%20"),Pe(T,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,T)}let D={get action(){return l},get location(){return t(i,a)},listen(x){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Fp,m),u=x,()=>{i.removeEventListener(Fp,m),u=null}},createHref(x){return e(i,x)},createURL:k,encodeLocation(x){let T=k(x);return{pathname:T.pathname,search:T.search,hash:T.hash}},push:v,replace:R,go(x){return a.go(x)}};return D}var jp;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(jp||(jp={}));function Ew(t,e,n){return n===void 0&&(n="/"),ww(t,e,n,!1)}function ww(t,e,n,r){let i=typeof e=="string"?Pi(e):e,s=py(i.pathname||"/",n);if(s==null)return null;let a=dy(t);Tw(a);let l=null;for(let u=0;l==null&&u<a.length;++u){let d=Lw(s);l=xw(a[u],d,r)}return l}function dy(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,a,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};u.relativePath.startsWith("/")&&(Pe(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let d=mr([r,u.relativePath]),f=n.concat(u);s.children&&s.children.length>0&&(Pe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),dy(s.children,e,f,d)),!(s.path==null&&!s.index)&&e.push({path:d,score:Nw(d,s.index),routesMeta:f})};return t.forEach((s,a)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,a);else for(let u of fy(s.path))i(s,a,u)}),e}function fy(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let a=fy(r.join("/")),l=[];return l.push(...a.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...a),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function Tw(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Dw(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Iw=/^:[\w-]+$/,Sw=3,Cw=2,Pw=1,Rw=10,kw=-2,Bp=t=>t==="*";function Nw(t,e){let n=t.split("/"),r=n.length;return n.some(Bp)&&(r+=kw),e&&(r+=Cw),n.filter(i=>!Bp(i)).reduce((i,s)=>i+(Iw.test(s)?Sw:s===""?Pw:Rw),r)}function Dw(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function xw(t,e,n){let{routesMeta:r}=t,i={},s="/",a=[];for(let l=0;l<r.length;++l){let u=r[l],d=l===r.length-1,f=s==="/"?e:e.slice(s.length)||"/",m=zp({path:u.relativePath,caseSensitive:u.caseSensitive,end:d},f),v=u.route;if(!m&&d&&n&&!r[r.length-1].route.index&&(m=zp({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},f)),!m)return null;Object.assign(i,m.params),a.push({params:i,pathname:mr([s,m.pathname]),pathnameBase:jw(mr([s,m.pathnameBase])),route:v}),m.pathnameBase!=="/"&&(s=mr([s,m.pathnameBase]))}return a}function zp(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Ow(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],a=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((d,f,m)=>{let{paramName:v,isOptional:R}=f;if(v==="*"){let D=l[m]||"";a=s.slice(0,s.length-D.length).replace(/(.)\/+$/,"$1")}const k=l[m];return R&&!k?d[v]=void 0:d[v]=(k||"").replace(/%2F/g,"/"),d},{}),pathname:s,pathnameBase:a,pattern:t}}function Ow(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),cy(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Lw(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return cy(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function py(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Vw(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Pi(t):t;return{pathname:n?n.startsWith("/")?n:Mw(n,e):e,search:Bw(r),hash:zw(i)}}function Mw(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function xu(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Uw(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Fw(t,e){let n=Uw(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function bw(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Pi(t):(i=Fs({},t),Pe(!i.pathname||!i.pathname.includes("?"),xu("?","pathname","search",i)),Pe(!i.pathname||!i.pathname.includes("#"),xu("#","pathname","hash",i)),Pe(!i.search||!i.search.includes("#"),xu("#","search","hash",i)));let s=t===""||i.pathname==="",a=s?"/":i.pathname,l;if(a==null)l=n;else{let m=e.length-1;if(!r&&a.startsWith("..")){let v=a.split("/");for(;v[0]==="..";)v.shift(),m-=1;i.pathname=v.join("/")}l=m>=0?e[m]:"/"}let u=Vw(i,l),d=a&&a!=="/"&&a.endsWith("/"),f=(s||a===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(d||f)&&(u.pathname+="/"),u}const mr=t=>t.join("/").replace(/\/\/+/g,"/"),jw=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Bw=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,zw=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function $w(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const my=["post","put","patch","delete"];new Set(my);const Hw=["get",...my];new Set(Hw);/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bs(){return bs=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},bs.apply(this,arguments)}const Qh=$.createContext(null),Ww=$.createContext(null),Il=$.createContext(null),Sl=$.createContext(null),Ri=$.createContext({outlet:null,matches:[],isDataRoute:!1}),gy=$.createContext(null);function Cl(){return $.useContext(Sl)!=null}function vy(){return Cl()||Pe(!1),$.useContext(Sl).location}function yy(t){$.useContext(Il).static||$.useLayoutEffect(t)}function _y(){let{isDataRoute:t}=$.useContext(Ri);return t?iT():Gw()}function Gw(){Cl()||Pe(!1);let t=$.useContext(Qh),{basename:e,future:n,navigator:r}=$.useContext(Il),{matches:i}=$.useContext(Ri),{pathname:s}=vy(),a=JSON.stringify(Fw(i,n.v7_relativeSplatPath)),l=$.useRef(!1);return yy(()=>{l.current=!0}),$.useCallback(function(d,f){if(f===void 0&&(f={}),!l.current)return;if(typeof d=="number"){r.go(d);return}let m=bw(d,JSON.parse(a),s,f.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:mr([e,m.pathname])),(f.replace?r.replace:r.push)(m,f.state,f)},[e,r,a,s,t])}function Kw(t,e){return qw(t,e)}function qw(t,e,n,r){Cl()||Pe(!1);let{navigator:i}=$.useContext(Il),{matches:s}=$.useContext(Ri),a=s[s.length-1],l=a?a.params:{};a&&a.pathname;let u=a?a.pathnameBase:"/";a&&a.route;let d=vy(),f;if(e){var m;let x=typeof e=="string"?Pi(e):e;u==="/"||(m=x.pathname)!=null&&m.startsWith(u)||Pe(!1),f=x}else f=d;let v=f.pathname||"/",R=v;if(u!=="/"){let x=u.replace(/^\//,"").split("/");R="/"+v.replace(/^\//,"").split("/").slice(x.length).join("/")}let k=Ew(t,{pathname:R}),D=Zw(k&&k.map(x=>Object.assign({},x,{params:Object.assign({},l,x.params),pathname:mr([u,i.encodeLocation?i.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?u:mr([u,i.encodeLocation?i.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),s,n,r);return e&&D?$.createElement(Sl.Provider,{value:{location:bs({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Ln.Pop}},D):D}function Qw(){let t=rT(),e=$w(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return $.createElement($.Fragment,null,$.createElement("h2",null,"Unexpected Application Error!"),$.createElement("h3",{style:{fontStyle:"italic"}},e),n?$.createElement("pre",{style:i},n):null,null)}const Yw=$.createElement(Qw,null);class Xw extends $.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?$.createElement(Ri.Provider,{value:this.props.routeContext},$.createElement(gy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Jw(t){let{routeContext:e,match:n,children:r}=t,i=$.useContext(Qh);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),$.createElement(Ri.Provider,{value:e},r)}function Zw(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let a=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let f=a.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);f>=0||Pe(!1),a=a.slice(0,Math.min(a.length,f+1))}let u=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<a.length;f++){let m=a[f];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=f),m.route.id){let{loaderData:v,errors:R}=n,k=m.route.loader&&v[m.route.id]===void 0&&(!R||R[m.route.id]===void 0);if(m.route.lazy||k){u=!0,d>=0?a=a.slice(0,d+1):a=[a[0]];break}}}return a.reduceRight((f,m,v)=>{let R,k=!1,D=null,x=null;n&&(R=l&&m.route.id?l[m.route.id]:void 0,D=m.route.errorElement||Yw,u&&(d<0&&v===0?(k=!0,x=null):d===v&&(k=!0,x=m.route.hydrateFallbackElement||null)));let T=e.concat(a.slice(0,v+1)),y=()=>{let I;return R?I=D:k?I=x:m.route.Component?I=$.createElement(m.route.Component,null):m.route.element?I=m.route.element:I=f,$.createElement(Jw,{match:m,routeContext:{outlet:f,matches:T,isDataRoute:n!=null},children:I})};return n&&(m.route.ErrorBoundary||m.route.errorElement||v===0)?$.createElement(Xw,{location:n.location,revalidation:n.revalidation,component:D,error:R,children:y(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):y()},null)}var Ay=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Ay||{}),Ba=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Ba||{});function eT(t){let e=$.useContext(Qh);return e||Pe(!1),e}function tT(t){let e=$.useContext(Ww);return e||Pe(!1),e}function nT(t){let e=$.useContext(Ri);return e||Pe(!1),e}function Ey(t){let e=nT(),n=e.matches[e.matches.length-1];return n.route.id||Pe(!1),n.route.id}function rT(){var t;let e=$.useContext(gy),n=tT(Ba.UseRouteError),r=Ey(Ba.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function iT(){let{router:t}=eT(Ay.UseNavigateStable),e=Ey(Ba.UseNavigateStable),n=$.useRef(!1);return yy(()=>{n.current=!0}),$.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,bs({fromRouteId:e},s)))},[t,e])}function la(t){Pe(!1)}function sT(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Ln.Pop,navigator:s,static:a=!1,future:l}=t;Cl()&&Pe(!1);let u=e.replace(/^\/*/,"/"),d=$.useMemo(()=>({basename:u,navigator:s,static:a,future:bs({v7_relativeSplatPath:!1},l)}),[u,l,s,a]);typeof r=="string"&&(r=Pi(r));let{pathname:f="/",search:m="",hash:v="",state:R=null,key:k="default"}=r,D=$.useMemo(()=>{let x=py(f,u);return x==null?null:{location:{pathname:x,search:m,hash:v,state:R,key:k},navigationType:i}},[u,f,m,v,R,k,i]);return D==null?null:$.createElement(Il.Provider,{value:d},$.createElement(Sl.Provider,{children:n,value:D}))}function oT(t){let{children:e,location:n}=t;return Kw(Mc(e),n)}new Promise(()=>{});function Mc(t,e){e===void 0&&(e=[]);let n=[];return $.Children.forEach(t,(r,i)=>{if(!$.isValidElement(r))return;let s=[...e,i];if(r.type===$.Fragment){n.push.apply(n,Mc(r.props.children,s));return}r.type!==la&&Pe(!1),!r.props.index||!r.props.children||Pe(!1);let a={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Mc(r.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const aT="6";try{window.__reactRouterVersion=aT}catch{}const lT="startTransition",$p=oA[lT];function uT(t){let{basename:e,children:n,future:r,window:i}=t,s=$.useRef();s.current==null&&(s.current=yw({window:i,v5Compat:!0}));let a=s.current,[l,u]=$.useState({action:a.action,location:a.location}),{v7_startTransition:d}=r||{},f=$.useCallback(m=>{d&&$p?$p(()=>u(m)):u(m)},[u,d]);return $.useLayoutEffect(()=>a.listen(f),[a,f]),$.createElement(sT,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:a,future:r})}var Hp;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Hp||(Hp={}));var Wp;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Wp||(Wp={}));var Gp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wy=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},cT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],a=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],a=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},Ty={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],a=i+1<t.length,l=a?t[i+1]:0,u=i+2<t.length,d=u?t[i+2]:0,f=s>>2,m=(s&3)<<4|l>>4;let v=(l&15)<<2|d>>6,R=d&63;u||(R=64,a||(v=64)),r.push(n[f],n[m],n[v],n[R])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(wy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):cT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||d==null||m==null)throw new hT;const v=s<<2|l>>4;if(r.push(v),d!==64){const R=l<<4&240|d>>2;if(r.push(R),m!==64){const k=d<<6&192|m;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class hT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const dT=function(t){const e=wy(t);return Ty.encodeByteArray(e,!0)},za=function(t){return dT(t).replace(/\./g,"")},Iy=function(t){try{return Ty.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pT=()=>fT().__FIREBASE_DEFAULTS__,mT=()=>{if(typeof process>"u"||typeof Gp>"u")return;const t=Gp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},gT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Iy(t[1]);return e&&JSON.parse(e)},Pl=()=>{try{return pT()||mT()||gT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Sy=t=>{var e,n;return(n=(e=Pl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},vT=t=>{const e=Sy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Cy=()=>{var t;return(t=Pl())===null||t===void 0?void 0:t.config},Py=t=>{var e;return(e=Pl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _T(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[za(JSON.stringify(n)),za(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function AT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xe())}function ET(){var t;const e=(t=Pl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function wT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function TT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function IT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ST(){const t=Xe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function CT(){return!ET()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function PT(){try{return typeof indexedDB=="object"}catch{return!1}}function RT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT="FirebaseError";class yn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=kT,Object.setPrototypeOf(this,yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zs.prototype.create)}}class Zs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?NT(s,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new yn(i,l,r)}}function NT(t,e){return t.replace(DT,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const DT=/\{\$([^}]+)}/g;function xT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function $a(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],a=e[i];if(Kp(s)&&Kp(a)){if(!$a(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Kp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function OT(t,e){const n=new LT(t,e);return n.subscribe.bind(n)}class LT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");VT(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ou),i.error===void 0&&(i.error=Ou),i.complete===void 0&&(i.complete=Ou);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function VT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ou(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(t){return t&&t._delegate?t._delegate:t}class Ir{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new yT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(FT(e))try{this.getOrInitializeService({instanceIdentifier:lr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=lr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=lr){return this.instances.has(e)}getOptions(e=lr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&a.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:UT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=lr){return this.component?this.component.multipleInstances?e:lr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function UT(t){return t===lr?void 0:t}function FT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new MT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const jT={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},BT=Y.INFO,zT={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},$T=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=zT[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Yh{constructor(e){this.name=e,this._logLevel=BT,this._logHandler=$T,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?jT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const HT=(t,e)=>e.some(n=>t instanceof n);let qp,Qp;function WT(){return qp||(qp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function GT(){return Qp||(Qp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ry=new WeakMap,Uc=new WeakMap,ky=new WeakMap,Lu=new WeakMap,Xh=new WeakMap;function KT(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",a)},s=()=>{n(Hn(t.result)),i()},a=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Ry.set(n,t)}).catch(()=>{}),Xh.set(e,t),e}function qT(t){if(Uc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",a),t.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",a),t.addEventListener("abort",a)});Uc.set(t,e)}let Fc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Uc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ky.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Hn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function QT(t){Fc=t(Fc)}function YT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Vu(this),e,...n);return ky.set(r,e.sort?e.sort():[e]),Hn(r)}:GT().includes(t)?function(...e){return t.apply(Vu(this),e),Hn(Ry.get(this))}:function(...e){return Hn(t.apply(Vu(this),e))}}function XT(t){return typeof t=="function"?YT(t):(t instanceof IDBTransaction&&qT(t),HT(t,WT())?new Proxy(t,Fc):t)}function Hn(t){if(t instanceof IDBRequest)return KT(t);if(Lu.has(t))return Lu.get(t);const e=XT(t);return e!==t&&(Lu.set(t,e),Xh.set(e,t)),e}const Vu=t=>Xh.get(t);function JT(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(t,e),l=Hn(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Hn(a.result),u.oldVersion,u.newVersion,Hn(a.transaction),u)}),n&&a.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const ZT=["get","getKey","getAll","getAllKeys","count"],eI=["put","add","delete","clear"],Mu=new Map;function Yp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Mu.get(e))return Mu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=eI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ZT.includes(n)))return;const s=async function(a,...l){const u=this.transaction(a,i?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[n](...l),i&&u.done]))[0]};return Mu.set(e,s),s}QT(t=>({...t,get:(e,n,r)=>Yp(e,n)||t.get(e,n,r),has:(e,n)=>!!Yp(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(nI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function nI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bc="@firebase/app",Xp="0.10.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn=new Yh("@firebase/app"),rI="@firebase/app-compat",iI="@firebase/analytics-compat",sI="@firebase/analytics",oI="@firebase/app-check-compat",aI="@firebase/app-check",lI="@firebase/auth",uI="@firebase/auth-compat",cI="@firebase/database",hI="@firebase/data-connect",dI="@firebase/database-compat",fI="@firebase/functions",pI="@firebase/functions-compat",mI="@firebase/installations",gI="@firebase/installations-compat",vI="@firebase/messaging",yI="@firebase/messaging-compat",_I="@firebase/performance",AI="@firebase/performance-compat",EI="@firebase/remote-config",wI="@firebase/remote-config-compat",TI="@firebase/storage",II="@firebase/storage-compat",SI="@firebase/firestore",CI="@firebase/vertexai",PI="@firebase/firestore-compat",RI="firebase",kI="11.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc="[DEFAULT]",NI={[bc]:"fire-core",[rI]:"fire-core-compat",[sI]:"fire-analytics",[iI]:"fire-analytics-compat",[aI]:"fire-app-check",[oI]:"fire-app-check-compat",[lI]:"fire-auth",[uI]:"fire-auth-compat",[cI]:"fire-rtdb",[hI]:"fire-data-connect",[dI]:"fire-rtdb-compat",[fI]:"fire-fn",[pI]:"fire-fn-compat",[mI]:"fire-iid",[gI]:"fire-iid-compat",[vI]:"fire-fcm",[yI]:"fire-fcm-compat",[_I]:"fire-perf",[AI]:"fire-perf-compat",[EI]:"fire-rc",[wI]:"fire-rc-compat",[TI]:"fire-gcs",[II]:"fire-gcs-compat",[SI]:"fire-fst",[PI]:"fire-fst-compat",[CI]:"fire-vertex","fire-js":"fire-js",[RI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha=new Map,DI=new Map,Bc=new Map;function Jp(t,e){try{t.container.addComponent(e)}catch(n){pn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function vi(t){const e=t.name;if(Bc.has(e))return pn.debug(`There were multiple attempts to register component ${e}.`),!1;Bc.set(e,t);for(const n of Ha.values())Jp(n,t);for(const n of DI.values())Jp(n,t);return!0}function Jh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Vn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Wn=new Zs("app","Firebase",xI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ir("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki=kI;function Ny(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:jc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Wn.create("bad-app-name",{appName:String(i)});if(n||(n=Cy()),!n)throw Wn.create("no-options");const s=Ha.get(i);if(s){if($a(n,s.options)&&$a(r,s.config))return s;throw Wn.create("duplicate-app",{appName:i})}const a=new bT(i);for(const u of Bc.values())a.addComponent(u);const l=new OI(n,r,a);return Ha.set(i,l),l}function Dy(t=jc){const e=Ha.get(t);if(!e&&t===jc&&Cy())return Ny();if(!e)throw Wn.create("no-app",{appName:t});return e}function Gn(t,e,n){var r;let i=(r=NI[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pn.warn(l.join(" "));return}vi(new Ir(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI="firebase-heartbeat-database",VI=1,js="firebase-heartbeat-store";let Uu=null;function xy(){return Uu||(Uu=JT(LI,VI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(js)}catch(n){console.warn(n)}}}}).catch(t=>{throw Wn.create("idb-open",{originalErrorMessage:t.message})})),Uu}async function MI(t){try{const n=(await xy()).transaction(js),r=await n.objectStore(js).get(Oy(t));return await n.done,r}catch(e){if(e instanceof yn)pn.warn(e.message);else{const n=Wn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});pn.warn(n.message)}}}async function Zp(t,e){try{const r=(await xy()).transaction(js,"readwrite");await r.objectStore(js).put(e,Oy(t)),await r.done}catch(n){if(n instanceof yn)pn.warn(n.message);else{const r=Wn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});pn.warn(r.message)}}}function Oy(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI=1024,FI=30*24*60*60*1e3;class bI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new BI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=em();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=FI}),this._storage.overwrite(this._heartbeatsCache))}catch(r){pn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=em(),{heartbeatsToSend:r,unsentEntries:i}=jI(this._heartbeatsCache.heartbeats),s=za(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return pn.warn(n),""}}}function em(){return new Date().toISOString().substring(0,10)}function jI(t,e=UI){const n=[];let r=t.slice();for(const i of t){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),tm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),tm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class BI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return PT()?RT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await MI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function tm(t){return za(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zI(t){vi(new Ir("platform-logger",e=>new tI(e),"PRIVATE")),vi(new Ir("heartbeat",e=>new bI(e),"PRIVATE")),Gn(bc,Xp,t),Gn(bc,Xp,"esm2017"),Gn("fire-js","")}zI("");var $I="firebase",HI="11.0.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gn($I,HI,"app");function Zh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Ly(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const WI=Ly,Vy=new Zs("auth","Firebase",Ly());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa=new Yh("@firebase/auth");function GI(t,...e){Wa.logLevel<=Y.WARN&&Wa.warn(`Auth (${ki}): ${t}`,...e)}function ua(t,...e){Wa.logLevel<=Y.ERROR&&Wa.error(`Auth (${ki}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(t,...e){throw ed(t,...e)}function Bt(t,...e){return ed(t,...e)}function My(t,e,n){const r=Object.assign(Object.assign({},WI()),{[e]:n});return new Zs("auth","Firebase",r).create(e,{appName:t.name})}function gr(t){return My(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ed(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Vy.create(t,...e)}function H(t,e,...n){if(!t)throw ed(e,...n)}function rn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ua(e),new Error(e)}function gn(t,e){t||rn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function KI(){return nm()==="http:"||nm()==="https:"}function nm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(KI()||TT()||"connection"in navigator)?navigator.onLine:!0}function QI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,n){this.shortDelay=e,this.longDelay=n,gn(n>e,"Short delay should be less than long delay!"),this.isMobile=AT()||IT()}get(){return qI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td(t,e){gn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;rn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;rn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;rn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XI=new to(3e4,6e4);function nd(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ni(t,e,n,r,i={}){return Fy(t,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const l=eo(Object.assign({key:t.config.apiKey},a)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:u},s);return wT()||(d.referrerPolicy="no-referrer"),Uy.fetch()(by(t,t.config.apiHost,n,l),d)})}async function Fy(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},YI),e);try{const i=new ZI(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Ho(t,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const l=s.ok?a.errorMessage:a.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ho(t,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Ho(t,"email-already-in-use",a);if(u==="USER_DISABLED")throw Ho(t,"user-disabled",a);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw My(t,f,d);mn(t,f)}}catch(i){if(i instanceof yn)throw i;mn(t,"network-request-failed",{message:String(i)})}}async function JI(t,e,n,r,i={}){const s=await Ni(t,e,n,r,i);return"mfaPendingCredential"in s&&mn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function by(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?td(t.config,i):`${t.config.apiScheme}://${i}`}class ZI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Bt(this.auth,"network-request-failed")),XI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ho(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Bt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e1(t,e){return Ni(t,"POST","/v1/accounts:delete",e)}async function jy(t,e){return Ni(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function t1(t,e=!1){const n=$t(t),r=await n.getIdToken(e),i=rd(r);H(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:gs(Fu(i.auth_time)),issuedAtTime:gs(Fu(i.iat)),expirationTime:gs(Fu(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Fu(t){return Number(t)*1e3}function rd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ua("JWT malformed, contained fewer than 3 sections"),null;try{const i=Iy(n);return i?JSON.parse(i):(ua("Failed to decode base64 JWT payload"),null)}catch(i){return ua("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function rm(t){const e=rd(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof yn&&n1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function n1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=gs(this.lastLoginAt),this.creationTime=gs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ga(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Bs(t,jy(n,{idToken:r}));H(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?By(s.providerUserInfo):[],l=s1(t.providerData,a),u=t.isAnonymous,d=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?d:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new $c(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function i1(t){const e=$t(t);await Ga(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function s1(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function By(t){return t.map(e=>{var{providerId:n}=e,r=Zh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o1(t,e){const n=await Fy(t,{},async()=>{const r=eo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,a=by(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Uy.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function a1(t,e){return Ni(t,"POST","/v2/accounts:revokeToken",nd(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):rm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){H(e.length!==0,"internal-error");const n=rm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await o1(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new oi;return r&&(H(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(H(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(H(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new oi,this.toJSON())}_performRefresh(){return rn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class sn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Zh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new r1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new $c(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Bs(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return t1(this,e)}reload(){return i1(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new sn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ga(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Vn(this.auth.app))return Promise.reject(gr(this.auth));const e=await this.getIdToken();return await Bs(this,e1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,a,l,u,d,f;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,v=(i=n.email)!==null&&i!==void 0?i:void 0,R=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,k=(a=n.photoURL)!==null&&a!==void 0?a:void 0,D=(l=n.tenantId)!==null&&l!==void 0?l:void 0,x=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,T=(d=n.createdAt)!==null&&d!==void 0?d:void 0,y=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:I,emailVerified:O,isAnonymous:F,providerData:b,stsTokenManager:A}=n;H(I&&A,e,"internal-error");const g=oi.fromJSON(this.name,A);H(typeof I=="string",e,"internal-error"),Tn(m,e.name),Tn(v,e.name),H(typeof O=="boolean",e,"internal-error"),H(typeof F=="boolean",e,"internal-error"),Tn(R,e.name),Tn(k,e.name),Tn(D,e.name),Tn(x,e.name),Tn(T,e.name),Tn(y,e.name);const _=new sn({uid:I,auth:e,email:v,emailVerified:O,displayName:m,isAnonymous:F,photoURL:k,phoneNumber:R,tenantId:D,stsTokenManager:g,createdAt:T,lastLoginAt:y});return b&&Array.isArray(b)&&(_.providerData=b.map(E=>Object.assign({},E))),x&&(_._redirectEventId=x),_}static async _fromIdTokenResponse(e,n,r=!1){const i=new oi;i.updateFromServerResponse(n);const s=new sn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ga(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];H(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?By(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new oi;l.updateFromIdToken(r);const u=new sn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new $c(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const im=new Map;function on(t){gn(t instanceof Function,"Expected a class definition");let e=im.get(t);return e?(gn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,im.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}zy.type="NONE";const sm=zy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(t,e,n){return`firebase:${t}:${e}:${n}`}class ai{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ca(this.userKey,i.apiKey,s),this.fullPersistenceKey=ca("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?sn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ai(on(sm),e,r);const i=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||on(sm);const a=ca(r,e.config.apiKey,e.name);let l=null;for(const d of n)try{const f=await d._get(a);if(f){const m=sn._fromJSON(e,f);d!==s&&(l=m),s=d;break}}catch{}const u=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new ai(s,e,r):(s=u[0],l&&await s._set(a,l.toJSON()),await Promise.all(n.map(async d=>{if(d!==s)try{await d._remove(a)}catch{}})),new ai(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function om(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Gy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($y(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(qy(e))return"Blackberry";if(Qy(e))return"Webos";if(Hy(e))return"Safari";if((e.includes("chrome/")||Wy(e))&&!e.includes("edge/"))return"Chrome";if(Ky(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function $y(t=Xe()){return/firefox\//i.test(t)}function Hy(t=Xe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Wy(t=Xe()){return/crios\//i.test(t)}function Gy(t=Xe()){return/iemobile/i.test(t)}function Ky(t=Xe()){return/android/i.test(t)}function qy(t=Xe()){return/blackberry/i.test(t)}function Qy(t=Xe()){return/webos/i.test(t)}function id(t=Xe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function l1(t=Xe()){var e;return id(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function u1(){return ST()&&document.documentMode===10}function Yy(t=Xe()){return id(t)||Ky(t)||Qy(t)||qy(t)||/windows phone/i.test(t)||Gy(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xy(t,e=[]){let n;switch(t){case"Browser":n=om(Xe());break;case"Worker":n=`${om(Xe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ki}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((a,l)=>{try{const u=e(s);a(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h1(t,e={}){return Ni(t,"GET","/v2/passwordPolicy",nd(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d1=6;class f1{constructor(e){var n,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:d1,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,a,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new am(this),this.idTokenSubscription=new am(this),this.beforeStateQueue=new c1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Vy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=on(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ai.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await jy(this,{idToken:e}),r=await sn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Vn(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ga(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=QI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Vn(this.app))return Promise.reject(gr(this));const n=e?$t(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Vn(this.app)?Promise.reject(gr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Vn(this.app)?Promise.reject(gr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(on(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await h1(this),n=new f1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Zs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await a1(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&on(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await ai.create(this,[on(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(l,this,"internal-error"),l.then(()=>{a||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{a=!0,u()}}else{const u=e.addObserver(n);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Xy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&GI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function sd(t){return $t(t)}class am{constructor(e){this.auth=e,this.observer=null,this.addObserver=OT(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let od={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function m1(t){od=t}function g1(t){return od.loadJS(t)}function v1(){return od.gapiScript}function y1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _1(t,e){const n=Jh(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if($a(s,e??{}))return i;mn(i,"already-initialized")}return n.initialize({options:e})}function A1(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(on);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function E1(t,e,n){const r=sd(t);H(r._canInitEmulator,r,"emulator-config-failed"),H(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Jy(e),{host:a,port:l}=w1(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${a}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),T1()}function Jy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function w1(t){const e=Jy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:lm(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:lm(a)}}}function lm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function T1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return rn("not implemented")}_getIdTokenResponse(e){return rn("not implemented")}_linkToIdToken(e,n){return rn("not implemented")}_getReauthenticationResolver(e){return rn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function li(t,e){return JI(t,"POST","/v1/accounts:signInWithIdp",nd(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I1="http://localhost";class Sr extends Zy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Sr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):mn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Zh(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new Sr(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return li(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,li(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,li(e,n)}buildRequest(){const e={requestUri:I1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=eo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no extends e_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends no{constructor(){super("facebook.com")}static credential(e){return Sr._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rn.credential(e.oauthAccessToken)}catch{return null}}}Rn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends no{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Sr._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return kn.credential(n,r)}catch{return null}}}kn.GOOGLE_SIGN_IN_METHOD="google.com";kn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends no{constructor(){super("github.com")}static credential(e){return Sr._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nn.credential(e.oauthAccessToken)}catch{return null}}}Nn.GITHUB_SIGN_IN_METHOD="github.com";Nn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends no{constructor(){super("twitter.com")}static credential(e,n){return Sr._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Dn.credential(n,r)}catch{return null}}}Dn.TWITTER_SIGN_IN_METHOD="twitter.com";Dn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await sn._fromIdTokenResponse(e,r,i),a=um(r);return new yi({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=um(r);return new yi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function um(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka extends yn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ka.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ka(e,n,r,i)}}function t_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ka._fromErrorAndOperation(t,s,e,r):s})}async function S1(t,e,n=!1){const r=await Bs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return yi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C1(t,e,n=!1){const{auth:r}=t;if(Vn(r.app))return Promise.reject(gr(r));const i="reauthenticate";try{const s=await Bs(t,t_(r,i,e,t),n);H(s.idToken,r,"internal-error");const a=rd(s.idToken);H(a,r,"internal-error");const{sub:l}=a;return H(t.uid===l,r,"user-mismatch"),yi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&mn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P1(t,e,n=!1){if(Vn(t.app))return Promise.reject(gr(t));const r="signIn",i=await t_(t,r,e),s=await yi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function R1(t,e,n,r){return $t(t).onIdTokenChanged(e,n,r)}function k1(t,e,n){return $t(t).beforeAuthStateChanged(e,n)}const qa="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(qa,"1"),this.storage.removeItem(qa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N1=1e3,D1=10;class r_ extends n_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Yy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);u1()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,D1):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},N1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}r_.type="LOCAL";const x1=r_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_ extends n_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}i_.type="SESSION";const s_=i_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Rl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async d=>d(n.origin,s)),u=await O1(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Rl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ad(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((l,u)=>{const d=ad("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(m){const v=m;if(v.data.eventId===d)switch(v.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(v.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(){return window}function V1(t){zt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o_(){return typeof zt().WorkerGlobalScope<"u"&&typeof zt().importScripts=="function"}async function M1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function U1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function F1(){return o_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_="firebaseLocalStorageDb",b1=1,Qa="firebaseLocalStorage",l_="fbase_key";class ro{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function kl(t,e){return t.transaction([Qa],e?"readwrite":"readonly").objectStore(Qa)}function j1(){const t=indexedDB.deleteDatabase(a_);return new ro(t).toPromise()}function Hc(){const t=indexedDB.open(a_,b1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Qa,{keyPath:l_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Qa)?e(r):(r.close(),await j1(),e(await Hc()))})})}async function cm(t,e,n){const r=kl(t,!0).put({[l_]:e,value:n});return new ro(r).toPromise()}async function B1(t,e){const n=kl(t,!1).get(e),r=await new ro(n).toPromise();return r===void 0?null:r.value}function hm(t,e){const n=kl(t,!0).delete(e);return new ro(n).toPromise()}const z1=800,$1=3;class u_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>$1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return o_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Rl._getInstance(F1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await M1(),!this.activeServiceWorker)return;this.sender=new L1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||U1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hc();return await cm(e,qa,"1"),await hm(e,qa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>cm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>B1(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>hm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=kl(i,!1).getAll();return new ro(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),z1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}u_.type="LOCAL";const H1=u_;new to(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W1(t,e){return e?on(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld extends Zy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return li(e,this._buildIdpRequest())}_linkToIdToken(e,n){return li(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return li(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function G1(t){return P1(t.auth,new ld(t),t.bypassAuthState)}function K1(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),C1(n,new ld(t),t.bypassAuthState)}async function q1(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),S1(n,new ld(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return G1;case"linkViaPopup":case"linkViaRedirect":return q1;case"reauthViaPopup":case"reauthViaRedirect":return K1;default:mn(this.auth,"internal-error")}}resolve(e){gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q1=new to(2e3,1e4);class Zr extends c_{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Zr.currentPopupAction&&Zr.currentPopupAction.cancel(),Zr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){gn(this.filter.length===1,"Popup operations only handle one event");const e=ad();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Bt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Bt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Bt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Q1.get())};e()}}Zr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y1="pendingRedirect",ha=new Map;class X1 extends c_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ha.get(this.auth._key());if(!e){try{const r=await J1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ha.set(this.auth._key(),e)}return this.bypassAuthState||ha.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function J1(t,e){const n=tS(e),r=eS(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Z1(t,e){ha.set(t._key(),e)}function eS(t){return on(t._redirectPersistence)}function tS(t){return ca(Y1,t.config.apiKey,t.name)}async function nS(t,e,n=!1){if(Vn(t.app))return Promise.reject(gr(t));const r=sd(t),i=W1(r,e),a=await new X1(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS=10*60*1e3;class iS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!sS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!h_(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Bt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=rS&&this.cachedEventUids.clear(),this.cachedEventUids.has(dm(e))}saveEventToCache(e){this.cachedEventUids.add(dm(e)),this.lastProcessedEventTime=Date.now()}}function dm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function h_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function sS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return h_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oS(t,e={}){return Ni(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,lS=/^https?/;async function uS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await oS(t);for(const n of e)try{if(cS(n))return}catch{}mn(t,"unauthorized-domain")}function cS(t){const e=zc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!lS.test(n))return!1;if(aS.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hS=new to(3e4,6e4);function fm(){const t=zt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function dS(t){return new Promise((e,n)=>{var r,i,s;function a(){fm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fm(),n(Bt(t,"network-request-failed"))},timeout:hS.get()})}if(!((i=(r=zt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=zt().gapi)===null||s===void 0)&&s.load)a();else{const l=y1("iframefcb");return zt()[l]=()=>{gapi.load?a():n(Bt(t,"network-request-failed"))},g1(`${v1()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw da=null,e})}let da=null;function fS(t){return da=da||dS(t),da}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pS=new to(5e3,15e3),mS="__/auth/iframe",gS="emulator/auth/iframe",vS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _S(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?td(e,gS):`https://${t.config.authDomain}/${mS}`,r={apiKey:e.apiKey,appName:t.name,v:ki},i=yS.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${eo(r).slice(1)}`}async function AS(t){const e=await fS(t),n=zt().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:_S(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vS,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=Bt(t,"network-request-failed"),l=zt().setTimeout(()=>{s(a)},pS.get());function u(){zt().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ES={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},wS=500,TS=600,IS="_blank",SS="http://localhost";class pm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function CS(t,e,n,r=wS,i=TS){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},ES),{width:r.toString(),height:i.toString(),top:s,left:a}),d=Xe().toLowerCase();n&&(l=Wy(d)?IS:n),$y(d)&&(e=e||SS,u.scrollbars="yes");const f=Object.entries(u).reduce((v,[R,k])=>`${v}${R}=${k},`,"");if(l1(d)&&l!=="_self")return PS(e||"",l),new pm(null);const m=window.open(e||"",l,f);H(m,t,"popup-blocked");try{m.focus()}catch{}return new pm(m)}function PS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RS="__/auth/handler",kS="emulator/auth/handler",NS=encodeURIComponent("fac");async function mm(t,e,n,r,i,s){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ki,eventId:i};if(e instanceof e_){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",xT(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))a[f]=m}if(e instanceof no){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(a.scopes=f.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),d=u?`#${NS}=${encodeURIComponent(u)}`:"";return`${DS(t)}?${eo(l).slice(1)}${d}`}function DS({config:t}){return t.emulator?td(t,kS):`https://${t.authDomain}/${RS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu="webStorageSupport";class xS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=s_,this._completeRedirectFn=nS,this._overrideRedirectResult=Z1}async _openPopup(e,n,r,i){var s;gn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await mm(e,n,r,zc(),i);return CS(e,a,ad())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await mm(e,n,r,zc(),i);return V1(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(gn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await AS(e),r=new iS(e);return n.register("authEvent",i=>(H(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(bu,{type:bu},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[bu];a!==void 0&&n(!!a),mn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=uS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Yy()||Hy()||id()}}const OS=xS;var gm="@firebase/auth",vm="1.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function MS(t){vi(new Ir("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;H(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Xy(t)},d=new p1(r,i,s,u);return A1(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),vi(new Ir("auth-internal",e=>{const n=sd(e.getProvider("auth").getImmediate());return(r=>new LS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gn(gm,vm,VS(t)),Gn(gm,vm,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US=5*60,FS=Py("authIdTokenMaxAge")||US;let ym=null;const bS=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>FS)return;const i=n==null?void 0:n.token;ym!==i&&(ym=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function jS(t=Dy()){const e=Jh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=_1(t,{popupRedirectResolver:OS,persistence:[H1,x1,s_]}),r=Py("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=bS(s.toString());k1(n,a,()=>a(n.currentUser)),R1(n,l=>a(l))}}const i=Sy("auth");return i&&E1(n,`http://${i}`),n}function BS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}m1({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Bt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",BS().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});MS("Browser");var _m=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var d_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,g){function _(){}_.prototype=g.prototype,A.D=g.prototype,A.prototype=new _,A.prototype.constructor=A,A.C=function(E,S,P){for(var w=Array(arguments.length-2),yt=2;yt<arguments.length;yt++)w[yt-2]=arguments[yt];return g.prototype[S].apply(E,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(A,g,_){_||(_=0);var E=Array(16);if(typeof g=="string")for(var S=0;16>S;++S)E[S]=g.charCodeAt(_++)|g.charCodeAt(_++)<<8|g.charCodeAt(_++)<<16|g.charCodeAt(_++)<<24;else for(S=0;16>S;++S)E[S]=g[_++]|g[_++]<<8|g[_++]<<16|g[_++]<<24;g=A.g[0],_=A.g[1],S=A.g[2];var P=A.g[3],w=g+(P^_&(S^P))+E[0]+3614090360&4294967295;g=_+(w<<7&4294967295|w>>>25),w=P+(S^g&(_^S))+E[1]+3905402710&4294967295,P=g+(w<<12&4294967295|w>>>20),w=S+(_^P&(g^_))+E[2]+606105819&4294967295,S=P+(w<<17&4294967295|w>>>15),w=_+(g^S&(P^g))+E[3]+3250441966&4294967295,_=S+(w<<22&4294967295|w>>>10),w=g+(P^_&(S^P))+E[4]+4118548399&4294967295,g=_+(w<<7&4294967295|w>>>25),w=P+(S^g&(_^S))+E[5]+1200080426&4294967295,P=g+(w<<12&4294967295|w>>>20),w=S+(_^P&(g^_))+E[6]+2821735955&4294967295,S=P+(w<<17&4294967295|w>>>15),w=_+(g^S&(P^g))+E[7]+4249261313&4294967295,_=S+(w<<22&4294967295|w>>>10),w=g+(P^_&(S^P))+E[8]+1770035416&4294967295,g=_+(w<<7&4294967295|w>>>25),w=P+(S^g&(_^S))+E[9]+2336552879&4294967295,P=g+(w<<12&4294967295|w>>>20),w=S+(_^P&(g^_))+E[10]+4294925233&4294967295,S=P+(w<<17&4294967295|w>>>15),w=_+(g^S&(P^g))+E[11]+2304563134&4294967295,_=S+(w<<22&4294967295|w>>>10),w=g+(P^_&(S^P))+E[12]+1804603682&4294967295,g=_+(w<<7&4294967295|w>>>25),w=P+(S^g&(_^S))+E[13]+4254626195&4294967295,P=g+(w<<12&4294967295|w>>>20),w=S+(_^P&(g^_))+E[14]+2792965006&4294967295,S=P+(w<<17&4294967295|w>>>15),w=_+(g^S&(P^g))+E[15]+1236535329&4294967295,_=S+(w<<22&4294967295|w>>>10),w=g+(S^P&(_^S))+E[1]+4129170786&4294967295,g=_+(w<<5&4294967295|w>>>27),w=P+(_^S&(g^_))+E[6]+3225465664&4294967295,P=g+(w<<9&4294967295|w>>>23),w=S+(g^_&(P^g))+E[11]+643717713&4294967295,S=P+(w<<14&4294967295|w>>>18),w=_+(P^g&(S^P))+E[0]+3921069994&4294967295,_=S+(w<<20&4294967295|w>>>12),w=g+(S^P&(_^S))+E[5]+3593408605&4294967295,g=_+(w<<5&4294967295|w>>>27),w=P+(_^S&(g^_))+E[10]+38016083&4294967295,P=g+(w<<9&4294967295|w>>>23),w=S+(g^_&(P^g))+E[15]+3634488961&4294967295,S=P+(w<<14&4294967295|w>>>18),w=_+(P^g&(S^P))+E[4]+3889429448&4294967295,_=S+(w<<20&4294967295|w>>>12),w=g+(S^P&(_^S))+E[9]+568446438&4294967295,g=_+(w<<5&4294967295|w>>>27),w=P+(_^S&(g^_))+E[14]+3275163606&4294967295,P=g+(w<<9&4294967295|w>>>23),w=S+(g^_&(P^g))+E[3]+4107603335&4294967295,S=P+(w<<14&4294967295|w>>>18),w=_+(P^g&(S^P))+E[8]+1163531501&4294967295,_=S+(w<<20&4294967295|w>>>12),w=g+(S^P&(_^S))+E[13]+2850285829&4294967295,g=_+(w<<5&4294967295|w>>>27),w=P+(_^S&(g^_))+E[2]+4243563512&4294967295,P=g+(w<<9&4294967295|w>>>23),w=S+(g^_&(P^g))+E[7]+1735328473&4294967295,S=P+(w<<14&4294967295|w>>>18),w=_+(P^g&(S^P))+E[12]+2368359562&4294967295,_=S+(w<<20&4294967295|w>>>12),w=g+(_^S^P)+E[5]+4294588738&4294967295,g=_+(w<<4&4294967295|w>>>28),w=P+(g^_^S)+E[8]+2272392833&4294967295,P=g+(w<<11&4294967295|w>>>21),w=S+(P^g^_)+E[11]+1839030562&4294967295,S=P+(w<<16&4294967295|w>>>16),w=_+(S^P^g)+E[14]+4259657740&4294967295,_=S+(w<<23&4294967295|w>>>9),w=g+(_^S^P)+E[1]+2763975236&4294967295,g=_+(w<<4&4294967295|w>>>28),w=P+(g^_^S)+E[4]+1272893353&4294967295,P=g+(w<<11&4294967295|w>>>21),w=S+(P^g^_)+E[7]+4139469664&4294967295,S=P+(w<<16&4294967295|w>>>16),w=_+(S^P^g)+E[10]+3200236656&4294967295,_=S+(w<<23&4294967295|w>>>9),w=g+(_^S^P)+E[13]+681279174&4294967295,g=_+(w<<4&4294967295|w>>>28),w=P+(g^_^S)+E[0]+3936430074&4294967295,P=g+(w<<11&4294967295|w>>>21),w=S+(P^g^_)+E[3]+3572445317&4294967295,S=P+(w<<16&4294967295|w>>>16),w=_+(S^P^g)+E[6]+76029189&4294967295,_=S+(w<<23&4294967295|w>>>9),w=g+(_^S^P)+E[9]+3654602809&4294967295,g=_+(w<<4&4294967295|w>>>28),w=P+(g^_^S)+E[12]+3873151461&4294967295,P=g+(w<<11&4294967295|w>>>21),w=S+(P^g^_)+E[15]+530742520&4294967295,S=P+(w<<16&4294967295|w>>>16),w=_+(S^P^g)+E[2]+3299628645&4294967295,_=S+(w<<23&4294967295|w>>>9),w=g+(S^(_|~P))+E[0]+4096336452&4294967295,g=_+(w<<6&4294967295|w>>>26),w=P+(_^(g|~S))+E[7]+1126891415&4294967295,P=g+(w<<10&4294967295|w>>>22),w=S+(g^(P|~_))+E[14]+2878612391&4294967295,S=P+(w<<15&4294967295|w>>>17),w=_+(P^(S|~g))+E[5]+4237533241&4294967295,_=S+(w<<21&4294967295|w>>>11),w=g+(S^(_|~P))+E[12]+1700485571&4294967295,g=_+(w<<6&4294967295|w>>>26),w=P+(_^(g|~S))+E[3]+2399980690&4294967295,P=g+(w<<10&4294967295|w>>>22),w=S+(g^(P|~_))+E[10]+4293915773&4294967295,S=P+(w<<15&4294967295|w>>>17),w=_+(P^(S|~g))+E[1]+2240044497&4294967295,_=S+(w<<21&4294967295|w>>>11),w=g+(S^(_|~P))+E[8]+1873313359&4294967295,g=_+(w<<6&4294967295|w>>>26),w=P+(_^(g|~S))+E[15]+4264355552&4294967295,P=g+(w<<10&4294967295|w>>>22),w=S+(g^(P|~_))+E[6]+2734768916&4294967295,S=P+(w<<15&4294967295|w>>>17),w=_+(P^(S|~g))+E[13]+1309151649&4294967295,_=S+(w<<21&4294967295|w>>>11),w=g+(S^(_|~P))+E[4]+4149444226&4294967295,g=_+(w<<6&4294967295|w>>>26),w=P+(_^(g|~S))+E[11]+3174756917&4294967295,P=g+(w<<10&4294967295|w>>>22),w=S+(g^(P|~_))+E[2]+718787259&4294967295,S=P+(w<<15&4294967295|w>>>17),w=_+(P^(S|~g))+E[9]+3951481745&4294967295,A.g[0]=A.g[0]+g&4294967295,A.g[1]=A.g[1]+(S+(w<<21&4294967295|w>>>11))&4294967295,A.g[2]=A.g[2]+S&4294967295,A.g[3]=A.g[3]+P&4294967295}r.prototype.u=function(A,g){g===void 0&&(g=A.length);for(var _=g-this.blockSize,E=this.B,S=this.h,P=0;P<g;){if(S==0)for(;P<=_;)i(this,A,P),P+=this.blockSize;if(typeof A=="string"){for(;P<g;)if(E[S++]=A.charCodeAt(P++),S==this.blockSize){i(this,E),S=0;break}}else for(;P<g;)if(E[S++]=A[P++],S==this.blockSize){i(this,E),S=0;break}}this.h=S,this.o+=g},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var g=1;g<A.length-8;++g)A[g]=0;var _=8*this.o;for(g=A.length-8;g<A.length;++g)A[g]=_&255,_/=256;for(this.u(A),A=Array(16),g=_=0;4>g;++g)for(var E=0;32>E;E+=8)A[_++]=this.g[g]>>>E&255;return A};function s(A,g){var _=l;return Object.prototype.hasOwnProperty.call(_,A)?_[A]:_[A]=g(A)}function a(A,g){this.h=g;for(var _=[],E=!0,S=A.length-1;0<=S;S--){var P=A[S]|0;E&&P==g||(_[S]=P,E=!1)}this.g=_}var l={};function u(A){return-128<=A&&128>A?s(A,function(g){return new a([g|0],0>g?-1:0)}):new a([A|0],0>A?-1:0)}function d(A){if(isNaN(A)||!isFinite(A))return m;if(0>A)return x(d(-A));for(var g=[],_=1,E=0;A>=_;E++)g[E]=A/_|0,_*=4294967296;return new a(g,0)}function f(A,g){if(A.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(A.charAt(0)=="-")return x(f(A.substring(1),g));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(g,8)),E=m,S=0;S<A.length;S+=8){var P=Math.min(8,A.length-S),w=parseInt(A.substring(S,S+P),g);8>P?(P=d(Math.pow(g,P)),E=E.j(P).add(d(w))):(E=E.j(_),E=E.add(d(w)))}return E}var m=u(0),v=u(1),R=u(16777216);t=a.prototype,t.m=function(){if(D(this))return-x(this).m();for(var A=0,g=1,_=0;_<this.g.length;_++){var E=this.i(_);A+=(0<=E?E:4294967296+E)*g,g*=4294967296}return A},t.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(k(this))return"0";if(D(this))return"-"+x(this).toString(A);for(var g=d(Math.pow(A,6)),_=this,E="";;){var S=O(_,g).g;_=T(_,S.j(g));var P=((0<_.g.length?_.g[0]:_.h)>>>0).toString(A);if(_=S,k(_))return P+E;for(;6>P.length;)P="0"+P;E=P+E}},t.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function k(A){if(A.h!=0)return!1;for(var g=0;g<A.g.length;g++)if(A.g[g]!=0)return!1;return!0}function D(A){return A.h==-1}t.l=function(A){return A=T(this,A),D(A)?-1:k(A)?0:1};function x(A){for(var g=A.g.length,_=[],E=0;E<g;E++)_[E]=~A.g[E];return new a(_,~A.h).add(v)}t.abs=function(){return D(this)?x(this):this},t.add=function(A){for(var g=Math.max(this.g.length,A.g.length),_=[],E=0,S=0;S<=g;S++){var P=E+(this.i(S)&65535)+(A.i(S)&65535),w=(P>>>16)+(this.i(S)>>>16)+(A.i(S)>>>16);E=w>>>16,P&=65535,w&=65535,_[S]=w<<16|P}return new a(_,_[_.length-1]&-2147483648?-1:0)};function T(A,g){return A.add(x(g))}t.j=function(A){if(k(this)||k(A))return m;if(D(this))return D(A)?x(this).j(x(A)):x(x(this).j(A));if(D(A))return x(this.j(x(A)));if(0>this.l(R)&&0>A.l(R))return d(this.m()*A.m());for(var g=this.g.length+A.g.length,_=[],E=0;E<2*g;E++)_[E]=0;for(E=0;E<this.g.length;E++)for(var S=0;S<A.g.length;S++){var P=this.i(E)>>>16,w=this.i(E)&65535,yt=A.i(S)>>>16,tr=A.i(S)&65535;_[2*E+2*S]+=w*tr,y(_,2*E+2*S),_[2*E+2*S+1]+=P*tr,y(_,2*E+2*S+1),_[2*E+2*S+1]+=w*yt,y(_,2*E+2*S+1),_[2*E+2*S+2]+=P*yt,y(_,2*E+2*S+2)}for(E=0;E<g;E++)_[E]=_[2*E+1]<<16|_[2*E];for(E=g;E<2*g;E++)_[E]=0;return new a(_,0)};function y(A,g){for(;(A[g]&65535)!=A[g];)A[g+1]+=A[g]>>>16,A[g]&=65535,g++}function I(A,g){this.g=A,this.h=g}function O(A,g){if(k(g))throw Error("division by zero");if(k(A))return new I(m,m);if(D(A))return g=O(x(A),g),new I(x(g.g),x(g.h));if(D(g))return g=O(A,x(g)),new I(x(g.g),g.h);if(30<A.g.length){if(D(A)||D(g))throw Error("slowDivide_ only works with positive integers.");for(var _=v,E=g;0>=E.l(A);)_=F(_),E=F(E);var S=b(_,1),P=b(E,1);for(E=b(E,2),_=b(_,2);!k(E);){var w=P.add(E);0>=w.l(A)&&(S=S.add(_),P=w),E=b(E,1),_=b(_,1)}return g=T(A,S.j(g)),new I(S,g)}for(S=m;0<=A.l(g);){for(_=Math.max(1,Math.floor(A.m()/g.m())),E=Math.ceil(Math.log(_)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),P=d(_),w=P.j(g);D(w)||0<w.l(A);)_-=E,P=d(_),w=P.j(g);k(P)&&(P=v),S=S.add(P),A=T(A,w)}return new I(S,A)}t.A=function(A){return O(this,A).h},t.and=function(A){for(var g=Math.max(this.g.length,A.g.length),_=[],E=0;E<g;E++)_[E]=this.i(E)&A.i(E);return new a(_,this.h&A.h)},t.or=function(A){for(var g=Math.max(this.g.length,A.g.length),_=[],E=0;E<g;E++)_[E]=this.i(E)|A.i(E);return new a(_,this.h|A.h)},t.xor=function(A){for(var g=Math.max(this.g.length,A.g.length),_=[],E=0;E<g;E++)_[E]=this.i(E)^A.i(E);return new a(_,this.h^A.h)};function F(A){for(var g=A.g.length+1,_=[],E=0;E<g;E++)_[E]=A.i(E)<<1|A.i(E-1)>>>31;return new a(_,A.h)}function b(A,g){var _=g>>5;g%=32;for(var E=A.g.length-_,S=[],P=0;P<E;P++)S[P]=0<g?A.i(P+_)>>>g|A.i(P+_+1)<<32-g:A.i(P+_);return new a(S,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,d_=a}).apply(typeof _m<"u"?_m:typeof self<"u"?self:typeof window<"u"?window:{});var Wo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var f_,os,p_,fa,Wc,m_,g_,v_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,h){return o==Array.prototype||o==Object.prototype||(o[c]=h.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Wo=="object"&&Wo];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=n(this);function i(o,c){if(c)e:{var h=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var C=o[p];if(!(C in h))break e;h=h[C]}o=o[o.length-1],p=h[o],c=c(p),c!=p&&c!=null&&e(h,o,{configurable:!0,writable:!0,value:c})}}function s(o,c){o instanceof String&&(o+="");var h=0,p=!1,C={next:function(){if(!p&&h<o.length){var N=h++;return{value:c(N,o[N]),done:!1}}return p=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}i("Array.prototype.values",function(o){return o||function(){return s(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function d(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function f(o,c,h){return o.call.apply(o.bind,arguments)}function m(o,c,h){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,p),o.apply(c,C)}}return function(){return o.apply(c,arguments)}}function v(o,c,h){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,v.apply(null,arguments)}function R(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function k(o,c){function h(){}h.prototype=c.prototype,o.aa=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(p,C,N){for(var U=Array(arguments.length-2),se=2;se<arguments.length;se++)U[se-2]=arguments[se];return c.prototype[C].apply(p,U)}}function D(o){const c=o.length;if(0<c){const h=Array(c);for(let p=0;p<c;p++)h[p]=o[p];return h}return[]}function x(o,c){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(u(p)){const C=o.length||0,N=p.length||0;o.length=C+N;for(let U=0;U<N;U++)o[C+U]=p[U]}else o.push(p)}}class T{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function y(o){return/^[\s\xa0]*$/.test(o)}function I(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function O(o){return O[" "](o),o}O[" "]=function(){};var F=I().indexOf("Gecko")!=-1&&!(I().toLowerCase().indexOf("webkit")!=-1&&I().indexOf("Edge")==-1)&&!(I().indexOf("Trident")!=-1||I().indexOf("MSIE")!=-1)&&I().indexOf("Edge")==-1;function b(o,c,h){for(const p in o)c.call(h,o[p],p,o)}function A(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function g(o){const c={};for(const h in o)c[h]=o[h];return c}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(o,c){let h,p;for(let C=1;C<arguments.length;C++){p=arguments[C];for(h in p)o[h]=p[h];for(let N=0;N<_.length;N++)h=_[N],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function S(o){var c=1;o=o.split(":");const h=[];for(;0<c&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function P(o){l.setTimeout(()=>{throw o},0)}function w(){var o=G;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class yt{constructor(){this.h=this.g=null}add(c,h){const p=tr.get();p.set(c,h),this.h?this.h.next=p:this.g=p,this.h=p}}var tr=new T(()=>new Oi,o=>o.reset());class Oi{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Gt,j=!1,G=new yt,K=()=>{const o=l.Promise.resolve(void 0);Gt=()=>{o.then(fe)}};var fe=()=>{for(var o;o=w();){try{o.h.call(o.g)}catch(h){P(h)}var c=tr;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}j=!1};function ie(){this.s=this.s,this.C=this.C}ie.prototype.s=!1,ie.prototype.ma=function(){this.s||(this.s=!0,this.N())},ie.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ae(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}Ae.prototype.h=function(){this.defaultPrevented=!0};var Kt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};l.addEventListener("test",h,c),l.removeEventListener("test",h,c)}catch{}return o}();function qt(o,c){if(Ae.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(F){e:{try{O(c.nodeName);var C=!0;break e}catch{}C=!1}C||(c=null)}}else h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Qt[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&qt.aa.h.call(this)}}k(qt,Ae);var Qt={2:"touch",3:"pen",4:"mouse"};qt.prototype.h=function(){qt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Yt="closure_listenable_"+(1e6*Math.random()|0),h0=0;function d0(o,c,h,p,C){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!p,this.ha=C,this.key=++h0,this.da=this.fa=!1}function lo(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function uo(o){this.src=o,this.g={},this.h=0}uo.prototype.add=function(o,c,h,p,C){var N=o.toString();o=this.g[N],o||(o=this.g[N]=[],this.h++);var U=Fl(o,c,p,C);return-1<U?(c=o[U],h||(c.fa=!1)):(c=new d0(c,this.src,N,!!p,C),c.fa=h,o.push(c)),c};function Ul(o,c){var h=c.type;if(h in o.g){var p=o.g[h],C=Array.prototype.indexOf.call(p,c,void 0),N;(N=0<=C)&&Array.prototype.splice.call(p,C,1),N&&(lo(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Fl(o,c,h,p){for(var C=0;C<o.length;++C){var N=o[C];if(!N.da&&N.listener==c&&N.capture==!!h&&N.ha==p)return C}return-1}var bl="closure_lm_"+(1e6*Math.random()|0),jl={};function kd(o,c,h,p,C){if(Array.isArray(c)){for(var N=0;N<c.length;N++)kd(o,c[N],h,p,C);return null}return h=xd(h),o&&o[Yt]?o.K(c,h,d(p)?!!p.capture:!!p,C):f0(o,c,h,!1,p,C)}function f0(o,c,h,p,C,N){if(!c)throw Error("Invalid event type");var U=d(C)?!!C.capture:!!C,se=zl(o);if(se||(o[bl]=se=new uo(o)),h=se.add(c,h,p,U,N),h.proxy)return h;if(p=p0(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)Kt||(C=U),C===void 0&&(C=!1),o.addEventListener(c.toString(),p,C);else if(o.attachEvent)o.attachEvent(Dd(c.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function p0(){function o(h){return c.call(o.src,o.listener,h)}const c=m0;return o}function Nd(o,c,h,p,C){if(Array.isArray(c))for(var N=0;N<c.length;N++)Nd(o,c[N],h,p,C);else p=d(p)?!!p.capture:!!p,h=xd(h),o&&o[Yt]?(o=o.i,c=String(c).toString(),c in o.g&&(N=o.g[c],h=Fl(N,h,p,C),-1<h&&(lo(N[h]),Array.prototype.splice.call(N,h,1),N.length==0&&(delete o.g[c],o.h--)))):o&&(o=zl(o))&&(c=o.g[c.toString()],o=-1,c&&(o=Fl(c,h,p,C)),(h=-1<o?c[o]:null)&&Bl(h))}function Bl(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Yt])Ul(c.i,o);else{var h=o.type,p=o.proxy;c.removeEventListener?c.removeEventListener(h,p,o.capture):c.detachEvent?c.detachEvent(Dd(h),p):c.addListener&&c.removeListener&&c.removeListener(p),(h=zl(c))?(Ul(h,o),h.h==0&&(h.src=null,c[bl]=null)):lo(o)}}}function Dd(o){return o in jl?jl[o]:jl[o]="on"+o}function m0(o,c){if(o.da)o=!0;else{c=new qt(c,this);var h=o.listener,p=o.ha||o.src;o.fa&&Bl(o),o=h.call(p,c)}return o}function zl(o){return o=o[bl],o instanceof uo?o:null}var $l="__closure_events_fn_"+(1e9*Math.random()>>>0);function xd(o){return typeof o=="function"?o:(o[$l]||(o[$l]=function(c){return o.handleEvent(c)}),o[$l])}function Be(){ie.call(this),this.i=new uo(this),this.M=this,this.F=null}k(Be,ie),Be.prototype[Yt]=!0,Be.prototype.removeEventListener=function(o,c,h,p){Nd(this,o,c,h,p)};function Je(o,c){var h,p=o.F;if(p)for(h=[];p;p=p.F)h.push(p);if(o=o.M,p=c.type||c,typeof c=="string")c=new Ae(c,o);else if(c instanceof Ae)c.target=c.target||o;else{var C=c;c=new Ae(p,o),E(c,C)}if(C=!0,h)for(var N=h.length-1;0<=N;N--){var U=c.g=h[N];C=co(U,p,!0,c)&&C}if(U=c.g=o,C=co(U,p,!0,c)&&C,C=co(U,p,!1,c)&&C,h)for(N=0;N<h.length;N++)U=c.g=h[N],C=co(U,p,!1,c)&&C}Be.prototype.N=function(){if(Be.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var h=o.g[c],p=0;p<h.length;p++)lo(h[p]);delete o.g[c],o.h--}}this.F=null},Be.prototype.K=function(o,c,h,p){return this.i.add(String(o),c,!1,h,p)},Be.prototype.L=function(o,c,h,p){return this.i.add(String(o),c,!0,h,p)};function co(o,c,h,p){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var C=!0,N=0;N<c.length;++N){var U=c[N];if(U&&!U.da&&U.capture==h){var se=U.listener,Oe=U.ha||U.src;U.fa&&Ul(o.i,U),C=se.call(Oe,p)!==!1&&C}}return C&&!p.defaultPrevented}function Od(o,c,h){if(typeof o=="function")h&&(o=v(o,h));else if(o&&typeof o.handleEvent=="function")o=v(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(o,c||0)}function Ld(o){o.g=Od(()=>{o.g=null,o.i&&(o.i=!1,Ld(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class g0 extends ie{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Ld(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Li(o){ie.call(this),this.h=o,this.g={}}k(Li,ie);var Vd=[];function Md(o){b(o.g,function(c,h){this.g.hasOwnProperty(h)&&Bl(c)},o),o.g={}}Li.prototype.N=function(){Li.aa.N.call(this),Md(this)},Li.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Hl=l.JSON.stringify,v0=l.JSON.parse,y0=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Wl(){}Wl.prototype.h=null;function Ud(o){return o.h||(o.h=o.i())}function Fd(){}var Vi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Gl(){Ae.call(this,"d")}k(Gl,Ae);function Kl(){Ae.call(this,"c")}k(Kl,Ae);var nr={},bd=null;function ho(){return bd=bd||new Be}nr.La="serverreachability";function jd(o){Ae.call(this,nr.La,o)}k(jd,Ae);function Mi(o){const c=ho();Je(c,new jd(c))}nr.STAT_EVENT="statevent";function Bd(o,c){Ae.call(this,nr.STAT_EVENT,o),this.stat=c}k(Bd,Ae);function Ze(o){const c=ho();Je(c,new Bd(c,o))}nr.Ma="timingevent";function zd(o,c){Ae.call(this,nr.Ma,o),this.size=c}k(zd,Ae);function Ui(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},c)}function Fi(){this.g=!0}Fi.prototype.xa=function(){this.g=!1};function _0(o,c,h,p,C,N){o.info(function(){if(o.g)if(N)for(var U="",se=N.split("&"),Oe=0;Oe<se.length;Oe++){var ee=se[Oe].split("=");if(1<ee.length){var ze=ee[0];ee=ee[1];var $e=ze.split("_");U=2<=$e.length&&$e[1]=="type"?U+(ze+"="+ee+"&"):U+(ze+"=redacted&")}}else U=null;else U=N;return"XMLHTTP REQ ("+p+") [attempt "+C+"]: "+c+`
`+h+`
`+U})}function A0(o,c,h,p,C,N,U){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+C+"]: "+c+`
`+h+`
`+N+" "+U})}function Lr(o,c,h,p){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+w0(o,h)+(p?" "+p:"")})}function E0(o,c){o.info(function(){return"TIMEOUT: "+c})}Fi.prototype.info=function(){};function w0(o,c){if(!o.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var p=h[o];if(!(2>p.length)){var C=p[1];if(Array.isArray(C)&&!(1>C.length)){var N=C[0];if(N!="noop"&&N!="stop"&&N!="close")for(var U=1;U<C.length;U++)C[U]=""}}}}return Hl(h)}catch{return c}}var fo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},$d={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ql;function po(){}k(po,Wl),po.prototype.g=function(){return new XMLHttpRequest},po.prototype.i=function(){return{}},ql=new po;function _n(o,c,h,p){this.j=o,this.i=c,this.l=h,this.R=p||1,this.U=new Li(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Hd}function Hd(){this.i=null,this.g="",this.h=!1}var Wd={},Ql={};function Yl(o,c,h){o.L=1,o.v=yo(Xt(c)),o.m=h,o.P=!0,Gd(o,null)}function Gd(o,c){o.F=Date.now(),mo(o),o.A=Xt(o.v);var h=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),af(h.i,"t",p),o.C=0,h=o.j.J,o.h=new Hd,o.g=Sf(o.j,h?c:null,!o.m),0<o.O&&(o.M=new g0(v(o.Y,o,o.g),o.O)),c=o.U,h=o.g,p=o.ca;var C="readystatechange";Array.isArray(C)||(C&&(Vd[0]=C.toString()),C=Vd);for(var N=0;N<C.length;N++){var U=kd(h,C[N],p||c.handleEvent,!1,c.h||c);if(!U)break;c.g[U.key]=U}c=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),Mi(),_0(o.i,o.u,o.A,o.l,o.R,o.m)}_n.prototype.ca=function(o){o=o.target;const c=this.M;c&&Jt(o)==3?c.j():this.Y(o)},_n.prototype.Y=function(o){try{if(o==this.g)e:{const $e=Jt(this.g);var c=this.g.Ba();const Ur=this.g.Z();if(!(3>$e)&&($e!=3||this.g&&(this.h.h||this.g.oa()||pf(this.g)))){this.J||$e!=4||c==7||(c==8||0>=Ur?Mi(3):Mi(2)),Xl(this);var h=this.g.Z();this.X=h;t:if(Kd(this)){var p=pf(this.g);o="";var C=p.length,N=Jt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){rr(this),bi(this);var U="";break t}this.h.i=new l.TextDecoder}for(c=0;c<C;c++)this.h.h=!0,o+=this.h.i.decode(p[c],{stream:!(N&&c==C-1)});p.length=0,this.h.g+=o,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=h==200,A0(this.i,this.u,this.A,this.l,this.R,$e,h),this.o){if(this.T&&!this.K){t:{if(this.g){var se,Oe=this.g;if((se=Oe.g?Oe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(se)){var ee=se;break t}}ee=null}if(h=ee)Lr(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Jl(this,h);else{this.o=!1,this.s=3,Ze(12),rr(this),bi(this);break e}}if(this.P){h=!0;let St;for(;!this.J&&this.C<U.length;)if(St=T0(this,U),St==Ql){$e==4&&(this.s=4,Ze(14),h=!1),Lr(this.i,this.l,null,"[Incomplete Response]");break}else if(St==Wd){this.s=4,Ze(15),Lr(this.i,this.l,U,"[Invalid Chunk]"),h=!1;break}else Lr(this.i,this.l,St,null),Jl(this,St);if(Kd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),$e!=4||U.length!=0||this.h.h||(this.s=1,Ze(16),h=!1),this.o=this.o&&h,!h)Lr(this.i,this.l,U,"[Invalid Chunked Response]"),rr(this),bi(this);else if(0<U.length&&!this.W){this.W=!0;var ze=this.j;ze.g==this&&ze.ba&&!ze.M&&(ze.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),iu(ze),ze.M=!0,Ze(11))}}else Lr(this.i,this.l,U,null),Jl(this,U);$e==4&&rr(this),this.o&&!this.J&&($e==4?Ef(this.j,this):(this.o=!1,mo(this)))}else j0(this.g),h==400&&0<U.indexOf("Unknown SID")?(this.s=3,Ze(12)):(this.s=0,Ze(13)),rr(this),bi(this)}}}catch{}finally{}};function Kd(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function T0(o,c){var h=o.C,p=c.indexOf(`
`,h);return p==-1?Ql:(h=Number(c.substring(h,p)),isNaN(h)?Wd:(p+=1,p+h>c.length?Ql:(c=c.slice(p,p+h),o.C=p+h,c)))}_n.prototype.cancel=function(){this.J=!0,rr(this)};function mo(o){o.S=Date.now()+o.I,qd(o,o.I)}function qd(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Ui(v(o.ba,o),c)}function Xl(o){o.B&&(l.clearTimeout(o.B),o.B=null)}_n.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(E0(this.i,this.A),this.L!=2&&(Mi(),Ze(17)),rr(this),this.s=2,bi(this)):qd(this,this.S-o)};function bi(o){o.j.G==0||o.J||Ef(o.j,o)}function rr(o){Xl(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,Md(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function Jl(o,c){try{var h=o.j;if(h.G!=0&&(h.g==o||Zl(h.h,o))){if(!o.K&&Zl(h.h,o)&&h.G==3){try{var p=h.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var C=p;if(C[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)Io(h),wo(h);else break e;ru(h),Ze(18)}}else h.za=C[1],0<h.za-h.T&&37500>C[2]&&h.F&&h.v==0&&!h.C&&(h.C=Ui(v(h.Za,h),6e3));if(1>=Xd(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else sr(h,11)}else if((o.K||h.g==o)&&Io(h),!y(c))for(C=h.Da.g.parse(c),c=0;c<C.length;c++){let ee=C[c];if(h.T=ee[0],ee=ee[1],h.G==2)if(ee[0]=="c"){h.K=ee[1],h.ia=ee[2];const ze=ee[3];ze!=null&&(h.la=ze,h.j.info("VER="+h.la));const $e=ee[4];$e!=null&&(h.Aa=$e,h.j.info("SVER="+h.Aa));const Ur=ee[5];Ur!=null&&typeof Ur=="number"&&0<Ur&&(p=1.5*Ur,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const St=o.g;if(St){const Co=St.g?St.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Co){var N=p.h;N.g||Co.indexOf("spdy")==-1&&Co.indexOf("quic")==-1&&Co.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(eu(N,N.h),N.h=null))}if(p.D){const su=St.g?St.g.getResponseHeader("X-HTTP-Session-Id"):null;su&&(p.ya=su,le(p.I,p.D,su))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var U=o;if(p.qa=If(p,p.J?p.ia:null,p.W),U.K){Jd(p.h,U);var se=U,Oe=p.L;Oe&&(se.I=Oe),se.B&&(Xl(se),mo(se)),p.g=U}else _f(p);0<h.i.length&&To(h)}else ee[0]!="stop"&&ee[0]!="close"||sr(h,7);else h.G==3&&(ee[0]=="stop"||ee[0]=="close"?ee[0]=="stop"?sr(h,7):nu(h):ee[0]!="noop"&&h.l&&h.l.ta(ee),h.v=0)}}Mi(4)}catch{}}var I0=class{constructor(o,c){this.g=o,this.map=c}};function Qd(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Yd(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Xd(o){return o.h?1:o.g?o.g.size:0}function Zl(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function eu(o,c){o.g?o.g.add(c):o.h=c}function Jd(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}Qd.prototype.cancel=function(){if(this.i=Zd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Zd(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.D);return c}return D(o.i)}function S0(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var c=[],h=o.length,p=0;p<h;p++)c.push(o[p]);return c}c=[],h=0;for(p in o)c[h++]=o[p];return c}function C0(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var c=[];o=o.length;for(var h=0;h<o;h++)c.push(h);return c}c=[],h=0;for(const p in o)c[h++]=p;return c}}}function ef(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var h=C0(o),p=S0(o),C=p.length,N=0;N<C;N++)c.call(void 0,p[N],h&&h[N],o)}var tf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function P0(o,c){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var p=o[h].indexOf("="),C=null;if(0<=p){var N=o[h].substring(0,p);C=o[h].substring(p+1)}else N=o[h];c(N,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function ir(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof ir){this.h=o.h,go(this,o.j),this.o=o.o,this.g=o.g,vo(this,o.s),this.l=o.l;var c=o.i,h=new zi;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),nf(this,h),this.m=o.m}else o&&(c=String(o).match(tf))?(this.h=!1,go(this,c[1]||"",!0),this.o=ji(c[2]||""),this.g=ji(c[3]||"",!0),vo(this,c[4]),this.l=ji(c[5]||"",!0),nf(this,c[6]||"",!0),this.m=ji(c[7]||"")):(this.h=!1,this.i=new zi(null,this.h))}ir.prototype.toString=function(){var o=[],c=this.j;c&&o.push(Bi(c,rf,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(Bi(c,rf,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Bi(h,h.charAt(0)=="/"?N0:k0,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Bi(h,x0)),o.join("")};function Xt(o){return new ir(o)}function go(o,c,h){o.j=h?ji(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function vo(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function nf(o,c,h){c instanceof zi?(o.i=c,O0(o.i,o.h)):(h||(c=Bi(c,D0)),o.i=new zi(c,o.h))}function le(o,c,h){o.i.set(c,h)}function yo(o){return le(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function ji(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Bi(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,R0),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function R0(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var rf=/[#\/\?@]/g,k0=/[#\?:]/g,N0=/[#\?]/g,D0=/[#\?@]/g,x0=/#/g;function zi(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function An(o){o.g||(o.g=new Map,o.h=0,o.i&&P0(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}t=zi.prototype,t.add=function(o,c){An(this),this.i=null,o=Vr(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function sf(o,c){An(o),c=Vr(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function of(o,c){return An(o),c=Vr(o,c),o.g.has(c)}t.forEach=function(o,c){An(this),this.g.forEach(function(h,p){h.forEach(function(C){o.call(c,C,p,this)},this)},this)},t.na=function(){An(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let p=0;p<c.length;p++){const C=o[p];for(let N=0;N<C.length;N++)h.push(c[p])}return h},t.V=function(o){An(this);let c=[];if(typeof o=="string")of(this,o)&&(c=c.concat(this.g.get(Vr(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)c=c.concat(o[h])}return c},t.set=function(o,c){return An(this),this.i=null,o=Vr(this,o),of(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},t.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function af(o,c,h){sf(o,c),0<h.length&&(o.i=null,o.g.set(Vr(o,c),D(h)),o.h+=h.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var p=c[h];const N=encodeURIComponent(String(p)),U=this.V(p);for(p=0;p<U.length;p++){var C=N;U[p]!==""&&(C+="="+encodeURIComponent(String(U[p]))),o.push(C)}}return this.i=o.join("&")};function Vr(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function O0(o,c){c&&!o.j&&(An(o),o.i=null,o.g.forEach(function(h,p){var C=p.toLowerCase();p!=C&&(sf(this,p),af(this,C,h))},o)),o.j=c}function L0(o,c){const h=new Fi;if(l.Image){const p=new Image;p.onload=R(En,h,"TestLoadImage: loaded",!0,c,p),p.onerror=R(En,h,"TestLoadImage: error",!1,c,p),p.onabort=R(En,h,"TestLoadImage: abort",!1,c,p),p.ontimeout=R(En,h,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else c(!1)}function V0(o,c){const h=new Fi,p=new AbortController,C=setTimeout(()=>{p.abort(),En(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:p.signal}).then(N=>{clearTimeout(C),N.ok?En(h,"TestPingServer: ok",!0,c):En(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(C),En(h,"TestPingServer: error",!1,c)})}function En(o,c,h,p,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),p(h)}catch{}}function M0(){this.g=new y0}function U0(o,c,h){const p=h||"";try{ef(o,function(C,N){let U=C;d(C)&&(U=Hl(C)),c.push(p+N+"="+encodeURIComponent(U))})}catch(C){throw c.push(p+"type="+encodeURIComponent("_badmap")),C}}function _o(o){this.l=o.Ub||null,this.j=o.eb||!1}k(_o,Wl),_o.prototype.g=function(){return new Ao(this.l,this.j)},_o.prototype.i=function(o){return function(){return o}}({});function Ao(o,c){Be.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Ao,Be),t=Ao.prototype,t.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,Hi(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,$i(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Hi(this)),this.g&&(this.readyState=3,Hi(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;lf(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function lf(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?$i(this):Hi(this),this.readyState==3&&lf(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,$i(this))},t.Qa=function(o){this.g&&(this.response=o,$i(this))},t.ga=function(){this.g&&$i(this)};function $i(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Hi(o)}t.setRequestHeader=function(o,c){this.u.append(o,c)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function Hi(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Ao.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function uf(o){let c="";return b(o,function(h,p){c+=p,c+=":",c+=h,c+=`\r
`}),c}function tu(o,c,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=uf(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):le(o,c,h))}function ve(o){Be.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(ve,Be);var F0=/^https?$/i,b0=["POST","PUT"];t=ve.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,c,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ql.g(),this.v=this.o?Ud(this.o):Ud(ql),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(N){cf(this,N);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var C in p)h.set(C,p[C]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const N of p.keys())h.set(N,p.get(N));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(N=>N.toLowerCase()=="content-type"),C=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(b0,c,void 0))||p||C||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,U]of h)this.g.setRequestHeader(N,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ff(this),this.u=!0,this.g.send(o),this.u=!1}catch(N){cf(this,N)}};function cf(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,hf(o),Eo(o)}function hf(o){o.A||(o.A=!0,Je(o,"complete"),Je(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Je(this,"complete"),Je(this,"abort"),Eo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Eo(this,!0)),ve.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?df(this):this.bb())},t.bb=function(){df(this)};function df(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Jt(o)!=4||o.Z()!=2)){if(o.u&&Jt(o)==4)Od(o.Ea,0,o);else if(Je(o,"readystatechange"),Jt(o)==4){o.h=!1;try{const U=o.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var p;if(p=U===0){var C=String(o.D).match(tf)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),p=!F0.test(C?C.toLowerCase():"")}h=p}if(h)Je(o,"complete"),Je(o,"success");else{o.m=6;try{var N=2<Jt(o)?o.g.statusText:""}catch{N=""}o.l=N+" ["+o.Z()+"]",hf(o)}}finally{Eo(o)}}}}function Eo(o,c){if(o.g){ff(o);const h=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||Je(o,"ready");try{h.onreadystatechange=p}catch{}}}function ff(o){o.I&&(l.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function Jt(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<Jt(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),v0(c)}};function pf(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function j0(o){const c={};o=(o.g&&2<=Jt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(y(o[p]))continue;var h=S(o[p]);const C=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const N=c[C]||[];c[C]=N,N.push(h)}A(c,function(p){return p.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Wi(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function mf(o){this.Aa=0,this.i=[],this.j=new Fi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Wi("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Wi("baseRetryDelayMs",5e3,o),this.cb=Wi("retryDelaySeedMs",1e4,o),this.Wa=Wi("forwardChannelMaxRetries",2,o),this.wa=Wi("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Qd(o&&o.concurrentRequestLimit),this.Da=new M0,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=mf.prototype,t.la=8,t.G=1,t.connect=function(o,c,h,p){Ze(0),this.W=o,this.H=c||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=If(this,null,this.W),To(this)};function nu(o){if(gf(o),o.G==3){var c=o.U++,h=Xt(o.I);if(le(h,"SID",o.K),le(h,"RID",c),le(h,"TYPE","terminate"),Gi(o,h),c=new _n(o,o.j,c),c.L=2,c.v=yo(Xt(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=c.v,h=!0),h||(c.g=Sf(c.j,null),c.g.ea(c.v)),c.F=Date.now(),mo(c)}Tf(o)}function wo(o){o.g&&(iu(o),o.g.cancel(),o.g=null)}function gf(o){wo(o),o.u&&(l.clearTimeout(o.u),o.u=null),Io(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function To(o){if(!Yd(o.h)&&!o.s){o.s=!0;var c=o.Ga;Gt||K(),j||(Gt(),j=!0),G.add(c,o),o.B=0}}function B0(o,c){return Xd(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Ui(v(o.Ga,o,c),wf(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const C=new _n(this,this.j,o);let N=this.o;if(this.S&&(N?(N=g(N),E(N,this.S)):N=this.S),this.m!==null||this.O||(C.H=N,N=null),this.P)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=yf(this,C,c),h=Xt(this.I),le(h,"RID",o),le(h,"CVER",22),this.D&&le(h,"X-HTTP-Session-Id",this.D),Gi(this,h),N&&(this.O?c="headers="+encodeURIComponent(String(uf(N)))+"&"+c:this.m&&tu(h,this.m,N)),eu(this.h,C),this.Ua&&le(h,"TYPE","init"),this.P?(le(h,"$req",c),le(h,"SID","null"),C.T=!0,Yl(C,h,null)):Yl(C,h,c),this.G=2}}else this.G==3&&(o?vf(this,o):this.i.length==0||Yd(this.h)||vf(this))};function vf(o,c){var h;c?h=c.l:h=o.U++;const p=Xt(o.I);le(p,"SID",o.K),le(p,"RID",h),le(p,"AID",o.T),Gi(o,p),o.m&&o.o&&tu(p,o.m,o.o),h=new _n(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),c&&(o.i=c.D.concat(o.i)),c=yf(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),eu(o.h,h),Yl(h,p,c)}function Gi(o,c){o.H&&b(o.H,function(h,p){le(c,p,h)}),o.l&&ef({},function(h,p){le(c,p,h)})}function yf(o,c,h){h=Math.min(o.i.length,h);var p=o.l?v(o.l.Na,o.l,o):null;e:{var C=o.i;let N=-1;for(;;){const U=["count="+h];N==-1?0<h?(N=C[0].g,U.push("ofs="+N)):N=0:U.push("ofs="+N);let se=!0;for(let Oe=0;Oe<h;Oe++){let ee=C[Oe].g;const ze=C[Oe].map;if(ee-=N,0>ee)N=Math.max(0,C[Oe].g-100),se=!1;else try{U0(ze,U,"req"+ee+"_")}catch{p&&p(ze)}}if(se){p=U.join("&");break e}}}return o=o.i.splice(0,h),c.D=o,p}function _f(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;Gt||K(),j||(Gt(),j=!0),G.add(c,o),o.v=0}}function ru(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Ui(v(o.Fa,o),wf(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,Af(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Ui(v(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ze(10),wo(this),Af(this))};function iu(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Af(o){o.g=new _n(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=Xt(o.qa);le(c,"RID","rpc"),le(c,"SID",o.K),le(c,"AID",o.T),le(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&le(c,"TO",o.ja),le(c,"TYPE","xmlhttp"),Gi(o,c),o.m&&o.o&&tu(c,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=yo(Xt(c)),h.m=null,h.P=!0,Gd(h,o)}t.Za=function(){this.C!=null&&(this.C=null,wo(this),ru(this),Ze(19))};function Io(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function Ef(o,c){var h=null;if(o.g==c){Io(o),iu(o),o.g=null;var p=2}else if(Zl(o.h,c))h=c.D,Jd(o.h,c),p=1;else return;if(o.G!=0){if(c.o)if(p==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var C=o.B;p=ho(),Je(p,new zd(p,h)),To(o)}else _f(o);else if(C=c.s,C==3||C==0&&0<c.X||!(p==1&&B0(o,c)||p==2&&ru(o)))switch(h&&0<h.length&&(c=o.h,c.i=c.i.concat(h)),C){case 1:sr(o,5);break;case 4:sr(o,10);break;case 3:sr(o,6);break;default:sr(o,2)}}}function wf(o,c){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*c}function sr(o,c){if(o.j.info("Error code "+c),c==2){var h=v(o.fb,o),p=o.Xa;const C=!p;p=new ir(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||go(p,"https"),yo(p),C?L0(p.toString(),h):V0(p.toString(),h)}else Ze(2);o.G=0,o.l&&o.l.sa(c),Tf(o),gf(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Ze(2)):(this.j.info("Failed to ping google.com"),Ze(1))};function Tf(o){if(o.G=0,o.ka=[],o.l){const c=Zd(o.h);(c.length!=0||o.i.length!=0)&&(x(o.ka,c),x(o.ka,o.i),o.h.i.length=0,D(o.i),o.i.length=0),o.l.ra()}}function If(o,c,h){var p=h instanceof ir?Xt(h):new ir(h);if(p.g!="")c&&(p.g=c+"."+p.g),vo(p,p.s);else{var C=l.location;p=C.protocol,c=c?c+"."+C.hostname:C.hostname,C=+C.port;var N=new ir(null);p&&go(N,p),c&&(N.g=c),C&&vo(N,C),h&&(N.l=h),p=N}return h=o.D,c=o.ya,h&&c&&le(p,h,c),le(p,"VER",o.la),Gi(o,p),p}function Sf(o,c,h){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new ve(new _o({eb:h})):new ve(o.pa),c.Ha(o.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Cf(){}t=Cf.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function So(){}So.prototype.g=function(o,c){return new ht(o,c)};function ht(o,c){Be.call(this),this.g=new mf(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!y(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!y(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new Mr(this)}k(ht,Be),ht.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ht.prototype.close=function(){nu(this.g)},ht.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=Hl(o),o=h);c.i.push(new I0(c.Ya++,o)),c.G==3&&To(c)},ht.prototype.N=function(){this.g.l=null,delete this.j,nu(this.g),delete this.g,ht.aa.N.call(this)};function Pf(o){Gl.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const h in c){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}k(Pf,Gl);function Rf(){Kl.call(this),this.status=1}k(Rf,Kl);function Mr(o){this.g=o}k(Mr,Cf),Mr.prototype.ua=function(){Je(this.g,"a")},Mr.prototype.ta=function(o){Je(this.g,new Pf(o))},Mr.prototype.sa=function(o){Je(this.g,new Rf)},Mr.prototype.ra=function(){Je(this.g,"b")},So.prototype.createWebChannel=So.prototype.g,ht.prototype.send=ht.prototype.o,ht.prototype.open=ht.prototype.m,ht.prototype.close=ht.prototype.close,v_=function(){return new So},g_=function(){return ho()},m_=nr,Wc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},fo.NO_ERROR=0,fo.TIMEOUT=8,fo.HTTP_ERROR=6,fa=fo,$d.COMPLETE="complete",p_=$d,Fd.EventType=Vi,Vi.OPEN="a",Vi.CLOSE="b",Vi.ERROR="c",Vi.MESSAGE="d",Be.prototype.listen=Be.prototype.K,os=Fd,ve.prototype.listenOnce=ve.prototype.L,ve.prototype.getLastError=ve.prototype.Ka,ve.prototype.getLastErrorCode=ve.prototype.Ba,ve.prototype.getStatus=ve.prototype.Z,ve.prototype.getResponseJson=ve.prototype.Oa,ve.prototype.getResponseText=ve.prototype.oa,ve.prototype.send=ve.prototype.ea,ve.prototype.setWithCredentials=ve.prototype.Ha,f_=ve}).apply(typeof Wo<"u"?Wo:typeof self<"u"?self:typeof window<"u"?window:{});const Am="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ke.UNAUTHENTICATED=new Ke(null),Ke.GOOGLE_CREDENTIALS=new Ke("google-credentials-uid"),Ke.FIRST_PARTY=new Ke("first-party-uid"),Ke.MOCK_USER=new Ke("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Di="11.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr=new Yh("@firebase/firestore");function br(){return Cr.logLevel}function z(t,...e){if(Cr.logLevel<=Y.DEBUG){const n=e.map(ud);Cr.debug(`Firestore (${Di}): ${t}`,...n)}}function Pr(t,...e){if(Cr.logLevel<=Y.ERROR){const n=e.map(ud);Cr.error(`Firestore (${Di}): ${t}`,...n)}}function Ya(t,...e){if(Cr.logLevel<=Y.WARN){const n=e.map(ud);Cr.warn(`Firestore (${Di}): ${t}`,...n)}}function ud(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t="Unexpected state"){const e=`FIRESTORE (${Di}) INTERNAL ASSERTION FAILED: `+t;throw Pr(e),new Error(e)}function _e(t,e){t||X()}function ae(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends yn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class zS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ke.UNAUTHENTICATED))}shutdown(){}}class $S{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class HS{constructor(e){this.t=e,this.currentUser=Ke.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){_e(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new vr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new vr,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new vr)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(_e(typeof r.accessToken=="string"),new y_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return _e(e===null||typeof e=="string"),new Ke(e)}}class WS{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ke.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class GS{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new WS(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ke.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class KS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class qS{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){_e(this.o===void 0);const r=s=>{s.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,z("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(_e(typeof n.token=="string"),this.R=n.token,new KS(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QS(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=QS(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ne(t,e){return t<e?-1:t>e?1:0}function _i(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return xe.fromMillis(Date.now())}static fromDate(e){return xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new xe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.timestamp=e}static fromTimestamp(e){return new he(e)}static min(){return new he(new xe(0,0))}static max(){return new he(new xe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,n,r){n===void 0?n=0:n>e.length&&X(),r===void 0?r=e.length-n:r>e.length-n&&X(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return zs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof zs?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),a=n.get(i);if(s<a)return-1;if(s>a)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Te extends zs{construct(e,n,r){return new Te(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Te(n)}static emptyPath(){return new Te([])}}const YS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ue extends zs{construct(e,n,r){return new Ue(e,n,r)}static isValidIdentifier(e){return YS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ue.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ue(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new W(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(s(),i++)}if(s(),a)throw new W(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ue(n)}static emptyPath(){return new Ue([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(Te.fromString(e))}static fromName(e){return new q(Te.fromString(e).popFirst(5))}static empty(){return new q(Te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new Te(e.slice()))}}function XS(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=he.fromTimestamp(r===1e9?new xe(n+1,0):new xe(n,r));return new Qn(i,q.empty(),e)}function JS(t){return new Qn(t.readTime,t.key,-1)}class Qn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Qn(he.min(),q.empty(),-1)}static max(){return new Qn(he.max(),q.empty(),-1)}}function ZS(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:ne(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class tC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cd(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==eC)throw t;z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let i=0,s=0,a=!1;e.forEach(l=>{++i,l.next(()=>{++s,a&&s===i&&n()},u=>r(u))}),a=!0,s===i&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(i=>i?L.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new L((r,i)=>{const s=e.length,a=new Array(s);let l=0;for(let u=0;u<s;u++){const d=u;n(e[d]).next(f=>{a[d]=f,++l,l===s&&r(a)},f=>i(f))}})}static doWhile(e,n){return new L((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function nC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function io(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}hd.oe=-1;function dd(t){return t==null}function Xa(t){return t===0&&1/t==-1/0}function rC(t){return typeof t=="number"&&Number.isInteger(t)&&!Xa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Em(e)),e=sC(t.get(n),e);return Em(e)}function sC(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function Em(t){return t+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function xi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function A_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,n){this.comparator=e,this.root=n||Ve.EMPTY}insert(e,n){return new ct(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ve.BLACK,null,null))}remove(e){return new ct(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ve.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Go(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Go(this.root,e,this.comparator,!1)}getReverseIterator(){return new Go(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Go(this.root,e,this.comparator,!0)}}class Go{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ve{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ve.RED,this.left=i??Ve.EMPTY,this.right=s??Ve.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ve(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ve.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ve.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const e=this.left.check();if(e!==this.right.check())throw X();return e+(this.isRed()?0:1)}}Ve.EMPTY=null,Ve.RED=!0,Ve.BLACK=!1;Ve.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ve(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.comparator=e,this.data=new ct(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Tm(this.data.getIterator())}getIteratorFrom(e){return new Tm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof be)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new be(this.comparator);return n.data=e,n}}class Tm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.fields=e,e.sort(Ue.comparator)}static empty(){return new xt([])}unionWith(e){let n=new be(Ue.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new xt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return _i(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new oC("Invalid base64 string: "+s):s}}(e);return new Ht(n)}static fromUint8Array(e){const n=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new Ht(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ht.EMPTY_BYTE_STRING=new Ht("");const aC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rr(t){if(_e(!!t),typeof t=="string"){let e=0;const n=aC.exec(t);if(_e(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Me(t.seconds),nanos:Me(t.nanos)}}function Me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ai(t){return typeof t=="string"?Ht.fromBase64String(t):Ht.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function pd(t){const e=t.mapValue.fields.__previous_value__;return fd(e)?pd(e):e}function Ja(t){const e=Rr(t.mapValue.fields.__local_write_time__.timestampValue);return new xe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(e,n,r,i,s,a,l,u,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d}}class Za{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Za("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Za&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function kr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?fd(t)?4:cC(t)?9007199254740991:uC(t)?10:11:X()}function Wt(t,e){if(t===e)return!0;const n=kr(t);if(n!==kr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ja(t).isEqual(Ja(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=Rr(i.timestampValue),l=Rr(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Ai(i.bytesValue).isEqual(Ai(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Me(i.geoPointValue.latitude)===Me(s.geoPointValue.latitude)&&Me(i.geoPointValue.longitude)===Me(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Me(i.integerValue)===Me(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=Me(i.doubleValue),l=Me(s.doubleValue);return a===l?Xa(a)===Xa(l):isNaN(a)&&isNaN(l)}return!1}(t,e);case 9:return _i(t.arrayValue.values||[],e.arrayValue.values||[],Wt);case 10:case 11:return function(i,s){const a=i.mapValue.fields||{},l=s.mapValue.fields||{};if(wm(a)!==wm(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!Wt(a[u],l[u])))return!1;return!0}(t,e);default:return X()}}function $s(t,e){return(t.values||[]).find(n=>Wt(n,e))!==void 0}function Ei(t,e){if(t===e)return 0;const n=kr(t),r=kr(e);if(n!==r)return ne(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ne(t.booleanValue,e.booleanValue);case 2:return function(s,a){const l=Me(s.integerValue||s.doubleValue),u=Me(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Im(t.timestampValue,e.timestampValue);case 4:return Im(Ja(t),Ja(e));case 5:return ne(t.stringValue,e.stringValue);case 6:return function(s,a){const l=Ai(s),u=Ai(a);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,a){const l=s.split("/"),u=a.split("/");for(let d=0;d<l.length&&d<u.length;d++){const f=ne(l[d],u[d]);if(f!==0)return f}return ne(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,a){const l=ne(Me(s.latitude),Me(a.latitude));return l!==0?l:ne(Me(s.longitude),Me(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Sm(t.arrayValue,e.arrayValue);case 10:return function(s,a){var l,u,d,f;const m=s.fields||{},v=a.fields||{},R=(l=m.value)===null||l===void 0?void 0:l.arrayValue,k=(u=v.value)===null||u===void 0?void 0:u.arrayValue,D=ne(((d=R==null?void 0:R.values)===null||d===void 0?void 0:d.length)||0,((f=k==null?void 0:k.values)===null||f===void 0?void 0:f.length)||0);return D!==0?D:Sm(R,k)}(t.mapValue,e.mapValue);case 11:return function(s,a){if(s===Ko.mapValue&&a===Ko.mapValue)return 0;if(s===Ko.mapValue)return 1;if(a===Ko.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),d=a.fields||{},f=Object.keys(d);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const v=ne(u[m],f[m]);if(v!==0)return v;const R=Ei(l[u[m]],d[f[m]]);if(R!==0)return R}return ne(u.length,f.length)}(t.mapValue,e.mapValue);default:throw X()}}function Im(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ne(t,e);const n=Rr(t),r=Rr(e),i=ne(n.seconds,r.seconds);return i!==0?i:ne(n.nanos,r.nanos)}function Sm(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Ei(n[i],r[i]);if(s)return s}return ne(n.length,r.length)}function wi(t){return Gc(t)}function Gc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Rr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ai(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Gc(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${Gc(n.fields[a])}`;return i+"}"}(t.mapValue):X()}function pa(t){switch(kr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=pd(t);return e?16+pa(e):16;case 5:return 2*t.stringValue.length;case 6:return Ai(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+pa(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return xi(r.fields,(s,a)=>{i+=s.length+pa(a)}),i}(t.mapValue);default:throw X()}}function Kc(t){return!!t&&"integerValue"in t}function md(t){return!!t&&"arrayValue"in t}function ma(t){return!!t&&"mapValue"in t}function uC(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function vs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return xi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=vs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=vs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function cC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.value=e}static empty(){return new Dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ma(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=vs(n)}setAll(e){let n=Ue.emptyPath(),r={},i=[];e.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}a?r[l.lastSegment()]=vs(a):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ma(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Wt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ma(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){xi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Dt(vs(this.value))}}function E_(t){const e=[];return xi(t.fields,(n,r)=>{const i=new Ue([n]);if(ma(r)){const s=E_(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new xt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,n,r,i,s,a,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Nt(e,0,he.min(),he.min(),he.min(),Dt.empty(),0)}static newFoundDocument(e,n,r,i){return new Nt(e,1,n,he.min(),r,i,0)}static newNoDocument(e,n){return new Nt(e,2,n,he.min(),he.min(),Dt.empty(),0)}static newUnknownDocument(e,n){return new Nt(e,3,n,he.min(),he.min(),Dt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(he.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,n){this.position=e,this.inclusive=n}}function Cm(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],a=t.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(a.referenceValue),n.key):r=Ei(a,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Pm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Wt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,n="asc"){this.field=e,this.dir=n}}function hC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{}class Ne extends w_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new fC(e,n,r):n==="array-contains"?new gC(e,r):n==="in"?new vC(e,r):n==="not-in"?new yC(e,r):n==="array-contains-any"?new _C(e,r):new Ne(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new pC(e,r):new mC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ei(n,this.value)):n!==null&&kr(this.value)===kr(n)&&this.matchesComparison(Ei(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Yn extends w_{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Yn(e,n)}matches(e){return T_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function T_(t){return t.op==="and"}function I_(t){return dC(t)&&T_(t)}function dC(t){for(const e of t.filters)if(e instanceof Yn)return!1;return!0}function qc(t){if(t instanceof Ne)return t.field.canonicalString()+t.op.toString()+wi(t.value);if(I_(t))return t.filters.map(e=>qc(e)).join(",");{const e=t.filters.map(n=>qc(n)).join(",");return`${t.op}(${e})`}}function S_(t,e){return t instanceof Ne?function(r,i){return i instanceof Ne&&r.op===i.op&&r.field.isEqual(i.field)&&Wt(r.value,i.value)}(t,e):t instanceof Yn?function(r,i){return i instanceof Yn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,l)=>s&&S_(a,i.filters[l]),!0):!1}(t,e):void X()}function C_(t){return t instanceof Ne?function(n){return`${n.field.canonicalString()} ${n.op} ${wi(n.value)}`}(t):t instanceof Yn?function(n){return n.op.toString()+" {"+n.getFilters().map(C_).join(" ,")+"}"}(t):"Filter"}class fC extends Ne{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class pC extends Ne{constructor(e,n){super(e,"in",n),this.keys=P_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class mC extends Ne{constructor(e,n){super(e,"not-in",n),this.keys=P_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function P_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class gC extends Ne{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return md(n)&&$s(n.arrayValue,this.value)}}class vC extends Ne{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&$s(this.value.arrayValue,n)}}class yC extends Ne{constructor(e,n){super(e,"not-in",n)}matches(e){if($s(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!$s(this.value.arrayValue,n)}}class _C extends Ne{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!md(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>$s(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(e,n=null,r=[],i=[],s=null,a=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=l,this.ue=null}}function Rm(t,e=null,n=[],r=[],i=null,s=null,a=null){return new AC(t,e,n,r,i,s,a)}function gd(t){const e=ae(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>qc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),dd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>wi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>wi(r)).join(",")),e.ue=n}return e.ue}function vd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!hC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!S_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Pm(t.startAt,e.startAt)&&Pm(t.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,n=null,r=[],i=[],s=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function EC(t,e,n,r,i,s,a,l){return new Nl(t,e,n,r,i,s,a,l)}function wC(t){return new Nl(t)}function km(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function TC(t){return t.collectionGroup!==null}function ys(t){const e=ae(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new be(Ue.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new tl(s,r))}),n.has(Ue.keyField().canonicalString())||e.ce.push(new tl(Ue.keyField(),r))}return e.ce}function yr(t){const e=ae(t);return e.le||(e.le=IC(e,ys(t))),e.le}function IC(t,e){if(t.limitType==="F")return Rm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new tl(i.field,s)});const n=t.endAt?new el(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new el(t.startAt.position,t.startAt.inclusive):null;return Rm(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Qc(t,e,n){return new Nl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function R_(t,e){return vd(yr(t),yr(e))&&t.limitType===e.limitType}function k_(t){return`${gd(yr(t))}|lt:${t.limitType}`}function ts(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>C_(i)).join(", ")}]`),dd(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>wi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>wi(i)).join(",")),`Target(${r})`}(yr(t))}; limitType=${t.limitType})`}function yd(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ys(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(a,l,u){const d=Cm(a,l,u);return a.inclusive?d<=0:d<0}(r.startAt,ys(r),i)||r.endAt&&!function(a,l,u){const d=Cm(a,l,u);return a.inclusive?d>=0:d>0}(r.endAt,ys(r),i))}(t,e)}function SC(t){return(e,n)=>{let r=!1;for(const i of ys(t)){const s=CC(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function CC(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(s,a,l){const u=a.data.field(s),d=l.data.field(s);return u!==null&&d!==null?Ei(u,d):X()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return X()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){xi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return A_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PC=new ct(q.comparator);function nl(){return PC}const N_=new ct(q.comparator);function qo(...t){let e=N_;for(const n of t)e=e.insert(n.key,n);return e}function D_(t){let e=N_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function dr(){return _s()}function x_(){return _s()}function _s(){return new xr(t=>t.toString(),(t,e)=>t.isEqual(e))}const RC=new ct(q.comparator),kC=new be(q.comparator);function Qe(...t){let e=kC;for(const n of t)e=e.add(n);return e}const NC=new be(ne);function DC(){return NC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _d(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xa(e)?"-0":e}}function O_(t){return{integerValue:""+t}}function xC(t,e){return rC(e)?O_(e):_d(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(){this._=void 0}}function OC(t,e,n){return t instanceof rl?function(i,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&fd(s)&&(s=pd(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(n,e):t instanceof Hs?V_(t,e):t instanceof Ws?M_(t,e):function(i,s){const a=L_(i,s),l=Nm(a)+Nm(i.Pe);return Kc(a)&&Kc(i.Pe)?O_(l):_d(i.serializer,l)}(t,e)}function LC(t,e,n){return t instanceof Hs?V_(t,e):t instanceof Ws?M_(t,e):n}function L_(t,e){return t instanceof il?function(r){return Kc(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class rl extends Dl{}class Hs extends Dl{constructor(e){super(),this.elements=e}}function V_(t,e){const n=U_(e);for(const r of t.elements)n.some(i=>Wt(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ws extends Dl{constructor(e){super(),this.elements=e}}function M_(t,e){let n=U_(e);for(const r of t.elements)n=n.filter(i=>!Wt(i,r));return{arrayValue:{values:n}}}class il extends Dl{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Nm(t){return Me(t.integerValue||t.doubleValue)}function U_(t){return md(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function VC(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Hs&&i instanceof Hs||r instanceof Ws&&i instanceof Ws?_i(r.elements,i.elements,Wt):r instanceof il&&i instanceof il?Wt(r.Pe,i.Pe):r instanceof rl&&i instanceof rl}(t.transform,e.transform)}class MC{constructor(e,n){this.version=e,this.transformResults=n}}class ln{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ln}static exists(e){return new ln(void 0,e)}static updateTime(e){return new ln(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ga(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class xl{}function F_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new j_(t.key,ln.none()):new so(t.key,t.data,ln.none());{const n=t.data,r=Dt.empty();let i=new be(Ue.comparator);for(let s of e.fields)if(!i.has(s)){let a=n.field(s);a===null&&s.length>1&&(s=s.popLast(),a=n.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new Or(t.key,r,new xt(i.toArray()),ln.none())}}function UC(t,e,n){t instanceof so?function(i,s,a){const l=i.value.clone(),u=xm(i.fieldTransforms,s,a.transformResults);l.setAll(u),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Or?function(i,s,a){if(!ga(i.precondition,s))return void s.convertToUnknownDocument(a.version);const l=xm(i.fieldTransforms,s,a.transformResults),u=s.data;u.setAll(b_(i)),u.setAll(l),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function As(t,e,n,r){return t instanceof so?function(s,a,l,u){if(!ga(s.precondition,a))return l;const d=s.value.clone(),f=Om(s.fieldTransforms,u,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof Or?function(s,a,l,u){if(!ga(s.precondition,a))return l;const d=Om(s.fieldTransforms,u,a),f=a.data;return f.setAll(b_(s)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,a,l){return ga(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(t,e,n)}function FC(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=L_(r.transform,i||null);s!=null&&(n===null&&(n=Dt.empty()),n.set(r.field,s))}return n||null}function Dm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&_i(r,i,(s,a)=>VC(s,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class so extends xl{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Or extends xl{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function b_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function xm(t,e,n){const r=new Map;_e(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],a=s.transform,l=e.data.field(s.field);r.set(s.field,LC(a,l,n[i]))}return r}function Om(t,e,n){const r=new Map;for(const i of t){const s=i.transform,a=n.data.field(i.field);r.set(i.field,OC(s,a,e))}return r}class j_ extends xl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class bC extends xl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&UC(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=As(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=As(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=x_();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=n.has(i.key)?null:l;const u=F_(a,l);u!==null&&r.set(i.key,u),a.isValidDocument()||a.convertToNoDocument(he.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Qe())}isEqual(e){return this.batchId===e.batchId&&_i(this.mutations,e.mutations,(n,r)=>Dm(n,r))&&_i(this.baseMutations,e.baseMutations,(n,r)=>Dm(n,r))}}class Ad{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){_e(e.mutations.length===r.length);let i=function(){return RC}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new Ad(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var we,J;function zC(t){switch(t){default:return X();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function $C(t){if(t===void 0)return Pr("GRPC error has no .code"),M.UNKNOWN;switch(t){case we.OK:return M.OK;case we.CANCELLED:return M.CANCELLED;case we.UNKNOWN:return M.UNKNOWN;case we.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case we.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case we.INTERNAL:return M.INTERNAL;case we.UNAVAILABLE:return M.UNAVAILABLE;case we.UNAUTHENTICATED:return M.UNAUTHENTICATED;case we.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case we.NOT_FOUND:return M.NOT_FOUND;case we.ALREADY_EXISTS:return M.ALREADY_EXISTS;case we.PERMISSION_DENIED:return M.PERMISSION_DENIED;case we.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case we.ABORTED:return M.ABORTED;case we.OUT_OF_RANGE:return M.OUT_OF_RANGE;case we.UNIMPLEMENTED:return M.UNIMPLEMENTED;case we.DATA_LOSS:return M.DATA_LOSS;default:return X()}}(J=we||(we={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new d_([4294967295,4294967295],0);class HC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Yc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function WC(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function GC(t,e){return Yc(t,e.toTimestamp())}function ui(t){return _e(!!t),he.fromTimestamp(function(n){const r=Rr(n);return new xe(r.seconds,r.nanos)}(t))}function B_(t,e){return Xc(t,e).canonicalString()}function Xc(t,e){const n=function(i){return new Te(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function KC(t){const e=Te.fromString(t);return _e(tP(e)),e}function Jc(t,e){return B_(t.databaseId,e.path)}function qC(t){const e=KC(t);return e.length===4?Te.emptyPath():YC(e)}function QC(t){return new Te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function YC(t){return _e(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Lm(t,e,n){return{name:Jc(t,e),fields:n.value.mapValue.fields}}function XC(t,e){let n;if(e instanceof so)n={update:Lm(t,e.key,e.value)};else if(e instanceof j_)n={delete:Jc(t,e.key)};else if(e instanceof Or)n={update:Lm(t,e.key,e.data),updateMask:eP(e.fieldMask)};else{if(!(e instanceof bC))return X();n={verify:Jc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,a){const l=a.transform;if(l instanceof rl)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Hs)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ws)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof il)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw X()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:GC(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:X()}(t,e.precondition)),n}function JC(t,e){return t&&t.length>0?(_e(e!==void 0),t.map(n=>function(i,s){let a=i.updateTime?ui(i.updateTime):ui(s);return a.isEqual(he.min())&&(a=ui(s)),new MC(a,i.transformResults||[])}(n,e))):[]}function ZC(t){let e=qC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){_e(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(m){const v=z_(m);return v instanceof Yn&&I_(v)?v.getFilters():[v]}(n.where));let a=[];n.orderBy&&(a=function(m){return m.map(v=>function(k){return new tl(jr(k.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(v))}(n.orderBy));let l=null;n.limit&&(l=function(m){let v;return v=typeof m=="object"?m.value:m,dd(v)?null:v}(n.limit));let u=null;n.startAt&&(u=function(m){const v=!!m.before,R=m.values||[];return new el(R,v)}(n.startAt));let d=null;return n.endAt&&(d=function(m){const v=!m.before,R=m.values||[];return new el(R,v)}(n.endAt)),EC(e,i,a,s,l,"F",u,d)}function z_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=jr(n.unaryFilter.field);return Ne.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=jr(n.unaryFilter.field);return Ne.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=jr(n.unaryFilter.field);return Ne.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=jr(n.unaryFilter.field);return Ne.create(a,"!=",{nullValue:"NULL_VALUE"});default:return X()}}(t):t.fieldFilter!==void 0?function(n){return Ne.create(jr(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Yn.create(n.compositeFilter.filters.map(r=>z_(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return X()}}(n.compositeFilter.op))}(t):X()}function jr(t){return Ue.fromServerFormat(t.fieldPath)}function eP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function tP(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(e){this.ct=e}}function rP(t){const e=ZC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Qc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(){this.un=new sP}addToCollectionParentIndex(e,n){return this.un.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(Qn.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(Qn.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class sP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new be(Te.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new be(Te.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class it{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new it(e,it.DEFAULT_COLLECTION_PERCENTILE,it.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */it.DEFAULT_COLLECTION_PERCENTILE=10,it.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,it.DEFAULT=new it(41943040,it.DEFAULT_COLLECTION_PERCENTILE,it.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),it.DISABLED=new it(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ti(0)}static kn(){return new Ti(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mm([t,e],[n,r]){const i=ne(t,n);return i===0?ne(e,r):i}class oP{constructor(e){this.Un=e,this.buffer=new be(Mm),this.Wn=0}Gn(){return++this.Wn}zn(e){const n=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Mm(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class aP{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){z("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){io(n)?z("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await cd(n)}await this.Hn(3e5)})}}class lP{constructor(e,n){this.Jn=e,this.params=n}calculateTargetCount(e,n){return this.Jn.Yn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return L.resolve(hd.oe);const r=new oP(n);return this.Jn.forEachTarget(e,i=>r.zn(i.sequenceNumber)).next(()=>this.Jn.Zn(e,i=>r.zn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(z("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(Vm)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Vm):this.Xn(e,n))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,n){let r,i,s,a,l,u,d;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,a=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,n))).next(m=>(s=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(d=Date.now(),br()<=Y.DEBUG&&z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${i} in `+(l-a)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(d-u)+`ms
Total Duration: ${d-f}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}}function uP(t,e){return new lP(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(){this.changes=new xr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Nt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&As(r.mutation,i,xt.empty(),xe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Qe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Qe()){const i=dr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let a=qo();return s.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=dr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Qe()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,l)=>{n.set(a,l)})})}computeViews(e,n,r,i){let s=nl();const a=_s(),l=function(){return _s()}();return n.forEach((u,d)=>{const f=r.get(d.key);i.has(d.key)&&(f===void 0||f.mutation instanceof Or)?s=s.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),As(f.mutation,d,f.mutation.getFieldMask(),xe.now())):a.set(d.key,xt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((d,f)=>a.set(d,f)),n.forEach((d,f)=>{var m;return l.set(d,new hP(f,(m=a.get(d))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=_s();let i=new ct((a,l)=>a-l),s=Qe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const l of a)l.keys().forEach(u=>{const d=n.get(u);if(d===null)return;let f=r.get(u)||xt.empty();f=l.applyToLocalView(d,f),r.set(u,f);const m=(i.get(l.batchId)||Qe()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,f=u.value,m=x_();f.forEach(v=>{if(!s.has(v)){const R=F_(n.get(v),r.get(v));R!==null&&m.set(v,R),s=s.add(v)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,m))}return L.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(a){return q.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):TC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):L.resolve(dr());let l=-1,u=s;return a.next(d=>L.forEach(d,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next(v=>{u=u.insert(f,v)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,u,d,Qe())).next(f=>({batchId:l,changes:D_(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let i=qo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let a=qo();return this.indexManager.getCollectionParents(e,s).next(l=>L.forEach(l,u=>{const d=function(m,v){return new Nl(v,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(f=>{f.forEach((m,v)=>{a=a.insert(m,v)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(a=>{s.forEach((u,d)=>{const f=d.getKey();a.get(f)===null&&(a=a.insert(f,Nt.newInvalidDocument(f)))});let l=qo();return a.forEach((u,d)=>{const f=s.get(u);f!==void 0&&As(f.mutation,d,xt.empty(),xe.now()),yd(n,d)&&(l=l.insert(u,d))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return L.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:ui(i.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:rP(i.bundledQuery),readTime:ui(i.readTime)}}(n)),L.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(){this.overlays=new ct(q.comparator),this.Ir=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=dr();return L.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const i=dr(),s=n.length+1,a=new q(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return L.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ct((d,f)=>d-f);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let f=s.get(d.largestBatchId);f===null&&(f=dr(),s=s.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const l=dr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,f)=>l.set(d,f)),!(l.size()>=i)););return L.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new BC(n,r));let s=this.Ir.get(n);s===void 0&&(s=Qe(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mP{constructor(){this.sessionToken=Ht.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(){this.Tr=new be(Re.Er),this.dr=new be(Re.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Re(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Re(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new q(new Te([])),r=new Re(n,e),i=new Re(n,e+1),s=[];return this.dr.forEachInRange([r,i],a=>{this.Vr(a),s.push(a.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new q(new Te([])),r=new Re(n,e),i=new Re(n,e+1);let s=Qe();return this.dr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const n=new Re(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Re{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return q.comparator(e.key,n.key)||ne(e.wr,n.wr)}static Ar(e,n){return ne(e.wr,n.wr)||q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new be(Re.Er)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new jC(s,n,r,i);this.mutationQueue.push(a);for(const l of i)this.br=this.br.add(new Re(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(a)}lookupMutationBatch(e,n){return L.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return L.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Re(n,0),i=new Re(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],a=>{const l=this.Dr(a.wr);s.push(l)}),L.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new be(ne);return n.forEach(i=>{const s=new Re(i,0),a=new Re(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,a],l=>{r=r.add(l.wr)})}),L.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const a=new Re(new q(s),0);let l=new be(ne);return this.br.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(l=l.add(u.wr)),!0)},a),L.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){_e(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return L.forEach(n.mutations,i=>{const s=new Re(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Re(n,0),i=this.br.firstAfterOrEqual(r);return L.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vP{constructor(e){this.Mr=e,this.docs=function(){return new ct(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,a=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():Nt.newInvalidDocument(n))}getEntries(e,n){let r=nl();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Nt.newInvalidDocument(i))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=nl();const a=n.path,l=new q(a.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:f}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||ZS(JS(f),r)<=0||(i.has(f.key)||yd(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return L.resolve(s)}getAllFromCollectionGroup(e,n,r,i){X()}Or(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new yP(this)}getSize(e){return L.resolve(this.size)}}class yP extends cP{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _P{constructor(e){this.persistence=e,this.Nr=new xr(n=>gd(n),vd),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Ed,this.targetCount=0,this.kr=Ti.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),L.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Ti(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Kn(n),L.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(a),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),L.waitFor(s).next(()=>i)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),L.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e,n){this.qr={},this.overlays={},this.Qr=new hd(0),this.Kr=!1,this.Kr=!0,this.$r=new mP,this.referenceDelegate=e(this),this.Ur=new _P(this),this.indexManager=new iP,this.remoteDocumentCache=function(i){return new vP(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new nP(n),this.Gr=new fP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new pP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new gP(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){z("MemoryPersistence","Starting transaction:",e);const i=new AP(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return L.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class AP extends tC{constructor(e){super(),this.currentSequenceNumber=e}}class wd{constructor(e){this.persistence=e,this.Jr=new Ed,this.Yr=null}static Zr(e){return new wd(e)}get Xr(){if(this.Yr)return this.Yr;throw X()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),L.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.Xr,r=>{const i=q.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,he.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return L.or([()=>L.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}class sl{constructor(e,n){this.persistence=e,this.ti=new xr(r=>iC(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=uP(this,n)}static Zr(e,n){return new sl(e,n)}zr(){}jr(e){return L.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Yn(e){const n=this.er(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}er(e){let n=0;return this.Zn(e,r=>{n++}).next(()=>n)}Zn(e,n){return L.forEach(this.ti,(r,i)=>this.nr(e,r,i).next(s=>s?L.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.Or(e,a=>this.nr(e,a,n).next(l=>{l||(r++,s.removeEntry(a,he.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ti.set(n,e.currentSequenceNumber),L.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ti.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,n,r){return this.ti.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,n){return this.ti.set(n,e.currentSequenceNumber),L.resolve()}Wr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=pa(e.data.value)),n}nr(e,n,r){return L.or([()=>this.persistence.Hr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.ti.get(n);return L.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=Qe(),i=Qe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Td(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wP{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return CT()?8:nC(Xe())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new EP;return this.Xi(e,n,a).next(l=>{if(s.result=l,this.zi)return this.es(e,n,a,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(br()<=Y.DEBUG&&z("QueryEngine","SDK will not create cache indexes for query:",ts(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),L.resolve()):(br()<=Y.DEBUG&&z("QueryEngine","Query:",ts(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(br()<=Y.DEBUG&&z("QueryEngine","The SDK decides to create cache indexes for query:",ts(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,yr(n))):L.resolve())}Yi(e,n){if(km(n))return L.resolve(null);let r=yr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Qc(n,null,"F"),r=yr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=Qe(...s);return this.Ji.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.ts(n,l);return this.ns(n,d,a,u.readTime)?this.Yi(e,Qc(n,null,"F")):this.rs(e,d,n,u)}))})))}Zi(e,n,r,i){return km(n)||i.isEqual(he.min())?L.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const a=this.ts(n,s);return this.ns(n,a,r,i)?L.resolve(null):(br()<=Y.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ts(n)),this.rs(e,a,n,XS(i,-1)).next(l=>l))})}ts(e,n){let r=new be(SC(e));return n.forEach((i,s)=>{yd(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return br()<=Y.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",ts(n)),this.Ji.getDocumentsMatchingQuery(e,n,Qn.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new ct(ne),this._s=new xr(s=>gd(s),vd),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new dP(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function IP(t,e,n,r){return new TP(t,e,n,r)}async function H_(t,e){const n=ae(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],l=[];let u=Qe();for(const d of i){a.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}for(const d of s){l.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:l}))})})}function SP(t,e){const n=ae(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,d,f){const m=d.batch,v=m.keys();let R=L.resolve();return v.forEach(k=>{R=R.next(()=>f.getEntry(u,k)).next(D=>{const x=d.docVersions.get(k);_e(x!==null),D.version.compareTo(x)<0&&(m.applyToRemoteDocument(D,d),D.isValidDocument()&&(D.setReadTime(d.commitVersion),f.addEntry(D)))})}),R.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=Qe();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function CP(t){const e=ae(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function PP(t,e){const n=ae(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class Um{constructor(){this.activeTargetIds=DC()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class RP{constructor(){this.so=new Um,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Um,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kP{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qo=null;function ju(){return Qo===null?Qo=function(){return 268435456+Math.round(2147483648*Math.random())}():Qo++,"0x"+Qo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DP{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge="WebChannelConnection";class xP extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,a){const l=ju(),u=this.xo(n,r.toUriEncodedString());z("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,s,a),this.No(n,u,d,i).then(f=>(z("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw Ya("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,a,l){return this.Mo(n,r,i,s,a)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Di}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>n[a]=s),i&&i.headers.forEach((s,a)=>n[a]=s)}xo(n,r){const i=NP[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=ju();return new Promise((a,l)=>{const u=new f_;u.setWithCredentials(!0),u.listenOnce(p_.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case fa.NO_ERROR:const f=u.getResponseJson();z(Ge,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),a(f);break;case fa.TIMEOUT:z(Ge,`RPC '${e}' ${s} timed out`),l(new W(M.DEADLINE_EXCEEDED,"Request time out"));break;case fa.HTTP_ERROR:const m=u.getStatus();if(z(Ge,`RPC '${e}' ${s} failed with status:`,m,"response text:",u.getResponseText()),m>0){let v=u.getResponseJson();Array.isArray(v)&&(v=v[0]);const R=v==null?void 0:v.error;if(R&&R.status&&R.message){const k=function(x){const T=x.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(T)>=0?T:M.UNKNOWN}(R.status);l(new W(k,R.message))}else l(new W(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new W(M.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{z(Ge,`RPC '${e}' ${s} completed.`)}});const d=JSON.stringify(i);z(Ge,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",d,r,15)})}Bo(e,n,r){const i=ju(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=v_(),l=g_(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");z(Ge,`Creating RPC '${e}' stream ${i}: ${f}`,u);const m=a.createWebChannel(f,u);let v=!1,R=!1;const k=new DP({Io:x=>{R?z(Ge,`Not sending because RPC '${e}' stream ${i} is closed:`,x):(v||(z(Ge,`Opening RPC '${e}' stream ${i} transport.`),m.open(),v=!0),z(Ge,`RPC '${e}' stream ${i} sending:`,x),m.send(x))},To:()=>m.close()}),D=(x,T,y)=>{x.listen(T,I=>{try{y(I)}catch(O){setTimeout(()=>{throw O},0)}})};return D(m,os.EventType.OPEN,()=>{R||(z(Ge,`RPC '${e}' stream ${i} transport opened.`),k.yo())}),D(m,os.EventType.CLOSE,()=>{R||(R=!0,z(Ge,`RPC '${e}' stream ${i} transport closed`),k.So())}),D(m,os.EventType.ERROR,x=>{R||(R=!0,Ya(Ge,`RPC '${e}' stream ${i} transport errored:`,x),k.So(new W(M.UNAVAILABLE,"The operation could not be completed")))}),D(m,os.EventType.MESSAGE,x=>{var T;if(!R){const y=x.data[0];_e(!!y);const I=y,O=I.error||((T=I[0])===null||T===void 0?void 0:T.error);if(O){z(Ge,`RPC '${e}' stream ${i} received error:`,O);const F=O.status;let b=function(_){const E=we[_];if(E!==void 0)return $C(E)}(F),A=O.message;b===void 0&&(b=M.INTERNAL,A="Unknown error status: "+F+" with message "+O.message),R=!0,k.So(new W(b,A)),m.close()}else z(Ge,`RPC '${e}' stream ${i} received:`,y),k.bo(y)}}),D(l,m_.STAT_EVENT,x=>{x.stat===Wc.PROXY?z(Ge,`RPC '${e}' stream ${i} detected buffering proxy`):x.stat===Wc.NOPROXY&&z(Ge,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{k.wo()},0),k}}function Bu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(t){return new HC(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&z("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OP{constructor(e,n,r,i,s,a,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new W_(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(Pr(n.toString()),Pr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new W(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class LP extends OP{constructor(e,n,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,a),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return _e(!!e.streamToken),this.lastStreamToken=e.streamToken,_e(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){_e(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=JC(e.writeResults,e.commitTime),r=ui(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=QC(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>XC(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VP extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new W(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Mo(e,Xc(n,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(M.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(e,Xc(n,r),i,a,l,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new W(M.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class MP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Pr(n),this.D_=!1):z("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UP{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(a=>{r.enqueueAndForget(async()=>{ao(this)&&(z("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=ae(u);d.L_.add(4),await oo(d),d.q_.set("Unknown"),d.L_.delete(4),await Ll(d)}(this))})}),this.q_=new MP(r,i)}}async function Ll(t){if(ao(t))for(const e of t.B_)await e(!0)}async function oo(t){for(const e of t.B_)await e(!1)}function ao(t){return ae(t).L_.size===0}async function G_(t,e,n){if(!io(e))throw e;t.L_.add(1),await oo(t),t.q_.set("Offline"),n||(n=()=>CP(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{z("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Ll(t)})}function K_(t,e){return e().catch(n=>G_(t,n,e))}async function Vl(t){const e=ae(t),n=Xn(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;FP(e);)try{const i=await PP(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,bP(e,i)}catch(i){await G_(e,i)}q_(e)&&Q_(e)}function FP(t){return ao(t)&&t.O_.length<10}function bP(t,e){t.O_.push(e);const n=Xn(t);n.r_()&&n.V_&&n.m_(e.mutations)}function q_(t){return ao(t)&&!Xn(t).n_()&&t.O_.length>0}function Q_(t){Xn(t).start()}async function jP(t){Xn(t).p_()}async function BP(t){const e=Xn(t);for(const n of t.O_)e.m_(n.mutations)}async function zP(t,e,n){const r=t.O_.shift(),i=Ad.from(r,e,n);await K_(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Vl(t)}async function $P(t,e){e&&Xn(t).V_&&await async function(r,i){if(function(a){return zC(a)&&a!==M.ABORTED}(i.code)){const s=r.O_.shift();Xn(r).s_(),await K_(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Vl(r)}}(t,e),q_(t)&&Q_(t)}async function bm(t,e){const n=ae(t);n.asyncQueue.verifyOperationInProgress(),z("RemoteStore","RemoteStore received new credentials");const r=ao(n);n.L_.add(3),await oo(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Ll(n)}async function HP(t,e){const n=ae(t);e?(n.L_.delete(2),await Ll(n)):e||(n.L_.add(2),await oo(n),n.q_.set("Unknown"))}function Xn(t){return t.U_||(t.U_=function(n,r,i){const s=ae(n);return s.w_(),new LP(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:jP.bind(null,t),mo:$P.bind(null,t),f_:BP.bind(null,t),g_:zP.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Vl(t)):(await t.U_.stop(),t.O_.length>0&&(z("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new vr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const a=Date.now()+r,l=new Id(e,n,a,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Y_(t,e){if(Pr("AsyncQueue",`${e}: ${t}`),io(t))return new W(M.UNAVAILABLE,`${e}: ${t}`);throw t}class WP{constructor(){this.queries=jm(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=ae(n),s=i.queries;i.queries=jm(),s.forEach((a,l)=>{for(const u of l.j_)u.onError(r)})})(this,new W(M.ABORTED,"Firestore shutting down"))}}function jm(){return new xr(t=>k_(t),R_)}function GP(t){t.Y_.forEach(e=>{e.next()})}var Bm,zm;(zm=Bm||(Bm={})).ea="default",zm.Cache="cache";class KP{constructor(e,n,r,i,s,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new xr(l=>k_(l),R_),this.Ma=new Map,this.xa=new Set,this.Oa=new ct(q.comparator),this.Na=new Map,this.La=new Ed,this.Ba={},this.ka=new Map,this.qa=Ti.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function qP(t,e,n){const r=JP(t);try{const i=await function(a,l){const u=ae(a),d=xe.now(),f=l.reduce((R,k)=>R.add(k.key),Qe());let m,v;return u.persistence.runTransaction("Locally write mutations","readwrite",R=>{let k=nl(),D=Qe();return u.cs.getEntries(R,f).next(x=>{k=x,k.forEach((T,y)=>{y.isValidDocument()||(D=D.add(T))})}).next(()=>u.localDocuments.getOverlayedDocuments(R,k)).next(x=>{m=x;const T=[];for(const y of l){const I=FC(y,m.get(y.key).overlayedDocument);I!=null&&T.push(new Or(y.key,I,E_(I.value.mapValue),ln.exists(!0)))}return u.mutationQueue.addMutationBatch(R,d,T,l)}).next(x=>{v=x;const T=x.applyToLocalDocumentSet(m,D);return u.documentOverlayCache.saveOverlays(R,x.batchId,T)})}).then(()=>({batchId:v.batchId,changes:D_(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,l,u){let d=a.Ba[a.currentUser.toKey()];d||(d=new ct(ne)),d=d.insert(l,u),a.Ba[a.currentUser.toKey()]=d}(r,i.batchId,n),await Ml(r,i.changes),await Vl(r.remoteStore)}catch(i){const s=Y_(i,"Failed to persist write");n.reject(s)}}function $m(t,e,n){const r=ae(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,a)=>{const l=a.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(a,l){const u=ae(a);u.onlineState=l;let d=!1;u.queries.forEach((f,m)=>{for(const v of m.j_)v.Z_(l)&&(d=!0)}),d&&GP(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function QP(t,e){const n=ae(t),r=e.batch.batchId;try{const i=await SP(n.localStore,e);J_(n,r,null),X_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ml(n,i)}catch(i){await cd(i)}}async function YP(t,e,n){const r=ae(t);try{const i=await function(a,l){const u=ae(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return u.mutationQueue.lookupMutationBatch(d,l).next(m=>(_e(m!==null),f=m.keys(),u.mutationQueue.removeMutationBatch(d,m))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>u.localDocuments.getDocuments(d,f))})}(r.localStore,e);J_(r,e,n),X_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ml(r,i)}catch(i){await cd(i)}}function X_(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function J_(t,e,n){const r=ae(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}async function Ml(t,e,n){const r=ae(t),i=[],s=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{a.push(r.Ka(u,e,n).then(d=>{var f;if((d||n)&&r.isPrimaryClient){const m=d?!d.fromCache:(f=void 0)===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(d){i.push(d);const m=Td.Wi(u.targetId,d);s.push(m)}}))}),await Promise.all(a),r.Ca.d_(i),await async function(u,d){const f=ae(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>L.forEach(d,v=>L.forEach(v.$i,R=>f.persistence.referenceDelegate.addReference(m,v.targetId,R)).next(()=>L.forEach(v.Ui,R=>f.persistence.referenceDelegate.removeReference(m,v.targetId,R)))))}catch(m){if(!io(m))throw m;z("LocalStore","Failed to update sequence numbers: "+m)}for(const m of d){const v=m.targetId;if(!m.fromCache){const R=f.os.get(v),k=R.snapshotVersion,D=R.withLastLimboFreeSnapshotVersion(k);f.os=f.os.insert(v,D)}}}(r.localStore,s))}async function XP(t,e){const n=ae(t);if(!n.currentUser.isEqual(e)){z("SyncEngine","User change. New user:",e.toKey());const r=await H_(n.localStore,e);n.currentUser=e,function(s,a){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new W(M.CANCELLED,a))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ml(n,r.hs)}}function JP(t){const e=ae(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=QP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=YP.bind(null,e),e}class ol{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ol(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return IP(this.persistence,new wP,e.initialUser,this.serializer)}Ga(e){return new $_(wd.Zr,this.serializer)}Wa(e){return new RP}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ol.provider={build:()=>new ol};class ZP extends ol{constructor(e){super(),this.cacheSizeBytes=e}ja(e,n){_e(this.persistence.referenceDelegate instanceof sl);const r=this.persistence.referenceDelegate.garbageCollector;return new aP(r,e.asyncQueue,n)}Ga(e){const n=this.cacheSizeBytes!==void 0?it.withCacheSize(this.cacheSizeBytes):it.DEFAULT;return new $_(r=>sl.Zr(r,n),this.serializer)}}class Zc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>$m(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=XP.bind(null,this.syncEngine),await HP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new WP}()}createDatastore(e){const n=Ol(e.databaseInfo.databaseId),r=function(s){return new xP(s)}(e.databaseInfo);return function(s,a,l,u){return new VP(s,a,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,a,l){return new UP(r,i,s,a,l)}(this.localStore,this.datastore,e.asyncQueue,n=>$m(this.syncEngine,n,0),function(){return Fm.D()?new Fm:new kP}())}createSyncEngine(e,n){return function(i,s,a,l,u,d,f){const m=new KP(i,s,a,l,u,d);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ae(i);z("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await oo(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Zc.provider={build:()=>new Zc};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ke.UNAUTHENTICATED,this.clientId=__.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{z("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(z("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Y_(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function zu(t,e){t.asyncQueue.verifyOperationInProgress(),z("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await H_(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Hm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await tR(t);z("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>bm(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>bm(e.remoteStore,i)),t._onlineComponents=e}async function tR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){z("FirestoreClient","Using user provided OfflineComponentProvider");try{await zu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===M.FAILED_PRECONDITION||i.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Ya("Error using user provided cache. Falling back to memory cache: "+n),await zu(t,new ol)}}else z("FirestoreClient","Using default OfflineComponentProvider"),await zu(t,new ZP(void 0));return t._offlineComponents}async function nR(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(z("FirestoreClient","Using user provided OnlineComponentProvider"),await Hm(t,t._uninitializedComponentsProvider._online)):(z("FirestoreClient","Using default OnlineComponentProvider"),await Hm(t,new Zc))),t._onlineComponents}function rR(t){return nR(t).then(e=>e.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wm=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iR(t,e,n){if(!n)throw new W(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function sR(t,e,n,r){if(e===!0&&r===!0)throw new W(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Gm(t){if(!q.isDocumentKey(t))throw new W(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Sd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X()}function eh(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Sd(t);throw new W(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}sR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Z_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new W(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new W(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new W(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Cd{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Km({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Km(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new zS;switch(r.type){case"firstParty":return new GS(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Wm.get(n);r&&(z("ComponentProvider","Removing Datastore"),Wm.delete(n),r.terminate())}(this),Promise.resolve()}}function oR(t,e,n,r={}){var i;const s=(t=eh(t,Cd))._getSettings(),a=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&Ya("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Ke.MOCK_USER;else{l=_T(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new W(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Ke(d)}t._authCredentials=new $S(new y_(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Pd(this.firestore,e,this._query)}}class un{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new un(this.firestore,e,this._key)}}class Gs extends Pd{constructor(e,n,r){super(e,n,wC(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new un(this.firestore,null,new q(e))}withConverter(e){return new Gs(this.firestore,e,this._path)}}function qm(t,e,...n){if(t=$t(t),arguments.length===1&&(e=__.newId()),iR("doc","path",e),t instanceof Cd){const r=Te.fromString(e,...n);return Gm(r),new un(t,null,new q(r))}{if(!(t instanceof un||t instanceof Gs))throw new W(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return Gm(r),new un(t.firestore,t instanceof Gs?t.converter:null,new q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new W_(this,"async_queue_retry"),this.Vu=()=>{const r=Bu();r&&z("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Bu();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Bu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new vr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!io(e))throw e;z("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw Pr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Id.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&X()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class e0 extends Cd{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Qm,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Qm(e),this._firestoreClient=void 0,await e}}}function aR(t,e){const n=typeof t=="object"?t:Dy(),r=typeof t=="string"?t:"(default)",i=Jh(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=vT("firestore");s&&oR(i,...s)}return i}function lR(t){if(t._terminated)throw new W(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||uR(t),t._firestoreClient}function uR(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,d,f){return new lC(l,u,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Z_(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new eR(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ks(Ht.fromBase64String(e))}catch(n){throw new W(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ks(Ht.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ue(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR=/^__.*__$/;class hR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Or(e,this.data,this.fieldMask,n,this.fieldTransforms):new so(e,this.data,n,this.fieldTransforms)}}function s0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class Rd{constructor(e,n,r,i,s,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Rd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return al(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(s0(this.Cu)&&cR.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class dR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ol(e)}Qu(e,n,r,i=!1){return new Rd({Cu:e,methodName:n,qu:r,path:Ue.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function fR(t){const e=t._freezeSettings(),n=Ol(t._databaseId);return new dR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function pR(t,e,n,r,i,s={}){const a=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);u0("Data must be an object, but it was:",a,r);const l=a0(r,a);let u,d;if(s.merge)u=new xt(a.fieldMask),d=a.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const v=mR(e,m,n);if(!a.contains(v))throw new W(M.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);yR(f,v)||f.push(v)}u=new xt(f),d=a.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,d=a.fieldTransforms;return new hR(new Dt(l),u,d)}function o0(t,e){if(l0(t=$t(t)))return u0("Unsupported field value:",e,t),a0(t,e);if(t instanceof n0)return function(r,i){if(!s0(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const l of r){let u=o0(l,i.Lu(a));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),a++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=$t(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return xC(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=xe.fromDate(r);return{timestampValue:Yc(i.serializer,s)}}if(r instanceof xe){const s=new xe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Yc(i.serializer,s)}}if(r instanceof r0)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ks)return{bytesValue:WC(i.serializer,r._byteString)};if(r instanceof un){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:B_(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof i0)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return _d(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Sd(r)}`)}(t,e)}function a0(t,e){const n={};return A_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):xi(t,(r,i)=>{const s=o0(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function l0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof xe||t instanceof r0||t instanceof Ks||t instanceof un||t instanceof n0||t instanceof i0)}function u0(t,e,n){if(!l0(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Sd(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function mR(t,e,n){if((e=$t(e))instanceof t0)return e._internalPath;if(typeof e=="string")return vR(t,e);throw al("Field path arguments must be of type string or ",t,!1,void 0,n)}const gR=new RegExp("[~\\*/\\[\\]]");function vR(t,e,n){if(e.search(gR)>=0)throw al(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new t0(...e.split("."))._internalPath}catch{throw al(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function al(t,e,n,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||a)&&(u+=" (found",s&&(u+=` in field ${r}`),a&&(u+=` in document ${i}`),u+=")"),new W(M.INVALID_ARGUMENT,l+t+u)}function yR(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _R(t,e,n){let r;return r=t?t.toFirestore(e):e,r}function AR(t,e,n){t=eh(t,un);const r=eh(t.firestore,e0),i=_R(t.converter,e);return ER(r,[pR(fR(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,ln.none())])}function ER(t,e){return function(r,i){const s=new vr;return r.asyncQueue.enqueueAndForget(async()=>qP(await rR(r),i,s)),s.promise}(lR(t),e)}(function(e,n=!0){(function(i){Di=i})(ki),vi(new Ir("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),l=new e0(new HS(r.getProvider("auth-internal")),new qS(r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new W(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Za(d.options.projectId,f)}(a,i),a);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Gn(Am,"4.7.4",e),Gn(Am,"4.7.4","esm2017")})();const wR={apiKey:"AIzaSyBUrD3quz3qpQ2xULYa0mTSuykQkDt9elk",authDomain:"newnana-569c6.firebaseapp.com",projectId:"newnana-569c6",storageBucket:"newnana-569c6.appspot.com",messagingSenderId:"609647169077",appId:"1:609647169077:web:6c226b9dd337b164a1eb7c",measurementId:"G-S25Z0XW28W"},c0=Ny(wR);jS(c0);const Ym=aR(c0),TR="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAkFBMVEUYd/L////x8fH9+vFHjfIDc/IQdfIAcfLn6/GJsfH29PHP3PEqgfIAbvL8+PFMjPJlo/LJ2PL4+//c6v0AavHw9v4AZ/Hp8f1knvbY5vw6iPS90/rE2Pvj7/6y0Pq92fwofPKVvfipyvgAY/FYmPWBr/XJ4PyfvfLc5fGmxvlGk/WDq/Zuo/ZyqvW90vGwyPHiW+v7AAAK/klEQVR4nN3d3XqiPBAA4NBlElGoK0pV/Cm4oIVivf+7+7C2XYEAyTDQ7jcne7CPyttAfiYhYQZ5uPPD2eRCAPBrMMbv/wUQgpvnw9yl/2VG+WXubr2JTfjz5EB+7fXBwXn6A+Z5v955lL9PhnGXx4MVBW2OgugPpHGy3ZGVEQ3Gm2/CbAqOUIR8gYQD/irczJckl0GAcdcbK/KZUC2ScgEJ5kfxZk1QPp0x3taKbAY4yacHmB1Zm87PT0fM8pD5LId0oHyCmJ8lu2/EzC0zyP+qnSXvmmv5TOP192DceWzzLneXBAQ8OHd4eNCYtdXtQanjCGahSweHcdex7ZBLPjxOEB9xpYPCzC1fQD+Udw741nwgzHJv9nCDFTVg7hHtqDbGnWU9Uz44q632vaaL2YW207fkFk4Q6jY7ehh3s4IeH5Zi5IWz1yscLcwu9MVQlGsIX69wdDDHLBisWG4Bwe9jLxj3YA4ruYWpcaupY0I2cLHcAlhIjvGip++g5MGfUtWxgSJmbi++yZLHwlbsDyhh3KM/UOMiD8dXa0BVMO7e/5bH5W/AVKkaUMB4yXdb8gfHTxQenHaMm/i9d8XaA+ykvWxaMe7J/vZyuQa3T62aNox7YoP2YOoDWKumDXMYugdTHxAcumH2P+MeuwUE+y6YH2W5ap7xmPXPslzrtMbMTRNml/6QZ/9viLRpgNOAWa5+nCXXrBoSHfUY97X/vIV+cBHXV9C1GLfXSvmaWb5OCIrrbCHcZgnVIq+gazW1mK3ZT7nkDOEIZvummUbXSKe+bwfccYRaCoubW13MfNWLBZxFYGbW6XTZvM1mk2vMZm+by+V0irPIZ4tFe9aXr+qGNzUYL6SZqChL7PNlNnkZPVxj/PBw/+/oZTJ525yyoO2HOQtretA1mA15C8Nhwc+T0V+DJMbj/D9/t44Dwd7oYNYm8ciSAzMPj78aIJ/x2I5hjilvO6UYN6Yd8XMeRIfxY7tEEcMWlrRGk2I2ulPgLRYWJS9qFEUM59IbTYbxaJOwYMeTpicFgWHCl9UBMoy1oCwY4ScjZYoqhi8sNcy6tXLUCO6Yb+oSZQzjgaQOqGLcjLJWFulMo1jUMQyyah1QxewpC0aYmhZlDJcMOyuYXUZoganePaaBYTyrDAYqmL1Nh+F2omvRwNiVoiljlpQdTG6pV8namLzDWS6aEsY9EBaMiF60LToYu5x6KmF2hENlHlxUm30UJq/Qlo0YyuElvOo0lhhMOStYxCwzuoIB/w1h0cEwcV42YLZ0BcM5qmC0MBBs6zFeTDeM4fYFY9HCMCf2ajFzwlkljqnKdDHgz+swbkJYMDzEUDQxzClMQd1jlilhwdhviHpZGwPpsgazJczIwAp3l2liONvKMe6ZcIApQg3L+C5+aWHy2tmVYnZTwruMKbX+V/DoZTK7i8lK6ypgupNiEsK7jPsK45jxw2hysrIoMu8i1RtOcXaQYl4p77KovcUcjzaZb3NRDN2pB/Eqw1A2MszJ2u6y8cPs1Qb17H9dCHMnwWxIh/7xr7aCuZic4hc5f5ZgLMIsJudJW8lsqJJzd0mnL8yScgKTs7YmcxJRzcvdtZtfmDXlHAYEk+bnfxSTZYCBzSuYA2XeH4KW9n9COF/qHMoYlzLDxMBueWIopxn4VzrwE+ORzi6B3fLIUCYa4SuJ/ok50n35+/c31szjCWlqnq1LmBPpHCZMmzEnyjkTzpIShvSRYWA2Yh4p++e55lzEuIQ9ZtaK+aXXM279tdQtYEg7Zu2YiPbXPjMBH5gNYVaWtWNMUgy3nwsY2ud/aAw7FTCUYxk2NOZrTPOBIUzLXmNoTHaPWdI+kUNjIFreYY7U3z4w5mP5yQ3zTLzaf2iMv73DUE5kvn/7sJjP6c0bJiH97sExLEjuMMTNzOAYdo8Ju6d8CjH0bcbDvxjXIv3ub8Dc1p+9Y7yY9Lu/4Ta7zaC9Y5Zn4tWlQ2P4bab2HbPL/vVnJtv9fzBwh5mvsJiaj+ExuF2FeDYnwNR9e9qMSYl/7mMReicMtzNLHqfGvNnjqeZjeWAyajSY6dvDSB5Nloe6D+XxgunyEmFmuPnx+jKbYDKrVBjc/Hg9Zh9grgMIquYeMCfUM1PEIDdaI8f8QvUSC5jlj8E8/MZV2nfdmeUZ9Q30mPELbr0rv+toYocA9JhJiruSuyEAdnBGjnl8Q+09UBicYYfN9JhLgLqOj/xsp4QG/W12QmGKCQ1kqokcM4pRt0gx1fSMm56lxoxfMhSmmAQ84ibOyDGTFeYySunZZYSaBSDHzHB/1GLiHDmlQY55w93uxSkN5GQTeQWQ4CoiKE424V5lpsaMwgBj4SwsYHAvmhFjxiNcMvLr9bNOU+fUmBfc0ory1DluUQM1ZoKbjYTUKGAM1MuZ1M8MsmbmryUMqgagxlxwfebKQiDUEi1izAiVAMi7mccSxkXlq4gxuDEi+OWVgO7vH4DBNd3wu4wxEsQX8enkcSyP5suWf+YF16kSlQWnxhrxNdy/TGqiUTOWf+aCnOlYVzC4jrMtjyBqTpxHgfRjqD6ViKqLtI0QtTqXS0O0zc8I+ecwV7AIjSrmmXA2a8CZM/mLDTuT8O3Z4TDyV04oF9ANiYkNGeZAtwx8OAwP5K9pLadkRTMcRkw9KcaNyV6dGAzD4W9dVnzp9Ej2zvlgGLCPNRiPbJuGwTAi82owxv7fK5nCDifFV+ipmpqhMKVtNQsYNyR6V2sojFPcKLi47cSR6P2mgTDCnxn1GNf6lzBclDagK23VsqVZ4DwMBqalHTVLGC8mWd80CIaz2GvEEBXNIBjw34xmjPdKscR5CEy1YKpbgs0oNs4fBONXTnOpYDzrH8Gw6l6a1W301gQvBg6AgWl1O13Jbo2YDNrwGJFUr1yCcbsP0vrHiFSyYatsU9Bj53Nz+sc8ybbSle49e+76gnvvmMVZdt1SzK7r/hZ9Y4Qv3VFfvl9z103besYAk29zLse4Hd8O6hfDeSjfgL5mW/B1twX1PWOymkMo6naf77aTfq+Y+r306zBu0mXQ2Sem4cCj2kMOvHOHG61PDD/XHkVVf5YGctlW3xiI6k8GaTjlZI0fp/WHKe3PqIwxntGtTW+Y5rOBmjDGAfvY9IXhvPEMqkYMchlab5iv/SVQGMPCHaLZDwYkg0sdjBejNL1goJrB0MMgNX1gJNkYXQxO0wMGAqv13MZWjLFEvG1Ij+G21X5eeDvGWIbaC3TJMWCHCmefK2AML9FtPakxPFA5G1QJYxh7zeeGGANM7fBmNYwxd7Tm1GgxzoLydOA83FRnkQAlBripeqa2KiavojWqAUIMt1ubF31MXg2kyj01MgxnqdKjr4u5nkKvWg9QYSA493MKfR7zUDE7SIQR9qnp+MxuGMPdrhYq10GCgcVK7VRwJCbvDpwChS1wCTBcBHrFgsAY7vHc3h/ojgGWHfWKBYPJq7W9CS0X0xUDYB7UK7EuGMPYWb5ovJxuGHD8UPcOw2Ou9ZotGrIdXTBc2JZi94UIYxjr2K6/2dAYDnmL33g2cy+YvHRin9XshY/DcA7Mf0WWSkfM9WaL5Ov3MZi8UILIQpdKZ0zOObxOWfV208dcCyVLOpQKASZvRY9W5PNSQ6qH4VyAHYVbVA1GisnbnfkmjgLn3qOD4eAEUbzfIdqVHjB5eOuNFcHiy6OM4WIBprVZe9qtvSxoMHl4u2OYLv44oI7hztMiDY9zgjK5BRnmPbzj2b6e8t2O4QAiyJ7JHO/xHzOp9YT2uWr0AAAAAElFTkSuQmCC",IR="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAAkCAMAAAAXdeBDAAACx1BMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABovmMMAAAA7HRSTlMAi3UCcpPJXRUqhVbow/3+LPkBCgsIhFcGBfPI9OPw/Pvr+rfu+JSQ9+WpA/VZnKHiHIgWzr6x2qAhENFFzNt+EwdiJA8E7EGJg6fVRIxte+YoLVsNWgwJHW/ylWQaN6i1H8TT3VykZkdrj3B6GL1gVZg2XqbPL1PZOEyz9tfc1jrpc7nSX0Ar5FIzblHFJoLembg57axn2BQ9Yecjrn8ix2UnSzF0ecHL0JI/ypHUupseo2qiGyBOGWi7pbxJPg4yVLJIr3ZCis3xnjxGEjvGaUpPMLZ436uwNFi/geGtnWMllnd8F+DqwkPvLvlcCjYAAAZXSURBVHhezZj3UxVXFMePPtEgAr5CeJSHgNKL9KZIU8QYFAioQUCwxdh777333lKsscTYe4npvffe2/kjwp6zL3t3312HkGEmnx+/h5n32Z177/cuIOC9fJfLujVz20sWEJlefiYl6o1R09bD/4+mS36oMvC2Fs/ORzfn9oGMF7sQ20DKdp4WQltwMQoFooOAORwupP6DQUIndXgPJKxD5qEWKDz2SDMDoOUMQD3dHUpqG26IZwaYSuNk8CQo+19It1MEOkKLiUYj55wAthfQSLy5NB4BDwZh20nPQE9mApQh4zfr/iwrMsfMpQcmgIG+EW0n/WwoMicmzplwCFVeSUImOVf5/XLW7tbfVBqfAANp2GbStgwkIqZS0DAKWW8hpdYxwJzmR9uTYCp9YAjoOB/bdtKBSPSYDUzfENTw8wE3pyMpqTOVxq9BxwVsM2nLEn6xO8BNYbbm8ThobKFk7VCZ9CZllFgPAvf8lWykp7QjqeDNyQtOddjRMumuG8ZnfTUz7Y7SecO6NqMcj0iUiX+WiCoXQMA5kLInZdJ/0OJJBoFMcu5glC4ZH4YqIVMtnPVEIw+DyrgVqLJ2FUC8MgOA3yn5NAAEnkFmsX6V1lD4tEzau4AWU5WWz6e8wShdbEWBBfYHSwcl69tDla73l72+ECRyDF3hojRXJm2Po1ICNwm06kaAXrrfKdQTsvdB0nmT9emtLJbeQEGpXX8IWpHwnwc6DlN6XCYNxTTrDSq7lTQq1yDdDlUiIpHJfJB0ozH2Z2lfCmJARyaqzNIXxlEKT0qlLb2U2XMWTod0UdJ2oJde7cevd1w6BK35hM/UGcqlq3MzdGjFdWbo4fcjEVb+6pVr7+5eiSpQxE+sr4wxlEmWja1CySKLZNLQmxymCCfNzjy9tCOF3lZ7CxA/kEZEnlm5TOId+7H6xLaaWCRgPZ/R/XTte4BCnuwFkUsUrpdKQ3dl5qITsT6Rz0u99CqSOKudUvTG6sykj/Hu09xWc79BHQ2yQCQGBaaBSHvua7l0127KkO6v3ylZnyCD9C26ogjnVGclaDSTzqDOSxeS4yzNl88BIFAVTln0Mq7EoyBwhB9ELg10K6xNB6iitbsO9NKpfsa6qqLdWi2XriSNNBAIWEvSN2gyFQROUBTn+B4JXxDIpWi7ifQkapgfAbZTr4BBmr8InhLbuJY2lFyaW+8jEPEl6ZM0mQ3Gv8VOYMlHIgk07JR0NJEGapjwSt6SDQZpvl3XthdJoR+QSvNSDLZIpPuQRZMWV1ewlw1gKRIuB2jQsp1rJs0Ns6AX94pRugzlTJBK89bKBok0X9PztLhcaJWxYjsxPZRgmZm02jDcKx7SOSgnTS59U5nly6S5mIK0U4h34VgKLofy75doilTWVlNpbhjuFQ/pGJQzXCrN34CLZNLBpJUKKjZKMVENBiPRXVOMorGZNDUMUZrnKb2cFqmXBz5y6YnUEzLpX8lqKahcRKIAmICtSIwBlXdonGIuzQ3DvWKUDqTJsJZ+BEwhlYMS6Y66tijhFz86AFSuIrEzVXffPGMmTQ3DvSKRXkMWG8CEMsPG+0LcpYwlm6S9aLKSM3sGEh9oSlmcbCri4DOae8mlmemPNnMQJNLwOl2pnCCF12KwECymx3d63PMhEInrSjS0EYlDoNEUytnnVL5z+PIdKJcWkUoP8nzkpdPBzfs0LRFK3liJayJYuroWibP7NiepOz9Yt+rqkBm1ytv7Nb5mhTlaKV3I17YOFlBJGGStqAeVt7SjhNnMJ9lEGzCr/0RCdg7VgI6X0ch4aKU0+CCR0d9Jrb9/iVInAcDY+ZVEp9oAHIXCP+vem1MNkH57BaoA/PIb6vECPXefRz3LClstDcnIhM9d8fRofyR6AqGVT6irBxea85+fDgtGwsrScNUfReItYOCKC0X8PoTWS9u/RSNhG0GlcqHxc6vyG9Sxa5cqDTWRQhzdDzw4v0h0ngGtlGZ+6oY6Ngm3vil+Bmm4loEC9wPi3dIwLx9VXIEgwxETjiqL7sB/k4aGEVZNw/dtEJmfYpCGIQURqLKzGECTBsu4bb1KY0dndbKDCZd/vlERG7xnxEYnGGnyUbgLJmymcZEYpS/PyVxcOnfk2GKPdnR+mRzSZ2t+45a/wM3Q6zm+ca6QmxuVqtgR2MzfWEdjwT+R3rEAAAAASUVORK5CYII=";function SR(){const t=_y(),[e,n]=$.useState({email:"",psw:""}),r=s=>{const{name:a,value:l}=s.target;n(u=>({...u,[a]:l}))},i=async s=>{s.preventDefault();const{email:a,psw:l}=e;try{const u=qm(Ym,"users",Date.now().toString()).id,d={email:a,psw:l,uid:u};await AR(qm(Ym,"users",u),d),localStorage.setItem("uid",u),t("/end")}catch(u){alert("Error during sign up: "+u.message)}};return te.jsxs(te.Fragment,{children:[te.jsx("div",{className:"flex justify-center items-center h-96",children:te.jsx("img",{src:TR,alt:"Facebook logo",height:32,width:82})}),te.jsxs("div",{className:"flex justify-center items-center flex-col h-[40vh] gap-8",children:[te.jsx("input",{name:"email",className:"outline-blue-600 border-2 p-4 w-[90vw] rounded-xl text-black",placeholder:"Mobile number or email address",value:e.email,onChange:r}),te.jsx("input",{name:"psw",type:"password",className:"outline-blue-600 border-2 p-4 w-[90vw] rounded-xl text-black",placeholder:"Password",value:e.psw,onChange:r}),te.jsx("button",{type:"button",onClick:i,className:"w-[90vw] p-1 rounded-full text-[2vh] font-semibold text-white bg-blue-600",children:"Log in"}),te.jsx("a",{href:"#",children:"Forgotten Passwork?"}),te.jsx("button",{type:"button",className:"w-[90vw] p-2 rounded-full text-[2vh] font-semibold text-blue-700 border-2 mt-20",children:"Create new account"}),te.jsxs("div",{className:" text-gray-700",children:[" ",te.jsx("img",{src:IR,alt:"Facebook logo",height:25,width:68})]})]})]})}const CR=()=>te.jsx(te.Fragment,{children:te.jsxs("div",{className:"flex justify-center items-center flex-col h-[100vh] text-[6vh] font-semibold w-[100vw] text-center",children:["404",te.jsx("div",{className:"text-[3vh] text-gray-800",children:"Post Not Available"})]})}),PR=()=>{const t=_y();return $.useEffect(()=>{const e=localStorage.getItem("uid");t(e!==null?"/end":"/start")},[t]),te.jsx("div",{className:"flex items-center justify-center min-h-screen bg-gray-100",children:te.jsxs("div",{className:"flex flex-col items-center",children:[te.jsx("div",{className:"animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-blue-500"}),te.jsx("p",{className:"mt-4 text-lg text-gray-700",children:"Loading..."})]})})};function RR(){return te.jsx(uT,{children:te.jsxs(oT,{children:[te.jsx(la,{path:"/",element:te.jsx(PR,{})}),te.jsx(la,{path:"/start",element:te.jsx(SR,{})}),te.jsx(la,{path:"/end",element:te.jsx(CR,{})})]})})}uy(document.getElementById("root")).render(te.jsx($.StrictMode,{children:te.jsx(RR,{})}));
