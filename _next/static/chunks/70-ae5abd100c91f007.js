(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[70],{1739:function(e,t,n){var r=0/0,o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,f="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,l="object"==typeof self&&self&&self.Object===Object&&self,s=f||l||Function("return this")(),d=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return s.Date.now()};function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function w(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==d.call(t))return r;if(y(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=y(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var f=u.test(e);return f||a.test(e)?c(e.slice(2),f?2:8):i.test(e)?r:+e}e.exports=function(e,t,n){var r,o,i,u,a,c,f=0,l=!1,s=!1,d=!0;if("function"!=typeof e)throw TypeError("Expected a function");function b(t){var n=r,i=o;return r=o=void 0,f=t,u=e.apply(i,n)}function h(e){var n=e-c,r=e-f;return void 0===c||n>=t||n<0||s&&r>=i}function E(){var e,n,r,o=p();if(h(o))return m(o);a=setTimeout(E,(e=o-c,n=o-f,r=t-e,s?g(r,i-n):r))}function m(e){return(a=void 0,d&&r)?b(e):(r=o=void 0,u)}function k(){var e,n=p(),i=h(n);if(r=arguments,o=this,c=n,i){if(void 0===a)return f=e=c,a=setTimeout(E,t),l?b(e):u;if(s)return a=setTimeout(E,t),b(c)}return void 0===a&&(a=setTimeout(E,t)),u}return t=w(t)||0,y(n)&&(l=!!n.leading,i=(s="maxWait"in n)?v(w(n.maxWait)||0,t):i,d="trailing"in n?!!n.trailing:d),k.cancel=function(){void 0!==a&&clearTimeout(a),f=0,r=c=o=a=void 0},k.flush=function(){return void 0===a?u:m(p())},k}},5070:function(e,t,n){"use strict";n.d(t,{_:function(){return a}});var r=n(2265);n(1739);var o="undefined"!=typeof window?r.useLayoutEffect:r.useEffect;function i(e,t,n,i){let u=(0,r.useRef)(t);o(()=>{u.current=t},[t]),(0,r.useEffect)(()=>{let t=(null==n?void 0:n.current)??window;if(!(t&&t.addEventListener))return;let r=e=>{u.current(e)};return t.addEventListener(e,r,i),()=>{t.removeEventListener(e,r,i)}},[e,n,i])}var u="undefined"==typeof window;function a(e,t,n={}){let{initializeWithValue:a=!0}=n,c=(0,r.useCallback)(e=>n.serializer?n.serializer(e):JSON.stringify(e),[n]),f=(0,r.useCallback)(e=>{let r;if(n.deserializer)return n.deserializer(e);if("undefined"===e)return;let o=t instanceof Function?t():t;try{r=JSON.parse(e)}catch(e){return console.error("Error parsing JSON:",e),o}return r},[n,t]),l=(0,r.useCallback)(()=>{let n=t instanceof Function?t():t;if(u)return n;try{let t=window.localStorage.getItem(e);return t?f(t):n}catch(t){return console.warn(`Error reading localStorage key \u201C${e}\u201D:`,t),n}},[t,e,f]),[s,d]=(0,r.useState)(()=>a?l():t instanceof Function?t():t),v=function(e){let t=(0,r.useRef)(()=>{throw Error("Cannot call an event handler while rendering.")});return o(()=>{t.current=e},[e]),(0,r.useCallback)((...e)=>t.current(...e),[t])}(t=>{u&&console.warn(`Tried setting localStorage key \u201C${e}\u201D even though environment is not a client`);try{let n=t instanceof Function?t(l()):t;window.localStorage.setItem(e,c(n)),d(n),window.dispatchEvent(new StorageEvent("local-storage",{key:e}))}catch(t){console.warn(`Error setting localStorage key \u201C${e}\u201D:`,t)}});(0,r.useEffect)(()=>{d(l())},[e]);let g=(0,r.useCallback)(t=>{null!=t&&t.key&&t.key!==e||d(l())},[e,l]);return i("storage",g),i("local-storage",g),[s,v]}}}]);