(this.webpackJsonpAzakana=this.webpackJsonpAzakana||[]).push([[0],{10:function(e,t,n){},18:function(e,t,n){},23:function(e,t,n){},34:function(e,t,n){e.exports=n.p+"static/media/icon.3fe78924.png"},35:function(e,t,n){e.exports=n.p+"static/media/God King Garen Login Screen - League of Legends.d40d52bc.mp4"},36:function(e,t,n){e.exports=n(72)},46:function(e,t,n){},47:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(19),c=n.n(s),i=n(1),l=n(2),o=n(4),u=n(3),m=(n(23),n(5)),p=["btn--classic","btn--connect"],d=["btn--medium","btn--large"],h=function(e){var t=e.children,n=e.type,a=e.onClick,s=e.buttonStyle,c=e.buttonSize,i=p.includes(s)?s:p[0],l=d.includes(c)?c:d[0];return r.a.createElement(m.b,{to:"/sign-in",className:"btn-mobile"},r.a.createElement("button",{className:"btn ".concat(i," ").concat(l),onClick:a,type:n},t))},v=["btn--classic","btn--connect"],f=["btn--medium","btn--large"],b=function(e){var t=e.children,n=e.type,a=e.onClick,s=e.buttonStyle,c=e.buttonSize,i=v.includes(s)?s:v[0],l=f.includes(c)?c:f[0];return r.a.createElement("button",{className:"btn ".concat(i," ").concat(l),onClick:a,type:n},t)},g=(n(46),n(34)),E=n.n(g),y=n(6),k=n.n(y),O=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={token:k.a.get("Token"),click:!1,button:!0,element:"",str:""},e.handleClick=function(){return e.setState({click:!e.state.click})},e.closeMobileMenu=function(){return e.setState({click:!1})},e.showButton=function(){window.innerWidth<=960?e.setState({button:!1}):e.setState({button:!0})},e.useEffect=[],e.deleteToken=function(){k.a.remove("Token"),k.a.remove("Pseudo"),document.location.href="/"},e.render_token=function(){"undefined"!=typeof e.state.token?e.setState({str:r.a.createElement(b,{onClick:e.deleteToken,buttonStyle:"btn--connect"},"D\xe9connexion")}):e.setState({str:r.a.createElement(h,{buttonStyle:"btn--connect"},"Connexion")})},e}return Object(l.a)(n,[{key:"render",value:function(){return window.addEventListener("resize",this.showButton),r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar",onLoad:this.render_token},r.a.createElement("div",{className:"navbar-container"},r.a.createElement("img",{alt:"",src:E.a,className:"logo"}),r.a.createElement(m.b,{to:"/",className:"navbar-title",onClick:this.closeMobileMenu},"Azakana"),r.a.createElement("div",{className:"menu-icon",onClick:this.handleClick},r.a.createElement("i",{className:this.state.click?"fas fa-times":"fas fa-bars"})),r.a.createElement("ul",{className:this.state.click?"nav-menu active":"nav-menu"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.b,{to:"/statistiques",className:"nav-links",onClick:this.closeMobileMenu},"Statistiques")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.b,{to:"/team",className:"nav-links",onClick:this.closeMobileMenu},"Equipe")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.b,{to:"/patch-notes",className:"nav-links",onClick:this.closeMobileMenu},"Notes de patch")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.b,{to:"/champions",className:"nav-links",onClick:this.closeMobileMenu},"Champions")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.b,{to:"/e-sport",className:"nav-links",onClick:this.closeMobileMenu},"E-sport"))),this.state.str)))}}]),n}(r.a.Component),j=(n(10),n(47),n(35)),N=n.n(j),C=n(9),S=n.n(C),M=Object,T=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"handleClick",value:function(){var e=document.getElementById("servers").value;console.log(e);var t=document.getElementById("summoner").value;console.log(t);var n=document.getElementById("profile"),a=String,r=String,s=[],c=[],i="",l="http://127.0.0.1:8000/api/";S.a.get(l+"profile/"+e+"/"+t).then((function(t){return M=t.data,a=M.id,r=M.puuid,console.log(M,a),n.innerHTML="<div id='Level' class='level'>"+String(M.summonerLevel)+"</div><div id='summoner_name' class='summoner_name'>"+String(M.name)+"</div><div id='stats' class='stats'></div>",S.a.get(l+"ranks/"+e+"/"+a)})).then((function(t){M=t.data;for(var n=document.getElementById("stats"),r=0;r<M.length;r++)"RANKED_SOLO_5x5"===M[r].queueType&&(n.innerHTML+=n.innerHTML+="Rang Solo/Duo: "+M[r].tier+" "+M[r].rank+"<br>",n.innerHTML+="Pourcentage de victoire: "+Math.round(M[r].wins/(M[r].wins+M[r].losses)*100)+"%<br>",n.innerHTML+="Victoires:"+String(M[r].wins)+" /D\xe9faites: "+String(M[r].losses)+"<br>"),"RANKED_FLEX_SR"===M[r].queueType&&(n.innerHTML+="Rang Flex: "+M[r].tier+" "+M[r].rank+"<br>",n.innerHTML+="Pourcentage de victoire: "+Math.round(M[r].wins/(M[r].wins+M[r].losses)*100)+"%<br>",n.innerHTML+="Victoires:"+String(M[r].wins)+" /D\xe9faites: "+String(M[r].losses)+"<br>"),n.innerHTML+="<br>";return S.a.get(l+"masteries/"+e+"/"+a)})).then((function(e){var t=document.getElementById("stats");t.innerHTML+="<H3>Top 3 des champions les plus jou\xe9s :</H3>";for(var n=0;n<3;n++)t.innerHTML+="id du champion : "+String(e.data[n].championId)+", points de maitrise : "+String(e.data[n].championPoints)+"<br>";return t.innerHTML+="<br>",S.a.get(l+"history/europe/"+r)})).then((function(n){s=n.data;for(var a=0;a<s.length;a++)c.push(s[a].slice(5));for(var r=0;r<c.length;r++)S.a.get(l+"details/"+e+"/"+c[r]).then((function(e){i=e.data;var n=document.getElementById("stats");n.innerHTML+="<br>",n.innerHTML+=i.gameMode;var a=Math.floor(i.gameDuration/60),r=i.gameDuration%60;n.innerHTML+=r<10?" "+a+":0"+r:" "+a+":"+r;for(var s=0;s<i.participantIdentities.length;s++)i.participantIdentities[s].player.summonerName===t&&(!0===i.participants[s].stats.win?n.innerHTML+=" Victoire<br>":n.innerHTML+=" D\xe9faite<br>",n.innerHTML+=i.participants[s].stats.kills+"/"+i.participants[s].stats.deaths+"/"+i.participants[s].stats.assists+"<br>")}))})).catch((function(e){console.log(e.response),n.innerHTML="<div id='stats' class='inexistant'>Cet utilisateur n'existe pas.<br>Veuillez v\xe9rifier le pseudo et/ou le serveur.</div>"}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"mid-container"},r.a.createElement("video",{src:N.a,autoPlay:!0,loop:!0,muted:!0}),r.a.createElement("div",{className:"search",id:"search"},r.a.createElement("select",{id:"servers",className:"servers"},r.a.createElement("option",{value:"euw1"},"EUW"),r.a.createElement("option",{value:"na1"},"NA"),r.a.createElement("option",{value:"euna1"},"EUNA"),r.a.createElement("option",{value:"tr1"},"TR"),r.a.createElement("option",{value:"jp1"},"JP"),r.a.createElement("option",{value:"oc1"},"OC"),r.a.createElement("option",{value:"kr"},"KR"),r.a.createElement("option",{value:"ru"},"RU")),r.a.createElement("input",{type:"search",id:"summoner",className:"input","aria-label":"Search through site content",placeholder:"Ton pseudo"}),r.a.createElement("button",{onClick:this.handleClick,className:"research"},"Rechercher")),r.a.createElement("div",{id:"profile",className:"profile"}))}}]),n}(r.a.Component),w=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,null))}}]),n}(r.a.Component),L=n(7);n(66);var H=function(){return r.a.createElement("div",{className:"footer-container"},r.a.createElement(m.b,{to:"/",className:"social-logo"},"Azakana"))},x=(n(67),n(68),function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"Offline"},r.a.createElement("h3",null,"Veuillez-vous connecter ou cr\xe9er un compte pour avoir acc\xe8s \xe0 cette page."),r.a.createElement(m.b,{to:"/sign-in"},r.a.createElement("button",{className:"button-connect",to:"/sign-in"},"Connexion")))}}]),n}(a.Component)),A=(n(69),Object),_=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"Click",value:function(){var e=k.a.get("Pseudo");console.log();var t=document.getElementById("Stats_perso"),n=String,a=String,r=[],s=[],c="",i="http://127.0.0.1:8000/api/";S.a.get(i+"profile/euw1/"+e).then((function(e){return A=e.data,n=A.id,a=A.puuid,console.log(A,n),t.innerHTML="<div id='Lvl' class='Lvl'>"+String(A.summonerLevel)+"</div><div id='smr_name' class='smr_name'>"+String(A.name)+"</div><div id='games' class='games'></div>",S.a.get(i+"ranks/euw1/"+n)})).then((function(e){A=e.data;for(var t=document.getElementById("games"),a=0;a<A.length;a++)"RANKED_SOLO_5x5"===A[a].queueType&&(t.innerHTML+=t.innerHTML+="Rang Solo/Duo: "+A[a].tier+" "+A[a].rank+"<br>",t.innerHTML+="Pourcentage de victoire: "+Math.round(A[a].wins/(A[a].wins+A[a].losses)*100)+"%<br>",t.innerHTML+="Victoires:"+String(A[a].wins)+" /D\xe9faites: "+String(A[a].losses)+"<br>"),"RANKED_FLEX_SR"===A[a].queueType&&(t.innerHTML+="Rang Flex: "+A[a].tier+" "+A[a].rank+"<br>",t.innerHTML+="Pourcentage de victoire: "+Math.round(A[a].wins/(A[a].wins+A[a].losses)*100)+"%<br>",t.innerHTML+="Victoires:"+String(A[a].wins)+" /D\xe9faites: "+String(A[a].losses)+"<br>"),t.innerHTML+="<br>";return S.a.get(i+"masteries/euw1/"+n)})).then((function(e){var t=document.getElementById("games");t.innerHTML+="<H3>Top 3 des champions les plus jou\xe9s :</H3>";for(var n=0;n<3;n++)t.innerHTML+="id du champion : "+String(e.data[n].championId)+", points de maitrise : "+String(e.data[n].championPoints)+"<br>";return t.innerHTML+="<br>",S.a.get(i+"history/europe/"+a)})).then((function(t){r=t.data;for(var n=0;n<r.length;n++)s.push(r[n].slice(5));for(var a=0;a<s.length;a++)S.a.get(i+"details/euw1/"+s[a]).then((function(t){c=t.data;var n=document.getElementById("games");n.innerHTML+="<br>",n.innerHTML+=c.gameMode;var a=Math.floor(c.gameDuration/60),r=c.gameDuration%60;n.innerHTML+=r<10?" "+a+":0"+r:" "+a+":"+r;for(var s=0;s<c.participantIdentities.length;s++)c.participantIdentities[s].player.summonerName===e&&(!0===c.participants[s].stats.win?n.innerHTML+=" Victoire<br>":n.innerHTML+=" D\xe9faite<br>",n.innerHTML+=c.participants[s].stats.kills+"/"+c.participants[s].stats.deaths+"/"+c.participants[s].stats.assists+"<br>")}))})).catch((function(e){t.innerHTML="<div id='Stats_perso' class='inex'>Cet utilisateur n'existe pas.<br>Veuillez v\xe9rifier le pseudo et/ou le serveur.</div>"}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"stats-container"},r.a.createElement("div",{className:"stats_server"},r.a.createElement("h3",null," Vous \xeates bien connect\xe9, choissisez votre serveur pour afficher vos statistiques."),r.a.createElement("button",{className:"button_stats",onClick:this.Click},"Click")),r.a.createElement("div",{className:"Stats_perso",id:"Stats_perso"}))}}]),n}(a.Component),D=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={token:k.a.get("Token"),pseudo:k.a.get("Pseudo"),str:"",count:0},e.render_token=function(){"undefined"!=typeof e.state.token?e.setState({str:r.a.createElement(_,null)}):e.setState({str:r.a.createElement(x,null)})},e}return Object(l.a)(n,[{key:"render",value:function(){return 0==this.state.count&&(this.render_token(),this.setState({count:1})),r.a.createElement("div",{className:"cont"},this.state.str)}}]),n}(r.a.Component),I=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"statistiques",id:"statistiques"},r.a.createElement(D,null)),r.a.createElement(H,null))}}]),n}(r.a.Component),P=(n(18),function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={credentials:{username:"",password:""},token:k.a.get("Token")},e.login=function(t){fetch("http://127.0.0.1:8000/api/rest-auth/login/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e.state.credentials)}).then((function(e){return e.json()})).then((function(t){var n=e.state.credentials.username.toString();t.key?(k.a.set("Token",t.key,{expires:1}),k.a.set("Pseudo",n,{expires:1}),document.location.href="/connected"):document.getElementById("error").innerHTML="<h3 id='incorrect'>Pseudo/mot de passe incorrect</h3>"})).catch((function(e){return console.error(e)}))},e.inputChanged=function(t){var n=e.state.credentials;n[t.target.name]=t.target.value,e.setState({credentials:n})},e.connect=function(){"undefined"!=typeof e.state.token&&(document.location.href="/")},e}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{id:"login",className:"login"},r.a.createElement("label",{className:"label-form"},"Nom d'utilisateur",r.a.createElement("input",{type:"text",name:"username",className:"input-form",value:this.state.credentials.username,onChange:this.inputChanged})),r.a.createElement("br",null),r.a.createElement("label",{className:"label-form"},"Mot de passe",r.a.createElement("input",{type:"password",name:"password",className:"input-form",id:"mdp",value:this.state.credentials.password,onChange:this.inputChanged})),r.a.createElement("label",{id:"error"}),r.a.createElement("button",{id:"button-form",className:"button-form",onClick:this.login},"Connexion"),r.a.createElement(m.b,{to:"/sign-up"},r.a.createElement("button",{className:"button-register",to:"/sign-up"},"Inscription")))}}]),n}(a.Component)),B=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"sign-in"},r.a.createElement(P,null)),r.a.createElement(H,null))}}]),n}(r.a.Component),F=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={credentials:{username:"",password1:"",password2:"",email:""},alert:"",erreur:!1},e.inputChanged=function(t){var n=e.state.credentials;n[t.target.name]=t.target.value,e.setState({credentials:n})},e.register=function(t){""==e.state.credentials.password1||""==e.state.credentials.password2||""==e.state.credentials.username||""==e.state.credentials.email?e.setState({alert:r.a.createElement("p",{id:"alert"},"Veuillez remplir tous les champs")}):e.state.credentials.password1==e.state.credentials.password2?e.state.credentials.password1.length>8?fetch("http://127.0.0.1:8000/api/rest-auth/registration/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e.state.credentials)}).catch((function(e){console.error(e)})):e.setState({alert:r.a.createElement("p",{id:"alert"},"Mot de passe trop court")}):e.setState({alert:r.a.createElement("p",{id:"alert"},"Veuillez confirmer le mot de passe")})},e}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"register"},r.a.createElement("h2",null,"Mettez le m\xeame pseudo en jeu de votre compte League Of Legends pour une exp\xe9rience utilisateur incroyable ! "),r.a.createElement("label",{className:"label-form"},"Nom d'utilisateur",r.a.createElement("input",{type:"text",name:"username",className:"input-form",value:this.state.credentials.user_name,onChange:this.inputChanged})),r.a.createElement("label",{className:"label-form"},"Mot de passe",r.a.createElement("input",{type:"password",name:"password1",className:"input-form",value:this.state.credentials.password1,onChange:this.inputChanged})),r.a.createElement("label",{className:"label-form"},"Confirmation mot de passe",r.a.createElement("input",{type:"password",name:"password2",className:"input-form",value:this.state.password2,onChange:this.inputChanged})),r.a.createElement("label",{className:"label-form"},"Adresse email",r.a.createElement("input",{type:"mail",name:"email",className:"input-form",value:this.state.credentials.email,onChange:this.inputChanged})),this.state.alert,r.a.createElement("button",{className:"button-save",onClick:this.register,to:"/sign-in"},"Enregistrer"))}}]),n}(a.Component),q=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"sign-up"},r.a.createElement(F,null)),r.a.createElement(H,null))}}]),n}(r.a.Component),z=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"patch-notes"},r.a.createElement("button",{onClick:function(){return window.open("https://euw.leagueoflegends.com/fr-fr/news/tags/patch-notes")},className:"btn-patch btn--patch"},"Acc\xe9der aux notes de patch")),r.a.createElement(H,null))}}]),n}(r.a.Component),V=String,R=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={pseudo:k.a.get("Pseudo"),token:k.a.get("Token"),team:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=String;S.a.get("http://127.0.0.1:8000/api/users/"+this.state.pseudo).then((function(n){null!=(t=n.data.team.toString())&&S.a.get("http://127.0.0.1:8000/api/teams/"+t).then((function(t){V=t.data.name,e.setState({team:V})}))}))}},{key:"render",value:function(){return this.state.token?""!==this.state.team?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"team"},"Bienvenue ",this.state.pseudo," !",r.a.createElement("br",null),"Membre de: ",this.state.team),r.a.createElement(H,null)):""===this.state.team?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"team"},r.a.createElement("h3",null,"Bienvenue dans la cr\xe9ation d'\xe9quipe,",r.a.createElement("br",null),this.state.pseudo," ! Vous n'appartenez pas \xe0 une \xe9quipe")),r.a.createElement(H,null)):void 0:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"team",id:"team"},r.a.createElement(x,null)),r.a.createElement(H,null))}}]),n}(r.a.Component),G=(n(70),function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={count:0,champions:[],element:""},e.champs=function(){fetch("http://127.0.0.1:8000/api/Champions/",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){for(var n in t.data)e.state.champions.push([n,t.data[n]])})).catch((function(e){return console.error(e)}))},e.champSelect=function(t){fetch("http://127.0.0.1:8000/api/Champions/",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(n){for(var a in n.data)a==t&&(e.setState({champions:[]}),console.log(n.data[a]),e.setState({element:r.a.createElement("div",null,r.a.createElement("p",null,"Champion: ",n.data[a].id),r.a.createElement("p",null,"Titre: ",n.data[a].title),r.a.createElement("p",null,"Type: ",n.data[a].partype),r.a.createElement("p",null,"Mp: ",n.data[a].stats.mp),r.a.createElement("p",null,"HP: ",n.data[a].stats.hp),r.a.createElement("p",null,"Hp per lebel: ",n.data[a].stats.hpperlevel),r.a.createElement("p",null,"Hp regen: ",n.data[a].stats.hpregen),r.a.createElement("p",null,"Attack: ",n.data[a].stats.attackdamage),r.a.createElement("p",null,"Attack per level: ",n.data[a].stats.attackdamageperlevel),r.a.createElement("p",null,"Attack range: ",n.data[a].stats.attackrange))}))})).catch((function(e){return console.error(e)}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return 0==this.state.count&&(this.champs(),this.setState({count:1})),r.a.createElement("div",null,this.state.champions.map((function(t){return r.a.createElement("button",{onClick:e.champSelect.bind(e,t[0])},t[0])})),this.state.element)}}]),n}(r.a.Component)),K=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"champions"},r.a.createElement(G,null)),r.a.createElement(H,null))}}]),n}(r.a.Component),J=(n(71),function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={streamer:[{url:"https://player.twitch.tv/?channel=solary&parent=127.0.0.1",nom:"Solary"},{url:"https://player.twitch.tv/?channel=ogaminglol&parent=127.0.0.1",nom:"Ogaming"},{url:"https://player.twitch.tv/?channel=gobgg&parent=127.0.0.1",nom:"GoBGG"},{url:"https://player.twitch.tv/?channel=sixentv&parent=127.0.0.1",nom:"SixenTV"}],encours:"https://player.twitch.tv/?channel=solary&parent=127.0.0.1"},e.onAdd=function(t){e.setState({encours:t})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"flux"},r.a.createElement("ul",null,this.state.streamer.map((function(t){return r.a.createElement("button",{className:"stream-link",onClick:function(){return e.onAdd(t.url)}},t.nom)}))),r.a.createElement("iframe",{src:this.state.encours,frameborder:"0",allowfullscreen:"true",scrolling:"no",height:"600",width:"1066",className:"streaming"}))}}]),n}(r.a.Component)),U=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"e-sport"},r.a.createElement(J,null)),r.a.createElement(H,null))}}]),n}(r.a.Component),W=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).disconnect=function(e){k.a.remove("Token"),k.a.remove("Pseudo")},e}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{id:"connect",className:"connect"},r.a.createElement("label",{className:"label-form"},"Vous \xeates connect\xe9"),r.a.createElement("h3",null,"Maintenant que vous \xeates connect\xe9, vous avez acc\xe8s \xe0 la page statistiques et la page \xe9quipe."),r.a.createElement(m.b,{to:"/sign-in"},r.a.createElement("button",{className:"button-disconnect",to:"/sign-in",onClick:this.disconnect},"D\xe9connexion")))}}]),n}(a.Component),X=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"connected"},r.a.createElement(W,null)),r.a.createElement(H,null))}}]),n}(r.a.Component),Q=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,r.a.createElement(O,null),r.a.createElement(L.c,null,r.a.createElement(L.a,{exact:!0,path:"/",component:w}),r.a.createElement(L.a,{path:"/statistiques",component:I}),r.a.createElement(L.a,{path:"/team",component:R}),r.a.createElement(L.a,{path:"/patch-notes",component:z}),r.a.createElement(L.a,{path:"/champions",component:K}),r.a.createElement(L.a,{path:"/e-sport",component:U}),r.a.createElement(L.a,{path:"/sign-in",component:B}),r.a.createElement(L.a,{path:"/sign-up",component:q}),r.a.createElement(L.a,{path:"/connected",component:X}))))}}]),n}(r.a.Component);c.a.render(r.a.createElement(Q,null),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.bde8ebfe.chunk.js.map