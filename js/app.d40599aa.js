(function(e){function t(t){for(var o,r,s=t[0],c=t[1],u=t[2],l=0,d=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var s=n[r];0!==a[s]&&(o=!1)}o&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},a={app:0},i=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-59d51ec2":"75556d28","chunk-a573c264":"e7a274ad"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-59d51ec2":1,"chunk-a573c264":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-59d51ec2":"e919accd","chunk-a573c264":"d37f7658"}[e]+".css",a=c.p+o,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===a))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===o||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],f.parentNode.removeChild(f),n(i)},f.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},2395:function(e,t,n){},3283:function(e,t,n){e.exports=n.p+"img/profile-photo.ef23c595.jpg"},"7c55":function(e,t,n){"use strict";var o=n("2395"),r=n.n(o);r.a},"7c85":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"uk-light uk-background-secondary uk-overflow-auto",attrs:{id:"root"}},[n("router-view")],1)},a=[],i=(n("7c55"),n("2877")),s={},c=Object(i["a"])(s,r,a,!1,null,null,null),u=c.exports,l=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"uk-width-1-1 uk-position-relative uk-padding",attrs:{id:"cover"}},[n("img",{attrs:{id:"background",src:e.background}}),n("div",{staticClass:"uk-flex uk-flex-center",attrs:{id:"heading"}},[n("div",[n("img",{staticClass:"uk-visible@s",attrs:{"data-src":e.profilePhoto,width:"300",height:"255",alt:"","uk-img":""}})]),e._m(0)]),e._m(1)]),n("div",{staticClass:"uk-container uk-margin-top"},[n("h2",[e._v("About Me")]),e._m(2),n("h2",[e._v("Portfolio")]),n("hr",{staticClass:"header-row"}),n("div",[n("div",{staticClass:"uk-text-lead"},[e._v("Avalon Online")]),n("a",{staticClass:"link",attrs:{href:"https://avalon.seanfitzgerald.dev"}},[e._v("avalon.seanfitzgerald.dev")]),n("div",{staticClass:"uk-flex uk-flex-wrap uk-margin-small-top"},[e._m(3),n("div",{staticClass:"website-preview"},[n("img",{attrs:{src:e.avalonPreview,width:"600"}})])])]),n("h2",[e._v("Education")]),n("hr",{staticClass:"header-row"}),n("Education",{staticClass:"section"}),n("h2",[e._v("Experience")]),n("hr",{staticClass:"header-row"}),n("Experience",{staticClass:"section"}),n("button",{staticClass:"uk-button uk-align-center uk-margin-bottom",attrs:{id:"pdf-btn",onclick:"location.href = 'https://drive.google.com/uc?export=download&id=1d6hK7qzcaAAYWMVmyGfheMmOf_KX18em'"}},[e._v("PDF")])],1)])},f=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"uk-margin-left"},[n("div",{staticClass:"uk-margin-remove-bottom",attrs:{id:"name"}},[e._v("Sean Fitzgerald")]),n("ul",{staticClass:"link-list uk-flex-wrap"},[n("li",[n("a",{staticClass:"uk-button uk-button-default",attrs:{href:"https://www.github.com/fitzmill"}},[e._v(" GitHub ")])]),n("li",[n("a",{staticClass:"uk-button uk-button-default",attrs:{href:"https://www.linkedin.com/in/sean-fitzgerald-66b14b127/"}},[e._v(" LinkedIn ")])]),n("li",[n("a",{staticClass:"uk-button uk-button-default",attrs:{href:"https://myanimelist.net/animelist/falldownrunning"}},[e._v(" MyAnimeList ")])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"scroll-down"}},[n("h4",{staticClass:"down-arrow uk-margin-remove"},[e._v("SCROLL")]),n("span",{staticClass:"down-arrow",attrs:{"uk-icon":"chevron-down"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"uk-width-1-2@l uk-width-2-3@s"},[n("p",[e._v(" I'm a full stack developer and general tech enthusiast. I started programming in my senior year of high school and spent my time in college trying to learn as many new technologies as I could. ")]),n("p",[e._v(" Most of my enterprise experience is in building websites, but I've tried to learn many different JavaScript libraries and databases to keep things fresh. I've dipped my toes in Angular, React, KnockoutJS, and VueJS. Those websites have done simple things like displaying text on a webpage like you're seeing now or used Microsoft's SignalR library to run a digital version of a board game in real-time (look at the Avalon repo/site in my portfolio). ")]),n("p",[e._v(" Outside of building websites, I've experimented with IoT on numerous occasions. I helped my roommate make a homegrown version of a Phillips Hue lightstrip that we could control with our Google Home. I participated in a hackathon where I worked with a team to use the sensors found in prosthetics as input for a computer. ")]),n("p",[e._v(" Technology is my passion, and I'm lucky enough that I can make my passion my job. I'm excited to see where my career at Microsoft takes me and the things that I'll get to work on. ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"website-description uk-width-expand"},[n("p",[e._v(' Avalon Online was a personal project to recreate the board game "The Resistance: Avalon" online. Other people have already created this, but I wanted a challenge. What I focused on for this project was learning how to create a real-time application with Microsoft\'s SignalR library. All of the players are synced with one another, and communication is done with websockets instead of just HTTP POST/GET requests. Another challenge for this project was trying to deploy the application myself on a Linux server. In the end I was able to set it up using nginx. ')]),n("p",[e._v(" The application uses PostgreSQL, .NET Core 3, and VueJS and you can view the GitHub repo "),n("a",{staticClass:"link",attrs:{href:"https://github.com/fitzmill/online-avalon"}},[e._v("here")]),e._v(". ")])])}],h=(n("6b54"),n("2397"),n("d225")),p=n("b0b4"),v=n("4e2b"),m=n("308d"),g=n("6bb5"),w=n("9ab4"),b=n("60a3"),k=n("fa62"),y=n.n(k);function _(e){var t=C();return function(){var n,o=Object(g["a"])(e);if(t){var r=Object(g["a"])(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(m["a"])(this,n)}}function C(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var x=function(){var e=function(e){Object(v["a"])(o,e);var t=_(o);function o(){var e;return Object(h["a"])(this,o),e=t.apply(this,arguments),e.profilePhoto=n("3283"),e.background=n("f5a9"),e.avalonPreview=n("cec2"),e.educationShown=!1,e.experienceShown=!1,e.involvementShown=!1,e.awardsShown=!1,e}return Object(p["a"])(o,[{key:"mounted",value:function(){var e=this;y.a.util.on("#education-section","beforeshow",(function(){e.educationShown=!0})),y.a.util.on("#education-section","beforehide",(function(){e.educationShown=!1})),y.a.util.on("#experience-section","beforeshow",(function(){e.experienceShown=!0})),y.a.util.on("#experience-section","beforehide",(function(){e.experienceShown=!1})),y.a.util.on("#involvement-section","beforeshow",(function(){e.involvementShown=!0})),y.a.util.on("#involvement-section","beforehide",(function(){e.involvementShown=!1})),y.a.util.on("#awards-section","beforeshow",(function(){e.awardsShown=!0})),y.a.util.on("#awards-section","beforehide",(function(){e.awardsShown=!1}))}}]),o}(b["b"]);return e=Object(w["a"])([Object(b["a"])({components:{Education:function(){return n.e("chunk-59d51ec2").then(n.bind(null,"5b47"))},Experience:function(){return n.e("chunk-a573c264").then(n.bind(null,"61cd"))}}})],e),e}(),S=x,O=S,j=(n("e200"),Object(i["a"])(O,d,f,!1,null,"865496e8",null)),E=j.exports;o["a"].use(l["a"]);var P=new l["a"]({mode:"history",routes:[{path:"/",name:"resume",component:E}]}),A=n("edde"),I=n.n(A),T=(n("d0e7"),n("9483"));Object(T["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),o["a"].config.productionTip=!1,y.a.use(I.a),new o["a"]({router:P,render:function(e){return e(u)}}).$mount("#app")},cec2:function(e,t,n){e.exports=n.p+"img/avalon-preview.30c237fb.png"},e200:function(e,t,n){"use strict";var o=n("7c85"),r=n.n(o);r.a},f5a9:function(e,t,n){e.exports=n.p+"img/website-background.64f74c33.svg"}});