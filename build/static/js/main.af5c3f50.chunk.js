(this.webpackJsonpwebshop=this.webpackJsonpwebshop||[]).push([[6],{13:function(e,n,t){"use strict";n.a={defaultPath:"/dashboard/default",basename:"/webshop/react/default",layout:"vertical",preLayout:null,collapseMenu:!1,layoutType:"menu-light",navIconColor:!1,headerBackColor:"header-default",navBackColor:"navbar-default",navBrandColor:"brand-default",navBackImage:!1,rtlLayout:!1,navFixedLayout:!0,headerFixedLayout:!1,boxLayout:!1,navDropdownIcon:"style1",navListIcon:"style1",navActiveListColor:"active-default",navListTitleColor:"title-default",navListTitleHide:!1,configBlock:!1,layout6Background:"linear-gradient(to right, #A445B2 0%, #D41872 52%, #FF0066 100%)",layout6BackSize:""}},19:function(e,n,t){"use strict";var a=t(0),r=t.n(a);n.a=function(){return r.a.createElement("div",{className:"loader-bg"},r.a.createElement("div",{className:"loader-track"},r.a.createElement("div",{className:"loader-fill"})))}},22:function(e,n,t){"use strict";n.a=function(e){return e.children}},34:function(e,n,t){e.exports=t(45)},45:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(24),i=t.n(o),c=t(14),l=t(23),u=t(50),s=t(8),d=t(9),f=t(11),p=t(10),m=t(46),h=t(51),b=t(30),v=t.n(b),g=(t(43),t(19)),O=t(22),y=t(47),E=function(e){Object(f.a)(t,e);var n=Object(p.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(d.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),t}(r.a.Component),j=Object(y.a)(E),w=[{path:"/auth/signup-1",exact:!0,name:"Signup 1",component:r.a.lazy((function(){return Promise.all([t.e(2),t.e(24)]).then(t.bind(null,174))}))},{path:"/auth/signin-1",exact:!0,name:"Signin 1",component:r.a.lazy((function(){return Promise.all([t.e(2),t.e(23)]).then(t.bind(null,175))}))},{path:"/auth/reset-1",exact:!0,name:"Reset 1",component:r.a.lazy((function(){return Promise.all([t.e(2),t.e(22)]).then(t.bind(null,176))}))},{path:"/default/dashboard/default",exact:!0,name:"default",component:r.a.lazy((function(){return Promise.all([t.e(3),t.e(4),t.e(5),t.e(25)]).then(t.bind(null,112))}))}],L=v()({loader:function(){return Promise.all([t.e(4),t.e(9),t.e(5),t.e(11)]).then(t.bind(null,183))},loading:g.a}),k=function(e){Object(f.a)(t,e);var n=Object(p.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){var e=w.map((function(e,n){return e.component?r.a.createElement(m.a,{key:n,path:e.path,exact:e.exact,name:e.name,render:function(n){return r.a.createElement(e.component,n)}}):null}));return r.a.createElement(O.a,null,r.a.createElement(j,null,r.a.createElement(a.Suspense,{fallback:r.a.createElement(g.a,null)},r.a.createElement(h.a,null,e,r.a.createElement(m.a,{path:"/",component:L})))))}}]),t}(a.Component),C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function T(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var A=t(17),S=t(2),x=t(6),N=t(13),P=Object(S.a)(Object(S.a)({isOpen:[],isTrigger:[]},N.a),{},{isFullScreen:!1}),B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,n=arguments.length>1?arguments[1]:void 0,t=[],a=[];switch(n.type){case x.b:return Object(S.a)(Object(S.a)({},e),{},{collapseMenu:!e.collapseMenu});case x.c:if("sub"===n.menu.type){a=e.isOpen;var r=(t=e.isTrigger).indexOf(n.menu.id);r>-1&&(a=a.filter((function(e){return e!==n.menu.id})),t=t.filter((function(e){return e!==n.menu.id}))),-1===r&&(a=[].concat(Object(A.a)(a),[n.menu.id]),t=[].concat(Object(A.a)(t),[n.menu.id]))}else{a=e.isOpen;var o=e.isTrigger.indexOf(n.menu.id);t=-1===o?[n.menu.id]:[],a=-1===o?[n.menu.id]:[]}return Object(S.a)(Object(S.a)({},e),{},{isOpen:a,isTrigger:t});case x.g:return Object(S.a)(Object(S.a)({},e),{},{isOpen:a,isTrigger:t});case x.f:if("sub"===n.menu.type){a=e.isOpen;var i=(t=e.isTrigger).indexOf(n.menu.id);return i>-1&&(a=a.filter((function(e){return e!==n.menu.id})),t=t.filter((function(e){return e!==n.menu.id}))),Object(S.a)(Object(S.a)({},e),{},{isOpen:a,isTrigger:t})}return Object(S.a)({},e);case x.d:return Object(S.a)(Object(S.a)({},e),{},{isFullScreen:!e.isFullScreen});case x.e:return Object(S.a)(Object(S.a)({},e),{},{isFullScreen:!1});case x.a:return Object(S.a)(Object(S.a)({},e),{},{layout:n.layout});default:return e}},F=Object(c.b)(B),_=r.a.createElement(l.a,{store:F},r.a.createElement(u.a,{basename:N.a.basename},r.a.createElement(k,null)));i.a.render(_,document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");C?(!function(e,n){fetch(e).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):T(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):T(n,e)}))}}()},6:function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return r})),t.d(n,"d",(function(){return o})),t.d(n,"e",(function(){return i})),t.d(n,"a",(function(){return c})),t.d(n,"g",(function(){return l})),t.d(n,"f",(function(){return u}));var a="COLLAPSE_MENU",r="COLLAPSE_TOGGLE",o="FULL_SCREEN",i="FULL_SCREEN_EXIT",c="CHANGE_LAYOUT",l="NAV_CONTENT_LEAVE",u="NAV_COLLAPSE_LEAVE"}},[[34,7,8]]]);
//# sourceMappingURL=main.af5c3f50.chunk.js.map