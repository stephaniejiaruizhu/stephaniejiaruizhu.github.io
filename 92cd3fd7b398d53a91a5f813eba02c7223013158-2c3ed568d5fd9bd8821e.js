(self.webpackChunkstephaniejiaruizhu=self.webpackChunkstephaniejiaruizhu||[]).push([[952],{3509:function(t,e){var r,n,a,s,o,l,i,u,f,d,c,m,p,b,h,v;n="undefined"!=typeof window?window:this,o="0.5.4",l="hasOwnProperty",i=/[\.\/]/,u=/\s*,\s*/,f=function(t,e){return t-e},d={n:{}},c=function(){for(var t=0,e=this.length;t<e;t++)if(void 0!==this[t])return this[t]},m=function(){for(var t=this.length;--t;)if(void 0!==this[t])return this[t]},p=Object.prototype.toString,b=String,h=Array.isArray||function(t){return t instanceof Array||"[object Array]"==p.call(t)},v=function t(e,r){var n,o=s,l=Array.prototype.slice.call(arguments,2),i=t.listeners(e),u=0,d=[],p={},b=[],h=a;b.firstDefined=c,b.lastDefined=m,a=e,s=0;for(var v=0,g=i.length;v<g;v++)"zIndex"in i[v]&&(d.push(i[v].zIndex),i[v].zIndex<0&&(p[i[v].zIndex]=i[v]));for(d.sort(f);d[u]<0;)if(n=p[d[u++]],b.push(n.apply(r,l)),s)return s=o,b;for(v=0;v<g;v++)if("zIndex"in(n=i[v]))if(n.zIndex==d[u]){if(b.push(n.apply(r,l)),s)break;do{if((n=p[d[++u]])&&b.push(n.apply(r,l)),s)break}while(n)}else p[n.zIndex]=n;else if(b.push(n.apply(r,l)),s)break;return s=o,a=h,b},v._events=d,v.listeners=function(t){var e,r,n,a,s,o,l,u,f=h(t)?t:t.split(i),c=d,m=[c],p=[];for(a=0,s=f.length;a<s;a++){for(u=[],o=0,l=m.length;o<l;o++)for(r=[(c=m[o].n)[f[a]],c["*"]],n=2;n--;)(e=r[n])&&(u.push(e),p=p.concat(e.f||[]));m=u}return p},v.separator=function(t){t?(t="["+(t=b(t).replace(/(?=[\.\^\]\[\-])/g,"\\"))+"]",i=new RegExp(t)):i=/[\.\/]/},v.on=function(t,e){if("function"!=typeof e)return function(){};for(var r=h(t)?h(t[0])?t:[t]:b(t).split(u),n=0,a=r.length;n<a;n++)!function(t){for(var r,n=h(t)?t:b(t).split(i),a=d,s=0,o=n.length;s<o;s++)a=(a=a.n).hasOwnProperty(n[s])&&a[n[s]]||(a[n[s]]={n:{}});for(a.f=a.f||[],s=0,o=a.f.length;s<o;s++)if(a.f[s]==e){r=!0;break}!r&&a.f.push(e)}(r[n]);return function(t){+t==+t&&(e.zIndex=+t)}},v.f=function(t){var e=[].slice.call(arguments,1);return function(){v.apply(null,[t,null].concat(e).concat([].slice.call(arguments,0)))}},v.stop=function(){s=1},v.nt=function(t){var e=h(a)?a.join("."):a;return t?new RegExp("(?:\\.|\\/|^)"+t+"(?:\\.|\\/|$)").test(e):e},v.nts=function(){return h(a)?a:a.split(i)},v.off=v.unbind=function(t,e){if(t){var r=h(t)?h(t[0])?t:[t]:b(t).split(u);if(r.length>1)for(var n=0,a=r.length;n<a;n++)v.off(r[n],e);else{r=h(t)?t:b(t).split(i);var s,o,f,c,m,p=[d],g=[];for(n=0,a=r.length;n<a;n++)for(c=0;c<p.length;c+=f.length-2){if(f=[c,1],s=p[c].n,"*"!=r[n])s[r[n]]&&(f.push(s[r[n]]),g.unshift({n:s,name:r[n]}));else for(o in s)s[l](o)&&(f.push(s[o]),g.unshift({n:s,name:o}));p.splice.apply(p,f)}for(n=0,a=p.length;n<a;n++)for(s=p[n];s.n;){if(e){if(s.f){for(c=0,m=s.f.length;c<m;c++)if(s.f[c]==e){s.f.splice(c,1);break}!s.f.length&&delete s.f}for(o in s.n)if(s.n[l](o)&&s.n[o].f){var y=s.n[o].f;for(c=0,m=y.length;c<m;c++)if(y[c]==e){y.splice(c,1);break}!y.length&&delete s.n[o].f}}else for(o in delete s.f,s.n)s.n[l](o)&&s.n[o].f&&delete s.n[o].f;s=s.n}t:for(n=0,a=g.length;n<a;n++){for(o in(s=g[n]).n[s.name].f)continue t;for(o in s.n[s.name].n)continue t;delete s.n[s.name]}}}else v._events=d={n:{}}},v.once=function(t,e){return v.on(t,(function r(){return v.off(t,r),e.apply(this,arguments)}))},v.version=o,v.toString=function(){return"You are running Eve 0.5.4"},n.eve=v,t.exports?t.exports=v:void 0===(r=function(){return v}.apply(e,[]))||(t.exports=r)},7194:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={slide:r(2300),stack:r(611),elastic:r(5595),bubble:r(5905),push:r(4208),pushRotate:r(8689),scaleDown:r(4468),scaleRotate:r(8188),fallDown:r(9932),reveal:r(6545)},t.exports=e.default},4349:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}();function s(t){return t&&t.__esModule?t:{default:t}}var o=r(7294),l=s(o),i=s(r(5697)),u=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e,r){for(var n=!0;n;){var a=t,s=e,o=r;n=!1,null===a&&(a=Function.prototype);var l=Object.getOwnPropertyDescriptor(a,s);if(void 0!==l){if("value"in l)return l.value;var i=l.get;if(void 0===i)return;return i.call(o)}var u=Object.getPrototypeOf(a);if(null===u)return;t=u,e=s,r=o,n=!0,l=u=void 0}}(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,t),this.state={hover:!1}}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),a(e,[{key:"getLineStyle",value:function(t){return n({position:"absolute",height:"20%",left:0,right:0,top:2*t*20+"%",opacity:this.state.hover?.6:1},this.state.hover&&this.props.styles.bmBurgerBarsHover)}},{key:"render",value:function(){var t=this,e=void 0;if(this.props.customIcon){var r={className:("bm-icon "+(this.props.customIcon.props.className||"")).trim(),style:n({width:"100%",height:"100%"},this.props.styles.bmIcon)};e=l.default.cloneElement(this.props.customIcon,r)}else e=l.default.createElement("span",null,[0,1,2].map((function(e){return l.default.createElement("span",{key:e,className:("bm-burger-bars "+t.props.barClassName+" "+(t.state.hover?"bm-burger-bars-hover":"")).trim(),style:n({},t.getLineStyle(e),t.props.styles.bmBurgerBars)})})));return l.default.createElement("div",{className:("bm-burger-button "+this.props.className).trim(),style:n({zIndex:1e3},this.props.styles.bmBurgerButton)},l.default.createElement("button",{type:"button",id:"react-burger-menu-btn",onClick:this.props.onClick,onMouseOver:function(){t.setState({hover:!0}),t.props.onIconHoverChange&&t.props.onIconHoverChange({isMouseIn:!0})},onMouseOut:function(){t.setState({hover:!1}),t.props.onIconHoverChange&&t.props.onIconHoverChange({isMouseIn:!1})},style:{position:"absolute",left:0,top:0,zIndex:1,width:"100%",height:"100%",margin:0,padding:0,border:"none",fontSize:0,background:"transparent",cursor:"pointer"}},"Open Menu"),e)}}]),e}(o.Component);e.default=u,u.propTypes={barClassName:i.default.string,customIcon:i.default.element,styles:i.default.object},u.defaultProps={barClassName:"",className:"",styles:{}},t.exports=e.default},8145:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),s=function(t,e,r){for(var n=!0;n;){var a=t,s=e,o=r;n=!1,null===a&&(a=Function.prototype);var l=Object.getOwnPropertyDescriptor(a,s);if(void 0!==l){if("value"in l)return l.value;var i=l.get;if(void 0===i)return;return i.call(o)}var u=Object.getPrototypeOf(a);if(null===u)return;t=u,e=s,r=o,n=!0,l=u=void 0}};function o(t){return t&&t.__esModule?t:{default:t}}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=r(7294),u=o(i),f=o(r(5697)),d=function(t){function e(){l(this,e),s(Object.getPrototypeOf(e.prototype),"constructor",this).apply(this,arguments)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),a(e,[{key:"getCrossStyle",value:function(t){return{position:"absolute",width:3,height:14,transform:"before"===t?"rotate(45deg)":"rotate(-45deg)"}}},{key:"render",value:function(){var t,e=this;if(this.props.customIcon){var r={className:("bm-cross "+(this.props.customIcon.props.className||"")).trim(),style:n({width:"100%",height:"100%"},this.props.styles.bmCross)};t=u.default.cloneElement(this.props.customIcon,r)}else t=u.default.createElement("span",{style:{position:"absolute",top:"6px",right:"14px"}},["before","after"].map((function(t,r){return u.default.createElement("span",{key:r,className:("bm-cross "+e.props.crossClassName).trim(),style:n({},e.getCrossStyle(t),e.props.styles.bmCross)})})));return u.default.createElement("div",{className:("bm-cross-button "+this.props.className).trim(),style:n({},{position:"absolute",width:24,height:24,right:8,top:8},this.props.styles.bmCrossButton)},u.default.createElement("button",{type:"button",id:"react-burger-cross-btn",onClick:this.props.onClick,style:{position:"absolute",left:0,top:0,zIndex:1,width:"100%",height:"100%",margin:0,padding:0,border:"none",fontSize:0,background:"transparent",cursor:"pointer"},tabIndex:this.props.isOpen?0:-1},"Close Menu"),t)}}]),e}(i.Component);e.default=d,d.propTypes={crossClassName:f.default.string,customIcon:f.default.element,isOpen:f.default.bool,styles:f.default.object},d.defaultProps={crossClassName:"",className:"",styles:{},isOpen:!1},t.exports=e.default},4548:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={overlay:function(t){return{position:"fixed",zIndex:1e3,width:"100%",height:"100%",background:"rgba(0, 0, 0, 0.3)",opacity:t?1:0,MozTransform:t?"":"translate3d(100%, 0, 0)",MsTransform:t?"":"translate3d(100%, 0, 0)",OTransform:t?"":"translate3d(100%, 0, 0)",WebkitTransform:t?"":"translate3d(100%, 0, 0)",transform:t?"":"translate3d(100%, 0, 0)",transition:t?"opacity 0.3s":"opacity 0.3s, transform 0s 0.3s"}},menuWrap:function(t,e,r){return{position:"fixed",right:r?0:"inherit",zIndex:1100,width:e,height:"100%",MozTransform:t?"":r?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",MsTransform:t?"":r?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",OTransform:t?"":r?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",WebkitTransform:t?"":r?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",transform:t?"":r?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",transition:"all 0.5s"}},menu:function(){return{height:"100%",boxSizing:"border-box",overflow:"auto"}},itemList:function(){return{height:"100%"}},item:function(){return{display:"block"}}},t.exports=e.default},255:function(t,e){"use strict";function r(){var t=Array.from(document.getElementsByClassName("bm-item")).shift();t&&t.focus()}function n(){var t=Array.from(document.getElementsByClassName("bm-item")).pop();t&&t.focus()}function a(){var t=document.getElementById("react-burger-cross-btn");t&&t.focus()}function s(t){if(document.activeElement.className.includes("bm-item")){var e=document.activeElement[t];e?e.focus():a()}else"previousElementSibling"===t?n():r()}Object.defineProperty(e,"__esModule",{value:!0}),e.focusOnFirstMenuItem=r,e.focusOnLastMenuItem=n,e.focusOnCrossButton=a,e.focusOnMenuButton=function(){var t=document.getElementById("react-burger-menu-btn");t&&t.focus()},e.focusOnMenuItem=s,e.focusOnNextMenuItem=function(){s("nextElementSibling")},e.focusOnPreviousMenuItem=function(){s("previousElementSibling")}},2330:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var t=void 0;try{t=r(4048)}finally{return t}},t.exports=e.default},842:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.pxToNum=function(t){return parseInt(t.slice(0,-2),10)}},7486:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var r=[],n=!0,a=!1,s=void 0;try{for(var o,l=t[Symbol.iterator]();!(n=(o=l.next()).done)&&(r.push(o.value),!e||r.length!==e);n=!0);}catch(i){a=!0,s=i}finally{try{!n&&l.return&&l.return()}finally{if(a)throw s}}return r}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t};function s(t){return t&&t.__esModule?t:{default:t}}var o=s(r(7294)),l=(s(r(3935)),s(r(5697))),i=s(r(4548)),u=r(255),f=s(r(4349)),d=s(r(8145));e.default=function(t){if(!t)throw new Error("No styles supplied");var e="ArrowDown",r="ArrowUp";var s=function(s){var l,c,m=o.default.useState(!1),p=n(m,2),b=p[0],h=p[1],v=o.default.useRef(),g=o.default.useRef({}),y=(l=s.isOpen,c=o.default.useRef(l),o.default.useEffect((function(){c.current=l})),c.current);function O(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];g.current=t,w(),setTimeout((function(){h((function(e){return void 0!==t.isOpen?t.isOpen:!e}))}))}function T(){"function"==typeof s.onClose?s.onClose():O()}function C(t,e){var r=s.width,n=s.right;return t(b,"string"!=typeof r?r+"px":r,n,e)}function x(e,r,n){var o="bm"+e.replace(e.charAt(0),e.charAt(0).toUpperCase()),l=i.default[e]?C(i.default[e]):{};return t[e]&&(l=a({},l,C(t[e],r+1))),s.styles[o]&&(l=a({},l,s.styles[o])),n&&(l=a({},l,n)),s.noTransition&&delete l.transition,l}function M(t,e,r){var n=document.getElementById(t);if(n){var a=C(e);for(var o in a)a.hasOwnProperty(o)&&(n.style[o]=r?a[o]:"");var l=function(t){return t.style["overflow-x"]=r?"hidden":""};s.htmlClassName||l(document.querySelector("html")),s.bodyClassName||l(document.querySelector("body"))}else console.error("Element with ID '"+t+"' not found")}function w(){var e=arguments.length<=0||void 0===arguments[0]||arguments[0],r=function(t,r){return t.classList[e?"add":"remove"](r)};s.htmlClassName&&r(document.querySelector("html"),s.htmlClassName),s.bodyClassName&&r(document.querySelector("body"),s.bodyClassName),t.pageWrap&&s.pageWrapId&&M(s.pageWrapId,t.pageWrap,e),t.outerContainer&&s.outerContainerId&&M(s.outerContainerId,t.outerContainer,e);var n=document.querySelector(".bm-menu-wrap");n&&(e?n.removeAttribute("hidden"):n.setAttribute("hidden",!0))}function N(){v.current&&clearTimeout(v.current)}function I(t){switch((t=t||window.event).key){case"Escape":s.disableCloseOnEsc||(T(),(0,u.focusOnMenuButton)());break;case e:(0,u.focusOnNextMenuItem)();break;case r:(0,u.focusOnPreviousMenuItem)();break;case"Home":(0,u.focusOnFirstMenuItem)();break;case"End":(0,u.focusOnLastMenuItem)()}}function _(t){if((t=t||window.event).target===document.getElementById("react-burger-menu-btn"))switch(t.key){case e:case" ":O();break;case r:O({focusOnLastItem:!0})}}return o.default.useEffect((function(){return s.isOpen&&O({isOpen:!0,noStateChange:!0}),function(){w(!1),N()}}),[]),o.default.useEffect((function(){var e,r;void 0!==s.isOpen&&s.isOpen!==b&&s.isOpen!==y?O():t.svg&&(e=document.getElementById("bm-morph-shape"),r=t.svg.lib(e).select("path"),b?t.svg.animate(r):setTimeout((function(){r.attr("d",t.svg.pathInitial)}),300))})),o.default.useEffect((function(){var t=g.current,e=t.noStateChange,r=t.focusOnLastItem;e||s.onStateChange({isOpen:b}),s.disableAutoFocus||(b?r?(0,u.focusOnLastMenuItem)():(0,u.focusOnFirstMenuItem)():document.activeElement?document.activeElement.blur():document.body.blur()),N(),v.current=setTimeout((function(){v.current=null,b||w(!1)}),500);var n=b?I:_,a=s.customOnKeyDown||n;return window.addEventListener("keydown",a),function(){window.removeEventListener("keydown",a)}}),[b]),o.default.createElement("div",null,!s.noOverlay&&o.default.createElement("div",{className:("bm-overlay "+s.overlayClassName).trim(),onClick:function(){!0===s.disableOverlayClick||"function"==typeof s.disableOverlayClick&&s.disableOverlayClick()||T()},style:x("overlay")}),!1!==s.customBurgerIcon&&o.default.createElement("div",{style:x("burgerIcon")},o.default.createElement(f.default,{onClick:function(){"function"==typeof s.onOpen?s.onOpen():O()},styles:s.styles,customIcon:s.customBurgerIcon,className:s.burgerButtonClassName,barClassName:s.burgerBarClassName,onIconStateChange:s.onIconStateChange})),o.default.createElement("div",{id:s.id,className:("bm-menu-wrap "+s.className).trim(),style:x("menuWrap"),"aria-hidden":!b},t.svg&&o.default.createElement("div",{id:"bm-morph-shape",className:("bm-morph-shape "+s.morphShapeClassName).trim(),style:x("morphShape")},o.default.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 100 800",preserveAspectRatio:"none"},o.default.createElement("path",{d:t.svg.pathInitial}))),o.default.createElement("div",{className:("bm-menu "+s.menuClassName).trim(),style:x("menu")},o.default.createElement(s.itemListElement,{className:("bm-item-list "+s.itemListClassName).trim(),style:x("itemList")},o.default.Children.map(s.children,(function(t,e){if(t){var r={key:e,className:["bm-item",s.itemClassName,t.props.className].filter((function(t){return!!t})).join(" "),style:x("item",e,t.props.style),tabIndex:b?0:-1};return o.default.cloneElement(t,r)}})))),!1!==s.customCrossIcon&&o.default.createElement("div",{style:x("closeButton")},o.default.createElement(d.default,{onClick:T,styles:s.styles,customIcon:s.customCrossIcon,className:s.crossButtonClassName,crossClassName:s.crossClassName,isOpen:b}))))};return s.propTypes={bodyClassName:l.default.string,burgerBarClassName:l.default.string,burgerButtonClassName:l.default.string,className:l.default.string,crossButtonClassName:l.default.string,crossClassName:l.default.string,customBurgerIcon:l.default.oneOfType([l.default.element,l.default.oneOf([!1])]),customCrossIcon:l.default.oneOfType([l.default.element,l.default.oneOf([!1])]),customOnKeyDown:l.default.func,disableAutoFocus:l.default.bool,disableCloseOnEsc:l.default.bool,disableOverlayClick:l.default.oneOfType([l.default.bool,l.default.func]),htmlClassName:l.default.string,id:l.default.string,isOpen:l.default.bool,itemClassName:l.default.string,itemListClassName:l.default.string,itemListElement:l.default.oneOf(["div","nav"]),menuClassName:l.default.string,morphShapeClassName:l.default.string,noOverlay:l.default.bool,noTransition:l.default.bool,onClose:l.default.func,onIconHoverChange:l.default.func,onOpen:l.default.func,onStateChange:l.default.func,outerContainerId:t&&t.outerContainer?l.default.string.isRequired:l.default.string,overlayClassName:l.default.string,pageWrapId:t&&t.pageWrap?l.default.string.isRequired:l.default.string,right:l.default.bool,styles:l.default.object,width:l.default.oneOfType([l.default.number,l.default.string])},s.defaultProps={bodyClassName:"",burgerBarClassName:"",burgerButtonClassName:"",className:"",crossButtonClassName:"",crossClassName:"",disableAutoFocus:!1,disableCloseOnEsc:!1,htmlClassName:"",id:"",itemClassName:"",itemListClassName:"",menuClassName:"",morphShapeClassName:"",noOverlay:!1,noTransition:!1,onStateChange:function(){},outerContainerId:"",overlayClassName:"",pageWrapId:"",styles:{},width:300,onIconHoverChange:function(){},itemListElement:"nav"},s},t.exports=e.default},5905:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(r(2330)),s=n(r(7486)),o=r(842),l={svg:{lib:a.default,pathInitial:"M-7.312,0H0c0,0,0,113.839,0,400c0,264.506,0,400,0,400h-7.312V0z",pathOpen:"M-7.312,0H15c0,0,66,113.339,66,399.5C81,664.006,15,800,15,800H-7.312V0z;M-7.312,0H100c0,0,0,113.839,0,400c0,264.506,0,400,0,400H-7.312V0z",animate:function(t){var e=0,r=this.pathOpen.split(";"),n=r.length,a=window.mina;!function s(){e>n-1||(t.animate({path:r[e]},0===e?400:500,0===e?a.easein:a.elastic,(function(){s()})),e++)}()}},morphShape:function(t,e,r){return{position:"absolute",width:"100%",height:"100%",right:r?"inherit":0,left:r?0:"inherit",MozTransform:r?"rotateY(180deg)":"rotateY(0deg)",MsTransform:r?"rotateY(180deg)":"rotateY(0deg)",OTransform:r?"rotateY(180deg)":"rotateY(0deg)",WebkitTransform:r?"rotateY(180deg)":"rotateY(0deg)",transform:r?"rotateY(180deg)":"rotateY(0deg)"}},menuWrap:function(t,e,r){return{MozTransform:t?"translate3d(0, 0, 0)":r?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",MsTransform:t?"translate3d(0, 0, 0)":r?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",OTransform:t?"translate3d(0, 0, 0)":r?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",WebkitTransform:t?"translate3d(0, 0, 0)":r?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",transform:t?"translate3d(0, 0, 0)":r?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",transition:t?"transform 0.4s 0s":"transform 0.4s"}},menu:function(t,e,r){var n=(0,o.pxToNum)(e)-140;return{position:"fixed",MozTransform:t?"":r?"translate3d("+n+", 0, 0)":"translate3d(-"+n+", 0, 0)",MsTransform:t?"":r?"translate3d("+n+", 0, 0)":"translate3d(-"+n+", 0, 0)",OTransform:t?"":r?"translate3d("+n+", 0, 0)":"translate3d(-"+n+", 0, 0)",WebkitTransform:t?"":r?"translate3d("+n+", 0, 0)":"translate3d(-"+n+", 0, 0)",transform:t?"":r?"translate3d("+n+", 0, 0)":"translate3d(-"+n+", 0, 0)",transition:t?"opacity 0.1s 0.4s cubic-bezier(.17, .67, .1, 1.27), transform 0.1s 0.4s cubic-bezier(.17, .67, .1, 1.27)":"opacity 0s 0.3s cubic-bezier(.17, .67, .1, 1.27), transform 0s 0.3s cubic-bezier(.17, .67, .1, 1.27)",opacity:t?1:0}},item:function(t,e,r,n){var a=(0,o.pxToNum)(e)-140;return{MozTransform:t?"translate3d(0, 0, 0)":r?"translate3d("+a+", 0, 0)":"translate3d(-"+a+", 0, 0)",MsTransform:t?"translate3d(0, 0, 0)":r?"translate3d("+a+", 0, 0)":"translate3d(-"+a+", 0, 0)",OTransform:t?"translate3d(0, 0, 0)":r?"translate3d("+a+", 0, 0)":"translate3d(-"+a+", 0, 0)",WebkitTransform:t?"translate3d(0, 0, 0)":r?"translate3d("+a+", 0, 0)":"translate3d(-"+a+", 0, 0)",transform:t?"translate3d(0, 0, 0)":r?"translate3d("+a+", 0, 0)":"translate3d(-"+a+", 0, 0)",transition:t?"opacity 0.3s 0.4s, transform 0.3s 0.4s":"opacity 0s 0.3s cubic-bezier(.17, .67, .1, 1.27), transform 0s 0.3s cubic-bezier(.17, .67, .1, 1.27)",opacity:t?1:0}},closeButton:function(t,e,r){var n=(0,o.pxToNum)(e)-140;return{MozTransform:t?"translate3d(0, 0, 0)":r?"translate3d("+n+", 0, 0)":"translate3d(-"+n+", 0, 0)",MsTransform:t?"translate3d(0, 0, 0)":r?"translate3d("+n+", 0, 0)":"translate3d(-"+n+", 0, 0)",OTransform:t?"translate3d(0, 0, 0)":r?"translate3d("+n+", 0, 0)":"translate3d(-"+n+", 0, 0)",WebkitTransform:t?"translate3d(0, 0, 0)":r?"translate3d("+n+", 0, 0)":"translate3d(-"+n+", 0, 0)",transform:t?"translate3d(0, 0, 0)":r?"translate3d("+n+", 0, 0)":"translate3d(-"+n+", 0, 0)",transition:t?"opacity 0.3s 0.4s cubic-bezier(.17, .67, .1, 1.27), transform 0.3s 0.4s cubic-bezier(.17, .67, .1, 1.27)":"opacity 0s 0.3s cubic-bezier(.17, .67, .1, 1.27), transform 0s 0.3s cubic-bezier(.17, .67, .1, 1.27)",opacity:t?1:0}}};e.default=(0,s.default)(l),t.exports=e.default},5595:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(r(2330)),s=n(r(7486)),o=r(842),l={svg:{lib:a.default,pathInitial:"M-1,0h101c0,0-97.833,153.603-97.833,396.167C2.167,627.579,100,800,100,800H-1V0z",pathOpen:"M-1,0h101c0,0,0-1,0,395c0,404,0,405,0,405H-1V0z",animate:function(t){t.animate({path:this.pathOpen},400,window.mina.easeinout)}},morphShape:function(t,e,r){return{position:"absolute",width:120,height:"100%",right:r?"inherit":0,left:r?0:"inherit",MozTransform:r?"rotateY(180deg)":"",MsTransform:r?"rotateY(180deg)":"",OTransform:r?"rotateY(180deg)":"",WebkitTransform:r?"rotateY(180deg)":"",transform:r?"rotateY(180deg)":""}},menuWrap:function(t,e,r){return{MozTransform:t?"translate3d(0, 0, 0)":r?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",MsTransform:t?"translate3d(0, 0, 0)":r?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",OTransform:t?"translate3d(0, 0, 0)":r?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",WebkitTransform:t?"translate3d(0, 0, 0)":r?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",transform:t?"translate3d(0, 0, 0)":r?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",transition:"all 0.3s"}},menu:function(t,e,r){return{position:"fixed",right:r?0:"inherit",width:(0,o.pxToNum)(e)-120,whiteSpace:"nowrap",boxSizing:"border-box",overflow:"visible"}},itemList:function(t,e,r){if(r)return{position:"relative",left:"-110px",width:"170%",overflow:"auto"}},pageWrap:function(t,e,r){return{MozTransform:t?"":r?"translate3d(-100px, 0, 0)":"translate3d(100px, 0, 0)",MsTransform:t?"":r?"translate3d(-100px, 0, 0)":"translate3d(100px, 0, 0)",OTransform:t?"":r?"translate3d(-100px, 0, 0)":"translate3d(100px, 0, 0)",WebkitTransform:t?"":r?"translate3d(-100px, 0, 0)":"translate3d(100px, 0, 0)",transform:t?"":r?"translate3d(-100px, 0, 0)":"translate3d(100px, 0, 0)",transition:t?"all 0.3s":"all 0.3s 0.1s"}},outerContainer:function(t){return{overflow:t?"":"hidden"}}};e.default=(0,s.default)(l),t.exports=e.default},9932:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,a=r(7486),s=(n=a)&&n.__esModule?n:{default:n};e.default=(0,s.default)({menuWrap:function(t){return{MozTransform:t?"":"translate3d(0, -100%, 0)",MsTransform:t?"":"translate3d(0, -100%, 0)",OTransform:t?"":"translate3d(0, -100%, 0)",WebkitTransform:t?"":"translate3d(0, -100%, 0)",transform:t?"":"translate3d(0, -100%, 0)",transition:"all 0.5s ease-in-out"}},pageWrap:function(t,e,r){return{MozTransform:t?"":r?"translate3d(-"+e+", 0, 0)":"translate3d("+e+", 0, 0)",MsTransform:t?"":r?"translate3d(-"+e+", 0, 0)":"translate3d("+e+", 0, 0)",OTransform:t?"":r?"translate3d(-"+e+", 0, 0)":"translate3d("+e+", 0, 0)",WebkitTransform:t?"":r?"translate3d(-"+e+", 0, 0)":"translate3d("+e+", 0, 0)",transform:t?"":r?"translate3d(-"+e+", 0, 0)":"translate3d("+e+", 0, 0)",transition:"all 0.5s"}},outerContainer:function(t){return{perspective:"1500px",perspectiveOrigin:"0% 50%",overflow:t?"":"hidden"}}}),t.exports=e.default},4208:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,a=r(7486),s=(n=a)&&n.__esModule?n:{default:n};e.default=(0,s.default)({pageWrap:function(t,e,r){return{MozTransform:t?"":r?"translate3d(-"+e+", 0, 0)":"translate3d("+e+", 0, 0)",MsTransform:t?"":r?"translate3d(-"+e+", 0, 0)":"translate3d("+e+", 0, 0)",OTransform:t?"":r?"translate3d(-"+e+", 0, 0)":"translate3d("+e+", 0, 0)",WebkitTransform:t?"":r?"translate3d(-"+e+", 0, 0)":"translate3d("+e+", 0, 0)",transform:t?"":r?"translate3d(-"+e+", 0, 0)":"translate3d("+e+", 0, 0)",transition:"all 0.5s"}},outerContainer:function(t){return{overflow:t?"":"hidden"}}}),t.exports=e.default},8689:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,a=r(7486),s=(n=a)&&n.__esModule?n:{default:n};e.default=(0,s.default)({pageWrap:function(t,e,r){return{MozTransform:t?"":r?"translate3d(-"+e+", 0, 0) rotateY(15deg)":"translate3d("+e+", 0, 0) rotateY(-15deg)",MsTransform:t?"":r?"translate3d(-"+e+", 0, 0) rotateY(15deg)":"translate3d("+e+", 0, 0) rotateY(-15deg)",OTransform:t?"":r?"translate3d(-"+e+", 0, 0) rotateY(15deg)":"translate3d("+e+", 0, 0) rotateY(-15deg)",WebkitTransform:t?"":r?"translate3d(-"+e+", 0, 0) rotateY(15deg)":"translate3d("+e+", 0, 0) rotateY(-15deg)",transform:t?"":r?"translate3d(-"+e+", 0, 0) rotateY(15deg)":"translate3d("+e+", 0, 0) rotateY(-15deg)",transformOrigin:r?"100% 50%":"0% 50%",transformStyle:"preserve-3d",transition:"all 0.5s"}},outerContainer:function(t){return{perspective:"1500px",overflow:t?"":"hidden"}}}),t.exports=e.default},6545:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,a=r(7486),s=(n=a)&&n.__esModule?n:{default:n};e.default=(0,s.default)({menuWrap:function(t,e,r){return{MozTransform:"translate3d(0, 0, 0)",MsTransform:"translate3d(0, 0, 0)",OTransform:"translate3d(0, 0, 0)",WebkitTransform:"translate3d(0, 0, 0)",transform:"translate3d(0, 0, 0)",zIndex:t?1e3:-1}},overlay:function(t,e,r){return{zIndex:1400,MozTransform:t?r?"translate3d(-"+e+", 0, 0)":"translate3d("+e+", 0, 0)":"translate3d(0, 0, 0)",MsTransform:t?r?"translate3d(-"+e+", 0, 0)":"translate3d("+e+", 0, 0)":"translate3d(0, 0, 0)",OTransform:t?r?"translate3d(-"+e+", 0, 0)":"translate3d("+e+", 0, 0)":"translate3d(0, 0, 0)",WebkitTransform:t?r?"translate3d(-"+e+", 0, 0)":"translate3d("+e+", 0, 0)":"translate3d(0, 0, 0)",transform:t?r?"translate3d(-"+e+", 0, 0)":"translate3d("+e+", 0, 0)":"translate3d(0, 0, 0)",transition:"all 0.5s",visibility:t?"visible":"hidden"}},pageWrap:function(t,e,r){return{MozTransform:t?"":r?"translate3d(-"+e+", 0, 0)":"translate3d("+e+", 0, 0)",MsTransform:t?"":r?"translate3d(-"+e+", 0, 0)":"translate3d("+e+", 0, 0)",OTransform:t?"":r?"translate3d(-"+e+", 0, 0)":"translate3d("+e+", 0, 0)",WebkitTransform:t?"":r?"translate3d(-"+e+", 0, 0)":"translate3d("+e+", 0, 0)",transform:t?"":r?"translate3d(-"+e+", 0, 0)":"translate3d("+e+", 0, 0)",transition:"all 0.5s",zIndex:1200,position:"relative"}},burgerIcon:function(t,e,r){return{MozTransform:t?r?"translate3d("+e+", 0, 0)":"translate3d(-"+e+", 0, 0)":"translate3d(0, 0, 0)",MsTransform:t?r?"translate3d("+e+", 0, 0)":"translate3d(-"+e+", 0, 0)":"translate3d(0, 0, 0)",OTransform:t?r?"translate3d("+e+", 0, 0)":"translate3d(-"+e+", 0, 0)":"translate3d(0, 0, 0)",WebkitTransform:t?r?"translate3d("+e+", 0, 0)":"translate3d(-"+e+", 0, 0)":"translate3d(0, 0, 0)",transform:t?r?"translate3d("+e+", 0, 0)":"translate3d(-"+e+", 0, 0)":"translate3d(0, 0, 0)",transition:"all 0.1s",position:"relative",zIndex:1300}},outerContainer:function(t){return{overflow:t?"":"hidden"}}}),t.exports=e.default},4468:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,a=r(7486),s=(n=a)&&n.__esModule?n:{default:n};e.default=(0,s.default)({pageWrap:function(t,e){return{MozTransform:t?"":"translate3d(0, 0, -"+e+")",MsTransform:t?"":"translate3d(0, 0, -"+e+")",OTransform:t?"":"translate3d(0, 0, -"+e+")",WebkitTransform:t?"":"translate3d(0, 0, -"+e+")",transform:t?"":"translate3d(0, 0, -"+e+")",transformOrigin:"100%",transformStyle:"preserve-3d",transition:"all 0.5s"}},outerContainer:function(){return{perspective:"1500px"}}}),t.exports=e.default},8188:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,a=r(7486),s=(n=a)&&n.__esModule?n:{default:n};e.default=(0,s.default)({pageWrap:function(t,e,r){return{MozTransform:t?"":r?"translate3d(-100px, 0, -600px) rotateY(20deg)":"translate3d(100px, 0, -600px) rotateY(-20deg)",MsTransform:t?"":r?"translate3d(-100px, 0, -600px) rotateY(20deg)":"translate3d(100px, 0, -600px) rotateY(-20deg)",OTransform:t?"":r?"translate3d(-100px, 0, -600px) rotateY(20deg)":"translate3d(100px, 0, -600px) rotateY(-20deg)",WebkitTransform:t?"":r?"translate3d(-100px, 0, -600px) rotateY(20deg)":"translate3d(100px, 0, -600px) rotateY(-20deg)",transform:t?"":r?"translate3d(-100px, 0, -600px) rotateY(20deg)":"translate3d(100px, 0, -600px) rotateY(-20deg)",transformStyle:"preserve-3d",transition:"all 0.5s",overflow:t?"":"hidden"}},outerContainer:function(t){return{perspective:"1500px",overflow:t?"":"hidden"}}}),t.exports=e.default},2300:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,a=r(7486),s=(n=a)&&n.__esModule?n:{default:n};e.default=(0,s.default)({}),t.exports=e.default},611:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,a=r(7486),s=(n=a)&&n.__esModule?n:{default:n};e.default=(0,s.default)({menuWrap:function(t,e,r){return{MozTransform:t?"":r?"translate3d("+e+", 0, 0)":"translate3d(-"+e+", 0, 0)",MsTransform:t?"":r?"translate3d("+e+", 0, 0)":"translate3d(-"+e+", 0, 0)",OTransform:t?"":r?"translate3d("+e+", 0, 0)":"translate3d(-"+e+", 0, 0)",WebkitTransform:t?"":r?"translate3d("+e+", 0, 0)":"translate3d(-"+e+", 0, 0)",transform:t?"":r?"translate3d("+e+", 0, 0)":"translate3d(-"+e+", 0, 0)",transition:t?"transform 0.8s cubic-bezier(0.7, 0, 0.3, 1)":"transform 0.4s cubic-bezier(0.7, 0, 0.3, 1)"}},item:function(t,e,r,n){return{MozTransform:t?"":"translate3d(0, "+500*n+"px, 0)",MsTransform:t?"":"translate3d(0, "+500*n+"px, 0)",OTransform:t?"":"translate3d(0, "+500*n+"px, 0)",WebkitTransform:t?"":"translate3d(0, "+500*n+"px, 0)",transform:t?"":"translate3d(0, "+500*n+"px, 0)",transition:t?"transform 0.8s cubic-bezier(0.7, 0, 0.3, 1)":"transform 0s 0.2s cubic-bezier(0.7, 0, 0.3, 1)"}}}),t.exports=e.default},4944:function(t,e,r){"use strict";var n=r(2109),a=r(6790),s=r(7908),o=r(6244),l=r(9303),i=r(5417);n({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=s(this),r=o(e),n=i(e,0);return n.length=a(n,e,e,r,0,void 0===t?1:l(t)),n}})},3792:function(t,e,r){r(1223)("flat")},1625:function(t,e,r){"use strict";r.r(e);var n=r(7294),a=r(7194);e.default=function(){return n.createElement("div",{className:"menu"},n.createElement(a.stack,{noOverlay:!0},n.createElement("a",{id:"work",className:"menu-item",href:"/"},"work"),n.createElement("a",{id:"play",className:"menu-item",href:"/play"},"play"),n.createElement("a",{id:"about",className:"menu-item",href:"/about"},"about"),n.createElement("a",{id:"resumer",className:"menu-item",href:"https://drive.google.com/file/d/1sXXvIjqpciXud7wQvtqfMNJxJBrDALyS/view?usp=sharing",target:"_blank",rel:"noreferrer"},"resume")))}}}]);
//# sourceMappingURL=92cd3fd7b398d53a91a5f813eba02c7223013158-2c3ed568d5fd9bd8821e.js.map