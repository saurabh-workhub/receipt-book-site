(this["webpackJsonpreceipt-book"]=this["webpackJsonpreceipt-book"]||[]).push([[0],{283:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(11),c=t.n(i),s=t(12),l=t(31),o=t(4),d=function(){return Object(o.jsx)("div",{className:"spinner",children:Object(o.jsx)("img",{src:"https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg",alt:"Loading..."})})},j=t(312),u=t(328),b=t(149),h=t(316),m=t(317),p=t(318),O=t(47),x=Object(j.a)((function(){return{header:{backgroundColor:"#400CCC",paddingRight:"79px",paddingLeft:"118px"},logo:{fontFamily:"Work Sans, sans-serif",fontWeight:600,color:"#FFFEFE",textAlign:"left"},menuButton:{fontFamily:"Open Sans, sans-serif",size:"18px",marginLeft:"38px"},toolbar:{display:"flex",justifyContent:"space-between"}}})),f=function(){var e=[{label:"My Account",href:"/account"},{label:"Log Out",href:"/logout"}],n=x(),t=n.header,a=n.logo,r=n.menuButton,i=n.toolbar,c=Object(o.jsx)(b.a,{variant:"h6",component:"h1",className:a,children:"Logo"});return Object(o.jsx)("header",{children:Object(o.jsx)(m.a,{className:t,children:Object(o.jsxs)(p.a,{className:i,children:[c,Object(o.jsx)("div",{children:e.map((function(e){var n=e.label,t=e.href;return Object(o.jsx)(h.a,{key:n,color:"inherit",to:t,component:O.b,className:r,children:n})}))})]})})})},g=t(24),v=t(150),S=t(323),C=t(341),y=t(319),P=t(284),T=t(336),k=t(324),I=t(334),N=t(320),M=t(321),w=t(326),L=t(342),D=t(144),E=t(63),F=t(19),A=t(332),J=t(145),W=t(333),B=t(340),R=function(e){var n=e.printers,t=e.callback,r=Object(a.useState)(0),i=Object(g.a)(r,2),c=i[0],s=i[1];return Object(o.jsx)(v.a,{style:{padding:16},children:Object(o.jsxs)(y.a,{fullWidth:!0,children:[Object(o.jsx)(N.a,{id:"demo-simple-select-label",children:"Select an installed Printer:"}),Object(o.jsx)(W.a,{labelId:"printers-label",id:"installedPrinterName",value:c,label:"Printers",onChange:function(e){s(e.target.value),t(e.target.value)},children:n.map((function(e){return Object(o.jsx)(B.a,{value:e,children:e})}))})]})})},q=t(26),K=t.n(q),U={printers:function(e){K.a.JSPrintManager.auto_reconnect=!0,K.a.JSPrintManager.start(),K.a.JSPrintManager.WS.onStatusChanged=function(){U.printersStatus()&&K.a.JSPrintManager.getPrinters().then((function(n){e(n)}))}},printersStatus:function(){return K.a.JSPrintManager.websocket_status===K.a.WSStatus.Open||(K.a.JSPrintManager.websocket_status===K.a.WSStatus.Closed?(alert("JSPrintManager (JSPM) is not installed or not running! Download JSPM Client App from https://neodynamic.com/downloads/jspm"),!1):K.a.JSPrintManager.websocket_status===K.a.WSStatus.Blocked?(alert("JSPM has blocked this website!"),!1):void 0)},print:function(e,n){if(!e)return alert("Please setup the printer first."),!1;if(U.printersStatus()){var t=new K.a.ClientPrintJob;t.clientPrinter=new K.a.InstalledPrinter(e);var a="\n";"BEST DEAL STORES","\n\n","COOKIES                   5.00",a,"MILK 65 Fl oz             3.78","\n\n","SUBTOTAL                  8.78",a,"TAX 5%                    0.44",a,"TOTAL                     9.22",a,"CASH TEND                10.00",a,"CASH DUE                  0.78","\n\n","# ITEMS SOLD 2","\n\n","11/03/13  19:53:17",t.printerCommands="\x1b@BEST DEAL STORES\n\nCOOKIES                   5.00\nMILK 65 Fl oz             3.78\n\nSUBTOTAL                  8.78\nTAX 5%                    0.44\nTOTAL                     9.22\nCASH TEND                10.00\nCASH DUE                  0.78\n\n# ITEMS SOLD 2\n\n11/03/13  19:53:17",t.sendToClient()}}},H=U;var _=function(){var e=Object(a.useState)([]),n=Object(g.a)(e,2),t=n[0],i=n[1],c=r.a.useRef([]);return Object(a.useEffect)((function(){0===c.current.length&&(H.printers(i),c.current=t)}),[t]),c.current},z=Object(j.a)((function(){return{drawerPaper:{width:"30%"}}})),X=function(){var e=z(),n=_(),t=Object(a.useState)(),i=Object(g.a)(t,2),c=i[0],s=i[1],l=E.b().shape({tokenNumber:E.a().required("Required"),partyName:E.c().required("Required"),sampleType:E.c().required("Required"),finenessInPercent:E.a().min(0).max(100,"Invalid").required("Required")}),d=Object(D.a)({initialValues:{tokenNumber:"",partyName:"",sampleType:"",finenessInPercent:"",finenessInCarat:"",specialInformation:"",testDate:new Date,receiptDate:new Date,checkedBy:"SJ"},validationSchema:l,onSubmit:function(e){H.print(c,e)}});r.a.useEffect((function(){var e;d.values.finenessInPercent&&(d.values.finenessInCarat=(e=d.values.finenessInPercent)?24*e/100:"")}));var j,u=r.a.useState(!1),m=Object(g.a)(u,2),p=m[0],O=m[1];return Object(o.jsx)("div",{children:Object(o.jsxs)(r.a.Fragment,{children:[Object(o.jsxs)("div",{style:{padding:10},children:[Object(o.jsx)(h.a,{variant:"outlined",onClick:function(){return O(!0)},children:"Setup Printer"}),Object(o.jsxs)(b.a,{variant:"h6",gutterBottom:!0,component:"div",children:["Default Printer: ",c]})]}),Object(o.jsx)("form",{onSubmit:d.handleSubmit,children:Object(o.jsx)(v.a,{style:{padding:16},children:Object(o.jsxs)(S.a,{container:!0,spacing:3,children:[Object(o.jsxs)(S.a,{item:!0,xs:12,children:[Object(o.jsx)(C.a,{id:"tokenNumber",name:"tokenNumber",label:"Token #",value:d.values.tokenNumber,onChange:d.handleChange,fullWidth:!0}),d.errors.tokenNumber?d.errors.tokenNumber:null]}),Object(o.jsxs)(S.a,{item:!0,xs:12,children:[Object(o.jsx)(C.a,{id:"partyName",name:"partyName",label:"Party Name",value:d.values.partyName,onChange:d.handleChange,fullWidth:!0}),d.errors.partyName?d.errors.partyName:null]}),Object(o.jsxs)(S.a,{item:!0,xs:12,children:[Object(o.jsxs)(y.a,{component:"fieldset",fullWidth:!0,children:[Object(o.jsx)(P.a,{component:"legend",children:"Type of Sample"}),Object(o.jsxs)(T.a,{row:!0,name:"sampleType",value:d.values.sampleType,onChange:d.handleChange,children:[Object(o.jsx)(k.a,{value:"Cut-bit",control:Object(o.jsx)(I.a,{}),label:"Cut-bit"}),Object(o.jsx)(k.a,{value:"TM",control:Object(o.jsx)(I.a,{}),label:"TM"})]})]}),d.errors.sampleType?d.errors.sampleType:null]}),Object(o.jsxs)(S.a,{item:!0,xs:6,children:[Object(o.jsxs)(y.a,{variant:"standard",fullWidth:!0,children:[Object(o.jsx)(N.a,{htmlFor:"finenessInPercent",children:"Fineness"}),Object(o.jsx)(M.a,{id:"finenessInPercent",endAdornment:Object(o.jsx)(w.a,{position:"end",children:"%"}),value:d.values.finenessInPercent,onChange:d.handleChange,fullWidth:!0})]}),d.errors.finenessInPercent?d.errors.finenessInPercent:null]}),Object(o.jsx)(S.a,{item:!0,xs:6,children:Object(o.jsxs)(y.a,{variant:"standard",fullWidth:!0,children:[Object(o.jsx)(N.a,{htmlFor:"finenessInCarat",children:"Fineness"}),Object(o.jsx)(M.a,{readOnly:!0,id:"finenessInCarat",endAdornment:Object(o.jsx)(w.a,{position:"end",children:"Ct"}),value:d.values.finenessInCarat,onChange:d.handleChange,fullWidth:!0})]})}),Object(o.jsx)(S.a,{item:!0,xs:12,children:Object(o.jsx)(C.a,{id:"specialInformation",label:"Special Information",multiline:!0,rows:3,variant:"standard",value:d.values.specialInformation,onChange:d.handleChange,fullWidth:!0})}),Object(o.jsx)(S.a,{item:!0,xs:12,children:Object(o.jsx)(F.a,{utils:J.a,children:Object(o.jsx)(A.a,{disableToolbar:!0,fullWidth:!0,variant:"inline",format:"dd/MM/yyyy",margin:"normal",id:"testDate",label:"Test Date",value:d.values.testDate,onChange:d.handleChange,KeyboardButtonProps:{"aria-label":"change date"}})})}),Object(o.jsx)(S.a,{item:!0,xs:4,children:Object(o.jsx)(h.a,{variant:"outlined",type:"submit",children:"Print"})})]})})}),Object(o.jsx)(L.a,{classes:{paper:e.drawerPaper},anchor:"right",open:p,onClose:(j=!1,function(e){("keydown"!==e.type||"Tab"!==e.key&&"Shift"!==e.key)&&O(j)}),children:Object(o.jsx)(R,{printers:n,callback:s})})]})})},Q=Object(j.a)((function(){return{container:{display:"flex",flex:1,paddingTop:"100px"},main:{flex:1,background:"#f7f5f5",color:"black"}}})),V=function(){var e=Q(),n=e.container,t=e.main;return Object(o.jsxs)("div",{children:[Object(o.jsx)(f,{}),Object(o.jsx)(u.a,{className:n,children:Object(o.jsx)("main",{className:t,children:Object(o.jsx)(X,{})})})]})},Y=t(146),Z=t(147),G=function(e){var n=e.component,t=Object(Z.a)(e,["component"]);return Object(o.jsx)(s.a,Object(Y.a)({component:Object(l.c)(n,{onRedirecting:function(){return Object(o.jsx)(d,{})}})},t))},$=t(329),ee=t(330),ne=t(331),te=function(){var e=Object(l.b)().user,n=e.name,t=e.picture,a=e.email;return Object(o.jsxs)("div",{children:[Object(o.jsx)(f,{}),Object(o.jsxs)($.a,{sx:{maxWidth:150},children:[Object(o.jsx)(ee.a,{height:"140px",width:"160px",component:"img",alt:n,image:t}),Object(o.jsxs)(ne.a,{children:[Object(o.jsx)(b.a,{gutterBottom:!0,variant:"h5",component:"div",children:n}),Object(o.jsx)(b.a,{variant:"body2",color:"text.secondary",children:a})]})]})]})},ae=function(){return(0,Object(l.b)().logout)()};var re=function(){return Object(l.b)().isLoading?Object(o.jsx)(d,{}):Object(o.jsxs)(s.c,{children:[Object(o.jsx)(G,{exact:!0,path:"/",component:V}),Object(o.jsx)(G,{exact:!0,path:"/home",component:V}),Object(o.jsx)(G,{path:"/account",component:te}),Object(o.jsx)(G,{path:"/logout",component:ae})]})},ie=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,343)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,i=n.getLCP,c=n.getTTFB;t(e),a(e),r(e),i(e),c(e)}))},ce=function(e){var n=e.children,t=Object(s.f)();return Object(o.jsx)(l.a,{domain:"dev-6bptmyvi.us.auth0.com",clientId:"bZLLiNmTrF4TRJQwfCtoLSjDjYvtJrbM",redirectUri:"".concat("https://lal-saurabh.github.io/receipt-book-site","/home"),onRedirectCallback:function(e){t.push("home")},children:n})};c.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(O.a,{basename:"/".concat("receipt-book-site"),children:Object(o.jsx)(ce,{children:Object(o.jsx)(re,{})})})}),document.getElementById("root")),ie()}},[[283,1,2]]]);
//# sourceMappingURL=main.46b51b31.chunk.js.map