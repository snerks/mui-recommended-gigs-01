(this["webpackJsonpmui-recommended-gigs-01"]=this["webpackJsonpmui-recommended-gigs-01"]||[]).push([[0],{254:function(e,t,a){e.exports=a(459)},452:function(e,t,a){},459:function(e,t,a){"use strict";a.r(t);a(255),a(264);var n=a(0),r=a.n(n),l=a(23),c=a.n(l),o=(a(452),a(22)),i=a(41),s=a(72),m=a(247),u=a(506),d=a(59),E=a.n(d),f=a(85),p=a(35),h=a(249),b=a(507),g=a(523),y=a(508),v=a(509),w=a(524),j=a(501),O=a(503),D=a(504),k=a(522),x=a(242),S=a.n(x),T=a(460),C=Object(T.a)((function(){return{typographyStyles:{flex:1}}})),z=function(e){var t=e.isDarkMode,a=e.setIsDarkMode,n=C();return r.a.createElement(j.a,{position:"static"},r.a.createElement(O.a,null,r.a.createElement(D.a,{className:n.typographyStyles},"Recommended Gigs"),r.a.createElement(h.a,{title:"use this switch for dark/light mode"},r.a.createElement(S.a,null)),r.a.createElement(k.a,{checked:t,onChange:function(){return a(!t)}})))},M=Object(T.a)((function(e){return{addedTodayNonZero:{backgroundColor:e.palette.success.main,paddingLeft:50,paddingRight:50,borderRadius:5}}})),I=function(e){var t=e.isDarkMode,a=e.setIsDarkMode,l=Object(p.a)(),c=M(),s=Object(n.useState)(!0),m=Object(o.a)(s,2),d=m[0],j=m[1],O=Object(n.useState)({lastUpdated:new Date,shows:[]}),D=Object(o.a)(O,2),k=D[0],x=D[1],S=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(!e.addedDate)return!1;var a=new Date(e.addedDate),n=new Date,r=n.getTime()-a.getTime(),l=864e5,c=t*l,o=r<c;return o};Object(n.useEffect)((function(){(function(){var e=Object(f.a)(E.a.mark((function e(){var t,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("fetchShowsInfo"),"https://show01-cd72d.firebaseio.com/.json",e.next=4,fetch("https://show01-cd72d.firebaseio.com/.json");case 4:return t=e.sent,e.next=7,t.json();case 7:a=e.sent,console.log("fetchShowsInfo","response",a),x(a),j(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var T=(k?k.shows.filter((function(e){return S(e,1)})):[]).length,C=T>0;return r.a.createElement(u.a,{theme:l},r.a.createElement(h.a,{elevation:0,square:!0,style:{height:"100vh"}},r.a.createElement(b.a,{container:!0,direction:"column",justify:"center",spacing:4},r.a.createElement(b.a,{item:!0},r.a.createElement(z,{isDarkMode:t,setIsDarkMode:a})),d?r.a.createElement(g.a,{open:!0},r.a.createElement(y.a,{color:"inherit"})):r.a.createElement(b.a,{item:!0,container:!0,direction:"column",spacing:2,justify:"center",alignItems:"stretch"},r.a.createElement(b.a,{item:!0},r.a.createElement(v.a,{variant:"contained",color:"primary",component:i.b,to:"/giglist/false",fullWidth:!0},r.a.createElement("span",null,"Future Events"),"\xa0"," ",r.a.createElement(w.a,{variant:"default",color:"secondary",size:"small",label:(k?k.shows.filter((function(e){return function(e){if(!e.date)return!1;var t=new Date(e.date);t.setHours(23,59,0,0);var a=new Date;return a.setHours(0,0,0,0),t>=a}(e)})):[]).length}))),r.a.createElement(b.a,{item:!0},r.a.createElement(v.a,{variant:"contained",color:"secondary",component:i.b,to:"/giglist/false/1",fullWidth:!0},r.a.createElement("div",{className:C?c.addedTodayNonZero:void 0},"Added Today\xa0",r.a.createElement(w.a,{variant:"default",color:"primary",size:"small",label:T})))),r.a.createElement(b.a,{item:!0},r.a.createElement(v.a,{variant:"contained",color:"secondary",component:i.b,to:"/giglist/false/3",fullWidth:!0},r.a.createElement("span",null,"Added In Last 3 Days"),"\xa0",r.a.createElement(w.a,{variant:"default",color:"primary",size:"small",label:(k?k.shows.filter((function(e){return S(e,3)})):[]).length}))),r.a.createElement(b.a,{item:!0},r.a.createElement(v.a,{variant:"contained",color:"secondary",component:i.b,to:"/giglist/false/7",fullWidth:!0},r.a.createElement("span",null,"Added In Last 7 Days"),"\xa0",r.a.createElement(w.a,{variant:"default",color:"primary",size:"small",label:(k?k.shows.filter((function(e){return S(e,7)})):[]).length}))),r.a.createElement(b.a,{item:!0},r.a.createElement(v.a,{variant:"contained",color:"secondary",component:i.b,to:"/giglist/true/-1",fullWidth:!0},r.a.createElement("span",null,"All Events"),"\xa0"," ",r.a.createElement(w.a,{variant:"default",color:"primary",size:"small",label:(k?k.shows:[]).length})))))))},B=a(3),L=a(6),A=a(512),N=a(246),W=a.n(N),F=a(514),G=a(516),R=a(510),U=a(513),q=a(515),H=a(511),P=a(520),V=a(521),J=a(505),Z=a(132),$=Object(L.a)((function(e){return{head:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},body:{fontSize:14}}}))(R.a),K=Object(L.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.background.default}}}}))(H.a),Q=Object(A.a)({table:{}}),X=function(e){var t=e.placeholder,a=Object(B.a)(e,["placeholder"]),n=Object(Z.c)(a),l=Object(o.a)(n,2),c=l[0],i=l[1],s=i.error&&i.touched?i.error:"";return r.a.createElement(P.a,Object.assign({placeholder:t},c,{helperText:s,autoComplete:"off",error:!!s}))},Y=function(e){console.log("DenseTable : Start Render");var t=Object(p.a)(),a=Q(),l=Object(n.useState)(!0),c=Object(o.a)(l,2),s=c[0],m=c[1],u=Object(n.useState)(e.showPastEvents),d=Object(o.a)(u,1)[0],j=Object(n.useState)(e.days),O=Object(o.a)(j,1)[0],D=Object(n.useState)([]),k=Object(o.a)(D,2),x=k[0],S=k[1],T=Object(n.useState)({lastUpdated:new Date,shows:[]}),C=Object(o.a)(T,2),z=(C[0],C[1]),M=function(e){return!!d||function(e){if(!e.date)return!1;var t=new Date(e.date);t.setHours(23,59,0,0);var a=new Date;return a.setHours(0,0,0,0),t>=a}(e)},I=function(e){return-1===O||function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(!e.addedDate)return!1;var a=new Date(e.addedDate),n=new Date,r=n.getTime()-a.getTime(),l=864e5,c=t*l,o=r<c;return o}(e,O)},B=function(e){var t=e;return t=t.filter(M),-1!==O&&(t=t.filter(I)),t},L=function(e){var t=x;return e&&(t=function(e){return console.log("getArtistFilterShows"),e?x.filter((function(t){return!e||t.artists.reduce((function(e,t,a){var n=t.name;return 0===a?n:e+" "+n}),"").toLowerCase().indexOf(e.toLowerCase())>-1})):x}(e)),t};return Object(n.useEffect)((function(){(function(){var e=Object(f.a)(E.a.mark((function e(){var t,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://show01-cd72d.firebaseio.com/.json",e.next=3,fetch("https://show01-cd72d.firebaseio.com/.json");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,z(a),S(B(a.shows)),m(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),s?r.a.createElement(g.a,{open:!0},r.a.createElement(y.a,{color:"inherit"})):r.a.createElement(b.a,{container:!0,direction:"column"},r.a.createElement(b.a,{item:!0},r.a.createElement(Z.b,{initialValues:{artistFilter:""},onSubmit:function(){}},(function(e){var n=e.values,l=(e.errors,e.isSubmitting,e.handleChange,L(n.artistFilter));return r.a.createElement(b.a,{container:!0,direction:"column"},r.a.createElement(b.a,{item:!0,container:!0},r.a.createElement(b.a,{item:!0},r.a.createElement(Z.a,{style:{padding:"0 30px 15px 15px"}},r.a.createElement(X,{placeholder:"artist filter",name:"artistFilter",type:"input"}))),r.a.createElement(b.a,{item:!0},r.a.createElement(w.a,{variant:"default",color:"secondary",size:"small",label:l.length}))),r.a.createElement(b.a,{item:!0},r.a.createElement(U.a,{component:h.a,square:!0},r.a.createElement(F.a,{className:a.table,size:"small","aria-label":"a dense table"},r.a.createElement(q.a,null,r.a.createElement(H.a,null,r.a.createElement(V.a,{smDown:!0},r.a.createElement($,null,"Day")),r.a.createElement($,null,"Date"),r.a.createElement($,null,"Artists"),r.a.createElement($,null,"Venue"),r.a.createElement($,null,"Actions"),r.a.createElement($,null,"\xa0"))),r.a.createElement(G.a,null,l.map((function(e){return r.a.createElement(K,{key:Math.random()},r.a.createElement(V.a,{smDown:!0},r.a.createElement($,null,(a=e.date,new Date(a).toLocaleDateString("en-GB",{weekday:"short"})))),r.a.createElement($,null,function(e){return new Date(e).toLocaleDateString("en-GB",{year:"numeric",month:"short",day:"numeric"})}(e.date)),r.a.createElement($,null,r.a.createElement(b.a,{container:!0},r.a.createElement(b.a,{item:!0,xs:11},e.artists.map((function(t){return r.a.createElement("p",{key:"".concat(e.id,".").concat(t.name)},t.name)}))),r.a.createElement(b.a,{item:!0,xs:1},r.a.createElement(J.a,{"aria-label":"details",component:i.b,to:"/gigdetails/".concat(e.id)},r.a.createElement(W.a,null))))),r.a.createElement($,null,e.venue),r.a.createElement($,null,r.a.createElement(v.a,{variant:"contained",color:"primary",size:"small",component:i.b,to:"/gigdetails/".concat(e.id)},r.a.createElement("span",null,"View"))),r.a.createElement($,null,r.a.createElement(b.a,{container:!0,direction:"column",spacing:1},e.isSoldOut&&r.a.createElement(b.a,{item:!0},r.a.createElement(w.a,{style:{backgroundColor:t.palette.warning.main,color:t.palette.warning.contrastText},size:"small",label:"Sold Out"})),e.isCancelled&&r.a.createElement(b.a,{item:!0},r.a.createElement(w.a,{style:{backgroundColor:t.palette.error.main,color:t.palette.error.contrastText},size:"small",label:"Cancelled"})),e.priceText&&0===e.priceText.indexOf("\xa3")&&r.a.createElement(b.a,{item:!0},r.a.createElement(w.a,{style:{backgroundColor:t.palette.info.main,color:t.palette.info.contrastText},size:"small",label:e.priceText})),e.notes&&r.a.createElement(b.a,{item:!0},r.a.createElement("span",{style:{}},e.notes)))));var a})))))))}))))},_=function(e){var t=e.isDarkMode,a=e.setIsDarkMode,n=Object(s.f)(),l=n.showPastEvents,c=n.days,o="true"===l,i=void 0===c?-1:+c,m=Object(p.a)();return r.a.createElement(u.a,{theme:m},r.a.createElement(h.a,{elevation:0,square:!0,style:{height:"100%"}},r.a.createElement(b.a,{container:!0,direction:"column",spacing:1},r.a.createElement(b.a,{item:!0},r.a.createElement(z,{isDarkMode:t,setIsDarkMode:a})),r.a.createElement(b.a,{item:!0,container:!0,justify:"center"},r.a.createElement(Y,{showPastEvents:o,days:i})))))},ee=a(517),te=a(519),ae=a(518),ne=Object(A.a)({root:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}}),re=function(){var e=Object(s.f)(),t=ne(),a=Object(p.a)(),l=Object(n.useState)(!0),c=Object(o.a)(l,2),i=c[0],m=c[1],u=Object(n.useState)(e.id),d=Object(o.a)(u,1)[0],h=Object(n.useState)({lastUpdated:new Date,shows:[]}),v=Object(o.a)(h,2),j=v[0],O=v[1];Object(n.useEffect)((function(){(function(){var e=Object(f.a)(E.a.mark((function e(){var t,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://show01-cd72d.firebaseio.com/.json",e.next=3,fetch("https://show01-cd72d.firebaseio.com/.json");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,O(a),m(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var k=function(e){return j.shows.find((function(t){return t.id&&t.id===e}))}(d),x=function(e){return new Date(e).toLocaleDateString("en-GB",{weekday:"short"})},S=function(e){return new Date(e).toLocaleDateString("en-GB",{year:"numeric",month:"short",day:"numeric"})};return i?r.a.createElement(g.a,{open:!0},r.a.createElement(y.a,{color:"inherit"})):r.a.createElement(b.a,{container:!0,direction:"column",alignItems:"stretch",alignContent:"stretch",style:{height:"100%"}},r.a.createElement(b.a,{item:!0,xs:12},!k&&r.a.createElement("h1",null,"Event not found"),k&&r.a.createElement(ee.a,{className:t.root,variant:"outlined",square:!0},r.a.createElement(ae.a,null,r.a.createElement(D.a,{className:t.title,color:"textSecondary",gutterBottom:!0},x(k.date),", ",S(k.date)),r.a.createElement(D.a,{variant:"h5",component:"h2"},k.artists[0].name),r.a.createElement(D.a,{className:t.pos,color:"textSecondary"},k.venue),r.a.createElement(D.a,{variant:"body2",component:"div"},r.a.createElement(D.a,{className:t.pos,color:"textSecondary"},"Artists"),r.a.createElement(b.a,{container:!0,direction:"column",spacing:1},k.artists.map((function(e){return r.a.createElement(b.a,{item:!0,container:!0,key:"".concat(k.id,".").concat(e.name)},r.a.createElement(b.a,{item:!0,xs:4},e.name),r.a.createElement(b.a,{item:!0,xs:4},e.stageTime&&r.a.createElement(w.a,{style:{backgroundColor:a.palette.info.main,color:a.palette.info.contrastText},size:"small",label:e.stageTime})),r.a.createElement(b.a,{item:!0,xs:4},e.videoUrl&&r.a.createElement("a",{href:e.videoUrl},r.a.createElement(w.a,{style:{backgroundColor:a.palette.info.main,color:a.palette.info.contrastText},size:"small",label:"Video"}))))}))),r.a.createElement(b.a,{container:!0,direction:"column",spacing:1,style:{marginTop:10}},k.isSoldOut&&r.a.createElement(b.a,{item:!0},r.a.createElement(w.a,{style:{backgroundColor:a.palette.warning.main,color:a.palette.warning.contrastText},size:"small",label:"Sold Out"})),k.isCancelled&&r.a.createElement(b.a,{item:!0},r.a.createElement(w.a,{style:{backgroundColor:a.palette.error.main,color:a.palette.error.contrastText},size:"small",label:"Cancelled"})),k.priceText&&0===k.priceText.indexOf("\xa3")&&r.a.createElement(b.a,{item:!0},r.a.createElement(w.a,{style:{backgroundColor:a.palette.info.main,color:a.palette.info.contrastText},size:"small",label:k.priceText})),k.notes&&r.a.createElement(b.a,{item:!0},r.a.createElement("span",{style:{}},k.notes))))),r.a.createElement(te.a,null,r.a.createElement(D.a,{variant:"body2",component:"div"},r.a.createElement(b.a,{container:!0,direction:"column",style:{marginLeft:10,marginRight:10}},k.addedDate&&r.a.createElement(b.a,{item:!0},r.a.createElement(D.a,{variant:"caption",display:"block",gutterBottom:!0},"Added: ",x(k.addedDate),","," ",S(k.addedDate))),k.id&&r.a.createElement(b.a,{item:!0},r.a.createElement(D.a,{variant:"caption",display:"block",gutterBottom:!0},"Id: ",k.id))))))))},le=function(){var e=Object(n.useState)(!0),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(m.a)({palette:{type:a?"dark":"light",primary:{main:"#0b5994"},secondary:{main:"#1d83c6"}}});return r.a.createElement(u.a,{theme:c},r.a.createElement(i.a,{basename:"/mui-recommended-gigs-01"},r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/",exact:!0,render:function(){return r.a.createElement(I,{isDarkMode:a,setIsDarkMode:l})}}),r.a.createElement(s.a,{path:"/giglist/:showPastEvents/:days?",render:function(){return r.a.createElement(_,{isDarkMode:a,setIsDarkMode:l})}}),r.a.createElement(s.a,{path:"/gigdetails/:id",render:function(){return r.a.createElement(re,null)}}),r.a.createElement(s.a,{path:"*",render:function(){return r.a.createElement(I,{isDarkMode:a,setIsDarkMode:l})}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(le,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[254,1,2]]]);
//# sourceMappingURL=main.ebfde274.chunk.js.map