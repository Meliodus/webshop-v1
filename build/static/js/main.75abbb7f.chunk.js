(this.webpackJsonpWebShop=this.webpackJsonpWebShop||[]).push([[4],{13:function(e,n,t){"use strict";n.a={defaultPath:"/dashboard/default",basename:"/webshop/react/default",layout:"vertical",preLayout:null,collapseMenu:!1,layoutType:"menu-light",navIconColor:!1,headerBackColor:"header-default",navBackColor:"navbar-default",navBrandColor:"brand-default",navBackImage:!1,rtlLayout:!1,navFixedLayout:!0,headerFixedLayout:!1,boxLayout:!1,navDropdownIcon:"style1",navListIcon:"style1",navActiveListColor:"active-default",navListTitleColor:"title-default",navListTitleHide:!1,configBlock:!1,layout6Background:"linear-gradient(to right, #A445B2 0%, #D41872 52%, #FF0066 100%)",layout6BackSize:""}},19:function(e,n,t){"use strict";var a=t(0),r=t.n(a);n.a=function(){return r.a.createElement("div",{className:"loader-bg"},r.a.createElement("div",{className:"loader-track"},r.a.createElement("div",{className:"loader-fill"})))}},22:function(e,n,t){"use strict";n.a=function(e){return e.children}},34:function(e,n,t){e.exports=t(45)},45:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(23),i=t.n(o),c=t(14),u=t(24),l=t(50),s=t(8),d=t(9),f=t(11),p=t(10),b=t(46),h=t(51),m=t(30),v=t.n(m),g=(t(43),t(19)),O=t(22),E=t(47),y=function(e){Object(f.a)(t,e);var n=Object(p.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(d.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),t}(r.a.Component),j=Object(E.a)(y),w=[{path:"/auth/signup-1",exact:!0,name:"Signup 1",component:r.a.lazy((function(){return Promise.all([t.e(1),t.e(24)]).then(t.bind(null,181))}))},{path:"/auth/signin-1",exact:!0,name:"Signin 1",component:r.a.lazy((function(){return Promise.all([t.e(1),t.e(23)]).then(t.bind(null,182))}))}],L=v()({loader:function(){return Promise.all([t.e(6),t.e(10)]).then(t.bind(null,188))},loading:g.a}),k=function(e){Object(f.a)(t,e);var n=Object(p.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){var e=w.map((function(e,n){return e.component?r.a.createElement(b.a,{key:n,path:e.path,exact:e.exact,name:e.name,render:function(n){return r.a.createElement(e.component,n)}}):null}));return r.a.createElement(O.a,null,r.a.createElement(j,null,r.a.createElement(a.Suspense,{fallback:r.a.createElement(g.a,null)},r.a.createElement(h.a,null,e,r.a.createElement(b.a,{path:"/",component:L})))))}}]),t}(a.Component),C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var T=t(17),A=t(2),N=t(6),x=t(13),B=Object(A.a)(Object(A.a)({isOpen:[],isTrigger:[]},x.a),{},{isFullScreen:!1}),F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,n=arguments.length>1?arguments[1]:void 0,t=[],a=[];switch(n.type){case N.b:return Object(A.a)(Object(A.a)({},e),{},{collapseMenu:!e.collapseMenu});case N.c:if("sub"===n.menu.type){a=e.isOpen;var r=(t=e.isTrigger).indexOf(n.menu.id);r>-1&&(a=a.filter((function(e){return e!==n.menu.id})),t=t.filter((function(e){return e!==n.menu.id}))),-1===r&&(a=[].concat(Object(T.a)(a),[n.menu.id]),t=[].concat(Object(T.a)(t),[n.menu.id]))}else{a=e.isOpen;var o=e.isTrigger.indexOf(n.menu.id);t=-1===o?[n.menu.id]:[],a=-1===o?[n.menu.id]:[]}return Object(A.a)(Object(A.a)({},e),{},{isOpen:a,isTrigger:t});case N.g:return Object(A.a)(Object(A.a)({},e),{},{isOpen:a,isTrigger:t});case N.f:if("sub"===n.menu.type){a=e.isOpen;var i=(t=e.isTrigger).indexOf(n.menu.id);return i>-1&&(a=a.filter((function(e){return e!==n.menu.id})),t=t.filter((function(e){return e!==n.menu.id}))),Object(A.a)(Object(A.a)({},e),{},{isOpen:a,isTrigger:t})}return Object(A.a)({},e);case N.d:return Object(A.a)(Object(A.a)({},e),{},{isFullScreen:!e.isFullScreen});case N.e:return Object(A.a)(Object(A.a)({},e),{},{isFullScreen:!1});case N.a:return Object(A.a)(Object(A.a)({},e),{},{layout:n.layout});default:return e}},_=Object(c.b)(F),P=r.a.createElement(u.a,{store:_},r.a.createElement(l.a,{basename:x.a.basename},r.a.createElement(k,null)));i.a.render(P,document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/webshop",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/webshop","/service-worker.js");C?(!function(e,n){fetch(e).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):S(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):S(n,e)}))}}()},6:function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return r})),t.d(n,"d",(function(){return o})),t.d(n,"e",(function(){return i})),t.d(n,"a",(function(){return c})),t.d(n,"g",(function(){return u})),t.d(n,"f",(function(){return l}));var a="COLLAPSE_MENU",r="COLLAPSE_TOGGLE",o="FULL_SCREEN",i="FULL_SCREEN_EXIT",c="CHANGE_LAYOUT",u="NAV_CONTENT_LEAVE",l="NAV_COLLAPSE_LEAVE"}},[[34,5,7]]]);
//# sourceMappingURL=main.75abbb7f.chunk.js.map