(this["webpackJsonpmui-recommended-gigs-01"]=this["webpackJsonpmui-recommended-gigs-01"]||[]).push([[0],{341:function(e,t,a){e.exports=a(546)},539:function(e,t,a){},546:function(e,t,a){"use strict";a.r(t);a(342),a(351);var n=a(0),r=a.n(n),c=a(29),o=a.n(c),l=(a(539),a(10)),i=a(37),s=a(108),m=a(324),u=a(607),d=a(50),p=a.n(d),f=a(82),E=a(40),h=a(327),b=a(608),g=a(609),v=a(610),y=a(605),j=a(631),O=a(602),w=a(604),x=a(547),D=a(606),k=a(313),S=a.n(k),T=a(312),C=a.n(T),M=a(553),I=Object(M.a)((function(){return{typographyStyles:{flex:1}}})),z=function(e){var t=e.isDarkMode,a=e.setIsDarkMode,n=I();return r.a.createElement(O.a,{position:"static"},r.a.createElement(w.a,null,r.a.createElement(x.a,{className:n.typographyStyles},"Gigs of Note"),r.a.createElement(y.a,{component:i.b,to:"/",size:"small"},r.a.createElement(C.a,null)),r.a.createElement(h.a,{title:"use this switch for dark/light mode"},r.a.createElement(S.a,null)),r.a.createElement(D.a,{checked:t,onChange:function(){return a(!t)}})))},U=a(314),F=a.n(U),A=Object(M.a)((function(e){return{addedTodayNonZero:{backgroundColor:e.palette.success.main,paddingLeft:50,paddingRight:50,borderRadius:5}}})),L=function(e){var t=e.isDarkMode,a=e.setIsDarkMode,c=Object(E.a)(),o=A(),s=Object(n.useState)(!0),m=Object(l.a)(s,2),d=m[0],O=m[1],w=Object(n.useState)({lastUpdated:new Date,shows:[]}),x=Object(l.a)(w,2),D=x[0],k=x[1],S=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(!e.addedDate)return!1;var a=new Date(e.addedDate),n=new Date,r=n.getTime()-a.getTime(),c=864e5,o=t*c,l=r<o;return l};Object(n.useEffect)((function(){(function(){var e=Object(f.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("fetchShowsInfo"),"https://show01-cd72d.firebaseio.com/.json",e.next=4,fetch("https://show01-cd72d.firebaseio.com/.json");case 4:return t=e.sent,e.next=7,t.json();case 7:a=e.sent,console.log("fetchShowsInfo","response",a),k(a),O(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var T=(D?D.shows.filter((function(e){return S(e,1)})):[]).length,C=T>0;return r.a.createElement(u.a,{theme:c},r.a.createElement(h.a,{elevation:0,square:!0,style:{height:"100vh"}},r.a.createElement(b.a,{container:!0,direction:"column",justify:"center",spacing:4},r.a.createElement(b.a,{item:!0},r.a.createElement(z,{isDarkMode:t,setIsDarkMode:a})),d?r.a.createElement(g.a,{open:!0},r.a.createElement(v.a,{color:"inherit"})):r.a.createElement(b.a,{item:!0,container:!0,direction:"column",spacing:2,justify:"center",alignItems:"stretch"},r.a.createElement(b.a,{item:!0},r.a.createElement(y.a,{variant:"contained",color:"primary",component:i.b,to:"/giglist/false",fullWidth:!0},r.a.createElement("span",null,"Future Events"),"\xa0"," ",r.a.createElement(j.a,{variant:"default",color:"secondary",size:"small",label:(D?D.shows.filter((function(e){return function(e){if(!e.date)return!1;var t=new Date(e.date);t.setHours(23,59,0,0);var a=new Date;return a.setHours(0,0,0,0),t>=a}(e)})):[]).length}))),r.a.createElement(b.a,{item:!0},r.a.createElement(y.a,{variant:"contained",color:"secondary",component:i.b,to:"/giglist/false/1",fullWidth:!0},r.a.createElement("div",{className:C?o.addedTodayNonZero:void 0},"Added Today\xa0",r.a.createElement(j.a,{variant:"default",color:"primary",size:"small",label:T})))),r.a.createElement(b.a,{item:!0},r.a.createElement(y.a,{variant:"contained",color:"secondary",component:i.b,to:"/giglist/false/3",fullWidth:!0},r.a.createElement("span",null,"Added In Last 3 Days"),"\xa0",r.a.createElement(j.a,{variant:"default",color:"primary",size:"small",label:(D?D.shows.filter((function(e){return S(e,3)})):[]).length}))),r.a.createElement(b.a,{item:!0},r.a.createElement(y.a,{variant:"contained",color:"secondary",component:i.b,to:"/giglist/false/7",fullWidth:!0},r.a.createElement("span",null,"Added In Last 7 Days"),"\xa0",r.a.createElement(j.a,{variant:"default",color:"primary",size:"small",label:(D?D.shows.filter((function(e){return S(e,7)})):[]).length}))),r.a.createElement(b.a,{item:!0},r.a.createElement(y.a,{variant:"contained",color:"secondary",component:i.b,to:"/giglist/true/-1",fullWidth:!0},r.a.createElement("span",null,"All Events"),"\xa0"," ",r.a.createElement(j.a,{variant:"default",color:"primary",size:"small",label:(D?D.shows:[]).length}))),r.a.createElement(b.a,{item:!0},r.a.createElement(y.a,{variant:"contained",color:"secondary",component:i.b,to:"/editgigdetails/",fullWidth:!0,startIcon:r.a.createElement(F.a,null)},r.a.createElement("span",null,"Add"),"\xa0"))))))},V=a(2),B=a(6),N=a(613),P=a(317),W=a.n(P),q=a(617),G=a(619),H=a(611),J=a(616),R=a(618),Z=a(612),$=a(614),K=a(627),Q=a(548),X=a(15),Y=Object(B.a)((function(e){return{head:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},body:{fontSize:14}}}))(H.a),_=Object(B.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.background.default}}}}))(Z.a),ee=Object(N.a)({table:{}}),te=function(e){var t=e.placeholder,a=Object(V.a)(e,["placeholder"]),n=Object(X.f)(a),c=Object(l.a)(n,2),o=c[0],i=c[1],s=i.error&&i.touched?i.error:"";return r.a.createElement($.a,Object.assign({placeholder:t},o,{helperText:s,autoComplete:"off",error:!!s}))},ae=function(e){var t=Object(E.a)(),a=ee(),c=Object(n.useState)(!0),o=Object(l.a)(c,2),s=o[0],m=o[1],u=Object(n.useState)(e.showPastEvents),d=Object(l.a)(u,1)[0],O=Object(n.useState)(e.days),w=Object(l.a)(O,1)[0],x=Object(n.useState)([]),D=Object(l.a)(x,2),k=D[0],S=D[1],T=Object(n.useState)({lastUpdated:new Date,shows:[]}),C=Object(l.a)(T,2),M=(C[0],C[1]),I=function(e){return!!d||function(e){if(!e.date)return!1;var t=new Date(e.date);t.setHours(23,59,0,0);var a=new Date;return a.setHours(0,0,0,0),t>=a}(e)},z=function(e){return-1===w||function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(!e.addedDate)return!1;var a=new Date(e.addedDate),n=new Date,r=n.getTime()-a.getTime(),c=864e5,o=t*c,l=r<o;return l}(e,w)},U=function(e){var t=e;return t=t.filter(I),-1!==w&&(t=t.filter(z)),t},F=function(e){var t=k;return e&&(t=function(e){return console.log("getArtistFilterShows"),e?k.filter((function(t){return!e||t.artists.reduce((function(e,t,a){var n=t.name;return 0===a?n:e+" "+n}),"").toLowerCase().indexOf(e.toLowerCase())>-1})):k}(e)),t};return Object(n.useEffect)((function(){(function(){var e=Object(f.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://show01-cd72d.firebaseio.com/.json",e.next=3,fetch("https://show01-cd72d.firebaseio.com/.json");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,M(a),S(U(a.shows)),m(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),s?r.a.createElement(g.a,{open:!0},r.a.createElement(v.a,{color:"inherit"})):r.a.createElement(b.a,{container:!0,direction:"column"},r.a.createElement(b.a,{item:!0},r.a.createElement(X.d,{initialValues:{artistFilter:""},onSubmit:function(){}},(function(e){var n=e.values,c=(e.errors,e.isSubmitting,e.handleChange,F(n.artistFilter));return r.a.createElement(b.a,{container:!0,direction:"column"},r.a.createElement(b.a,{item:!0,container:!0},r.a.createElement(b.a,{item:!0},r.a.createElement(X.c,{style:{padding:"0 30px 15px 15px"}},r.a.createElement(te,{placeholder:"artist filter",name:"artistFilter",type:"input"}))),r.a.createElement(b.a,{item:!0},r.a.createElement(j.a,{variant:"default",color:"secondary",size:"small",label:c.length}))),r.a.createElement(b.a,{item:!0},r.a.createElement(J.a,{component:h.a,square:!0},r.a.createElement(q.a,{className:a.table,size:"small","aria-label":"a dense table"},r.a.createElement(R.a,null,r.a.createElement(Z.a,null,r.a.createElement(K.a,{smDown:!0},r.a.createElement(Y,null,"Day")),r.a.createElement(Y,null,"Date"),r.a.createElement(Y,null,"Artists"),r.a.createElement(Y,null,"Venue"),r.a.createElement(Y,null,"Actions"),r.a.createElement(Y,null,"\xa0"))),r.a.createElement(G.a,null,c.map((function(e){return r.a.createElement(_,{key:Math.random()},r.a.createElement(K.a,{smDown:!0},r.a.createElement(Y,null,(a=e.date,new Date(a).toLocaleDateString("en-GB",{weekday:"short"})))),r.a.createElement(Y,null,function(e){return new Date(e).toLocaleDateString("en-GB",{year:"numeric",month:"short",day:"numeric"})}(e.date)),r.a.createElement(Y,null,r.a.createElement(b.a,{container:!0},r.a.createElement(b.a,{item:!0,xs:11},e.artists.map((function(t){return r.a.createElement("p",{key:"".concat(e.id,".").concat(t.name)},t.name)}))),r.a.createElement(b.a,{item:!0,xs:1},r.a.createElement(Q.a,{"aria-label":"details",component:i.b,to:"/gigdetails/".concat(e.id)},r.a.createElement(W.a,null))))),r.a.createElement(Y,null,e.venue),r.a.createElement(Y,null,r.a.createElement(y.a,{variant:"contained",color:"primary",size:"small",component:i.b,to:"/editgigdetails/".concat(e.id)},r.a.createElement("span",null,"Edit"))),r.a.createElement(Y,null,r.a.createElement(b.a,{container:!0,direction:"column",spacing:1},e.isSoldOut&&r.a.createElement(b.a,{item:!0},r.a.createElement(j.a,{style:{backgroundColor:t.palette.warning.main,color:t.palette.warning.contrastText},size:"small",label:"Sold Out"})),e.isCancelled&&r.a.createElement(b.a,{item:!0},r.a.createElement(j.a,{style:{backgroundColor:t.palette.error.main,color:t.palette.error.contrastText},size:"small",label:"Cancelled"})),e.priceText&&0===e.priceText.indexOf("\xa3")&&r.a.createElement(b.a,{item:!0},r.a.createElement(j.a,{style:{backgroundColor:t.palette.info.main,color:t.palette.info.contrastText},size:"small",label:e.priceText})),e.notes&&r.a.createElement(b.a,{item:!0},r.a.createElement("span",{style:{}},e.notes)))));var a})))))))}))))},ne=function(e){var t=e.isDarkMode,a=e.setIsDarkMode,n=Object(s.f)(),c=n.showPastEvents,o=n.days,l="true"===c,i=void 0===o?-1:+o,m=Object(E.a)();return r.a.createElement(u.a,{theme:m},r.a.createElement(h.a,{elevation:0,square:!0,style:{height:"100%"}},r.a.createElement(b.a,{container:!0,direction:"column",spacing:1},r.a.createElement(b.a,{item:!0},r.a.createElement(z,{isDarkMode:t,setIsDarkMode:a})),r.a.createElement(b.a,{item:!0,container:!0,justify:"center"},r.a.createElement(ae,{showPastEvents:l,days:i})))))},re=a(632),ce=a(620),oe=a(622),le=a(621),ie=Object(N.a)((function(e){return Object(re.a)({root:{backgroundColor:e.palette.background.default},title:{fontSize:14}})})),se=function(){var e=Object(s.f)(),t=ie(),a=Object(E.a)(),c=Object(n.useState)(!0),o=Object(l.a)(c,2),i=o[0],m=o[1],u=Object(n.useState)(e.id),d=Object(l.a)(u,1)[0],h=Object(n.useState)({lastUpdated:new Date,shows:[]}),y=Object(l.a)(h,2),O=y[0],w=y[1];Object(n.useEffect)((function(){(function(){var e=Object(f.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://show01-cd72d.firebaseio.com/.json",e.next=3,fetch("https://show01-cd72d.firebaseio.com/.json");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,w(a),m(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var D=function(e){return O.shows.find((function(t){return t.id&&t.id===e}))}(d),k=function(e){return new Date(e).toLocaleDateString("en-GB",{weekday:"short"})},S=function(e){return new Date(e).toLocaleDateString("en-GB",{year:"numeric",month:"short",day:"numeric"})};return i?r.a.createElement(g.a,{open:!0},r.a.createElement(v.a,{color:"inherit"})):r.a.createElement(x.a,{component:"div",className:t.root,style:{height:"100vh"}},r.a.createElement(b.a,{container:!0,direction:"column",alignItems:"stretch",alignContent:"stretch",style:{height:"100%"}},r.a.createElement(b.a,{item:!0,xs:12},!D&&r.a.createElement("h1",null,"Event not found"),D&&r.a.createElement(ce.a,{className:t.root,variant:"outlined",square:!0},r.a.createElement(le.a,null,r.a.createElement(x.a,{className:t.title,color:"textSecondary",gutterBottom:!0},k(D.date),", ",S(D.date)),r.a.createElement(x.a,{variant:"h5",component:"h2"},D.artists[0].name),r.a.createElement(x.a,{color:"textSecondary"},D.venue),r.a.createElement(x.a,{variant:"body2",component:"div",style:{marginTop:15}},r.a.createElement(x.a,{color:"textSecondary"},"Artists"),r.a.createElement(b.a,{container:!0,direction:"column",spacing:1},D.artists.map((function(e){return r.a.createElement(b.a,{item:!0,container:!0,key:"".concat(D.id,".").concat(e.name)},r.a.createElement(b.a,{item:!0,xs:4},e.name),r.a.createElement(b.a,{item:!0,xs:4},e.stageTime&&r.a.createElement(j.a,{style:{backgroundColor:a.palette.info.main,color:a.palette.info.contrastText},size:"small",label:e.stageTime})),r.a.createElement(b.a,{item:!0,xs:4},e.videoUrl&&r.a.createElement("a",{href:e.videoUrl},r.a.createElement(j.a,{style:{backgroundColor:a.palette.info.main,color:a.palette.info.contrastText},size:"small",label:"Video"}))))}))),r.a.createElement(b.a,{container:!0,direction:"column",spacing:1,style:{marginTop:10}},D.isSoldOut&&r.a.createElement(b.a,{item:!0},r.a.createElement(j.a,{style:{backgroundColor:a.palette.warning.main,color:a.palette.warning.contrastText},size:"small",label:"Sold Out"})),D.isCancelled&&r.a.createElement(b.a,{item:!0},r.a.createElement(j.a,{style:{backgroundColor:a.palette.error.main,color:a.palette.error.contrastText},size:"small",label:"Cancelled"})),D.priceText&&0===D.priceText.indexOf("\xa3")&&r.a.createElement(b.a,{item:!0},r.a.createElement(j.a,{style:{backgroundColor:a.palette.info.main,color:a.palette.info.contrastText},size:"small",label:D.priceText})),D.notes&&r.a.createElement(b.a,{item:!0},r.a.createElement("span",{style:{}},D.notes))))),r.a.createElement(oe.a,null,r.a.createElement(x.a,{variant:"body2",component:"div"},r.a.createElement(b.a,{container:!0,direction:"column",style:{marginLeft:10,marginRight:10}},D.addedDate&&r.a.createElement(b.a,{item:!0},r.a.createElement(x.a,{variant:"caption",display:"block",gutterBottom:!0},"Added: ",k(D.addedDate),","," ",S(D.addedDate))),D.id&&r.a.createElement(b.a,{item:!0},r.a.createElement(x.a,{variant:"caption",display:"block",gutterBottom:!0},"Id: ",D.id)))))))))},me=a(25),ue=a(197),de=a(322),pe=a(623),fe=a(628),Ee=a(625),he=a(23),be=a(323),ge=a(121),ve=a(320),ye=a.n(ve),je=a(321),Oe=a.n(je),we=a(630),xe=function(e){var t;return(t=[]).concat.apply(t,Object(me.a)(e))},De=a(626),ke=a(624),Se=a(325),Te=De.a,Ce=Object(ke.a)(),Me=function(e){var t=e.textFieldProps,a=Object(V.a)(e,["textFieldProps"]),n=r.a.useState(null),c=Object(l.a)(n,2),o=(c[0],c[1],a.form),i=(o.setTouched,o.setFieldValue),s=(o.touched,Object(Se.a)(a)),m=s.error,u=s.helperText,d=Object(V.a)(s,["error","helperText"]),p=d.name;return r.a.createElement(Te,Object.assign({},a,d,{onChange:function(e,t){t&&t.inputValue?i(p,t.inputValue):i(p,t||"")},filterOptions:function(e,t){var a=Ce(e,t);return""!==t.inputValue&&a.push({inputValue:t.inputValue,text:'Add "'.concat(t.inputValue,'"')}),a},selectOnFocus:!0,clearOnBlur:!0,getOptionLabel:function(e){return"string"===typeof e?e:e.text||""},renderInput:function(e){return r.a.createElement($.a,Object.assign({},e,t,{helperText:u,error:m}))}}))},Ie=function(e){var t=e.label,a=Object(V.a)(e,["label"]),n=Object(X.f)(a),c=Object(l.a)(n,1)[0];return r.a.createElement(pe.a,Object.assign({},c,{control:r.a.createElement(fe.a,null),label:t}))},ze=function(e){var t=e.label,a=e.placeholder,n=Object(V.a)(e,["label","placeholder"]),c=Object(X.f)(n),o=Object(l.a)(c,2),i=o[0],s=o[1],m=s.error&&s.touched?s.error:"";return r.a.createElement($.a,Object.assign({placeholder:a},i,{value:i.value||"",helperText:m,autoComplete:"off",error:!!m,fullWidth:!0,label:t||null}))},Ue=ge.c({venue:ge.d().required(),date:ge.b().required(),artists:ge.a().of(ge.c({name:ge.d().required()}))}),Fe=function(e){var t=e.isDarkMode,a=e.setIsDarkMode,c=e.history,o=Object(s.f)(),i=Object(n.useState)(!0),m=Object(l.a)(i,2),u=m[0],d=m[1],E=Object(n.useState)(o.id),j=Object(l.a)(E,1)[0],O=Object(n.useState)({lastUpdated:new Date,shows:[]}),w=Object(l.a)(O,2),D=w[0],k=w[1],S=Object(n.useState)([]),T=Object(l.a)(S,2),C=T[0],M=T[1],I=Object(n.useState)([]),U=Object(l.a)(I,2),F=U[0],A=U[1];Object(n.useEffect)((function(){(function(){var e=Object(f.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://show01-cd72d.firebaseio.com/.json?print=pretty",e.next=3,fetch("https://show01-cd72d.firebaseio.com/.json?print=pretty");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,k(a),B(a),V(a),d(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var L=function(e,t){return(e=e.toLowerCase())>(t=t.toLowerCase())?1:e<t?-1:0},V=function(e){if(e){var t=e.shows.map((function(e){return e.venue})),a=Array.from(new Set(t.map((function(e){return e}))));a.sort(L),M(a)}},B=function(e){if(e){var t=e.shows.map((function(e){return e.artists.map((function(e){return e.name}))})),a=xe(t),n=Array.from(new Set(a.map((function(e){return e}))));n.sort(L),A(n)}},N=function(){var e=Object(f.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"https://show01-cd72d.firebaseio.com/.json",a={method:"PUT",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(t)},fetch("https://show01-cd72d.firebaseio.com/.json",a).then((function(e){return e.json()})).then((function(e){console.log("PUT Success",e),c.goBack()})).catch((function(e){return console.log("PUT error",e)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(e){console.log("submitShow",e);var t=!e.id;t&&(e.id=Object(we.a)(),e.addedDate=new Date((new Date).toISOString().substring(0,10)));var a=D.shows.findIndex((function(t){return t.id===e.id}));t||(D.shows[a]=Object(ue.a)({},e),D.shows[a].artists=Object(me.a)(e.artists));var n=D.shows[a];console.log("Submit Show",n);var r=t?e:D.shows[a];r&&(r.date=new Date(new Date(r.date).toISOString().substring(0,10)),void 0!==r.notes&&(r.notes=""===r.notes.trim()?void 0:r.notes.trim()),void 0!==r.priceText&&(r.priceText=""===r.priceText.trim()?void 0:r.priceText.trim()),r.artists=r.artists.map((function(e){var t=Object(ue.a)({},e);return void 0!==e.stageTime&&(t.stageTime=""===e.stageTime.trim()?void 0:e.stageTime.trim()),void 0!==e.videoUrl&&(t.videoUrl=""===e.videoUrl.trim()?void 0:e.videoUrl.trim()),t.id=void 0,t})));var c=Object(me.a)(D.shows),o=Object(ue.a)({},D,{shows:Object(me.a)(c)});o.lastUpdated=new Date((new Date).toISOString().substring(0,10)),t&&r&&(o.shows.push(r),function(e){e.shows.sort((function(e,t){var a=new Date(e.date),n=new Date(t.date),r=a.getTime(),c=n.getTime();return r===c?void 0===e.id&&void 0===t.id?0:void 0===e.id?-1:void 0===t.id?1:e.id<t.id?-1:e.id>t.id?1:0:r-c}))}(o)),N(o)},W=j?function(e){return D.shows.find((function(t){return t.id&&t.id===e}))}(j):null,q=W||{addedDate:new Date,venue:"",date:new Date,notes:"",priceText:"",isSoldOut:!1,isCancelled:!1,artists:[{name:"",stageTime:"",videoUrl:"",id:""+Math.random()}]};return console.log("initialValues",q),u?r.a.createElement(g.a,{open:!0},r.a.createElement(v.a,{color:"inherit"})):r.a.createElement(h.a,{elevation:0,square:!0,style:{height:"100%"}},r.a.createElement(b.a,{container:!0,direction:"column"},r.a.createElement(b.a,{item:!0},r.a.createElement(z,{isDarkMode:t,setIsDarkMode:a})),r.a.createElement(b.a,{item:!0,container:!0,alignContent:"stretch"},r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement("div",{style:{margin:15}},r.a.createElement(X.d,{initialValues:q,validationSchema:Ue,onSubmit:function(e,t){var a=t.setSubmitting;t.resetForm;a(!0),console.log("submit",e),P(e),a(!1)}},(function(e){var t=e.values,a=(e.errors,e.isSubmitting);e.handleChange,e.handleBlur,e.handleSubmit;return r.a.createElement(b.a,{container:!0},r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(X.c,null,r.a.createElement(b.a,{container:!0,spacing:2,direction:"column"},r.a.createElement(b.a,{item:!0},r.a.createElement(he.a,{utils:de.a},r.a.createElement(X.a,{component:be.a,autoOk:!0,name:"date",label:"Event Date",disableToolbar:!0,variant:"inline",format:"dd MMMM yyyy",fullWidth:!0}))),r.a.createElement(b.a,{item:!0},r.a.createElement(X.a,{name:"venue",component:Me,label:"Venue",options:C.map((function(e){return{text:e}})),textFieldProps:{fullWidth:!0},freeSolo:!0,selectOnFocus:!0,autoSelect:!0}))),r.a.createElement(b.a,{container:!0,direction:"column",style:{marginTop:10}},r.a.createElement(b.a,{item:!0,container:!0},r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(X.b,{name:"artists"},(function(e){return r.a.createElement("div",null,r.a.createElement(b.a,{container:!0,direction:"column"},r.a.createElement(b.a,{item:!0,container:!0,justify:"flex-start",alignItems:"center",spacing:2},r.a.createElement(b.a,{item:!0},r.a.createElement(Ee.a,{badgeContent:t.artists.length,color:"primary"},r.a.createElement(x.a,null,"Artists"))),r.a.createElement(b.a,{item:!0},r.a.createElement(Q.a,{"aria-label":"add",onClick:function(){return e.push({name:"",stageTime:"",videoUrl:"",id:""+Math.random()})}},r.a.createElement(ye.a,null)))),r.a.createElement("div",null,t.artists.map((function(t,a){var n="artists.".concat(a,".name"),c="artists.".concat(a,".stageTime"),o="artists.".concat(a,".videoUrl");return r.a.createElement(b.a,{item:!0,container:!0,xs:12,key:t.id||Math.random()},r.a.createElement(b.a,{item:!0,xs:9,sm:3},r.a.createElement(X.a,{name:n,component:Me,label:"Name",options:F.map((function(e){return{text:e}})),selectOnFocus:!0,freeSolo:!0,textFieldProps:{fullWidth:!0}})),r.a.createElement(K.a,{smDown:!0},r.a.createElement(b.a,{item:!0,xs:3},r.a.createElement(ze,{placeholder:"stage time",name:c}))),r.a.createElement(K.a,{smDown:!0},r.a.createElement(b.a,{item:!0,xs:3},r.a.createElement(ze,{placeholder:"video url",name:o}))),r.a.createElement(b.a,{item:!0,xs:3},r.a.createElement(Q.a,{size:"small","aria-label":"delete",onClick:function(){return e.remove(a)}},r.a.createElement(Oe.a,null))))})))))}))))),r.a.createElement(b.a,{container:!0,spacing:2,direction:"column",style:{marginTop:15}},r.a.createElement(b.a,{item:!0},r.a.createElement(ze,{placeholder:"notes",name:"notes",type:"input",label:"Notes"})),r.a.createElement(b.a,{item:!0},r.a.createElement(ze,{placeholder:"price",name:"priceText",type:"input",label:"Price"}))),r.a.createElement(Ie,{name:"isSoldOut",type:"checkbox",label:"Sold Out?"}),r.a.createElement(Ie,{name:"isCancelled",type:"checkbox",label:"Cancelled?"}),r.a.createElement(b.a,{item:!0,container:!0,justify:"flex-end",style:{paddingTop:5}},r.a.createElement(y.a,{disabled:a,type:"submit",variant:"contained",color:"primary",size:"small"},"save")))))})))))))},Ae=function(){var e=Object(n.useState)(!0),t=Object(l.a)(e,2),a=t[0],c=t[1],o=Object(m.a)({palette:{type:a?"dark":"light",primary:{main:"#0b5994"},secondary:{main:"#1d83c6"}}});return r.a.createElement(u.a,{theme:o},r.a.createElement(i.a,{basename:"/mui-recommended-gigs-01"},r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/",exact:!0,render:function(){return r.a.createElement(L,{isDarkMode:a,setIsDarkMode:c})}}),r.a.createElement(s.a,{path:"/giglist/:showPastEvents/:days?",render:function(){return r.a.createElement(ne,{isDarkMode:a,setIsDarkMode:c})}}),r.a.createElement(s.a,{path:"/gigdetails/:id",render:function(){return r.a.createElement(se,null)}}),r.a.createElement(s.a,{path:"/editgigdetails/:id?",render:function(e){var t=e.history,n=e.location,o=e.match;return r.a.createElement(Fe,{isDarkMode:a,setIsDarkMode:c,history:t,location:n,match:o})}}),r.a.createElement(s.a,{path:"*",render:function(){return r.a.createElement(L,{isDarkMode:a,setIsDarkMode:c})}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[341,1,2]]]);
//# sourceMappingURL=main.5572c8ff.chunk.js.map