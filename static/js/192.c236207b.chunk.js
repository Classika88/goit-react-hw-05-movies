(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[192],{227:function(e,t,n){"use strict";n.d(t,{D:function(){return c},H:function(){return f}});var r,o,i=n(168),u=n(1087),a=n(6444),c=a.ZP.h1(r||(r=(0,i.Z)(["\n  color: #000;\n  padding-left: 40px;\n  font-weight: 700;\n  font-size: 24px;\n"]))),f=(0,a.ZP)(u.OL)(o||(o=(0,i.Z)(["\n  font-size: 20px;\n  margin-bottom: 20px;\n  display: block;\n  color: #2b4749;\n"])))},6482:function(e,t,n){"use strict";n.d(t,{O:function(){return c}});n(2791);var r=n(1087),o=n(7689),i=n(227),u=n(184),a=function(e){var t=e.name,n=e.id,a=(0,o.TH)();return(0,u.jsx)(i.H,{children:(0,u.jsx)(r.OL,{to:"/movies/".concat(n),state:{from:a},children:t})})},c=function(e){var t=e.movies;return(0,u.jsx)("ul",{children:t.map((function(e){var t=e.id,n=e.original_title;return(0,u.jsx)(a,{name:n,id:t},t)}))})}},5192:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return O}});var r,o,i=n(5861),u=n(9439),a=n(7757),c=n.n(a),f=n(2791),s=n(1087),l=n(168),p=n(6444),v=n(3628),y=(0,p.ZP)(v.DebounceInput)(r||(r=(0,l.Z)(["\n  width: 200px;\n  margin-right: 10px;\n  font-size: 20px;\n  padding: 10px;\n"]))),d=p.ZP.form(o||(o=(0,l.Z)(["\n  margin-bottom: 40px;\n  margin-top: 40px;\n"]))),b=n(184);function h(){var e=(0,s.lr)(),t=(0,u.Z)(e,2),n=t[0],r=t[1],o=n.get("query");return(0,b.jsx)("div",{children:(0,b.jsx)(d,{onSubmit:function(e){e.preventDefault()},children:(0,b.jsx)(y,{onChange:function(e){var t=e.target.value;r({query:t})},debounceTimeout:500,type:"text",name:"query",autoComplete:"off",autoFocus:!0,value:o,placeholder:"Search movie..."})})})}var m=n(9555),g=n(6482),w=n(3521),O=function(){var e=(0,f.useState)([]),t=(0,u.Z)(e,2),n=t[0],r=t[1],o=(0,f.useState)(!1),a=(0,u.Z)(o,2),l=a[0],p=a[1],v=(0,f.useState)(""),y=(0,u.Z)(v,2),d=y[0],O=y[1],j=(0,s.lr)(),x=(0,u.Z)(j,1)[0].get("query");return(0,f.useEffect)((function(){if(x){var e=function(){var e=(0,i.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,p(!0),e.next=4,(0,m.gW)(x);case 4:if((t=e.sent).length){e.next=8;break}return O("Sorry. There are no movies"),e.abrupt("return");case 8:r(t),O(""),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),O(e.t0.message);case 15:return e.prev=15,p(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[0,12,15,18]])})));return function(){return e.apply(this,arguments)}}();e()}}),[x]),(0,b.jsxs)("div",{children:[(0,b.jsx)(h,{}),!l&&!d&&n&&(0,b.jsx)(g.O,{movies:n}),l&&!d&&(0,b.jsx)(w.a,{})]})}},9555:function(e,t,n){"use strict";n.d(t,{Cp:function(){return c},fG:function(){return l},fI:function(){return p},gW:function(){return f},s9:function(){return s}});var r=n(5861),o=n(7757),i=n.n(o),u=n(1912);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var a="63801254b5c460a3de0676d2e1a253d2",c=function(){var e=(0,r.Z)(i().mark((function e(){var t,n,r,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={api_key:a,language:"en-US"},e.next=3,u.Z.get("/trending/movie/day",{params:t});case 3:return n=e.sent,r=n.data,o=r.results.map((function(e){return{id:e.id,original_title:e.original_title}})),e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r,o,c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={query:t,api_key:a},e.next=3,u.Z.get("/search/movie",{params:n});case 3:return r=e.sent,o=r.data,c=o.results.map((function(e){return{id:e.id,original_title:e.original_title}})),e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r,o,c,f,s,l,p,y;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={api_key:a,language:"en-US"},e.next=3,u.Z.get("/movie/".concat(t),{params:n});case 3:return r=e.sent,o=r.data,c=o.poster_path,f=o.original_title,s=o.release_date,l=o.vote_average,p=o.overview,y=o.genres,e.abrupt("return",{poster_path:v(c),original_title:f,release_date:s.slice(0,4),vote_average:l.toFixed(1),overview:p,genres:y.map((function(e){return e.name})).join(", ")});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r,o,c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={api_key:a,language:"en-US"},e.next=3,u.Z.get("/movie/".concat(t,"/credits"),{params:n});case 3:return r=e.sent,o=r.data,c=o.cast.map((function(e){var t=e.id,n=e.name,r=e.profile_path;return{id:t,name:n,profile_path:v(r)}})),e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r,o,c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={api_key:a,language:"en-US"},e.next=3,u.Z.get("/movie/".concat(t,"/reviews"),{params:n});case 3:return r=e.sent,o=r.data,c=o.results.map((function(e){return{id:e.id,author:e.author,content:e.content}})),e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(e){return"https://image.tmdb.org/t/p/w500"+e}},5095:function(e,t,n){var r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,c="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,f="object"==typeof self&&self&&self.Object===Object&&self,s=c||f||Function("return this")(),l=Object.prototype.toString,p=Math.max,v=Math.min,y=function(){return s.Date.now()};function d(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(d(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=d(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||u.test(e)?a(e.slice(2),n?2:8):o.test(e)?NaN:+e}e.exports=function(e,t,n){var r,o,i,u,a,c,f=0,s=!1,l=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var n=r,i=o;return r=o=void 0,f=t,u=e.apply(i,n)}function g(e){return f=e,a=setTimeout(O,t),s?m(e):u}function w(e){var n=e-c;return void 0===c||n>=t||n<0||l&&e-f>=i}function O(){var e=y();if(w(e))return j(e);a=setTimeout(O,function(e){var n=t-(e-c);return l?v(n,i-(e-f)):n}(e))}function j(e){return a=void 0,h&&r?m(e):(r=o=void 0,u)}function x(){var e=y(),n=w(e);if(r=arguments,o=this,c=e,n){if(void 0===a)return g(c);if(l)return a=setTimeout(O,t),m(c)}return void 0===a&&(a=setTimeout(O,t)),u}return t=b(t)||0,d(n)&&(s=!!n.leading,i=(l="maxWait"in n)?p(b(n.maxWait)||0,t):i,h="trailing"in n?!!n.trailing:h),x.cancel=function(){void 0!==a&&clearTimeout(a),f=0,r=c=o=a=void 0},x.flush=function(){return void 0===a?u:j(y())},x}},6674:function(e,t,n){"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.DebounceInput=void 0;var o=a(n(2791)),i=a(n(5095)),u=["element","onChange","value","minLength","debounceTimeout","forceNotifyByEnter","forceNotifyOnBlur","onKeyDown","onBlur","inputRef"];function a(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b(e);if(t){var o=b(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}function y(e,t){if(t&&("object"===r(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return d(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(f,e);var t,n,r,a=v(f);function f(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),h(d(t=a.call(this,e)),"onChange",(function(e){e.persist();var n=t.state.value,r=t.props.minLength;t.setState({value:e.target.value},(function(){var o=t.state.value;o.length>=r?t.notify(e):n.length>o.length&&t.notify(s(s({},e),{},{target:s(s({},e.target),{},{value:""})}))}))})),h(d(t),"onKeyDown",(function(e){"Enter"===e.key&&t.forceNotify(e);var n=t.props.onKeyDown;n&&(e.persist(),n(e))})),h(d(t),"onBlur",(function(e){t.forceNotify(e);var n=t.props.onBlur;n&&(e.persist(),n(e))})),h(d(t),"createNotifier",(function(e){if(e<0)t.notify=function(){return null};else if(0===e)t.notify=t.doNotify;else{var n=(0,i.default)((function(e){t.isDebouncing=!1,t.doNotify(e)}),e);t.notify=function(e){t.isDebouncing=!0,n(e)},t.flush=function(){return n.flush()},t.cancel=function(){t.isDebouncing=!1,n.cancel()}}})),h(d(t),"doNotify",(function(){var e=t.props.onChange;e.apply(void 0,arguments)})),h(d(t),"forceNotify",(function(e){var n=t.props.debounceTimeout;if(t.isDebouncing||!(n>0)){t.cancel&&t.cancel();var r=t.state.value,o=t.props.minLength;r.length>=o?t.doNotify(e):t.doNotify(s(s({},e),{},{target:s(s({},e.target),{},{value:r})}))}})),t.isDebouncing=!1,t.state={value:"undefined"===typeof e.value||null===e.value?"":e.value};var n=t.props.debounceTimeout;return t.createNotifier(n),t}return t=f,(n=[{key:"componentDidUpdate",value:function(e){if(!this.isDebouncing){var t=this.props,n=t.value,r=t.debounceTimeout,o=e.debounceTimeout,i=e.value,u=this.state.value;"undefined"!==typeof n&&i!==n&&u!==n&&this.setState({value:n}),r!==o&&this.createNotifier(r)}}},{key:"componentWillUnmount",value:function(){this.flush&&this.flush()}},{key:"render",value:function(){var e,t,n=this.props,r=n.element,i=(n.onChange,n.value,n.minLength,n.debounceTimeout,n.forceNotifyByEnter),a=n.forceNotifyOnBlur,f=n.onKeyDown,l=n.onBlur,p=n.inputRef,v=c(n,u),y=this.state.value;e=i?{onKeyDown:this.onKeyDown}:f?{onKeyDown:f}:{},t=a?{onBlur:this.onBlur}:l?{onBlur:l}:{};var d=p?{ref:p}:{};return o.default.createElement(r,s(s(s(s({},v),{},{onChange:this.onChange,value:y},e),t),d))}}])&&l(t.prototype,n),r&&l(t,r),Object.defineProperty(t,"prototype",{writable:!1}),f}(o.default.PureComponent);t.DebounceInput=m,h(m,"defaultProps",{element:"input",type:"text",onKeyDown:void 0,onBlur:void 0,value:void 0,minLength:0,debounceTimeout:100,forceNotifyByEnter:!0,forceNotifyOnBlur:!0,inputRef:void 0})},3628:function(e,t,n){"use strict";var r=n(6674).DebounceInput;r.DebounceInput=r,e.exports=r}}]);
//# sourceMappingURL=192.c236207b.chunk.js.map