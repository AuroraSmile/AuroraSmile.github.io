import{e as d,a0 as f,i as o,o as _,b as x,Y as z,u as r,a as S}from"./entry.fba9e2a7.js";import{u as I}from"./config.c5650563.js";/* empty css                    */const y=d({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(p){var c;const t=p;f(s=>({"71ded496":r(m)}));const e=I();(c=e==null?void 0:e.nuxtIcon)!=null&&c.aliases;const l=o(()=>{var s;return(((s=e==null?void 0:e.nuxtIcon)==null?void 0:s.aliases)||{})[t.name]||t.name}),m=o(()=>`url('https://api.iconify.design/${l.value.replace(":","/")}.svg')`),a=o(()=>{var n,i,u;if(!t.size&&typeof((n=e.nuxtIcon)==null?void 0:n.size)=="boolean"&&!((i=e.nuxtIcon)!=null&&i.size))return;const s=t.size||((u=e.nuxtIcon)==null?void 0:u.size)||"1em";return String(Number(s))===s?`${s}px`:s});return(s,n)=>(_(),x("span",{style:z({width:r(a),height:r(a)})},null,4))}}),v=S(y,[["__scopeId","data-v-11604bcf"]]);export{v as default};