import{_ as g}from"./nuxt-link.58755319.js";import{f as h}from"./date.e62e4fef.js";/* empty css                       */import{a as m,o as l,b as i,a7 as a,a3 as x,a4 as C,a1 as k,w as y,X as u,u as p,i as S,H as b,z as N,a6 as $,af as D,ag as I}from"./entry.60b97f8c.js";const P={class:"artices_container"},B={class:"artices_tit"},Y={class:"artices_date"},w={__name:"ArticesList",props:{data:{type:Array,default:[]}},setup(n){const c=t=>{let o="/"+t._file.replace(/\d+./g,"").replace(/.md/g,"");return o===t._path?t._path:o};return(t,o)=>{const e=g;return l(),i("div",null,[a("div",P,[(l(!0),i(x,null,C(n.data,({title:_,_path:d,_id:s,_file:r,_dir:v,date:f})=>(l(),i("div",{class:"artices_item",key:s},[k(e,{to:c({_path:d,_file:r})},{default:y(()=>[a("p",B,u(_),1),a("div",Y,u(("formatDate"in t?t.formatDate:p(h))(f,"YYYY-MM-DD")),1)]),_:2},1032,["to"])]))),128))])])}}},j=m(w,[["__scopeId","data-v-fbeabc16"]]),z=n=>(D("data-v-099255cf"),n=n(),I(),n),L={key:0,class:"pagination_container"},M={style:{display:"flex"}},A={class:"page-box"},O=z(()=>a("span",{style:{margin:"0px 1px"}},"/",-1)),V={__name:"pagination",props:{pageSize:{type:Number,default:1},total:{type:Number,default:0},hideOnSinglePage:{type:Boolean,default:!1},currentPage:{type:Number,default:1}},emits:["prevClick","nextClick","currentChange"],setup(n,{emit:c}){const t=n,o=S(()=>Math.ceil(t.total/t.pageSize)),e=b(t.currentPage);N(e,s=>{console.log("curpageChange",s),c("currentChange",s)});const _=s=>{e.value!=1&&(e.value=e.value+s,console.log("prevClick",e.value),c("prevClick",e.value))},d=s=>{e.value!==o.value&&(e.value=e.value+s,console.log("nextClick",e.value),c("nextClick",e.value))};return(s,r)=>p(o)!==1||!n.hideOnSinglePage?(l(),i("div",L,[a("div",M,[a("div",{class:"prev",onClick:r[0]||(r[0]=v=>_(-1))},"prev"),a("div",A,[a("span",null,u(p(e)),1),O,a("span",null,u(p(o)),1)]),a("div",{class:"next",onClick:r[1]||(r[1]=v=>d(1))},"next")])])):$("",!0)}},q=m(V,[["__scopeId","data-v-099255cf"]]);export{j as _,q as a};
