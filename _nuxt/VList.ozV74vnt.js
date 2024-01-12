import{D as x,A as E,Q as N,z as L,C as O,b as v,ar as et,as as ke,at as we,au as tt,H as te,K as ne,O as ae,R as le,an as Ve,ac as p,W as ie,$ as se,a3 as oe,U as re,av as nt,ab as I,a5 as m,B as Ie,G as M,aq as U,m as B,aw as at,p as H,ax as Pe,q as ue,ay as lt,am as it,az as X,aA as st,ap as ot,aB as Z,n as rt,aC as q,aD as z,aE as G,aF as ut,aG as ct,aH as dt,I as F,a6 as xe,aI as vt,aJ as ge,E as Ae,J as Be,P as ft,S as Le,T as mt,a4 as gt,X as yt,Y as Te,Z as _e,aK as ht,a7 as bt,a9 as St,F as ye,aL as he,aM as pt,aN as Ct,aO as kt,aP as D,aQ as wt}from"./entry.GoGUqJUW.js";import{V as Vt,M as It,c as Oe,a as be}from"./VAvatar.VOp6hocf.js";import{V as Pt}from"./VDivider.uhw0qNTr.js";const xt=x({text:String,...E(),...N()},"VToolbarTitle"),At=L()({name:"VToolbarTitle",props:xt(),setup(e,o){let{slots:t}=o;return O(()=>{const n=!!(t.default||t.text||e.text);return v(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var i;return[n&&v("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(i=t.default)==null?void 0:i.call(t)])]}})}),{}}}),Bt=x({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function P(e,o,t){return L()({name:e,props:Bt({mode:t,origin:o}),setup(n,i){let{slots:a}=i;const l={onBeforeEnter(s){n.origin&&(s.style.transformOrigin=n.origin)},onLeave(s){if(n.leaveAbsolute){const{offsetTop:y,offsetLeft:g,offsetWidth:f,offsetHeight:r}=s;s._transitionInitialStyles={position:s.style.position,top:s.style.top,left:s.style.left,width:s.style.width,height:s.style.height},s.style.position="absolute",s.style.top=`${y}px`,s.style.left=`${g}px`,s.style.width=`${f}px`,s.style.height=`${r}px`}n.hideOnLeave&&s.style.setProperty("display","none","important")},onAfterLeave(s){if(n.leaveAbsolute&&(s!=null&&s._transitionInitialStyles)){const{position:y,top:g,left:f,width:r,height:u}=s._transitionInitialStyles;delete s._transitionInitialStyles,s.style.position=y||"",s.style.top=g||"",s.style.left=f||"",s.style.width=r||"",s.style.height=u||""}}};return()=>{const s=n.group?et:ke;return we(s,{name:n.disabled?"":e,css:!n.disabled,...n.group?void 0:{mode:n.mode},...n.disabled?{}:l},a.default)}}})}function Fe(e,o){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return L()({name:e,props:{mode:{type:String,default:t},disabled:Boolean},setup(n,i){let{slots:a}=i;return()=>we(ke,{name:n.disabled?"":e,css:!n.disabled,...n.disabled?{}:o},a.default)}})}function Me(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",n=tt(`offset-${t}`);return{onBeforeEnter(l){l._parent=l.parentNode,l._initialStyle={transition:l.style.transition,overflow:l.style.overflow,[t]:l.style[t]}},onEnter(l){const s=l._initialStyle;l.style.setProperty("transition","none","important"),l.style.overflow="hidden";const y=`${l[n]}px`;l.style[t]="0",l.offsetHeight,l.style.transition=s.transition,e&&l._parent&&l._parent.classList.add(e),requestAnimationFrame(()=>{l.style[t]=y})},onAfterEnter:a,onEnterCancelled:a,onLeave(l){l._initialStyle={transition:"",overflow:l.style.overflow,[t]:l.style[t]},l.style.overflow="hidden",l.style[t]=`${l[n]}px`,l.offsetHeight,requestAnimationFrame(()=>l.style[t]="0")},onAfterLeave:i,onLeaveCancelled:i};function i(l){e&&l._parent&&l._parent.classList.remove(e),a(l)}function a(l){const s=l._initialStyle[t];l.style.overflow=l._initialStyle.overflow,s!=null&&(l.style[t]=s),delete l._initialStyle}}P("fab-transition","center center","out-in");P("dialog-bottom-transition");P("dialog-top-transition");P("fade-transition");P("scale-transition");P("scroll-x-transition");P("scroll-x-reverse-transition");P("scroll-y-transition");P("scroll-y-reverse-transition");P("slide-x-transition");P("slide-x-reverse-transition");P("slide-y-transition");P("slide-y-reverse-transition");const Ee=Fe("expand-transition",Me());Fe("expand-x-transition",Me("",!0));const Lt=[null,"prominent","default","comfortable","compact"],Ne=x({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Lt.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...te(),...E(),...ne(),...ae(),...N({tag:"header"}),...le()},"VToolbar"),Se=L()({name:"VToolbar",props:Ne(),setup(e,o){var c;let{slots:t}=o;const{backgroundColorClasses:n,backgroundColorStyles:i}=Ve(p(e,"color")),{borderClasses:a}=ie(e),{elevationClasses:l}=se(e),{roundedClasses:s}=oe(e),{themeClasses:y}=re(e),{rtlClasses:g}=nt(),f=I(!!(e.extended||(c=t.extension)!=null&&c.call(t))),r=m(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),u=m(()=>f.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return Ie({VBtn:{variant:"text"}}),O(()=>{var b;const d=!!(e.title||t.title),h=!!(t.image||e.image),w=(b=t.extension)==null?void 0:b.call(t);return f.value=!!(e.extended||w),v(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},n.value,a.value,l.value,s.value,y.value,g.value,e.class],style:[i.value,e.style]},{default:()=>[h&&v("div",{key:"image",class:"v-toolbar__image"},[t.image?v(M,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):v(Vt,{key:"image-img",cover:!0,src:e.image},null)]),v(M,{defaults:{VTabs:{height:U(r.value)}}},{default:()=>{var C,V,T;return[v("div",{class:"v-toolbar__content",style:{height:U(r.value)}},[t.prepend&&v("div",{class:"v-toolbar__prepend"},[(C=t.prepend)==null?void 0:C.call(t)]),d&&v(At,{key:"title",text:e.title},{text:t.title}),(V=t.default)==null?void 0:V.call(t),t.append&&v("div",{class:"v-toolbar__append"},[(T=t.append)==null?void 0:T.call(t)])])]}}),v(M,{defaults:{VTabs:{height:U(u.value)}}},{default:()=>[v(Ee,null,{default:()=>[f.value&&v("div",{class:"v-toolbar__extension",style:{height:U(u.value)}},[w])]})]})]})}),{contentHeight:r,extensionHeight:u}}}),Tt=x({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function _t(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=o;let n=0;const i=B(null),a=I(0),l=I(0),s=I(0),y=I(!1),g=I(!1),f=m(()=>Number(e.scrollThreshold)),r=m(()=>at((f.value-a.value)/f.value||0)),u=()=>{const c=i.value;!c||t&&!t.value||(n=a.value,a.value="window"in c?c.pageYOffset:c.scrollTop,g.value=a.value<n,s.value=Math.abs(a.value-f.value))};return H(g,()=>{l.value=l.value||a.value}),H(y,()=>{l.value=0}),Pe(()=>{H(()=>e.scrollTarget,c=>{var h;const d=c?document.querySelector(c):window;d&&d!==i.value&&((h=i.value)==null||h.removeEventListener("scroll",u),i.value=d,i.value.addEventListener("scroll",u,{passive:!0}))},{immediate:!0})}),ue(()=>{var c;(c=i.value)==null||c.removeEventListener("scroll",u)}),t&&H(t,u,{immediate:!0}),{scrollThreshold:f,currentScroll:a,currentThreshold:s,isScrollActive:y,scrollRatio:r,isScrollingUp:g,savedScroll:l}}function Ge(){const e=I(!1);return Pe(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:m(()=>e.value?void 0:{transition:"none !important"}),isBooted:lt(e)}}const Ot=x({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Ne(),...it(),...Tt(),height:{type:[Number,String],default:64}},"VAppBar"),ln=L()({name:"VAppBar",props:Ot(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const n=B(),i=X(e,"modelValue"),a=m(()=>{var C;const b=new Set(((C=e.scrollBehavior)==null?void 0:C.split(" "))??[]);return{hide:b.has("hide"),inverted:b.has("inverted"),collapse:b.has("collapse"),elevate:b.has("elevate"),fadeImage:b.has("fade-image")}}),l=m(()=>{const b=a.value;return b.hide||b.inverted||b.collapse||b.elevate||b.fadeImage||!i.value}),{currentScroll:s,scrollThreshold:y,isScrollingUp:g,scrollRatio:f}=_t(e,{canScroll:l}),r=m(()=>e.collapse||a.value.collapse&&(a.value.inverted?f.value>0:f.value===0)),u=m(()=>e.flat||a.value.elevate&&(a.value.inverted?s.value>0:s.value===0)),c=m(()=>a.value.fadeImage?a.value.inverted?1-f.value:f.value:void 0),d=m(()=>{var V,T;if(a.value.hide&&a.value.inverted)return 0;const b=((V=n.value)==null?void 0:V.contentHeight)??0,C=((T=n.value)==null?void 0:T.extensionHeight)??0;return b+C});st(m(()=>!!e.scrollBehavior),()=>{rt(()=>{a.value.hide?a.value.inverted?i.value=s.value>y.value:i.value=g.value||s.value<y.value:i.value=!0})});const{ssrBootStyles:h}=Ge(),{layoutItemStyles:w}=ot({id:e.name,order:m(()=>parseInt(e.order,10)),position:p(e,"location"),layoutSize:d,elementSize:I(void 0),active:i,absolute:p(e,"absolute")});return O(()=>{const b=Se.filterProps(e);return v(Se,Z({ref:n,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...w.value,"--v-toolbar-image-opacity":c.value,height:void 0,...h.value},e.style]},b,{collapse:r.value,flat:u.value}),t)}),{}}}),ee=Symbol.for("vuetify:list");function De(){const e=q(ee,{hasPrepend:I(!1),updateHasPrepend:()=>null}),o={hasPrepend:I(!1),updateHasPrepend:t=>{t&&(o.hasPrepend.value=t)}};return z(ee,o),e}function He(){return q(ee,null)}const Ft={open:e=>{let{id:o,value:t,opened:n,parents:i}=e;if(t){const a=new Set;a.add(o);let l=i.get(o);for(;l!=null;)a.add(l),l=i.get(l);return a}else return n.delete(o),n},select:()=>null},$e={open:e=>{let{id:o,value:t,opened:n,parents:i}=e;if(t){let a=i.get(o);for(n.add(o);a!=null&&a!==o;)n.add(a),a=i.get(a);return n}else n.delete(o);return n},select:()=>null},Mt={open:$e.open,select:e=>{let{id:o,value:t,opened:n,parents:i}=e;if(!t)return n;const a=[];let l=i.get(o);for(;l!=null;)a.push(l),l=i.get(l);return new Set(a)}},ce=e=>{const o={select:t=>{let{id:n,value:i,selected:a}=t;if(n=G(n),e&&!i){const l=Array.from(a.entries()).reduce((s,y)=>{let[g,f]=y;return f==="on"?[...s,g]:s},[]);if(l.length===1&&l[0]===n)return a}return a.set(n,i?"on":"off"),a},in:(t,n,i)=>{let a=new Map;for(const l of t||[])a=o.select({id:l,value:!0,selected:new Map(a),children:n,parents:i});return a},out:t=>{const n=[];for(const[i,a]of t.entries())a==="on"&&n.push(i);return n}};return o},Re=e=>{const o=ce(e);return{select:n=>{let{selected:i,id:a,...l}=n;a=G(a);const s=i.has(a)?new Map([[a,i.get(a)]]):new Map;return o.select({...l,id:a,selected:s})},in:(n,i,a)=>{let l=new Map;return n!=null&&n.length&&(l=o.in(n.slice(0,1),i,a)),l},out:(n,i,a)=>o.out(n,i,a)}},Et=e=>{const o=ce(e);return{select:n=>{let{id:i,selected:a,children:l,...s}=n;return i=G(i),l.has(i)?a:o.select({id:i,selected:a,children:l,...s})},in:o.in,out:o.out}},Nt=e=>{const o=Re(e);return{select:n=>{let{id:i,selected:a,children:l,...s}=n;return i=G(i),l.has(i)?a:o.select({id:i,selected:a,children:l,...s})},in:o.in,out:o.out}},Gt=e=>{const o={select:t=>{let{id:n,value:i,selected:a,children:l,parents:s}=t;n=G(n);const y=new Map(a),g=[n];for(;g.length;){const r=g.shift();a.set(r,i?"on":"off"),l.has(r)&&g.push(...l.get(r))}let f=s.get(n);for(;f;){const r=l.get(f),u=r.every(d=>a.get(d)==="on"),c=r.every(d=>!a.has(d)||a.get(d)==="off");a.set(f,u?"on":c?"off":"indeterminate"),f=s.get(f)}return e&&!i&&Array.from(a.entries()).reduce((u,c)=>{let[d,h]=c;return h==="on"?[...u,d]:u},[]).length===0?y:a},in:(t,n,i)=>{let a=new Map;for(const l of t||[])a=o.select({id:l,value:!0,selected:new Map(a),children:n,parents:i});return a},out:(t,n)=>{const i=[];for(const[a,l]of t.entries())l==="on"&&!n.has(a)&&i.push(a);return i}};return o},$=Symbol.for("vuetify:nested"),je={id:I(),root:{register:()=>null,unregister:()=>null,parents:B(new Map),children:B(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:B(new Set),selected:B(new Map),selectedValues:B([])}},Dt=x({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),Ht=e=>{let o=!1;const t=B(new Map),n=B(new Map),i=X(e,"opened",e.opened,r=>new Set(r),r=>[...r.values()]),a=m(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return Nt(e.mandatory);case"leaf":return Et(e.mandatory);case"independent":return ce(e.mandatory);case"single-independent":return Re(e.mandatory);case"classic":default:return Gt(e.mandatory)}}),l=m(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return Mt;case"single":return Ft;case"multiple":default:return $e}}),s=X(e,"selected",e.selected,r=>a.value.in(r,t.value,n.value),r=>a.value.out(r,t.value,n.value));ue(()=>{o=!0});function y(r){const u=[];let c=r;for(;c!=null;)u.unshift(c),c=n.value.get(c);return u}const g=ut("nested"),f={id:I(),root:{opened:i,selected:s,selectedValues:m(()=>{const r=[];for(const[u,c]of s.value.entries())c==="on"&&r.push(u);return r}),register:(r,u,c)=>{u&&r!==u&&n.value.set(r,u),c&&t.value.set(r,[]),u!=null&&t.value.set(u,[...t.value.get(u)||[],r])},unregister:r=>{if(o)return;t.value.delete(r);const u=n.value.get(r);if(u){const c=t.value.get(u)??[];t.value.set(u,c.filter(d=>d!==r))}n.value.delete(r),i.value.delete(r)},open:(r,u,c)=>{g.emit("click:open",{id:r,value:u,path:y(r),event:c});const d=l.value.open({id:r,value:u,opened:new Set(i.value),children:t.value,parents:n.value,event:c});d&&(i.value=d)},openOnSelect:(r,u,c)=>{const d=l.value.select({id:r,value:u,selected:new Map(s.value),opened:new Set(i.value),children:t.value,parents:n.value,event:c});d&&(i.value=d)},select:(r,u,c)=>{g.emit("click:select",{id:r,value:u,path:y(r),event:c});const d=a.value.select({id:r,value:u,selected:new Map(s.value),children:t.value,parents:n.value,event:c});d&&(s.value=d),f.root.openOnSelect(r,u,c)},children:t,parents:n}};return z($,f),f.root},Ue=(e,o)=>{const t=q($,je),n=Symbol(ct()),i=m(()=>e.value!==void 0?e.value:n),a={...t,id:i,open:(l,s)=>t.root.open(i.value,l,s),openOnSelect:(l,s)=>t.root.openOnSelect(i.value,l,s),isOpen:m(()=>t.root.opened.value.has(i.value)),parent:m(()=>t.root.parents.value.get(i.value)),select:(l,s)=>t.root.select(i.value,l,s),isSelected:m(()=>t.root.selected.value.get(G(i.value))==="on"),isIndeterminate:m(()=>t.root.selected.value.get(i.value)==="indeterminate"),isLeaf:m(()=>!t.root.children.value.get(i.value)),isGroupActivator:t.isGroupActivator};return!t.isGroupActivator&&t.root.register(i.value,t.id.value,o),ue(()=>{!t.isGroupActivator&&t.root.unregister(i.value)}),o&&z($,a),a},$t=()=>{const e=q($,je);z($,{...e,isGroupActivator:!0})},Rt=dt({name:"VListGroupActivator",setup(e,o){let{slots:t}=o;return $t(),()=>{var n;return(n=t.default)==null?void 0:n.call(t)}}}),jt=x({activeColor:String,baseColor:String,color:String,collapseIcon:{type:F,default:"$collapse"},expandIcon:{type:F,default:"$expand"},prependIcon:F,appendIcon:F,fluid:Boolean,subgroup:Boolean,title:String,value:null,...E(),...N()},"VListGroup"),pe=L()({name:"VListGroup",props:jt(),setup(e,o){let{slots:t}=o;const{isOpen:n,open:i,id:a}=Ue(p(e,"value"),!0),l=m(()=>`v-list-group--id-${String(a.value)}`),s=He(),{isBooted:y}=Ge();function g(c){i(!n.value,c)}const f=m(()=>({onClick:g,class:"v-list-group__header",id:l.value})),r=m(()=>n.value?e.collapseIcon:e.expandIcon),u=m(()=>({VListItem:{active:n.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&r.value,appendIcon:e.appendIcon||!e.subgroup&&r.value,title:e.title,value:e.value}}));return O(()=>v(e.tag,{class:["v-list-group",{"v-list-group--prepend":s==null?void 0:s.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":n.value},e.class],style:e.style},{default:()=>[t.activator&&v(M,{defaults:u.value},{default:()=>[v(Rt,null,{default:()=>[t.activator({props:f.value,isOpen:n.value})]})]}),v(It,{transition:{component:Ee},disabled:!y.value},{default:()=>{var c;return[xe(v("div",{class:"v-list-group__items",role:"group","aria-labelledby":l.value},[(c=t.default)==null?void 0:c.call(t)]),[[vt,n.value]])]}})]})),{}}}),Ut=Oe("v-list-item-subtitle"),qt=Oe("v-list-item-title"),zt=x({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:F,baseColor:String,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:F,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:ge(),onClickOnce:ge(),...te(),...E(),...Ae(),...Be(),...ne(),...ae(),...ft(),...N(),...le(),...Le({variant:"text"})},"VListItem"),Ce=L()({name:"VListItem",directives:{Ripple:mt},props:zt(),emits:{click:e=>!0},setup(e,o){let{attrs:t,slots:n,emit:i}=o;const a=gt(e,t),l=m(()=>e.value===void 0?a.href.value:e.value),{select:s,isSelected:y,isIndeterminate:g,isGroupActivator:f,root:r,parent:u,openOnSelect:c}=Ue(l,!1),d=He(),h=m(()=>{var S;return e.active!==!1&&(e.active||((S=a.isActive)==null?void 0:S.value)||y.value)}),w=m(()=>e.link!==!1&&a.isLink.value),b=m(()=>!e.disabled&&e.link!==!1&&(e.link||a.isClickable.value||e.value!=null&&!!d)),C=m(()=>e.rounded||e.nav),V=m(()=>e.color??e.activeColor),T=m(()=>({color:h.value?V.value??e.baseColor:e.baseColor,variant:e.variant}));H(()=>{var S;return(S=a.isActive)==null?void 0:S.value},S=>{S&&u.value!=null&&r.open(u.value,!0),S&&c(S)},{immediate:!0});const{themeClasses:K}=re(e),{borderClasses:J}=ie(e),{colorClasses:W,colorStyles:_,variantClasses:k}=yt(T),{densityClasses:R}=Te(e),{dimensionStyles:Ke}=_e(e),{elevationClasses:Je}=se(e),{roundedClasses:We}=oe(C),Qe=m(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),Q=m(()=>({isActive:h.value,select:s,isSelected:y.value,isIndeterminate:g.value}));function de(S){var j;i("click",S),!(f||!b.value)&&((j=a.navigate)==null||j.call(a,S),e.value!=null&&s(!y.value,S))}function Ye(S){(S.key==="Enter"||S.key===" ")&&(S.preventDefault(),de(S))}return O(()=>{const S=w.value?"a":e.tag,j=n.title||e.title!=null,Xe=n.subtitle||e.subtitle!=null,ve=!!(e.appendAvatar||e.appendIcon),Ze=!!(ve||n.append),fe=!!(e.prependAvatar||e.prependIcon),Y=!!(fe||n.prepend);return d==null||d.updateHasPrepend(Y),e.activeColor&&ht("active-color",["color","base-color"]),xe(v(S,{class:["v-list-item",{"v-list-item--active":h.value,"v-list-item--disabled":e.disabled,"v-list-item--link":b.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!Y&&(d==null?void 0:d.hasPrepend.value),"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&h.value},K.value,J.value,W.value,R.value,Je.value,Qe.value,We.value,k.value,e.class],style:[_.value,Ke.value,e.style],href:a.href.value,tabindex:b.value?d?-2:0:void 0,onClick:de,onKeydown:b.value&&!w.value&&Ye},{default:()=>{var me;return[St(b.value||h.value,"v-list-item"),Y&&v("div",{key:"prepend",class:"v-list-item__prepend"},[n.prepend?v(M,{key:"prepend-defaults",disabled:!fe,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var A;return[(A=n.prepend)==null?void 0:A.call(n,Q.value)]}}):v(ye,null,[e.prependAvatar&&v(be,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&v(he,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),v("div",{class:"v-list-item__spacer"},null)]),v("div",{class:"v-list-item__content","data-no-activator":""},[j&&v(qt,{key:"title"},{default:()=>{var A;return[((A=n.title)==null?void 0:A.call(n,{title:e.title}))??e.title]}}),Xe&&v(Ut,{key:"subtitle"},{default:()=>{var A;return[((A=n.subtitle)==null?void 0:A.call(n,{subtitle:e.subtitle}))??e.subtitle]}}),(me=n.default)==null?void 0:me.call(n,Q.value)]),Ze&&v("div",{key:"append",class:"v-list-item__append"},[n.append?v(M,{key:"append-defaults",disabled:!ve,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var A;return[(A=n.append)==null?void 0:A.call(n,Q.value)]}}):v(ye,null,[e.appendIcon&&v(he,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&v(be,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),v("div",{class:"v-list-item__spacer"},null)])]}}),[[bt("ripple"),b.value&&e.ripple]])}),{}}}),Kt=x({color:String,inset:Boolean,sticky:Boolean,title:String,...E(),...N()},"VListSubheader"),Jt=L()({name:"VListSubheader",props:Kt(),setup(e,o){let{slots:t}=o;const{textColorClasses:n,textColorStyles:i}=pt(p(e,"color"));return O(()=>{const a=!!(t.default||e.title);return v(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},n.value,e.class],style:[{textColorStyles:i},e.style]},{default:()=>{var l;return[a&&v("div",{class:"v-list-subheader__text"},[((l=t.default)==null?void 0:l.call(t))??e.title])]}})}),{}}}),Wt=x({items:Array,returnObject:Boolean},"VListChildren"),qe=L()({name:"VListChildren",props:Wt(),setup(e,o){let{slots:t}=o;return De(),()=>{var n,i;return((n=t.default)==null?void 0:n.call(t))??((i=e.items)==null?void 0:i.map(a=>{var u,c;let{children:l,props:s,type:y,raw:g}=a;if(y==="divider")return((u=t.divider)==null?void 0:u.call(t,{props:s}))??v(Pt,s,null);if(y==="subheader")return((c=t.subheader)==null?void 0:c.call(t,{props:s}))??v(Jt,s,null);const f={subtitle:t.subtitle?d=>{var h;return(h=t.subtitle)==null?void 0:h.call(t,{...d,item:g})}:void 0,prepend:t.prepend?d=>{var h;return(h=t.prepend)==null?void 0:h.call(t,{...d,item:g})}:void 0,append:t.append?d=>{var h;return(h=t.append)==null?void 0:h.call(t,{...d,item:g})}:void 0,title:t.title?d=>{var h;return(h=t.title)==null?void 0:h.call(t,{...d,item:g})}:void 0},r=pe.filterProps(s);return l?v(pe,Z({value:s==null?void 0:s.value},r),{activator:d=>{let{props:h}=d;const w={...s,...h,value:e.returnObject?g:s.value};return t.header?t.header({props:w}):v(Ce,w,f)},default:()=>v(qe,{items:l},t)}):t.item?t.item({props:s}):v(Ce,Z(s,{value:e.returnObject?g:s.value}),f)}))}}}),Qt=x({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:Ct}},"list-items");function Yt(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Xt(e,o){const t=D(o,e.itemType,"item"),n=Yt(o)?o:D(o,e.itemTitle),i=D(o,e.itemValue,void 0),a=D(o,e.itemChildren),l=e.itemProps===!0?wt(o,["children"]):D(o,e.itemProps),s={title:n,value:i,...l};return{type:t,title:s.title,value:s.value,props:s,children:t==="item"&&a?ze(e,a):void 0,raw:o}}function ze(e,o){const t=[];for(const n of o)t.push(Xt(e,n));return t}function Zt(e){return{items:m(()=>ze(e,e.items))}}const en=x({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},slim:Boolean,nav:Boolean,...Dt({selectStrategy:"single-leaf",openStrategy:"list"}),...te(),...E(),...Ae(),...Be(),...ne(),itemType:{type:String,default:"type"},...Qt(),...ae(),...N(),...le(),...Le({variant:"text"})},"VList"),sn=L()({name:"VList",props:en(),emits:{"update:selected":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:select":e=>!0},setup(e,o){let{slots:t}=o;const{items:n}=Zt(e),{themeClasses:i}=re(e),{backgroundColorClasses:a,backgroundColorStyles:l}=Ve(p(e,"bgColor")),{borderClasses:s}=ie(e),{densityClasses:y}=Te(e),{dimensionStyles:g}=_e(e),{elevationClasses:f}=se(e),{roundedClasses:r}=oe(e),{open:u,select:c}=Ht(e),d=m(()=>e.lines?`v-list--${e.lines}-line`:void 0),h=p(e,"activeColor"),w=p(e,"baseColor"),b=p(e,"color");De(),Ie({VListGroup:{activeColor:h,baseColor:w,color:b},VListItem:{activeClass:p(e,"activeClass"),activeColor:h,baseColor:w,color:b,density:p(e,"density"),disabled:p(e,"disabled"),lines:p(e,"lines"),nav:p(e,"nav"),slim:p(e,"slim"),variant:p(e,"variant")}});const C=I(!1),V=B();function T(k){C.value=!0}function K(k){C.value=!1}function J(k){var R;!C.value&&!(k.relatedTarget&&((R=V.value)!=null&&R.contains(k.relatedTarget)))&&_()}function W(k){if(V.value){if(k.key==="ArrowDown")_("next");else if(k.key==="ArrowUp")_("prev");else if(k.key==="Home")_("first");else if(k.key==="End")_("last");else return;k.preventDefault()}}function _(k){if(V.value)return kt(V.value,k)}return O(()=>v(e.tag,{ref:V,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav},i.value,a.value,s.value,y.value,f.value,d.value,r.value,e.class],style:[l.value,g.value,e.style],tabindex:e.disabled||C.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:T,onFocusout:K,onFocus:J,onKeydown:W},{default:()=>[v(qe,{items:n.value,returnObject:e.returnObject},t)]})),{open:u,select:c,focus:_}}});export{sn as V,Ce as a,ln as b};