(this["webpackJsonpreact-way-of-samurai"]=this["webpackJsonpreact-way-of-samurai"]||[]).push([[5],{431:function(e,t,n){"use strict";n.r(t);var r=n(193);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,l=void 0;try{for(var c,u=e[Symbol.iterator]();!(r=(c=u.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(o){a=!0,l=o}finally{try{r||null==u.return||u.return()}finally{if(a)throw l}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l=n(0),c=n.n(l),u=n(13),o=n(202),i=function(){var e=Object(u.c)(),t=Object(u.d)((function(e){return e.chat.status}));return Object(l.useEffect)((function(){return e(Object(o.c)()),function(){e(Object(o.d)())}}),[]),c.a.createElement("div",null,"error"===t&&c.a.createElement("div",null,"Some error occured. Please refresh the page"),c.a.createElement(c.a.Fragment,null,c.a.createElement(s,null),c.a.createElement(m,null)))},s=function(e){!function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e);var t=Object(u.d)((function(e){return e.chat.messages})),n=Object(l.useRef)(null),r=a(Object(l.useState)(!0),2),o=r[0],i=r[1];return Object(l.useEffect)((function(){var e;o&&(null===(e=n.current)||void 0===e||e.scrollIntoView({behavior:"smooth"}))}),[t]),c.a.createElement("div",{style:{height:"400px",overflowY:"auto"},onScroll:function(e){var t=e.currentTarget;Math.abs(t.scrollHeight-t.scrollTop-t.clientHeight)<300?!o&&i(!0):o&&i(!1)}},t.map((function(e,t){return c.a.createElement(f,{key:e.id,message:e})})),c.a.createElement("div",{ref:n}))},f=c.a.memo((function(e){var t=e.message;return console.log(">>>>>>Message"),c.a.createElement("div",null,c.a.createElement("img",{src:t.photo,style:{width:"30px"}})," ",c.a.createElement("b",null,t.userName),c.a.createElement("br",null),t.message,c.a.createElement("hr",null))})),m=function(){var e=a(Object(l.useState)(""),2),t=e[0],n=e[1],r=Object(u.c)(),i=Object(u.d)((function(e){return e.chat.status}));return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("textarea",{onChange:function(e){return n(e.currentTarget.value)},value:t})),c.a.createElement("div",null,c.a.createElement("button",{disabled:"ready"!==i,onClick:function(){t&&(r(Object(o.b)(t)),n(""))}},"Send")))};t.default=function(){return c.a.createElement("div",null,c.a.createElement(i,null))}}}]);
//# sourceMappingURL=5.f4874de3.chunk.js.map