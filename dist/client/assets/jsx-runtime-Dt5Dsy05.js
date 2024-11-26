function L(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const f=Object.getOwnPropertyDescriptor(r,o);f&&Object.defineProperty(e,o,f.get?f:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var ce=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function M(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function se(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,o.get?o:{enumerable:!0,get:function(){return e[r]}})}),n}var $={exports:{}},v={},k={exports:{}},u={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=Symbol.for("react.element"),U=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),z=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),H=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),J=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),w=Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=w&&e[w]||e["@@iterator"],typeof e=="function"?e:null)}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,C={};function p(e,t,n){this.props=e,this.context=t,this.refs=C,this.updater=n||P}p.prototype.isReactComponent={};p.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};p.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function I(){}I.prototype=p.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=C,this.updater=n||P}var S=b.prototype=new I;S.constructor=b;x(S,p.prototype);S.isPureReactComponent=!0;var O=Array.isArray,T=Object.prototype.hasOwnProperty,g={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function A(e,t,n){var r,o={},f=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(f=""+t.key),t)T.call(t,r)&&!D.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var c=Array(s),a=0;a<s;a++)c[a]=arguments[a+2];o.children=c}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:y,type:e,key:f,ref:i,props:o,_owner:g.current}}function Q(e,t){return{$$typeof:y,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function E(e){return typeof e=="object"&&e!==null&&e.$$typeof===y}function X(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var j=/\/+/g;function h(e,t){return typeof e=="object"&&e!==null&&e.key!=null?X(""+e.key):t.toString(36)}function _(e,t,n,r,o){var f=typeof e;(f==="undefined"||f==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(f){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case y:case U:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+h(i,0):r,O(o)?(n="",e!=null&&(n=e.replace(j,"$&/")+"/"),_(o,t,n,"",function(a){return a})):o!=null&&(E(o)&&(o=Q(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(j,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",O(e))for(var s=0;s<e.length;s++){f=e[s];var c=r+h(f,s);i+=_(f,t,n,c,o)}else if(c=K(e),typeof c=="function")for(e=c.call(e),s=0;!(f=e.next()).done;)f=f.value,c=r+h(f,s++),i+=_(f,t,n,c,o);else if(f==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function d(e,t,n){if(e==null)return e;var r=[],o=0;return _(e,r,"","",function(f){return t.call(n,f,o++)}),r}function Z(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var l={current:null},m={transition:null},ee={ReactCurrentDispatcher:l,ReactCurrentBatchConfig:m,ReactCurrentOwner:g};function N(){throw Error("act(...) is not supported in production builds of React.")}u.Children={map:d,forEach:function(e,t,n){d(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return d(e,function(){t++}),t},toArray:function(e){return d(e,function(t){return t})||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};u.Component=p;u.Fragment=V;u.Profiler=z;u.PureComponent=b;u.StrictMode=q;u.Suspense=G;u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ee;u.act=N;u.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=x({},e.props),o=e.key,f=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(f=t.ref,i=g.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)T.call(t,c)&&!D.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&s!==void 0?s[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){s=Array(c);for(var a=0;a<c;a++)s[a]=arguments[a+2];r.children=s}return{$$typeof:y,type:e.type,key:o,ref:f,props:r,_owner:i}};u.createContext=function(e){return e={$$typeof:H,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:B,_context:e},e.Consumer=e};u.createElement=A;u.createFactory=function(e){var t=A.bind(null,e);return t.type=e,t};u.createRef=function(){return{current:null}};u.forwardRef=function(e){return{$$typeof:W,render:e}};u.isValidElement=E;u.lazy=function(e){return{$$typeof:Y,_payload:{_status:-1,_result:e},_init:Z}};u.memo=function(e,t){return{$$typeof:J,type:e,compare:t===void 0?null:t}};u.startTransition=function(e){var t=m.transition;m.transition={};try{e()}finally{m.transition=t}};u.unstable_act=N;u.useCallback=function(e,t){return l.current.useCallback(e,t)};u.useContext=function(e){return l.current.useContext(e)};u.useDebugValue=function(){};u.useDeferredValue=function(e){return l.current.useDeferredValue(e)};u.useEffect=function(e,t){return l.current.useEffect(e,t)};u.useId=function(){return l.current.useId()};u.useImperativeHandle=function(e,t,n){return l.current.useImperativeHandle(e,t,n)};u.useInsertionEffect=function(e,t){return l.current.useInsertionEffect(e,t)};u.useLayoutEffect=function(e,t){return l.current.useLayoutEffect(e,t)};u.useMemo=function(e,t){return l.current.useMemo(e,t)};u.useReducer=function(e,t,n){return l.current.useReducer(e,t,n)};u.useRef=function(e){return l.current.useRef(e)};u.useState=function(e){return l.current.useState(e)};u.useSyncExternalStore=function(e,t,n){return l.current.useSyncExternalStore(e,t,n)};u.useTransition=function(){return l.current.useTransition()};u.version="18.3.1";k.exports=u;var R=k.exports;const te=M(R),le=L({__proto__:null,default:te},[R]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var re=R,ne=Symbol.for("react.element"),oe=Symbol.for("react.fragment"),ue=Object.prototype.hasOwnProperty,fe=re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ie={key:!0,ref:!0,__self:!0,__source:!0};function F(e,t,n){var r,o={},f=null,i=null;n!==void 0&&(f=""+n),t.key!==void 0&&(f=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)ue.call(t,r)&&!ie.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:ne,type:e,key:f,ref:i,props:o,_owner:fe.current}}v.Fragment=oe;v.jsx=F;v.jsxs=F;$.exports=v;var ae=$.exports;export{le as R,te as a,se as b,ce as c,M as g,ae as j,R as r};
