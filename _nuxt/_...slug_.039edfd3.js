import b from"./Icon.45233a6b.js";import{_ as w}from"./nuxt-link.bcd6e589.js";import N from"./ContentRenderer.b515b73b.js";import{u as B}from"./asyncData.1eea546d.js";import{a as M,y as V,U as Y,i as $,k as T,b as n,a3 as e,X as a,u as t,a4 as A,a5 as I,c as L,a9 as m,a1 as r,w as d,o as s,a8 as g,C as R}from"./entry.6fa1db2d.js";import{f as S}from"./date.670aeda0.js";import"./config.b61376cb.js";import"./Icon.vue.a21b3803.js";import"./ContentRendererMarkdown.8a76d3da.js";import"./index.a6ef77ff.js";import"./index.c2acd0b1.js";const U={class:"artice_container"},q={class:"font-bold text-4xl text-slate-800"},E={class:"artices_info text-gray-500"},F={class:"artices_date"},O={class:"readingTime"},X={class:"tag_container text-gray-500"},j={style:{"margin-right":"2px"}},z={class:"footer mt-8"},G={key:0,class:"prev text-primary font-bold"},H={key:1,class:"next text-primary font-bold"},J={__name:"[...slug]",async setup(K){let _,u;const{path:p}=V(),{data:o}=([_,u]=Y(()=>B(`content-${p}`,()=>R().where({_path:p}).findOne())),_=await _,u(),_);console.log("文章数据",o.value);const x=$(()=>o.value.tags||[]),{prev:c,next:i,toc:v,surround:y}=T();return console.log(v,y),(f,P)=>{const k=b,l=w,C=N;return s(),n("div",U,[e("h1",q,a(t(o).title),1),e("div",E,[e("div",F,a(("formatDate"in f?f.formatDate:t(S))(t(o).date,"MMM DD, YYYY",{locales:"en-US"})),1),e("div",O,a(Math.ceil(t(o).readingTime.minutes))+"min ",1)]),e("div",X,[(s(!0),n(A,null,I(t(x),(h,D)=>(s(),n("span",{class:"tag_item",key:D},[r(l,{to:{path:`/tags/${h}`}},{default:d(()=>[e("span",j,[r(k,{name:"ic:baseline-local-offer"})]),e("span",null,a(h),1)]),_:2},1032,["to"])]))),128))]),e("main",null,[t(o)?(s(),L(C,{key:0,value:t(o)},null,8,["value"])):m("",!0)]),e("div",z,[t(c)?(s(),n("div",G,[r(l,{to:t(c)._path},{default:d(()=>[g(a(t(c).title),1)]),_:1},8,["to"])])):m("",!0),t(i)?(s(),n("div",H,[r(l,{to:t(i)._path},{default:d(()=>[g(a(t(i).title),1)]),_:1},8,["to"])])):m("",!0)])])}}},ct=M(J,[["__scopeId","data-v-3c087f7c"]]);export{ct as default};