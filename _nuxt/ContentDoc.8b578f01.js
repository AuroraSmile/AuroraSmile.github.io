import{e as s,f as y,x as g,y as v,h as o}from"./entry.6fa1db2d.js";import{u as p}from"./head.0c5e76ad.js";import w from"./ContentRenderer.b515b73b.js";import C from"./ContentQuery.5cdab4e9.js";import"./ContentRendererMarkdown.8a76d3da.js";import"./index.a6ef77ff.js";import"./asyncData.1eea546d.js";const N=s({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:!0}},render(f){const e=y(),{tag:d,excerpt:i,path:m,query:r,head:u}=f,c={...r||{},path:m||(r==null?void 0:r.path)||g(v().path),find:"one"},l=(t,n)=>o("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:t,data:n},null,2));return o(C,c,{default:e!=null&&e.default?({data:t,refresh:n,isPartial:h})=>{var a;return u&&p(t),(a=e.default)==null?void 0:a.call(e,{doc:t,refresh:n,isPartial:h,excerpt:i,...this.$attrs})}:({data:t})=>(u&&p(t),o(w,{value:t,excerpt:i,tag:d,...this.$attrs},{empty:n=>e!=null&&e.empty?e.empty(n):l("default",t)})),empty:t=>{var n;return((n=e==null?void 0:e.empty)==null?void 0:n.call(e,t))||o("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":t=>{var n;return((n=e==null?void 0:e["not-found"])==null?void 0:n.call(e,t))||o("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}});export{N as default};
