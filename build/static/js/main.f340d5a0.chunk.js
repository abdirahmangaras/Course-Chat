(this.webpackJsonpcourse_chat=this.webpackJsonpcourse_chat||[]).push([[0],{146:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAAXNSR0IArs4c6QAAAExJREFUCB1jbPh/le3lx5tNDIwMcQwg8J9hkTi/eh0LWJCBoRwoAAPlQDEGJrhKmDCIBupmQuYjs5lAZiILgNlAMRaQRSAz4UZCLQcAIwYaiAejKoYAAAAASUVORK5CYII="},147:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAHBJREFUGBmNkAEKwCAMA2VfGP2mrx3sOV2us6IymIXQGlNTW9zdhCqcZQm4dmelFUp+CZZa6sYpeUVIFyIixMqjCO51Wy5unQExuYSbSF5JASLqPsqRM21lOoWc89tagr3PSMgOiWlwnUeXWA/E78IfuAX270S3ydAAAAAASUVORK5CYII="},167:function(e,t,a){e.exports=a(271)},172:function(e,t,a){},173:function(e,t,a){},229:function(e,t){},264:function(e,t,a){},265:function(e,t,a){},266:function(e,t,a){},267:function(e,t,a){},268:function(e,t,a){},269:function(e,t,a){},270:function(e,t,a){},271:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(11),l=a.n(r),o=(a(172),a(21)),c=a(15),i=a(28),u=a(27),m=(a(173),a(7)),p=a(12),d=a(321),g=a(315),h=a(318),f=a(274),E=a(319),v=a(273),b=Object(g.a)({focused:{backgroundColor:"gray"},paper:{marginTop:"4%",textAlign:"center",whiteSpace:"nowrap"},textcenter:{textAlign:"center"}});function C(e){var t=b();return s.a.createElement("div",{className:"App"},s.a.createElement(v.a,{className:t.paper},s.a.createElement(h.a,null,e.classes.map((function(a,n){return s.a.createElement(f.a,{onClick:function(){return e.setFocusedClass(a.courseName)},key:n,className:e.focusedClass==a.courseName?t.focused:"unfocused"},s.a.createElement(E.a,{primary:a.courseName,className:t.textcenter}))})))))}var O=a(336);function S(e){return s.a.createElement("div",{className:"App"},s.a.createElement("div",null,"feed for class ",e.focusedClass),s.a.createElement(O.a,{id:"outlined-multiline-static",multiline:!0,fullWidth:!0,placeholder:"Add a post for ".concat(e.focusedClass),rows:4,defaultValue:"",variant:"outlined"}))}var y=a(322),j=Object(g.a)({spaceFromLeft:{marginLeft:"5%"}});var A=Object(p.b)((function(e){return{userData:e.logged.user,classes:e.classes.currentClasses}}),null)((function(e){var t=j(),a=Object(n.useState)(""),r=Object(m.a)(a,2),l=r[0],o=r[1];return Object(n.useEffect)((function(){null==e.userData&&e.history.push("/login")})),s.a.createElement("div",{className:t.spaceFromLeft},s.a.createElement(d.a,{container:!0,spacing:3},s.a.createElement(d.a,{item:!0,xs:3},s.a.createElement(C,{focusedClass:l,classes:e.classes,setFocusedClass:o})),s.a.createElement(d.a,{item:!0,xs:6},s.a.createElement(S,{focusedClass:l}))),s.a.createElement(y.a,{orientation:"vertical"}))})),N=a(16),M=a(323),I=a(337),k=a(320),w=a(324),_=a(18),L=a.n(_),R=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return{type:"GET_ERRORS",payload:{msg:e,status:t,id:a}}},T=(a(194),a(96)),x=a.n(T),D=a(9),U=a(140);function G(e){e.sort((function(e,t){var a=e.username.toUpperCase(),n=t.username.toUpperCase();return a<n?-1:a>n?1:0})),console.log(e);for(var t=0,a=1;a<e.length;a++)e[a].username!=e[t].username&&(e[++t]=e[a]);for(;t+1<e.length;)e.splice(t+1);return console.log(e),e}var F=function(e,t,a,n){var s=JSON.stringify({username:a,password:n});L.a.post("http://localhost:5000/login",s,{headers:{"Content-Type":"application/json"}}).then((function(n){e({type:"LOGIN_SUCCESS",payload:n.data}),function(e,t){L.a.get("http://www.localhost:5000/".concat(t)).then(function(){var a=Object(U.a)(x.a.mark((function a(n){var s,r,l;return x.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:for(e({type:"GET_CLASSES_FROM_DB",payload:n.data}),s=n.data,r=[],l=0;l<s.length;l++)r.push(L.a.get("http://www.localhost:5000/course/"+s[l]._id).then((function(e){return e.data})).catch((function(e){console.log(e)})));Promise.all(r).then((function(a){var n,s=(n=[]).concat.apply(n,Object(D.a)(a));s=(s=G(s)).filter((function(e){return e.username!=t})),e({type:"SET_STUDENTS",payload:s})}));case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()).catch((function(e){console.log(e)}))}(e,a),e({type:"SIGN_IN"}),B(e,t)})).catch((function(t){console.log(t.response),e({type:"LOGIN_FAIL"}),console.log(t)}))},B=function(e,t){var a=W();L.a.get("http://localhost:5000/get/user",a).then((function(a){console.log(a.data[0].username),e({type:"USER_LOADED",payload:a.data[0]}),t.push("/")})).catch((function(t){console.log(t),e({type:"AUTH_ERROR",payload:t})}))},W=function(){var e=localStorage.getItem("token"),t={headers:{"Content-type":"application/json"}};return e&&(t.headers["x-auth-token"]=e),t},P=a(20),Q={loggedIn:!1,classes:[],token:localStorage.getItem("token"),isLoading:!1,user:null};var J=Object(p.b)((function(e){return console.log(e),{isLogged:e.logged.loggedIn,errorMsg:e.error.msg.msg,isLoading:e.logged.isLoading}}),(function(e){return{register:function(t,a,n,s,r,l){!function(e,t,a,n,s,r,l){var o=JSON.stringify({fullName:a,email:n,username:s,password:r,college:l});L.a.post("http://localhost:5000/signup",o,{headers:{"Content-Type":"application/json"}}).then((function(a){console.log(a.data);a.data.token;e({type:"REGISTER_SUCCESS",payload:a.data[0]}),e({type:"SIGN_IN"}),B(e,t)})).catch((function(t){e(R(t.response.data,t.response.status,"REGISTER_FAIL")),e({type:"REGISTER_FAIL"}),console.log(t)}))}(e,t,a,n,s,r,l)}}}))((function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),r=a[0],l=a[1],o=Object(n.useState)(""),c=Object(m.a)(o,2),i=c[0],u=c[1],d=Object(n.useState)(""),g=Object(m.a)(d,2),h=g[0],f=g[1],E=Object(n.useState)(""),v=Object(m.a)(E,2),b=v[0],C=v[1],S=Object(n.useState)(""),y=Object(m.a)(S,2),j=y[0],A=y[1],_=Object(n.useState)(""),L=Object(m.a)(_,2),R=L[0],T=L[1],x=Object(n.useState)(""),D=Object(m.a)(x,2),U=D[0],G=D[1],F=Object(n.useState)(""),B=Object(m.a)(F,2),W=B[0],P=B[1],Q=Object(n.useState)(""),J=Object(m.a)(Q,2),Y=J[0],K=J[1],q=Object(n.useState)(""),V=Object(m.a)(q,2),H=V[0],z=V[1],X=Object(n.useState)(!1),Z=Object(m.a)(X,2),$=(Z[0],Z[1]),ee=Object(n.useState)(!1),te=Object(m.a)(ee,2);function ae(){var e=new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);return console.log(e.test(h)),e.test(h)}return te[0],te[1],Object(p.c)(),s.a.createElement("div",{id:"signup",className:"App"},s.a.createElement(M.a,{maxWidth:"sm"},s.a.createElement(I.a,{className:"Box",border:1,borderColor:"primary.main"},s.a.createElement("form",{id:"formforsignup"},s.a.createElement("p",null,e.errorMsg),s.a.createElement("div",{className:"spaceForInput"},s.a.createElement(O.a,{placeholder:"Full Name",name:"fullname",error:R.length>0,label:"Full Name",id:"standard-error-helper-text",helperText:R,type:"text",onChange:function(e){u(e.target.value)}})),s.a.createElement("div",{className:"spaceForInput"},s.a.createElement(O.a,{label:"email",placeholder:"E-mail",name:"email",type:"email",onChange:function(e){f(e.target.value)}}),"email is empty"===W&&s.a.createElement("div",{id:"errorlabel"},W),"Invalid email format"===W&&s.a.createElement("div",{id:"errorlabel"},"Invalid Email Format!")),s.a.createElement("div",{className:"spaceForInput"},s.a.createElement(k.a,{placeholder:"Username",name:"username",type:"text",onChange:function(e){l(e.target.value)}}),U.length>0&&s.a.createElement("div",{id:"errorlabel"},U)),s.a.createElement("div",{className:"spaceForInput"},s.a.createElement(k.a,{placeholder:"password",name:"password",type:"password",onChange:function(e){C(e.target.value)}}),Y.length>0&&s.a.createElement("div",{id:"errorlabel"},Y)),s.a.createElement(O.a,{id:"standard-select-currency",select:!0,label:"Select",name:"college",onChange:function(e){A(e.target.value)},helperText:"Please select your College"},s.a.createElement(w.a,{value:"Queens College"},"Queens"),s.a.createElement(w.a,{value:"Hunter College"},"Hunter"),s.a.createElement(w.a,{value:"Baruch"},"Baruch")),H.length>0&&s.a.createElement("div",{id:"errorlabel"},H),s.a.createElement(N.c,{to:{pathname:"/"},onClick:function(t){!function(){$(!0),0===i.length?T("fullname is blank"):0===h.length?(T(""),P("email is empty")):ae()?0===r.length?(T(""),P(""),G("Username is empty")):0===b.length?(T(""),P(""),G(""),K("password is empty")):(T(""),P(""),G(""),K(""),z("College must be chosen")):(T(""),P("Invalid email format"));return r.length>0&&i.length>0&&h.length>0&&b.length>0&&j.length>0&&ae()}()?t.preventDefault():(t.preventDefault(),console.log(e.errorMsg),e.register(e.history,i,h,r,b,j))},activeStyle:{color:"black"},className:"navLink"},"Submit")))))}));var Y=Object(p.b)((function(e){return console.log(e),{isLoading:e.logged.isLoading,isLogged:e.logged.loggedIn,errorMsg:e.error.msg.message}}),(function(e){return{login:function(t,a,n){F(e,t,a,n)}}}))((function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),r=a[0],l=a[1],o=Object(n.useState)(""),c=Object(m.a)(o,2),i=c[0],u=c[1],d=Object(n.useState)(!1),g=Object(m.a)(d,2),h=(g[0],g[1]),f=Object(n.useState)(!1),E=Object(m.a)(f,2),v=(E[0],E[1],Object(n.useState)("")),b=Object(m.a)(v,2),C=b[0],O=b[1],S=Object(n.useState)(""),y=Object(m.a)(S,2),j=y[0],A=y[1];function w(t){!function(){h(!0);var e=function(){for(var e=0,t=0,a=0;a<i.length;a++){var n=i.charAt(a);n==n.toUpperCase()&&e++,new RegExp(/^[\d]$/).test(n)&&t++}return t>0&&t<i.length&&e>0&&e<i.length}();0===r.length?O("Username is empty"):0===i.length?(O(""),A("password is empty")):i.length<7?(O(""),A("password needs to be more then eight characters")):e||(O(""),A("password needs at least one digit and one uppercase"));return i.length>=7&&e}()?t.preventDefault():(t.preventDefault(),e.login(e.history,r,i),console.log(e.errorMsg))}return Object(p.c)(),s.a.createElement("div",{id:"signup",className:"App"},s.a.createElement(M.a,{maxWidth:"sm"},s.a.createElement(I.a,{className:"Box",border:1,borderColor:"primary.main"},s.a.createElement("form",{id:"formforsignup"},s.a.createElement("p",null,e.errorMsg),s.a.createElement("div",{className:"spaceForInput"},s.a.createElement(k.a,{placeholder:"Username",name:"username",type:"text",onChange:function(e){l(e.target.value)}}),C.length>0&&s.a.createElement("div",{id:"errorlabel"},C)),s.a.createElement("div",{className:"spaceForInput"},s.a.createElement(k.a,{placeholder:"password",name:"password",type:"password",onChange:function(e){u(e.target.value)},onKeyPress:function(e){return"Enter"===e.key?w(e):null}}),j.length>0&&s.a.createElement("div",{id:"errorlabel"},j)),s.a.createElement(N.c,{to:{pathname:"/",state:{}},onClick:w,activeStyle:{color:"black"},className:"navLink"},"Login")))))})),K=a(31),q=a(332),V=a(333),H=a(53),z=a(326),X=a(93),Z=a.n(X),$=a(142),ee=a.n($),te=a(151),ae=a(325),ne=a(91),se=a.n(ne),re=a(92),le=a.n(re),oe=a(90),ce=a.n(oe),ie=a(331),ue=a(339),me=a(330),pe=a(328),de=a(329),ge=a(327),he=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).openModal=function(){n.setState({isModalOpened:!0}),console.log(n.state.isModalOpened)},n.closeModal=function(){n.setState({isModalOpened:!1}),console.log(n.state.isModalOpened)},n.updateProfessorname=function(e){n.setState({profName:e.target.value})},n.updateClass=function(e){n.setState({class:e.target.value})},n.updateTime=function(e){n.setState({time:e.target.value})},n.addClass=function(){var e={courseName:n.state.class,profName:n.state.profName,time:n.state.time,username:n.props.userData.username};n.state.classes.push(e),n.setState({classes:n.state.classes}),L.a.post("http://localhost:5000/",{courseName:n.state.class,profName:n.state.profName,time:n.state.time,username:n.props.userData.username,nameOfUser:n.props.userData.fullName}).then().catch((function(e){console.log(e)})),n.setState({isModalOpened:!1})},n.listItemClicked=function(e){console.log(e)},n.delete=function(e){console.log(e),L.a.delete("http://localhost:5000/".concat(e)).then().catch((function(e){return console.log(e)}))},n.state={isModalOpened:!1,profName:"",class:"",time:"",classes:n.props.classes},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"App",id:"parentDiv"},s.a.createElement("div",{id:"nameandcollegeandimage"},s.a.createElement("div",{id:"displayflexrow"},s.a.createElement("div",{id:"profileimage"},s.a.createElement("img",null)),s.a.createElement("div",{id:"nameandcollege"},s.a.createElement("div",{id:"fullname"},s.a.createElement("p",null,this.props.userData.fullName)),s.a.createElement("div",{id:"college"},s.a.createElement("p",null,"Student @ ",this.props.userData.college)))),s.a.createElement("p",null,"The username is ",this.props.userData.username),s.a.createElement("p",null,"Your current email set is:",this.props.userData.email)),s.a.createElement("div",{id:"listItems"},s.a.createElement(h.a,{id:"list"},s.a.createElement(f.a,{className:"listItem",id:"topRowOfList"},s.a.createElement(E.a,{primary:"Class Name"}),s.a.createElement(E.a,{primary:"Professor Name"}),s.a.createElement(E.a,{primary:"Time Taken"}),s.a.createElement(ae.a,null,s.a.createElement(z.a,{onClick:this.openModal},s.a.createElement(ce.a,null)),s.a.createElement(ue.a,{open:this.state.isModalOpened,onClose:this.closeModal,"aria-labelledby":"form-dialog-title"},s.a.createElement(ge.a,{id:"form-dialog-title"},"Enter a Class"),s.a.createElement(pe.a,null,s.a.createElement(de.a,null,"Enter the class name, professor name, and time below:"),s.a.createElement(O.a,{autoFocus:!0,margin:"dense",id:"classname",label:"Class name:",type:"text",fullWidth:!0,onChange:this.updateClass}),s.a.createElement(O.a,{autoFocus:!0,margin:"dense",id:"professor name",label:"Professor name:",type:"text",fullWidth:!0,onChange:this.updateProfessorname}),s.a.createElement(O.a,{autoFocus:!0,margin:"dense",id:"time",label:"Time",type:"time",fullWidth:!0,onChange:this.updateTime})),s.a.createElement(me.a,null,s.a.createElement(ie.a,{onClick:this.closeModal,color:"primary"},"Cancel"),s.a.createElement(ie.a,{onClick:this.addClass,color:"primary"},"Add Class"))))),this.state.classes.map((function(t,a){return s.a.createElement(f.a,{button:!0,id:"listItem",component:N.b,to:{pathname:"/class",state:{classId:t._id,className:t.courseName,profName:t.profName,time:t.time,username:e.props.userData.username}},onClick:function(){e.props.getStudentsForClass(t,t._id)},key:a,className:"listItem"},s.a.createElement(E.a,{primary:t.courseName}),s.a.createElement(E.a,{primary:t.profName}),s.a.createElement(E.a,{primary:t.time}),s.a.createElement(ae.a,null,s.a.createElement(z.a,{onClick:function(){e.delete(t._id)}},s.a.createElement(se.a,null)),s.a.createElement(z.a,null,s.a.createElement(le.a,null))))})))))}}]),a}(s.a.Component);var fe=Object(p.b)((function(e){return{userData:e.logged.user,classes:e.classes.currentClasses}}),(function(e){return{getStudentsForClass:function(t,a){console.log(t),function(e,t,a){L.a.get("http://www.localhost:5000/course/"+a).then((function(a){console.log(a.data),e({type:"GET_QUERIED_CLASSES_FROM_DB",payload:a.data}),e({type:"SET_CLASS",payload:t})})).catch((function(e){console.log(e)}))}(e,t,a)}}}))(he),Ee=Object(g.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},link:{paddingLeft:3,textDecoration:"none",fontSize:20,color:"white"}}}));var ve=Object(p.b)((function(e){return console.log(e),{isLogged:e.logged.loggedIn}}),(function(e){return{signOut:function(){!function(e){e({type:"SIGN_OUT"}),e({type:"LOGOUT_SUCCESS"})}(e)}}}))(Object(K.withRouter)((function(e){var t=Ee(),a=s.a.useState(!0),n=Object(m.a)(a,2),r=(n[0],n[1],s.a.useState(null)),l=Object(m.a)(r,2),o=l[0],c=l[1],i=Boolean(o),u=function(){e.history.push("/login"),e.signOut()},p=function(){c(null)};return s.a.createElement("div",{className:t.root},s.a.createElement(q.a,{position:"static"},s.a.createElement(V.a,null,s.a.createElement(z.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu"},s.a.createElement(Z.a,null)),s.a.createElement(H.a,{variant:"h6",className:t.title},"Course-Chat"),s.a.createElement("div",null,!1===e.isLogged&&s.a.createElement(N.b,{className:t.link,to:"/signup"},"Sign up"),!1===e.isLogged&&s.a.createElement(N.b,{className:t.link,to:"/login"},"Login"),e.isLogged&&s.a.createElement(N.b,{className:t.link,to:"/profile"},"Profile"),e.isLogged&&s.a.createElement(N.b,{className:t.link,to:"/chat"},"Messages"),e.isLogged&&s.a.createElement(N.b,{className:t.link,to:"/signup",onClick:u},"LogOut"),s.a.createElement(z.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){c(e.currentTarget)},color:"inherit"},s.a.createElement(ee.a,null)),s.a.createElement(te.a,{id:"menu-appbar",anchorEl:o,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:i,onClose:p},e.isLogged&&s.a.createElement(w.a,{onClick:u},s.a.createElement(N.b,{to:"/signup"},"Log Out")),s.a.createElement(w.a,{onClick:p},s.a.createElement(N.b,{to:"/signup"},"Sign up")),s.a.createElement(w.a,{onClick:p},s.a.createElement(N.b,{to:"/profile"},"User Profile")))))))}))),be=a(94),Ce=a(143),Oe=a.n(Ce),Se=a(74),ye=a.n(Se),je=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={students:[]},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){console.log(this.props.classInfo),console.log(this.props.classInfo.username)}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"App"},this.props.classInfo.courseName,s.a.createElement("p",null,this.props.classInfo.profName),s.a.createElement("p",null,this.props.classInfo.time),s.a.createElement("p",null,"class component"),s.a.createElement("p",null,"Students taking this class!"),s.a.createElement(h.a,null,this.props.queriedClasses.map((function(t,a){return s.a.createElement("div",null,t.username!=e.props.classInfo.username&&s.a.createElement(f.a,null,s.a.createElement(E.a,{primary:t.username}),s.a.createElement(ae.a,null,s.a.createElement(be.Link,{to:{pathname:"/chat",state:{username:e.props.classInfo.username,sendMessageTo:t.username}}},s.a.createElement(z.a,null,s.a.createElement(Oe.a,null))),s.a.createElement(z.a,null,s.a.createElement(ye.a,null)))))}))))}}]),a}(s.a.Component);var Ae=Object(p.b)((function(e){return console.log(e),{queriedClasses:e.classes.queriedClasses,classInfo:e.classes.classInfo}}),(function(e){return{}}))(je),Ne=(a(200),a(144)),Me=a.n(Ne),Ie=a(145),ke=a.n(Ie),we=(a(264),a(99)),_e=a.n(we),Le=function(e){var t=e.message,a=(e.currentChatter,e.username),n=t.text||t.message,r=!0;return null!=t.from&&t.from!=a&&(r=!1,t.from.trim().toLowerCase()),r?s.a.createElement("div",{className:"messageContainer justifyEnd"},s.a.createElement("div",{className:"messageBox backgroundBlue"},s.a.createElement("p",{className:"messageText colorWhite"},_e.a.emojify(n)))):s.a.createElement("div",{className:"messageContainer justifyStart"},s.a.createElement("div",{className:"messageBox backgroundLight"},s.a.createElement("p",{className:"messageText colorDark"},_e.a.emojify(n))))},Re=(a(265),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement(ke.a,{className:"messages"},this.props.messages.map((function(t,a){return s.a.createElement("div",{key:a},s.a.createElement(Le,{message:t,currentChatter:e.props.currentChatter,username:e.props.currentUser}))})))}}]),a}(s.a.Component)),Te=a(146),xe=a.n(Te),De=a(147),Ue=a.n(De),Ge=a(148),Fe=a.n(Ge),Be=(a(266),function(e){var t=e.room,a=e.openModal;return s.a.createElement("div",{className:"infoBar"},s.a.createElement("div",{className:"leftInnerContainer"},s.a.createElement("img",{className:"onlineIcon",src:xe.a,alt:"online icon"}),s.a.createElement("h3",null,t)),s.a.createElement("div",{className:"rightInnerContainer"},s.a.createElement(ie.a,{onClick:function(){return a()}},s.a.createElement(Fe.a,null)),s.a.createElement("a",{href:"/"},s.a.createElement("img",{src:Ue.a,alt:"close icon"}))))}),We=(a(267),function(e){var t=e.setMessage,a=e.sendMessage,n=e.message,r=e.currentChatter;return s.a.createElement("form",{className:"form"},s.a.createElement("input",{className:"input",type:"text",placeholder:"Type a message...",value:n,onChange:function(e){var a=e.target.value;return t(a)},onKeyPress:function(e){return"Enter"===e.key?a(e):null}}),s.a.createElement("button",{disabled:""==r,className:""!==r?"sendButton":"redSendButton",onClick:function(e){return a(e)}},"Send"))}),Pe=a(8),Qe=a(335),Je=a(340),Ye=(a(268),a(75)),Ke=a(334),qe=a(276),Ve=Object(g.a)((function(e){return{root:{padding:"10px 0px 10px 0px",display:"flex",alignItems:"center",width:"100%",borderTopColor:"gray"},input:{marginLeft:e.spacing(4),flex:1},iconButton:{padding:10},divider:{height:28,margin:4}}}));function He(e){var t=Ve(),a=e.handleChangeSearchText;return s.a.createElement(I.a,{className:t.root,borderColor:"grey.500",borderTop:1,borderBottom:1},s.a.createElement(H.a,{variant:"h6"},"To:"),s.a.createElement(qe.a,{className:t.input,placeholder:"Search classmates",onChange:function(e){return a(e.target.value)},fullWidth:!0}))}var ze=a(149),Xe=a.n(ze),Ze=Object(g.a)({avatar:{backgroundColor:Ye.a[100],color:Ye.a[600]},grow:{justifyContent:"flex-end",flex:1},listItem:{color:Ye.a[700],borderBottom:0},nameUnderUsername:{flexGrow:1,flexShrink:1,flexBasis:"auto",width:"100%"},username:{fontWeight:"bold",color:Ke.a[900]},name:{color:"gray"},courseName:{color:Ye.a[800]},titleAndCloseIcon:{display:"flex"}});function $e(e){var t=Ze(),a=e.addChatter,r=e.closeModal,l=e.modalOpened,o=e.classMates,c=Object(n.useState)(o),i=Object(m.a)(c,2),u=i[0],p=i[1];return s.a.createElement(s.a.Fragment,null,s.a.createElement(ue.a,{id:"dialog",open:l,onClose:r,fullWidth:!0},s.a.createElement("div",{className:t.titleAndCloseIcon},s.a.createElement(ge.a,{className:t.grow,id:"simple-dialog-title"},"New Message"),s.a.createElement(ie.a,{onClick:function(){return r()}},s.a.createElement(Xe.a,null))),s.a.createElement(He,{handleChangeSearchText:function(e){var t=o.filter((function(t){return-1!=t.username.toLowerCase().indexOf(e.toLowerCase())}));p(t)}}),s.a.createElement(h.a,null,u.map((function(e,n){return s.a.createElement(f.a,Object(Pe.a)({className:t.listItem,button:!0,id:"listItem",onClick:function(){return function(e){a(e.username),r()}(e)},key:n},"className","listItem"),s.a.createElement(Qe.a,null,s.a.createElement(Je.a,{className:t.avatar},s.a.createElement(ye.a,null))),s.a.createElement("div",{className:t.nameUnderUsername},s.a.createElement(E.a,{className:t.username,primary:e.username}),s.a.createElement(E.a,{className:t.name,primary:e.nameOfUser})),s.a.createElement(E.a,{primary:e.courseName,className:t.courseName}))})))))}a(269),a(270);var et=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.chatters,n=t.currentChatter;return s.a.createElement("div",{className:"chattersList"},a.map((function(t){return s.a.createElement(f.a,{id:n==t?"currentChatter":"chatter",button:!0,onClick:function(){return e.props.changeChatter(t)}},s.a.createElement("p",null,t))})))}}]),a}(s.a.Component),tt={chatters:[],messages:[],socketId:""},at=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).filterMessages=function(e,t){for(var a=[],s=0,r=0;r<e.length;r++)e[r].from!=t&&e[r].to!==t||(a[s++]=e[r]);console.log(a),n.setState({messagesToShow:a})},n.sendMessage=function(e){e.preventDefault(),""!=n.state.message&&n.state.socket.emit("sendPrivateMessage",n.state.message,n.state.username,n.state.currentChatter,(function(){return n.setMessage("")}));var t={message:n.state.message,from:n.state.username,to:n.state.currentChatter};n.props.addMessage(t),n.setState({allMessages:[].concat(Object(D.a)(n.state.allMessages),[t])}),n.filterMessages(n.state.allMessages,n.state.currentChatter),n.setMessage("")},n.setMessage=function(e){n.setState({message:e})},n.addChatter=function(e){var t=n.state.chatters.indexOf(e);console.log(t),-1==t&&n.setState({chatters:[].concat(Object(D.a)(n.state.chatters),[e])}),n.changeChatter(e)},n.changeChatter=function(e){n.setState({currentChatter:e}),n.filterMessages(n.state.allMessages,e)},n.openModal=function(){n.setState({modalOpened:!0})},n.closeModal=function(){n.setState({modalOpened:!1})},n.state={username:n.props.user.username,currentChatter:"",chatters:[],allMessages:[],messagesToShow:[],socket:Me()("http://localhost:4000/"),message:"",modalOpened:!1},n}return Object(c.a)(a,[{key:"componentWillMount",value:function(){var e=this;console.log("mounted again");var t={};if(0!==this.props.allMessages.length?(this.setState({allMessages:this.props.allMessages}),this.setState({chatters:this.props.allChatters})):(L.a.get("http://localhost:5000/messages/".concat(this.state.username,"/chatters")).then((function(a){console.log(a.data);var n=a.data.filter((function(t){return t!=e.state.username}));t.chatters=n,e.setState({chatters:n})})),L.a.get("http://localhost:5000/messages/".concat(this.state.username)).then((function(a){t.messages=a.data,e.setState({allMessages:t.messages}),e.props.setMessagesAndChatters(t)})).then((function(){if(console.log("yay"),null!=e.props.location.state){console.log("only when u come from class component");var t=e.props.location.state.sendMessageTo;e.setState({currentChatter:t}),e.props.allChatters.includes(t)||e.setState({chatters:[].concat(Object(D.a)(e.state.chatters),[t])}),e.filterMessages(e.props.allMessages,t)}}))),null!=this.props.location.state){console.log("only when u come from class component");var a=this.props.location.state.sendMessageTo;this.setState({currentChatter:a}),this.props.allChatters.includes(a)||this.setState({chatters:[].concat(Object(D.a)(this.state.chatters),[a])}),this.filterMessages(this.props.allMessages,a)}this.setState({chatters:this.props.allChatters}),this.filterMessages(this.props.allMessages,this.state.currentChatter),this.state.socket.emit("user_connected",this.state.username),this.state.socket.on("private_message",(function(t,a){t={from:a,to:e.state.username,message:t};e.props.addMessage(t),console.log(t),e.setState({allMessages:[].concat(Object(D.a)(e.state.allMessages),[t])}),e.filterMessages(e.state.allMessages,e.state.currentChatter)}))}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return s.a.createElement("div",{className:"outerContainer"},s.a.createElement(et,{username:this.state.username,chatters:this.state.chatters,changeChatter:this.changeChatter,currentChatter:this.state.currentChatter}),s.a.createElement("div",{className:"container"},s.a.createElement(Be,{openModal:this.openModal,room:this.state.currentChatter}),s.a.createElement(Re,{messages:this.state.messagesToShow,currentChatter:this.state.currentChatter,currentUser:this.state.username}),s.a.createElement(We,{message:this.state.message,setMessage:this.setMessage,sendMessage:this.sendMessage,currentChatter:this.state.currentChatter}),this.state.modalOpened&&s.a.createElement($e,{addChatter:this.addChatter,changeChatter:this.changeChatter,modalOpened:this.state.modalOpened,classMates:this.props.classMates,closeModal:this.closeModal})))}}]),a}(s.a.Component);at.defaultProps={connectedClients:[],classMates:[],username:{username:"akhil"}};var nt=Object(p.b)((function(e){return{allMessages:e.chatters.messages,allChatters:e.chatters.chatters,classMates:e.classes.classMates,user:e.logged.user}}),(function(e){return{setMessagesAndChatters:function(t){e({type:"set_messages_and_chatters_from_db",payload:t})},addMessage:function(t){e({type:"ADD_MESSAGE",payload:t})},addChatter:function(t){e({type:"ADD_CHATTER",payload:t})}}}))(at),st=a(46),rt=a(150),lt={msg:{},status:null,id:null},ot={currentClasses:[],queriedClasses:[],classInfo:{},classMates:[]},ct=[rt.a],it=Object(st.c)({logged:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return{loggedIn:!0};case"SIGN_OUT":return{loggedIn:!1};case"ADD_CLASS":return{classes:[].concat(Object(D.a)(e.classes),[t.payload])};case"USER_LOADING":return Object(P.a)({},e,{isLoading:!0});case"USER_LOADED":return Object(P.a)({},e,{loggedIn:!0,isLoading:!1,user:t.payload});case"LOGIN_SUCCESS":case"REGISTER_SUCCESS":return localStorage.setItem("token",t.payload.token),Object(P.a)({},e,{},t.payload,{loggedIn:!0,isLoading:!1,user:t.payload});case"AUTH_ERROR":case"LOGIN_FAIL":case"LOGOUT_SUCCESS":case"REGISTER_FAIL":return localStorage.removeItem("token"),Object(P.a)({},e,{token:null,user:null,loggedIn:!1,isLoading:!1});default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return console.log(t.payload),Object(P.a)({},e,{msg:t.payload.msg,status:t.payload.status,id:t.payload.id});case"CLEAR_ERRORS":return Object(P.a)({},e,{msg:{},status:null,id:null});default:return e}},chatters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"set_messages_and_chatters_from_db":return{chatters:t.payload.chatters,messages:t.payload.messages};case"ADD_MESSAGE":return Object(P.a)({},e,{messages:[].concat(Object(D.a)(e.messages),[t.payload])});case"ADD_CHATTER":return Object(P.a)({},e,{chatters:[].concat(Object(D.a)(e.chatters),[t.payload])});default:return e}},classes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ot,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_CLASS":return Object(P.a)({},e,{currentClasses:[].concat(Object(D.a)(e.currentClasses),[t.payload])});case"SET_STUDENTS":return console.log(t.payload),Object(P.a)({},e,{classMates:t.payload});case"GET_CLASSES_FROM_DB":return Object(P.a)({},e,{currentClasses:t.payload});case"GET_QUERIED_CLASSES_FROM_DB":return Object(P.a)({},e,{queriedClasses:t.payload});case"SET_CLASS":return Object(P.a)({},e,{classInfo:t.payload});default:return e}}});var ut=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return void console.log(t)}}(),mt=Object(st.d)((function(e,t){return"SIGN_OUT"===t.type&&(e=void 0),it(e,t)}),ut,st.a.apply(void 0,ct));mt.subscribe((function(){return function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(a){console.log(a)}}(mt.getState())}));var pt=mt,dt=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.props.loadUser()}},{key:"render",value:function(){return s.a.createElement(N.a,null,s.a.createElement("div",{className:"App"},s.a.createElement(ve,null),s.a.createElement(K.Route,{path:"/",exact:!0,component:A}),s.a.createElement(K.Route,{path:"/signup",component:J}),s.a.createElement(K.Route,{path:"/login",component:Y}),s.a.createElement(K.Route,{path:"/profile",component:fe}),s.a.createElement(K.Route,{path:"/class",component:Ae}),s.a.createElement(K.Route,{path:"/chat",component:nt})))}}]),a}(s.a.Component);var gt=Object(p.b)(null,(function(e){return{loadUser:function(){B(e)}}}))(dt);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(p.a,{store:pt},s.a.createElement(gt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[167,1,2]]]);
//# sourceMappingURL=main.f340d5a0.chunk.js.map