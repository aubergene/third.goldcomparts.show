import{_ as t,r as n,a as e,b as r,c as a,d as s,i as o,s as l,e as c,S as i,h as u,t as f,m as v,n as h,o as d,k as m,w as g,x as p,D as _,g as E,l as y,p as w,u as b,H as I,I as O,J as x,K as R,q as T,L as N,M as k,C as D,N as C,O as P,y as S,z as V,A as j,P as $,Q as L,R as M,T as A,U as z,V as B}from"./client.b7f84aa0.js";import{t as H}from"./tsv.c906c42a.js";import{s as Y}from"./helpers.3b26ddc2.js";import{f as q,a as F}from"./index.3bb0626f.js";function J(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,s=r(t);if(n){var o=r(this).constructor;e=Reflect.construct(s,arguments,o)}else e=s.apply(this,arguments);return a(this,e)}}function K(t,n,e){var r=t.slice();return r[13]=n[e],r[15]=e,r}function Q(t,n,e){var r=t.slice();return r[4]=n[e],r}function U(t,n,e){var r=t.slice();return r[3]=n[e],r}function G(t,n,e){var r=t.slice();return r[2]=n[e],r}function W(t){var n,e,r,a=t[2]+"";return{c:function(){n=u("option"),e=f(a),this.h()},l:function(t){n=v(t,"OPTION",{value:!0});var r=h(n);e=d(r,a),r.forEach(m),this.h()},h:function(){n.__value=r=t[2],n.value=n.__value},m:function(t,r){g(t,n,r),p(n,e)},p:function(t,s){1&s&&a!==(a=t[2]+"")&&_(e,a),1&s&&r!==(r=t[2])&&(n.__value=r,n.value=n.__value)},d:function(t){t&&m(n)}}}function X(t){var n,e,r,a=t[3]+"";return{c:function(){n=u("option"),e=f(a),this.h()},l:function(t){n=v(t,"OPTION",{value:!0});var r=h(n);e=d(r,a),r.forEach(m),this.h()},h:function(){n.__value=r=t[3],n.value=n.__value},m:function(t,r){g(t,n,r),p(n,e)},p:function(t,s){1&s&&a!==(a=t[3]+"")&&_(e,a),1&s&&r!==(r=t[3])&&(n.__value=r,n.value=n.__value)},d:function(t){t&&m(n)}}}function Z(t){var n,e,r,a=t[4]+"";return{c:function(){n=u("option"),e=f(a),this.h()},l:function(t){n=v(t,"OPTION",{value:!0});var r=h(n);e=d(r,a),r.forEach(m),this.h()},h:function(){n.__value=r=t[4],n.value=n.__value},m:function(t,r){g(t,n,r),p(n,e)},p:function(t,s){1&s&&a!==(a=t[4]+"")&&_(e,a),1&s&&r!==(r=t[4])&&(n.__value=r,n.value=n.__value)},d:function(t){t&&m(n)}}}function tt(t){var n,e,r,a,s,o,l,c,i;return{c:function(){n=u("div"),e=f("Sorry your filter return no results\n            "),r=u("br"),a=E(),s=u("div"),o=f("Click here to remove filters"),l=E(),this.h()},l:function(t){n=v(t,"DIV",{});var c=h(n);e=d(c,"Sorry your filter return no results\n            "),r=v(c,"BR",{}),a=y(c),s=v(c,"DIV",{class:!0});var i=h(s);o=d(i,"Click here to remove filters"),i.forEach(m),l=y(c),c.forEach(m),this.h()},h:function(){w(s,"class","button")},m:function(u,f){g(u,n,f),p(n,e),p(n,r),p(n,a),p(n,s),p(s,o),p(n,l),c||(i=k(s,"click",t[9]),c=!0)},p:S,d:function(t){t&&m(n),c=!1,i()}}}function nt(t,n){var e,r,a,s,o,l,c,i,T,N,k,D,C,P,V,j,$=n[13].title+"",L=n[13].name+"",A=(n[13].otherName?"  (".concat(n[13].otherName,")"):"")+"",z=S;return{key:t,first:null,c:function(){e=u("div"),r=u("a"),a=u("div"),s=E(),o=u("h6"),l=f($),c=E(),i=u("p"),T=f(L),N=E(),k=f(A),C=E(),this.h()},l:function(t){e=v(t,"DIV",{class:!0});var n=h(e);r=v(n,"A",{href:!0});var u=h(r);a=v(u,"DIV",{class:!0,style:!0}),h(a).forEach(m),s=y(u),o=v(u,"H6",{class:!0});var f=h(o);l=d(f,$),f.forEach(m),c=y(u),i=v(u,"P",{class:!0});var g=h(i);T=d(g,L),N=y(g),k=d(g,A),g.forEach(m),u.forEach(m),C=y(n),n.forEach(m),this.h()},h:function(){w(a,"class","artwork-photo svelte-1vdo85w"),b(a,"background-image","url(img/artworks/"+n[13].username+"-thumb.jpeg)"),w(o,"class","svelte-1vdo85w"),w(i,"class","svelte-1vdo85w"),w(r,"href",D="artists/"+Y(n[13].name)),w(e,"class","art-box svelte-1vdo85w"),this.first=e},m:function(t,n){g(t,e,n),p(e,r),p(r,a),p(r,s),p(r,o),p(o,l),p(r,c),p(r,i),p(i,T),p(i,N),p(i,k),p(e,C),j=!0},p:function(t,n){(!j||2&n)&&b(a,"background-image","url(img/artworks/"+t[13].username+"-thumb.jpeg)"),(!j||2&n)&&$!==($=t[13].title+"")&&_(l,$),(!j||2&n)&&L!==(L=t[13].name+"")&&_(T,L),(!j||2&n)&&A!==(A=(t[13].otherName?"  (".concat(t[13].otherName,")"):"")+"")&&_(k,A),(!j||2&n&&D!==(D="artists/"+Y(t[13].name)))&&w(r,"href",D)},r:function(){V=e.getBoundingClientRect()},f:function(){I(e),z(),O(e,V)},a:function(){z(),z=x(e,V,q,{delay:10*n[15],duration:400})},i:function(t){j||(M((function(){P||(P=R(e,F,{duration:300,y:200},!0)),P.run(1)})),j=!0)},o:function(t){P||(P=R(e,F,{duration:300,y:200},!1)),P.run(0),j=!1},d:function(t){t&&m(e),t&&P&&P.end()}}}function et(t){for(var n,e,r,a,s,o,l,c,i,_,b,I,O,x,R,S,B,H,Y,q,F,J=[],et=new Map,rt=t[0].themes,at=[],st=0;st<rt.length;st+=1)at[st]=W(G(t,rt,st));for(var ot=t[0].media,lt=[],ct=0;ct<ot.length;ct+=1)lt[ct]=X(U(t,ot,ct));for(var it=t[0].years.reverse(),ut=[],ft=0;ft<it.length;ft+=1)ut[ft]=Z(Q(t,it,ft));for(var vt=t[1],ht=function(t){return t[13].username},dt=0;dt<vt.length;dt+=1){var mt=K(t,vt,dt),gt=ht(mt);et.set(gt,J[dt]=nt(gt,mt))}var pt=null;return vt.length||(pt=tt(t)),{c:function(){n=E(),e=u("section"),r=u("div"),a=u("div"),s=u("div"),o=u("select"),l=u("option"),c=f("Theme");for(var t=0;t<at.length;t+=1)at[t].c();i=E(),_=u("select"),b=u("option"),I=f("Media");for(var v=0;v<lt.length;v+=1)lt[v].c();O=E(),x=u("select"),R=u("option"),S=f("Year");for(var h=0;h<ut.length;h+=1)ut[h].c();B=E(),H=u("div");for(var d=0;d<J.length;d+=1)J[d].c();pt&&pt.c(),this.h()},l:function(t){T('[data-svelte="svelte-1xemdmz"]',document.head).forEach(m),n=y(t),e=v(t,"SECTION",{class:!0});var u=h(e);r=v(u,"DIV",{class:!0});var f=h(r);a=v(f,"DIV",{class:!0});var g=h(a);s=v(g,"DIV",{class:!0});var p=h(s);o=v(p,"SELECT",{class:!0});var E=h(o);l=v(E,"OPTION",{value:!0,selected:!0});var w=h(l);c=d(w,"Theme"),w.forEach(m);for(var N=0;N<at.length;N+=1)at[N].l(E);E.forEach(m),i=y(p),_=v(p,"SELECT",{class:!0});var k=h(_);b=v(k,"OPTION",{value:!0,selected:!0});var D=h(b);I=d(D,"Media"),D.forEach(m);for(var C=0;C<lt.length;C+=1)lt[C].l(k);k.forEach(m),O=y(p),x=v(p,"SELECT",{class:!0});var P=h(x);R=v(P,"OPTION",{value:!0,selected:!0});var V=h(R);S=d(V,"Year"),V.forEach(m);for(var j=0;j<ut.length;j+=1)ut[j].l(P);P.forEach(m),p.forEach(m),B=y(g),H=v(g,"DIV",{class:!0});for(var $=h(H),L=0;L<J.length;L+=1)J[L].l($);pt&&pt.l($),$.forEach(m),g.forEach(m),f.forEach(m),u.forEach(m),this.h()},h:function(){document.title="Final Show - 2020",l.__value=null,l.value=l.__value,l.selected=!0,w(o,"class","svelte-1vdo85w"),void 0===t[2]&&M((function(){return t[6].call(o)})),b.__value=null,b.value=b.__value,b.selected=!0,w(_,"class","svelte-1vdo85w"),void 0===t[3]&&M((function(){return t[7].call(_)})),R.__value=null,R.value=R.__value,R.selected=!0,w(x,"class","svelte-1vdo85w"),void 0===t[4]&&M((function(){return t[8].call(x)})),w(s,"class","select svelte-1vdo85w"),w(H,"class","art-boxes svelte-1vdo85w"),w(a,"class","content"),w(r,"class","container page-max-width artists-container svelte-1vdo85w"),w(e,"class","section bg-col-7")},m:function(u,f){g(u,n,f),g(u,e,f),p(e,r),p(r,a),p(a,s),p(s,o),p(o,l),p(l,c);for(var v=0;v<at.length;v+=1)at[v].m(o,null);N(o,t[2]),p(s,i),p(s,_),p(_,b),p(b,I);for(var h=0;h<lt.length;h+=1)lt[h].m(_,null);N(_,t[3]),p(s,O),p(s,x),p(x,R),p(R,S);for(var d=0;d<ut.length;d+=1)ut[d].m(x,null);N(x,t[4]),p(a,B),p(a,H);for(var m=0;m<J.length;m+=1)J[m].m(H,null);pt&&pt.m(H,null),Y=!0,q||(F=[k(o,"change",t[6]),k(_,"change",t[7]),k(x,"change",t[8])],q=!0)},p:function(t,n){var e=D(n,1)[0];if(1&e){var r;for(rt=t[0].themes,r=0;r<rt.length;r+=1){var a=G(t,rt,r);at[r]?at[r].p(a,e):(at[r]=W(a),at[r].c(),at[r].m(o,null))}for(;r<at.length;r+=1)at[r].d(1);at.length=rt.length}if(5&e&&N(o,t[2]),1&e){var s;for(ot=t[0].media,s=0;s<ot.length;s+=1){var l=U(t,ot,s);lt[s]?lt[s].p(l,e):(lt[s]=X(l),lt[s].c(),lt[s].m(_,null))}for(;s<lt.length;s+=1)lt[s].d(1);lt.length=ot.length}if(9&e&&N(_,t[3]),1&e){var c;for(it=t[0].years.reverse(),c=0;c<it.length;c+=1){var i=Q(t,it,c);ut[c]?ut[c].p(i,e):(ut[c]=Z(i),ut[c].c(),ut[c].m(x,null))}for(;c<ut.length;c+=1)ut[c].d(1);ut.length=it.length}if(17&e&&N(x,t[4]),30&e){var u=t[1];A();for(var f=0;f<J.length;f+=1)J[f].r();J=C(J,e,ht,1,t,u,et,H,z,nt,null,K);for(var v=0;v<J.length;v+=1)J[v].a();P(),!u.length&&pt?pt.p(t,e):u.length?pt&&(pt.d(1),pt=null):((pt=tt(t)).c(),pt.m(H,null))}},i:function(t){if(!Y){for(var n=0;n<vt.length;n+=1)V(J[n]);Y=!0}},o:function(t){for(var n=0;n<J.length;n+=1)j(J[n]);Y=!1},d:function(t){t&&m(n),t&&m(e),$(at,t),$(lt,t),$(ut,t);for(var r=0;r<J.length;r+=1)J[r].d();pt&&pt.d(),q=!1,L(F)}}}function rt(t){return at.apply(this,arguments)}function at(){return(at=t(n.mark((function t(e){var r,a;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.params,t.next=3,this.fetch("artists.tsv").then((function(t){return t.text()}));case 3:return r=t.sent,t.next=6,this.fetch("/artists/tags.json").then((function(t){return t.json()}));case 6:return a=t.sent,t.abrupt("return",{artistsRows:r,tags:a});case 8:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function st(t,n,e){var r=n.artistsRows,a=n.tags,s={title:"Artist",fn:function(t,n){return t.name.localeCompare(n.name,"en",{sensitivity:"base"})}},o=null,l=null,c=null;var i,u;return t.$$set=function(t){"artistsRows"in t&&e(5,r=t.artistsRows),"tags"in t&&e(0,a=t.tags)},t.$$.update=function(){32&t.$$.dirty&&e(10,i=H(r).sort((function(t,n){return t.name.localeCompare(n.name,"en",{sensitivity:"base"})}))),1052&t.$$.dirty&&e(1,u=i.filter((function(t){return t.title})).filter((function(t){return(!l||t.media&&t.media.includes(l))&&(!o||t.themes&&t.themes.includes(o))&&(!c||t.years&&t.years.includes(c))})).sort(s.fn))},[a,u,o,l,c,r,function(){o=B(this),e(2,o),e(0,a)},function(){l=B(this),e(3,l),e(0,a)},function(){c=B(this),e(4,c),e(0,a)},function(){return e(2,o=e(3,l=e(4,c=null)))}]}var ot=function(t){e(r,i);var n=J(r);function r(t){var e;return s(this,r),e=n.call(this),o(c(e),t,st,et,l,{artistsRows:5,tags:0}),e}return r}();export default ot;export{rt as preload};
