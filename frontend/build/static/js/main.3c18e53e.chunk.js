(this.webpackJsonpAzakana=this.webpackJsonpAzakana||[]).push([[0],{12:function(e,t,n){},30:function(e,t,n){},33:function(e,t,n){e.exports=n.p+"static/media/icon.3fe78924.png"},34:function(e,t,n){e.exports=n.p+"static/media/yone-fanart-login-screen-animation-loop-league-of-legends.32b64a8d.mp4"},35:function(e,t,n){e.exports=n(67)},40:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(31),l=n.n(c),o=n(15),i=(n(40),n(7)),s=["btn--classic","btn--connect"],u=["btn--medium","btn--large"],m=function(e){var t=e.children,n=e.type,a=e.onClick,c=e.buttonStyle,l=e.buttonSize,o=s.includes(c)?c:s[0],m=u.includes(l)?l:u[0];return r.a.createElement(i.b,{to:"/sign-in",className:"btn-mobile"},r.a.createElement("button",{className:"btn ".concat(o," ").concat(m),onClick:a,type:n},t))},p=(n(46),n(33)),d=n.n(p);var h=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(!0),s=Object(o.a)(l,2),u=s[0],p=s[1],h=function(){return c(!1)},b=function(){window.innerWidth<=960?p(!1):p(!0)};return Object(a.useEffect)((function(){b()}),[]),window.addEventListener("resize",b),r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"navbar-container"},r.a.createElement("img",{alt:"",src:d.a,className:"logo"}),r.a.createElement(i.b,{to:"/",className:"navbar-title",onClick:h},"Azakana"),r.a.createElement("div",{className:"menu-icon",onClick:function(){return c(!n)}},r.a.createElement("i",{className:n?"fas fa-times":"fas fa-bars"})),r.a.createElement("ul",{className:n?"nav-menu active":"nav-menu"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{to:"/statistiques",className:"nav-links",onClick:h},"Statistiques")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{to:"/team",className:"nav-links",onClick:h},"Equipe")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{to:"/patch-notes",className:"nav-links",onClick:h},"Notes de patch")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{to:"/champions",className:"nav-links",onClick:h},"Champions")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{to:"/e-sport",className:"nav-links",onClick:h},"E-sport")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/sign-in",className:"nav-links-mobile",onClick:h},"Connexion"))),u&&r.a.createElement(m,{buttonStyle:"btn--connect"},"Connexion"))))};n(47);var b=function(){return r.a.createElement("div",{className:"footer-container"},r.a.createElement(i.b,{to:"/",className:"social-logo"},"Azakana"))},v=(n(12),n(1)),f=n(2),E=n(4),g=n(3),O=(n(48),n(34)),j=n.n(O),y=n(16),N=n.n(y),k=Object,C=function(e){Object(E.a)(n,e);var t=Object(g.a)(n);function n(){return Object(v.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"handleClick",value:function(){var e=document.getElementById("servers").value,t=document.getElementById("summoner").value,n=document.getElementById("profile"),a=String,r="?api_key=RGAPI-cf20f189-4379-4fb0-81a9-f09eb8337db8";N.a.get("http://127.0.0.1:8000/api/riot/"+e+"/"+t).then((function(t){return k=t.data,a=t.data.id,console.log(k,a),n.innerHTML="<div id='Level' class='level_profile'>"+String(k.summonerLevel)+"</div><div id='summoner_name' class='summoner_profile'>"+String(k.name)+"</div><div id='stats' class='stats_profile'></div>",N.a.get("https://"+e+".api.riotgames.com/lol/league/v4/entries/by-summoner/"+a+r)})).then((function(t){k=t.data;for(var n=document.getElementById("stats"),c=0;c<k.length;c++)"RANKED_SOLO_5x5"===k[c].queueType&&(n.innerHTML+="Rang Solo/Duo: "+k[c].tier+" "+k[c].rank+"<br>",n.innerHTML+="Pourcentage de victoire: "+Math.round(k[c].wins/(k[c].wins+k[c].losses)*100)+"%<br>",n.innerHTML+="Victoires:"+String(k[c].wins)+" /D\xe9faites: "+String(k[c].losses)+"<br>"),"RANKED_FLEX_SR"===k[c].queueType&&(n.innerHTML+="Rang Flex: "+k[c].tier+" "+k[c].rank+"<br>",n.innerHTML+="Pourcentage de victoire: "+Math.round(k[c].wins/(k[c].wins+k[c].losses)*100)+"%<br>",n.innerHTML+="Victoires:"+String(k[c].wins)+" /D\xe9faites: "+String(k[c].losses)+"<br>"),n.innerHTML+="<br>";return N.a.get("https://"+e+".api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/"+a+r)})).then((function(e){var t=document.getElementById("stats");console.log(e.data),t.innerHTML+="<H3>Top 3 des champions les plus jou\xe9s :</H3>";for(var n=0;n<3;n++)t.innerHTML+="id du champion : "+String(e.data[n].championId)+", points de maitrise : "+String(e.data[n].championPoints)+"<br>"})).catch((function(e){console.log(e.response),n.innerHTML="<div id='stats' class='error'>Cet utilisateur n'existe pas.<br>Veuillez v\xe9rifier le pseudo et/ou le serveur.</div>"}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"mid-container"},r.a.createElement("video",{src:j.a,autoPlay:!0,loop:!0,muted:!0}),r.a.createElement("div",{className:"search",id:"search"},r.a.createElement("select",{id:"servers",className:"servers"},r.a.createElement("option",{value:"euw1"},"EUW"),r.a.createElement("option",{value:"na1"},"NA"),r.a.createElement("option",{value:"euna1"},"EUNA"),r.a.createElement("option",{value:"tr1"},"TR"),r.a.createElement("option",{value:"jp1"},"JP"),r.a.createElement("option",{value:"oc1"},"OC"),r.a.createElement("option",{value:"kr"},"KR"),r.a.createElement("option",{value:"ru"},"RU")),r.a.createElement("input",{type:"search",id:"summoner",className:"input","aria-label":"Search through site content",placeholder:"Ton pseudo"}),r.a.createElement("button",{onClick:this.handleClick,className:"Research"},"Rechercher")),r.a.createElement("div",{id:"profile"}))}}]),n}(r.a.Component),w=function(e){Object(E.a)(n,e);var t=Object(g.a)(n);function n(){return Object(v.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,null))}}]),n}(r.a.Component),S=n(5),L=function(e){Object(E.a)(n,e);var t=Object(g.a)(n);function n(){return Object(v.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"statistiques"},"Statistiques"))}}]),n}(r.a.Component),T=(n(30),function(e){Object(E.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(v.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={credentials:{username:"",password:""}},e.login=function(t){fetch("http://127.0.0.1:8000/auth/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e.state.credentials)}).then((function(e){return e.json()})).then((function(t){e.props.userLogin(t.token),console.log(t)})).catch((function(e){return console.error(e)}))},e.inputChanged=function(t){var n=e.state.credentials;n[t.target.name]=t.target.value,e.setState({credentials:n})},e}return Object(f.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"Login"},r.a.createElement("label",null,"Username:",r.a.createElement("input",{type:"text",name:"username",className:"form-control",value:this.state.credentials.username,onChange:this.inputChanged})),r.a.createElement("br",null),r.a.createElement("label",null,"Password:",r.a.createElement("input",{type:"password",name:"password",className:"form-control",value:this.state.credentials.password,onChange:this.inputChanged})),r.a.createElement("br",null),r.a.createElement("button",{className:"form-control",onClick:this.login},"Login"),r.a.createElement(i.b,{to:"/sign-up"},r.a.createElement("button",{className:"form-control"},"Register")))}}]),n}(a.Component)),M=function(e){Object(E.a)(n,e);var t=Object(g.a)(n);function n(){return Object(v.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"sign-in"},r.a.createElement(T,null)))}}]),n}(r.a.Component),H=function(e){Object(E.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(v.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={credentials:{username:"",password:"",mail:""}},e.inputChanged=function(t){var n=e.state.credentials;n[t.target.name]=t.target.value,e.setState({credentials:n})},e.register=function(t){fetch("http://127.0.0.1:8000/api/users/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e.state.credentials)}).then((function(e){return e.json()})).then((function(e){console.log(e.token)})).catch((function(e){return console.error(e)}))},e}return Object(f.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"Login"},r.a.createElement("label",null,"Username:",r.a.createElement("input",{type:"text",name:"username",className:"form-control",value:this.state.credentials.username,onChange:this.inputChanged})),r.a.createElement("br",null),r.a.createElement("label",null,"Password:",r.a.createElement("input",{type:"password",name:"password",className:"form-control",value:this.state.credentials.password,onChange:this.inputChanged})),r.a.createElement("br",null),r.a.createElement("label",null,"Mail:",r.a.createElement("input",{type:"mail",name:"mail",className:"form-control",value:this.state.credentials.mail,onChange:this.inputChanged})),r.a.createElement("br",null),r.a.createElement("button",{className:"form-control",onClick:this.register},"Register"))}}]),n}(a.Component),R=function(e){Object(E.a)(n,e);var t=Object(g.a)(n);function n(){return Object(v.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"sign-up"},r.a.createElement(H,null)))}}]),n}(r.a.Component),x=function(e){Object(E.a)(n,e);var t=Object(g.a)(n);function n(){return Object(v.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"patch-notes"},r.a.createElement("button",{onClick:function(){return window.open("https://euw.leagueoflegends.com/fr-fr/news/tags/patch-notes")},className:"btn-patch btn--patch"},"Acc\xe9der aux notes de patch")))}}]),n}(r.a.Component),A=function(e){Object(E.a)(n,e);var t=Object(g.a)(n);function n(){return Object(v.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"team"},"Gestion d'\xe9quipe"))}}]),n}(r.a.Component),F=function(e){Object(E.a)(n,e);var t=Object(g.a)(n);function n(){return Object(v.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"champions"},"Infos sur les champions"))}}]),n}(r.a.Component),P=function(e){Object(E.a)(n,e);var t=Object(g.a)(n);function n(){return Object(v.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"e-sport"},"Lien vers page esport LoL"))}}]),n}(r.a.Component);var q=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,1)[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,r.a.createElement(h,null),r.a.createElement(S.c,null,r.a.createElement(S.a,{exact:!0,path:"/",component:w}),r.a.createElement(S.a,{path:"/statistiques",component:L}),r.a.createElement(S.a,{path:"/team",component:A}),r.a.createElement(S.a,{path:"/patch-notes",component:x}),r.a.createElement(S.a,{path:"/champions",component:F}),r.a.createElement(S.a,{path:"/e-sport",component:P}),r.a.createElement(S.a,{path:"/sign-in",component:M,userLogin:function(e){console.log(e),t(e)}}),r.a.createElement(S.a,{path:"/sign-up",component:R})),r.a.createElement(b,null)))};l.a.render(r.a.createElement(q,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.3c18e53e.chunk.js.map