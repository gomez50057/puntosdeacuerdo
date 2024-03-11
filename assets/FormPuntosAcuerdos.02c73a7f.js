import{d as R,r as Q,m as J,c as X,l as Y,a as Z,F as B,E as I}from"./vee-validate-i18n.esm.f5e07155.js";import ee from"./Modal.8abd9eab.js";import{a as oe,d as te,b as ae,u as le}from"./puntos_acuerdos.73911dee.js";import{i as se,k as ne}from"./multiselect.4188268a.js";import{i as ie}from"./regiones.c4ef40af.js";import{d as G,r as u,ai as re,aH as s,o as n,e as E,w as r,a as o,a0 as D,u as p,by as ce,bv as ue,bC as de,au as me,f as e,K as U,b as m,aF as P,N as x,S as F,m as pe,aC as _e,aA as ve,a6 as be,bx as fe}from"./index.6395c7ec.js";const ye=G({props:{center:{type:Array,required:!1,default:[-98.95259,20.39172]},zoom:{type:Number,required:!1,default:9},rotation:{type:Number,required:!1,default:0},projection:{type:String,required:!1,default:"EPSG:4326"},coordinates:{type:Array},drawType:{type:String,required:!1,default:"Point"}},emits:["update:coordinates","updateMapDraw"],setup(l,{emit:f}){const i=u(!0),g=re("ol-selectconditions").doubleClick,M=t=>{let h=t.feature.getGeometry().getCoordinates();f("update:coordinates",h),i.value=!1},k=()=>{f("updateMapDraw")};return(t,h)=>{const c=s("ol-zoomslider-control"),C=s("ol-zoom-control"),q=s("ol-view"),L=s("ol-source-osm"),T=s("ol-tile-layer"),A=s("ol-interaction-draw"),V=s("ol-source-vector"),z=s("ol-style-stroke"),w=s("ol-style-fill"),S=s("ol-style-circle"),_=s("ol-style"),j=s("ol-vector-layer"),N=s("ol-interaction-select"),$=s("ol-map");return n(),E($,{loadTilesWhileAnimating:!0,loadTilesWhileInteracting:!0,style:{height:"400px"}},{default:r(()=>[o(c),o(C,{zoomInTipLabel:"Aumentar zoom",zoomOutTipLabel:"Disminuir zoom"}),o(q,{ref:"view",center:l.center,rotation:l.rotation,zoom:l.zoom,projection:l.projection},null,8,["center","rotation","zoom","projection"]),o(T,null,{default:r(()=>[o(L)]),_:1}),o(j,null,{default:r(()=>[o(V,{projection:l.projection},{default:r(()=>[i.value?(n(),E(A,{key:0,type:l.drawType,onDrawend:M},null,8,["type"])):D("",!0)]),_:1},8,["projection"]),o(_,null,{default:r(()=>[o(z,{color:"red",width:2}),o(w,{color:"rgba(255,255,255,0.1)"}),o(S,{radius:7},{default:r(()=>[o(w,{color:"blue"})]),_:1})]),_:1})]),_:1}),o(N,{onSelect:k,condition:p(g)},{default:r(()=>[o(_,null,{default:r(()=>[o(z,{color:"red",width:2}),o(w,{color:"rgba(255,255,255,0.1)"}),o(S,{radius:7},{default:r(()=>[o(w,{color:"red"})]),_:1})]),_:1})]),_:1},8,["condition"])]),_:1})}}});const b=l=>(_e("data-v-4f690cb6"),l=l(),ve(),l),ge={class:"mb-3"},he=b(()=>e("label",{for:"titulo",class:"form-label"},"*Titulo",-1)),we={class:"invalid-feedback"},Me={class:"mb-3"},ke=b(()=>e("label",{for:"descripcion",class:"form-label"},"*Descripci\xF3n",-1)),Se={class:"invalid-feedback"},xe={class:"mb-3"},Ee=b(()=>e("label",{for:"ubicacion",class:"form-label"},"Ubicaci\xF3n",-1)),Ce=b(()=>e("br",null,null,-1)),qe=b(()=>e("ul",null,[e("li",null,[e("small",null,[e("b",null,"Puntos:"),be(" Clic en el mapa.")])])],-1)),Te={class:"card-body"},Ve=b(()=>e("small",null,"Para eliminar la selecci\xF3n de doble click al elemento.",-1)),ze={class:"mb-3"},Pe=b(()=>e("label",{for:"municipio",class:"form-label"},"*Municipio",-1)),Fe={class:"invalid-feedback"},De=b(()=>e("p",{class:"m-0"},[e("small",{class:"m-0"},"Los campos con (*) son requeridos")],-1)),Le={class:"mb-3 mt-3 d-grid gap-2 col-12 mx-auto"},Ae=["value"],je={key:1},Ne=G({props:["showModal","nameModal","typeSubmit","idElement"],emits:["update:showModal","navToPage"],setup(l,{emit:f}){const i=l;R("required",Q),R("min",J),X({generateMessage:Y("es",{messages:{required:"El campo es requerido",min:"El campo debe tener al menos 0:{length} caracteres",email:"El campo debe ser un correo valido"}})});const y=ue(),g=fe(),M=de(),k=u(null),t=u({nombre:"",visible:0}),h=u(""),c=u({}),C=u(0),q=u(!1),L=u("Point"),T=u([]),A=u([]),V=u(!1);me(async()=>{(i.typeSubmit=="update"||i.typeSubmit=="delete")&&await j(),await z(),await w(),k.value.showModal(),V.value=!0,setTimeout(()=>{q.value=!0},500)});const z=async()=>{y.setLoading(),T.value=(await se({})).data},w=async()=>{y.setLoading(),A.value=(await ie({})).data},S=()=>{c.value.length!=0&&(h.value="is-invalid")},_=()=>{k.value.hideModal(),f("update:showModal",!1)},j=async()=>{y.setLoading();let v=await oe(i.idElement);t.value=v.data},N=async()=>{y.setLoading(),await ae(t.value).then(()=>{f("navToPage",M.query),_(),g.success(`Se ha creado el punto ${t.value.titulo} exitosamente.`)}).catch(v=>{v.response.status==422&&(c.value=v.response.data.errors,S())})},$=()=>{y.setLoading(),le(t.value,i.idElement).then(()=>{f("navToPage",M.query),_(),g.success(`El punto ${t.value.titulo} se ha actualizado.`)}).catch(v=>{v.response.status==422&&(c.value=v.response.data.errors,S())})},K=async()=>{te(i.idElement).then(()=>{f("navToPage",M.query),_(),g.success(`El punto ${t.value.titulo} se ha eliminado.`)}).catch(()=>{g.error(`Error al eliminar el punto ${t.value.titulo}`)})},O=()=>{i.typeSubmit=="store"?N():i.typeSubmit=="update"&&$()},W=()=>{C.value+=1,t.value.ubicacion=null};return(v,d)=>(n(),E(ee,{onCloseModal:_,idModal:"puntosAcuerdosModal",nameModal:l.nameModal,ref_key:"modal",ref:k},{default:r(()=>[V.value&&(i.typeSubmit==="update"||i.typeSubmit==="store")?(n(),E(p(Z),{key:0,method:"POST",onSubmit:d[4]||(d[4]=a=>O())},{default:r(()=>[e("div",ge,[he,o(p(B),{id:"titulo",name:"titulo",modelValue:t.value.titulo,"onUpdate:modelValue":d[0]||(d[0]=a=>t.value.titulo=a),type:"text",class:U("form-control "+h.value),rules:"required"},null,8,["modelValue","class"]),o(p(I),{class:"alert-error",name:"titulo"}),e("div",we,[(n(!0),m(F,null,P(c.value.titulo,a=>(n(),m("span",{key:a},x(a),1))),128))])]),e("div",Me,[ke,o(p(B),{id:"descripcion",name:"descripcion",modelValue:t.value.descripcion,"onUpdate:modelValue":d[1]||(d[1]=a=>t.value.descripcion=a),type:"text",class:U("form-control "+h.value),rules:"required"},null,8,["modelValue","class"]),o(p(I),{class:"alert-error",name:"descripcion"}),e("div",Se,[(n(!0),m(F,null,P(c.value.descripcion,a=>(n(),m("span",{key:a},x(a),1))),128))])]),e("div",xe,[Ee,Ce,qe,e("div",{class:U(typeof c.value.ubicacion!==void 0&&c.value.ubicacion?"card border-primary shadow-sm bg-light mt-1":"card border-0 shadow-sm bg-light mt-1")},[e("div",Te,[q.value?(n(),E(ye,{key:C.value,coordinates:t.value.ubicacion,"onUpdate:coordinates":d[2]||(d[2]=a=>t.value.ubicacion=a),onUpdateMapDraw:W,drawType:L.value},null,8,["coordinates","drawType"])):D("",!0)])],2),e("div",null,[(n(!0),m(F,null,P(c.value.ubicacion,a=>(n(),m("span",{key:a,class:"text-danger"},x(a),1))),128))]),Ve]),e("div",ze,[Pe,o(p(B),{name:"municipio",type:"select",value:!0,rules:"required"},{default:r(({field:a})=>[o(p(ne),pe(a,{modelValue:t.value.municipio_id,"onUpdate:modelValue":d[3]||(d[3]=H=>t.value.municipio_id=H),options:T.value,searchable:!0,valueProp:"id",label:"nombre",trackBy:"nombre"}),null,16,["modelValue","options"])]),_:1}),o(p(I),{name:"municipio"}),e("div",Fe,[(n(!0),m(F,null,P(c.value.municipio,a=>(n(),m("span",{key:a},x(a),1))),128))])]),De,e("div",Le,[e("input",{type:"submit",class:"btn btn-primary btn-lg",value:l.nameModal},null,8,Ae)])]),_:1})):D("",!0),i.typeSubmit==="delete"?(n(),m("div",je,[e("h5",null,"\xBFQuiere eliminar el punto: "+x(t.value.titulo)+"?",1),e("div",{class:"mb-3 mt-3 d-grid gap-2 col-12 mx-auto"},[e("button",{class:"btn btn-info",onClick:_},"Cancelar"),e("button",{class:"btn btn-danger",onClick:K},"Eliminar")])])):D("",!0)]),_:1},8,["nameModal"]))}});var Ke=ce(Ne,[["__scopeId","data-v-4f690cb6"]]);export{Ke as default};
