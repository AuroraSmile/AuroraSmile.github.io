import{a as i,o as a,b as c,a3 as e,X as n,aa as m,ab as u,U as v,C as x,a4 as y,a5 as $,u as l,a1 as r,w as b,a8 as S}from"./entry.7f6385e2.js";/* empty css                         */import{_ as g}from"./nuxt-link.a7342398.js";import{u as I}from"./asyncData.a86436bb.js";import{f as w}from"./date.fb0442d1.js";import"./index.1d8b2688.js";const D=""+new URL("avatar.d93f3db9.jpg",import.meta.url).href,A=t=>(m("data-v-e00c6cc4"),t=t(),u(),t),N={class:"profile_container"},k=A(()=>e("div",{class:"author"},[e("img",{class:"author_avatar",src:D})],-1)),C={class:"title"},R={class:"description"},Y={__name:"HeroProfile",props:{title:{type:String,defalut:""},description:{type:String,defalut:""}},setup(t){return(s,o)=>(a(),c("div",N,[k,e("div",C,n(t.title),1),e("div",R,n(t.description),1)]))}},B=i(Y,[["__scopeId","data-v-e00c6cc4"]]),H=t=>(m("data-v-f5abd623"),t=t(),u(),t),L={class:"recent_container"},M=H(()=>e("div",{class:"recent_tit"},"Recent artices",-1)),P={class:"artice_container"},U={class:"artice_item"},V={class:"artice_tit"},E={class:"artice_date"},j={class:"more"},q={__name:"RecentArtice",props:{count:{type:Number,default:5}},async setup(t){let s,o;const _=t,{data:f}=([s,o]=v(()=>I(()=>x("/posts").sort({date:-1}).limit(_.count).find(),"$mEdPkAI3HW")),s=await s,o(),s);return(d,z)=>{const h=g;return a(),c("div",L,[M,e("div",P,[(a(!0),c(y,null,$(l(f),p=>(a(),c("div",U,[e("div",V,n(p.title),1),e("div",E,n(("formatDate"in d?d.formatDate:l(w))(p.date,"DD MMM YYYY",{locales:"en-US"})),1)]))),256))]),e("div",j,[r(h,{to:"/artices"},{default:b(()=>[S("See all artices")]),_:1})])])}}},F=i(q,[["__scopeId","data-v-f5abd623"]]);const T={},W={class:"home_container"};function X(t,s){const o=B,_=F;return a(),c("div",W,[r(o,{title:"Aurora blog",description:"知行合一 活在当下"}),r(_)])}const tt=i(T,[["render",X],["__scopeId","data-v-b0d8c4fc"]]);export{tt as default};
