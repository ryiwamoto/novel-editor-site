module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="./",n(n.s="QfWi")}({"+h6k":function(t,e,n){t.exports={paragraph:"paragraph__3XZVW",textarea:"textarea__lochO",count:"count__1uRWR","edit-form":"edit-form__1rRzC",delete:"delete__3Sp8N",move:"move__3cboQ"}},"A+Cz":function(t,e,n){t.exports={"add-button":"add-button__1KgZw"}},FA6U:function(t,e,n){t.exports={home:"home__5d1wS"}},GFNa:function(t,e,n){},HteQ:function(t,e){t.exports=require("preact")},NSHr:function(t,e,n){t.exports={card:"card__3mJh1"}},QfWi:function(t,e,n){"use strict";n.r(e);n("GFNa");var r=n("HteQ"),o={};function i(t,e){for(var n in e)t[n]=e[n];return t}function a(t,e,n){var r,i=/(?:\?([^#]*))?(#.*)?$/,a=t.match(i),c={};if(a&&a[1])for(var u=a[1].split("&"),l=0;l<u.length;l++){var p=u[l].split("=");c[decodeURIComponent(p[0])]=decodeURIComponent(p.slice(1).join("="))}t=s(t.replace(i,"")),e=s(e||"");for(var h=Math.max(t.length,e.length),f=0;f<h;f++)if(e[f]&&":"===e[f].charAt(0)){var d=e[f].replace(/(^:|[+*?]+$)/g,""),_=(e[f].match(/[+*?]+$/)||o)[0]||"",v=~_.indexOf("+"),g=~_.indexOf("*"),b=t[f]||"";if(!b&&!g&&(_.indexOf("?")<0||v)){r=!1;break}if(c[d]=decodeURIComponent(b),v||g){c[d]=t.slice(f).map(decodeURIComponent).join("/");break}}else if(e[f]!==t[f]){r=!1;break}return(!0===n.default||!1!==r)&&c}function c(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function u(t,e){return t.index=e,t.rank=function(t){return t.props.default?0:(e=t.props.path,s(e).map(l).join(""));var e}(t),t.props}function s(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function l(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}var p=null,h=[],f=[],d={};function _(){var t;return""+((t=p&&p.location?p.location:p&&p.getCurrentLocation?p.getCurrentLocation():"undefined"!=typeof location?location:d).pathname||"")+(t.search||"")}function v(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),function(t){for(var e=h.length;e--;)if(h[e].canRoute(t))return!0;return!1}(t)&&function(t,e){void 0===e&&(e="push"),p&&p[e]?p[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}(t,e?"replace":"push"),g(t)}function g(t){for(var e=!1,n=0;n<h.length;n++)!0===h[n].routeTo(t)&&(e=!0);for(var r=f.length;r--;)f[r](t);return e}function b(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return v(e)}}function m(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button))return b(t.currentTarget||t.target||this),O(t)}function O(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function y(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")){if(e.hasAttribute("native"))return;if(b(e))return O(t)}}while(e=e.parentNode)}}var j=!1;var x=function(t){function e(e){t.call(this,e),e.history&&(p=e.history),this.state={url:e.url||_()},j||("function"==typeof addEventListener&&(p||addEventListener("popstate",(function(){g(_())})),addEventListener("click",y)),j=!0)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},e.prototype.canRoute=function(t){var e=Object(r.toChildArray)(this.props.children);return this.getMatchingChildren(e,t,!1).length>0},e.prototype.routeTo=function(t){this.setState({url:t});var e=this.canRoute(t);return this.updating||this.forceUpdate(),e},e.prototype.componentWillMount=function(){h.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;p&&(this.unlisten=p.listen((function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))}))),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),h.splice(h.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,n){return t.filter(u).sort(c).map((function(t){var o=a(e,t.props.path,t.props);if(o){if(!1!==n){var c={url:e,matches:o};return i(c,o),delete c.ref,delete c.key,Object(r.cloneElement)(t,c)}return t}})).filter(Boolean)},e.prototype.render=function(t,e){var n=t.children,o=t.onChange,i=e.url,a=this.getMatchingChildren(Object(r.toChildArray)(n),i,!0),c=a[0]||null,u=this.previousUrl;return i!==u&&(this.previousUrl=i,"function"==typeof o&&o({router:this,url:i,previous:u,active:a,current:c})),c},e}(r.Component),w=function(t){return Object(r.createElement)(t.component,t)};x.subscribers=f,x.getCurrentUrl=_,x.route=v,x.Router=x,x.Route=w,x.Link=function(t){return Object(r.createElement)("a",i({onClick:m},t))},x.exec=a;var A,E,P,M=0,C=[],R=r.options.__r,S=r.options.diffed,H=r.options.__c,D=r.options.unmount;function N(t,e){r.options.__h&&r.options.__h(E,t,M||e),M=0;var n=E.__H||(E.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function T(t,e,n){var r=N(A++,2);return r.t=t,r.__c||(r.__=[n?n(e):W(void 0,e),function(t){var e=r.t(r.__[0],t);r.__[0]!==e&&(r.__=[e,r.__[1]],r.__c.setState({}))}],r.__c=E),r.__}function k(t,e){var n=N(A++,3);!r.options.__s&&F(n.__H,e)&&(n.__=t,n.__H=e,E.__H.__h.push(n))}function z(t){return M=5,U((function(){return{current:t}}),[])}function U(t,e){var n=N(A++,7);return F(n.__H,e)&&(n.__=t(),n.__H=e,n.__h=t),n.__}function V(t,e){return M=8,U((function(){return t}),e)}function G(t){var e=E.context[t.__c],n=N(A++,9);return n.__c=t,e?(null==n.__&&(n.__=!0,e.sub(E)),e.props.value):t.__}function I(){C.forEach((function(t){if(t.__P)try{t.__H.__h.forEach(K),t.__H.__h.forEach(L),t.__H.__h=[]}catch(e){t.__H.__h=[],r.options.__e(e,t.__v)}})),C=[]}r.options.__r=function(t){R&&R(t),A=0;var e=(E=t.__c).__H;e&&(e.__h.forEach(K),e.__h.forEach(L),e.__h=[])},r.options.diffed=function(t){S&&S(t);var e=t.__c;e&&e.__H&&e.__H.__h.length&&(1!==C.push(e)&&P===r.options.requestAnimationFrame||((P=r.options.requestAnimationFrame)||function(t){var e,n=function(){clearTimeout(r),$&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);$&&(e=requestAnimationFrame(n))})(I))},r.options.__c=function(t,e){e.some((function(t){try{t.__h.forEach(K),t.__h=t.__h.filter((function(t){return!t.__||L(t)}))}catch(n){e.some((function(t){t.__h&&(t.__h=[])})),e=[],r.options.__e(n,t.__v)}})),H&&H(t,e)},r.options.unmount=function(t){D&&D(t);var e=t.__c;if(e&&e.__H)try{e.__H.__.forEach(K)}catch(t){r.options.__e(t,e.__v)}};var $="function"==typeof requestAnimationFrame;function K(t){"function"==typeof t.__c&&t.__c()}function L(t){t.__c=t.__()}function F(t,e){return!t||t.length!==e.length||e.some((function(e,n){return e!==t[n]}))}function W(t,e){return"function"==typeof e?e(t):e}var B=n("RCZ+"),q=n.n(B);function Q(t){let e=`${q.a.btn} ${t.className}`;return"primary"===t.type&&(e+=" "+q.a["btn-primary"]),Object(r.h)("button",{onClick:t.onClick,className:e},t.children)}function Z(){return(Z=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function J(t){return Object(r.h)("svg",Z({xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},t),Object(r.h)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"}))}var X=n("A+Cz"),Y=n.n(X);function tt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function et(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?tt(Object(n),!0).forEach((function(e){nt(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):tt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function nt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function rt(t=""){return{id:String(Date.now()),text:t}}function ot(t,e){return{type:"UPDATE_PARAGRAPH",id:e,text:t}}function it(t){return{type:"DELETE_PARAGRAPH",id:t}}function at(t){return{type:"MOVE_START",index:t}}function ct(t,e){return{type:"MOVE_PARAGRAPH",from:t,to:e}}function ut(){return{type:"END_MOVE"}}function st(t,e){switch(e.type){case"UPDATE_PARAGRAPH":return et(et({},t),{},{paragraphs:et(et({},t.paragraphs),{},{[e.id]:et(et({},t.paragraphs[e.id]),{},{text:e.text})})});case"ADD_PARAGRAPH":{const e=rt();return et(et({},t),{},{paragraphs:et(et({},t.paragraphs),{},{[e.id]:e}),list:[...t.list,e.id],lastAdded:t.list.length})}case"DELETE_PARAGRAPH":{const n=t.paragraphs;return delete n[e.id],t.list.splice(t.list.indexOf(e.id),1),et(et({},t),{},{paragraphs:et({},n),list:[...t.list]})}case"MOVE_START":return et(et({},t),{},{draggingIndex:e.index});case"MOVE_PARAGRAPH":{const n=t.list[e.from],r=t.list[e.to];return t.list[e.from]=r,t.list[e.to]=n,et(et({},t),{},{list:[...t.list],draggingIndex:e.to})}case"END_MOVE":return et(et({},t),{},{draggingIndex:null});case"TOGGLE_SORT":return et(et({},t),{},{isSorting:!t.isSorting});case"TOGGLE_PREVIEW":return et(et({},t),{},{showsPreview:!t.showsPreview});default:return t}}const lt=rt(""),pt={ver:1,paragraphs:{[lt.id]:lt},list:[lt.id],draggingIndex:null,lastAdded:0,isSorting:!1,showsPreview:!1};const ht=Object(r.createContext)({state:pt,dispatch:()=>{}});function ft(){const{dispatch:t}=G(ht),e=V(()=>{t({type:"ADD_PARAGRAPH"})},[]);return Object(r.h)(Q,{className:Y.a["add-button"],type:"primary",onClick:e},Object(r.h)(J,{className:q.a["btn-icon"]})," ",Object(r.h)("span",null,"追加する"))}var dt=n("hRbA"),_t=n.n(dt);const vt=Object(r.createContext)({data:null});function gt(t){const e=z(null),n=G(vt),o=V(e=>{const r=e.dataTransfer;if(!r)throw new Error;r.dropEffect="move",r.effectAllowed="move",n.data={index:t.index},null==t.onMovieStart||t.onMovieStart(t.index)},[t.index]),i=V(()=>{null==t.onMoveEnd||t.onMoveEnd()},[t.onMoveEnd]),a=V(r=>{var o;if(!e.current||!r.dataTransfer)return;if(!n.data)return;const i=n.data.index,a=t.index;if(i===a)return;const c=null==(o=e.current)?void 0:o.getBoundingClientRect(),u=(c.bottom-c.top)/2,s=(r.clientX,r.clientY-c.top);i<a&&s<u||i>a&&s>u||(null==t.onMove||t.onMove(i,a),n.data.index=a)},[t.index]);return Object(r.h)("div",{ref:e,className:t.className,draggable:!0,onDragStart:o,onDragOver:a,onDragEnd:i},t.children)}function bt(){return Object(r.h)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},Object(r.h)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}))}var mt=n("+h6k"),Ot=n.n(mt),yt=n("NSHr"),jt=n.n(yt);function xt(){return Object(r.h)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},Object(r.h)("path",{d:"M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z"}))}function wt(t){const{state:e,dispatch:n}=G(ht),o=e.paragraphs[t.id];if(!o)return null;const i=V((function(t){return V((...e)=>{n(t(...e))},[])}),[]);return Object(r.h)(At,{id:t.id,index:t.index,text:o.text,isSorting:e.isSorting,isDragging:e.draggingIndex===t.index,focus:t.index===e.lastAdded,onChange:i(ot),onDelete:i(it),onMoveStart:i(at),onMove:i(ct),onMoveEnd:i(ut)})}function At(t){const e=V(e=>{null==t.onChange||t.onChange(e.currentTarget.value,t.id)},[t.onChange,t.id]),n=V(e=>{e.preventDefault(),null==t.onDelete||t.onDelete(t.id)},[t.id]),o=z(null);return k(()=>{var e;t.focus&&(null==(e=o.current)||e.focus())},[t.focus]),Object(r.h)("li",{className:`${jt.a.card} ${Ot.a.paragraph}`,"data-is-editing":t.isSorting?"true":"false","data-is-dragging":t.isDragging?"true":"false"},Object(r.h)(gt,{index:t.index,className:`${Ot.a.move} ${Ot.a["edit-form"]}`,onMovieStart:t.onMoveStart,onMove:t.onMove,onMoveEnd:t.onMoveEnd},Object(r.h)(xt,null)),Object(r.h)("div",{className:Ot.a.textarea},Object(r.h)("label",{htmlFor:"paragraph-"+t.index},"段落"),Object(r.h)("textarea",{name:"paragraph-"+t.index,ref:o,value:t.text,onKeyUp:e}),Object(r.h)("div",{className:Ot.a.count},Object(r.h)("span",null,t.text.length))),Object(r.h)("div",{className:`${Ot.a.delete} ${Ot.a["edit-form"]}`},Object(r.h)("button",{onClick:n,"aria-label":"削除ボタン",tabIndex:t.isSorting?0:-1},Object(r.h)(bt,null))))}var Et=n("z7YW"),Pt=n.n(Et),Mt=n("weRa"),Ct=n.n(Mt);function Rt(t){const e=U(()=>t.list.map(e=>{var n,o;const i=(null!=(n=null==(o=t.paragraph[e])?void 0:o.text)?n:"").split("\n"),a=i.reduce((t,e,n)=>n===i.length-1?[...t,e]:[...t,e,Object(r.h)("br",{key:"br-"+n})],[]);return Object(r.h)("p",{className:""+Ct.a["japanese-text"],key:"preview-paragraph-"+e},a)}),[t.list,t.paragraph]);return Object(r.h)("div",{className:`${Pt.a.preview} ${jt.a.card}`},e)}function St(){const{state:t}=G(ht);return Object(r.h)("div",{className:_t.a.editor},Object(r.h)("div",null,Object(r.h)("ul",null,t.list.map((e,n)=>{const o=t.paragraphs[e];return o&&Object(r.h)(wt,{key:"paragraph-"+o.id,id:o.id,index:n})}),Object(r.h)("li",null,Object(r.h)(ft,null)))),t.showsPreview&&Object(r.h)("div",null,Object(r.h)(Rt,{list:t.list,paragraph:t.paragraphs})))}var Ht=n("FA6U"),Dt=n.n(Ht);var Nt=()=>Object(r.h)("div",{className:Dt.a.home},Object(r.h)(St,null));function Tt(){return Object(r.h)("svg",{xmlns:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 24 24",height:"24",viewBox:"0 0 24 24",width:"24"},Object(r.h)("g",null,Object(r.h)("path",{d:"M19,3H5C3.89,3,3,3.9,3,5v14c0,1.1,0.89,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.11,3,19,3z M19,19H5V7h14V19z M13.5,13 c0,0.83-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5c0-0.83,0.67-1.5,1.5-1.5S13.5,12.17,13.5,13z M12,9c-2.73,0-5.06,1.66-6,4 c0.94,2.34,3.27,4,6,4s5.06-1.66,6-4C17.06,10.66,14.73,9,12,9z M12,15.5c-1.38,0-2.5-1.12-2.5-2.5c0-1.38,1.12-2.5,2.5-2.5 c1.38,0,2.5,1.12,2.5,2.5C14.5,14.38,13.38,15.5,12,15.5z"})))}function kt(){return Object(r.h)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},Object(r.h)("path",{d:"M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"}))}var zt=n("ySiU"),Ut=n.n(zt);var Vt=()=>{const{dispatch:t}=G(ht),e=V(e=>{e.preventDefault(),t({type:"TOGGLE_SORT"})},[]),n=V(e=>{e.preventDefault(),t({type:"TOGGLE_PREVIEW"})},[]);return Object(r.h)("header",{className:Ut.a.header},Object(r.h)("h1",null,"段落エディター"),Object(r.h)("nav",null,Object(r.h)("a",{onClick:e},Object(r.h)(kt,null),Object(r.h)("span",null,"並び替え")),Object(r.h)("a",{onClick:n},Object(r.h)(Tt,null),Object(r.h)("span",null,"プレビュー"))))};var Gt=()=>{const t=z(""),e=V(e=>{t.current=e.url},[]),[n,o]=T(st,void 0,()=>function(){try{var t;return et(et({},JSON.parse(null!=(t=window.localStorage.getItem("save_data"))?t:"")),{},{isSorting:!1,draggingIndex:null})}catch{return pt}}());k(()=>{!function(t){try{window.localStorage.setItem("save_data",JSON.stringify(t))}catch{}}(n)},[n]);const i=U(()=>({state:n,dispatch:o}),[n,o]);return Object(r.h)("div",{id:"app"},Object(r.h)(ht.Provider,{value:i},Object(r.h)(Vt,null),Object(r.h)(x,{onChange:e},Object(r.h)(w,{path:"/paragraph-editor-site/",component:Nt,default:!0}))))};e.default=Gt},"RCZ+":function(t,e,n){t.exports={btn:"btn__ove9P","btn-icon":"btn-icon__3KkgF","btn-primary":"btn-primary__1R6Z0"}},hRbA:function(t,e,n){t.exports={editor:"editor__1I80g"}},weRa:function(t,e,n){t.exports={"japanese-text":"japanese-text__1TNcs"}},ySiU:function(t,e,n){t.exports={header:"header__3ax1h",active:"active__2XB2z"}},z7YW:function(t,e,n){t.exports={preview:"preview__2K3aJ"}}});
//# sourceMappingURL=ssr-bundle.js.map