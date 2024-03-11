import{by as N,d as P,bv as z,r as g,au as A,o as n,b as r,f as a,a as o,u as t,w as y,S as u,aC as G,aA as Q,b3 as $,bm as K,m as w,aF as m,N as p,K as f,bx as O}from"./index.6395c7ec.js";import{_ as R}from"./gracias.13109ad3.js";import{d as q,r as Y,e as j,c as H,l as J,a as W,F as _,E as v}from"./vee-validate-i18n.esm.f5e07155.js";import{i as X}from"./temas.8a9c7ffa.js";import{i as Z,k as ee}from"./multiselect.4188268a.js";import{s as ae}from"./propuestas.546bcd69.js";import le from"./Modal.8abd9eab.js";const i=h=>(G("data-v-7700da72"),h=h(),Q(),h),oe={class:"col-md-8 offset-md-2 p-5"},se=i(()=>a("h4",null," Crearemos espacios dignos para cuidar de la salud de los hidalguenses. ",-1)),te=i(()=>a("hr",null,null,-1)),ne={class:"mb-3"},re=i(()=>a("label",{for:"propuesta",class:"form-label"},"*Cu\xE9ntanos \xBFQu\xE9 Centro de Salud necesita atenci\xF3n? Y describe brevemente el problema",-1)),ie={class:"invalid-feedback"},de={class:"mb-3"},ue=i(()=>a("label",{for:"direccion",class:"form-label"},"Direcci\xF3n del Centro de Salud",-1)),ce={class:"invalid-feedback"},me={class:"mb-3"},pe=i(()=>a("label",{for:"municipio",class:"form-label"},"*Municipio",-1)),_e={class:"invalid-feedback"},ve={class:"mb-3"},fe=i(()=>a("label",{for:"documentos",class:"form-label"},"Compartenos una imagen o video de la problem\xE1tica del centro de salud",-1)),be={class:"invalid-feedback"},ge=i(()=>a("hr",{class:"mt-4 mb-4"},null,-1)),he={class:"mb-3"},ye=i(()=>a("label",{for:"nombres",class:"form-label"},"*Nombre(s)",-1)),Ve={class:"invalid-feedback"},xe={class:"mb-3"},ke=i(()=>a("label",{for:"primer_apellido",class:"form-label"},"*Primer apellido",-1)),Ce={class:"invalid-feedback"},Se={class:"mb-3"},Me=i(()=>a("label",{for:"segundo_apellido",class:"form-label"},"Segundo apellido",-1)),we={class:"invalid-feedback"},qe={class:"mb-3"},Ee=i(()=>a("label",{for:"fecha_nacimiento",class:"form-label"},"*Queremos conocer tu edad",-1)),Fe={class:"invalid-feedback"},Ue={class:"mb-3"},De=i(()=>a("label",{for:"telefono",class:"form-label"},"*Tel\xE9fono",-1)),Be={class:"invalid-feedback"},Le={class:"mb-3"},Te=i(()=>a("label",{for:"correo",class:"form-label"},"Correo",-1)),Ie={class:"invalid-feedback"},Ne=i(()=>a("div",{class:"mb-3 mt-3 d-grid gap-2 col-12 mx-auto"},[a("input",{type:"submit",class:"btn btn-primary btn-lg",value:"Guardar"})],-1)),Pe=i(()=>a("img",{src:R,class:"img-fluid"},null,-1)),ze=P({setup(h){q("required",Y),q("email",j),H({generateMessage:J("es",{messages:{required:"El campo es requerido",email:"El campo debe ser un correo valido"}})});const V=z(),E=O(),s=g({}),x=g([]),S=g([]),F=g([]),c=g(""),d=g({}),k=g(null);A(async()=>{await U(),await D(),s.value.nombre="Caminos dignos",s.value.tema_id=12});const U=async()=>{V.setLoading(),S.value=(await Z({})).data},D=async()=>{V.setLoading(),F.value=(await X({})).data},B=()=>{d.value.length!=0&&(c.value="is-invalid")},L=b=>{var l=b.target.files||b.dataTransfer.files;!l.length||(x.value=l)},T=async()=>{V.setLoading();var b=new FormData;for(var l in s.value)b.append(l,s.value[l]);for(let e=0;e<x.value.length;e++)b.append("documentos[]",x.value[e]);await ae(b).then(()=>{E.success("Se ha creado la propuesta exitosamente."),k.value.showModal()}).catch(e=>{e.response.status==422&&(d.value=e.response.data.errors,B())})},I=()=>{T()},M=()=>{k.value.hideModal()};return(b,l)=>(n(),r(u,null,[a("div",oe,[se,te,o(t(W),{method:"POST",onSubmit:l[10]||(l[10]=e=>I())},{default:y(()=>[a("div",ne,[re,o(t(_),{id:"propuesta",name:"propuesta",type:"text",rules:"required"},{default:y(({field:e})=>[$(a("textarea",w(e,{"onUpdate:modelValue":l[0]||(l[0]=C=>s.value.propuesta=C),class:["form-control "+c.value,"form-control"],rows:"5"}),null,16),[[K,s.value.propuesta]])]),_:1}),o(t(v),{class:"alert-error",name:"propuesta"}),a("div",ie,[(n(!0),r(u,null,m(d.value.propuesta,e=>(n(),r("span",{key:e},p(e),1))),128))])]),a("div",de,[ue,o(t(_),{id:"direccion",name:"direccion",modelValue:s.value.direccion,"onUpdate:modelValue":l[1]||(l[1]=e=>s.value.direccion=e),type:"text",class:f("form-control "+c.value)},null,8,["modelValue","class"]),o(t(v),{class:"alert-error",name:"direccion"}),a("div",ce,[(n(!0),r(u,null,m(d.value.direccion,e=>(n(),r("span",{key:e},p(e),1))),128))])]),a("div",me,[pe,o(t(_),{name:"municipio",type:"select",value:!0,rules:"required"},{default:y(({field:e})=>[o(t(ee),w(e,{modelValue:s.value.municipio_id,"onUpdate:modelValue":l[2]||(l[2]=C=>s.value.municipio_id=C),options:S.value,searchable:!0,valueProp:"id",label:"nombre",trackBy:"nombre"}),null,16,["modelValue","options"])]),_:1}),o(t(v),{name:"municipio"}),a("div",_e,[(n(!0),r(u,null,m(d.value.municipio,e=>(n(),r("span",{key:e},p(e),1))),128))])]),a("div",ve,[fe,o(t(_),{id:"documentos",name:"documentos",onChange:l[3]||(l[3]=e=>L(e)),type:"file",multiple:"",class:f("form-control "+c.value)},null,8,["class"]),o(t(v),{class:"alert-error",name:"documentos"}),a("div",be,[(n(!0),r(u,null,m(d.value.documentos,e=>(n(),r("span",{key:e},p(e),1))),128))])]),ge,a("div",he,[ye,o(t(_),{id:"nombres",name:"nombres",modelValue:s.value.nombres,"onUpdate:modelValue":l[4]||(l[4]=e=>s.value.nombres=e),type:"text",class:f("form-control "+c.value),rules:"required"},null,8,["modelValue","class"]),o(t(v),{class:"alert-error",name:"nombres"}),a("div",Ve,[(n(!0),r(u,null,m(d.value.nombres,e=>(n(),r("span",{key:e},p(e),1))),128))])]),a("div",xe,[ke,o(t(_),{id:"primer_apellido",name:"primer_apellido",modelValue:s.value.primer_apellido,"onUpdate:modelValue":l[5]||(l[5]=e=>s.value.primer_apellido=e),type:"text",class:f("form-control "+c.value),rules:"required"},null,8,["modelValue","class"]),o(t(v),{class:"alert-error",name:"primer_apellido"}),a("div",Ce,[(n(!0),r(u,null,m(d.value.primer_apellido,e=>(n(),r("span",{key:e},p(e),1))),128))])]),a("div",Se,[Me,o(t(_),{id:"segundo_apellido",name:"segundo_apellido",modelValue:s.value.segundo_apellido,"onUpdate:modelValue":l[6]||(l[6]=e=>s.value.segundo_apellido=e),type:"text",class:f("form-control "+c.value)},null,8,["modelValue","class"]),o(t(v),{class:"alert-error",name:"segundo_apellido"}),a("div",we,[(n(!0),r(u,null,m(d.value.segundo_apellido,e=>(n(),r("span",{key:e},p(e),1))),128))])]),a("div",qe,[Ee,o(t(_),{id:"fecha_nacimiento",name:"fecha_nacimiento",modelValue:s.value.fecha_nacimiento,"onUpdate:modelValue":l[7]||(l[7]=e=>s.value.fecha_nacimiento=e),type:"date",class:f("form-control "+c.value),rules:"required"},null,8,["modelValue","class"]),o(t(v),{class:"alert-error",name:"fecha_nacimiento"}),a("div",Fe,[(n(!0),r(u,null,m(d.value.fecha_nacimiento,e=>(n(),r("span",{key:e},p(e),1))),128))])]),a("div",Ue,[De,o(t(_),{id:"telefono",name:"telefono",modelValue:s.value.telefono,"onUpdate:modelValue":l[8]||(l[8]=e=>s.value.telefono=e),type:"text",class:f("form-control "+c.value),rules:"required"},null,8,["modelValue","class"]),o(t(v),{class:"alert-error",name:"telefono"}),a("div",Be,[(n(!0),r(u,null,m(d.value.telefono,e=>(n(),r("span",{key:e},p(e),1))),128))])]),a("div",Le,[Te,o(t(_),{id:"correo",name:"correo",modelValue:s.value.correo,"onUpdate:modelValue":l[9]||(l[9]=e=>s.value.correo=e),type:"email",class:f("form-control "+c.value),rules:"email"},null,8,["modelValue","class"]),o(t(v),{class:"alert-error",name:"correo"}),a("div",Ie,[(n(!0),r(u,null,m(d.value.correo,e=>(n(),r("span",{key:e},p(e),1))),128))])]),Ne]),_:1})]),o(le,{onCloseModal:M,idModal:"usersModal",nameModal:"Gracias",ref_key:"modal",ref:k},{default:y(()=>[Pe,a("div",{class:"d-grid gap-2"},[a("button",{onClick:M,class:"btn btn-secondary"},"Cerrar")])]),_:1},512)],64))}});var Ye=N(ze,[["__scopeId","data-v-7700da72"]]);export{Ye as default};
