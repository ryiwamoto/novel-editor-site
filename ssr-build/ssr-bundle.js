module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="./",n(n.s="QfWi")}({"+h6k":function(t,e,n){t.exports={paragraph:"paragraph__3XZVW",textarea:"textarea__lochO","label-text":"label-text__3th0i",count:"count__1uRWR","edit-form":"edit-form__1rRzC",delete:"delete__3Sp8N",move:"move__3cboQ","move-button":"move-button__163WB"}},"A+Cz":function(t,e,n){t.exports={"add-button":"add-button__1KgZw"}},FA6U:function(t,e,n){t.exports={home:"home__5d1wS"}},GFNa:function(t,e,n){},HteQ:function(t,e){t.exports=require("preact")},NSHr:function(t,e,n){t.exports={card:"card__3mJh1"}},QfWi:function(t,e,n){"use strict";n.r(e);n("GFNa");var r=n("HteQ"),o={};function a(t,e){for(var n in e)t[n]=e[n];return t}function i(t,e,n){var r,a=/(?:\?([^#]*))?(#.*)?$/,i=t.match(a),c={};if(i&&i[1])for(var u=i[1].split("&"),l=0;l<u.length;l++){var p=u[l].split("=");c[decodeURIComponent(p[0])]=decodeURIComponent(p.slice(1).join("="))}t=s(t.replace(a,"")),e=s(e||"");for(var h=Math.max(t.length,e.length),f=0;f<h;f++)if(e[f]&&":"===e[f].charAt(0)){var _=e[f].replace(/(^:|[+*?]+$)/g,""),d=(e[f].match(/[+*?]+$/)||o)[0]||"",v=~d.indexOf("+"),b=~d.indexOf("*"),g=t[f]||"";if(!g&&!b&&(d.indexOf("?")<0||v)){r=!1;break}if(c[_]=decodeURIComponent(g),v||b){c[_]=t.slice(f).map(decodeURIComponent).join("/");break}}else if(e[f]!==t[f]){r=!1;break}return(!0===n.default||!1!==r)&&c}function c(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function u(t,e){return t.index=e,t.rank=function(t){return t.props.default?0:(e=t.props.path,s(e).map(l).join(""));var e}(t),t.props}function s(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function l(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}var p=null,h=[],f=[],_={};function d(){var t;return""+((t=p&&p.location?p.location:p&&p.getCurrentLocation?p.getCurrentLocation():"undefined"!=typeof location?location:_).pathname||"")+(t.search||"")}function v(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),function(t){for(var e=h.length;e--;)if(h[e].canRoute(t))return!0;return!1}(t)&&function(t,e){void 0===e&&(e="push"),p&&p[e]?p[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}(t,e?"replace":"push"),b(t)}function b(t){for(var e=!1,n=0;n<h.length;n++)!0===h[n].routeTo(t)&&(e=!0);for(var r=f.length;r--;)f[r](t);return e}function g(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return v(e)}}function m(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button))return g(t.currentTarget||t.target||this),O(t)}function O(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function y(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")){if(e.hasAttribute("native"))return;if(g(e))return O(t)}}while(e=e.parentNode)}}var j=!1;var w=function(t){function e(e){t.call(this,e),e.history&&(p=e.history),this.state={url:e.url||d()},j||("function"==typeof addEventListener&&(p||addEventListener("popstate",(function(){b(d())})),addEventListener("click",y)),j=!0)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},e.prototype.canRoute=function(t){var e=Object(r.toChildArray)(this.props.children);return this.getMatchingChildren(e,t,!1).length>0},e.prototype.routeTo=function(t){this.setState({url:t});var e=this.canRoute(t);return this.updating||this.forceUpdate(),e},e.prototype.componentWillMount=function(){h.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;p&&(this.unlisten=p.listen((function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))}))),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),h.splice(h.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,n){return t.filter(u).sort(c).map((function(t){var o=i(e,t.props.path,t.props);if(o){if(!1!==n){var c={url:e,matches:o};return a(c,o),delete c.ref,delete c.key,Object(r.cloneElement)(t,c)}return t}})).filter(Boolean)},e.prototype.render=function(t,e){var n=t.children,o=t.onChange,a=e.url,i=this.getMatchingChildren(Object(r.toChildArray)(n),a,!0),c=i[0]||null,u=this.previousUrl;return a!==u&&(this.previousUrl=a,"function"==typeof o&&o({router:this,url:a,previous:u,active:i,current:c})),c},e}(r.Component),x=function(t){return Object(r.createElement)(t.component,t)};w.subscribers=f,w.getCurrentUrl=d,w.route=v,w.Router=w,w.Route=x,w.Link=function(t){return Object(r.createElement)("a",a({onClick:m},t))},w.exec=i;var A,P,C,R=0,E=[],H=r.options.__r,S=r.options.diffed,M=r.options.__c,N=r.options.unmount;function k(t,e){r.options.__h&&r.options.__h(P,t,R||e),R=0;var n=P.__H||(P.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function D(t,e,n){var r=k(A++,2);return r.t=t,r.__c||(r.__=[n?n(e):B(void 0,e),function(t){var e=r.t(r.__[0],t);r.__[0]!==e&&(r.__=[e,r.__[1]],r.__c.setState({}))}],r.__c=P),r.__}function T(t,e){var n=k(A++,3);!r.options.__s&&W(n.__H,e)&&(n.__=t,n.__H=e,P.__H.__h.push(n))}function U(t){return R=5,z((function(){return{current:t}}),[])}function z(t,e){var n=k(A++,7);return W(n.__H,e)&&(n.__=t(),n.__H=e,n.__h=t),n.__}function G(t,e){return R=8,z((function(){return t}),e)}function L(t){var e=P.context[t.__c],n=k(A++,9);return n.__c=t,e?(null==n.__&&(n.__=!0,e.sub(P)),e.props.value):t.__}function V(){E.forEach((function(t){if(t.__P)try{t.__H.__h.forEach($),t.__H.__h.forEach(K),t.__H.__h=[]}catch(e){t.__H.__h=[],r.options.__e(e,t.__v)}})),E=[]}r.options.__r=function(t){H&&H(t),A=0;var e=(P=t.__c).__H;e&&(e.__h.forEach($),e.__h.forEach(K),e.__h=[])},r.options.diffed=function(t){S&&S(t);var e=t.__c;e&&e.__H&&e.__H.__h.length&&(1!==E.push(e)&&C===r.options.requestAnimationFrame||((C=r.options.requestAnimationFrame)||function(t){var e,n=function(){clearTimeout(r),I&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);I&&(e=requestAnimationFrame(n))})(V))},r.options.__c=function(t,e){e.some((function(t){try{t.__h.forEach($),t.__h=t.__h.filter((function(t){return!t.__||K(t)}))}catch(n){e.some((function(t){t.__h&&(t.__h=[])})),e=[],r.options.__e(n,t.__v)}})),M&&M(t,e)},r.options.unmount=function(t){N&&N(t);var e=t.__c;if(e&&e.__H)try{e.__H.__.forEach($)}catch(t){r.options.__e(t,e.__v)}};var I="function"==typeof requestAnimationFrame;function $(t){"function"==typeof t.__c&&t.__c()}function K(t){t.__c=t.__()}function W(t,e){return!t||t.length!==e.length||e.some((function(e,n){return e!==t[n]}))}function B(t,e){return"function"==typeof e?e(t):e}var F=n("RCZ+"),q=n.n(F);function Q(){return(Q=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function Z(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function J(t){const{className:e,type:n}=t,o=Z(t,["className","type"]);let a=`${q.a.btn} ${t.className}`;return"primary"===t.type&&(a+=" "+q.a["btn-primary"]),Object(r.h)("button",Q({className:a},o),t.children)}function X(){return(X=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function Y(t){return Object(r.h)("svg",X({xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},t),Object(r.h)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"}))}var tt=n("A+Cz"),et=n.n(tt);function nt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function rt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?nt(Object(n),!0).forEach((function(e){ot(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):nt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function ot(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function at(t=""){return{id:String(Date.now()),text:t}}function it(t,e){return{type:"UPDATE_PARAGRAPH",id:e,text:t}}function ct(t){return{type:"DELETE_PARAGRAPH",id:t}}function ut(t,e){return{type:"MOVE_PARAGRAPH",from:t,to:e}}function st(t,e){switch(e.type){case"UPDATE_PARAGRAPH":return rt(rt({},t),{},{paragraphs:rt(rt({},t.paragraphs),{},{[e.id]:rt(rt({},t.paragraphs[e.id]),{},{text:e.text})})});case"ADD_PARAGRAPH":{const e=at();return rt(rt({},t),{},{paragraphs:rt(rt({},t.paragraphs),{},{[e.id]:e}),list:[...t.list,e.id],lastAdded:t.list.length})}case"DELETE_PARAGRAPH":{const n=t.paragraphs;return delete n[e.id],t.list.splice(t.list.indexOf(e.id),1),rt(rt({},t),{},{paragraphs:rt({},n),list:[...t.list]})}case"MOVE_START":return rt({},t);case"MOVE_PARAGRAPH":{const n=t.list[e.from],r=t.list[e.to];return t.list[e.from]=r,t.list[e.to]=n,rt(rt({},t),{},{lastAdded:null,list:[...t.list]})}case"END_MOVE":return rt({},t);case"TOGGLE_SORT":return rt(rt({},t),{},{isSorting:!t.isSorting});case"TOGGLE_PREVIEW":return rt(rt({},t),{},{showsPreview:!t.showsPreview});default:return t}}const lt=at(""),pt={ver:1,paragraphs:{[lt.id]:lt},list:[lt.id],lastAdded:0,isSorting:!1,showsPreview:!1};const ht=Object(r.createContext)({state:pt,dispatch:()=>{}});function ft(){const{dispatch:t}=L(ht),e=G(()=>{t({type:"ADD_PARAGRAPH"})},[]);return Object(r.h)(J,{className:et.a["add-button"],type:"primary",onClick:e},Object(r.h)(Y,{className:q.a["btn-icon"]})," ",Object(r.h)("span",null,"追加する"))}var _t=n("hRbA"),dt=n.n(_t),vt=n("NSHr"),bt=n.n(vt);function gt(){return Object(r.h)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},Object(r.h)("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}))}function mt(){return Object(r.h)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},Object(r.h)("path",{d:"M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"}))}function Ot(){return Object(r.h)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},Object(r.h)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}))}var yt=n("+h6k"),jt=n.n(yt);function wt(t){const{state:e,dispatch:n}=L(ht),o=e.paragraphs[t.id];if(!o)return null;const a=G((function(t){return G((...e)=>{n(t(...e))},[])}),[]),i=t.index,c=i===e.list.length-1,u=G(()=>{n(ut(i,i-1))},[i]),s=G(()=>{n(ut(i,i+1))},[i]);return Object(r.h)(xt,{id:t.id,index:i,text:o.text,isSorting:e.isSorting,isLastItem:c,focus:i===e.lastAdded,onChange:a(it),onDelete:a(ct),onMoveUpward:u,onMoveDownward:s})}function xt(t){const e=G(e=>{null==t.onChange||t.onChange(e.currentTarget.value,t.id)},[t.onChange,t.id]),n=G(e=>{e.preventDefault(),null==t.onDelete||t.onDelete(t.id)},[t.id]),o=U(null);T(()=>{var e;t.focus&&(null==(e=o.current)||e.focus())},[t.focus]);const a="paragraph-"+t.index,i=t.isSorting?0:-1;return Object(r.h)("li",{className:`${bt.a.card} ${jt.a.paragraph}`,"data-is-editing":t.isSorting?"true":"false"},Object(r.h)("div",{className:`${jt.a.move} ${jt.a["edit-form"]}`},Object(r.h)("button",{className:jt.a["move-button"],"aria-label":"上へ移動",tabIndex:i,onClick:t.onMoveUpward,disabled:0===t.index},Object(r.h)(mt,null)),Object(r.h)("button",{className:jt.a["move-button"],"aria-label":"下へ移動",tabIndex:i,onClick:t.onMoveDownward,disabled:t.isLastItem},Object(r.h)(gt,null))),Object(r.h)("label",{className:jt.a.textarea},Object(r.h)("textarea",{id:a,name:"paragraph-"+t.index,ref:o,value:t.text,onKeyUp:e,onChange:e,placeholder:0===t.index?"文章を入力":""}),Object(r.h)("div",{className:jt.a.count,"aria-label":"文字カウント"},t.text.length),Object(r.h)("span",{className:jt.a["label-text"]},"段落")),Object(r.h)("div",{className:`${jt.a.delete} ${jt.a["edit-form"]}`},Object(r.h)("button",{onClick:n,"aria-label":"削除ボタン",tabIndex:i},Object(r.h)(Ot,null))))}var At=n("z7YW"),Pt=n.n(At),Ct=n("weRa"),Rt=n.n(Ct);function Et(t){const e=z(()=>t.list.map(e=>{var n,o;const a=(null!=(n=null==(o=t.paragraph[e])?void 0:o.text)?n:"").split("\n"),i=a.reduce((t,e,n)=>n===a.length-1?[...t,e]:[...t,e,Object(r.h)("br",{key:"br-"+n})],[]);return Object(r.h)("p",{className:""+Rt.a["japanese-text"],key:"preview-paragraph-"+e},i)}),[t.list,t.paragraph]);return Object(r.h)("div",{className:`${Pt.a.preview} ${bt.a.card}`},e)}function Ht(){const{state:t}=L(ht);return Object(r.h)("div",{className:dt.a.editor},Object(r.h)("div",null,Object(r.h)("ul",null,t.list.map((e,n)=>{const o=t.paragraphs[e];return o&&Object(r.h)(wt,{key:"paragraph-"+o.id,id:o.id,index:n})}),Object(r.h)("li",null,Object(r.h)(ft,null)))),t.showsPreview&&Object(r.h)("div",null,Object(r.h)(Et,{list:t.list,paragraph:t.paragraphs})))}var St=n("FA6U"),Mt=n.n(St);var Nt=()=>Object(r.h)("div",{className:Mt.a.home},Object(r.h)(Ht,null));function kt(){return Object(r.h)("svg",{xmlns:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 24 24",height:"24",viewBox:"0 0 24 24",width:"24"},Object(r.h)("g",null,Object(r.h)("path",{d:"M19,3H5C3.89,3,3,3.9,3,5v14c0,1.1,0.89,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.11,3,19,3z M19,19H5V7h14V19z M13.5,13 c0,0.83-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5c0-0.83,0.67-1.5,1.5-1.5S13.5,12.17,13.5,13z M12,9c-2.73,0-5.06,1.66-6,4 c0.94,2.34,3.27,4,6,4s5.06-1.66,6-4C17.06,10.66,14.73,9,12,9z M12,15.5c-1.38,0-2.5-1.12-2.5-2.5c0-1.38,1.12-2.5,2.5-2.5 c1.38,0,2.5,1.12,2.5,2.5C14.5,14.38,13.38,15.5,12,15.5z"})))}function Dt(){return Object(r.h)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},Object(r.h)("path",{d:"M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"}))}var Tt=n("ySiU"),Ut=n.n(Tt);var zt=()=>{const{dispatch:t}=L(ht),e=G(e=>{e.preventDefault(),t({type:"TOGGLE_SORT"})},[]),n=G(e=>{e.preventDefault(),t({type:"TOGGLE_PREVIEW"})},[]);return Object(r.h)("header",{className:Ut.a.header},Object(r.h)("h1",null,"段落エディター"),Object(r.h)("nav",null,Object(r.h)("a",{onClick:e},Object(r.h)(Dt,null),Object(r.h)("span",null,"並び替え")),Object(r.h)("a",{onClick:n},Object(r.h)(kt,null),Object(r.h)("span",null,"プレビュー"))))};var Gt=()=>{const t=U(""),e=G(e=>{t.current=e.url},[]),[n,o]=D(st,void 0,()=>function(){try{var t;return rt(rt({},JSON.parse(null!=(t=window.localStorage.getItem("save_data"))?t:"")),{},{isSorting:!1,lastAdded:null})}catch{return pt}}());T(()=>{!function(t){try{window.localStorage.setItem("save_data",JSON.stringify(t))}catch{}}(n)},[n]);const a=z(()=>({state:n,dispatch:o}),[n,o]);return Object(r.h)("div",{id:"app"},Object(r.h)(ht.Provider,{value:a},Object(r.h)(zt,null),Object(r.h)(w,{onChange:e},Object(r.h)(x,{path:"/paragraph-editor-site",component:Nt,default:!0}))))};e.default=Gt},"RCZ+":function(t,e,n){t.exports={btn:"btn__ove9P","btn-icon":"btn-icon__3KkgF","btn-primary":"btn-primary__1R6Z0"}},hRbA:function(t,e,n){t.exports={editor:"editor__1I80g"}},weRa:function(t,e,n){t.exports={"japanese-text":"japanese-text__1TNcs"}},ySiU:function(t,e,n){t.exports={header:"header__3ax1h",active:"active__2XB2z"}},z7YW:function(t,e,n){t.exports={preview:"preview__2K3aJ"}}});
//# sourceMappingURL=ssr-bundle.js.map