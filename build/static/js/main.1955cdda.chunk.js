(this["webpackJsonptemplate-starter"]=this["webpackJsonptemplate-starter"]||[]).push([[0],{231:function(e,t,n){},232:function(e,t,n){},333:function(e,t,n){"use strict";n.r(t);var a,c,r=n(34),o=n.n(r),i=n(24),s=n(343),l=n(18),d=n(214),u=n(348),j=n(349),b=n(347),p=window.location.protocol,m=window.location.hostname,O="".concat(p,"//").concat(m,":").concat("4002"),g=new u.a({connectToDevTools:!0,cache:new j.a,link:new b.a({uri:O})}),h=n(215),f=n.n(h),x=(n(231),n(182)),v=n(216),_=n(352),N=n(78),w=n(351),S=n(353),y=n(105),C=n(342),I=n(345),R=n(344),k=n(108),D=n(355),z=n(356),E=(n(232),n(0)),F=n(350),L=n(142),U=n(346),A=Object(U.a)(a||(a=Object(L.a)(["\n  query getNegociosIframe($idCliente: Int) {\n    getNegociosIframeResolver(idCliente: $idCliente)\n  }\n"]))),T=Object(U.a)(c||(c=Object(L.a)(["\n  query getConfig {\n    getConfiguracionResolver\n  }\n"]))),B=Object(E.createContext)([]),q=function(e,t,n,a){var c=0;return e.mon_id!==t?2==t?c=1==e.mon_id?e.neg_valor*n:e.neg_valor*(n/a):3==t?c=1==e.mon_id?e.neg_valor*a:e.neg_valor*(a/n):1==t&&(c=2==e.mon_id?e.neg_valor*(1/n):e.neg_valor*(1/a)):c=e.neg_valor,{nuevoImporte:c}},$=n(219),P=n(8),G=function(e){var t=e.title,n=e.placement,a=e.children;return Object(P.jsx)(P.Fragment,{children:Object(P.jsx)(w.a,{placement:n,title:t,content:a,trigger:"click",children:Object(P.jsxs)(N.a,{type:"link",style:{padding:0},children:[" ",Object(P.jsx)($.a,{style:{paddingLeft:0,marginRight:7,color:"#00b33c"}})]})})})},J=n(210),Y=n.n(J),K=function(e,t,n,a){switch(e){case"AR$":return M("1 USD =","1 BRL =",1/t,1/n,e,a);case"USD":return M("1 AR$ =","1 BRL =",t,t/n,e,a);case"BRL":return M("1 AR$ =","1 USD =",n,1/t*n,e,a)}},M=function(e,t,n,a,c,r){return Object(P.jsx)("div",{className:"cotizaciones",children:a?Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)("p",{className:"cotizaciones_p",children:[Object(P.jsx)("span",{className:"cotizacion",children:e})," ","".concat(c," ")," ",n.toLocaleString("de-DE",{maximumFractionDigits:2})]}),Object(P.jsxs)("p",{className:"cotizaciones_p",children:[Object(P.jsx)("span",{className:"cotizacion",children:t})," ","".concat(c," ")," ",a.toLocaleString("de-DE",{maximumFractionDigits:2})]}),Object(P.jsxs)("p",{className:"info_data cotizaciones_p",children:["ultima actualizacion:"," ",Object(P.jsxs)("strong",{children:[Y()(r).format("DD/MM/YYYY hh:mm")," hs"]})]})]}):Object(P.jsxs)("p",{className:"info_data cotizaciones_p",children:["Momentaneamente el servicio de cotizaciones se encuentra"," ",Object(P.jsx)("strong",{children:"suspendido."})]})})},W=function(){var e=window.location.search.split("="),t=e[1].split("?")[0],n=Object(E.useRef)(null),a=Object(E.useState)([]),c=Object(i.a)(a,2),r=c[0],o=c[1],s=Object(E.useState)([]),l=Object(i.a)(s,2),d=l[0],u=l[1],j=Object(E.useState)([]),b=Object(i.a)(j,2),p=b[0],m=b[1],O=Object(E.useState)([]),g=Object(i.a)(O,2),h=g[0],f=g[1],L=Object(E.useState)([]),U=Object(i.a)(L,2),$=U[0],J=U[1],Y=Object(E.useState)([]),M=Object(i.a)(Y,2),W=M[0],H=M[1],Q=Object(E.useState)([]),V=Object(i.a)(Q,2),X=V[0],Z=V[1],ee=Object(E.useState)([]),te=Object(i.a)(ee,2),ne=te[0],ae=te[1],ce=Object(E.useState)([]),re=Object(i.a)(ce,2),oe=re[0],ie=re[1],se=Object(E.useState)("abierto"),le=Object(i.a)(se,2),de=le[0],ue=le[1],je=Object(E.useState)([]),be=Object(i.a)(je,2),pe=be[0],me=be[1],Oe=Object(E.useState)([]),ge=Object(i.a)(Oe,2),he=ge[0],fe=ge[1],xe=Object(E.useContext)(B),ve=xe.cotizacionDolar,_e=xe.cotizacionReal,Ne=xe.ultimaActualizacion,we=xe.setReloadingApp,Se=(xe.usuA,xe.setUsuA,xe.idEtapa,xe.setIdEtapa,xe.idNeg),ye=xe.setIdNeg,Ce=(xe.idUser,xe.pipeURL),Ie=xe.setPipeURL;localStorage.setItem("IdNeg",Se),localStorage.setItem("pipeURL",Ce);var Re=Object(F.a)(A,{variables:{idCliente:Number(t)}}),ke=Re.data,De=(Re.loading,Re.error,Object(F.a)(T).data);Object(E.useEffect)((function(){if(we(!0),fe(e[2]?e[2]:"0"),ke&&De){var t=JSON.parse(De.getConfiguracionResolver),n=JSON.parse(ke.getNegociosIframeResolver);console.log(n),o(n.dataNeg),m(n.dataTags),ie(n.dataPipelines.map((function(e){return{text:e.pip_nombre,value:e.pip_nombre}})));var a=0,c=0,i=0,s=0,l=n.dataNeg.filter((function(e){return 0===e.neg_estado})),d=n.dataNeg.filter((function(e){return 0!==e.neg_estado}));u("abierto"===de?l:"cerrado"===de?d:r),H(l.length),Z(d.filter((function(e){return 1===e.neg_estado})).length),ae(d.filter((function(e){return 2===e.neg_estado})).length);var j=t[0].mon_id;me(t[0].mon_iso),l.map((function(e){var t=q(e,j,ve,_e).nuevoImporte;i+=t*e.eta_avance/100,a+=t})),d.map((function(e){var t=q(e,j,ve,_e).nuevoImporte;s+=t*e.eta_avance/100,c+=t})),"abierto"===de?(f(a),J(i)):"cerrado"===de?(f(c),J(s)):(f(a+c),J(i+s)),we(!1)}}),[ke,De,de]);var ze,Ee=function(e){return e.split("T")[0].split("-").reverse().join("/")},Fe=[{title:"Embudo",dataIndex:"pip_nombre",key:"pip_nombre",filters:oe,onFilter:function(e,t){return t.pip_nombre===e},render:function(e){return Object(P.jsx)("p",{className:"columna-color",children:e})}},{title:"Etapa",dataIndex:"eta_nombre",key:"eta_nombre",align:"left"},Object(x.a)(Object(x.a)({title:"Negocio",dataIndex:"neg_asunto",key:"neg_asunto"},(ze="neg_asunto",{filterDropdown:function(e){var t=e.setSelectedKeys,a=e.selectedKeys,c=e.confirm,r=e.clearFilters;return Object(P.jsxs)("div",{style:{padding:8},children:[Object(P.jsx)(v.a,{ref:n,placeholder:"Buscar negocio",value:a[0],onChange:function(e){return t(e.target.value?[e.target.value]:[])},onPressEnter:function(){return Ue(a,c,ze)},style:{marginBottom:8,display:"block"}}),Object(P.jsxs)(_.b,{children:[Object(P.jsx)(N.a,{type:"primary",onClick:function(){return Ue(a,c,ze)},icon:Object(P.jsx)(k.a,{}),size:"small",style:{width:90},children:"Buscar"}),Object(P.jsx)(N.a,{onClick:function(){return r&&Ae(r)},size:"small",style:{width:90},children:"Reiniciar"})]})]})},filterIcon:function(e){return Object(P.jsx)(k.a,{style:{color:e?"#1890ff":void 0}})},onFilter:function(e,t){return t[ze]?t[ze].toString().toLowerCase().includes(e.toLowerCase()):""}})),{},{render:function(e,t){var n=p.filter((function(e){return e.neg_id===t.neg_id}));return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)("p",{className:"columna-color",children:e}),Object(P.jsx)("div",{className:n.length>0?"div-contenedor":"",children:n.map((function(e,t){return Object(P.jsx)(w.a,{content:n.map((function(e){return Object(P.jsx)(S.a,{color:e.etq_color,children:e.etq_nombre},e.etq_id)})),children:Object(P.jsx)(S.a,{color:e.etq_color,className:"tags"},e.etq_id)},t)}))})]})}}),{title:"Importe",dataIndex:"neg_valor",key:"neg_valor",align:"right",sorter:function(e,t){return e.neg_valor-t.neg_valor},render:function(e,t){return Object(P.jsx)(P.Fragment,{children:"".concat(t.mon_iso," ").concat(e.toLocaleString("de-DE",{minimumFractionDigits:0}))})}},{title:"% Etapa",dataIndex:"eta_avance",key:"eta_avance",align:"right",sorter:function(e,t){return e.eta_avance-t.eta_avance}},{title:"Fecha de Creaci\xf3n",dataIndex:"neg_fechacreacion",key:"neg_fechacreacion",align:"center",sorter:function(e,t){return e.neg_fechacreacion.localeCompare(t.neg_fechacreacion)},render:function(e){return Ee(e)}},{title:"Fecha de Cierre",dataIndex:"neg_fechacierre",key:"neg_fechacierre",align:"center",sorter:function(e,t){return e.neg_fechacierre.localeCompare(t.neg_fechacierre)},render:function(e){return Ee(e)}},{title:"...",key:"tipoCerrado",align:"center",render:function(e,t){return Object(P.jsx)("span",{children:"cerrado"===de?Object(P.jsxs)(P.Fragment,{children:[1===t.neg_estado&&Object(P.jsx)(y.a,{title:"Cerrado Ganado",placement:"left",children:Object(P.jsx)(D.a,{style:{color:"green"}})}),2===t.neg_estado&&Object(P.jsx)(y.a,{title:"Cerrado Perdido",placement:"left",children:Object(P.jsx)(z.a,{style:{color:"red"}})})]}):null})}}],Le=function(e){ue(e),u("abierto"===e?r.filter((function(e){return 0===e.neg_estado})):"cerrado"===e?r.filter((function(e){return 0!==e.neg_estado})):r)},Ue=function(e,t,n){t()},Ae=function(e){e()};return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)("div",{className:"card-wrapper",children:[Object(P.jsxs)("div",{className:"card-contadores",children:[Object(P.jsxs)("div",{className:"total"===de?"div-secundario dashed":"div-secundario",style:{cursor:"pointer"},onClick:function(){Le("total")},children:[Object(P.jsx)("p",{className:"texto",children:"NEGOCIOS"}),Object(P.jsx)("p",{className:"numeros",children:W+X+ne})]}),Object(P.jsx)(C.a,{type:"vertical",style:{height:"100%",borderColor:"#f0f0f0",borderWidth:"2px"}}),Object(P.jsxs)("div",{children:[Object(P.jsxs)("div",{className:"abierto"===de?"div-secundario dashed":"div-secundario",style:{cursor:"pointer"},onClick:function(){Le("abierto")},children:[Object(P.jsx)("p",{className:"texto",children:"ABIERTOS"}),Object(P.jsx)("p",{className:"numeros",children:W})]}),Object(P.jsx)("hr",{className:"total"===de?"hr1":"cancela-hr"}),Object(P.jsxs)("div",{className:"cerrado"===de?"div-secundario dashed":"div-secundario",style:{cursor:"pointer"},onClick:function(){return Le("cerrado")},children:[Object(P.jsx)("p",{className:"texto",children:"CERRADOS"}),Object(P.jsx)("p",{className:"numeros",children:X+ne})]})]})]}),Object(P.jsx)(I.a,{className:"card-content",children:Object(P.jsxs)("div",{className:"div-content",children:[Object(P.jsx)("p",{className:"totales",children:"U$D ".concat(h.toLocaleString("de-DE",{minimumFractionDigits:0}))}),Object(P.jsx)("p",{className:"descripcion",children:"Total negocios"})]})}),Object(P.jsx)(I.a,{className:"card-content",children:Object(P.jsxs)("div",{className:"div-content",children:[Object(P.jsx)("p",{className:"totales",children:"U$D ".concat($.toLocaleString("de-DE",{minimumFractionDigits:0}))}),Object(P.jsx)("p",{className:"descripcion",children:"Total % por etapa"})]})}),"0"===he?Object(P.jsx)("div",{className:"filter-data",children:Object(P.jsx)(G,{placement:"left",title:"Cotizaci\xf3n ".concat(pe),children:K(pe,ve,_e,Ne)})}):Object(P.jsx)(P.Fragment,{})]}),Object(P.jsx)(R.a,{rowKey:"neg_id",size:"small",dataSource:d,columns:Fe,pagination:{position:["none","bottomCenter"]},onRow:function(e){return{onClick:function(){!function(e){ye(e);var t=window.location.port?window.location.port:80,n=window.location.protocol,a=window.location.hostname,c=(window.location.pathname,"".concat(n,"//").concat(a,":").concat(t));console.log("URL ",c);var r=localStorage.getItem("usuario"),o=Ce;window.location.href="".concat(n,"//").concat(a,":").concat(t,"/duoc/deal/?negId=").concat(e,"&pipId=").concat(o,"&userId=").concat(r)}(e.neg_id),Ie(e.pip_id)}}}})]})},H=n(157),Q=n(110),V=n.n(Q),X=n(158),Z=n.n(X),ee=function(){var e=Object(H.a)(V.a.mark((function e(){var t,n;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={method:"GET",url:"https://api-cotizaciones-tt7h9.ondigitalocean.app/api/dolaroficial"},e.next=4,Z()(t);case 4:return n=e.sent,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(err);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),te=function(){var e=Object(H.a)(V.a.mark((function e(){var t,n;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={method:"GET",url:"https://api-cotizaciones-tt7h9.ondigitalocean.app/api/real/nacion"},e.next=4,Z()(t);case 4:return n=e.sent,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(err);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),ne=function(){var e=Object(E.useState)(0),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(E.useState)(0),r=Object(i.a)(c,2),o=r[0],u=r[1],j=Object(E.useState)(""),b=Object(i.a)(j,2),p=b[0],m=b[1],O=Object(E.useState)(!1),h=Object(i.a)(O,2),x=h[0],v=h[1],_=Object(E.useState)(),N=Object(i.a)(_,2),w=N[0],S=N[1],y=Object(E.useState)(),C=Object(i.a)(y,2),I=C[0],R=C[1],k=Object(E.useState)(""),D=Object(i.a)(k,2),z=D[0],F=D[1];return Object(E.useEffect)((function(){var e=window.location.search;if(e){var t=e.split("=")[1];F(Number(t))}}),[]),ee().then((function(e){e.data&&(a(1/Number(e.data.venta)),m(e.data.fecha),v(!1))})),te().then((function(e){e.data&&u(1/Number(e.data.venta))})),Object(P.jsx)(B.Provider,{value:{cotizacionDolar:n,cotizacionReal:o,ultimaActualizacion:p,setReloadingApp:v,idNeg:I,setIdNeg:R,idUser:z,setIdUser:F,pipeURL:w,setPipeURL:S},children:Object(P.jsx)(l.a,{locale:f.a,children:Object(P.jsx)(s.a,{client:g,children:Object(P.jsx)(d.a,{id:"main_loader",tip:"Cargando",spinning:x,className:"color",children:Object(P.jsx)(W,{})})})})})},ae=document.getElementById("root");o.a.render(Object(P.jsx)(ne,{}),ae)}},[[333,1,2]]]);
//# sourceMappingURL=main.1955cdda.chunk.js.map