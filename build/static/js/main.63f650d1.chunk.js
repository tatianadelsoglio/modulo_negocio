(this["webpackJsonptemplate-starter"]=this["webpackJsonptemplate-starter"]||[]).push([[0],{230:function(e,t,n){},231:function(e,t,n){},332:function(e,t,n){"use strict";n.r(t);var c,a,r=n(34),i=n.n(r),o=n(29),s=n(342),l=n(18),d=n(347),u=n(348),j=n(346),b=new d.a({connectToDevTools:!0,cache:new u.a,link:new j.a({uri:"http://10.0.0.28:4002"})}),m=n(214),O=n.n(m),p=(n(230),n(182)),h=n(215),g=n(351),f=n(78),x=n(350),v=n(352),_=n(105),N=n(341),y=n(344),S=n(343),C=n(108),D=n(354),k=n(355),z=(n(231),n(0)),w=n(349),I=n(142),R=n(345),E=Object(R.a)(c||(c=Object(I.a)(["\n  query getNegociosIframe($idCliente: Int) {\n    getNegociosIframeResolver(idCliente: $idCliente)\n  }\n"]))),F=Object(R.a)(a||(a=Object(I.a)(["\n  query getConfig {\n    getConfiguracionResolver\n  }\n"]))),L=Object(z.createContext)([]),T=n(218),B=n(8),q=function(e){var t=e.title,n=e.placement,c=e.children;return Object(B.jsx)(B.Fragment,{children:Object(B.jsx)(x.a,{placement:n,title:t,content:c,trigger:"click",children:Object(B.jsxs)(f.a,{type:"link",style:{padding:0},children:[" ",Object(B.jsx)(T.a,{style:{paddingLeft:0,marginRight:7,color:"#00b33c"}})]})})})},A=n(210),$=n.n(A),U=function(e,t,n,c){switch(e){case"AR$":return G("1 USD =","1 BRL =",1/t,1/n,e,c);case"USD":return G("1 AR$ =","1 BRL =",t,t/n,e,c);case"BRL":return G("1 AR$ =","1 USD =",n,1/t*n,e,c)}},G=function(e,t,n,c,a,r){return Object(B.jsx)("div",{className:"cotizaciones",children:c?Object(B.jsxs)(B.Fragment,{children:[Object(B.jsxs)("p",{className:"cotizaciones_p",children:[Object(B.jsx)("span",{className:"cotizacion",children:e})," ","".concat(a," ")," ",n.toLocaleString("de-DE",{maximumFractionDigits:2})]}),Object(B.jsxs)("p",{className:"cotizaciones_p",children:[Object(B.jsx)("span",{className:"cotizacion",children:t})," ","".concat(a," ")," ",c.toLocaleString("de-DE",{maximumFractionDigits:2})]}),Object(B.jsxs)("p",{className:"info_data cotizaciones_p",children:["ultima actualizacion:"," ",Object(B.jsxs)("strong",{children:[$()(r).format("DD/MM/YYYY hh:mm")," hs"]})]})]}):Object(B.jsxs)("p",{className:"info_data cotizaciones_p",children:["Momentaneamente el servicio de cotizaciones se encuentra"," ",Object(B.jsx)("strong",{children:"suspendido."})]})})},J=function(){var e=window.location.search.split("=")[1],t=Object(z.useRef)(null),n=Object(z.useState)([]),c=Object(o.a)(n,2),a=c[0],r=c[1],i=Object(z.useState)([]),s=Object(o.a)(i,2),l=s[0],d=s[1],u=Object(z.useState)([]),j=Object(o.a)(u,2),b=j[0],m=j[1],O=Object(z.useState)([]),I=Object(o.a)(O,2),R=I[0],T=I[1],A=Object(z.useState)([]),$=Object(o.a)(A,2),G=$[0],J=$[1],P=Object(z.useState)([]),Y=Object(o.a)(P,2),K=Y[0],M=Y[1],W=Object(z.useState)([]),H=Object(o.a)(W,2),Q=H[0],V=H[1],X=Object(z.useState)([]),Z=Object(o.a)(X,2),ee=Z[0],te=Z[1],ne=Object(z.useState)([]),ce=Object(o.a)(ne,2),ae=ce[0],re=ce[1],ie=Object(z.useState)(""),oe=Object(o.a)(ie,2),se=oe[0],le=oe[1],de=Object(z.useState)([]),ue=Object(o.a)(de,2),je=ue[0],be=ue[1],me=Object(z.useContext)(L),Oe=me.cotizacionDolar,pe=me.cotizacionReal,he=me.ultimaActualizacion,ge=Object(w.a)(E,{variables:{idCliente:Number(e)}}),fe=ge.data,xe=(ge.loading,ge.error,Object(w.a)(F).data);Object(z.useEffect)((function(){if(fe&&xe){var e=JSON.parse(xe.getConfiguracionResolver),t=JSON.parse(fe.getNegociosIframeResolver);r(t.dataNeg),d(t.dataNeg),m(t.dataTags),re(t.dataPipelines.map((function(e){return{text:e.pip_nombre,value:e.pip_nombre}})));var n=0,c=0,a=0,i=0,o=0;t.dataNeg.map((function(t){0===t.neg_estado?c++:1===t.neg_estado?a++:i++;var r=function(e,t,n,c){var a=0;return e.mon_id!==t?2==t?a=1==e.mon_id?e.neg_valor*n:e.neg_valor*(n/c):3==t?a=1==e.mon_id?e.neg_valor*c:e.neg_valor*(c/n):1==t&&(a=2==e.mon_id?e.neg_valor*(1/n):e.neg_valor*(1/c)):a=e.neg_valor,{nuevoImporte:a}}(t,e[0].mon_id,Oe,pe),s=r.nuevoImporte;n+=s*t.eta_avance/100,T(o+=s),J(n),M(c),V(a),te(i),be(e[0].mon_iso)}))}}),[fe,xe]);var ve,_e=function(e){return e.split("T")[0].split("-").reverse().join("-")},Ne=[{title:"Embudo",dataIndex:"pip_nombre",key:"pip_nombre",filters:ae,onFilter:function(e,t){return t.pip_nombre===e}},{title:"Etapa",dataIndex:"eta_nombre",key:"eta_nombre"},Object(p.a)(Object(p.a)({title:"Negocio",dataIndex:"neg_asunto",key:"neg_asunto"},(ve="neg_asunto",{filterDropdown:function(e){var n=e.setSelectedKeys,c=e.selectedKeys,a=e.confirm,r=e.clearFilters;return Object(B.jsxs)("div",{style:{padding:8},children:[Object(B.jsx)(h.a,{ref:t,placeholder:"Buscar negocio",value:c[0],onChange:function(e){return n(e.target.value?[e.target.value]:[])},onPressEnter:function(){return Se(c,a,ve)},style:{marginBottom:8,display:"block"}}),Object(B.jsxs)(g.b,{children:[Object(B.jsx)(f.a,{type:"primary",onClick:function(){return Se(c,a,ve)},icon:Object(B.jsx)(C.a,{}),size:"small",style:{width:90},children:"Buscar"}),Object(B.jsx)(f.a,{onClick:function(){return r&&Ce(r)},size:"small",style:{width:90},children:"Reiniciar"})]})]})},filterIcon:function(e){return Object(B.jsx)(C.a,{style:{color:e?"#1890ff":void 0}})},onFilter:function(e,t){return t[ve]?t[ve].toString().toLowerCase().includes(e.toLowerCase()):""}})),{},{render:function(e,t){var n=b.filter((function(e){return e.neg_id===t.neg_id}));return Object(B.jsxs)(B.Fragment,{children:[e,Object(B.jsx)("div",{className:n.length>0?"div-contenedor":"",children:n.map((function(e,t){return Object(B.jsx)(x.a,{content:n.map((function(e){return Object(B.jsx)(v.a,{color:e.etq_color,children:e.etq_nombre},e.etq_id)})),children:Object(B.jsx)(v.a,{color:e.etq_color,className:"tags"},e.etq_id)},t)}))})]})}}),{title:"Importe",dataIndex:"neg_valor",key:"neg_valor",align:"right",sorter:function(e,t){return e.neg_valor-t.neg_valor},render:function(e,t){return Object(B.jsx)(B.Fragment,{children:"".concat(t.mon_iso," ").concat(e.toLocaleString("de-DE",{minimumFractionDigits:0}))})}},{title:"% Etapa",dataIndex:"eta_avance",key:"eta_avance",align:"right",sorter:function(e,t){return e.eta_avance-t.eta_avance}},{title:"Fecha de Creaci\xf3n",dataIndex:"neg_fechacreacion",key:"neg_fechacreacion",align:"center",sorter:function(e,t){return e.neg_fechacreacion.localeCompare(t.neg_fechacreacion)},render:function(e){return _e(e)}},{title:"Fecha de Cierre",dataIndex:"neg_fechacierre",key:"neg_fechacierre",align:"center",sorter:function(e,t){return e.neg_fechacierre.localeCompare(t.neg_fechacierre)},render:function(e){return _e(e)}},{title:"...",key:"tipoCerrado",align:"center",render:function(e,t){return Object(B.jsx)("span",{children:"cerrado"===se?Object(B.jsxs)(B.Fragment,{children:[1===t.neg_estado&&Object(B.jsx)(_.a,{title:"Cerrado Ganado",placement:"left",children:Object(B.jsx)(D.a,{style:{color:"green"}})}),2===t.neg_estado&&Object(B.jsx)(_.a,{title:"Cerrado Perdido",placement:"left",children:Object(B.jsx)(k.a,{style:{color:"red"}})})]}):null})}}],ye=function(e){le(e),d("abierto"===e?a.filter((function(e){return 0===e.neg_estado})):"cerrado"===e?a.filter((function(e){return 0!==e.neg_estado})):a)},Se=function(e,t,n){t()},Ce=function(e){e()};return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsxs)("div",{className:"card-wrapper",children:[Object(B.jsxs)("div",{className:"card-contadores",children:[Object(B.jsxs)("div",{className:"div-secundario",style:{cursor:"pointer"},onClick:function(){ye("total")},children:[Object(B.jsx)("p",{className:"texto",children:"NEGOCIOS"}),Object(B.jsx)("p",{className:"numeros",children:K+Q+ee})]}),Object(B.jsx)(N.a,{type:"vertical",style:{height:"100%",borderColor:"#f0f0f0",borderWidth:"2px"}}),Object(B.jsxs)("div",{children:[Object(B.jsxs)("div",{className:"div-secundario",style:{cursor:"pointer"},onClick:function(){ye("abierto")},children:[Object(B.jsx)("p",{className:"texto",children:"ABIERTOS"}),Object(B.jsx)("p",{className:"numeros",children:K})]}),Object(B.jsx)("hr",{className:"hr1"}),Object(B.jsxs)("div",{className:"div-secundario",style:{cursor:"pointer"},onClick:function(){return ye("cerrado")},children:[Object(B.jsx)("p",{className:"texto",children:"CERRADOS"}),Object(B.jsx)("p",{className:"numeros",children:Q+ee})]})]})]}),Object(B.jsx)(y.a,{className:"card-content",children:Object(B.jsxs)("div",{className:"div-content",children:[Object(B.jsx)("p",{className:"totales",children:"U$D ".concat(R.toLocaleString("de-DE",{minimumFractionDigits:0}))}),Object(B.jsx)("p",{className:"descripcion",children:"Total negocios"})]})}),Object(B.jsx)(y.a,{className:"card-content",children:Object(B.jsxs)("div",{className:"div-content",children:[Object(B.jsx)("p",{className:"totales",children:"U$D ".concat(G.toLocaleString("de-DE",{minimumFractionDigits:0}))}),Object(B.jsx)("p",{className:"descripcion",children:"Total % por etapa"})]})}),Object(B.jsx)("div",{className:"filter-data",children:Object(B.jsx)(q,{placement:"left",title:"Cotizaci\xf3n ".concat(je),children:U(je,Oe,pe,he)})})]}),Object(B.jsx)(S.a,{rowKey:"neg_id",size:"small",dataSource:l,columns:Ne,pagination:{position:["none","bottomCenter"]}})]})},P=n(157),Y=n(110),K=n.n(Y),M=n(158),W=n.n(M),H=function(){var e=Object(P.a)(K.a.mark((function e(){var t,n;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={method:"GET",url:"https://api-cotizaciones-tt7h9.ondigitalocean.app/api/dolaroficial"},e.next=4,W()(t);case 4:return n=e.sent,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(err);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),Q=function(){var e=Object(P.a)(K.a.mark((function e(){var t,n;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={method:"GET",url:"https://api-cotizaciones-tt7h9.ondigitalocean.app/api/real/nacion"},e.next=4,W()(t);case 4:return n=e.sent,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(err);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(z.useState)(0),t=Object(o.a)(e,2),n=t[0],c=t[1],a=Object(z.useState)(0),r=Object(o.a)(a,2),i=r[0],d=r[1],u=Object(z.useState)(""),j=Object(o.a)(u,2),m=j[0],p=j[1];return H().then((function(e){e.data&&(c(1/Number(e.data.venta)),p(e.data.fecha))})),Q().then((function(e){e.data&&d(1/Number(e.data.venta))})),Object(B.jsx)(L.Provider,{value:{cotizacionDolar:n,cotizacionReal:i,ultimaActualizacion:m},children:Object(B.jsx)(l.a,{locale:O.a,children:Object(B.jsx)(s.a,{client:b,children:Object(B.jsx)(J,{})})})})},X=document.getElementById("root");i.a.render(Object(B.jsx)(V,{}),X)}},[[332,1,2]]]);
//# sourceMappingURL=main.63f650d1.chunk.js.map