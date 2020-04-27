(this["webpackJsonpmui-recommended-gigs-01"]=this["webpackJsonpmui-recommended-gigs-01"]||[]).push([[0],{231:function(e,t,a){e.exports=a(435)},429:function(e,t,a){},435:function(e,t,a){"use strict";a.r(t);a(232),a(241);var n=a(0),r=a.n(n),c=a(59),l=a.n(c),o=(a(429),a(20)),i=a(35),s=a(64),m=a(225),u=a(469),d=a(51),E=a.n(d),f=a(75),p=a(60),h=a(227),b=a(470),g=a(484),v=a(471),y=a(472),w=a(486),j=a(464),D=a(466),k=a(467),O=a(483),x=a(222),S=a.n(x),T=a(436),z=Object(T.a)((function(){return{typographyStyles:{flex:1}}})),C=function(e){var t=e.isDarkMode,a=e.setIsDarkMode,n=z();return r.a.createElement(j.a,{position:"static"},r.a.createElement(D.a,null,r.a.createElement(k.a,{className:n.typographyStyles},"Recommended Gigs"),r.a.createElement(h.a,{title:"use this switch for dark/light mode"},r.a.createElement(S.a,null)),r.a.createElement(O.a,{checked:t,onChange:function(){return a(!t)}})))},M=Object(T.a)((function(e){return{addedTodayNonZero:{backgroundColor:e.palette.success.main,paddingLeft:50,paddingRight:50,borderRadius:5}}})),I=function(e){var t=e.isDarkMode,a=e.setIsDarkMode,c=Object(p.a)(),l=M(),s=Object(n.useState)(!0),m=Object(o.a)(s,2),d=m[0],j=m[1],D=Object(n.useState)({lastUpdated:new Date,shows:[]}),k=Object(o.a)(D,2),O=k[0],x=k[1],S=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(!e.addedDate)return!1;var a=new Date(e.addedDate),n=new Date,r=n.getTime()-a.getTime(),c=864e5,l=t*c,o=r<l;return o};Object(n.useEffect)((function(){(function(){var e=Object(f.a)(E.a.mark((function e(){var t,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("fetchShowsInfo"),"https://show01-cd72d.firebaseio.com/.json",e.next=4,fetch("https://show01-cd72d.firebaseio.com/.json");case 4:return t=e.sent,e.next=7,t.json();case 7:a=e.sent,console.log("fetchShowsInfo","response",a),x(a),j(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var T=(O?O.shows.filter((function(e){return S(e,1)})):[]).length,z=T>0;return r.a.createElement(u.a,{theme:c},r.a.createElement(h.a,{elevation:0,square:!0,style:{height:"100vh"}},r.a.createElement(b.a,{container:!0,direction:"column",justify:"center",spacing:4},r.a.createElement(b.a,{item:!0},r.a.createElement(C,{isDarkMode:t,setIsDarkMode:a})),d?r.a.createElement(g.a,{open:!0},r.a.createElement(v.a,{color:"inherit"})):r.a.createElement(b.a,{item:!0,container:!0,direction:"column",spacing:2,justify:"center",alignItems:"stretch"},r.a.createElement(b.a,{item:!0},r.a.createElement(y.a,{variant:"contained",color:"primary",component:i.b,to:"/giglist/false",fullWidth:!0},r.a.createElement("span",null,"Future Events"),"\xa0"," ",r.a.createElement(w.a,{variant:"default",color:"secondary",size:"small",label:(O?O.shows.filter((function(e){return function(e){if(!e.date)return!1;var t=new Date(e.date);t.setHours(23,59,0,0);var a=new Date;return a.setHours(0,0,0,0),t>=a}(e)})):[]).length}))),r.a.createElement(b.a,{item:!0},r.a.createElement(y.a,{variant:"contained",color:"secondary",component:i.b,to:"/giglist/false/1",fullWidth:!0},r.a.createElement("div",{className:z?l.addedTodayNonZero:void 0},"Added Today\xa0",r.a.createElement(w.a,{variant:"default",color:"primary",size:"small",label:T})))),r.a.createElement(b.a,{item:!0},r.a.createElement(y.a,{variant:"contained",color:"secondary",component:i.b,to:"/giglist/false/3",fullWidth:!0},r.a.createElement("span",null,"Added In Last 3 Days"),"\xa0",r.a.createElement(w.a,{variant:"default",color:"primary",size:"small",label:(O?O.shows.filter((function(e){return S(e,3)})):[]).length}))),r.a.createElement(b.a,{item:!0},r.a.createElement(y.a,{variant:"contained",color:"secondary",component:i.b,to:"/giglist/false/7",fullWidth:!0},r.a.createElement("span",null,"Added In Last 7 Days"),"\xa0",r.a.createElement(w.a,{variant:"default",color:"primary",size:"small",label:(O?O.shows.filter((function(e){return S(e,7)})):[]).length}))),r.a.createElement(b.a,{item:!0},r.a.createElement(y.a,{variant:"contained",color:"secondary",component:i.b,to:"/giglist/true/-1",fullWidth:!0},r.a.createElement("span",null,"All Events"),"\xa0"," ",r.a.createElement(w.a,{variant:"default",color:"primary",size:"small",label:(O?O.shows:[]).length})))))))},B=a(7),N=a(475),A=a(224),W=a.n(A),L=a(477),G=a(479),U=a(473),q=a(476),H=a(478),P=a(474),R=a(485),V=a(468),J=Object(B.a)((function(e){return{head:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},body:{fontSize:14}}}))(U.a),Z=Object(B.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.background.default}}}}))(P.a),F=Object(N.a)({table:{}}),$=function(e){var t=Object(p.a)(),a=F(),c=Object(n.useState)(!0),l=Object(o.a)(c,2),s=l[0],m=l[1],u=Object(n.useState)(e.showPastEvents),d=Object(o.a)(u,1)[0],j=Object(n.useState)(e.days),D=Object(o.a)(j,1)[0],k=Object(n.useState)({lastUpdated:new Date,shows:[]}),O=Object(o.a)(k,2),x=O[0],S=O[1];Object(n.useEffect)((function(){(function(){var e=Object(f.a)(E.a.mark((function e(){var t,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://show01-cd72d.firebaseio.com/.json",e.next=3,fetch("https://show01-cd72d.firebaseio.com/.json");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,S(a),m(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var T=function(e){return!!d||function(e){if(!e.date)return!1;var t=new Date(e.date);t.setHours(23,59,0,0);var a=new Date;return a.setHours(0,0,0,0),t>=a}(e)},z=function(e){return-1===D||function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(!e.addedDate)return!1;var a=new Date(e.addedDate),n=new Date,r=n.getTime()-a.getTime(),c=864e5,l=t*c,o=r<l;return o}(e,D)};return s?r.a.createElement(g.a,{open:!0},r.a.createElement(v.a,{color:"inherit"})):r.a.createElement(q.a,{component:h.a,square:!0},r.a.createElement(L.a,{className:a.table,size:"small","aria-label":"a dense table"},r.a.createElement(H.a,null,r.a.createElement(P.a,null,r.a.createElement(R.a,{smDown:!0},r.a.createElement(J,null,"Day")),r.a.createElement(J,null,"Date"),r.a.createElement(J,null,"Artists"),r.a.createElement(J,null,"Venue"),r.a.createElement(J,null,"Actions"),r.a.createElement(J,null,"\xa0"))),r.a.createElement(G.a,null,function(){var e=x.shows.filter(T);return-1===D?e:e.filter(z)}().map((function(e){return r.a.createElement(Z,{key:Math.random()},r.a.createElement(R.a,{smDown:!0},r.a.createElement(J,null,(a=e.date,new Date(a).toLocaleDateString("en-GB",{weekday:"short"})))),r.a.createElement(J,null,function(e){return new Date(e).toLocaleDateString("en-GB",{year:"numeric",month:"short",day:"numeric"})}(e.date)),r.a.createElement(J,null,r.a.createElement(b.a,{container:!0},r.a.createElement(b.a,{item:!0,xs:11},e.artists.map((function(t){return r.a.createElement("p",{key:"".concat(e.id,".").concat(t.name)},t.name)}))),r.a.createElement(b.a,{item:!0,xs:1},r.a.createElement(V.a,{"aria-label":"details",component:i.b,to:"/gigdetails/".concat(e.id)},r.a.createElement(W.a,null))))),r.a.createElement(J,null,e.venue),r.a.createElement(J,null,r.a.createElement(y.a,{variant:"contained",color:"primary",size:"small",component:i.b,to:"/gigdetails/".concat(e.id)},r.a.createElement("span",null,"View"))),r.a.createElement(J,null,r.a.createElement(b.a,{container:!0,direction:"column",spacing:1},e.isSoldOut&&r.a.createElement(b.a,{item:!0},r.a.createElement(w.a,{style:{backgroundColor:t.palette.warning.main,color:t.palette.warning.contrastText},size:"small",label:"Sold Out"})),e.isCancelled&&r.a.createElement(b.a,{item:!0},r.a.createElement(w.a,{style:{backgroundColor:t.palette.error.main,color:t.palette.error.contrastText},size:"small",label:"Cancelled"})),e.priceText&&0===e.priceText.indexOf("\xa3")&&r.a.createElement(b.a,{item:!0},r.a.createElement(w.a,{style:{backgroundColor:t.palette.info.main,color:t.palette.info.contrastText},size:"small",label:e.priceText})),e.notes&&r.a.createElement(b.a,{item:!0},r.a.createElement("span",{style:{}},e.notes)))));var a})))))},K=function(e){var t=e.isDarkMode,a=e.setIsDarkMode,n=Object(s.f)(),c=n.showPastEvents,l=n.days,o="true"===c,i=void 0===l?-1:+l,m=Object(p.a)();return r.a.createElement(u.a,{theme:m},r.a.createElement(h.a,{elevation:0,square:!0,style:{height:"100%"}},r.a.createElement(b.a,{container:!0,direction:"column",spacing:2},r.a.createElement(b.a,{item:!0},r.a.createElement(C,{isDarkMode:t,setIsDarkMode:a})),r.a.createElement(b.a,{item:!0,container:!0,justify:"center"},r.a.createElement($,{showPastEvents:o,days:i})))))},Q=a(480),X=a(482),Y=a(481),_=Object(N.a)({root:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}}),ee=function(){var e=Object(s.f)(),t=_(),a=Object(p.a)(),c=Object(n.useState)(!0),l=Object(o.a)(c,2),i=l[0],m=l[1],u=Object(n.useState)(e.id),d=Object(o.a)(u,1)[0],h=Object(n.useState)({lastUpdated:new Date,shows:[]}),y=Object(o.a)(h,2),j=y[0],D=y[1];Object(n.useEffect)((function(){(function(){var e=Object(f.a)(E.a.mark((function e(){var t,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://show01-cd72d.firebaseio.com/.json",e.next=3,fetch("https://show01-cd72d.firebaseio.com/.json");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,D(a),m(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var O=function(e){return j.shows.find((function(t){return t.id&&t.id===e}))}(d),x=function(e){return new Date(e).toLocaleDateString("en-GB",{weekday:"short"})},S=function(e){return new Date(e).toLocaleDateString("en-GB",{year:"numeric",month:"short",day:"numeric"})};return i?r.a.createElement(g.a,{open:!0},r.a.createElement(v.a,{color:"inherit"})):r.a.createElement(b.a,{container:!0,direction:"column",alignItems:"stretch",alignContent:"stretch",style:{height:"100%"}},r.a.createElement(b.a,{item:!0,xs:12},!O&&r.a.createElement("h1",null,"Event not found"),O&&r.a.createElement(Q.a,{className:t.root,variant:"outlined",square:!0},r.a.createElement(Y.a,null,r.a.createElement(k.a,{className:t.title,color:"textSecondary",gutterBottom:!0},x(O.date),", ",S(O.date)),r.a.createElement(k.a,{variant:"h5",component:"h2"},O.artists[0].name),r.a.createElement(k.a,{className:t.pos,color:"textSecondary"},O.venue),r.a.createElement(k.a,{variant:"body2",component:"div"},r.a.createElement(k.a,{className:t.pos,color:"textSecondary"},"Artists"),O.artists.map((function(e){return r.a.createElement("div",{key:"".concat(O.id,".").concat(e.name)},e.name,"\xa0",e.stageTime&&r.a.createElement(w.a,{style:{backgroundColor:a.palette.info.main,color:a.palette.info.contrastText},size:"small",label:e.stageTime}),"\xa0",e.videoUrl&&r.a.createElement("a",{href:e.videoUrl},r.a.createElement(w.a,{style:{backgroundColor:a.palette.info.main,color:a.palette.info.contrastText},size:"small",label:"Video"})),"\xa0")})),r.a.createElement(b.a,{container:!0,direction:"column",spacing:1},O.isSoldOut&&r.a.createElement(b.a,{item:!0},r.a.createElement(w.a,{style:{backgroundColor:a.palette.warning.main,color:a.palette.warning.contrastText},size:"small",label:"Sold Out"})),O.isCancelled&&r.a.createElement(b.a,{item:!0},r.a.createElement(w.a,{style:{backgroundColor:a.palette.error.main,color:a.palette.error.contrastText},size:"small",label:"Cancelled"})),O.priceText&&0===O.priceText.indexOf("\xa3")&&r.a.createElement(b.a,{item:!0},r.a.createElement(w.a,{style:{backgroundColor:a.palette.info.main,color:a.palette.info.contrastText},size:"small",label:O.priceText})),O.notes&&r.a.createElement(b.a,{item:!0},r.a.createElement("span",{style:{}},O.notes))))),r.a.createElement(X.a,null,r.a.createElement(k.a,{variant:"body2",component:"div"},r.a.createElement(b.a,{container:!0,direction:"column"},O.addedDate&&r.a.createElement(b.a,{item:!0},r.a.createElement(k.a,{variant:"caption",display:"block",gutterBottom:!0},"Added: ",x(O.addedDate),","," ",S(O.addedDate))),O.id&&r.a.createElement(b.a,{item:!0},r.a.createElement(k.a,{variant:"caption",display:"block",gutterBottom:!0},"Id: ",O.id))))))))},te=function(){var e=Object(n.useState)(!0),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(m.a)({palette:{type:a?"dark":"light",primary:{main:"#0b5994"},secondary:{main:"#1d83c6"}}});return r.a.createElement(u.a,{theme:l},r.a.createElement(i.a,{basename:"/mui-recommended-gigs-01"},r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/",exact:!0,render:function(){return r.a.createElement(I,{isDarkMode:a,setIsDarkMode:c})}}),r.a.createElement(s.a,{path:"/giglist/:showPastEvents/:days?",exact:!0,render:function(){return r.a.createElement(K,{isDarkMode:a,setIsDarkMode:c})}}),r.a.createElement(s.a,{path:"/gigdetails/:id",exact:!0,render:function(){return r.a.createElement(ee,null)}}),r.a.createElement(s.a,{path:"*",render:function(){return r.a.createElement(I,{isDarkMode:a,setIsDarkMode:c})}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[231,1,2]]]);
//# sourceMappingURL=main.7ea27926.chunk.js.map