(this.webpackJsonpAzakana=this.webpackJsonpAzakana||[]).push([[0],{12:function(e,t,n){},30:function(e,t,n){},33:function(e,t,n){e.exports=n.p+"static/media/icon.3fe78924.png"},34:function(e,t,n){e.exports=n.p+"static/media/God King Garen Login Screen - League of Legends.d40d52bc.mp4"},35:function(e,t,n){e.exports=n(67)},40:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(31),l=n.n(c),s=n(15),i=(n(40),n(7)),o=["btn--classic","btn--connect"],u=["btn--medium","btn--large"],m=function(e){var t=e.children,n=e.type,a=e.onClick,c=e.buttonStyle,l=e.buttonSize,s=o.includes(c)?c:o[0],m=u.includes(l)?l:u[0];return r.a.createElement(i.b,{to:"/sign-in",className:"btn-mobile"},r.a.createElement("button",{className:"btn ".concat(s," ").concat(m),onClick:a,type:n},t))},p=(n(46),n(33)),d=n.n(p);var h=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(!0),o=Object(s.a)(l,2),u=o[0],p=o[1],h=function(){return c(!1)},E=function(){window.innerWidth<=960?p(!1):p(!0)};return Object(a.useEffect)((function(){E()}),[]),window.addEventListener("resize",E),r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"navbar-container"},r.a.createElement("img",{alt:"",src:d.a,className:"logo"}),r.a.createElement(i.b,{to:"/",className:"navbar-title",onClick:h},"Azakana"),r.a.createElement("div",{className:"menu-icon",onClick:function(){return c(!n)}},r.a.createElement("i",{className:n?"fas fa-times":"fas fa-bars"})),r.a.createElement("ul",{className:n?"nav-menu active":"nav-menu"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{to:"/statistiques",className:"nav-links",onClick:h},"Statistiques")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{to:"/team",className:"nav-links",onClick:h},"Equipe")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{to:"/patch-notes",className:"nav-links",onClick:h},"Notes de patch")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{to:"/champions",className:"nav-links",onClick:h},"Champions")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{to:"/e-sport",className:"nav-links",onClick:h},"E-sport")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/sign-in",className:"nav-links-mobile",onClick:h},"Connexion"))),u&&r.a.createElement(m,{buttonStyle:"btn--connect"},"Connexion"))))},E=(n(12),n(1)),b=n(2),v=n(4),f=n(3),g=(n(47),n(34)),O=n.n(g),j=n(16),N=n.n(j),y=Object,k=function(e){Object(v.a)(n,e);var t=Object(f.a)(n);function n(){return Object(E.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"handleClick",value:function(){var e=document.getElementById("servers").value,t=document.getElementById("summoner").value,n=document.getElementById("profile"),a=String,r="http://51.210.4.115:8000/api/";N.a.get(r+"profile/"+e+"/"+t).then((function(t){return y=t.data,a=t.data.id,console.log(y,a),n.innerHTML="<div id='Level' class='level'>"+String(y.summonerLevel)+"</div><div id='summoner_name' class='summoner_name'>"+String(y.name)+"</div><div id='stats' class='stats'></div>",N.a.get(r+"ranks/"+e+"/"+a)})).then((function(t){y=t.data;for(var n=document.getElementById("stats"),c=0;c<y.length;c++)"RANKED_SOLO_5x5"===y[c].queueType&&(n.innerHTML+="Rang Solo/Duo: "+y[c].tier+" "+y[c].rank+"<br>",n.innerHTML+="Pourcentage de victoire: "+Math.round(y[c].wins/(y[c].wins+y[c].losses)*100)+"%<br>",n.innerHTML+="Victoires:"+String(y[c].wins)+" /D\xe9faites: "+String(y[c].losses)+"<br>"),"RANKED_FLEX_SR"===y[c].queueType&&(n.innerHTML+="Rang Flex: "+y[c].tier+" "+y[c].rank+"<br>",n.innerHTML+="Pourcentage de victoire: "+Math.round(y[c].wins/(y[c].wins+y[c].losses)*100)+"%<br>",n.innerHTML+="Victoires:"+String(y[c].wins)+" /D\xe9faites: "+String(y[c].losses)+"<br>"),n.innerHTML+="<br>";return N.a.get(r+"masteries/"+e+"/"+a)})).then((function(e){var t=document.getElementById("stats");console.log(e.data),t.innerHTML+="<H3>Top 3 des champions les plus jou\xe9s :</H3>";for(var n=0;n<3;n++)t.innerHTML+="id du champion : "+String(e.data[n].championId)+", points de maitrise : "+String(e.data[n].championPoints)+"<br>"})).catch((function(e){console.log(e.response),n.innerHTML="<div id='stats' class='error'>Cet utilisateur n'existe pas.<br>Veuillez v\xe9rifier le pseudo et/ou le serveur.</div>"}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"mid-container"},r.a.createElement("video",{src:O.a,autoPlay:!0,loop:!0,muted:!0}),r.a.createElement("div",{className:"search",id:"search"},r.a.createElement("select",{id:"servers",className:"servers"},r.a.createElement("option",{value:"euw1"},"EUW"),r.a.createElement("option",{value:"na1"},"NA"),r.a.createElement("option",{value:"euna1"},"EUNA"),r.a.createElement("option",{value:"tr1"},"TR"),r.a.createElement("option",{value:"jp1"},"JP"),r.a.createElement("option",{value:"oc1"},"OC"),r.a.createElement("option",{value:"kr"},"KR"),r.a.createElement("option",{value:"ru"},"RU")),r.a.createElement("input",{type:"search",id:"summoner",className:"input","aria-label":"Search through site content",placeholder:"Ton pseudo"}),r.a.createElement("button",{onClick:this.handleClick,className:"research"},"Rechercher")),r.a.createElement("div",{id:"profile",className:"profile"}))}}]),n}(r.a.Component),C=function(e){Object(v.a)(n,e);var t=Object(f.a)(n);function n(){return Object(E.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,null))}}]),n}(r.a.Component),w=n(5);n(66);var S=function(){return r.a.createElement("div",{className:"footer-container"},r.a.createElement(i.b,{to:"/",className:"social-logo"},"Azakana"))},L=function(e){Object(v.a)(n,e);var t=Object(f.a)(n);function n(){return Object(E.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"statistiques"},"Statistiques"),r.a.createElement(S,null))}}]),n}(r.a.Component),T=(n(30),function(e){Object(v.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(E.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={credentials:{username:"",password:""}},e.login=function(t){fetch("http://127.0.0.1:8000/auth/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e.state.credentials)}).then((function(e){return e.json()})).then((function(t){e.props.userLogin(t.token),console.log(t)})).catch((function(e){return console.error(e)}))},e.inputChanged=function(t){var n=e.state.credentials;n[t.target.name]=t.target.value,e.setState({credentials:n})},e}return Object(b.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"Login"},r.a.createElement("label",null,"Username:",r.a.createElement("input",{type:"text",name:"username",className:"form-control",value:this.state.credentials.username,onChange:this.inputChanged})),r.a.createElement("br",null),r.a.createElement("label",null,"Password:",r.a.createElement("input",{type:"password",name:"password",className:"form-control",value:this.state.credentials.password,onChange:this.inputChanged})),r.a.createElement("br",null),r.a.createElement("button",{className:"form-control",onClick:this.login},"Login"),r.a.createElement(i.b,{to:"/sign-up"},r.a.createElement("button",{className:"form-control"},"Register")))}}]),n}(a.Component)),M=function(e){Object(v.a)(n,e);var t=Object(f.a)(n);function n(){return Object(E.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"sign-in"},r.a.createElement(T,null)),r.a.createElement(S,null))}}]),n}(r.a.Component),H=function(e){Object(v.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(E.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={credentials:{username:"",password:"",mail:""}},e.inputChanged=function(t){var n=e.state.credentials;n[t.target.name]=t.target.value,e.setState({credentials:n})},e.register=function(t){fetch("http://127.0.0.1:8000/api/users/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e.state.credentials)}).then((function(e){return e.json()})).then((function(e){console.log(e.token)})).catch((function(e){return console.error(e)}))},e}return Object(b.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"Login"},r.a.createElement("label",null,"Username:",r.a.createElement("input",{type:"text",name:"username",className:"form-control",value:this.state.credentials.username,onChange:this.inputChanged})),r.a.createElement("br",null),r.a.createElement("label",null,"Password:",r.a.createElement("input",{type:"password",name:"password",className:"form-control",value:this.state.credentials.password,onChange:this.inputChanged})),r.a.createElement("br",null),r.a.createElement("label",null,"Mail:",r.a.createElement("input",{type:"mail",name:"mail",className:"form-control",value:this.state.credentials.mail,onChange:this.inputChanged})),r.a.createElement("br",null),r.a.createElement("button",{className:"form-control",onClick:this.register},"Register"))}}]),n}(a.Component),x=function(e){Object(v.a)(n,e);var t=Object(f.a)(n);function n(){return Object(E.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"sign-up"},r.a.createElement(H,null)),r.a.createElement(S,null))}}]),n}(r.a.Component),F=function(e){Object(v.a)(n,e);var t=Object(f.a)(n);function n(){return Object(E.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"patch-notes"},r.a.createElement("button",{onClick:function(){return window.open("https://euw.leagueoflegends.com/fr-fr/news/tags/patch-notes")},className:"btn-patch btn--patch"},"Acc\xe9der aux notes de patch")),r.a.createElement(S,null))}}]),n}(r.a.Component),A=function(e){Object(v.a)(n,e);var t=Object(f.a)(n);function n(){return Object(E.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"team"},"Gestion d'\xe9quipe"),r.a.createElement(S,null))}}]),n}(r.a.Component),R=function(e){Object(v.a)(n,e);var t=Object(f.a)(n);function n(){return Object(E.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"champions"},"Infos sur les champions"),r.a.createElement(S,null))}}]),n}(r.a.Component),q=function(e){Object(v.a)(n,e);var t=Object(f.a)(n);function n(){return Object(E.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"e-sport"},"Lien vers page esport LoL"),r.a.createElement(S,null))}}]),n}(r.a.Component);var P=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,1)[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,r.a.createElement(h,null),r.a.createElement(w.c,null,r.a.createElement(w.a,{exact:!0,path:"/",component:C}),r.a.createElement(w.a,{path:"/statistiques",component:L}),r.a.createElement(w.a,{path:"/team",component:A}),r.a.createElement(w.a,{path:"/patch-notes",component:F}),r.a.createElement(w.a,{path:"/champions",component:R}),r.a.createElement(w.a,{path:"/e-sport",component:q}),r.a.createElement(w.a,{path:"/sign-in",component:M,userLogin:function(e){console.log(e),t(e)}}),r.a.createElement(w.a,{path:"/sign-up",component:x}))))};l.a.render(r.a.createElement(P,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.fe51a98a.chunk.js.map