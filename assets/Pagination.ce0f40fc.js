import{d as i,bC as p,bz as m,o as s,b as t,f as o,S as h,aF as d,K as g,N as _}from"./index.6395c7ec.js";const f={class:"d-flex justify-content-center mt-4"},b={class:"pagination"},y=["onClick"],P=i({props:["links"],setup(n){const c=p(),l=m(),u=r=>{const a=new URL(r),e={};a.searchParams.has("page")&&(e.page=a.searchParams.get("page")),a.searchParams.has("query")&&(e.query=a.searchParams.get("query")),l.push({path:c.path,query:e})};return(r,a)=>(s(),t("div",f,[o("ul",b,[(s(!0),t(h,null,d(n.links,e=>(s(),t("li",{class:g(["page-item",{active:e.active,disabled:e.url==null}]),key:e.label},[o("a",{class:"page-link",onClick:v=>u(e.url),role:"button"},_(e.label),9,y)],2))),128))])]))}});export{P as _};
