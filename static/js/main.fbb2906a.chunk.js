(this.webpackJsonpportfolionew=this.webpackJsonpportfolionew||[]).push([[0],[,,,,,function(e,t,a){e.exports=a(12)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(3),o=a.n(i),c=(a(10),a(1)),l=(a(11),function(e){var t=e.navigate,a=e.page;return console.log(e),r.a.createElement("div",{className:"nav"},r.a.createElement("span",{className:"nav-link ".concat(0===a?"active":""),onClick:t,name:"0"},"Projects"),r.a.createElement("span",{className:"nav-link ".concat(1===a?"active":""),onClick:t,name:"1"},"Photos"))}),s=[{title:"Swyle",image:"https://i.imgur.com/87lXPrY.png",description:"A websocket-powered blogging platform. It uses Ruby on Rails, GraphQL, Apollo, and React.  Post your own articles, upload images, make comments, react to posts in many fun ways.",github:"https://github.com/genxhero/swyle",live:"https://afternoon-eyrie-69554.herokuapp.com/"},{title:"Fliquor",image:"https://i.imgur.com/kgdpWhZ.png",description:"Functonal clone of Flickr built with Rails on the backend, React on the frontend, and some very sweet CSS. Come on in, share your photos, leave comments, find you inspiration!",github:"https://github.com/genxhero/fliquor",live:"https://fliquor.herokuapp.com/#/"},{title:"Library of Legends",image:"https://i.imgur.com/NXOzKc0.png",description:"A MERN application utilizing GraphQL for creating and storing characters made for the Pathfinder Role Playing Game Second Edition. It displays information to the user with a React front-end and uses GraphQL to make API calls to a Mongo and Express back-end while a character's image is stored on an AWS S3 bucket.",github:"https://github.com/genxhero/libraryoflegends",live:"https://cryptic-plains-92849.herokuapp.com/#/"},{title:"Hedronite Attack",image:"https://i.imgur.com/C6dgA4I.png",description:"Built in JavaScript using HTML5 and Canvas libraries, Hedronite Attack is a fast- paced, action - packed game with the kind of difficulty that anyone born in the 80s can appreciate!",github:"https://github.com/genxhero/vectorsigma",live:"https://genxhero.github.io/vectorsigma/"},{title:"Aaron Goddard's Portfolio",image:"https://i.imgur.com/79zH1UY.jpg",description:"This very portfolio is, in and of itself, a React project",github:"https://github.com/genxhero/portfolionew",live:"https://genxhero.github.io/portfolionew/"}],m=function(e){var t=e.project;return r.a.createElement("div",{className:"project"},r.a.createElement("a",{className:"project-title",href:t.live,target:"_blank",rel:"noopener noreferrer"}," ",t.title),r.a.createElement("p",{className:"project-description"},t.description),r.a.createElement("div",{className:"project-thumbnail"},r.a.createElement("img",{src:t.image,alt:"Shut up, eslint."})),r.a.createElement("h4",null,r.a.createElement("a",{className:"project-link",href:t.github,target:"_blank",rel:"noopener noreferrer"},"Github"),r.a.createElement("a",{className:"project-link",href:t.live,target:"_blank",rel:"noopener noreferrer"},"Live Demo")))},p=function(){return r.a.createElement("div",{className:"projects-page"},r.a.createElement("div",{className:"projects-spread"},s.map((function(e){return r.a.createElement(m,{project:e,key:e.title})}))),r.a.createElement("div",null))},u=function(e){return r.a.createElement("div",{className:"photo"},r.a.createElement("img",{alt:"this is an alt. under protest",src:e.url}))},g=["https://i.imgur.com/urzRarl.jpg","https://i.imgur.com/K3lROQB.jpg","https://i.imgur.com/EwNKDzP.jpg","https://i.imgur.com/VxgpEYN.jpg","https://i.imgur.com/t7fhxGO.jpg","https://i.imgur.com/mzUQ0Mg.jpg","https://i.imgur.com/Bw3LBwr.jpg","https://i.imgur.com/4txKPlm.jpg","https://i.imgur.com/puZxoD2.jpg","https://i.imgur.com/TclNZbl.jpg"],h=function(e){return r.a.createElement("div",null,r.a.createElement("div",null),r.a.createElement("div",{className:"photos-spread"},g.map((function(e){return r.a.createElement(u,{url:e,key:e})}))))},d=[r.a.createElement(p,null),r.a.createElement(h,null)],f=function(e){var t=e.page;return r.a.createElement("div",{className:"main-content"},d[t])},v=["https://ak3.picdn.net/shutterstock/videos/1007299423/thumb/1.jpg","https://www.plm.automation.siemens.com/media/global/en/agile-sprint-board-kanban_tcm27-55805.jpg","https://wallpaperplay.com/walls/full/5/a/a/77451.jpg","https://images.unsplash.com/photo-1550645612-83f5d594b671?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80","https://www.itl.cat/pngfile/big/82-822314_uhd-printed-circuit-board.jpg"],b=a(4),E=a.n(b),k=function(e){var t=Object(n.useState)(0),a=Object(c.a)(t,2),i=a[0],o=a[1];return Object(n.useEffect)((function(){var e=setInterval((function(e){o(i===v.length-1?0:i+1),E()("background-image").fadeIn()}),4e3);return function(){return clearInterval(e)}}),[i]),r.a.createElement("div",{className:"background-image",style:{backgroundImage:"url(".concat(v[i],")")}})},w=function(){return r.a.createElement("div",{className:"intro"},r.a.createElement("h1",{className:"name"}," Aaron Russell Goddard"),r.a.createElement("h2",{className:"title"},"Full-Stack Software Engineer"))},j=function(){var e=Object(n.useState)(0),t=Object(c.a)(e,2),a=t[0],i=t[1];return r.a.createElement("div",{className:"App",id:"App"},r.a.createElement(w,null),r.a.createElement(l,{navigate:function(e){var t=parseInt(e.target.getAttribute("name"));i(t)},page:a}),r.a.createElement(f,{page:a}),r.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.fbb2906a.chunk.js.map