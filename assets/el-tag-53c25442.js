import{s as q,o as X,d as G}from"./el-checkbox-a68956b8.js";import{aI as K,i as _,aJ as Q,ay as Y,a as Z,J as ee,b as ne,u as te,B as N,h as O,E as w,T as se,_ as ae,w as re}from"./base-836f92ac.js";import{h as oe}from"./event-e8463f65.js";import{e as ie,j as ce}from"./index-ca0a5373.js";import{d as P,c as le,b as E,e as ue,f as I,g as z,n as k,u,m as S,p as B,q as H,D as R,h as $}from"./runtime-core.esm-bundler-a0133d29.js";var fe=/\s/;function de(e){for(var n=e.length;n--&&fe.test(e.charAt(n)););return n}var me=/^\s+/;function pe(e){return e&&e.slice(0,de(e)+1).replace(me,"")}var W=0/0,ge=/^[-+]0x[0-9a-f]+$/i,he=/^0b[01]+$/i,ke=/^0o[0-7]+$/i,ve=parseInt;function F(e){if(typeof e=="number")return e;if(K(e))return W;if(_(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=_(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=pe(e);var s=he.test(e);return s||ke.test(e)?ve(e.slice(2),s?2:8):ge.test(e)?W:+e}function Oe(e,n){return q(X(e,n,G),e+"")}var ye=function(){return Q.Date.now()};const x=ye;var Te="Expected a function",Ce=Math.max,Ee=Math.min;function we(e,n,s){var c,t,l,i,r,a,f=0,h=!1,d=!1,g=!0;if(typeof e!="function")throw new TypeError(Te);n=F(n)||0,_(s)&&(h=!!s.leading,d="maxWait"in s,l=d?Ce(F(s.maxWait)||0,n):l,g="trailing"in s?!!s.trailing:g);function v(o){var m=c,y=t;return c=t=void 0,f=o,i=e.apply(y,m),i}function T(o){return f=o,r=setTimeout(C,n),h?v(o):i}function V(o){var m=o-a,y=o-f,A=n-m;return d?Ee(A,l-y):A}function L(o){var m=o-a,y=o-f;return a===void 0||m>=n||m<0||d&&y>=l}function C(){var o=x();if(L(o))return M(o);r=setTimeout(C,V(o))}function M(o){return r=void 0,g&&c?v(o):(c=t=void 0,i)}function J(){r!==void 0&&clearTimeout(r),f=0,c=a=t=r=void 0}function U(){return r===void 0?i:M(x())}function b(){var o=x(),m=L(o);if(c=arguments,t=this,a=o,m){if(r===void 0)return T(a);if(d)return clearTimeout(r),r=setTimeout(C,n),v(a)}return r===void 0&&(r=setTimeout(C,n)),i}return b.cancel=J,b.flush=U,b}function ze(e){return Y(e)&&oe(e)}const p=new Map;let j;Z&&(document.addEventListener("mousedown",e=>j=e),document.addEventListener("mouseup",e=>{for(const n of p.values())for(const{documentHandler:s}of n)s(e,j)}));function D(e,n){let s=[];return Array.isArray(n.arg)?s=n.arg:ee(n.arg)&&s.push(n.arg),function(c,t){const l=n.instance.popperRef,i=c.target,r=t==null?void 0:t.target,a=!n||!n.instance,f=!i||!r,h=e.contains(i)||e.contains(r),d=e===i,g=s.length&&s.some(T=>T==null?void 0:T.contains(i))||s.length&&s.includes(r),v=l&&(l.contains(i)||l.contains(r));a||f||h||d||g||v||n.value(c,t)}}const He={beforeMount(e,n){p.has(e)||p.set(e,[]),p.get(e).push({documentHandler:D(e,n),bindingFn:n.value})},updated(e,n){p.has(e)||p.set(e,[]);const s=p.get(e),c=s.findIndex(l=>l.bindingFn===n.oldValue),t={documentHandler:D(e,n),bindingFn:n.value};c>=0?s.splice(c,1,t):s.push(t)},unmounted(e){p.delete(e)}},be=ne({closable:Boolean,type:{type:String,values:["success","info","warning","danger",""],default:""},hit:Boolean,disableTransitions:Boolean,color:{type:String,default:""},size:{type:String,values:ie,default:""},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),Ie={close:e=>e instanceof MouseEvent,click:e=>e instanceof MouseEvent},Se=P({name:"ElTag"}),Be=P({...Se,props:be,emits:Ie,setup(e,{emit:n}){const s=e,c=ce(),t=te("tag"),l=le(()=>{const{type:a,hit:f,effect:h,closable:d,round:g}=s;return[t.b(),t.is("closable",d),t.m(a),t.m(c.value),t.m(h),t.is("hit",f),t.is("round",g)]}),i=a=>{n("close",a)},r=a=>{n("click",a)};return(a,f)=>a.disableTransitions?(E(),ue("span",{key:0,class:k(u(l)),style:$({backgroundColor:a.color}),onClick:r},[I("span",{class:k(u(t).e("content"))},[z(a.$slots,"default")],2),a.closable?(E(),S(u(w),{key:0,class:k(u(t).e("close")),onClick:O(i,["stop"])},{default:B(()=>[H(u(N))]),_:1},8,["class","onClick"])):R("v-if",!0)],6)):(E(),S(se,{key:1,name:`${u(t).namespace.value}-zoom-in-center`,appear:""},{default:B(()=>[I("span",{class:k(u(l)),style:$({backgroundColor:a.color}),onClick:r},[I("span",{class:k(u(t).e("content"))},[z(a.$slots,"default")],2),a.closable?(E(),S(u(w),{key:0,class:k(u(t).e("close")),onClick:O(i,["stop"])},{default:B(()=>[H(u(N))]),_:1},8,["class","onClick"])):R("v-if",!0)],6)]),_:3},8,["name"]))}});var xe=ae(Be,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);const Re=re(xe);export{He as C,Re as E,Oe as b,we as d,ze as i,be as t};
