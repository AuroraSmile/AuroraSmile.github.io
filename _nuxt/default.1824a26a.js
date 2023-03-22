import{_ as z}from"./nuxt-link.bcd6e589.js";import g from"./Icon.45233a6b.js";/* empty css                    */import{a as f,H as p,o as l,b as u,a3 as n,u as h,X as F,aa as O,ab as $,e as W,a5 as M,c as w,w as i,a9 as H,a4 as U,a1 as a,a8 as m,V as X,z as Y,i as k,Y as N,r as L}from"./entry.6fa1db2d.js";import{i as j,a as D,n as G,r as Q,t as R,b as K}from"./index.c2acd0b1.js";import"./config.b61376cb.js";import"./Icon.vue.a21b3803.js";const B=e=>(O("data-v-5447349a"),e=e(),$(),e),q={class:"footer"},J={class:"left"},Z=B(()=>n("span",null,"Powered by Nuxt & Nuxt Content",-1)),ee=["title"],te=B(()=>n("div",{class:"copyright"},[n("span",null,"Copyright © 2023 Aurora")],-1)),oe={__name:"AppFooter",setup(e){const t=p("粤ICP备xxxxxxx号");return(o,r)=>(l(),u("footer",q,[n("div",J,[Z,n("span",null,[n("a",{href:"https://beian.miit.gov.cn/",title:h(t),target:"_blank"},F(h(t)),9,ee)])]),te]))}},ne=f(oe,[["__scopeId","data-v-5447349a"]]),se={},ae=e=>(O("data-v-434d9508"),e=e(),$(),e),re={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},ce=ae(()=>n("path",{d:"M17.168 8H13l.806-4.835A1 1 0 0 0 12.819 2H7.667a1 1 0 0 0-.986.835l-1.667 10A1 1 0 0 0 6 14h4v8l8.01-12.459A1 1 0 0 0 17.168 8z",fill:"currentColor"},null,-1)),_e=[ce];function le(e,t){return l(),u("svg",re,_e)}const ie=f(se,[["render",le],["__scopeId","data-v-434d9508"]]),ue=W({__name:"AppSocialIcons",setup(e){const t=p([{href:"https://github.com/AuroraSmile",icon:"fa-brands:github",label:"AuroraSmile"}]);return(o,r)=>{const _=g,s=z;return l(!0),u(U,null,M(h(t),c=>(l(),w(s,{key:c.label,rel:"noopener noreferrer",title:c.label,"aria-label":c.label,href:c.href,target:"_blank"},{default:i(()=>[c.icon?(l(),w(_,{key:0,name:c.icon},null,8,["name"])):H("",!0)]),_:2},1032,["title","aria-label","href"]))),128)}}}),de=f(ue,[["__scopeId","data-v-e98fc9e7"]]),pe=e=>(O("data-v-96621bad"),e=e(),$(),e),fe={class:"header_container"},me={class:"dropdown_nav"},he={class:"dropdown_item"},ve={class:"dropdown_item"},be={class:"dropdown_item"},xe={class:"left"},ye=pe(()=>n("div",{class:"logo_label"},"Aurora",-1)),Ie={class:"nav_container"},ge={class:"social_container"},Oe={__name:"AppHeader",setup(e){const t=p(!1),o=()=>{t.value=!t.value};return(r,_)=>{const s=z,c=g,v=ie,I=de;return l(),u("header",fe,[n("div",{onClick:o,class:X({dropdown_active:h(t),dropdown:!0})},[n("div",me,[n("div",he,[a(s,{to:"/artices"},{default:i(()=>[m("artices")]),_:1})]),n("div",ve,[a(s,{to:"/Archives"},{default:i(()=>[m("Archives")]),_:1})]),n("div",be,[a(s,{to:"/about"},{default:i(()=>[m("about")]),_:1})])])],2),n("div",xe,[n("div",{class:"menu",onClick:o},[a(c,{name:"ic-baseline-menu",size:"24"})]),a(s,{to:"/",class:"logo_container"},{default:i(()=>[a(v),ye]),_:1})]),n("div",Ie,[n("ul",null,[n("li",null,[a(s,{to:"/artices"},{default:i(()=>[m("artices")]),_:1})]),n("li",null,[a(s,{to:"/Archives"},{default:i(()=>[m("Archives")]),_:1})]),n("li",null,[a(s,{to:"/about"},{default:i(()=>[m("about")]),_:1})])])]),n("div",ge,[a(I)])])}}},$e=f(Oe,[["__scopeId","data-v-96621bad"]]);function Ae(e){var t;const o=Q(e);return(t=o==null?void 0:o.$el)!=null?t:o}const V=j?window:void 0;function we(...e){let t,o,r,_;if(D(e[0])||Array.isArray(e[0])?([o,r,_]=e,t=V):[t,o,r,_]=e,!t)return G;Array.isArray(o)||(o=[o]),Array.isArray(r)||(r=[r]);const s=[],c=()=>{s.forEach(d=>d()),s.length=0},v=(d,b,x,y)=>(d.addEventListener(b,x,y),()=>d.removeEventListener(b,x,y)),I=Y(()=>[Ae(t),Q(_)],([d,b])=>{c(),d&&s.push(...o.flatMap(x=>r.map(y=>v(d,x,y,b))))},{immediate:!0,flush:"post"}),A=()=>{I(),c()};return R(A),A}const C=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},S="__vueuse_ssr_handlers__";C[S]=C[S]||{};var E;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(E||(E={}));var ke=Object.defineProperty,P=Object.getOwnPropertySymbols,Ne=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable,T=(e,t,o)=>t in e?ke(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,Se=(e,t)=>{for(var o in t||(t={}))Ne.call(t,o)&&T(e,o,t[o]);if(P)for(var o of P(t))Ce.call(t,o)&&T(e,o,t[o]);return e};const Ee={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Se({linear:K},Ee);function Pe({window:e=V}={}){if(!e)return{x:p(0),y:p(0)};const t=p(e.scrollX),o=p(e.scrollY);return we(e,"scroll",()=>{t.value=e.scrollX,o.value=e.scrollY},{capture:!1,passive:!0}),{x:t,y:o}}const Te={__name:"backtop",props:{visibilityHeight:{type:Number,default:200},right:{type:Number,default:40},bottom:{type:Number,default:40},size:{type:Number,default:16}},setup(e){const t=e,o=k(()=>{const{y:s}=Pe();return s.value>=t.visibilityHeight}),r=()=>{document.documentElement.scrollTo({top:0,behavior:"smooth"})},_=k(()=>({position:"fixed",bottom:`${t.bottom}px`,right:`${t.right}px`}));return(s,c)=>{const v=g;return l(),u("div",null,[h(o)?(l(),u("div",{key:0,style:N(h(_)),onClick:r,class:"backtop"},[n("span",{style:N({"font-size":`${e.size}px`})},[a(v,{name:"ic:baseline-rocket"})],4)],4)):H("",!0)])}}},ze=f(Te,[["__scopeId","data-v-64ad04b0"]]),He={};function Le(e,t){const o=ze;return l(),u("div",null,[L(e.$slots,"default",{},void 0,!0),a(o,{size:32})])}const Qe=f(He,[["render",Le],["__scopeId","data-v-3dca1fb2"]]),Be={},Ve={class:"app_container"};function Fe(e,t){const o=$e,r=Qe,_=ne;return l(),u("div",Ve,[a(o),a(r,null,{default:i(()=>[L(e.$slots,"default")]),_:3}),a(_)])}const Ge=f(Be,[["render",Fe]]);export{Ge as default};
