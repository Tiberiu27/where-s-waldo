(this["webpackJsonpwheres-waldo"]=this["webpackJsonpwheres-waldo"]||[]).push([[0],{27:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){},35:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/picture.8b871ac1.jpg"},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var n=c(4),a=c.n(n),r=c(21),o=c.n(r),s=(c(27),c(7)),i=(c(28),c(29),c(10)),u=c(12),j=c.n(u),d=c(15);c(35),c(36);i.a.initializeApp({apiKey:"AIzaSyD4FALvgYpL3k6ao883WylW2CuZ0SaREwg",authDomain:"wheres-waldo-27ba6.firebaseapp.com",projectId:"wheres-waldo-27ba6",storageBucket:"wheres-waldo-27ba6.appspot.com",messagingSenderId:"138183533515",appId:"1:138183533515:web:be92d28cfc57fa54f64c4e"});var l=i.a.firestore(),b=c(2),O=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),c=t[0],a=t[1];Object(n.useEffect)((function(){r()}),[]);var r=function(){var e=Object(d.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[{id:"21321313",name:"Name",score:"Score"}],c=l.collection("leaderboard").orderBy("score","asc"),e.next=4,c.get();case 4:e.sent.docs.forEach((function(e){return t.push(e.data())})),a(t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsx)("div",{id:"leaderboard",children:c.map((function(e){return Object(b.jsxs)("div",{className:"entry",children:[Object(b.jsx)("h4",{children:e.name}),Object(b.jsxs)("h3",{children:[e.score," seconds"]})]},e.id)}))})},f=function(e){var t=Object(n.useState)("Stranger"),c=Object(s.a)(t,2),a=c[0],r=c[1],o=Object(n.useState)(0),u=Object(s.a)(o,2),j=u[0],d=u[1],l=Object(n.useState)(!1),f=Object(s.a)(l,2),h=f[0],p=f[1],x=e.gameOver,m=e.charsFound,v=e.setScore;Object(n.useEffect)((function(){var e;return x||(e=setInterval((function(){d(j+1)}),1e3)),function(){return clearInterval(e)}})),Object(n.useEffect)((function(){x&&v(j)})),Object(n.useEffect)((function(){i.a.auth().onAuthStateChanged((function(e){e.displayName?r(i.a.auth().currentUser.displayName):r("Stranger")}))}));return Object(b.jsxs)("header",{children:[h?Object(b.jsx)(O,{}):null,Object(b.jsxs)("div",{id:"info",children:[Object(b.jsxs)("p",{id:"welcome",children:["Welcome, ",a,"!"]}),Object(b.jsxs)("p",{id:"timer",children:[j," seconds passed!"]})]}),Object(b.jsxs)("div",{id:"chars-array",children:[Object(b.jsx)("p",{style:{textDecoration:m.includes("Waldo")?"line-through":"none"},children:"Waldo"}),Object(b.jsx)("p",{style:{textDecoration:m.includes("Odlaw")?"line-through":"none"},children:"Odlaw"}),Object(b.jsx)("p",{style:{textDecoration:m.includes("Wizzard")?"line-through":"none"},children:"Wizzard"})]}),Object(b.jsx)("button",{id:"leaderboard-btn",onClick:function(){p(!h)},children:"Leaderboard"})]})},h=c(16),p=(c(38),function(e){var t=e.location[0],c=e.location[1];return Object(b.jsx)("div",{style:{position:"absolute",zIndex:"1",left:t+50,top:c-20,width:"50px",fontSize:"50px",color:"red"},children:"X"})}),x=(c(39),function(e){var t=e.position[0],c=e.position[1],n=e.evaluate;return Object(b.jsxs)("div",{id:"menu",style:{left:t,top:c},children:[Object(b.jsx)("button",{onClick:n,children:"Waldo"}),Object(b.jsx)("button",{onClick:n,children:"Odlaw"}),Object(b.jsx)("button",{onClick:n,children:"Wizzard"})]})}),m=function(e){var t=Object(n.useState)({}),a=Object(s.a)(t,2),r=a[0],o=a[1],i=Object(n.useState)(!1),u=Object(s.a)(i,2),O=u[0],f=u[1],m=Object(n.useState)([0,0]),v=Object(s.a)(m,2),g=v[0],w=v[1],S=Object(n.useState)(""),y=Object(s.a)(S,2),k=y[0],W=y[1],z=Object(n.useState)(!1),C=Object(s.a)(z,2),E=C[0],I=C[1],F=Object(n.useState)(!1),N=Object(s.a)(F,2),A=N[0],B=N[1],D=Object(n.useState)(!1),G=Object(s.a)(D,2),L=G[0],P=G[1],R=Object(n.useState)([]),U=Object(s.a)(R,2),Y=U[0],J=U[1],M=Object(n.useState)([]),X=Object(s.a)(M,2),K=X[0],V=X[1],Z=Object(n.useState)([]),q=Object(s.a)(Z,2),H=q[0],Q=q[1],T=e.gameOver,$=e.setCharsFound,_=e.charsFound;document.addEventListener("click",(function(e){"main-image"!==e.target.id&&"char"!==e.target.className&&f(!1)})),Object(n.useEffect)((function(){ee()}),[]),Object(n.useEffect)((function(){E&&A&&L&&T(!0)}),[E,A,L]),Object(n.useEffect)((function(){E&&(J(g),$(Object(h.a)(_).concat("Waldo")))}),[E]),Object(n.useEffect)((function(){A&&(V(g),$(Object(h.a)(_).concat("Odlaw")))}),[A]),Object(n.useEffect)((function(){L&&(Q(g),$(Object(h.a)(_).concat("Wizzard")))}),[L]);var ee=function(){var e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.collection("coords"),e.next=3,t.get();case 3:e.sent.docs.forEach((function(e){o(e.data())}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),te=function(e){e.preventDefault();var t=document.getElementById("main-image"),c=t.getBoundingClientRect().left,n=t.getBoundingClientRect().top;w([e.clientX-c,e.clientY-n]),f(!0),W(e.target.alt)},ce=function(e){if(e.target.textContent===k)switch(k){case"Waldo":I(!0);break;case"Odlaw":B(!0);break;case"Wizzard":P(!0)}else console.log("try again")};return Object(b.jsxs)("div",{id:"Game",children:[O?Object(b.jsx)(x,{position:g,evaluate:ce}):Object(b.jsx)(b.Fragment,{}),E?Object(b.jsx)(p,{location:Y}):Object(b.jsx)(b.Fragment,{}),A?Object(b.jsx)(p,{location:K}):Object(b.jsx)(b.Fragment,{}),L?Object(b.jsx)(p,{location:H}):Object(b.jsx)(b.Fragment,{}),Object(b.jsx)("img",{id:"main-image",src:c(40).default,alt:"",useMap:"#workmap",onClick:te}),Object(b.jsxs)("map",{name:"workmap",children:[Object(b.jsx)("area",{shape:"rect",className:"char",coords:r.Waldo,alt:"Waldo",onClick:te}),Object(b.jsx)("area",{shape:"rect",className:"char",coords:r.Odlaw,alt:"Odlaw",onClick:te}),Object(b.jsx)("area",{shape:"rect",className:"char",coords:r.Wizzard,alt:"Wizzard",onClick:te})]})]})},v=c(22),g=c.n(v),w=(c(41),function(e){var t=Object(n.useState)(i.a.auth().currentUser.displayName||"Anonymous"),c=Object(s.a)(t,2),a=c[0],r=c[1],o=Object(n.useState)(!1),u=Object(s.a)(o,2),j=u[0],d=u[1],O=e.score,f=function(e){e.preventDefault(),l.collection("leaderboard").doc(a).set({name:a,score:O,id:g()()}).then((function(){console.log("succesfully written!")})).catch((function(e){console.error("Error writing document to database",e)})),d(!0),h()},h=function(){document.getElementById("leaderboard-btn").click()};return j?Object(b.jsx)("div",{}):Object(b.jsxs)("div",{id:"game-over",children:[Object(b.jsx)("h3",{children:"Game Over"}),Object(b.jsxs)("form",{onSubmit:f,children:[Object(b.jsx)("label",{children:"Enter your name to show off on the leaderboard!"}),Object(b.jsx)("input",{type:"text",defaultValue:a,onChange:function(e){return r(e.target.value)}}),Object(b.jsx)("button",{type:"submit",children:"Submit"})]})]})}),S=(c(42),function(e){var t=e.showPopup,c=function(){null!==i.a.auth().currentUser&&t(!1)};return Object(b.jsx)("div",{style:{position:"absolute",left:"50%",top:"30%"},children:Object(b.jsxs)("div",{id:"signin-popup",children:[Object(b.jsx)("p",{children:"Would you like to sign in?"}),Object(b.jsxs)("div",{id:"button-container",children:[Object(b.jsx)("button",{onClick:function(){var e=new i.a.auth.GoogleAuthProvider;i.a.auth().signInWithPopup(e),c()},children:"Yes! With Google."}),Object(b.jsx)("button",{onClick:function(){i.a.auth().signInAnonymously(),c()},children:"Nope"})]})]})})});var y=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(!0),o=Object(s.a)(r,2),i=o[0],u=o[1],j=Object(n.useState)([]),d=Object(s.a)(j,2),l=d[0],O=d[1],h=Object(n.useState)(0),p=Object(s.a)(h,2),x=p[0],v=p[1];return Object(b.jsxs)("div",{className:"App",children:[i?null:Object(b.jsx)(f,{gameOver:c,charsFound:l,setScore:v}),i?Object(b.jsx)(S,{showPopup:u}):c?Object(b.jsx)(w,{score:x}):Object(b.jsx)(m,{gameOver:a,charsFound:l,setCharsFound:O})]})};o.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(y,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.c600b20d.chunk.js.map