(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{181:function(e,t,a){e.exports=a(350)},186:function(e,t,a){},350:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),o=a.n(c),l=(a(186),a(39)),u=a(36),i=a(5),s=a.n(i),m=a(10),p=a(351),d=a(358),b=a(13),f=a(53),h=a.n(f),E="http://localhost:3000/auth";E="https://vicaty.herokuapp.com/auth";var v=h.a.create({baseURL:E,withCredentials:!0});v.interceptors.response.use((function(e){return e}),(function(e){return e}));var w=function(){var e=Object(m.a)(s.a.mark((function e(t){var a,n,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.username,n=t.email,r=t.password,e.next=3,v.post("/signup",{username:a,password:r,email:n});case 3:return c=e.sent,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(m.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.post("/login",t);case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(m.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/currentuser");case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(m.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/logout");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=Object(n.createContext)();function k(e){var t=e.children,a=Object(n.useState)(null),c=Object(b.a)(a,2),o=c[0],l=c[1];function u(e){l(e)}return Object(n.useEffect)((function(){function e(){return(e=Object(m.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:t=e.sent,(null===(a=t.user)||void 0===a?void 0:a.username)&&u(a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement(x.Provider,{value:{user:o,loginUser:u,logout:function(){l(null)}}},t)}var O=p.a.Header,C=p.a.Content,I=p.a.Footer,N=function(e){var t=e.children,a=Object(n.useContext)(x),c=a.user,o=a.logout;function u(){return(u=Object(m.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:o();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement(p.a,{className:"layout",style:{height:"100vh",overflow:"auto"}},r.a.createElement(O,null,r.a.createElement(d.a,{theme:"light",style:{width:"100vw",position:"absolute",right:"0"},mode:"horizontal"},r.a.createElement(d.a.Item,{key:"1"},r.a.createElement(l.b,{to:"/"},"Home")),c?r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a.Item,{key:"5"},r.a.createElement(l.b,{to:"/profile"},"Profile")),r.a.createElement(d.a.Item,{onClick:function(){return u.apply(this,arguments)},key:"4"},"Logout")):r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a.Item,{key:"2"},r.a.createElement(l.b,{to:"/login"},"Login")),r.a.createElement(d.a.Item,{key:"3"},r.a.createElement(l.b,{to:"/signup"},"Signup"))))),r.a.createElement(C,null,r.a.createElement("br",null),r.a.createElement("br",null),t),r.a.createElement(I,{style:{textAlign:"center",backgroundColor:"white",color:"black",marginTop:"30px",height:"50px",position:"fixed",bottom:"0",paddingBottom:"40px",width:"100vw"}},"\xa92020 Edgar V. C."))},S=a(355),T=a(354),F=a(179),P=a(359),R=a(72),M=S.a.Title,L=(S.a.Text,function(e){var t=e.history,a=T.a.useForm(),c=Object(b.a)(a,1)[0],o=Object(n.useContext)(x).user,l=function(e){F.a[e]({message:"ERROR",description:"Username already exists"})};function i(){return(i=Object(m.a)(s.a.mark((function e(a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(a);case 2:e.sent.data?t.push("/login"):l("warning");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return o?r.a.createElement(u.a,{to:"/profile"}):r.a.createElement(T.a,{layout:"vertical",form:c,onFinish:function(e){return i.apply(this,arguments)}},r.a.createElement(M,{level:1},"Create Account"),r.a.createElement(T.a.Item,{label:"User Name",name:"username",rules:[{required:!0,message:"Please input your user name!"}]},r.a.createElement(P.a,null)),r.a.createElement(T.a.Item,{label:"E-mail",name:"email",rules:[{required:!0,message:"Please input your user name!"}]},r.a.createElement(P.a,null)),r.a.createElement(T.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}]},r.a.createElement(P.a.Password,null)),r.a.createElement(T.a.Item,null,r.a.createElement(R.a,{style:{marginTop:"15px",backgroundColor:"#364d79",color:"white",borderRadius:"10px"},block:!0,htmlType:"submit"},"SIGNUP")))}),U=S.a.Title,D=(S.a.Text,function(e){var t=e.history,a=T.a.useForm(),c=Object(b.a)(a,1)[0],o=Object(n.useContext)(x),l=o.user,i=o.loginUser,p=function(e){F.a[e]({message:"ERROR",description:"Wrong Username or Password"})};function d(){return(d=Object(m.a)(s.a.mark((function e(a){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(a);case 2:(n=e.sent)?(i(n),t.push("/profile")):p("warning");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return l?r.a.createElement(u.a,{to:"/profile"}):r.a.createElement(T.a,{layout:"vertical",form:c,onFinish:function(e){return d.apply(this,arguments)}},r.a.createElement(U,{level:1},"LOGIN"),r.a.createElement(T.a.Item,{label:"User Name",name:"username",rules:[{required:!0,message:"Please input your user name!"}]},r.a.createElement(P.a,null)),r.a.createElement(T.a.Item,{type:"password",label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}]},r.a.createElement(P.a.Password,null)),r.a.createElement(T.a.Item,null,r.a.createElement(R.a,{style:{marginTop:"15px",backgroundColor:"#364d79",color:"white",borderRadius:"10px"},block:!0,htmlType:"submit"},"LOGIN")))}),_=a(352),q={height:"250px",color:"#fff",lineHeight:"160px",textAlign:"center",background:"linear-gradient(90deg, #364d79 0%, white 220%)"},A=S.a.Title,H=S.a.Text,B=function(){return r.a.createElement("div",null,r.a.createElement(r.a.Fragment,null,r.a.createElement("center",null,r.a.createElement("div",{style:{width:"50vw",marginBottom:"40px"}},r.a.createElement(A,{level:1},"Vicaty "),r.a.createElement(H,null," An API builder made with love")),r.a.createElement(_.a,{autoplay:!0},r.a.createElement("div",null,r.a.createElement("h3",{style:q},"Easy to Use")),r.a.createElement("div",null,r.a.createElement("h3",{style:q},"Modify data within seconds")),r.a.createElement("div",null,r.a.createElement("h3",{style:q},"Build API's without a line of code")),r.a.createElement("div",null,r.a.createElement("h3",{style:q},"Made with love")))),r.a.createElement("br",null)))},V=a(357),G=a(90),W=a(61),z=a(353),J="http://localhost:3000/user";J="https://vicaty.herokuapp.com/user";var $=h.a.create({baseURL:J,withCredentials:!0});$.interceptors.response.use((function(e){return e}),(function(e){return e}));var K=function(){var e=Object(m.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$.get("/");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Q=function(){var e=Object(m.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.projectName,e.next=3,$.post("/",{projectName:a});case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),X=function(){var e=Object(m.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("iddddd",t),e.next=3,$.delete("/project/".concat(t));case 3:return a=e.sent,console.log("messageee",a),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(m.a)(s.a.mark((function e(t,a,n){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$.post("/model/".concat(a),{createdModelName:t,description:n});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),Z=function(){var e=Object(m.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$.get("/project/".concat(t));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ee=function(){var e=Object(m.a)(s.a.mark((function e(t,a){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$.put("/project/".concat(t),{projectName:a});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),te=function(){var e=Object(m.a)(s.a.mark((function e(t,a){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$.post("/duplicateProject/".concat(t),{projectName:a});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),ae=function(){var e=Object(m.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$.get("/model/".concat(t));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ne=function(){var e=Object(m.a)(s.a.mark((function e(t,a,n){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$.put("/model/".concat(t),{createdModelName:a,description:n});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),re=function(){var e=Object(m.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$.delete("/model/".concat(t));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ce=S.a.Title,oe=(S.a.Text,function(){var e=Object(n.useContext)(x),t=e.user,a=(e.loginUser,Object(n.useState)(null)),c=Object(b.a)(a,2),o=c[0],i=c[1],p=Object(n.useState)(!1),d=Object(b.a)(p,2),f=d[0],h=d[1],E=T.a.useForm(),v=Object(b.a)(E,1)[0],w=T.a.useForm(),g=Object(b.a)(w,1)[0],y=T.a.useForm(),j=Object(b.a)(y,1)[0],k=Object(n.useState)(!1),O=Object(b.a)(k,2),C=O[0],I=O[1],N=Object(n.useState)(!1),S=Object(b.a)(N,2),F=S[0],M=S[1],L=Object(n.useState)(!1),U=Object(b.a)(L,2),D=U[0],_=U[1],q=Object(n.useState)(null),A=Object(b.a)(q,2),H=A[0],B=A[1],J=Object(n.useState)("null"),$=Object(b.a)(J,2),Y=$[0],Z=$[1],ae=Object(n.useState)(!1),ne=Object(b.a)(ae,2),re=ne[0],oe=ne[1],le=Object(n.useState)("null"),ue=Object(b.a)(le,2),ie=ue[0],se=ue[1];function me(){return(me=Object(m.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Q(t),h(!1),v.resetFields(),pe();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function pe(){I(!C)}function de(){M(!F)}function be(){_(!D),g.resetFields()}function fe(){oe(!re),j.resetFields()}function he(){return(he=Object(m.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te(ie.projectId,t.projectName);case 2:j.resetFields(),fe(),h(!1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(n.useEffect)((function(){(function(){var e=Object(m.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K();case 2:t=e.sent,a=t.data,i(a),!1===f&&h(!0);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[f]);return t?r.a.createElement("div",null,r.a.createElement("center",null,r.a.createElement(V.a,{title:"Create new Project Schema",visible:C,onOk:pe,onCancel:pe},r.a.createElement(T.a,{layout:"vertical",form:v,onFinish:function(e){return me.apply(this,arguments)}},r.a.createElement(T.a.Item,{label:"Project Schema name",name:"projectName",rules:[{required:!0,message:"Please input project"}]},r.a.createElement(P.a,null)),r.a.createElement(T.a.Item,null,r.a.createElement(R.a,{style:{marginTop:"15px",backgroundColor:"#638165",color:"white",borderRadius:"10px"},block:!0,htmlType:"submit"},"Submit")))),r.a.createElement(V.a,{title:"Update Project Schema's name",visible:D,onOk:be,onCancel:be},r.a.createElement(T.a,{layout:"vertical",form:g,onFinish:function(e){ee(Y.projectId,e.projectName),g.resetFields(),be(),h(!1)}},r.a.createElement(T.a.Item,{initialValue:Y.projectName,label:"Project Schema name",name:"projectName",rules:[{required:!0,message:"Please input project's name"}]},r.a.createElement(P.a,null)),r.a.createElement(T.a.Item,null,r.a.createElement(R.a,{style:{marginTop:"15px",backgroundColor:"#364d79",color:"white",borderRadius:"10px"},block:!0,htmlType:"submit"},"Submit")))),r.a.createElement(V.a,{title:"Duplicate Project from ".concat(ie.projectName),visible:re,onOk:fe,onCancel:fe},r.a.createElement(T.a,{layout:"vertical",form:j,onFinish:function(e){return he.apply(this,arguments)}},r.a.createElement(T.a.Item,{initialValue:ie.projectName,label:"New Project name",name:"projectName",rules:[{required:!0,message:"Please input project's name"}]},r.a.createElement(P.a,null)),r.a.createElement(T.a.Item,null,r.a.createElement(R.a,{style:{marginTop:"15px",backgroundColor:"#638165",color:"white",borderRadius:"10px"},block:!0,htmlType:"submit"},"Duplicate")))),r.a.createElement(V.a,{title:"Are you sure you want to delete this Project?",visible:F,onOk:de,onCancel:de},r.a.createElement(R.a,{style:{margin:"15px 0",backgroundColor:"red",color:"white"},block:!0,onClick:function(){X(H),h(!1),de()}},"DELETE")),r.a.createElement("div",{style:{width:"100vw",paddingLeft:"15vw",paddingRight:"15vw",marginTop:"15px",background:"linear-gradient(90deg, #364d79 0%, white 220%)",color:"white",borderRadius:"3px"}},r.a.createElement(ce,{style:{color:"white"},level:1},t.username.toUpperCase(),"'s Projects SCHEMAS",r.a.createElement("p",null,"USER ID : ",t._id)),r.a.createElement("h3",{style:{color:"white"}},"Here you can see all of your existing projects schemas. Don't have any? click below to create a new one!"),r.a.createElement(R.a,{style:{margin:"15px 0",backgroundColor:"white",color:"#364d79"},onClick:pe,block:!0},"Create New Project Schema!")),r.a.createElement("div",{style:{margin:"20px"}},r.a.createElement(G.a,{gutter:[16,16]},null===o||void 0===o?void 0:o.map((function(e){return r.a.createElement(W.a,{key:e._id,xs:24,sm:24,md:12,lg:8},r.a.createElement(z.a,{title:e.projectName,bordered:!1,style:{width:300}},r.a.createElement(R.a,{style:{margin:"15px 0",backgroundColor:"white",color:"#364d79"},onClick:Object(m.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.resetFields();case 2:return t.next=4,a=e.projectName,n=e._id,void Z({projectName:a,projectId:n});case 4:be();case 5:case"end":return t.stop()}var a,n}),t)}))),block:!0},"Update Project's name"),r.a.createElement(R.a,{style:{margin:"15px 0",backgroundColor:"white",color:"#364d79"},onClick:Object(m.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.resetFields();case 2:return t.next=4,a=e.projectName,n=e._id,void se({projectName:a,projectId:n});case 4:fe();case 5:case"end":return t.stop()}var a,n}),t)}))),block:!0},"Duplicate Project"),r.a.createElement("p",null,r.a.createElement("strong",null,"Project id:")," ",e._id),r.a.createElement("p",null,r.a.createElement("strong",null,"Creation date:")," ",e.created_at.slice(0,10)),r.a.createElement("p",null,r.a.createElement("strong",null,"Last updated:")," ",e.updated_at.slice(0,10)),r.a.createElement(R.a,{style:{margin:"15px 0",backgroundColor:"#364d79",color:"white"},block:!0},r.a.createElement(l.b,{to:"/project/".concat(e.projectName,"/").concat(e._id)},"Go to project")),r.a.createElement(R.a,{style:{margin:"15px 0",backgroundColor:"red",color:"white"},block:!0,onClick:function(){var t;t=e._id,B(t),de()}},"DELETE")))})))))):r.a.createElement(u.a,{to:"/"})}),le=a(356),ue=S.a.Title,ie=(S.a.Text,le.a.Panel),se=function(e){var t=Object(n.useContext)(x),a=t.user,c=(t.loginUser,Object(n.useState)(null)),o=Object(b.a)(c,2),i=o[0],p=o[1],d=T.a.useForm(),f=Object(b.a)(d,1)[0],h=T.a.useForm(),E=Object(b.a)(h,1)[0],v=Object(n.useState)(!1),w=Object(b.a)(v,2),g=w[0],y=w[1],j=Object(n.useState)(!1),k=Object(b.a)(j,2),O=k[0],C=k[1],I=Object(n.useState)(!1),N=Object(b.a)(I,2),S=N[0],F=N[1],M=Object(n.useState)(null),L=Object(b.a)(M,2),U=L[0],D=L[1],_=Object(n.useState)(!1),q=Object(b.a)(_,2),A=q[0],H=q[1],B=Object(n.useState)(!1),G=Object(b.a)(B,2),W=G[0],J=G[1];function $(){return($=Object(m.a)(s.a.mark((function t(a){var n,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=a.createdModelName,r=a.description,Y(n,e.match.params.projectId,r),y(!1),K();case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function K(){C(!O)}function Q(){F(!S)}function X(){H(!A),E.resetFields()}Object(n.useEffect)((function(){(function(){var t=Object(m.a)(s.a.mark((function t(){var a,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Z(e.match.params.projectId);case 2:a=t.sent,n=a.data,p(n),!1===g&&y(!0);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[g]);return a?i?r.a.createElement("div",null,r.a.createElement("center",null,r.a.createElement(V.a,{title:"Create new Model",visible:O,onOk:K,onCancel:K},r.a.createElement(T.a,{layout:"vertical",form:f,onFinish:function(e){return $.apply(this,arguments)}},r.a.createElement(T.a.Item,{label:"Model name",name:"createdModelName",rules:[{required:!0,message:"Please input model name"}]},r.a.createElement(P.a,null)),r.a.createElement(T.a.Item,{label:"Model description or value",name:"description",rules:[{required:!0,message:"Please input model value or description"}]},r.a.createElement(P.a,null)),r.a.createElement(T.a.Item,null,r.a.createElement(R.a,{style:{marginTop:"15px",backgroundColor:"#364d79",color:"white",borderRadius:"10px"},block:!0,htmlType:"submit"},"Submit")))),r.a.createElement(V.a,{title:"Update Model",visible:A,onOk:X,onCancel:X},r.a.createElement(T.a,{layout:"vertical",form:E,onFinish:function(e){ne(W.modelId,e.modelName,e.description),E.resetFields(),X(),y(!1)}},r.a.createElement(T.a.Item,{initialValue:W.modelName,label:"Model name",name:"modelName",rules:[{required:!0,message:"Please input model's name"}]},r.a.createElement(P.a,null)),r.a.createElement(T.a.Item,{initialValue:W.description,label:"Model description",name:"description",rules:[{required:!0,message:"Please input model's description"}]},r.a.createElement(P.a,null)),r.a.createElement(T.a.Item,null,r.a.createElement(R.a,{style:{marginTop:"15px",backgroundColor:"#638165",color:"white",borderRadius:"10px"},block:!0,htmlType:"submit"},"Submit")))),r.a.createElement(V.a,{title:"Are you sure you want to delete this Model?",visible:S,onOk:Q,onCancel:Q},r.a.createElement(R.a,{style:{margin:"15px 0",backgroundColor:"red",color:"white"},block:!0,onClick:function(){!function(){console.log(U);var e=re(U);console.log(e),y(!1),Q()}()}},"DELETE")),r.a.createElement("div",{style:{width:"100vw",paddingLeft:"15vw",paddingRight:"15vw",marginTop:"15px",background:"linear-gradient(90deg, #364d79 0%, white 220%)",color:"white"}},r.a.createElement(ue,{style:{color:"white"},level:1},e.match.params.projectName,"'s MODELS"),r.a.createElement(ue,{style:{color:"white"},level:3},e.match.params.projectName,"'s MODELS"),r.a.createElement("h3",{style:{color:"white"}},"Here you can see all your models corresponding to the",e.match.params.projectName," project. click below to create a new one!"),r.a.createElement(R.a,{style:{margin:"15px 0",backgroundColor:"white",color:"#364d79"},onClick:K,block:!0},"Create New Model!")),r.a.createElement("div",{style:{margin:"20px"}},i[0].createdModels.map((function(e){return r.a.createElement(z.a,{key:e._id,title:e.createdModelName,bordered:!0,style:{marginBottom:"40px",borderTop:"3px solid #364d79"}},r.a.createElement("p",null,r.a.createElement("strong",null,"Model description:")," ",e.description),r.a.createElement(R.a,{style:{margin:"15px 0",backgroundColor:"white",color:"#364d79",width:"40vw"},onClick:Object(m.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.resetFields();case 2:return t.next=4,a=e.createdModelName,n=e._id,r=e.description,void J({modelName:a,modelId:n,description:r});case 4:X();case 5:case"end":return t.stop()}var a,n,r}),t)}))),block:!0},"Update Model's name and description"),r.a.createElement("p",null,r.a.createElement("strong",null,"Model id:")," ",e._id),r.a.createElement("p",null,r.a.createElement("strong",null,"Creation date:")," ",e.created_at.slice(0,10)),r.a.createElement("p",null,r.a.createElement("strong",null,"Last updated:")," ",e.updated_at.slice(0,10)),r.a.createElement(R.a,{style:{width:"30vw",margin:"15px 0",backgroundColor:"#364d79",color:"white"}},r.a.createElement(l.b,{to:"/model/".concat(e.createdModelName,"/").concat(e._id)},"Go to model")),r.a.createElement(R.a,{style:{width:"30vw",margin:"15px 0",backgroundColor:"red",color:"white"},onClick:function(){var t;t=e._id,D(t),Q()}},"DELETE"),r.a.createElement(le.a,{style:{background:"linear-gradient(90deg, white 0%, #364d79 220%)"}},r.a.createElement(ie,{header:"API's endpoints",key:"1"},Object.entries(e.api).map((function(e){return r.a.createElement(z.a,{style:{background:"linear-gradient(90deg, white 0%, #364d79 220%)"},key:e[0]},r.a.createElement("p",null,r.a.createElement("strong",{style:{width:"100%"}},"Endpoint function:"," "),e[0]),r.a.createElement("p",null,r.a.createElement("strong",{style:{width:"100%"}},"Request:"," "),e[1].reqType),r.a.createElement("p",null,r.a.createElement("strong",{style:{width:"100%"}},"Route: ")," ",e[1].route),r.a.createElement("p",null,r.a.createElement("strong",{style:{width:"100%"}},"Request body elements:"," "),e[1].body))})))))}))))):r.a.createElement("p",null,"Loading"):r.a.createElement(u.a,{to:"/"})},me="http://localhost:3000/user";me="https://vicaty-api.herokuapp.com/user";var pe=h.a.create({baseURL:me,withCredentials:!1});pe.interceptors.response.use((function(e){return e}),(function(e){return e}));var de=function(){var e=Object(m.a)(s.a.mark((function e(t,a,n){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,pe.post("/element/create/".concat(a),{userId:n,elementName:t});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),be=function(){var e=Object(m.a)(s.a.mark((function e(t,a,n,r){var c,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.data,e.next=3,pe.post("/element/addSingle/".concat(a,"/").concat(n),{userId:r,value:c});case 3:return o=e.sent,e.abrupt("return",o);case 5:case"end":return e.stop()}}),e)})));return function(t,a,n,r){return e.apply(this,arguments)}}(),fe=function(){var e=Object(m.a)(s.a.mark((function e(t,a,n,r){var c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,pe.post("/element/deleteSingle/".concat(t,"/").concat(a,"/").concat(n),{userId:r});case 2:return c=e.sent,e.abrupt("return",c);case 4:case"end":return e.stop()}}),e)})));return function(t,a,n,r){return e.apply(this,arguments)}}(),he=function(){var e=Object(m.a)(s.a.mark((function e(t,a,n,r,c){var o,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=r.data,e.next=3,pe.put("/element/updateSingle/".concat(t,"/").concat(a,"/").concat(n),{userId:c,value:o});case 3:return l=e.sent,e.abrupt("return",l);case 5:case"end":return e.stop()}}),e)})));return function(t,a,n,r,c){return e.apply(this,arguments)}}(),Ee=S.a.Title,ve=(S.a.Text,le.a.Panel),we=function(e){var t=Object(n.useContext)(x),a=t.user,c=(t.loginUser,Object(n.useState)(null)),o=Object(b.a)(c,2),l=o[0],i=o[1],p=T.a.useForm(),d=Object(b.a)(p,1)[0],f=T.a.useForm(),h=Object(b.a)(f,1)[0],E=T.a.useForm(),v=Object(b.a)(E,1)[0],w=Object(n.useState)(!1),g=Object(b.a)(w,2),y=g[0],j=g[1],k=Object(n.useState)(!1),O=Object(b.a)(k,2),C=O[0],I=O[1],N=Object(n.useState)(!1),S=Object(b.a)(N,2),M=S[0],L=S[1],U=Object(n.useState)(null),D=Object(b.a)(U,2),_=D[0],q=D[1],A=Object(n.useState)(!1),H=Object(b.a)(A,2),B=H[0],W=H[1],J=Object(n.useState)(null),$=Object(b.a)(J,2),K=$[0],Q=$[1],X=Object(n.useState)(!1),Y=Object(b.a)(X,2),Z=Y[0],ee=Y[1],te=Object(n.useState)(null),ne=Object(b.a)(te,2),re=ne[0],ce=ne[1],oe=Object(n.useState)(null),ue=Object(b.a)(oe,2),ie=(ue[0],ue[1],function(e){F.a[e]({message:"ERROR",description:"An element already exists with that name. Element's names must be unique"})});function se(){return(se=Object(m.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.elementName,t.next=3,de(r,e.match.params.modelId,a._id);case 3:t.sent.data?(d.resetFields(),j(!1),me()):ie("warning");case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function me(){I(!C),d.resetFields()}function pe(){L(!M),h.resetFields()}function we(){return(we=Object(m.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:be(n,e.match.params.modelId,_,a._id),j(!1),h.resetFields(),pe();case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function ge(){return(ge=Object(m.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:q(t);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ye(e,t){return je.apply(this,arguments)}function je(){return(je=Object(m.a)(s.a.mark((function e(t,a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q(t);case 2:return e.next=4,Q(a);case 4:xe();case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function xe(){W(!B),d.resetFields()}function ke(){return(ke=Object(m.a)(s.a.mark((function e(t,a,n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q(t);case 2:return e.next=4,Q(a);case 4:return e.next=6,ce(n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Oe(){ee(!Z),v.resetFields()}Object(n.useEffect)((function(){(function(){var t=Object(m.a)(s.a.mark((function t(){var a,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ae(e.match.params.modelId);case 2:a=t.sent,n=a.data,i([n]),!1===y&&j(!0);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[y]);return a?l?r.a.createElement("div",null,r.a.createElement("center",null,r.a.createElement(V.a,{title:"Create new Element",visible:C,onOk:me,onCancel:me},r.a.createElement(T.a,{layout:"vertical",form:d,onFinish:function(e){return se.apply(this,arguments)}},r.a.createElement(T.a.Item,{label:"Element name",name:"elementName",rules:[{required:!0,message:"Please input element name"}]},r.a.createElement(P.a,null)),r.a.createElement(T.a.Item,null,r.a.createElement(R.a,{style:{marginTop:"15px",backgroundColor:"#638165",color:"white",borderRadius:"10px"},block:!0,htmlType:"submit"},"Submit")))),r.a.createElement("div",{style:{width:"100vw",paddingLeft:"15vw",paddingRight:"15vw",marginTop:"15px",background:"linear-gradient(90deg, #364d79 0%, white 220%)",color:"white"}},r.a.createElement(Ee,{style:{color:"white"},level:1},e.match.params.modelName,"'s ELEMENTS"),r.a.createElement("h3",{style:{color:"white"}},"Here you can see all your elements corresponding to the",e.match.params.modelName," model. click below to create a new one!"),r.a.createElement(R.a,{style:{margin:"15px 0",backgroundColor:"white",color:"#364d79"},onClick:me,block:!0},"Create New Element!")),r.a.createElement("div",{style:{margin:"20px"}},r.a.createElement(G.a,{gutter:[16,16]},r.a.createElement(V.a,{title:"Add data",visible:M,onOk:pe,onCancel:pe},r.a.createElement(T.a,{layout:"vertical",form:h,onFinish:function(e){return we.apply(this,arguments)}},r.a.createElement(T.a.Item,{label:"Data value",name:"data",rules:[{required:!0,message:"Please input data"}]},r.a.createElement(P.a,null)),r.a.createElement(T.a.Item,null,r.a.createElement(R.a,{style:{marginTop:"15px",backgroundColor:"#638165",color:"white",borderRadius:"10px"},htmlType:"submit"},"Add Data")))),r.a.createElement(V.a,{title:"Delete Data",visible:B,onOk:xe,onCancel:xe},r.a.createElement(Ee,{level:2},"Are you sure you want to delete this entry?"),r.a.createElement(R.a,{style:{marginTop:"15px",backgroundColor:"red",color:"white",borderRadius:"10px"},onClick:function(){console.log("element to deleteee",_,K),fe(e.match.params.modelId,_,K,a._id),j(!1),d.resetFields(),xe()},block:!0},"DELETE")),r.a.createElement(V.a,{title:"Update Data",visible:Z,onOk:Oe,onCancel:Oe},r.a.createElement(Ee,{level:3},"Current value:",r.a.createElement("span",{style:{fontSize:"1.1rem",color:"#696969",marginLeft:"10px"}},re)),r.a.createElement(T.a,{layout:"vertical",form:v,onFinish:function(t){he(e.match.params.modelId,_,K,t,a._id),j(!1),Oe()}},r.a.createElement(T.a.Item,{label:"Input new value:",name:"data",rules:[{required:!0,message:"Please input data"}]},r.a.createElement(P.a,null)),r.a.createElement(T.a.Item,null,r.a.createElement(R.a,{style:{marginTop:"15px",backgroundColor:"#638165",color:"white",borderRadius:"10px"},htmlType:"submit",block:!0},"Update")))),l[0].elements.map((function(e){var t=Object.entries(e)[0][0];return r.a.createElement(z.a,{title:"element name: ".concat(Object.entries(e)[0][0]),bordered:!1,style:{width:"100vw"},key:Object.entries(e)[0][0]},r.a.createElement(le.a,null,r.a.createElement(ve,{header:"Show Data",key:"1"},r.a.createElement(R.a,{onClick:function(){pe(),function(e){ge.apply(this,arguments)}(Object.entries(e)[0][0])}},"Add Data"),r.a.createElement(Ee,{level:3},"Existing Data:"),Object.entries(e)[0][1].data.map((function(e){return r.a.createElement(z.a,{title:"data id: ".concat(e.id),bordered:!1,style:{width:"100%"},key:e.id},console.log("data valuee",e.value),r.a.createElement("p",null," data value: "),r.a.createElement("p",null," ",e.value," "),r.a.createElement(R.a,{style:{margin:"15px 0",backgroundColor:"#638165",color:"white"},onClick:function(){!function(e,t,a){ke.apply(this,arguments)}(t,e.id,e.value),Oe()}},"Modify"),r.a.createElement(R.a,{style:{margin:"15px 0",backgroundColor:"white",color:"red"},onClick:Object(m.a)(s.a.mark((function a(){return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:ye(t,e.id);case 1:case"end":return a.stop()}}),a)})))},"Delete"))})))))})))))):r.a.createElement("p",null,"Loading"):r.a.createElement(u.a,{to:"/"})},ge=function(){return r.a.createElement(l.a,null,r.a.createElement(N,null,r.a.createElement(u.d,null,r.a.createElement(u.b,{component:B,path:"/",exact:!0}),r.a.createElement(u.b,{component:D,path:"/login"}),r.a.createElement(u.b,{component:L,path:"/signup"}),r.a.createElement(u.b,{component:oe,path:"/profile"}),r.a.createElement(u.b,{component:se,path:"/project/:projectName/:projectId"}),r.a.createElement(u.b,{component:we,path:"/model/:modelName/:modelId"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(349);o.a.render(r.a.createElement(k,null,r.a.createElement(ge,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[181,1,2]]]);
//# sourceMappingURL=main.8970ab32.chunk.js.map