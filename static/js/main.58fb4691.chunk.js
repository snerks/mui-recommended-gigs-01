(this["webpackJsonpmui-recommended-gigs-01"]=this["webpackJsonpmui-recommended-gigs-01"]||[]).push([[0],{227:function(e,t,a){e.exports=a(432)},425:function(e,t,a){},432:function(e,t,a){"use strict";a.r(t);a(228),a(237);var n=a(0),r=a.n(n),c=a(55),o=a.n(c),l=(a(425),a(26)),i=a(65),s=a(57),m=a(112),u=a(223),d=a(461),h=a(72),p=a.n(h),E=a(107),f=a(433),g=a(462),b=a(473),y=a(463),w=a(464),j=a(458),v=a(459),O=a(460),k=a(472),D=a(220),S=a.n(D),x=a(434),I=Object(x.a)((function(){return{typographyStyles:{flex:1}}})),T=function(e){var t=e.isDarkMode,a=e.setIsDarkMode,n=I();return r.a.createElement(j.a,{position:"static"},r.a.createElement(v.a,null,r.a.createElement(O.a,{className:n.typographyStyles},"Recommended Gigs"),r.a.createElement(f.a,{title:"use this switch for dark/light mode"},r.a.createElement(S.a,null)),r.a.createElement(k.a,{checked:t,onChange:function(){return a(!t)}})))},C=function(){var e=Object(n.useState)(!0),t=Object(l.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!0),s=Object(l.a)(o,2),h=s[0],j=s[1],v=Object(n.useState)({lastUpdated:new Date,shows:[]}),O=Object(l.a)(v,2),k=O[0],D=O[1],S=Object(u.a)({palette:{type:a?"dark":"light",primary:m.a,secondary:m.a}}),x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(!e.addedDate)return!1;var a=new Date(e.addedDate),n=new Date,r=n.getTime()-a.getTime(),c=864e5,o=t*c,l=r<o;return l};return Object(n.useEffect)((function(){(function(){var e=Object(E.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("fetchShowsInfo"),"https://show01-cd72d.firebaseio.com/.json",e.next=4,fetch("https://show01-cd72d.firebaseio.com/.json");case 4:return t=e.sent,e.next=7,t.json();case 7:a=e.sent,console.log("fetchShowsInfo","response",a),D(a),j(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(d.a,{theme:S},r.a.createElement(f.a,{elevation:0,square:!0,style:{height:"100%"}},r.a.createElement(g.a,{container:!0,direction:"column",justify:"center",spacing:4},r.a.createElement(g.a,{item:!0},r.a.createElement(T,{isDarkMode:a,setIsDarkMode:c})),h?r.a.createElement(b.a,{open:!0},r.a.createElement(y.a,{color:"inherit"})):r.a.createElement(g.a,{item:!0,container:!0,direction:"column",spacing:2,alignItems:"center"},r.a.createElement(g.a,{item:!0},r.a.createElement(w.a,{variant:"contained",color:"primary",component:i.b,to:"/giglist",fullWidth:!0},"Gig List ",h?null:r.a.createElement("span",null,"\xa0(",(k?k.shows:[]).length,")"))),r.a.createElement(g.a,{item:!0},r.a.createElement(w.a,{variant:"contained",color:"secondary",component:i.b,to:"/giglist"},"Added Today ",h?null:r.a.createElement("span",null,"\xa0(",(k?k.shows.filter((function(e){return x(e,1)})):[]).length,")"))),r.a.createElement(g.a,{item:!0},r.a.createElement(w.a,{variant:"contained",color:"secondary",component:i.b,to:"/giglist"},"Added In Last 3 Days ",h?null:r.a.createElement("span",null,"\xa0(",(k?k.shows.filter((function(e){return x(e,3)})):[]).length,")"))),r.a.createElement(g.a,{item:!0},r.a.createElement(w.a,{variant:"contained",color:"secondary",component:i.b,to:"/giglist"},"Added In Last 7 Days ",h?null:r.a.createElement("span",null,"\xa0(",(k?k.shows.filter((function(e){return x(e,7)})):[]).length,")")))))))},M=a(6),z=a(467),L=a(221),A=a(469),B=a(471),G=a(465),W=a(468),q=a(470),J=a(466),N=a(474),U=Object(M.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}}))(G.a),R=Object(M.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.background.default}}}}))(J.a),V=Object(z.a)({table:{minWidth:650}});function $(){var e=Object(L.a)(),t=V(),a=Object(n.useState)(!0),c=Object(l.a)(a,2),o=c[0],i=c[1],s=Object(n.useState)({lastUpdated:new Date,shows:[]}),m=Object(l.a)(s,2),u=m[0],d=m[1];return Object(n.useEffect)((function(){(function(){var e=Object(E.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("fetchShowsInfo"),"https://show01-cd72d.firebaseio.com/.json",e.next=4,fetch("https://show01-cd72d.firebaseio.com/.json");case 4:return t=e.sent,e.next=7,t.json();case 7:a=e.sent,console.log("fetchShowsInfo","response",a),d(a),i(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),o?r.a.createElement(b.a,{open:!0},r.a.createElement(y.a,{color:"inherit"})):r.a.createElement(W.a,{component:f.a},r.a.createElement(A.a,{className:t.table,size:"small","aria-label":"a dense table"},r.a.createElement(q.a,null,r.a.createElement(J.a,null,r.a.createElement(U,null,"Day"),r.a.createElement(U,null,"Date"),r.a.createElement(U,null,"Artists"),r.a.createElement(U,null,"Venue"),r.a.createElement(U,null,"\xa0"))),r.a.createElement(B.a,null,u.shows.filter((function(e){return!0})).map((function(t){return r.a.createElement(R,{key:Math.random()},r.a.createElement(U,null,(a=t.date,new Date(a).toLocaleDateString("en-GB",{weekday:"short"}))),r.a.createElement(U,null,function(e){return new Date(e).toLocaleDateString("en-GB",{year:"numeric",month:"short",day:"numeric"})}(t.date)),r.a.createElement(U,null,t.artists.map((function(e){return r.a.createElement("p",{key:"".concat(t.id,".").concat(e.name)},e.name)}))),r.a.createElement(U,null,t.venue),r.a.createElement(U,null,r.a.createElement(g.a,{container:!0,direction:"column",spacing:1},t.isSoldOut&&r.a.createElement(g.a,{item:!0},r.a.createElement(N.a,{style:{backgroundColor:e.palette.warning.main,color:e.palette.warning.contrastText},size:"small",label:"Sold Out"})),t.isCancelled&&r.a.createElement(g.a,{item:!0},r.a.createElement(N.a,{style:{backgroundColor:e.palette.error.main,color:e.palette.error.contrastText},size:"small",label:"Cancelled"})),t.priceText&&0===t.priceText.indexOf("\xa3")&&r.a.createElement(g.a,{item:!0},r.a.createElement(N.a,{style:{backgroundColor:e.palette.info.main,color:e.palette.info.contrastText},size:"small",label:t.priceText})),t.notes&&r.a.createElement(g.a,{item:!0},r.a.createElement("span",{style:{}},t.notes)))));var a})))))}var F=function(){var e=Object(n.useState)(!0),t=Object(l.a)(e,2),a=t[0],c=t[1],o=Object(u.a)({palette:{type:a?"dark":"light",primary:m.a,secondary:m.a}});return r.a.createElement(d.a,{theme:o},r.a.createElement(f.a,{elevation:0,square:!0,style:{height:"100%"}},r.a.createElement(g.a,{container:!0,direction:"column"},r.a.createElement(g.a,{item:!0},r.a.createElement(T,{isDarkMode:a,setIsDarkMode:c})),r.a.createElement(g.a,{item:!0,container:!0,justify:"center"},r.a.createElement($,null)))))},H=function(){var e=Object(n.useState)(!0),t=Object(l.a)(e,1)[0],a=Object(u.a)({palette:{type:t?"dark":"light",primary:m.a,secondary:m.a}});return r.a.createElement(d.a,{theme:a},r.a.createElement(i.a,{basename:"/mui-recommended-gigs-01"},r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/",exact:!0,component:C}),r.a.createElement(s.a,{path:"/giglist",exact:!0,component:F}),r.a.createElement(s.a,{path:"/",render:function(){return r.a.createElement("div",null,"404")}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[227,1,2]]]);
//# sourceMappingURL=main.58fb4691.chunk.js.map