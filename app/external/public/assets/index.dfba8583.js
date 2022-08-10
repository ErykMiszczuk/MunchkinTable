const ul=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}};ul();function ma(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const dl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ml=ma(dl);function bo(e){return!!e||e===""}function ha(e){if(U(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=pe(r)?gl(r):ha(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(pe(e))return e;if(me(e))return e}}const hl=/;(?![^(]*\))/g,pl=/:(.+)/;function gl(e){const t={};return e.split(hl).forEach(n=>{if(n){const r=n.split(pl);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function pa(e){let t="";if(pe(e))t=e;else if(U(e))for(let n=0;n<e.length;n++){const r=pa(e[n]);r&&(t+=r+" ")}else if(me(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const mh=e=>pe(e)?e:e==null?"":U(e)||me(e)&&(e.toString===_o||!W(e.toString))?JSON.stringify(e,yo,2):String(e),yo=(e,t)=>t&&t.__v_isRef?yo(e,t.value):zt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:wo(t)?{[`Set(${t.size})`]:[...t.values()]}:me(t)&&!U(t)&&!Eo(t)?String(t):t,re={},$t=[],je=()=>{},vl=()=>!1,bl=/^on[^a-z]/,er=e=>bl.test(e),ga=e=>e.startsWith("onUpdate:"),be=Object.assign,va=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},yl=Object.prototype.hasOwnProperty,V=(e,t)=>yl.call(e,t),U=Array.isArray,zt=e=>tr(e)==="[object Map]",wo=e=>tr(e)==="[object Set]",W=e=>typeof e=="function",pe=e=>typeof e=="string",ba=e=>typeof e=="symbol",me=e=>e!==null&&typeof e=="object",xo=e=>me(e)&&W(e.then)&&W(e.catch),_o=Object.prototype.toString,tr=e=>_o.call(e),wl=e=>tr(e).slice(8,-1),Eo=e=>tr(e)==="[object Object]",ya=e=>pe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Mn=ma(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),nr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},xl=/-(\w)/g,qe=nr(e=>e.replace(xl,(t,n)=>n?n.toUpperCase():"")),_l=/\B([A-Z])/g,Vt=nr(e=>e.replace(_l,"-$1").toLowerCase()),rr=nr(e=>e.charAt(0).toUpperCase()+e.slice(1)),xr=nr(e=>e?`on${rr(e)}`:""),gn=(e,t)=>!Object.is(e,t),Ln=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Un=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Tr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Za;const El=()=>Za||(Za=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Be;class ko{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Be&&(this.parent=Be,this.index=(Be.scopes||(Be.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Be;try{return Be=this,t()}finally{Be=n}}}on(){Be=this}off(){Be=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function Ao(e){return new ko(e)}function kl(e,t=Be){t&&t.active&&t.effects.push(e)}const wa=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Oo=e=>(e.w&pt)>0,Po=e=>(e.n&pt)>0,Al=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=pt},Ol=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Oo(a)&&!Po(a)?a.delete(e):t[n++]=a,a.w&=~pt,a.n&=~pt}t.length=n}},Nr=new WeakMap;let rn=0,pt=1;const Mr=30;let Ne;const kt=Symbol(""),Lr=Symbol("");class xa{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,kl(this,r)}run(){if(!this.active)return this.fn();let t=Ne,n=dt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ne,Ne=this,dt=!0,pt=1<<++rn,rn<=Mr?Al(this):ei(this),this.fn()}finally{rn<=Mr&&Ol(this),pt=1<<--rn,Ne=this.parent,dt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ne===this?this.deferStop=!0:this.active&&(ei(this),this.onStop&&this.onStop(),this.active=!1)}}function ei(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let dt=!0;const So=[];function Gt(){So.push(dt),dt=!1}function Xt(){const e=So.pop();dt=e===void 0?!0:e}function Oe(e,t,n){if(dt&&Ne){let r=Nr.get(e);r||Nr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=wa()),Co(a)}}function Co(e,t){let n=!1;rn<=Mr?Po(e)||(e.n|=pt,n=!Oo(e)):n=!e.has(Ne),n&&(e.add(Ne),Ne.deps.push(e))}function Qe(e,t,n,r,a,i){const o=Nr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&U(e))o.forEach((l,c)=>{(c==="length"||c>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":U(e)?ya(n)&&s.push(o.get("length")):(s.push(o.get(kt)),zt(e)&&s.push(o.get(Lr)));break;case"delete":U(e)||(s.push(o.get(kt)),zt(e)&&s.push(o.get(Lr)));break;case"set":zt(e)&&s.push(o.get(kt));break}if(s.length===1)s[0]&&Fr(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);Fr(wa(l))}}function Fr(e,t){const n=U(e)?e:[...e];for(const r of n)r.computed&&ti(r);for(const r of n)r.computed||ti(r)}function ti(e,t){(e!==Ne||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Pl=ma("__proto__,__v_isRef,__isVue"),Ro=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ba)),Sl=_a(),Cl=_a(!1,!0),Rl=_a(!0),ni=Il();function Il(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=J(this);for(let i=0,o=this.length;i<o;i++)Oe(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(J)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Gt();const r=J(this)[t].apply(this,n);return Xt(),r}}),e}function _a(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?ql:Lo:t?Mo:No).get(r))return r;const o=U(r);if(!e&&o&&V(ni,a))return Reflect.get(ni,a,i);const s=Reflect.get(r,a,i);return(ba(a)?Ro.has(a):Pl(a))||(e||Oe(r,"get",a),t)?s:ce(s)?o&&ya(a)?s:s.value:me(s)?e?Fo(s):Jt(s):s}}const Tl=Io(),Nl=Io(!0);function Io(e=!1){return function(n,r,a,i){let o=n[r];if(vn(o)&&ce(o)&&!ce(a))return!1;if(!e&&!vn(a)&&(jr(a)||(a=J(a),o=J(o)),!U(n)&&ce(o)&&!ce(a)))return o.value=a,!0;const s=U(n)&&ya(r)?Number(r)<n.length:V(n,r),l=Reflect.set(n,r,a,i);return n===J(i)&&(s?gn(a,o)&&Qe(n,"set",r,a):Qe(n,"add",r,a)),l}}function Ml(e,t){const n=V(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Qe(e,"delete",t,void 0),r}function Ll(e,t){const n=Reflect.has(e,t);return(!ba(t)||!Ro.has(t))&&Oe(e,"has",t),n}function Fl(e){return Oe(e,"iterate",U(e)?"length":kt),Reflect.ownKeys(e)}const To={get:Sl,set:Tl,deleteProperty:Ml,has:Ll,ownKeys:Fl},jl={get:Rl,set(e,t){return!0},deleteProperty(e,t){return!0}},$l=be({},To,{get:Cl,set:Nl}),Ea=e=>e,ar=e=>Reflect.getPrototypeOf(e);function Pn(e,t,n=!1,r=!1){e=e.__v_raw;const a=J(e),i=J(t);n||(t!==i&&Oe(a,"get",t),Oe(a,"get",i));const{has:o}=ar(a),s=r?Ea:n?Oa:bn;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function Sn(e,t=!1){const n=this.__v_raw,r=J(n),a=J(e);return t||(e!==a&&Oe(r,"has",e),Oe(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function Cn(e,t=!1){return e=e.__v_raw,!t&&Oe(J(e),"iterate",kt),Reflect.get(e,"size",e)}function ri(e){e=J(e);const t=J(this);return ar(t).has.call(t,e)||(t.add(e),Qe(t,"add",e,e)),this}function ai(e,t){t=J(t);const n=J(this),{has:r,get:a}=ar(n);let i=r.call(n,e);i||(e=J(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?gn(t,o)&&Qe(n,"set",e,t):Qe(n,"add",e,t),this}function ii(e){const t=J(this),{has:n,get:r}=ar(t);let a=n.call(t,e);a||(e=J(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Qe(t,"delete",e,void 0),i}function oi(){const e=J(this),t=e.size!==0,n=e.clear();return t&&Qe(e,"clear",void 0,void 0),n}function Rn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=J(o),l=t?Ea:e?Oa:bn;return!e&&Oe(s,"iterate",kt),o.forEach((c,f)=>r.call(a,l(c),l(f),i))}}function In(e,t,n){return function(...r){const a=this.__v_raw,i=J(a),o=zt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),f=n?Ea:t?Oa:bn;return!t&&Oe(i,"iterate",l?Lr:kt),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:s?[f(d[0]),f(d[1])]:f(d),done:h}},[Symbol.iterator](){return this}}}}function it(e){return function(...t){return e==="delete"?!1:this}}function zl(){const e={get(i){return Pn(this,i)},get size(){return Cn(this)},has:Sn,add:ri,set:ai,delete:ii,clear:oi,forEach:Rn(!1,!1)},t={get(i){return Pn(this,i,!1,!0)},get size(){return Cn(this)},has:Sn,add:ri,set:ai,delete:ii,clear:oi,forEach:Rn(!1,!0)},n={get(i){return Pn(this,i,!0)},get size(){return Cn(this,!0)},has(i){return Sn.call(this,i,!0)},add:it("add"),set:it("set"),delete:it("delete"),clear:it("clear"),forEach:Rn(!0,!1)},r={get(i){return Pn(this,i,!0,!0)},get size(){return Cn(this,!0)},has(i){return Sn.call(this,i,!0)},add:it("add"),set:it("set"),delete:it("delete"),clear:it("clear"),forEach:Rn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=In(i,!1,!1),n[i]=In(i,!0,!1),t[i]=In(i,!1,!0),r[i]=In(i,!0,!0)}),[e,n,t,r]}const[Dl,Hl,Ul,Bl]=zl();function ka(e,t){const n=t?e?Bl:Ul:e?Hl:Dl;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(V(n,a)&&a in r?n:r,a,i)}const Wl={get:ka(!1,!1)},Kl={get:ka(!1,!0)},Yl={get:ka(!0,!1)},No=new WeakMap,Mo=new WeakMap,Lo=new WeakMap,ql=new WeakMap;function Vl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Gl(e){return e.__v_skip||!Object.isExtensible(e)?0:Vl(wl(e))}function Jt(e){return vn(e)?e:Aa(e,!1,To,Wl,No)}function Xl(e){return Aa(e,!1,$l,Kl,Mo)}function Fo(e){return Aa(e,!0,jl,Yl,Lo)}function Aa(e,t,n,r,a){if(!me(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Gl(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function mt(e){return vn(e)?mt(e.__v_raw):!!(e&&e.__v_isReactive)}function vn(e){return!!(e&&e.__v_isReadonly)}function jr(e){return!!(e&&e.__v_isShallow)}function jo(e){return mt(e)||vn(e)}function J(e){const t=e&&e.__v_raw;return t?J(t):e}function Bt(e){return Un(e,"__v_skip",!0),e}const bn=e=>me(e)?Jt(e):e,Oa=e=>me(e)?Fo(e):e;function $o(e){dt&&Ne&&(e=J(e),Co(e.dep||(e.dep=wa())))}function zo(e,t){e=J(e),e.dep&&Fr(e.dep)}function ce(e){return!!(e&&e.__v_isRef===!0)}function Pa(e){return Do(e,!1)}function Jl(e){return Do(e,!0)}function Do(e,t){return ce(e)?e:new Ql(e,t)}class Ql{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:J(t),this._value=n?t:bn(t)}get value(){return $o(this),this._value}set value(t){t=this.__v_isShallow?t:J(t),gn(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:bn(t),zo(this))}}function Dt(e){return ce(e)?e.value:e}const Zl={get:(e,t,n)=>Dt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ce(a)&&!ce(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Ho(e){return mt(e)?e:new Proxy(e,Zl)}function ef(e){const t=U(e)?new Array(e.length):{};for(const n in e)t[n]=nf(e,n);return t}class tf{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function nf(e,t,n){const r=e[t];return ce(r)?r:new tf(e,t,n)}class rf{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new xa(t,()=>{this._dirty||(this._dirty=!0,zo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=J(this);return $o(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function af(e,t,n=!1){let r,a;const i=W(e);return i?(r=e,a=je):(r=e.get,a=e.set),new rf(r,a,i||!a,n)}function ht(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){ir(i,t,n)}return a}function $e(e,t,n,r){if(W(e)){const i=ht(e,t,n,r);return i&&xo(i)&&i.catch(o=>{ir(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push($e(e[i],t,n,r));return a}function ir(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){ht(l,null,10,[e,o,s]);return}}of(e,n,a,r)}function of(e,t,n,r=!0){console.error(e)}let Bn=!1,$r=!1;const Ae=[];let Je=0;const sn=[];let an=null,Tt=0;const ln=[];let ft=null,Nt=0;const Uo=Promise.resolve();let Sa=null,zr=null;function Ca(e){const t=Sa||Uo;return e?t.then(this?e.bind(this):e):t}function sf(e){let t=Je+1,n=Ae.length;for(;t<n;){const r=t+n>>>1;yn(Ae[r])<e?t=r+1:n=r}return t}function Bo(e){(!Ae.length||!Ae.includes(e,Bn&&e.allowRecurse?Je+1:Je))&&e!==zr&&(e.id==null?Ae.push(e):Ae.splice(sf(e.id),0,e),Wo())}function Wo(){!Bn&&!$r&&($r=!0,Sa=Uo.then(qo))}function lf(e){const t=Ae.indexOf(e);t>Je&&Ae.splice(t,1)}function Ko(e,t,n,r){U(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),Wo()}function ff(e){Ko(e,an,sn,Tt)}function cf(e){Ko(e,ft,ln,Nt)}function or(e,t=null){if(sn.length){for(zr=t,an=[...new Set(sn)],sn.length=0,Tt=0;Tt<an.length;Tt++)an[Tt]();an=null,Tt=0,zr=null,or(e,t)}}function Yo(e){if(or(),ln.length){const t=[...new Set(ln)];if(ln.length=0,ft){ft.push(...t);return}for(ft=t,ft.sort((n,r)=>yn(n)-yn(r)),Nt=0;Nt<ft.length;Nt++)ft[Nt]();ft=null,Nt=0}}const yn=e=>e.id==null?1/0:e.id;function qo(e){$r=!1,Bn=!0,or(e),Ae.sort((n,r)=>yn(n)-yn(r));const t=je;try{for(Je=0;Je<Ae.length;Je++){const n=Ae[Je];n&&n.active!==!1&&ht(n,null,14)}}finally{Je=0,Ae.length=0,Yo(),Bn=!1,Sa=null,(Ae.length||sn.length||ln.length)&&qo(e)}}function uf(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||re;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=r[f]||re;h&&(a=n.map(g=>g.trim())),d&&(a=n.map(Tr))}let s,l=r[s=xr(t)]||r[s=xr(qe(t))];!l&&i&&(l=r[s=xr(Vt(t))]),l&&$e(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,$e(c,e,6,a)}}function Vo(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!W(e)){const l=c=>{const f=Vo(c,t,!0);f&&(s=!0,be(o,f))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(r.set(e,null),null):(U(i)?i.forEach(l=>o[l]=null):be(o,i),r.set(e,o),o)}function sr(e,t){return!e||!er(t)?!1:(t=t.slice(2).replace(/Once$/,""),V(e,t[0].toLowerCase()+t.slice(1))||V(e,Vt(t))||V(e,t))}let Re=null,Go=null;function Wn(e){const t=Re;return Re=e,Go=e&&e.type.__scopeId||null,t}function df(e,t=Re,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&gi(-1);const i=Wn(t),o=e(...a);return Wn(i),r._d&&gi(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function _r(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:f,renderCache:d,data:h,setupState:g,ctx:E,inheritAttrs:N}=e;let S,v;const _=Wn(e);try{if(n.shapeFlag&4){const z=a||r;S=We(f.call(z,z,d,i,g,h,E)),v=l}else{const z=t;S=We(z.length>1?z(i,{attrs:l,slots:s,emit:c}):z(i,null)),v=t.props?l:mf(l)}}catch(z){fn.length=0,ir(z,e,1),S=Ie(wn)}let I=S;if(v&&N!==!1){const z=Object.keys(v),{shapeFlag:D}=I;z.length&&D&7&&(o&&z.some(ga)&&(v=hf(v,o)),I=Wt(I,v))}return n.dirs&&(I=Wt(I),I.dirs=I.dirs?I.dirs.concat(n.dirs):n.dirs),n.transition&&(I.transition=n.transition),S=I,Wn(_),S}const mf=e=>{let t;for(const n in e)(n==="class"||n==="style"||er(n))&&((t||(t={}))[n]=e[n]);return t},hf=(e,t)=>{const n={};for(const r in e)(!ga(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function pf(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?si(r,o,c):!!o;if(l&8){const f=t.dynamicProps;for(let d=0;d<f.length;d++){const h=f[d];if(o[h]!==r[h]&&!sr(c,h))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?si(r,o,c):!0:!!o;return!1}function si(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!sr(n,i))return!0}return!1}function gf({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const vf=e=>e.__isSuspense;function bf(e,t){t&&t.pendingBranch?U(e)?t.effects.push(...e):t.effects.push(e):cf(e)}function Fn(e,t){if(he){let n=he.provides;const r=he.parent&&he.parent.provides;r===n&&(n=he.provides=Object.create(r)),n[e]=t}}function Ye(e,t,n=!1){const r=he||Re;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&W(t)?t.call(r.proxy):t}}const li={};function Ht(e,t,n){return Xo(e,t,n)}function Xo(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=re){const s=he;let l,c=!1,f=!1;if(ce(e)?(l=()=>e.value,c=jr(e)):mt(e)?(l=()=>e,r=!0):U(e)?(f=!0,c=e.some(v=>mt(v)||jr(v)),l=()=>e.map(v=>{if(ce(v))return v.value;if(mt(v))return _t(v);if(W(v))return ht(v,s,2)})):W(e)?t?l=()=>ht(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return d&&d(),$e(e,s,3,[h])}:l=je,t&&r){const v=l;l=()=>_t(v())}let d,h=v=>{d=S.onStop=()=>{ht(v,s,4)}};if(_n)return h=je,t?n&&$e(t,s,3,[l(),f?[]:void 0,h]):l(),je;let g=f?[]:li;const E=()=>{if(!!S.active)if(t){const v=S.run();(r||c||(f?v.some((_,I)=>gn(_,g[I])):gn(v,g)))&&(d&&d(),$e(t,s,3,[v,g===li?void 0:g,h]),g=v)}else S.run()};E.allowRecurse=!!t;let N;a==="sync"?N=E:a==="post"?N=()=>xe(E,s&&s.suspense):N=()=>ff(E);const S=new xa(l,N);return t?n?E():g=S.run():a==="post"?xe(S.run.bind(S),s&&s.suspense):S.run(),()=>{S.stop(),s&&s.scope&&va(s.scope.effects,S)}}function yf(e,t,n){const r=this.proxy,a=pe(e)?e.includes(".")?Jo(r,e):()=>r[e]:e.bind(r,r);let i;W(t)?i=t:(i=t.handler,n=t);const o=he;Kt(this);const s=Xo(a,i.bind(r),n);return o?Kt(o):At(),s}function Jo(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function _t(e,t){if(!me(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ce(e))_t(e.value,t);else if(U(e))for(let n=0;n<e.length;n++)_t(e[n],t);else if(wo(e)||zt(e))e.forEach(n=>{_t(n,t)});else if(Eo(e))for(const n in e)_t(e[n],t);return e}function An(e){return W(e)?{setup:e,name:e.name}:e}const jn=e=>!!e.type.__asyncLoader,Qo=e=>e.type.__isKeepAlive;function wf(e,t){Zo(e,"a",t)}function xf(e,t){Zo(e,"da",t)}function Zo(e,t,n=he){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(lr(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Qo(a.parent.vnode)&&_f(r,t,n,a),a=a.parent}}function _f(e,t,n,r){const a=lr(t,e,r,!0);Ra(()=>{va(r[t],a)},n)}function lr(e,t,n=he,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Gt(),Kt(n);const s=$e(t,n,e,o);return At(),Xt(),s});return r?a.unshift(i):a.push(i),i}}const nt=e=>(t,n=he)=>(!_n||e==="sp")&&lr(e,t,n),Ef=nt("bm"),kf=nt("m"),Af=nt("bu"),Of=nt("u"),Pf=nt("bum"),Ra=nt("um"),Sf=nt("sp"),Cf=nt("rtg"),Rf=nt("rtc");function If(e,t=he){lr("ec",e,t)}function hh(e,t){const n=Re;if(n===null)return e;const r=cr(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,c=re]=t[i];W(o)&&(o={mounted:o,updated:o}),o.deep&&_t(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:c})}return e}function bt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Gt(),$e(l,n,8,[e.el,s,e,t]),Xt())}}const es="components";function Tf(e,t){return Mf(es,e,!0,t)||e}const Nf=Symbol();function Mf(e,t,n=!0,r=!1){const a=Re||he;if(a){const i=a.type;if(e===es){const s=dc(i,!1);if(s&&(s===t||s===qe(t)||s===rr(qe(t))))return i}const o=fi(a[e]||i[e],t)||fi(a.appContext[e],t);return!o&&r?i:o}}function fi(e,t){return e&&(e[t]||e[qe(t)]||e[rr(qe(t))])}function ph(e,t,n,r){let a;const i=n&&n[r];if(U(e)||pe(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(me(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=t(e[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const Dr=e=>e?hs(e)?cr(e)||e.proxy:Dr(e.parent):null,Kn=be(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Dr(e.parent),$root:e=>Dr(e.root),$emit:e=>e.emit,$options:e=>ns(e),$forceUpdate:e=>e.f||(e.f=()=>Bo(e.update)),$nextTick:e=>e.n||(e.n=Ca.bind(e.proxy)),$watch:e=>yf.bind(e)}),Lf={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==re&&V(r,t))return o[t]=1,r[t];if(a!==re&&V(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&V(c,t))return o[t]=3,i[t];if(n!==re&&V(n,t))return o[t]=4,n[t];Hr&&(o[t]=0)}}const f=Kn[t];let d,h;if(f)return t==="$attrs"&&Oe(e,"get",t),f(e);if((d=s.__cssModules)&&(d=d[t]))return d;if(n!==re&&V(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,V(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==re&&V(a,t)?(a[t]=n,!0):r!==re&&V(r,t)?(r[t]=n,!0):V(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==re&&V(e,o)||t!==re&&V(t,o)||(s=i[0])&&V(s,o)||V(r,o)||V(Kn,o)||V(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:V(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Hr=!0;function Ff(e){const t=ns(e),n=e.proxy,r=e.ctx;Hr=!1,t.beforeCreate&&ci(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:f,beforeMount:d,mounted:h,beforeUpdate:g,updated:E,activated:N,deactivated:S,beforeDestroy:v,beforeUnmount:_,destroyed:I,unmounted:z,render:D,renderTracked:X,renderTriggered:B,errorCaptured:q,serverPrefetch:ae,expose:ye,inheritAttrs:ge,components:_e,directives:at,filters:Se}=t;if(c&&jf(c,r,null,e.appContext.config.unwrapInjectedRef),o)for(const ie in o){const Q=o[ie];W(Q)&&(r[ie]=Q.bind(n))}if(a){const ie=a.call(n,n);me(ie)&&(e.data=Jt(ie))}if(Hr=!0,i)for(const ie in i){const Q=i[ie],Ee=W(Q)?Q.bind(n,n):W(Q.get)?Q.get.bind(n,n):je,St=!W(Q)&&W(Q.set)?Q.set.bind(n):je,Ve=fe({get:Ee,set:St});Object.defineProperty(r,ie,{enumerable:!0,configurable:!0,get:()=>Ve.value,set:De=>Ve.value=De})}if(s)for(const ie in s)ts(s[ie],r,n,ie);if(l){const ie=W(l)?l.call(n):l;Reflect.ownKeys(ie).forEach(Q=>{Fn(Q,ie[Q])})}f&&ci(f,e,"c");function de(ie,Q){U(Q)?Q.forEach(Ee=>ie(Ee.bind(n))):Q&&ie(Q.bind(n))}if(de(Ef,d),de(kf,h),de(Af,g),de(Of,E),de(wf,N),de(xf,S),de(If,q),de(Rf,X),de(Cf,B),de(Pf,_),de(Ra,z),de(Sf,ae),U(ye))if(ye.length){const ie=e.exposed||(e.exposed={});ye.forEach(Q=>{Object.defineProperty(ie,Q,{get:()=>n[Q],set:Ee=>n[Q]=Ee})})}else e.exposed||(e.exposed={});D&&e.render===je&&(e.render=D),ge!=null&&(e.inheritAttrs=ge),_e&&(e.components=_e),at&&(e.directives=at)}function jf(e,t,n=je,r=!1){U(e)&&(e=Ur(e));for(const a in e){const i=e[a];let o;me(i)?"default"in i?o=Ye(i.from||a,i.default,!0):o=Ye(i.from||a):o=Ye(i),ce(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function ci(e,t,n){$e(U(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function ts(e,t,n,r){const a=r.includes(".")?Jo(n,r):()=>n[r];if(pe(e)){const i=t[e];W(i)&&Ht(a,i)}else if(W(e))Ht(a,e.bind(n));else if(me(e))if(U(e))e.forEach(i=>ts(i,t,n,r));else{const i=W(e.handler)?e.handler.bind(n):t[e.handler];W(i)&&Ht(a,i,e)}}function ns(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>Yn(l,c,o,!0)),Yn(l,t,o)),i.set(t,l),l}function Yn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Yn(e,i,n,!0),a&&a.forEach(o=>Yn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=$f[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const $f={data:ui,props:wt,emits:wt,methods:wt,computed:wt,beforeCreate:ve,created:ve,beforeMount:ve,mounted:ve,beforeUpdate:ve,updated:ve,beforeDestroy:ve,beforeUnmount:ve,destroyed:ve,unmounted:ve,activated:ve,deactivated:ve,errorCaptured:ve,serverPrefetch:ve,components:wt,directives:wt,watch:Df,provide:ui,inject:zf};function ui(e,t){return t?e?function(){return be(W(e)?e.call(this,this):e,W(t)?t.call(this,this):t)}:t:e}function zf(e,t){return wt(Ur(e),Ur(t))}function Ur(e){if(U(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ve(e,t){return e?[...new Set([].concat(e,t))]:t}function wt(e,t){return e?be(be(Object.create(null),e),t):t}function Df(e,t){if(!e)return t;if(!t)return e;const n=be(Object.create(null),e);for(const r in t)n[r]=ve(e[r],t[r]);return n}function Hf(e,t,n,r=!1){const a={},i={};Un(i,fr,1),e.propsDefaults=Object.create(null),rs(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Xl(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Uf(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=J(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=e.vnode.dynamicProps;for(let d=0;d<f.length;d++){let h=f[d];if(sr(e.emitsOptions,h))continue;const g=t[h];if(l)if(V(i,h))g!==i[h]&&(i[h]=g,c=!0);else{const E=qe(h);a[E]=Br(l,s,E,g,e,!1)}else g!==i[h]&&(i[h]=g,c=!0)}}}else{rs(e,t,a,i)&&(c=!0);let f;for(const d in s)(!t||!V(t,d)&&((f=Vt(d))===d||!V(t,f)))&&(l?n&&(n[d]!==void 0||n[f]!==void 0)&&(a[d]=Br(l,s,d,void 0,e,!0)):delete a[d]);if(i!==s)for(const d in i)(!t||!V(t,d)&&!0)&&(delete i[d],c=!0)}c&&Qe(e,"set","$attrs")}function rs(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Mn(l))continue;const c=t[l];let f;a&&V(a,f=qe(l))?!i||!i.includes(f)?n[f]=c:(s||(s={}))[f]=c:sr(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=J(n),c=s||re;for(let f=0;f<i.length;f++){const d=i[f];n[d]=Br(a,l,d,c[d],e,!V(c,d))}}return o}function Br(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=V(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&W(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Kt(a),r=c[n]=l.call(null,t),At())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Vt(n))&&(r=!0))}return r}function as(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!W(e)){const f=d=>{l=!0;const[h,g]=as(d,t,!0);be(o,h),g&&s.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!i&&!l)return r.set(e,$t),$t;if(U(i))for(let f=0;f<i.length;f++){const d=qe(i[f]);di(d)&&(o[d]=re)}else if(i)for(const f in i){const d=qe(f);if(di(d)){const h=i[f],g=o[d]=U(h)||W(h)?{type:h}:h;if(g){const E=pi(Boolean,g.type),N=pi(String,g.type);g[0]=E>-1,g[1]=N<0||E<N,(E>-1||V(g,"default"))&&s.push(d)}}}const c=[o,s];return r.set(e,c),c}function di(e){return e[0]!=="$"}function mi(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function hi(e,t){return mi(e)===mi(t)}function pi(e,t){return U(t)?t.findIndex(n=>hi(n,e)):W(t)&&hi(t,e)?0:-1}const is=e=>e[0]==="_"||e==="$stable",Ia=e=>U(e)?e.map(We):[We(e)],Bf=(e,t,n)=>{if(t._n)return t;const r=df((...a)=>Ia(t(...a)),n);return r._c=!1,r},os=(e,t,n)=>{const r=e._ctx;for(const a in e){if(is(a))continue;const i=e[a];if(W(i))t[a]=Bf(a,i,r);else if(i!=null){const o=Ia(i);t[a]=()=>o}}},ss=(e,t)=>{const n=Ia(t);e.slots.default=()=>n},Wf=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=J(t),Un(t,"_",n)):os(t,e.slots={})}else e.slots={},t&&ss(e,t);Un(e.slots,fr,1)},Kf=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=re;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(be(a,t),!n&&s===1&&delete a._):(i=!t.$stable,os(t,a)),o=t}else t&&(ss(e,t),o={default:1});if(i)for(const s in a)!is(s)&&!(s in o)&&delete a[s]};function ls(){return{app:null,config:{isNativeTag:vl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Yf=0;function qf(e,t){return function(r,a=null){W(r)||(r=Object.assign({},r)),a!=null&&!me(a)&&(a=null);const i=ls(),o=new Set;let s=!1;const l=i.app={_uid:Yf++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:hc,get config(){return i.config},set config(c){},use(c,...f){return o.has(c)||(c&&W(c.install)?(o.add(c),c.install(l,...f)):W(c)&&(o.add(c),c(l,...f))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,f){return f?(i.components[c]=f,l):i.components[c]},directive(c,f){return f?(i.directives[c]=f,l):i.directives[c]},mount(c,f,d){if(!s){const h=Ie(r,a);return h.appContext=i,f&&t?t(h,c):e(h,c,d),s=!0,l._container=c,c.__vue_app__=l,cr(h.component)||h.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,f){return i.provides[c]=f,l}};return l}}function Wr(e,t,n,r,a=!1){if(U(e)){e.forEach((h,g)=>Wr(h,t&&(U(t)?t[g]:t),n,r,a));return}if(jn(r)&&!a)return;const i=r.shapeFlag&4?cr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,f=s.refs===re?s.refs={}:s.refs,d=s.setupState;if(c!=null&&c!==l&&(pe(c)?(f[c]=null,V(d,c)&&(d[c]=null)):ce(c)&&(c.value=null)),W(l))ht(l,s,12,[o,f]);else{const h=pe(l),g=ce(l);if(h||g){const E=()=>{if(e.f){const N=h?f[l]:l.value;a?U(N)&&va(N,i):U(N)?N.includes(i)||N.push(i):h?(f[l]=[i],V(d,l)&&(d[l]=f[l])):(l.value=[i],e.k&&(f[e.k]=l.value))}else h?(f[l]=o,V(d,l)&&(d[l]=o)):g&&(l.value=o,e.k&&(f[e.k]=o))};o?(E.id=-1,xe(E,n)):E()}}}const xe=bf;function Vf(e){return Gf(e)}function Gf(e,t){const n=El();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:f,parentNode:d,nextSibling:h,setScopeId:g=je,cloneNode:E,insertStaticContent:N}=e,S=(u,m,p,w=null,y=null,A=null,C=!1,k=null,O=!!m.dynamicChildren)=>{if(u===m)return;u&&!tn(u,m)&&(w=L(u),Ce(u,y,A,!0),u=null),m.patchFlag===-2&&(O=!1,m.dynamicChildren=null);const{type:x,ref:F,shapeFlag:T}=m;switch(x){case Ta:v(u,m,p,w);break;case wn:_(u,m,p,w);break;case Er:u==null&&I(m,p,w,C);break;case Xe:at(u,m,p,w,y,A,C,k,O);break;default:T&1?X(u,m,p,w,y,A,C,k,O):T&6?Se(u,m,p,w,y,A,C,k,O):(T&64||T&128)&&x.process(u,m,p,w,y,A,C,k,O,oe)}F!=null&&y&&Wr(F,u&&u.ref,A,m||u,!m)},v=(u,m,p,w)=>{if(u==null)r(m.el=s(m.children),p,w);else{const y=m.el=u.el;m.children!==u.children&&c(y,m.children)}},_=(u,m,p,w)=>{u==null?r(m.el=l(m.children||""),p,w):m.el=u.el},I=(u,m,p,w)=>{[u.el,u.anchor]=N(u.children,m,p,w,u.el,u.anchor)},z=({el:u,anchor:m},p,w)=>{let y;for(;u&&u!==m;)y=h(u),r(u,p,w),u=y;r(m,p,w)},D=({el:u,anchor:m})=>{let p;for(;u&&u!==m;)p=h(u),a(u),u=p;a(m)},X=(u,m,p,w,y,A,C,k,O)=>{C=C||m.type==="svg",u==null?B(m,p,w,y,A,C,k,O):ye(u,m,y,A,C,k,O)},B=(u,m,p,w,y,A,C,k)=>{let O,x;const{type:F,props:T,shapeFlag:j,transition:H,patchFlag:G,dirs:ee}=u;if(u.el&&E!==void 0&&G===-1)O=u.el=E(u.el);else{if(O=u.el=o(u.type,A,T&&T.is,T),j&8?f(O,u.children):j&16&&ae(u.children,O,null,w,y,A&&F!=="foreignObject",C,k),ee&&bt(u,null,w,"created"),T){for(const se in T)se!=="value"&&!Mn(se)&&i(O,se,null,T[se],A,u.children,w,y,P);"value"in T&&i(O,"value",null,T.value),(x=T.onVnodeBeforeMount)&&Ue(x,w,u)}q(O,u,u.scopeId,C,w)}ee&&bt(u,null,w,"beforeMount");const te=(!y||y&&!y.pendingBranch)&&H&&!H.persisted;te&&H.beforeEnter(O),r(O,m,p),((x=T&&T.onVnodeMounted)||te||ee)&&xe(()=>{x&&Ue(x,w,u),te&&H.enter(O),ee&&bt(u,null,w,"mounted")},y)},q=(u,m,p,w,y)=>{if(p&&g(u,p),w)for(let A=0;A<w.length;A++)g(u,w[A]);if(y){let A=y.subTree;if(m===A){const C=y.vnode;q(u,C,C.scopeId,C.slotScopeIds,y.parent)}}},ae=(u,m,p,w,y,A,C,k,O=0)=>{for(let x=O;x<u.length;x++){const F=u[x]=k?ct(u[x]):We(u[x]);S(null,F,m,p,w,y,A,C,k)}},ye=(u,m,p,w,y,A,C)=>{const k=m.el=u.el;let{patchFlag:O,dynamicChildren:x,dirs:F}=m;O|=u.patchFlag&16;const T=u.props||re,j=m.props||re;let H;p&&yt(p,!1),(H=j.onVnodeBeforeUpdate)&&Ue(H,p,m,u),F&&bt(m,u,p,"beforeUpdate"),p&&yt(p,!0);const G=y&&m.type!=="foreignObject";if(x?ge(u.dynamicChildren,x,k,p,w,G,A):C||Ee(u,m,k,null,p,w,G,A,!1),O>0){if(O&16)_e(k,m,T,j,p,w,y);else if(O&2&&T.class!==j.class&&i(k,"class",null,j.class,y),O&4&&i(k,"style",T.style,j.style,y),O&8){const ee=m.dynamicProps;for(let te=0;te<ee.length;te++){const se=ee[te],Te=T[se],Ct=j[se];(Ct!==Te||se==="value")&&i(k,se,Te,Ct,y,u.children,p,w,P)}}O&1&&u.children!==m.children&&f(k,m.children)}else!C&&x==null&&_e(k,m,T,j,p,w,y);((H=j.onVnodeUpdated)||F)&&xe(()=>{H&&Ue(H,p,m,u),F&&bt(m,u,p,"updated")},w)},ge=(u,m,p,w,y,A,C)=>{for(let k=0;k<m.length;k++){const O=u[k],x=m[k],F=O.el&&(O.type===Xe||!tn(O,x)||O.shapeFlag&70)?d(O.el):p;S(O,x,F,null,w,y,A,C,!0)}},_e=(u,m,p,w,y,A,C)=>{if(p!==w){for(const k in w){if(Mn(k))continue;const O=w[k],x=p[k];O!==x&&k!=="value"&&i(u,k,x,O,C,m.children,y,A,P)}if(p!==re)for(const k in p)!Mn(k)&&!(k in w)&&i(u,k,p[k],null,C,m.children,y,A,P);"value"in w&&i(u,"value",p.value,w.value)}},at=(u,m,p,w,y,A,C,k,O)=>{const x=m.el=u?u.el:s(""),F=m.anchor=u?u.anchor:s("");let{patchFlag:T,dynamicChildren:j,slotScopeIds:H}=m;H&&(k=k?k.concat(H):H),u==null?(r(x,p,w),r(F,p,w),ae(m.children,p,F,y,A,C,k,O)):T>0&&T&64&&j&&u.dynamicChildren?(ge(u.dynamicChildren,j,p,y,A,C,k),(m.key!=null||y&&m===y.subTree)&&fs(u,m,!0)):Ee(u,m,p,F,y,A,C,k,O)},Se=(u,m,p,w,y,A,C,k,O)=>{m.slotScopeIds=k,u==null?m.shapeFlag&512?y.ctx.activate(m,p,w,C,O):ue(m,p,w,y,A,C,O):de(u,m,O)},ue=(u,m,p,w,y,A,C)=>{const k=u.component=sc(u,w,y);if(Qo(u)&&(k.ctx.renderer=oe),lc(k),k.asyncDep){if(y&&y.registerDep(k,ie),!u.el){const O=k.subTree=Ie(wn);_(null,O,m,p)}return}ie(k,u,m,p,y,A,C)},de=(u,m,p)=>{const w=m.component=u.component;if(pf(u,m,p))if(w.asyncDep&&!w.asyncResolved){Q(w,m,p);return}else w.next=m,lf(w.update),w.update();else m.el=u.el,w.vnode=m},ie=(u,m,p,w,y,A,C)=>{const k=()=>{if(u.isMounted){let{next:F,bu:T,u:j,parent:H,vnode:G}=u,ee=F,te;yt(u,!1),F?(F.el=G.el,Q(u,F,C)):F=G,T&&Ln(T),(te=F.props&&F.props.onVnodeBeforeUpdate)&&Ue(te,H,F,G),yt(u,!0);const se=_r(u),Te=u.subTree;u.subTree=se,S(Te,se,d(Te.el),L(Te),u,y,A),F.el=se.el,ee===null&&gf(u,se.el),j&&xe(j,y),(te=F.props&&F.props.onVnodeUpdated)&&xe(()=>Ue(te,H,F,G),y)}else{let F;const{el:T,props:j}=m,{bm:H,m:G,parent:ee}=u,te=jn(m);if(yt(u,!1),H&&Ln(H),!te&&(F=j&&j.onVnodeBeforeMount)&&Ue(F,ee,m),yt(u,!0),T&&K){const se=()=>{u.subTree=_r(u),K(T,u.subTree,u,y,null)};te?m.type.__asyncLoader().then(()=>!u.isUnmounted&&se()):se()}else{const se=u.subTree=_r(u);S(null,se,p,w,u,y,A),m.el=se.el}if(G&&xe(G,y),!te&&(F=j&&j.onVnodeMounted)){const se=m;xe(()=>Ue(F,ee,se),y)}(m.shapeFlag&256||ee&&jn(ee.vnode)&&ee.vnode.shapeFlag&256)&&u.a&&xe(u.a,y),u.isMounted=!0,m=p=w=null}},O=u.effect=new xa(k,()=>Bo(x),u.scope),x=u.update=()=>O.run();x.id=u.uid,yt(u,!0),x()},Q=(u,m,p)=>{m.component=u;const w=u.vnode.props;u.vnode=m,u.next=null,Uf(u,m.props,w,p),Kf(u,m.children,p),Gt(),or(void 0,u.update),Xt()},Ee=(u,m,p,w,y,A,C,k,O=!1)=>{const x=u&&u.children,F=u?u.shapeFlag:0,T=m.children,{patchFlag:j,shapeFlag:H}=m;if(j>0){if(j&128){Ve(x,T,p,w,y,A,C,k,O);return}else if(j&256){St(x,T,p,w,y,A,C,k,O);return}}H&8?(F&16&&P(x,y,A),T!==x&&f(p,T)):F&16?H&16?Ve(x,T,p,w,y,A,C,k,O):P(x,y,A,!0):(F&8&&f(p,""),H&16&&ae(T,p,w,y,A,C,k,O))},St=(u,m,p,w,y,A,C,k,O)=>{u=u||$t,m=m||$t;const x=u.length,F=m.length,T=Math.min(x,F);let j;for(j=0;j<T;j++){const H=m[j]=O?ct(m[j]):We(m[j]);S(u[j],H,p,null,y,A,C,k,O)}x>F?P(u,y,A,!0,!1,T):ae(m,p,w,y,A,C,k,O,T)},Ve=(u,m,p,w,y,A,C,k,O)=>{let x=0;const F=m.length;let T=u.length-1,j=F-1;for(;x<=T&&x<=j;){const H=u[x],G=m[x]=O?ct(m[x]):We(m[x]);if(tn(H,G))S(H,G,p,null,y,A,C,k,O);else break;x++}for(;x<=T&&x<=j;){const H=u[T],G=m[j]=O?ct(m[j]):We(m[j]);if(tn(H,G))S(H,G,p,null,y,A,C,k,O);else break;T--,j--}if(x>T){if(x<=j){const H=j+1,G=H<F?m[H].el:w;for(;x<=j;)S(null,m[x]=O?ct(m[x]):We(m[x]),p,G,y,A,C,k,O),x++}}else if(x>j)for(;x<=T;)Ce(u[x],y,A,!0),x++;else{const H=x,G=x,ee=new Map;for(x=G;x<=j;x++){const ke=m[x]=O?ct(m[x]):We(m[x]);ke.key!=null&&ee.set(ke.key,x)}let te,se=0;const Te=j-G+1;let Ct=!1,Xa=0;const en=new Array(Te);for(x=0;x<Te;x++)en[x]=0;for(x=H;x<=T;x++){const ke=u[x];if(se>=Te){Ce(ke,y,A,!0);continue}let He;if(ke.key!=null)He=ee.get(ke.key);else for(te=G;te<=j;te++)if(en[te-G]===0&&tn(ke,m[te])){He=te;break}He===void 0?Ce(ke,y,A,!0):(en[He-G]=x+1,He>=Xa?Xa=He:Ct=!0,S(ke,m[He],p,null,y,A,C,k,O),se++)}const Ja=Ct?Xf(en):$t;for(te=Ja.length-1,x=Te-1;x>=0;x--){const ke=G+x,He=m[ke],Qa=ke+1<F?m[ke+1].el:w;en[x]===0?S(null,He,p,Qa,y,A,C,k,O):Ct&&(te<0||x!==Ja[te]?De(He,p,Qa,2):te--)}}},De=(u,m,p,w,y=null)=>{const{el:A,type:C,transition:k,children:O,shapeFlag:x}=u;if(x&6){De(u.component.subTree,m,p,w);return}if(x&128){u.suspense.move(m,p,w);return}if(x&64){C.move(u,m,p,oe);return}if(C===Xe){r(A,m,p);for(let T=0;T<O.length;T++)De(O[T],m,p,w);r(u.anchor,m,p);return}if(C===Er){z(u,m,p);return}if(w!==2&&x&1&&k)if(w===0)k.beforeEnter(A),r(A,m,p),xe(()=>k.enter(A),y);else{const{leave:T,delayLeave:j,afterLeave:H}=k,G=()=>r(A,m,p),ee=()=>{T(A,()=>{G(),H&&H()})};j?j(A,G,ee):ee()}else r(A,m,p)},Ce=(u,m,p,w=!1,y=!1)=>{const{type:A,props:C,ref:k,children:O,dynamicChildren:x,shapeFlag:F,patchFlag:T,dirs:j}=u;if(k!=null&&Wr(k,null,p,u,!0),F&256){m.ctx.deactivate(u);return}const H=F&1&&j,G=!jn(u);let ee;if(G&&(ee=C&&C.onVnodeBeforeUnmount)&&Ue(ee,m,u),F&6)M(u.component,p,w);else{if(F&128){u.suspense.unmount(p,w);return}H&&bt(u,null,m,"beforeUnmount"),F&64?u.type.remove(u,m,p,y,oe,w):x&&(A!==Xe||T>0&&T&64)?P(x,m,p,!1,!0):(A===Xe&&T&384||!y&&F&16)&&P(O,m,p),w&&Zt(u)}(G&&(ee=C&&C.onVnodeUnmounted)||H)&&xe(()=>{ee&&Ue(ee,m,u),H&&bt(u,null,m,"unmounted")},p)},Zt=u=>{const{type:m,el:p,anchor:w,transition:y}=u;if(m===Xe){b(p,w);return}if(m===Er){D(u);return}const A=()=>{a(p),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(u.shapeFlag&1&&y&&!y.persisted){const{leave:C,delayLeave:k}=y,O=()=>C(p,A);k?k(u.el,A,O):O()}else A()},b=(u,m)=>{let p;for(;u!==m;)p=h(u),a(u),u=p;a(m)},M=(u,m,p)=>{const{bum:w,scope:y,update:A,subTree:C,um:k}=u;w&&Ln(w),y.stop(),A&&(A.active=!1,Ce(C,u,m,p)),k&&xe(k,m),xe(()=>{u.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},P=(u,m,p,w=!1,y=!1,A=0)=>{for(let C=A;C<u.length;C++)Ce(u[C],m,p,w,y)},L=u=>u.shapeFlag&6?L(u.component.subTree):u.shapeFlag&128?u.suspense.next():h(u.anchor||u.el),Z=(u,m,p)=>{u==null?m._vnode&&Ce(m._vnode,null,null,!0):S(m._vnode||null,u,m,null,null,null,p),Yo(),m._vnode=u},oe={p:S,um:Ce,m:De,r:Zt,mt:ue,mc:ae,pc:Ee,pbc:ge,n:L,o:e};let Y,K;return t&&([Y,K]=t(oe)),{render:Z,hydrate:Y,createApp:qf(Z,Y)}}function yt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function fs(e,t,n=!1){const r=e.children,a=t.children;if(U(r)&&U(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=ct(a[i]),s.el=o.el),n||fs(o,s))}}function Xf(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Jf=e=>e.__isTeleport,Xe=Symbol(void 0),Ta=Symbol(void 0),wn=Symbol(void 0),Er=Symbol(void 0),fn=[];let Le=null;function Qf(e=!1){fn.push(Le=e?null:[])}function Zf(){fn.pop(),Le=fn[fn.length-1]||null}let xn=1;function gi(e){xn+=e}function cs(e){return e.dynamicChildren=xn>0?Le||$t:null,Zf(),xn>0&&Le&&Le.push(e),e}function gh(e,t,n,r,a,i){return cs(ds(e,t,n,r,a,i,!0))}function ec(e,t,n,r,a){return cs(Ie(e,t,n,r,a,!0))}function Kr(e){return e?e.__v_isVNode===!0:!1}function tn(e,t){return e.type===t.type&&e.key===t.key}const fr="__vInternal",us=({key:e})=>e!=null?e:null,$n=({ref:e,ref_key:t,ref_for:n})=>e!=null?pe(e)||ce(e)||W(e)?{i:Re,r:e,k:t,f:!!n}:e:null;function ds(e,t=null,n=null,r=0,a=null,i=e===Xe?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&us(t),ref:t&&$n(t),scopeId:Go,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(Na(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=pe(n)?8:16),xn>0&&!o&&Le&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Le.push(l),l}const Ie=tc;function tc(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Nf)&&(e=wn),Kr(e)){const s=Wt(e,t,!0);return n&&Na(s,n),xn>0&&!i&&Le&&(s.shapeFlag&6?Le[Le.indexOf(e)]=s:Le.push(s)),s.patchFlag|=-2,s}if(mc(e)&&(e=e.__vccOpts),t){t=nc(t);let{class:s,style:l}=t;s&&!pe(s)&&(t.class=pa(s)),me(l)&&(jo(l)&&!U(l)&&(l=be({},l)),t.style=ha(l))}const o=pe(e)?1:vf(e)?128:Jf(e)?64:me(e)?4:W(e)?2:0;return ds(e,t,n,r,a,o,i,!0)}function nc(e){return e?jo(e)||fr in e?be({},e):e:null}function Wt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?ac(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&us(s),ref:t&&t.ref?n&&a?U(a)?a.concat($n(t)):[a,$n(t)]:$n(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Xe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Wt(e.ssContent),ssFallback:e.ssFallback&&Wt(e.ssFallback),el:e.el,anchor:e.anchor}}function rc(e=" ",t=0){return Ie(Ta,null,e,t)}function We(e){return e==null||typeof e=="boolean"?Ie(wn):U(e)?Ie(Xe,null,e.slice()):typeof e=="object"?ct(e):Ie(Ta,null,String(e))}function ct(e){return e.el===null||e.memo?e:Wt(e)}function Na(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(U(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Na(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(fr in t)?t._ctx=Re:a===3&&Re&&(Re.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else W(t)?(t={default:t,_ctx:Re},n=32):(t=String(t),r&64?(n=16,t=[rc(t)]):n=8);e.children=t,e.shapeFlag|=n}function ac(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=pa([t.class,r.class]));else if(a==="style")t.style=ha([t.style,r.style]);else if(er(a)){const i=t[a],o=r[a];o&&i!==o&&!(U(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Ue(e,t,n,r=null){$e(e,t,7,[n,r])}const ic=ls();let oc=0;function sc(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||ic,i={uid:oc++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new ko(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:as(r,a),emitsOptions:Vo(r,a),emit:null,emitted:null,propsDefaults:re,inheritAttrs:r.inheritAttrs,ctx:re,data:re,props:re,attrs:re,slots:re,refs:re,setupState:re,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=uf.bind(null,i),e.ce&&e.ce(i),i}let he=null;const ms=()=>he||Re,Kt=e=>{he=e,e.scope.on()},At=()=>{he&&he.scope.off(),he=null};function hs(e){return e.vnode.shapeFlag&4}let _n=!1;function lc(e,t=!1){_n=t;const{props:n,children:r}=e.vnode,a=hs(e);Hf(e,n,a,t),Wf(e,r);const i=a?fc(e,t):void 0;return _n=!1,i}function fc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Bt(new Proxy(e.ctx,Lf));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?uc(e):null;Kt(e),Gt();const i=ht(r,e,0,[e.props,a]);if(Xt(),At(),xo(i)){if(i.then(At,At),t)return i.then(o=>{vi(e,o,t)}).catch(o=>{ir(o,e,0)});e.asyncDep=i}else vi(e,i,t)}else ps(e,t)}function vi(e,t,n){W(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:me(t)&&(e.setupState=Ho(t)),ps(e,n)}let bi;function ps(e,t,n){const r=e.type;if(!e.render){if(!t&&bi&&!r.render){const a=r.template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=be(be({isCustomElement:i,delimiters:s},o),l);r.render=bi(a,c)}}e.render=r.render||je}Kt(e),Gt(),Ff(e),Xt(),At()}function cc(e){return new Proxy(e.attrs,{get(t,n){return Oe(e,"get","$attrs"),t[n]}})}function uc(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=cc(e))},slots:e.slots,emit:e.emit,expose:t}}function cr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ho(Bt(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Kn)return Kn[n](e)}}))}function dc(e,t=!0){return W(e)?e.displayName||e.name:e.name||t&&e.__name}function mc(e){return W(e)&&"__vccOpts"in e}const fe=(e,t)=>af(e,t,_n);function ur(e,t,n){const r=arguments.length;return r===2?me(t)&&!U(t)?Kr(t)?Ie(e,null,[t]):Ie(e,t):Ie(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Kr(n)&&(n=[n]),Ie(e,t,n))}const hc="3.2.37",pc="http://www.w3.org/2000/svg",xt=typeof document!="undefined"?document:null,yi=xt&&xt.createElement("template"),gc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?xt.createElementNS(pc,e):xt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>xt.createTextNode(e),createComment:e=>xt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>xt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{yi.innerHTML=r?`<svg>${e}</svg>`:e;const s=yi.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function vc(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function bc(e,t,n){const r=e.style,a=pe(n);if(n&&!a){for(const i in n)Yr(r,i,n[i]);if(t&&!pe(t))for(const i in t)n[i]==null&&Yr(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const wi=/\s*!important$/;function Yr(e,t,n){if(U(n))n.forEach(r=>Yr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=yc(e,t);wi.test(n)?e.setProperty(Vt(r),n.replace(wi,""),"important"):e[r]=n}}const xi=["Webkit","Moz","ms"],kr={};function yc(e,t){const n=kr[t];if(n)return n;let r=qe(t);if(r!=="filter"&&r in e)return kr[t]=r;r=rr(r);for(let a=0;a<xi.length;a++){const i=xi[a]+r;if(i in e)return kr[t]=i}return t}const _i="http://www.w3.org/1999/xlink";function wc(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(_i,t.slice(6,t.length)):e.setAttributeNS(_i,t,n);else{const i=ml(t);n==null||i&&!bo(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function xc(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=bo(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}const[gs,_c]=(()=>{let e=Date.now,t=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let qr=0;const Ec=Promise.resolve(),kc=()=>{qr=0},Ac=()=>qr||(Ec.then(kc),qr=gs());function Mt(e,t,n,r){e.addEventListener(t,n,r)}function Oc(e,t,n,r){e.removeEventListener(t,n,r)}function Pc(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Sc(t);if(r){const c=i[t]=Cc(r,a);Mt(e,s,c,l)}else o&&(Oc(e,s,o,l),i[t]=void 0)}}const Ei=/(?:Once|Passive|Capture)$/;function Sc(e){let t;if(Ei.test(e)){t={};let n;for(;n=e.match(Ei);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Vt(e.slice(2)),t]}function Cc(e,t){const n=r=>{const a=r.timeStamp||gs();(_c||a>=n.attached-1)&&$e(Rc(r,n.value),t,5,[r])};return n.value=e,n.attached=Ac(),n}function Rc(e,t){if(U(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const ki=/^on[a-z]/,Ic=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?vc(e,r,a):t==="style"?bc(e,n,r):er(t)?ga(t)||Pc(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Tc(e,t,r,a))?xc(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),wc(e,t,r,a))};function Tc(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&ki.test(t)&&W(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||ki.test(t)&&pe(n)?!1:t in e}const Ai=e=>{const t=e.props["onUpdate:modelValue"]||!1;return U(t)?n=>Ln(t,n):t};function Nc(e){e.target.composing=!0}function Oi(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const vh={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e._assign=Ai(a);const i=r||a.props&&a.props.type==="number";Mt(e,t?"change":"input",o=>{if(o.target.composing)return;let s=e.value;n&&(s=s.trim()),i&&(s=Tr(s)),e._assign(s)}),n&&Mt(e,"change",()=>{e.value=e.value.trim()}),t||(Mt(e,"compositionstart",Nc),Mt(e,"compositionend",Oi),Mt(e,"change",Oi))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},i){if(e._assign=Ai(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(a||e.type==="number")&&Tr(e.value)===t))return;const o=t==null?"":t;e.value!==o&&(e.value=o)}},Mc=be({patchProp:Ic},gc);let Pi;function Lc(){return Pi||(Pi=Vf(Mc))}const Fc=(...e)=>{const t=Lc().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=jc(r);if(!a)return;const i=t._component;!W(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function jc(e){return pe(e)?document.querySelector(e):e}var $c=!1;/*!
  * pinia v2.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let vs;const dr=e=>vs=e,bs=Symbol();function Vr(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var cn;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(cn||(cn={}));function zc(){const e=Ao(!0),t=e.run(()=>Pa({}));let n=[],r=[];const a=Bt({install(i){dr(a),a._a=i,i.provide(bs,a),i.config.globalProperties.$pinia=a,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!$c?r.push(i):n.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return a}const ys=()=>{};function Si(e,t,n,r=ys){e.push(t);const a=()=>{const i=e.indexOf(t);i>-1&&(e.splice(i,1),r())};return!n&&ms()&&Ra(a),a}function Rt(e,...t){e.slice().forEach(n=>{n(...t)})}function Gr(e,t){for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],a=e[n];Vr(a)&&Vr(r)&&e.hasOwnProperty(n)&&!ce(r)&&!mt(r)?e[n]=Gr(a,r):e[n]=r}return e}const Dc=Symbol();function Hc(e){return!Vr(e)||!e.hasOwnProperty(Dc)}const{assign:Ge}=Object;function Uc(e){return!!(ce(e)&&e.effect)}function Bc(e,t,n,r){const{state:a,actions:i,getters:o}=t,s=n.state.value[e];let l;function c(){s||(n.state.value[e]=a?a():{});const f=ef(n.state.value[e]);return Ge(f,i,Object.keys(o||{}).reduce((d,h)=>(d[h]=Bt(fe(()=>{dr(n);const g=n._s.get(e);return o[h].call(g,g)})),d),{}))}return l=ws(e,c,t,n,r,!0),l.$reset=function(){const d=a?a():{};this.$patch(h=>{Ge(h,d)})},l}function ws(e,t,n={},r,a,i){let o;const s=Ge({actions:{}},n),l={deep:!0};let c,f,d=Bt([]),h=Bt([]),g;const E=r.state.value[e];!i&&!E&&(r.state.value[e]={}),Pa({});let N;function S(B){let q;c=f=!1,typeof B=="function"?(B(r.state.value[e]),q={type:cn.patchFunction,storeId:e,events:g}):(Gr(r.state.value[e],B),q={type:cn.patchObject,payload:B,storeId:e,events:g});const ae=N=Symbol();Ca().then(()=>{N===ae&&(c=!0)}),f=!0,Rt(d,q,r.state.value[e])}const v=ys;function _(){o.stop(),d=[],h=[],r._s.delete(e)}function I(B,q){return function(){dr(r);const ae=Array.from(arguments),ye=[],ge=[];function _e(ue){ye.push(ue)}function at(ue){ge.push(ue)}Rt(h,{args:ae,name:B,store:D,after:_e,onError:at});let Se;try{Se=q.apply(this&&this.$id===e?this:D,ae)}catch(ue){throw Rt(ge,ue),ue}return Se instanceof Promise?Se.then(ue=>(Rt(ye,ue),ue)).catch(ue=>(Rt(ge,ue),Promise.reject(ue))):(Rt(ye,Se),Se)}}const z={_p:r,$id:e,$onAction:Si.bind(null,h),$patch:S,$reset:v,$subscribe(B,q={}){const ae=Si(d,B,q.detached,()=>ye()),ye=o.run(()=>Ht(()=>r.state.value[e],ge=>{(q.flush==="sync"?f:c)&&B({storeId:e,type:cn.direct,events:g},ge)},Ge({},l,q)));return ae},$dispose:_},D=Jt(Ge({},z));r._s.set(e,D);const X=r._e.run(()=>(o=Ao(),o.run(()=>t())));for(const B in X){const q=X[B];if(ce(q)&&!Uc(q)||mt(q))i||(E&&Hc(q)&&(ce(q)?q.value=E[B]:Gr(q,E[B])),r.state.value[e][B]=q);else if(typeof q=="function"){const ae=I(B,q);X[B]=ae,s.actions[B]=q}}return Ge(D,X),Ge(J(D),X),Object.defineProperty(D,"$state",{get:()=>r.state.value[e],set:B=>{S(q=>{Ge(q,B)})}}),r._p.forEach(B=>{Ge(D,o.run(()=>B({store:D,app:r._a,pinia:r,options:s})))}),E&&i&&n.hydrate&&n.hydrate(D.$state,E),c=!0,f=!0,D}function Wc(e,t,n){let r,a;const i=typeof t=="function";typeof e=="string"?(r=e,a=i?n:t):(a=e,r=e.id);function o(s,l){const c=ms();return s=s||c&&Ye(bs),s&&dr(s),s=vs,s._s.has(r)||(i?ws(r,t,a,s):Bc(r,a,s)),s._s.get(r)}return o.$id=r,o}function Kc(e){return typeof e=="object"&&e!==null}function Yc(e,t){return e=Kc(e)?e:Object.create(null),new Proxy(e,{get(n,r,a){return Reflect.get(n,r,a)||Reflect.get(t,r,a)}})}function qc(e,t){return t.reduce((n,r)=>n==null?void 0:n[r],e)}function Vc(e,t,n){return t.slice(0,-1).reduce((r,a)=>/^(__proto__)$/.test(a)?{}:r[a]=r[a]||{},e)[t[t.length-1]]=n,e}function Gc(e,t){return t.reduce((n,r)=>{const a=r.split(".");return Vc(n,a,qc(e,a))},{})}function Xc(e={}){return function(t){const{options:{persist:n},store:r}=t;if(!n)return;const{storage:a=localStorage,beforeRestore:i=null,afterRestore:o=null,serializer:s={serialize:JSON.stringify,deserialize:JSON.parse},key:l=r.$id,paths:c=null}=Yc(n,e);i==null||i(t);try{const f=a.getItem(l);f&&r.$patch(s.deserialize(f))}catch{}o==null||o(t),r.$subscribe((f,d)=>{try{const h=Array.isArray(c)?Gc(d,c):d;a.setItem(l,s.serialize(h))}catch{}},{detached:!0})}}var Jc=Xc();const Qc="modulepreload",Ci={},Zc="/",Ma=function(t,n){return!n||n.length===0?t():Promise.all(n.map(r=>{if(r=`${Zc}${r}`,r in Ci)return;Ci[r]=!0;const a=r.endsWith(".css"),i=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const o=document.createElement("link");if(o.rel=a?"stylesheet":Qc,a||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),a)return new Promise((s,l)=>{o.addEventListener("load",s),o.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())};/*!
  * vue-router v4.1.2
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Lt=typeof window!="undefined";function eu(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const ne=Object.assign;function Ar(e,t){const n={};for(const r in t){const a=t[r];n[r]=ze(a)?a.map(e):e(a)}return n}const un=()=>{},ze=Array.isArray,tu=/\/$/,nu=e=>e.replace(tu,"");function Or(e,t,n="/"){let r,a={},i="",o="";const s=t.indexOf("#");let l=t.indexOf("?");return s<l&&s>=0&&(l=-1),l>-1&&(r=t.slice(0,l),i=t.slice(l+1,s>-1?s:t.length),a=e(i)),s>-1&&(r=r||t.slice(0,s),o=t.slice(s,t.length)),r=ou(r!=null?r:t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:a,hash:o}}function ru(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Ri(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function au(e,t,n){const r=t.matched.length-1,a=n.matched.length-1;return r>-1&&r===a&&Yt(t.matched[r],n.matched[a])&&xs(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Yt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function xs(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!iu(e[n],t[n]))return!1;return!0}function iu(e,t){return ze(e)?Ii(e,t):ze(t)?Ii(t,e):e===t}function Ii(e,t){return ze(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function ou(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let a=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")a>1&&a--;else break;return n.slice(0,a).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var En;(function(e){e.pop="pop",e.push="push"})(En||(En={}));var dn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(dn||(dn={}));function su(e){if(!e)if(Lt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),nu(e)}const lu=/^[^#]+#/;function fu(e,t){return e.replace(lu,"#")+t}function cu(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const mr=()=>({left:window.pageXOffset,top:window.pageYOffset});function uu(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=cu(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Ti(e,t){return(history.state?history.state.position-t:-1)+e}const Xr=new Map;function du(e,t){Xr.set(e,t)}function mu(e){const t=Xr.get(e);return Xr.delete(e),t}let hu=()=>location.protocol+"//"+location.host;function _s(e,t){const{pathname:n,search:r,hash:a}=t,i=e.indexOf("#");if(i>-1){let s=a.includes(e.slice(i))?e.slice(i).length:1,l=a.slice(s);return l[0]!=="/"&&(l="/"+l),Ri(l,"")}return Ri(n,e)+r+a}function pu(e,t,n,r){let a=[],i=[],o=null;const s=({state:h})=>{const g=_s(e,location),E=n.value,N=t.value;let S=0;if(h){if(n.value=g,t.value=h,o&&o===E){o=null;return}S=N?h.position-N.position:0}else r(g);a.forEach(v=>{v(n.value,E,{delta:S,type:En.pop,direction:S?S>0?dn.forward:dn.back:dn.unknown})})};function l(){o=n.value}function c(h){a.push(h);const g=()=>{const E=a.indexOf(h);E>-1&&a.splice(E,1)};return i.push(g),g}function f(){const{history:h}=window;!h.state||h.replaceState(ne({},h.state,{scroll:mr()}),"")}function d(){for(const h of i)h();i=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",f),{pauseListeners:l,listen:c,destroy:d}}function Ni(e,t,n,r=!1,a=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:a?mr():null}}function gu(e){const{history:t,location:n}=window,r={value:_s(e,n)},a={value:t.state};a.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,c,f){const d=e.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:hu()+e+l;try{t[f?"replaceState":"pushState"](c,"",h),a.value=c}catch(g){console.error(g),n[f?"replace":"assign"](h)}}function o(l,c){const f=ne({},t.state,Ni(a.value.back,l,a.value.forward,!0),c,{position:a.value.position});i(l,f,!0),r.value=l}function s(l,c){const f=ne({},a.value,t.state,{forward:l,scroll:mr()});i(f.current,f,!0);const d=ne({},Ni(r.value,l,null),{position:f.position+1},c);i(l,d,!1),r.value=l}return{location:r,state:a,push:s,replace:o}}function vu(e){e=su(e);const t=gu(e),n=pu(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const a=ne({location:"",base:e,go:r,createHref:fu.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function bu(e){return typeof e=="string"||e&&typeof e=="object"}function Es(e){return typeof e=="string"||typeof e=="symbol"}const ot={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ks=Symbol("");var Mi;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Mi||(Mi={}));function qt(e,t){return ne(new Error,{type:e,[ks]:!0},t)}function st(e,t){return e instanceof Error&&ks in e&&(t==null||!!(e.type&t))}const Li="[^/]+?",yu={sensitive:!1,strict:!1,start:!0,end:!0},wu=/[.+*?^${}()[\]/\\]/g;function xu(e,t){const n=ne({},yu,t),r=[];let a=n.start?"^":"";const i=[];for(const c of e){const f=c.length?[]:[90];n.strict&&!c.length&&(a+="/");for(let d=0;d<c.length;d++){const h=c[d];let g=40+(n.sensitive?.25:0);if(h.type===0)d||(a+="/"),a+=h.value.replace(wu,"\\$&"),g+=40;else if(h.type===1){const{value:E,repeatable:N,optional:S,regexp:v}=h;i.push({name:E,repeatable:N,optional:S});const _=v||Li;if(_!==Li){g+=10;try{new RegExp(`(${_})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${E}" (${_}): `+z.message)}}let I=N?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;d||(I=S&&c.length<2?`(?:/${I})`:"/"+I),S&&(I+="?"),a+=I,g+=20,S&&(g+=-8),N&&(g+=-20),_===".*"&&(g+=-50)}f.push(g)}r.push(f)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const o=new RegExp(a,n.sensitive?"":"i");function s(c){const f=c.match(o),d={};if(!f)return null;for(let h=1;h<f.length;h++){const g=f[h]||"",E=i[h-1];d[E.name]=g&&E.repeatable?g.split("/"):g}return d}function l(c){let f="",d=!1;for(const h of e){(!d||!f.endsWith("/"))&&(f+="/"),d=!1;for(const g of h)if(g.type===0)f+=g.value;else if(g.type===1){const{value:E,repeatable:N,optional:S}=g,v=E in c?c[E]:"";if(ze(v)&&!N)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const _=ze(v)?v.join("/"):v;if(!_)if(S)h.length<2&&e.length>1&&(f.endsWith("/")?f=f.slice(0,-1):d=!0);else throw new Error(`Missing required param "${E}"`);f+=_}}return f}return{re:o,score:r,keys:i,parse:s,stringify:l}}function _u(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Eu(e,t){let n=0;const r=e.score,a=t.score;for(;n<r.length&&n<a.length;){const i=_u(r[n],a[n]);if(i)return i;n++}if(Math.abs(a.length-r.length)===1){if(Fi(r))return 1;if(Fi(a))return-1}return a.length-r.length}function Fi(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const ku={type:0,value:""},Au=/[a-zA-Z0-9_]/;function Ou(e){if(!e)return[[]];if(e==="/")return[[ku]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=0,r=n;const a=[];let i;function o(){i&&a.push(i),i=[]}let s=0,l,c="",f="";function d(){!c||(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;s<e.length;){if(l=e[s++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):h();break;case 4:h(),n=r;break;case 1:l==="("?n=2:Au.test(l)?h():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--,f="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),d(),o(),a}function Pu(e,t,n){const r=xu(Ou(e.path),n),a=ne(r,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function Su(e,t){const n=[],r=new Map;t=$i({strict:!1,end:!0,sensitive:!1},t);function a(f){return r.get(f)}function i(f,d,h){const g=!h,E=Ru(f);E.aliasOf=h&&h.record;const N=$i(t,f),S=[E];if("alias"in f){const I=typeof f.alias=="string"?[f.alias]:f.alias;for(const z of I)S.push(ne({},E,{components:h?h.record.components:E.components,path:z,aliasOf:h?h.record:E}))}let v,_;for(const I of S){const{path:z}=I;if(d&&z[0]!=="/"){const D=d.record.path,X=D[D.length-1]==="/"?"":"/";I.path=d.record.path+(z&&X+z)}if(v=Pu(I,d,N),h?h.alias.push(v):(_=_||v,_!==v&&_.alias.push(v),g&&f.name&&!ji(v)&&o(f.name)),E.children){const D=E.children;for(let X=0;X<D.length;X++)i(D[X],v,h&&h.children[X])}h=h||v,l(v)}return _?()=>{o(_)}:un}function o(f){if(Es(f)){const d=r.get(f);d&&(r.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function s(){return n}function l(f){let d=0;for(;d<n.length&&Eu(f,n[d])>=0&&(f.record.path!==n[d].record.path||!As(f,n[d]));)d++;n.splice(d,0,f),f.record.name&&!ji(f)&&r.set(f.record.name,f)}function c(f,d){let h,g={},E,N;if("name"in f&&f.name){if(h=r.get(f.name),!h)throw qt(1,{location:f});N=h.record.name,g=ne(Cu(d.params,h.keys.filter(_=>!_.optional).map(_=>_.name)),f.params),E=h.stringify(g)}else if("path"in f)E=f.path,h=n.find(_=>_.re.test(E)),h&&(g=h.parse(E),N=h.record.name);else{if(h=d.name?r.get(d.name):n.find(_=>_.re.test(d.path)),!h)throw qt(1,{location:f,currentLocation:d});N=h.record.name,g=ne({},d.params,f.params),E=h.stringify(g)}const S=[];let v=h;for(;v;)S.unshift(v.record),v=v.parent;return{name:N,path:E,params:g,matched:S,meta:Tu(S)}}return e.forEach(f=>i(f)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:s,getRecordMatcher:a}}function Cu(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Ru(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Iu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Iu(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function ji(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Tu(e){return e.reduce((t,n)=>ne(t,n.meta),{})}function $i(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function As(e,t){return t.children.some(n=>n===e||As(e,n))}const Os=/#/g,Nu=/&/g,Mu=/\//g,Lu=/=/g,Fu=/\?/g,Ps=/\+/g,ju=/%5B/g,$u=/%5D/g,Ss=/%5E/g,zu=/%60/g,Cs=/%7B/g,Du=/%7C/g,Rs=/%7D/g,Hu=/%20/g;function La(e){return encodeURI(""+e).replace(Du,"|").replace(ju,"[").replace($u,"]")}function Uu(e){return La(e).replace(Cs,"{").replace(Rs,"}").replace(Ss,"^")}function Jr(e){return La(e).replace(Ps,"%2B").replace(Hu,"+").replace(Os,"%23").replace(Nu,"%26").replace(zu,"`").replace(Cs,"{").replace(Rs,"}").replace(Ss,"^")}function Bu(e){return Jr(e).replace(Lu,"%3D")}function Wu(e){return La(e).replace(Os,"%23").replace(Fu,"%3F")}function Ku(e){return e==null?"":Wu(e).replace(Mu,"%2F")}function qn(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Yu(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<r.length;++a){const i=r[a].replace(Ps," "),o=i.indexOf("="),s=qn(o<0?i:i.slice(0,o)),l=o<0?null:qn(i.slice(o+1));if(s in t){let c=t[s];ze(c)||(c=t[s]=[c]),c.push(l)}else t[s]=l}return t}function zi(e){let t="";for(let n in e){const r=e[n];if(n=Bu(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(ze(r)?r.map(i=>i&&Jr(i)):[r&&Jr(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function qu(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=ze(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return t}const Vu=Symbol(""),Di=Symbol(""),hr=Symbol(""),Is=Symbol(""),Qr=Symbol("");function nn(){let e=[];function t(r){return e.push(r),()=>{const a=e.indexOf(r);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function ut(e,t,n,r,a){const i=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((o,s)=>{const l=d=>{d===!1?s(qt(4,{from:n,to:t})):d instanceof Error?s(d):bu(d)?s(qt(2,{from:t,to:d})):(i&&r.enterCallbacks[a]===i&&typeof d=="function"&&i.push(d),o())},c=e.call(r&&r.instances[a],t,n,l);let f=Promise.resolve(c);e.length<3&&(f=f.then(l)),f.catch(d=>s(d))})}function Pr(e,t,n,r){const a=[];for(const i of e)for(const o in i.components){let s=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(Gu(s)){const c=(s.__vccOpts||s)[t];c&&a.push(ut(c,n,r,i,o))}else{let l=s();a.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=eu(c)?c.default:c;i.components[o]=f;const h=(f.__vccOpts||f)[t];return h&&ut(h,n,r,i,o)()}))}}return a}function Gu(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Hi(e){const t=Ye(hr),n=Ye(Is),r=fe(()=>t.resolve(Dt(e.to))),a=fe(()=>{const{matched:l}=r.value,{length:c}=l,f=l[c-1],d=n.matched;if(!f||!d.length)return-1;const h=d.findIndex(Yt.bind(null,f));if(h>-1)return h;const g=Ui(l[c-2]);return c>1&&Ui(f)===g&&d[d.length-1].path!==g?d.findIndex(Yt.bind(null,l[c-2])):h}),i=fe(()=>a.value>-1&&Zu(n.params,r.value.params)),o=fe(()=>a.value>-1&&a.value===n.matched.length-1&&xs(n.params,r.value.params));function s(l={}){return Qu(l)?t[Dt(e.replace)?"replace":"push"](Dt(e.to)).catch(un):Promise.resolve()}return{route:r,href:fe(()=>r.value.href),isActive:i,isExactActive:o,navigate:s}}const Xu=An({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Hi,setup(e,{slots:t}){const n=Jt(Hi(e)),{options:r}=Ye(hr),a=fe(()=>({[Bi(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Bi(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:ur("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},i)}}}),Ju=Xu;function Qu(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Zu(e,t){for(const n in t){const r=t[n],a=e[n];if(typeof r=="string"){if(r!==a)return!1}else if(!ze(a)||a.length!==r.length||r.some((i,o)=>i!==a[o]))return!1}return!0}function Ui(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Bi=(e,t,n)=>e!=null?e:t!=null?t:n,ed=An({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Ye(Qr),a=fe(()=>e.route||r.value),i=Ye(Di,0),o=fe(()=>{let c=Dt(i);const{matched:f}=a.value;let d;for(;(d=f[c])&&!d.components;)c++;return c}),s=fe(()=>a.value.matched[o.value]);Fn(Di,fe(()=>o.value+1)),Fn(Vu,s),Fn(Qr,a);const l=Pa();return Ht(()=>[l.value,s.value,e.name],([c,f,d],[h,g,E])=>{f&&(f.instances[d]=c,g&&g!==f&&c&&c===h&&(f.leaveGuards.size||(f.leaveGuards=g.leaveGuards),f.updateGuards.size||(f.updateGuards=g.updateGuards))),c&&f&&(!g||!Yt(f,g)||!h)&&(f.enterCallbacks[d]||[]).forEach(N=>N(c))},{flush:"post"}),()=>{const c=a.value,f=s.value,d=f&&f.components[e.name],h=e.name;if(!d)return Wi(n.default,{Component:d,route:c});const g=f.props[e.name],E=g?g===!0?c.params:typeof g=="function"?g(c):g:null,S=ur(d,ne({},E,t,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(f.instances[h]=null)},ref:l}));return Wi(n.default,{Component:S,route:c})||S}}});function Wi(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const td=ed;function nd(e){const t=Su(e.routes,e),n=e.parseQuery||Yu,r=e.stringifyQuery||zi,a=e.history,i=nn(),o=nn(),s=nn(),l=Jl(ot);let c=ot;Lt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Ar.bind(null,b=>""+b),d=Ar.bind(null,Ku),h=Ar.bind(null,qn);function g(b,M){let P,L;return Es(b)?(P=t.getRecordMatcher(b),L=M):L=b,t.addRoute(L,P)}function E(b){const M=t.getRecordMatcher(b);M&&t.removeRoute(M)}function N(){return t.getRoutes().map(b=>b.record)}function S(b){return!!t.getRecordMatcher(b)}function v(b,M){if(M=ne({},M||l.value),typeof b=="string"){const K=Or(n,b,M.path),u=t.resolve({path:K.path},M),m=a.createHref(K.fullPath);return ne(K,u,{params:h(u.params),hash:qn(K.hash),redirectedFrom:void 0,href:m})}let P;if("path"in b)P=ne({},b,{path:Or(n,b.path,M.path).path});else{const K=ne({},b.params);for(const u in K)K[u]==null&&delete K[u];P=ne({},b,{params:d(b.params)}),M.params=d(M.params)}const L=t.resolve(P,M),Z=b.hash||"";L.params=f(h(L.params));const oe=ru(r,ne({},b,{hash:Uu(Z),path:L.path})),Y=a.createHref(oe);return ne({fullPath:oe,hash:Z,query:r===zi?qu(b.query):b.query||{}},L,{redirectedFrom:void 0,href:Y})}function _(b){return typeof b=="string"?Or(n,b,l.value.path):ne({},b)}function I(b,M){if(c!==b)return qt(8,{from:M,to:b})}function z(b){return B(b)}function D(b){return z(ne(_(b),{replace:!0}))}function X(b){const M=b.matched[b.matched.length-1];if(M&&M.redirect){const{redirect:P}=M;let L=typeof P=="function"?P(b):P;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=_(L):{path:L},L.params={}),ne({query:b.query,hash:b.hash,params:"path"in L?{}:b.params},L)}}function B(b,M){const P=c=v(b),L=l.value,Z=b.state,oe=b.force,Y=b.replace===!0,K=X(P);if(K)return B(ne(_(K),{state:Z,force:oe,replace:Y}),M||P);const u=P;u.redirectedFrom=M;let m;return!oe&&au(r,L,P)&&(m=qt(16,{to:u,from:L}),St(L,L,!0,!1)),(m?Promise.resolve(m):ae(u,L)).catch(p=>st(p)?st(p,2)?p:Ee(p):ie(p,u,L)).then(p=>{if(p){if(st(p,2))return B(ne(_(p.to),{state:Z,force:oe,replace:Y}),M||u)}else p=ge(u,L,!0,Y,Z);return ye(u,L,p),p})}function q(b,M){const P=I(b,M);return P?Promise.reject(P):Promise.resolve()}function ae(b,M){let P;const[L,Z,oe]=rd(b,M);P=Pr(L.reverse(),"beforeRouteLeave",b,M);for(const K of L)K.leaveGuards.forEach(u=>{P.push(ut(u,b,M))});const Y=q.bind(null,b,M);return P.push(Y),It(P).then(()=>{P=[];for(const K of i.list())P.push(ut(K,b,M));return P.push(Y),It(P)}).then(()=>{P=Pr(Z,"beforeRouteUpdate",b,M);for(const K of Z)K.updateGuards.forEach(u=>{P.push(ut(u,b,M))});return P.push(Y),It(P)}).then(()=>{P=[];for(const K of b.matched)if(K.beforeEnter&&!M.matched.includes(K))if(ze(K.beforeEnter))for(const u of K.beforeEnter)P.push(ut(u,b,M));else P.push(ut(K.beforeEnter,b,M));return P.push(Y),It(P)}).then(()=>(b.matched.forEach(K=>K.enterCallbacks={}),P=Pr(oe,"beforeRouteEnter",b,M),P.push(Y),It(P))).then(()=>{P=[];for(const K of o.list())P.push(ut(K,b,M));return P.push(Y),It(P)}).catch(K=>st(K,8)?K:Promise.reject(K))}function ye(b,M,P){for(const L of s.list())L(b,M,P)}function ge(b,M,P,L,Z){const oe=I(b,M);if(oe)return oe;const Y=M===ot,K=Lt?history.state:{};P&&(L||Y?a.replace(b.fullPath,ne({scroll:Y&&K&&K.scroll},Z)):a.push(b.fullPath,Z)),l.value=b,St(b,M,P,Y),Ee()}let _e;function at(){_e||(_e=a.listen((b,M,P)=>{if(!Zt.listening)return;const L=v(b),Z=X(L);if(Z){B(ne(Z,{replace:!0}),L).catch(un);return}c=L;const oe=l.value;Lt&&du(Ti(oe.fullPath,P.delta),mr()),ae(L,oe).catch(Y=>st(Y,12)?Y:st(Y,2)?(B(Y.to,L).then(K=>{st(K,20)&&!P.delta&&P.type===En.pop&&a.go(-1,!1)}).catch(un),Promise.reject()):(P.delta&&a.go(-P.delta,!1),ie(Y,L,oe))).then(Y=>{Y=Y||ge(L,oe,!1),Y&&(P.delta?a.go(-P.delta,!1):P.type===En.pop&&st(Y,20)&&a.go(-1,!1)),ye(L,oe,Y)}).catch(un)}))}let Se=nn(),ue=nn(),de;function ie(b,M,P){Ee(b);const L=ue.list();return L.length?L.forEach(Z=>Z(b,M,P)):console.error(b),Promise.reject(b)}function Q(){return de&&l.value!==ot?Promise.resolve():new Promise((b,M)=>{Se.add([b,M])})}function Ee(b){return de||(de=!b,at(),Se.list().forEach(([M,P])=>b?P(b):M()),Se.reset()),b}function St(b,M,P,L){const{scrollBehavior:Z}=e;if(!Lt||!Z)return Promise.resolve();const oe=!P&&mu(Ti(b.fullPath,0))||(L||!P)&&history.state&&history.state.scroll||null;return Ca().then(()=>Z(b,M,oe)).then(Y=>Y&&uu(Y)).catch(Y=>ie(Y,b,M))}const Ve=b=>a.go(b);let De;const Ce=new Set,Zt={currentRoute:l,listening:!0,addRoute:g,removeRoute:E,hasRoute:S,getRoutes:N,resolve:v,options:e,push:z,replace:D,go:Ve,back:()=>Ve(-1),forward:()=>Ve(1),beforeEach:i.add,beforeResolve:o.add,afterEach:s.add,onError:ue.add,isReady:Q,install(b){const M=this;b.component("RouterLink",Ju),b.component("RouterView",td),b.config.globalProperties.$router=M,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>Dt(l)}),Lt&&!De&&l.value===ot&&(De=!0,z(a.location).catch(Z=>{}));const P={};for(const Z in ot)P[Z]=fe(()=>l.value[Z]);b.provide(hr,M),b.provide(Is,Jt(P)),b.provide(Qr,l);const L=b.unmount;Ce.add(b),b.unmount=function(){Ce.delete(b),Ce.size<1&&(c=ot,_e&&_e(),_e=null,l.value=ot,De=!1,de=!1),L()}}};return Zt}function It(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function rd(e,t){const n=[],r=[],a=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const s=t.matched[o];s&&(e.matched.find(c=>Yt(c,s))?r.push(s):n.push(s));const l=e.matched[o];l&&(t.matched.find(c=>Yt(c,l))||a.push(l))}return[n,r,a]}function bh(){return Ye(hr)}async function ad(e){const t={method:"POST",headers:{"Content-Type":"application/json"},body:`{"username":"${e}"}`};try{await fetch("http://127.0.0.1:3000/api/v1/user",t)}catch(n){console.error(n)}}async function Tn(e){const t={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};try{await fetch("http://127.0.0.1:3000/api/v1/user",t)}catch(n){console.log(n)}}const id=Wc("main",{state:()=>({name:"",itemsPower:0,heroLevel:0}),getters:{fullPower:e=>e.itemsPower+e.heroLevel},actions:{login(e){this.name=e,ad(e)},incrementItemsPower(){this.itemsPower++;const e={username:this.name,stats:{heroLevel:this.heroLevel,itemsPower:this.itemsPower}};Tn(e)},decrementItemsPower(){this.itemsPower--;const e={username:this.name,stats:{heroLevel:this.heroLevel,itemsPower:this.itemsPower}};Tn(e)},incrementHeroLevel(){this.heroLevel++;const e={username:this.name,stats:{heroLevel:this.heroLevel,itemsPower:this.itemsPower}};Tn(e)},decrementHeroLevel(){this.heroLevel--;const e={username:this.name,stats:{heroLevel:this.heroLevel,itemsPower:this.itemsPower}};Tn(e)}},persist:!0}),od=()=>Ma(()=>import("./Hero.876ccd4e.js"),["assets/Hero.876ccd4e.js","assets/Hero.372f83cb.css"]),sd=()=>Ma(()=>import("./Login.5f2d6d0b.js"),["assets/Login.5f2d6d0b.js","assets/Login.041daced.css"]),ld=()=>Ma(()=>import("./Settings.423b327e.js"),[]),Zr={GAME:{path:"/game",name:"Hero",component:od},LOGIN:{path:"/",name:"Login",component:sd},SETTINGS:{path:"/settings",name:"Settings",component:ld}},fd=Object.values(Zr),Ts=nd({history:vu(),routes:fd});Ts.beforeEach((e,t)=>{if(id().name===""&&e.name!==Zr.LOGIN.name)return{name:Zr.LOGIN.name}});var cd=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n};const ud={};function dd(e,t){const n=Tf("router-view");return Qf(),ec(n)}var md=cd(ud,[["render",dd]]);/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function Ki(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ki(Object(n),!0).forEach(function(r){gd(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ki(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Vn(e){return Vn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Vn(e)}function hd(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Yi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function pd(e,t,n){return t&&Yi(e.prototype,t),n&&Yi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function gd(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Fa(e,t){return bd(e)||wd(e,t)||Ns(e,t)||_d()}function pr(e){return vd(e)||yd(e)||Ns(e)||xd()}function vd(e){if(Array.isArray(e))return ea(e)}function bd(e){if(Array.isArray(e))return e}function yd(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function wd(e,t){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Ns(e,t){if(!!e){if(typeof e=="string")return ea(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ea(e,t)}}function ea(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function xd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _d(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var qi=function(){},ja={},Ms={},Ls=null,Fs={mark:qi,measure:qi};try{typeof window!="undefined"&&(ja=window),typeof document!="undefined"&&(Ms=document),typeof MutationObserver!="undefined"&&(Ls=MutationObserver),typeof performance!="undefined"&&(Fs=performance)}catch{}var Ed=ja.navigator||{},Vi=Ed.userAgent,Gi=Vi===void 0?"":Vi,gt=ja,le=Ms,Xi=Ls,Nn=Fs;gt.document;var rt=!!le.documentElement&&!!le.head&&typeof le.addEventListener=="function"&&typeof le.createElement=="function",js=~Gi.indexOf("MSIE")||~Gi.indexOf("Trident/"),Ze="___FONT_AWESOME___",ta=16,$s="fa",zs="svg-inline--fa",Ot="data-fa-i2svg",na="data-fa-pseudo-element",kd="data-fa-pseudo-element-pending",$a="data-prefix",za="data-icon",Ji="fontawesome-i2svg",Ad="async",Od=["HTML","HEAD","STYLE","SCRIPT"],Ds=function(){try{return!0}catch{return!1}}(),Da={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},Gn={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},Hs={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},Pd={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},Sd=/fa[srltdbk]?[\-\ ]/,Us="fa-layers-text",Cd=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,Rd={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},Bs=[1,2,3,4,5,6,7,8,9,10],Id=Bs.concat([11,12,13,14,15,16,17,18,19,20]),Td=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Et={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Nd=[].concat(pr(Object.keys(Gn)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Et.GROUP,Et.SWAP_OPACITY,Et.PRIMARY,Et.SECONDARY]).concat(Bs.map(function(e){return"".concat(e,"x")})).concat(Id.map(function(e){return"w-".concat(e)})),Ws=gt.FontAwesomeConfig||{};function Md(e){var t=le.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Ld(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(le&&typeof le.querySelector=="function"){var Fd=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Fd.forEach(function(e){var t=Fa(e,2),n=t[0],r=t[1],a=Ld(Md(n));a!=null&&(Ws[r]=a)})}var jd={familyPrefix:$s,styleDefault:"solid",replacementClass:zs,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},mn=R(R({},jd),Ws);mn.autoReplaceSvg||(mn.observeMutations=!1);var $={};Object.keys(mn).forEach(function(e){Object.defineProperty($,e,{enumerable:!0,set:function(n){mn[e]=n,zn.forEach(function(r){return r($)})},get:function(){return mn[e]}})});gt.FontAwesomeConfig=$;var zn=[];function $d(e){return zn.push(e),function(){zn.splice(zn.indexOf(e),1)}}var lt=ta,Ke={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function zd(e){if(!(!e||!rt)){var t=le.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=le.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return le.head.insertBefore(t,r),e}}var Dd="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function kn(){for(var e=12,t="";e-- >0;)t+=Dd[Math.random()*62|0];return t}function Qt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ha(e){return e.classList?Qt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Ks(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Hd(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Ks(e[n]),'" ')},"").trim()}function gr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Ua(e){return e.size!==Ke.size||e.x!==Ke.x||e.y!==Ke.y||e.rotate!==Ke.rotate||e.flipX||e.flipY}function Ud(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function Bd(e){var t=e.transform,n=e.width,r=n===void 0?ta:n,a=e.height,i=a===void 0?ta:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&js?l+="translate(".concat(t.x/lt-r/2,"em, ").concat(t.y/lt-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/lt,"em), calc(-50% + ").concat(t.y/lt,"em)) "):l+="translate(".concat(t.x/lt,"em, ").concat(t.y/lt,"em) "),l+="scale(".concat(t.size/lt*(t.flipX?-1:1),", ").concat(t.size/lt*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Wd=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Ys(){var e=$s,t=zs,n=$.familyPrefix,r=$.replacementClass,a=Wd;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Qi=!1;function Sr(){$.autoAddCss&&!Qi&&(zd(Ys()),Qi=!0)}var Kd={mixout:function(){return{dom:{css:Ys,insertCss:Sr}}},hooks:function(){return{beforeDOMElementCreation:function(){Sr()},beforeI2svg:function(){Sr()}}}},et=gt||{};et[Ze]||(et[Ze]={});et[Ze].styles||(et[Ze].styles={});et[Ze].hooks||(et[Ze].hooks={});et[Ze].shims||(et[Ze].shims=[]);var Fe=et[Ze],qs=[],Yd=function e(){le.removeEventListener("DOMContentLoaded",e),Xn=1,qs.map(function(t){return t()})},Xn=!1;rt&&(Xn=(le.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(le.readyState),Xn||le.addEventListener("DOMContentLoaded",Yd));function qd(e){!rt||(Xn?setTimeout(e,0):qs.push(e))}function On(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Ks(e):"<".concat(t," ").concat(Hd(r),">").concat(i.map(On).join(""),"</").concat(t,">")}function Zi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Vd=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Cr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Vd(n,a):n,l,c,f;for(r===void 0?(l=1,f=t[i[0]]):(l=0,f=r);l<o;l++)c=i[l],f=s(f,t[c],c,t);return f};function Gd(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function ra(e){var t=Gd(e);return t.length===1?t[0].toString(16):null}function Xd(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function eo(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function aa(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=eo(t);typeof Fe.hooks.addPack=="function"&&!a?Fe.hooks.addPack(e,eo(t)):Fe.styles[e]=R(R({},Fe.styles[e]||{}),i),e==="fas"&&aa("fa",t)}var hn=Fe.styles,Jd=Fe.shims,Qd=Object.values(Hs),Ba=null,Vs={},Gs={},Xs={},Js={},Qs={},Zd=Object.keys(Da);function em(e){return~Nd.indexOf(e)}function tm(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!em(a)?a:null}var Zs=function(){var t=function(i){return Cr(hn,function(o,s,l){return o[l]=Cr(s,i,{}),o},{})};Vs=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Gs=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Qs=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in hn||$.autoFetchSvg,r=Cr(Jd,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Xs=r.names,Js=r.unicodes,Ba=vr($.styleDefault)};$d(function(e){Ba=vr(e.styleDefault)});Zs();function Wa(e,t){return(Vs[e]||{})[t]}function nm(e,t){return(Gs[e]||{})[t]}function Ft(e,t){return(Qs[e]||{})[t]}function el(e){return Xs[e]||{prefix:null,iconName:null}}function rm(e){var t=Js[e],n=Wa("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function vt(){return Ba}var Ka=function(){return{prefix:null,iconName:null,rest:[]}};function vr(e){var t=Da[e],n=Gn[e]||Gn[t],r=e in Fe.styles?e:null;return n||r||null}function br(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,a=null,i=e.reduce(function(o,s){var l=tm($.familyPrefix,s);if(hn[s]?(s=Qd.includes(s)?Pd[s]:s,a=s,o.prefix=s):Zd.indexOf(s)>-1?(a=s,o.prefix=vr(s)):l?o.iconName=l:s!==$.replacementClass&&o.rest.push(s),!r&&o.prefix&&o.iconName){var c=a==="fa"?el(o.iconName):{},f=Ft(o.prefix,o.iconName);c.prefix&&(a=null),o.iconName=c.iconName||f||o.iconName,o.prefix=c.prefix||o.prefix,o.prefix==="far"&&!hn.far&&hn.fas&&!$.autoFetchSvg&&(o.prefix="fas")}return o},Ka());return(i.prefix==="fa"||a==="fa")&&(i.prefix=vt()||"fas"),i}var am=function(){function e(){hd(this,e),this.definitions={}}return pd(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=R(R({},n.definitions[s]||{}),o[s]),aa(s,o[s]);var l=Hs[s];l&&aa(l,o[s]),Zs()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,f=c[2];n[s]||(n[s]={}),f.length>0&&f.forEach(function(d){typeof d=="string"&&(n[s][d]=c)}),n[s][l]=c}),n}}]),e}(),to=[],jt={},Ut={},im=Object.keys(Ut);function om(e,t){var n=t.mixoutsTo;return to=e,jt={},Object.keys(Ut).forEach(function(r){im.indexOf(r)===-1&&delete Ut[r]}),to.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Vn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){jt[o]||(jt[o]=[]),jt[o].push(i[o])})}r.provides&&r.provides(Ut)}),n}function ia(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=jt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Pt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=jt[e]||[];a.forEach(function(i){i.apply(null,n)})}function tt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ut[e]?Ut[e].apply(null,t):void 0}function oa(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||vt();if(!!t)return t=Ft(n,t)||t,Zi(tl.definitions,n,t)||Zi(Fe.styles,n,t)}var tl=new am,sm=function(){$.autoReplaceSvg=!1,$.observeMutations=!1,Pt("noAuto")},lm={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return rt?(Pt("beforeI2svg",t),tt("pseudoElements2svg",t),tt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;$.autoReplaceSvg===!1&&($.autoReplaceSvg=!0),$.observeMutations=!0,qd(function(){cm({autoReplaceSvgRoot:n}),Pt("watch",t)})}},fm={icon:function(t){if(t===null)return null;if(Vn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Ft(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=vr(t[0]);return{prefix:r,iconName:Ft(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat($.familyPrefix,"-"))>-1||t.match(Sd))){var a=br(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||vt(),iconName:Ft(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=vt();return{prefix:i,iconName:Ft(i,t)||t}}}},Pe={noAuto:sm,config:$,dom:lm,parse:fm,library:tl,findIconDefinition:oa,toHtml:On},cm=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?le:n;(Object.keys(Fe.styles).length>0||$.autoFetchSvg)&&rt&&$.autoReplaceSvg&&Pe.dom.i2svg({node:r})};function yr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return On(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!rt){var r=le.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function um(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Ua(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=gr(R(R({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function dm(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat($.familyPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:R(R({},a),{},{id:o}),children:r}]}]}function Ya(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,f=e.titleId,d=e.extra,h=e.watchable,g=h===void 0?!1:h,E=r.found?r:n,N=E.width,S=E.height,v=a==="fak",_=[$.replacementClass,i?"".concat($.familyPrefix,"-").concat(i):""].filter(function(ae){return d.classes.indexOf(ae)===-1}).filter(function(ae){return ae!==""||!!ae}).concat(d.classes).join(" "),I={children:[],attributes:R(R({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:_,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(S)})},z=v&&!~d.classes.indexOf("fa-fw")?{width:"".concat(N/S*16*.0625,"em")}:{};g&&(I.attributes[Ot]=""),l&&(I.children.push({tag:"title",attributes:{id:I.attributes["aria-labelledby"]||"title-".concat(f||kn())},children:[l]}),delete I.attributes.title);var D=R(R({},I),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:R(R({},z),d.styles)}),X=r.found&&n.found?tt("generateAbstractMask",D)||{children:[],attributes:{}}:tt("generateAbstractIcon",D)||{children:[],attributes:{}},B=X.children,q=X.attributes;return D.children=B,D.attributes=q,s?dm(D):um(D)}function no(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=R(R(R({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[Ot]="");var f=R({},o.styles);Ua(a)&&(f.transform=Bd({transform:a,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var d=gr(f);d.length>0&&(c.style=d);var h=[];return h.push({tag:"span",attributes:c,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function mm(e){var t=e.content,n=e.title,r=e.extra,a=R(R(R({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=gr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Rr=Fe.styles;function sa(e){var t=e[0],n=e[1],r=e.slice(4),a=Fa(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat($.familyPrefix,"-").concat(Et.GROUP)},children:[{tag:"path",attributes:{class:"".concat($.familyPrefix,"-").concat(Et.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat($.familyPrefix,"-").concat(Et.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var hm={found:!1,width:512,height:512};function pm(e,t){!Ds&&!$.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function la(e,t){var n=t;return t==="fa"&&$.styleDefault!==null&&(t=vt()),new Promise(function(r,a){if(tt("missingIconAbstract"),n==="fa"){var i=el(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Rr[t]&&Rr[t][e]){var o=Rr[t][e];return r(sa(o))}pm(e,t),r(R(R({},hm),{},{icon:$.showMissingIcons&&e?tt("missingIconAbstract")||{}:{}}))})}var ro=function(){},fa=$.measurePerformance&&Nn&&Nn.mark&&Nn.measure?Nn:{mark:ro,measure:ro},on='FA "6.1.2"',gm=function(t){return fa.mark("".concat(on," ").concat(t," begins")),function(){return nl(t)}},nl=function(t){fa.mark("".concat(on," ").concat(t," ends")),fa.measure("".concat(on," ").concat(t),"".concat(on," ").concat(t," begins"),"".concat(on," ").concat(t," ends"))},qa={begin:gm,end:nl},Dn=function(){};function ao(e){var t=e.getAttribute?e.getAttribute(Ot):null;return typeof t=="string"}function vm(e){var t=e.getAttribute?e.getAttribute($a):null,n=e.getAttribute?e.getAttribute(za):null;return t&&n}function bm(e){return e&&e.classList&&e.classList.contains&&e.classList.contains($.replacementClass)}function ym(){if($.autoReplaceSvg===!0)return Hn.replace;var e=Hn[$.autoReplaceSvg];return e||Hn.replace}function wm(e){return le.createElementNS("http://www.w3.org/2000/svg",e)}function xm(e){return le.createElement(e)}function rl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?wm:xm:n;if(typeof e=="string")return le.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(rl(o,{ceFn:r}))}),a}function _m(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Hn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(rl(a),n)}),n.getAttribute(Ot)===null&&$.keepOriginalSource){var r=le.createComment(_m(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Ha(n).indexOf($.replacementClass))return Hn.replace(t);var a=new RegExp("".concat($.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===$.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return On(s)}).join(`
`);n.setAttribute(Ot,""),n.innerHTML=o}};function io(e){e()}function al(e,t){var n=typeof t=="function"?t:Dn;if(e.length===0)n();else{var r=io;$.mutateApproach===Ad&&(r=gt.requestAnimationFrame||io),r(function(){var a=ym(),i=qa.begin("mutate");e.map(a),i(),n()})}}var Va=!1;function il(){Va=!0}function ca(){Va=!1}var Jn=null;function oo(e){if(!!Xi&&!!$.observeMutations){var t=e.treeCallback,n=t===void 0?Dn:t,r=e.nodeCallback,a=r===void 0?Dn:r,i=e.pseudoElementsCallback,o=i===void 0?Dn:i,s=e.observeMutationsRoot,l=s===void 0?le:s;Jn=new Xi(function(c){if(!Va){var f=vt();Qt(c).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!ao(d.addedNodes[0])&&($.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&$.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&ao(d.target)&&~Td.indexOf(d.attributeName))if(d.attributeName==="class"&&vm(d.target)){var h=br(Ha(d.target)),g=h.prefix,E=h.iconName;d.target.setAttribute($a,g||f),E&&d.target.setAttribute(za,E)}else bm(d.target)&&a(d.target)})}}),rt&&Jn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Em(){!Jn||Jn.disconnect()}function km(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Am(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=br(Ha(e));return a.prefix||(a.prefix=vt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=nm(a.prefix,e.innerText)||Wa(a.prefix,ra(e.innerText))),!a.iconName&&$.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Om(e){var t=Qt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return $.autoA11y&&(n?t["aria-labelledby"]="".concat($.replacementClass,"-title-").concat(r||kn()):(t["aria-hidden"]="true",t.focusable="false")),t}function Pm(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ke,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function so(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Am(e),r=n.iconName,a=n.prefix,i=n.rest,o=Om(e),s=ia("parseNodeAttributes",{},e),l=t.styleParser?km(e):[];return R({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Ke,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Sm=Fe.styles;function ol(e){var t=$.autoReplaceSvg==="nest"?so(e,{styleParser:!1}):so(e);return~t.extra.classes.indexOf(Us)?tt("generateLayersText",e,t):tt("generateSvgReplacementMutation",e,t)}function lo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!rt)return Promise.resolve();var n=le.documentElement.classList,r=function(d){return n.add("".concat(Ji,"-").concat(d))},a=function(d){return n.remove("".concat(Ji,"-").concat(d))},i=$.autoFetchSvg?Object.keys(Da):Object.keys(Sm);i.includes("fa")||i.push("fa");var o=[".".concat(Us,":not([").concat(Ot,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(Ot,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Qt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=qa.begin("onTree"),c=s.reduce(function(f,d){try{var h=ol(d);h&&f.push(h)}catch(g){Ds||g.name==="MissingIcon"&&console.error(g)}return f},[]);return new Promise(function(f,d){Promise.all(c).then(function(h){al(h,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),f()})}).catch(function(h){l(),d(h)})})}function Cm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ol(e).then(function(n){n&&al([n],t)})}function Rm(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:oa(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:oa(a||{})),e(r,R(R({},n),{},{mask:a}))}}var Im=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Ke:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,f=c===void 0?null:c,d=n.title,h=d===void 0?null:d,g=n.titleId,E=g===void 0?null:g,N=n.classes,S=N===void 0?[]:N,v=n.attributes,_=v===void 0?{}:v,I=n.styles,z=I===void 0?{}:I;if(!!t){var D=t.prefix,X=t.iconName,B=t.icon;return yr(R({type:"icon"},t),function(){return Pt("beforeDOMElementCreation",{iconDefinition:t,params:n}),$.autoA11y&&(h?_["aria-labelledby"]="".concat($.replacementClass,"-title-").concat(E||kn()):(_["aria-hidden"]="true",_.focusable="false")),Ya({icons:{main:sa(B),mask:l?sa(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:D,iconName:X,transform:R(R({},Ke),a),symbol:o,title:h,maskId:f,titleId:E,extra:{attributes:_,styles:z,classes:S}})})}},Tm={mixout:function(){return{icon:Rm(Im)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=lo,n.nodeCallback=Cm,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?le:r,i=n.callback,o=i===void 0?function(){}:i;return lo(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,f=r.mask,d=r.maskId,h=r.extra;return new Promise(function(g,E){Promise.all([la(a,s),f.iconName?la(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var S=Fa(N,2),v=S[0],_=S[1];g([n,Ya({icons:{main:v,mask:_},prefix:s,iconName:a,transform:l,symbol:c,maskId:d,title:i,titleId:o,extra:h,watchable:!0})])}).catch(E)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=gr(s);l.length>0&&(a.style=l);var c;return Ua(o)&&(c=tt("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},Nm={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return yr({type:"layer"},function(){Pt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat($.familyPrefix,"-layers")].concat(pr(i)).join(" ")},children:o}]})}}}},Mm={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,f=r.styles,d=f===void 0?{}:f;return yr({type:"counter",content:n},function(){return Pt("beforeDOMElementCreation",{content:n,params:r}),mm({content:n.toString(),title:i,extra:{attributes:c,styles:d,classes:["".concat($.familyPrefix,"-layers-counter")].concat(pr(s))}})})}}}},Lm={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Ke:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,f=r.attributes,d=f===void 0?{}:f,h=r.styles,g=h===void 0?{}:h;return yr({type:"text",content:n},function(){return Pt("beforeDOMElementCreation",{content:n,params:r}),no({content:n,transform:R(R({},Ke),i),title:s,extra:{attributes:d,styles:g,classes:["".concat($.familyPrefix,"-layers-text")].concat(pr(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(js){var c=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();s=f.width/c,l=f.height/c}return $.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,no({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Fm=new RegExp('"',"ug"),fo=[1105920,1112319];function jm(e){var t=e.replace(Fm,""),n=Xd(t,0),r=n>=fo[0]&&n<=fo[1],a=t.length===2?t[0]===t[1]:!1;return{value:ra(a?t[0]:t),isSecondary:r||a}}function co(e,t){var n="".concat(kd).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Qt(e.children),o=i.filter(function(X){return X.getAttribute(na)===t})[0],s=gt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Cd),c=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&f!=="none"&&f!==""){var d=s.getPropertyValue("content"),h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Gn[l[2].toLowerCase()]:Rd[c],g=jm(d),E=g.value,N=g.isSecondary,S=l[0].startsWith("FontAwesome"),v=Wa(h,E),_=v;if(S){var I=rm(E);I.iconName&&I.prefix&&(v=I.iconName,h=I.prefix)}if(v&&!N&&(!o||o.getAttribute($a)!==h||o.getAttribute(za)!==_)){e.setAttribute(n,_),o&&e.removeChild(o);var z=Pm(),D=z.extra;D.attributes[na]=t,la(v,h).then(function(X){var B=Ya(R(R({},z),{},{icons:{main:X,mask:Ka()},prefix:h,iconName:_,extra:D,watchable:!0})),q=le.createElement("svg");t==="::before"?e.insertBefore(q,e.firstChild):e.appendChild(q),q.outerHTML=B.map(function(ae){return On(ae)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function $m(e){return Promise.all([co(e,"::before"),co(e,"::after")])}function zm(e){return e.parentNode!==document.head&&!~Od.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(na)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function uo(e){if(!!rt)return new Promise(function(t,n){var r=Qt(e.querySelectorAll("*")).filter(zm).map($m),a=qa.begin("searchPseudoElements");il(),Promise.all(r).then(function(){a(),ca(),t()}).catch(function(){a(),ca(),n()})})}var Dm={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=uo,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?le:r;$.searchPseudoElements&&uo(a)}}},mo=!1,Hm={mixout:function(){return{dom:{unwatch:function(){il(),mo=!0}}}},hooks:function(){return{bootstrap:function(){oo(ia("mutationObserverCallbacks",{}))},noAuto:function(){Em()},watch:function(n){var r=n.observeMutationsRoot;mo?ca():oo(ia("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},ho=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Um={mixout:function(){return{parse:{transform:function(n){return ho(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=ho(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(l," ").concat(c," ").concat(f)},h={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:d,path:h};return{tag:"g",attributes:R({},g.outer),children:[{tag:"g",attributes:R({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:R(R({},r.icon.attributes),g.path)}]}]}}}},Ir={x:0,y:0,width:"100%",height:"100%"};function po(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Bm(e){return e.tag==="g"?e.children:[e]}var Wm={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?br(a.split(" ").map(function(o){return o.trim()})):Ka();return i.prefix||(i.prefix=vt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,f=i.icon,d=o.width,h=o.icon,g=Ud({transform:l,containerWidth:d,iconWidth:c}),E={tag:"rect",attributes:R(R({},Ir),{},{fill:"white"})},N=f.children?{children:f.children.map(po)}:{},S={tag:"g",attributes:R({},g.inner),children:[po(R({tag:f.tag,attributes:R(R({},f.attributes),g.path)},N))]},v={tag:"g",attributes:R({},g.outer),children:[S]},_="mask-".concat(s||kn()),I="clip-".concat(s||kn()),z={tag:"mask",attributes:R(R({},Ir),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[E,v]},D={tag:"defs",children:[{tag:"clipPath",attributes:{id:I},children:Bm(h)},z]};return r.push(D,{tag:"rect",attributes:R({fill:"currentColor","clip-path":"url(#".concat(I,")"),mask:"url(#".concat(_,")")},Ir)}),{children:r,attributes:a}}}},Km={provides:function(t){var n=!1;gt.matchMedia&&(n=gt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:R(R({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=R(R({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:R(R({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:R(R({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:R(R({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:R(R({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:R(R({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:R(R({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:R(R({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Ym={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},qm=[Kd,Tm,Nm,Mm,Lm,Dm,Hm,Um,Wm,Km,Ym];om(qm,{mixoutsTo:Pe});Pe.noAuto;var sl=Pe.config,Vm=Pe.library;Pe.dom;var Qn=Pe.parse;Pe.findIconDefinition;Pe.toHtml;var Gm=Pe.icon;Pe.layer;var Xm=Pe.text;Pe.counter;function go(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Me(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?go(Object(n),!0).forEach(function(r){we(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):go(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Zn(e){return Zn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Zn(e)}function we(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Jm(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Qm(e,t){if(e==null)return{};var n=Jm(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function ua(e){return Zm(e)||eh(e)||th(e)||nh()}function Zm(e){if(Array.isArray(e))return da(e)}function eh(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function th(e,t){if(!!e){if(typeof e=="string")return da(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return da(e,t)}}function da(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function nh(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var rh=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},ll={exports:{}};(function(e){(function(t){var n=function(v,_,I){if(!c(_)||d(_)||h(_)||g(_)||l(_))return _;var z,D=0,X=0;if(f(_))for(z=[],X=_.length;D<X;D++)z.push(n(v,_[D],I));else{z={};for(var B in _)Object.prototype.hasOwnProperty.call(_,B)&&(z[v(B,I)]=n(v,_[B],I))}return z},r=function(v,_){_=_||{};var I=_.separator||"_",z=_.split||/(?=[A-Z])/;return v.split(z).join(I)},a=function(v){return E(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(_,I){return I?I.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},i=function(v){var _=a(v);return _.substr(0,1).toUpperCase()+_.substr(1)},o=function(v,_){return r(v,_).toLowerCase()},s=Object.prototype.toString,l=function(v){return typeof v=="function"},c=function(v){return v===Object(v)},f=function(v){return s.call(v)=="[object Array]"},d=function(v){return s.call(v)=="[object Date]"},h=function(v){return s.call(v)=="[object RegExp]"},g=function(v){return s.call(v)=="[object Boolean]"},E=function(v){return v=v-0,v===v},N=function(v,_){var I=_&&"process"in _?_.process:_;return typeof I!="function"?v:function(z,D){return I(z,v,D)}},S={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(v,_){return n(N(a,_),v)},decamelizeKeys:function(v,_){return n(N(o,_),v,_)},pascalizeKeys:function(v,_){return n(N(i,_),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=S:t.humps=S})(rh)})(ll);var ah=ll.exports,ih=["class","style"];function oh(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=ah.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function sh(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Ga(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Ga(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var f=e.attributes[c];switch(c){case"class":l.class=sh(f);break;case"style":l.style=oh(f);break;default:l.attrs[c]=f}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Qm(n,ih);return ur(e.tag,Me(Me(Me({},t),{},{class:a.class,style:Me(Me({},a.style),o)},a.attrs),s),r)}var fl=!1;try{fl=!0}catch{}function lh(){if(!fl&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function pn(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?we({},e,t):{}}function fh(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},we(t,"fa-".concat(e.size),e.size!==null),we(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),we(t,"fa-pull-".concat(e.pull),e.pull!==null),we(t,"fa-swap-opacity",e.swapOpacity),we(t,"fa-bounce",e.bounce),we(t,"fa-shake",e.shake),we(t,"fa-beat",e.beat),we(t,"fa-fade",e.fade),we(t,"fa-beat-fade",e.beatFade),we(t,"fa-flash",e.flash),we(t,"fa-spin-pulse",e.spinPulse),we(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function vo(e){if(e&&Zn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Qn.icon)return Qn.icon(e);if(e===null)return null;if(Zn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var ch=An({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=fe(function(){return vo(t.icon)}),i=fe(function(){return pn("classes",fh(t))}),o=fe(function(){return pn("transform",typeof t.transform=="string"?Qn.transform(t.transform):t.transform)}),s=fe(function(){return pn("mask",vo(t.mask))}),l=fe(function(){return Gm(a.value,Me(Me(Me(Me({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});Ht(l,function(f){if(!f)return lh("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=fe(function(){return l.value?Ga(l.value.abstract[0],{},r):null});return function(){return c.value}}});An({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=sl.familyPrefix,i=fe(function(){return["".concat(a,"-layers")].concat(ua(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return ur("div",{class:i.value},r.default?r.default():[])}}});An({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=sl.familyPrefix,i=fe(function(){return pn("classes",[].concat(ua(t.counter?["".concat(a,"-layers-counter")]:[]),ua(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=fe(function(){return pn("transform",typeof t.transform=="string"?Qn.transform(t.transform):t.transform)}),s=fe(function(){var c=Xm(t.value.toString(),Me(Me({},o.value),i.value)),f=c.abstract;return t.counter&&(f[0].attributes.class=f[0].attributes.class.replace("fa-layers-text","")),f[0]}),l=fe(function(){return Ga(s.value,{},r)});return function(){return l.value}}});/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var uh={prefix:"fas",iconName:"minus",icon:[448,512,[8722,10134,8211,"subtract"],"f068","M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z"]},dh={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"]};Vm.add(dh,uh);const cl=zc();cl.use(Jc);const wr=Fc(md);wr.use(Ts);wr.use(cl);wr.component("font-awesome-icon",ch);wr.mount("#app");export{Xe as F,Zr as R,cd as _,Tf as a,ds as b,gh as c,An as d,Ie as e,af as f,kf as g,Ra as h,ph as i,id as j,bh as k,Qf as o,Pa as r,mh as t,Dt as u,vh as v,hh as w};
