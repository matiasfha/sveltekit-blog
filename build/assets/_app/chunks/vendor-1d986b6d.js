function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function i(t){return"function"==typeof t}function u(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,e,n,r){if(t){const o=c(t,e,n,r);return t[0](o)}}function c(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function l(t,e,n,r,o,i,u){const a=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,i);if(a){const o=c(e,n,r,u);t.p(o,a)}}function s(t,e){t.appendChild(e)}function f(t,e,n){t.insertBefore(e,n||null)}function d(t){t.parentNode.removeChild(t)}function p(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function m(t){return document.createTextNode(t)}function b(){return m(" ")}function v(){return m("")}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function x(t){return Array.from(t.childNodes)}function _(t,e,n,r){for(let o=0;o<t.length;o+=1){const r=t[o];if(r.nodeName===e){let e=0;const i=[];for(;e<r.attributes.length;){const t=r.attributes[e++];n[t.name]||i.push(t.name)}for(let t=0;t<i.length;t++)r.removeAttribute(i[t]);return t.splice(o,1)[0]}}return r?y(e):h(e)}function O(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return m(e)}function k(t){return O(t," ")}function w(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function T(t,e=document.body){return Array.from(e.querySelectorAll(t))}let S;function E(t){S=t}function P(){if(!S)throw new Error("Function called outside component initialization");return S}function j(t){P().$$.on_mount.push(t)}function N(t){P().$$.after_update.push(t)}function L(t,e){P().$$.context.set(t,e)}const $=[],I=[],B=[],M=[],R=Promise.resolve();let D=!1;function A(t){B.push(t)}let Y=!1;const C=new Set;function q(){if(!Y){Y=!0;do{for(let t=0;t<$.length;t+=1){const e=$[t];E(e),z(e.$$)}for(E(null),$.length=0;I.length;)I.pop()();for(let t=0;t<B.length;t+=1){const e=B[t];C.has(e)||(C.add(e),e())}B.length=0}while($.length);for(;M.length;)M.pop()();D=!1,Y=!1,C.clear()}}function z(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}const F=new Set;let H;function G(){H={r:0,c:[],p:H}}function J(){H.r||o(H.c),H=H.p}function U(t,e){t&&t.i&&(F.delete(t),t.i(e))}function K(t,e,n,r){if(t&&t.o){if(F.has(t))return;F.add(t),H.c.push((()=>{F.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function Q(t,e){const n={},r={},o={$$scope:1};let i=t.length;for(;i--;){const u=t[i],a=e[i];if(a){for(const t in u)t in a||(r[t]=1);for(const t in a)o[t]||(n[t]=a[t],o[t]=1);t[i]=a}else for(const t in u)o[t]=1}for(const u in r)u in n||(n[u]=void 0);return n}function V(t){return"object"==typeof t&&null!==t?t:{}}function W(t){t&&t.c()}function X(t,e){t&&t.l(e)}function Z(t,e,r,u){const{fragment:a,on_mount:c,on_destroy:l,after_update:s}=t.$$;a&&a.m(e,r),u||A((()=>{const e=c.map(n).filter(i);l?l.push(...e):o(e),t.$$.on_mount=[]})),s.forEach(A)}function tt(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function et(t,e){-1===t.$$.dirty[0]&&($.push(t),D||(D=!0,R.then(q)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function nt(e,n,i,u,a,c,l=[-1]){const s=S;E(e);const f=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s?s.$$.context:n.context||[]),callbacks:r(),dirty:l,skip_bound:!1};let p=!1;if(f.ctx=i?i(e,n.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return f.ctx&&a(f.ctx[t],f.ctx[t]=o)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](o),p&&et(e,t)),n})):[],f.update(),p=!0,o(f.before_update),f.fragment=!!u&&u(f.ctx),n.target){if(n.hydrate){const t=x(n.target);f.fragment&&f.fragment.l(t),t.forEach(d)}else f.fragment&&f.fragment.c();n.intro&&U(e.$$.fragment),Z(e,n.target,n.anchor,n.customElement),q()}E(s)}class rt{$destroy(){tt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ot=[];function it(e,n=t){let r;const o=[];function i(t){if(u(e,t)&&(e=t,r)){const t=!ot.length;for(let n=0;n<o.length;n+=1){const t=o[n];t[1](),ot.push(t,e)}if(t){for(let t=0;t<ot.length;t+=2)ot[t][0](ot[t+1]);ot.length=0}}}return{set:i,update:function(t){i(t(e))},subscribe:function(u,a=t){const c=[u,a];return o.push(c),1===o.length&&(r=n(i)||t),u(e),()=>{const t=o.indexOf(c);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;function ut(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var at={exports:{}};"undefined"!=typeof self&&self;var ct=ut(at.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){var r=n(2),o=n(3);t.exports={Link:r,Date:o}},function(t,e,n){t.exports={url:function(t,e){var n=t&&t.value?t.value.document:t;if(t&&[t.type,t.link_type,t._linkType,t.linkType].some((function(t){return t&&["Document","Link.Document","Link.document"].includes(t)}))&&e&&"function"==typeof e){var r=e(n);if(r)return r}return n&&n.url?n.url:""}}},function(t,e){t.exports=function(t){if(!t)return null;var e=24==t.length?"".concat(t.substring(0,22),":").concat(t.substring(22,24)):t;return new Date(e)}}])},function(t,e,n){t.exports=n(2)},function(t,e,n){var r=n(0),o=n(3),i=r.Date,u=r.Link;t.exports={Date:i,Link:u,RichText:o}},function(t,e,n){var r=n(4),o=n(0).Link,i=n(5),u=r.Elements;function a(t,e,n,r,a){switch(e){case u.heading1:return l("h1",n,a);case u.heading2:return l("h2",n,a);case u.heading3:return l("h3",n,a);case u.heading4:return l("h4",n,a);case u.heading5:return l("h5",n,a);case u.heading6:return l("h6",n,a);case u.paragraph:return l("p",n,a);case u.preformatted:return"<pre".concat(c(s=n),">").concat(i(s.text),"</pre>");case u.strong:return l("strong",n,a);case u.em:return l("em",n,a);case u.listItem:case u.oListItem:return l("li",n,a);case u.list:return l("ul",n,a);case u.oList:return l("ol",n,a);case u.image:return function(t,e){var n=e.linkTo?o.url(e.linkTo,t):null,r=e.linkTo&&e.linkTo.target?'target="'.concat(e.linkTo.target,'" rel="noopener"'):"",i=[e.label||"","block-img"],u='<img src="'.concat(e.url,'" alt="').concat(e.alt||"",'" copyright="').concat(e.copyright||"",'">');return'\n    <p class="'.concat(i.join(" "),'">\n      ').concat(n?"<a ".concat(r,' href="').concat(n,'">').concat(u,"</a>"):u,"\n    </p>\n  ")}(t,n);case u.embed:return function(t){return'\n    <div data-oembed="'.concat(t.oembed.embed_url,'"\n      data-oembed-type="').concat(t.oembed.type,'"\n      data-oembed-provider="').concat(t.oembed.provider_name,'"\n      ').concat(c(t),">\n\n      ").concat(t.oembed.html,"\n    </div>\n  ")}(n);case u.hyperlink:return function(t,e,n){var r=e.data.target?'target="'.concat(e.data.target,'" rel="noopener"'):"",u=i(o.url(e.data,t));return"<a ".concat(r,' href="').concat(u,'">').concat(n.join(""),"</a>")}(t,n,a);case u.label:return function(t,e){return"<span ".concat(c(t.data),">").concat(e.join(""),"</span>")}(n,a);case u.span:return function(t){return t?i(t).replace(/\n/g,"<br />"):""}(r);default:return""}var s}function c(t){return t.label?' class="'.concat(t.label,'"'):""}function l(t,e,n){return"<".concat(t).concat(c(e),">").concat(n.join(""),"</").concat(t,">")}t.exports={asText:function(t,e){return r.asText(t,e)},asHtml:function(t,e,n){return r.serialize(t,a.bind(null,e),n).join("")},Elements:u}},function(t,e,n){t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){var r;function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(e,"__esModule",{value:!0}),e.PRIORITIES=e.NODE_TYPES=void 0;var i={heading1:"heading1",heading2:"heading2",heading3:"heading3",heading4:"heading4",heading5:"heading5",heading6:"heading6",paragraph:"paragraph",preformatted:"preformatted",strong:"strong",em:"em",listItem:"list-item",oListItem:"o-list-item",list:"group-list-item",oList:"group-o-list-item",image:"image",embed:"embed",hyperlink:"hyperlink",label:"label",span:"span"};e.NODE_TYPES=i;var u=(o(r={},i.heading1,4),o(r,i.heading2,4),o(r,i.heading3,4),o(r,i.heading4,4),o(r,i.heading5,4),o(r,i.heading6,4),o(r,i.paragraph,3),o(r,i.preformatted,5),o(r,i.strong,6),o(r,i.em,6),o(r,i.oList,1),o(r,i.list,1),o(r,i.listItem,1),o(r,i.oListItem,1),o(r,i.image,1),o(r,i.embed,1),o(r,i.hyperlink,3),o(r,i.label,4),o(r,i.span,7),r);e.PRIORITIES=u},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r,o=n(7),i=n(2),u=n(8),a=n(0),c=(r=n(3))&&r.__esModule?r:{default:r};function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t){if(0===t.length)throw new Error("Unable to elect node on empty list");var e,n=function(t){if(Array.isArray(t))return t}(e=t.sort((function(t,e){if(t.isParentOf(e))return-1;if(e.isParentOf(t))return 1;var n=a.PRIORITIES[t.type]-a.PRIORITIES[e.type];return 0===n?t.text.length-e.text.length:n})))||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}();return{elected:n[0],others:n.slice(1)}}function f(t,e,n){if(e.length>0)return r=t,o=d(t,e),u=n,o.reduce((function(t,e,n){var a=[],c=0===n&&e.start>u.lower,l=n===o.length-1&&u.upper>e.end;if(c){var s=new i.TextNode(u.lower,e.start,r.slice(u.lower,e.start));a=a.concat(s)}else{var f=o[n-1];if(f&&e.start>f.end){var d=r.slice(f.end,e.start),p=new i.TextNode(f.end,e.start,d);a=a.concat(p)}}if(a=a.concat(e),l){var h=new i.TextNode(e.end,u.upper,r.slice(e.end,u.upper));a=a.concat(h)}return t.concat(a)}),[]);var r,o,u,a=t.slice(n.lower,n.upper);return[new i.TextNode(n.lower,n.upper,a)]}function d(t,e){var n,r=(n=(0,o.sort)(e,(function(t,e){return t.start-e.start})),(0,o.sort)(n,(function(t,e){return r=e,t.start-r.start||(n=e,t.end-n.end);var n,r})).reduce((function(t,e){var n,r=(0,o.last)(t);if(r){if(r.some((function(t){return t.isParentOf(e)})))return(0,o.init)(t).concat([r.concat(e)]);var i=(0,o.last)(r);return i&&(n=e,i.end>=n.start)?(0,o.init)(t).concat([r.concat(e)]):t.concat([[e]])}return[[e]]}),[])).map(s),u=(0,o.flatten)(r.map((function(e){return function(t,e){var n=e.others.reduce((function(n,r){var o,u,a,c=n.inner,l=n.outer,s=(o=t,u=e.elected,(a=r).start<u.start?{inner:i.SpanNode.slice(a,u.start,a.end,o),outer:i.SpanNode.slice(a,a.start,u.start,o)}:a.end>u.end?{inner:i.SpanNode.slice(a,a.start,u.end,o),outer:i.SpanNode.slice(a,u.end,a.end,o)}:{inner:a});return{inner:c.concat(s.inner),outer:s.outer?l.concat(s.outer):l}}),{inner:[],outer:[]}),r=n.inner,o=n.outer;return[e.elected.setChildren(f(t,r,e.elected.boundaries()))].concat(d(t,o))}(t,e)})));return(0,o.sort)(u,(function(t,e){return t.start-e.start}))}var p=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e;return(e=[{key:"fromRichText",value:function(t){return{key:(0,c.default)(),children:t.reduce((function(t,e,n){if(u.RichTextBlock.isEmbedBlock(e.type)||u.RichTextBlock.isImageBlock(e.type))return t.concat(new i.BlockNode(e.type,e));var r,a,c,l=(a=((r=e).spans||[]).map((function(t){var e=r.text.slice(t.start,t.end);return new i.SpanNode(t.start,t.end,t.type,e,[],t)})),c={lower:0,upper:r.text.length},f(r.text,a,c)),s=t[t.length-1];if(u.RichTextBlock.isListItem(e.type)&&s&&s instanceof i.ListBlockNode){var d=new i.ListItemBlockNode(e,l),p=s.addChild(d);return(0,o.init)(t).concat(p)}if(u.RichTextBlock.isOrderedListItem(e.type)&&s&&s instanceof i.OrderedListBlockNode){var h=new i.OrderedListItemBlockNode(e,l),y=s.addChild(h);return(0,o.init)(t).concat(y)}if(u.RichTextBlock.isListItem(e.type)){var m=new i.ListItemBlockNode(e,l),b=new i.ListBlockNode(u.RichTextBlock.emptyList(),[m]);return t.concat(b)}if(u.RichTextBlock.isOrderedListItem(e.type)){var v=new i.OrderedListItemBlockNode(e,l),g=new i.OrderedListBlockNode(u.RichTextBlock.emptyOrderedList(),[v]);return t.concat(g)}return t.concat(new i.BlockNode(e.type,e,l))}),[])}}}])&&l(t,e),t}();e.default=p},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.ListBlockNode=e.OrderedListBlockNode=e.OrderedListItemBlockNode=e.ListItemBlockNode=e.BlockNode=e.TextNode=e.SpanNode=e.Node=void 0;var r,o=(r=n(3))&&r.__esModule?r:{default:r},i=n(0);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");var n,r;t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&(n=t,r=e,(Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(n,r))}function s(t){return function(){var e,n,r,o=f(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}()){var i=f(this).constructor;e=Reflect.construct(o,arguments,i)}else e=o.apply(this,arguments);return n=this,!(r=e)||"object"!==u(r)&&"function"!=typeof r?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(n):r}}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var p=function t(e,n,r){d(this,t),this.key=(0,o.default)(),this.type=e,this.element=n,this.children=r};e.Node=p;var h=function(t){l(n,p);var e=s(n);function n(t,r,o,i,u,a){var c;return d(this,n),(c=e.call(this,o,a,u)).start=t,c.end=r,c.text=i,c.children=u,c}return c(n,[{key:"boundaries",value:function(){return{lower:this.start,upper:this.end}}},{key:"isParentOf",value:function(t){return this.start<=t.start&&this.end>=t.end}},{key:"setChildren",value:function(t){return new n(this.start,this.end,this.type,this.text,t,this.element)}}],[{key:"slice",value:function(t,e,r,o){return new n(e,r,t.type,o.slice(e,r),t.children,t.element)}}]),n}();e.SpanNode=h;var y=function(t){l(n,h);var e=s(n);function n(t,r,o){d(this,n);var u={type:i.NODE_TYPES.span,start:t,end:r,text:o};return e.call(this,t,r,i.NODE_TYPES.span,o,[],u)}return n}();e.TextNode=y;var m=function(t){l(n,p);var e=s(n);function n(t,r){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return d(this,n),e.call(this,t,r,o)}return n}();e.BlockNode=m;var b=function(t){l(n,m);var e=s(n);function n(t,r){return d(this,n),e.call(this,i.NODE_TYPES.listItem,t,r)}return n}();e.ListItemBlockNode=b;var v=function(t){l(n,m);var e=s(n);function n(t,r){return d(this,n),e.call(this,i.NODE_TYPES.oListItem,t,r)}return n}();e.OrderedListItemBlockNode=v;var g=function(t){l(n,m);var e=s(n);function n(t,r){return d(this,n),e.call(this,i.NODE_TYPES.oList,t,r)}return c(n,[{key:"addChild",value:function(t){var e=this.children.concat(t);return new n(this.element,e)}}]),n}();e.OrderedListBlockNode=g;var x=function(t){l(n,m);var e=s(n);function n(t,r){return d(this,n),e.call(this,i.NODE_TYPES.list,t,r)}return c(n,[{key:"addChild",value:function(t){var e=this.children.concat(t);return new n(this.element,e)}}]),n}();e.ListBlockNode=x},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var t=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var n=(t+16*Math.random())%16|0;return t=Math.floor(t/16),("x"==e?n:3&n|8).toString(16)}))}},function(t,e,n){t.exports=n(5)},function(t,e,n){var r=a(n(6)),o=a(n(1)),i=a(n(9)),u=n(0);function a(t){return t&&t.__esModule?t:{default:t}}t.exports={asText:r.default,asTree:o.default.fromRichText,serialize:i.default,Elements:u.NODE_TYPES}},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.default=function(t,e){var n="string"==typeof e?e:" ";return t.map((function(t){return t.text})).join(n)}},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.init=function(t){return t.slice(0,-1)},e.last=function(t){return t[t.length-1]},e.flatten=function(t){var e=[],n=!0,r=!1,o=void 0;try{for(var i,u=t[Symbol.iterator]();!(n=(i=u.next()).done);n=!0){var a=i.value;Array.isArray(a)?e.push.apply(e,a):e.push(a)}}catch(c){r=!0,o=c}finally{try{n||null==u.return||u.return()}finally{if(r)throw o}}return e},e.sort=function(t,e){return(n=t,function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(n)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()).sort(e);var n}},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.RichTextBlock=void 0;var r=n(0);function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.type=e,this.text=n,this.spans=r}var e;return(e=[{key:"isEmbedBlock",value:function(t){return t===r.NODE_TYPES.embed}},{key:"isImageBlock",value:function(t){return t===r.NODE_TYPES.image}},{key:"isList",value:function(t){return t===r.NODE_TYPES.list}},{key:"isOrderedList",value:function(t){return t===r.NODE_TYPES.oList}},{key:"isListItem",value:function(t){return t===r.NODE_TYPES.listItem}},{key:"isOrderedListItem",value:function(t){return t===r.NODE_TYPES.oListItem}},{key:"emptyList",value:function(){return{type:r.NODE_TYPES.list,spans:[],text:""}}},{key:"emptyOrderedList",value:function(){return{type:r.NODE_TYPES.oList,spans:[],text:""}}}])&&o(t,e),t}();e.RichTextBlock=i},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r,o=(r=n(1))&&r.__esModule?r:{default:r},i=n(2);e.default=function(t,e,n){return o.default.fromRichText(t).children.map((function(t,r){return o=e,u=n,function t(e,n){var r=e instanceof i.SpanNode?e.text:null,a=e.children.reduce((function(e,n,r){return e.concat([t(n,r)])}),[]);return u&&u(e.type,e.element,r,a,n)||o(e.type,e.element,r,a,n)}(t,r);var o,u}))}}])},function(t,e,n){
/*!
      * escape-html
      * Copyright(c) 2012-2013 TJ Holowaychuk
      * Copyright(c) 2015 Andreas Lubbe
      * Copyright(c) 2015 Tiancheng "Timothy" Gu
      * MIT Licensed
      */
var r=/["'&<>]/;t.exports=function(t){var e,n=""+t,o=r.exec(n);if(!o)return n;var i="",u=0,a=0;for(u=o.index;u<n.length;u++){switch(n.charCodeAt(u)){case 34:e="&quot;";break;case 38:e="&amp;";break;case 39:e="&#39;";break;case 60:e="&lt;";break;case 62:e="&gt;";break;default:continue}a!==u&&(i+=n.substring(a,u)),a=u+1,i+=e}return a!==u?i+n.substring(a,u):i}}]));export{e as A,G as B,it as C,a as D,y as E,s as F,l as G,t as H,p as I,T as J,ct as P,rt as S,x as a,g as b,_ as c,d,h as e,f,O as g,w as h,nt as i,W as j,b as k,v as l,X as m,k as n,Z as o,Q as p,V as q,K as r,u as s,m as t,J as u,U as v,tt as w,L as x,N as y,j as z};
