function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,p=function(){return c.Date.now()};function g(e,t,n){var i,r,o,f,a,u,l=0,c=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,o=r;return i=r=void 0,l=t,f=e.apply(o,n)}function j(e){return l=e,a=setTimeout(h,t),c?y(e):f}function O(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=o}function h(){var e=p();if(O(e))return w(e);a=setTimeout(h,function(e){var n=t-(e-u);return s?v(n,o-(e-l)):n}(e))}function w(e){return a=void 0,g&&i?y(e):(i=r=void 0,f)}function T(){var e=p(),n=O(e);if(i=arguments,r=this,u=e,n){if(void 0===a)return j(u);if(s)return a=setTimeout(h,t),y(u)}return void 0===a&&(a=setTimeout(h,t)),f}return t=m(t)||0,b(n)&&(c=!!n.leading,o=(s="maxWait"in n)?d(m(n.maxWait)||0,t):o,g="trailing"in n?!!n.trailing:g),T.cancel=function(){void 0!==a&&clearTimeout(a),l=0,i=u=r=a=void 0},T.flush=function(){return void 0===a?f:w(p())},T}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function m(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=o.test(e);return n||f.test(e)?a(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return b(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:i,maxWait:t,trailing:r})};const y=JSON.parse(localStorage.getItem("feedback-form-state"));let j=null!=y?y:{};const O=document.querySelector(".feedback-form");O.addEventListener("input",e(t)((function(e){j[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(j)),console.log(j)}),500)),O.addEventListener("submit",(function(e){e.preventDefault();if(""===Object.values(j))return alert("Please fill all fields");e.target.reset(),localStorage.removeItem("feedback-form-state"),j={}}));
//# sourceMappingURL=03-feedback.f4668297.js.map
