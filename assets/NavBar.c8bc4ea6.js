import{d as g,bt as k,bu as m,bv as C,r as _,au as x,aH as w,o as M,b as y,f as s,bp as S,K as L,M as N,a as e,w as i,b3 as V,bi as z,a6 as a,bw as u,bx as A}from"./index.6395c7ec.js";const B={class:"navbar navbar-light bg-light fixed-top"},F={class:"container-fluid"},D=s("a",{class:"navbar-brand",href:"#"},"Hidalgo Digital",-1),H=["onClick"],P=s("span",{class:"navbar-toggler-icon"},null,-1),T=[P],U=s("h5",{class:"offcanvas-title",id:"offcanvasNavbarLabel"},"Men\xFA",-1),j={class:"offcanvas-body"},E={class:"navbar-nav justify-content-end flex-grow-1 pe-3"},I={class:"nav-item"},K=s("i",{class:"bi bi-home"},null,-1),$=a(" Inicio "),q={class:"nav-item"},G=s("i",{class:"bi bi-archive"},null,-1),J=a(" Propuestas "),O={class:"nav-item"},Q=s("i",{class:"bi bi-collection"},null,-1),R=a(" Temas "),W={class:"nav-item"},X=s("i",{class:"bi bi-geo-alt"},null,-1),Y=a(" Puntos de acuerdo "),Z={class:"nav-item"},ss=s("i",{class:"bi bi-people-fill"},null,-1),os=a(" Usuarios "),as={class:"form-check form-switch"},ts=s("label",{class:"form-check-label",for:"darkMode"},"Modo oscuro",-1),es=s("li",null,[s("hr",{class:"dropdown-divider"})],-1),is={class:"nav-item"},ns=s("i",{class:"bi-box-arrow-right"},null,-1),ls=a(" Cerrar sesi\xF3n "),cs=[ns,ls],us=g({setup(ds){const d=k(),h=m(),v=A(),b=C(),n=_(!1),l=_(!1);x(()=>{l.value=d.darkMode});const o=()=>{n.value=!n.value},f=()=>{d.mode(l.value)},p=async()=>{b.setLoading(),h.logout().then(()=>{v.success("Sesi\xF3n finalizada"),u.push({path:"/login"})}).catch(()=>{u.push({path:"/login"})})};return(rs,c)=>{const t=w("router-link");return M(),y("nav",B,[s("div",F,[D,s("button",{class:"navbar-toggler",type:"button",onClick:S(o,["prevent"])},T,8,H),s("div",{tabindex:"-1",id:"menu","aria-labelledby":"menuLabel",class:L(n.value?"offcanvas offcanvas-end bg-light show ":"offcanvas offcanvas-end bg-light"),style:N({visibility:n.value?"visible":"hidden"})},[s("div",{class:"offcanvas-header"},[U,s("button",{type:"button",class:"btn-close text-reset",onClick:o})]),s("div",j,[s("ul",E,[s("li",I,[e(t,{class:"nav-link","active-class":"active",to:"/inicio",onClick:o},{default:i(()=>[K,$]),_:1})]),s("li",q,[e(t,{class:"nav-link","active-class":"active",to:"/propuestas?page=1",onClick:o},{default:i(()=>[G,J]),_:1})]),s("li",O,[e(t,{class:"nav-link","active-class":"active",to:"/temas?page=1",onClick:o},{default:i(()=>[Q,R]),_:1})]),s("li",W,[e(t,{class:"nav-link","active-class":"active",to:"/puntos-acuerdos?page=1",onClick:o},{default:i(()=>[X,Y]),_:1})]),s("li",Z,[e(t,{class:"nav-link","active-class":"active",to:"/usuarios?page=1",onClick:o},{default:i(()=>[ss,os]),_:1})]),s("div",as,[V(s("input",{"onUpdate:modelValue":c[0]||(c[0]=r=>l.value=r),onChange:f,class:"form-check-input",type:"checkbox",role:"switch",id:"darkMode"},null,544),[[z,l.value]]),ts]),es,s("li",is,[s("a",{class:"nav-link",href:"#",onClick:c[1]||(c[1]=r=>(o(),p()))},cs)])])])],6)])])}}});export{us as default};
