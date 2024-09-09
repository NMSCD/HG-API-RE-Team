import{c as Ae,g as $t,Q as Ne}from"./QBtn-W4BmcWOO.js";import{c as H,a as v,h as L,r as x,i as ut,o as j,b as K,n as Pe,d as G,g as X,l as V,e as Me,f as D,w as C,j as me,H as Fe,k as M,s as st,m as Pt,P as Mt,p as Vt,q as Ht,t as ae,u as _e,v as Ie,x as qe,y as Be,z as Se,A as Ot,B as ct,C as Qt,D as ue,E as Dt,F as Ve,G as Q,I as F,J as S,K as _,L as He,M as I,N as ie,O as dt,Q as se,R as Wt,S as Xe,T as Ue,U as Ye,V as Rt,W as At,X as je}from"./index-Bv0AtLjr.js";import{h as Z,a as Nt,b as Ke,c as Ft,_ as ft}from"./_plugin-vue_export-helper-CdEk4bXH.js";import{Q as vt,a as Ge}from"./QItem-eqq3Finp.js";import{Q as It,p as Xt}from"./objects-i2al12K6.js";import{v as Ut}from"./vm-Cr4ZHExR.js";import{u as Yt}from"./use-timeout-SzeujXSL.js";import{u as jt,a as Kt}from"./use-dark--yy2FtxV.js";import{Q as mt}from"./QIcon-BkyR_ySg.js";import"./QSpinner-BEvFRXCT.js";import"./use-size-BmlTI8-V.js";import"./use-router-link-DI7FwVUJ.js";const Gt=H({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:t}){const o=v((()=>"q-toolbar__title ellipsis"+(!0===e.shrink?" col-shrink":"")));return()=>L("div",{class:o.value},Z(t.default))}}),Jt=H({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:t}){const o=v((()=>"q-toolbar row no-wrap items-center"+(!0===e.inset?" q-toolbar--inset":"")));return()=>L("div",{class:o.value,role:"toolbar"},Z(t.default))}});function Zt(){const e=x(!ut.value);return!1===e.value&&j((()=>{e.value=!0})),{isHydrated:e}}const ht=typeof ResizeObserver<"u",Je=!0===ht?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},$e=H({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:t}){let o,n=null,l={width:-1,height:-1};function i(t){!0===t||0===e.debounce||"0"===e.debounce?a():null===n&&(n=setTimeout(a,e.debounce))}function a(){if(null!==n&&(clearTimeout(n),n=null),o){const{offsetWidth:e,offsetHeight:n}=o;(e!==l.width||n!==l.height)&&(l={width:e,height:n},t("resize",l))}}const{proxy:s}=X();if(s.trigger=i,!0===ht){let e;const t=n=>{o=s.$el.parentNode,o?(e=new ResizeObserver(i),e.observe(o),a()):!0!==n&&G((()=>{t(!0)}))};return j((()=>{t()})),K((()=>{null!==n&&clearTimeout(n),void 0!==e&&(void 0!==e.disconnect?e.disconnect():o&&e.unobserve(o))})),Pe}{let e=function(){null!==n&&(clearTimeout(n),n=null),void 0!==r&&(void 0!==r.removeEventListener&&r.removeEventListener("resize",i,V.passive),r=void 0)},t=function(){e(),o&&o.contentDocument&&(r=o.contentDocument.defaultView,r.addEventListener("resize",i,V.passive),a())};const{isHydrated:l}=Zt();let r;return j((()=>{G((()=>{o=s.$el,o&&t()}))})),K(e),()=>{if(!0===l.value)return L("object",{class:"q--avoid-card-border",style:Je.style,tabindex:-1,type:"text/html",data:Je.url,"aria-hidden":"true",onLoad:t})}}}}),eo=H({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:t,emit:o}){const{proxy:{$q:n}}=X(),l=Me(me,D);if(l===D)return console.error("QHeader needs to be child of QLayout"),D;const i=x(parseInt(e.heightHint,10)),a=x(!0),s=v((()=>!0===e.reveal||-1!==l.view.value.indexOf("H")||n.platform.is.ios&&!0===l.isContainer.value)),r=v((()=>{if(!0!==e.modelValue)return 0;if(!0===s.value)return!0===a.value?i.value:0;const t=i.value-l.scroll.value.position;return t>0?t:0})),u=v((()=>!0!==e.modelValue||!0===s.value&&!0!==a.value)),d=v((()=>!0===e.modelValue&&!0===u.value&&!0===e.reveal)),c=v((()=>"q-header q-layout__section--marginal "+(!0===s.value?"fixed":"absolute")+"-top"+(!0===e.bordered?" q-header--bordered":"")+(!0===u.value?" q-header--hidden":"")+(!0!==e.modelValue?" q-layout--prevent-focus":""))),p=v((()=>{const e=l.rows.value.top,t={};return"l"===e[0]&&!0===l.left.space&&(t[!0===n.lang.rtl?"right":"left"]=`${l.left.size}px`),"r"===e[2]&&!0===l.right.space&&(t[!0===n.lang.rtl?"left":"right"]=`${l.right.size}px`),t}));function f(e,t){l.update("header",e,t)}function m(e,t){e.value!==t&&(e.value=t)}function h({height:e}){m(i,e),f("size",e)}function w(e){!0===d.value&&m(a,!0),o("focusin",e)}C((()=>e.modelValue),(e=>{f("space",e),m(a,!0),l.animate()})),C(r,(e=>{f("offset",e)})),C((()=>e.reveal),(t=>{!1===t&&m(a,e.modelValue)})),C(a,(e=>{l.animate(),o("reveal",e)})),C(l.scroll,(t=>{!0===e.reveal&&m(a,"up"===t.direction||t.position<=e.revealOffset||t.position-t.inflectionPoint<100)}));const b={};return l.instances.header=b,!0===e.modelValue&&f("size",i.value),f("space",e.modelValue),f("offset",r.value),K((()=>{l.instances.header===b&&(l.instances.header=void 0,f("size",0),f("offset",0),f("space",!1))})),()=>{const o=Nt(t.default,[]);return!0===e.elevated&&o.push(L("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),o.push(L($e,{debounce:0,onResize:h})),L("header",{class:c.value,style:p.value,onFocusin:w},o)}}}),J=H({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const o=v((()=>parseInt(e.lines,10))),n=v((()=>"q-item__label"+(!0===e.overline?" q-item__label--overline text-overline":"")+(!0===e.caption?" q-item__label--caption text-caption":"")+(!0===e.header?" q-item__label--header":"")+(1===o.value?" ellipsis":""))),l=v((()=>void 0!==e.lines&&o.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":o.value}:null));return()=>L("div",{style:l.value,class:n.value},Z(t.default))}});function to(e,t,o){let n;function l(){void 0!==n&&(Fe.remove(n),n=void 0)}return K((()=>{!0===e.value&&l()})),{removeFromHistory:l,addToHistory(){n={condition:()=>!0===o.value,handler:t},Fe.add(n)}}}const oo={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},no=["beforeShow","show","beforeHide","hide"];function io({showing:e,canShow:t,hideOnRouteChange:o,handleShow:n,handleHide:l,processOnMount:i}){const a=X(),{props:s,emit:r,proxy:u}=a;let d;function c(e){if(!0===s.disable||void 0!==e&&!0===e.qAnchorHandled||void 0!==t&&!0!==t(e))return;const o=void 0!==s["onUpdate:modelValue"];!0===o&&(r("update:modelValue",!0),d=e,G((()=>{d===e&&(d=void 0)}))),(null===s.modelValue||!1===o)&&v(e)}function v(t){!0!==e.value&&(e.value=!0,r("beforeShow",t),void 0!==n?n(t):r("show",t))}function p(e){if(!0===s.disable)return;const t=void 0!==s["onUpdate:modelValue"];!0===t&&(r("update:modelValue",!1),d=e,G((()=>{d===e&&(d=void 0)}))),(null===s.modelValue||!1===t)&&f(e)}function f(t){!1!==e.value&&(e.value=!1,r("beforeHide",t),void 0!==l?l(t):r("hide",t))}function m(t){!0===s.disable&&!0===t?void 0!==s["onUpdate:modelValue"]&&r("update:modelValue",!1):!0===t!==e.value&&(!0===t?v:f)(d)}C((()=>s.modelValue),m),void 0!==o&&!0===Ut(a)&&C((()=>u.$route.fullPath),(()=>{!0===o.value&&!0===e.value&&p()})),!0===i&&j((()=>{m(s.modelValue)}));const h={show:c,hide:p,toggle:function(t){!0===e.value?p(t):c(t)}};return Object.assign(u,h),h}const lo=[Element,String],ro=[null,document,document.body,document.scrollingElement,document.documentElement];function ao(e,t){let o=$t(t);if(void 0===o){if(null==e)return window;o=e.closest(".scroll,.scroll-y,.overflow-auto")}return ro.includes(o)?window:o}function pt(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function yt(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let ce;function Le(){if(void 0!==ce)return ce;const e=document.createElement("p"),t=document.createElement("div");Ae(e,{width:"100%",height:"200px"}),Ae(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const o=e.offsetWidth;t.style.overflow="scroll";let n=e.offsetWidth;return o===n&&(n=t.clientWidth),t.remove(),ce=o-n,ce}function uo(e,t=!0){return!(!e||e.nodeType!==Node.ELEMENT_NODE)&&(t?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"])))}let ke,Te,ne,Ze,et,tt,oe=0,xe=!1,N=null;function so(e){co(e)&&st(e)}function co(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=Pt(e),o=e.shiftKey&&!e.deltaX,n=!o&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),l=o||n?e.deltaY:e.deltaX;for(let e=0;e<t.length;e++){const o=t[e];if(uo(o,n))return n?l<0&&0===o.scrollTop||l>0&&o.scrollTop+o.clientHeight===o.scrollHeight:l<0&&0===o.scrollLeft||l>0&&o.scrollLeft+o.clientWidth===o.scrollWidth}return!0}function ot(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function de(e){!0!==xe&&(xe=!0,requestAnimationFrame((()=>{xe=!1;const{height:t}=e.target,{clientHeight:o,scrollTop:n}=document.scrollingElement;(void 0===ne||t!==window.innerHeight)&&(ne=o-t,document.scrollingElement.scrollTop=n),n>ne&&(document.scrollingElement.scrollTop-=Math.ceil((n-ne)/8))})))}function nt(e){const t=document.body,o=void 0!==window.visualViewport;if("add"===e){const{overflowY:e,overflowX:n}=window.getComputedStyle(t);ke=yt(window),Te=pt(window),Ze=t.style.left,et=t.style.top,tt=window.location.href,t.style.left=`-${ke}px`,t.style.top=`-${Te}px`,"hidden"!==n&&("scroll"===n||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),"hidden"!==e&&("scroll"===e||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,!0===M.is.ios&&(!0===o?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",de,V.passiveCapture),window.visualViewport.addEventListener("scroll",de,V.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",ot,V.passiveCapture))}!0===M.is.desktop&&!0===M.is.mac&&window[`${e}EventListener`]("wheel",so,V.notPassive),"remove"===e&&(!0===M.is.ios&&(!0===o?(window.visualViewport.removeEventListener("resize",de,V.passiveCapture),window.visualViewport.removeEventListener("scroll",de,V.passiveCapture)):window.removeEventListener("scroll",ot,V.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=Ze,t.style.top=et,window.location.href===tt&&window.scrollTo(ke,Te),ne=void 0)}function fo(e){let t="add";if(!0===e){if(oe++,null!==N)return clearTimeout(N),void(N=null);if(oe>1)return}else{if(0===oe||(oe--,oe>0))return;if(t="remove",!0===M.is.ios&&!0===M.is.nativeMobile)return null!==N&&clearTimeout(N),void(N=setTimeout((()=>{nt(t),N=null}),100))}nt(t)}function vo(){let e;return{preventBodyScroll(t){t!==e&&(void 0!==e||!0===t)&&(e=t,fo(t))}}}const Oe={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},mo=Object.keys(Oe);function it(e){const t={};for(const o of mo)!0===e[o]&&(t[o]=!0);return 0===Object.keys(t).length?Oe:(!0===t.horizontal?t.left=t.right=!0:!0===t.left&&!0===t.right&&(t.horizontal=!0),!0===t.vertical?t.up=t.down=!0:!0===t.up&&!0===t.down&&(t.vertical=!0),!0===t.horizontal&&!0===t.vertical&&(t.all=!0),t)}Oe.all=!0;const ho=["INPUT","TEXTAREA"];function lt(e,t){return void 0===t.event&&void 0!==e.target&&!0!==e.target.draggable&&"function"==typeof t.handler&&!1===ho.includes(e.target.nodeName.toUpperCase())&&(void 0===e.qClonedBy||-1===e.qClonedBy.indexOf(t.uid))}function po(){if(void 0!==window.getSelection){const e=window.getSelection();void 0!==e.empty?e.empty():void 0!==e.removeAllRanges&&(e.removeAllRanges(),!0!==Mt.is.mobile&&e.addRange(document.createRange()))}else void 0!==document.selection&&document.selection.empty()}function Ee(e,t,o){const n=Be(e);let l,i=n.left-t.event.x,a=n.top-t.event.y,s=Math.abs(i),r=Math.abs(a);const u=t.direction;!0===u.horizontal&&!0!==u.vertical?l=i<0?"left":"right":!0!==u.horizontal&&!0===u.vertical?l=a<0?"up":"down":!0===u.up&&a<0?(l="up",s>r&&(!0===u.left&&i<0?l="left":!0===u.right&&i>0&&(l="right"))):!0===u.down&&a>0?(l="down",s>r&&(!0===u.left&&i<0?l="left":!0===u.right&&i>0&&(l="right"))):!0===u.left&&i<0?(l="left",s<r&&(!0===u.up&&a<0?l="up":!0===u.down&&a>0&&(l="down"))):!0===u.right&&i>0&&(l="right",s<r&&(!0===u.up&&a<0?l="up":!0===u.down&&a>0&&(l="down")));let d=!1;if(void 0===l&&!1===o){if(!0===t.event.isFirst||void 0===t.event.lastDir)return{};l=t.event.lastDir,d=!0,"left"===l||"right"===l?(n.left-=i,s=0,i=0):(n.top-=a,r=0,a=0)}return{synthetic:d,payload:{evt:e,touch:!0!==t.event.mouse,mouse:!0===t.event.mouse,position:n,direction:l,isFirst:t.event.isFirst,isFinal:!0===o,duration:Date.now()-t.event.time,distance:{x:s,y:r},offset:{x:i,y:a},delta:{x:n.left-t.event.lastX,y:n.top-t.event.lastY}}}}let yo=0;const ze=Vt({name:"touch-pan",beforeMount(e,{value:t,modifiers:o}){if(!0!==o.mouse&&!0!==M.has.touch)return;function n(e,t){!0===o.mouse&&!0===t?st(e):(!0===o.stop&&qe(e),!0===o.prevent&&Ie(e))}const l={uid:"qvtp_"+yo++,handler:t,modifiers:o,direction:it(o),noop:Pe,mouseStart(e){lt(e,l)&&Ht(e)&&(ae(l,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),l.start(e,!0))},touchStart(e){if(lt(e,l)){const t=e.target;ae(l,"temp",[[t,"touchmove","move","notPassiveCapture"],[t,"touchcancel","end","passiveCapture"],[t,"touchend","end","passiveCapture"]]),l.start(e)}},start(t,n){if(!0===M.is.firefox&&_e(e,!0),l.lastEvt=t,!0===n||!0===o.stop){if(!0!==l.direction.all&&(!0!==n||!0!==l.modifiers.mouseAllDir&&!0!==l.modifiers.mousealldir)){const e=-1!==t.type.indexOf("mouse")?new MouseEvent(t.type,t):new TouchEvent(t.type,t);!0===t.defaultPrevented&&Ie(e),!0===t.cancelBubble&&qe(e),Object.assign(e,{qKeyEvent:t.qKeyEvent,qClickOutside:t.qClickOutside,qAnchorHandled:t.qAnchorHandled,qClonedBy:void 0===t.qClonedBy?[l.uid]:t.qClonedBy.concat(l.uid)}),l.initialEvent={target:t.target,event:e}}qe(t)}const{left:i,top:a}=Be(t);l.event={x:i,y:a,time:Date.now(),mouse:!0===n,detected:!1,isFirst:!0,isFinal:!1,lastX:i,lastY:a}},move(e){if(void 0===l.event)return;const t=Be(e),i=t.left-l.event.x,a=t.top-l.event.y;if(0===i&&0===a)return;l.lastEvt=e;const s=!0===l.event.mouse,r=()=>{let t;n(e,s),!0!==o.preserveCursor&&!0!==o.preservecursor&&(t=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),!0===s&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),po(),l.styleCleanup=e=>{if(l.styleCleanup=void 0,void 0!==t&&(document.documentElement.style.cursor=t),document.body.classList.remove("non-selectable"),!0===s){const t=()=>{document.body.classList.remove("no-pointer-events--children")};void 0!==e?setTimeout((()=>{t(),e()}),50):t()}else void 0!==e&&e()}};if(!0===l.event.detected){!0!==l.event.isFirst&&n(e,l.event.mouse);const{payload:t,synthetic:o}=Ee(e,l,!1);return void(void 0!==t&&(!1===l.handler(t)?l.end(e):(void 0===l.styleCleanup&&!0===l.event.isFirst&&r(),l.event.lastX=t.position.left,l.event.lastY=t.position.top,l.event.lastDir=!0===o?void 0:t.direction,l.event.isFirst=!1)))}if(!0===l.direction.all||!0===s&&(!0===l.modifiers.mouseAllDir||!0===l.modifiers.mousealldir))return r(),l.event.detected=!0,void l.move(e);const u=Math.abs(i),d=Math.abs(a);u!==d&&(!0===l.direction.horizontal&&u>d||!0===l.direction.vertical&&u<d||!0===l.direction.up&&u<d&&a<0||!0===l.direction.down&&u<d&&a>0||!0===l.direction.left&&u>d&&i<0||!0===l.direction.right&&u>d&&i>0?(l.event.detected=!0,l.move(e)):l.end(e,!0))},end(t,o){if(void 0!==l.event){if(Se(l,"temp"),!0===M.is.firefox&&_e(e,!1),!0===o)void 0!==l.styleCleanup&&l.styleCleanup(),!0!==l.event.detected&&void 0!==l.initialEvent&&l.initialEvent.target.dispatchEvent(l.initialEvent.event);else if(!0===l.event.detected){!0===l.event.isFirst&&l.handler(Ee(void 0===t?l.lastEvt:t,l).payload);const{payload:e}=Ee(void 0===t?l.lastEvt:t,l,!0),o=()=>{l.handler(e)};void 0!==l.styleCleanup?l.styleCleanup(o):o()}l.event=void 0,l.initialEvent=void 0,l.lastEvt=void 0}}};if(e.__qtouchpan=l,!0===o.mouse){const t=!0===o.mouseCapture||!0===o.mousecapture?"Capture":"";ae(l,"main",[[e,"mousedown","mouseStart",`passive${t}`]])}!0===M.has.touch&&ae(l,"main",[[e,"touchstart","touchStart","passive"+(!0===o.capture?"Capture":"")],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,t){const o=e.__qtouchpan;void 0!==o&&(t.oldValue!==t.value&&("function"!=typeof value&&o.end(),o.handler=t.value),o.direction=it(t.modifiers))},beforeUnmount(e){const t=e.__qtouchpan;void 0!==t&&(void 0!==t.event&&t.end(),Se(t,"main"),Se(t,"temp"),!0===M.is.firefox&&_e(e,!1),void 0!==t.styleCleanup&&t.styleCleanup(),delete e.__qtouchpan)}});function fe(e,t,o){return o<=t?t:Math.min(o,Math.max(t,e))}const rt=150,bo=H({name:"QDrawer",inheritAttrs:!1,props:{...oo,...jt,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...no,"onLayout","miniState"],setup(e,{slots:t,emit:o,attrs:n}){const l=X(),{proxy:{$q:i}}=l,a=Kt(e,i),{preventBodyScroll:s}=vo(),{registerTimeout:r,removeTimeout:u}=Yt(),d=Me(me,D);if(d===D)return console.error("QDrawer needs to be child of QLayout"),D;let c,p,f=null;const m=x("mobile"===e.behavior||"desktop"!==e.behavior&&d.totalWidth.value<=e.breakpoint),h=v((()=>!0===e.mini&&!0!==m.value)),w=v((()=>!0===h.value?e.miniWidth:e.width)),b=x(!0===e.showIfAbove&&!1===m.value||!0===e.modelValue),y=v((()=>!0!==e.persistent&&(!0===m.value||!0===I.value)));function g(e,t){if(k(),!1!==e&&d.animate(),ie(0),!0===m.value){const e=d.instances[$.value];void 0!==e&&!0===e.belowBreakpoint&&e.hide(!1),ae(1),!0!==d.isContainer.value&&s(!0)}else ae(0),!1!==e&&se(!1);r((()=>{!1!==e&&se(!0),!0!==t&&o("show",e)}),rt)}function _(e,t){T(),!1!==e&&d.animate(),ae(0),ie(H.value*w.value),de(),!0!==t?r((()=>{o("hide",e)}),rt):u()}const{show:q,hide:S}=io({showing:b,hideOnRouteChange:y,handleShow:g,handleHide:_}),{addToHistory:k,removeFromHistory:T}=to(b,S,y),V={belowBreakpoint:m,hide:S},E=v((()=>"right"===e.side)),H=v((()=>(!0===i.lang.rtl?-1:1)*(!0===E.value?1:-1))),z=x(0),M=x(!1),B=x(!1),F=x(w.value*H.value),$=v((()=>!0===E.value?"left":"right")),O=v((()=>!0===b.value&&!1===m.value&&!1===e.overlay?!0===e.miniToOverlay?e.miniWidth:w.value:0)),Q=v((()=>!0===e.overlay||!0===e.miniToOverlay||-1!==d.view.value.indexOf(E.value?"R":"L")||!0===i.platform.is.ios&&!0===d.isContainer.value)),N=v((()=>!1===e.overlay&&!0===b.value&&!1===m.value)),I=v((()=>!0===e.overlay&&!0===b.value&&!1===m.value)),W=v((()=>"fullscreen q-drawer__backdrop"+(!1===b.value&&!1===M.value?" hidden":""))),A=v((()=>({backgroundColor:`rgba(0,0,0,${.4*z.value})`}))),P=v((()=>!0===E.value?"r"===d.rows.value.top[2]:"l"===d.rows.value.top[0])),R=v((()=>!0===E.value?"r"===d.rows.value.bottom[2]:"l"===d.rows.value.bottom[0])),U=v((()=>{const e={};return!0===d.header.space&&!1===P.value&&(!0===Q.value?e.top=`${d.header.offset}px`:!0===d.header.space&&(e.top=`${d.header.size}px`)),!0===d.footer.space&&!1===R.value&&(!0===Q.value?e.bottom=`${d.footer.offset}px`:!0===d.footer.space&&(e.bottom=`${d.footer.size}px`)),e})),J=v((()=>{const e={width:`${w.value}px`,transform:`translateX(${F.value}px)`};return!0===m.value?e:Object.assign(e,U.value)})),Y=v((()=>"q-drawer__content fit "+(!0!==d.isContainer.value?"scroll":"overflow-auto"))),ee=v((()=>`q-drawer q-drawer--${e.side}`+(!0===B.value?" q-drawer--mini-animate":"")+(!0===e.bordered?" q-drawer--bordered":"")+(!0===a.value?" q-drawer--dark q-dark":"")+(!0===M.value?" no-transition":!0===b.value?"":" q-layout--prevent-focus")+(!0===m.value?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":" q-drawer--"+(!0===h.value?"mini":"standard")+(!0===Q.value||!0!==N.value?" fixed":"")+(!0===e.overlay||!0===e.miniToOverlay?" q-drawer--on-top":"")+(!0===P.value?" q-drawer--top-padding":"")))),te=v((()=>{const t=!0===i.lang.rtl?e.side:$.value;return[[ze,re,void 0,{[t]:!0,mouse:!0}]]})),oe=v((()=>{const t=!0===i.lang.rtl?$.value:e.side;return[[ze,ue,void 0,{[t]:!0,mouse:!0}]]})),ne=v((()=>{const t=!0===i.lang.rtl?$.value:e.side;return[[ze,ue,void 0,{[t]:!0,mouse:!0,mouseAllDir:!0}]]}));function le(){var t,o;t=m,o="mobile"===e.behavior||"desktop"!==e.behavior&&d.totalWidth.value<=e.breakpoint,t.value!==o&&(t.value=o)}function ie(e){void 0===e?G((()=>{e=!0===b.value?0:w.value,ie(H.value*e)})):(!0===d.isContainer.value&&!0===E.value&&(!0===m.value||Math.abs(e)===w.value)&&(e+=H.value*d.scrollbarWidth.value),F.value=e)}function ae(e){z.value=e}function se(e){const t=!0===e?"remove":!0!==d.isContainer.value?"add":"";""!==t&&document.body.classList[t]("q-body--drawer-toggle")}function re(e){if(!1!==b.value)return;const t=w.value,o=fe(e.distance.x,0,t);if(!0===e.isFinal)return o>=Math.min(75,t)==!0?q():(d.animate(),ae(0),ie(H.value*t)),void(M.value=!1);ie((!0===i.lang.rtl?!0!==E.value:E.value)?Math.max(t-o,0):Math.min(0,o-t)),ae(fe(o/t,0,1)),!0===e.isFirst&&(M.value=!0)}function ue(t){if(!0!==b.value)return;const o=w.value,n=t.direction===e.side,l=(!0===i.lang.rtl?!0!==n:n)?fe(t.distance.x,0,o):0;if(!0===t.isFinal)return Math.abs(l)<Math.min(75,o)==!0?(d.animate(),ae(1),ie(0)):S(),void(M.value=!1);ie(H.value*l),ae(fe(1-l/o,0,1)),!0===t.isFirst&&(M.value=!0)}function de(){s(!1),se(!0)}function ce(t,o){d.update(e.side,t,o)}function ve(t,o){ce("size",!0===t?e.miniWidth:o)}return C(m,(t=>{!0===t?(c=b.value,!0===b.value&&S(!1)):!1===e.overlay&&"mobile"!==e.behavior&&!1!==c&&(!0===b.value?(ie(0),ae(0),de()):q(!1))})),C((()=>e.side),((e,t)=>{d.instances[t]===V&&(d.instances[t]=void 0,d[t].space=!1,d[t].offset=0),d.instances[e]=V,d[e].size=w.value,d[e].space=N.value,d[e].offset=O.value})),C(d.totalWidth,(()=>{(!0===d.isContainer.value||!0!==document.qScrollPrevented)&&le()})),C((()=>e.behavior+e.breakpoint),le),C(d.isContainer,(e=>{!0===b.value&&s(!0!==e),!0===e&&le()})),C(d.scrollbarWidth,(()=>{ie(!0===b.value?0:void 0)})),C(O,(e=>{ce("offset",e)})),C(N,(e=>{o("onLayout",e),ce("space",e)})),C(E,(()=>{ie()})),C(w,(t=>{ie(),ve(e.miniToOverlay,t)})),C((()=>e.miniToOverlay),(e=>{ve(e,w.value)})),C((()=>i.lang.rtl),(()=>{ie()})),C((()=>e.mini),(()=>{e.noMiniAnimation||!0===e.modelValue&&(null!==f&&clearTimeout(f),l.proxy&&l.proxy.$el&&l.proxy.$el.classList.add("q-drawer--mini-animate"),B.value=!0,f=setTimeout((()=>{f=null,B.value=!1,l&&l.proxy&&l.proxy.$el&&l.proxy.$el.classList.remove("q-drawer--mini-animate")}),150),d.animate())})),C(h,(e=>{o("miniState",e)})),d.instances[e.side]=V,ve(e.miniToOverlay,w.value),ce("space",N.value),ce("offset",O.value),!0===e.showIfAbove&&!0!==e.modelValue&&!0===b.value&&void 0!==e["onUpdate:modelValue"]&&o("update:modelValue",!0),j((()=>{o("onLayout",N.value),o("miniState",h.value),c=!0===e.showIfAbove;const t=()=>{(!0===b.value?g:_)(!1,!0)};0===d.totalWidth.value?p=C(d.totalWidth,(()=>{p(),p=void 0,!1===b.value&&!0===e.showIfAbove&&!1===m.value?q(!1):t()})):G(t)})),K((()=>{void 0!==p&&p(),null!==f&&(clearTimeout(f),f=null),!0===b.value&&de(),d.instances[e.side]===V&&(d.instances[e.side]=void 0,ce("size",0),ce("offset",0),ce("space",!1))})),()=>{const o=[];!0===m.value&&(!1===e.noSwipeOpen&&o.push(Ot(L("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),te.value)),o.push(Ke("div",{ref:"backdrop",class:W.value,style:A.value,"aria-hidden":"true",onClick:S},void 0,"backdrop",!0!==e.noSwipeBackdrop&&!0===b.value,(()=>ne.value))));const l=!0===h.value&&void 0!==t.mini,i=[L("div",{...n,key:""+l,class:[Y.value,n.class]},!0===l?t.mini():Z(t.default))];return!0===e.elevated&&!0===b.value&&i.push(L("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),o.push(Ke("aside",{ref:"content",class:ee.value,style:J.value},i,"contentclose",!0!==e.noSwipeClose&&!0===m.value,(()=>oe.value))),L("div",{class:"q-drawer-container"},o)}}}),go=H({name:"QPageContainer",setup(e,{slots:t}){const{proxy:{$q:o}}=X(),n=Me(me,D);if(n===D)return console.error("QPageContainer needs to be child of QLayout"),D;ct(Qt,!0);const l=v((()=>{const e={};return!0===n.header.space&&(e.paddingTop=`${n.header.size}px`),!0===n.right.space&&(e["padding"+(!0===o.lang.rtl?"Left":"Right")]=`${n.right.size}px`),!0===n.footer.space&&(e.paddingBottom=`${n.footer.size}px`),!0===n.left.space&&(e["padding"+(!0===o.lang.rtl?"Right":"Left")]=`${n.left.size}px`),e}));return()=>L("div",{class:"q-page-container",style:l.value},Z(t.default))}}),{passive:at}=V,wo=["both","horizontal","vertical"],Co=H({name:"QScrollObserver",props:{axis:{type:String,validator:e=>wo.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:lo},emits:["scroll"],setup(e,{emit:t}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let n,l,i=null;function a(){null!==i&&i();const l=Math.max(0,pt(n)),a=yt(n),s={top:l-o.position.top,left:a-o.position.left};if("vertical"===e.axis&&0===s.top||"horizontal"===e.axis&&0===s.left)return;const r=Math.abs(s.top)>=Math.abs(s.left)?s.top<0?"up":"down":s.left<0?"left":"right";o.position={top:l,left:a},o.directionChanged=o.direction!==r,o.delta=s,!0===o.directionChanged&&(o.direction=r,o.inflectionPoint=o.position),t("scroll",{...o})}function s(){n=ao(l,e.scrollTarget),n.addEventListener("scroll",u,at),u(!0)}function r(){void 0!==n&&(n.removeEventListener("scroll",u,at),n=void 0)}function u(t){if(!0===t||0===e.debounce||"0"===e.debounce)a();else if(null===i){const[t,o]=e.debounce?[setTimeout(a,e.debounce),clearTimeout]:[requestAnimationFrame(a),cancelAnimationFrame];i=()=>{o(t),i=null}}}C((()=>e.scrollTarget),(()=>{r(),s()}));const{proxy:d}=X();return C((()=>d.$q.lang.rtl),a),j((()=>{l=d.$el.parentNode,s()})),K((()=>{null!==i&&i(),r()})),Object.assign(d,{trigger:u,getPosition:()=>o}),Pe}}),_o=H({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:t,emit:o}){const{proxy:{$q:n}}=X(),l=x(null),i=x(n.screen.height),a=x(!0===e.container?0:n.screen.width),s=x({position:0,direction:"down",inflectionPoint:0}),r=x(0),u=x(!0===ut.value?0:Le()),d=v((()=>"q-layout q-layout--"+(!0===e.container?"containerized":"standard"))),c=v((()=>!1===e.container?{minHeight:n.screen.height+"px"}:null)),p=v((()=>0!==u.value?{[!0===n.lang.rtl?"left":"right"]:`${u.value}px`}:null)),f=v((()=>0!==u.value?{[!0===n.lang.rtl?"right":"left"]:0,[!0===n.lang.rtl?"left":"right"]:`-${u.value}px`,width:`calc(100% + ${u.value}px)`}:null));function m(t){if(!0===e.container||!0!==document.qScrollPrevented){const n={position:t.position.top,direction:t.direction,directionChanged:t.directionChanged,inflectionPoint:t.inflectionPoint.top,delta:t.delta.top};s.value=n,void 0!==e.onScroll&&o("scroll",n)}}function h(t){const{height:n,width:l}=t;let s=!1;i.value!==n&&(s=!0,i.value=n,void 0!==e.onScrollHeight&&o("scrollHeight",n),b()),a.value!==l&&(s=!0,a.value=l),!0===s&&void 0!==e.onResize&&o("resize",t)}function w({height:e}){r.value!==e&&(r.value=e,b())}function b(){if(!0===e.container){const e=i.value>r.value?Le():0;u.value!==e&&(u.value=e)}}let y=null;const g={instances:{},view:v((()=>e.view)),isContainer:v((()=>e.container)),rootRef:l,height:i,containerHeight:r,scrollbarWidth:u,totalWidth:v((()=>a.value+u.value)),rows:v((()=>{const t=e.view.toLowerCase().split(" ");return{top:t[0].split(""),middle:t[1].split(""),bottom:t[2].split("")}})),header:ue({size:0,offset:0,space:!1}),right:ue({size:300,offset:0,space:!1}),footer:ue({size:0,offset:0,space:!1}),left:ue({size:300,offset:0,space:!1}),scroll:s,animate(){null!==y?clearTimeout(y):document.body.classList.add("q-body--layout-animate"),y=setTimeout((()=>{y=null,document.body.classList.remove("q-body--layout-animate")}),155)},update(e,t,o){g[e][t]=o}};if(ct(me,g),Le()>0){let t=function(){i=null,a.classList.remove("hide-scrollbar")},o=function(){if(null===i){if(a.scrollHeight>n.screen.height)return;a.classList.add("hide-scrollbar")}else clearTimeout(i);i=setTimeout(t,300)},l=function(e){null!==i&&"remove"===e&&(clearTimeout(i),t()),window[`${e}EventListener`]("resize",o)},i=null;const a=document.body;C((()=>!0!==e.container?"add":"remove"),l),!0!==e.container&&l("add"),Dt((()=>{l("remove")}))}return()=>{const o=Ft(t.default,[L(Co,{onScroll:m}),L($e,{onResize:h})]),n=L("div",{class:d.value,style:c.value,ref:!0===e.container?void 0:l,tabindex:-1},o);return!0===e.container?L("div",{class:"q-layout-container overflow-hidden",ref:l},[L($e,{onResize:w}),L("div",{class:"absolute-full",style:p.value},[L("div",{class:"scroll",style:f.value},[n])])]):n}}}),ve=H({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const o=v((()=>"q-item__section column q-item__section--"+(!0===e.avatar||!0===e.side||!0===e.thumbnail?"side":"main")+(!0===e.top?" q-item__section--top justify-start":" justify-center")+(!0===e.avatar?" q-item__section--avatar":"")+(!0===e.thumbnail?" q-item__section--thumbnail":"")+(!0===e.noWrap?" q-item__section--nowrap":"")));return()=>L("div",{class:o.value},Z(t.default))}}),qo=Ve({__name:"EssentialLink",props:{title:{},caption:{default:""},link:{default:"#"},icon:{default:""}},setup:e=>(e,t)=>(Q(),F(vt,{clickable:"",tag:"a",target:"_blank",href:e.link},{default:S((()=>[e.icon?(Q(),F(ve,{key:0,avatar:""},{default:S((()=>[_(mt,{name:e.icon},null,8,["name"])])),_:1})):He("",!0),_(ve,null,{default:S((()=>[_(J,null,{default:S((()=>[I(ie(e.title),1)])),_:1}),_(J,{caption:""},{default:S((()=>[I(ie(e.caption),1)])),_:1})])),_:1})])),_:1},8,["href"]))}),So=Ve({__name:"EssentialLinkInternal",props:{title:{},caption:{default:""},link:{default:"#"},icon:{default:""}},setup:e=>(e,t)=>{const o=dt("RouterLink");return Q(),F(vt,{clickable:"",class:"link-internal-wrapper"},{default:S((()=>[_(o,{class:"link-internal",to:e.link},{default:S((()=>[e.icon?(Q(),F(ve,{key:0,avatar:"",class:"icon"},{default:S((()=>[_(mt,{name:e.icon},null,8,["name"])])),_:1})):He("",!0),_(ve,null,{default:S((()=>[_(J,{class:"title"},{default:S((()=>[I(ie(e.title),1)])),_:1}),_(J,{caption:""},{default:S((()=>[I(ie(e.caption),1)])),_:1})])),_:1})])),_:1},8,["to"])])),_:1})}}),Lo=ft(So,[["__scopeId","data-v-2af88f70"]]),ko=Ve({__name:"MainLayout",setup(e){const t=Rt(),o=At(),n=[{title:"NMSCD",caption:"Main Page",icon:"img:https://raw.githubusercontent.com/NMSCD/About/master/logo/NMSCD.png",link:"https://nmscd.com"},{title:"Github",caption:"github.com/NMSCD",icon:"code",link:"https://github.com/NMSCD"}],l=x(!1);function i(){l.value=!l.value}return(e,a)=>{const s=dt("RouterView");return Q(),F(_o,{view:"lHh Lpr lFf"},{default:S((()=>[_(eo,{elevated:""},{default:S((()=>[_(Jt,null,{default:S((()=>[_(Ne,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:i}),se(t).meta.title?(Q(),F(Ne,{key:0,icon:"arrow_back",flat:"",dense:"",round:"",onClick:a[0]||(a[0]=e=>se(o).push("/"))})):He("",!0),_(Gt,{class:"title"},{default:S((()=>[I(ie(se(t).meta.title),1)])),_:1}),a[2]||(a[2]=Wt("div",null,"Atlas Insight Initiative",-1))])),_:1})])),_:1}),_(bo,{modelValue:l.value,"onUpdate:modelValue":a[1]||(a[1]=e=>l.value=e),"show-if-above":"",bordered:""},{default:S((()=>[_(Ge,null,{default:S((()=>[_(J,{header:""},{default:S((()=>a[3]||(a[3]=[I("Pages")]))),_:1}),(Q(!0),Xe(Ye,null,Ue(se(Xt),(e=>(Q(),F(Lo,je({key:e.title,ref_for:!0},e),null,16)))),128))])),_:1}),_(It),_(Ge,null,{default:S((()=>[_(J,{header:""},{default:S((()=>a[4]||(a[4]=[I("Links")]))),_:1}),(Q(),Xe(Ye,null,Ue(n,(e=>_(qo,je({key:e.title,ref_for:!0},e),null,16))),64))])),_:1})])),_:1},8,["modelValue"]),_(go,null,{default:S((()=>[_(s)])),_:1})])),_:1})}}}),Wo=ft(ko,[["__scopeId","data-v-34f09095"]]);export{Wo as default};
