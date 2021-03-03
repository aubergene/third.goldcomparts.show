import{_ as a,r as t,a as s,b as r,c as n,d as e,i as o,s as i,e as c,S as l,f,g as u,h,t as d,q as v,j as p,k as m,l as E,m as y,n as D,o as g,p as w,u as I,v as b,w as S,x as $,y as C,z as V,A as j}from"./client.fb1228e9.js";import{t as A}from"./tsv.c906c42a.js";import"./helpers.3b26ddc2.js";import"./constants.6c819469.js";import{M as R}from"./Meta.75a089bb.js";function x(a){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(a){return!1}}();return function(){var s,e=r(a);if(t){var o=r(this).constructor;s=Reflect.construct(e,arguments,o)}else s=e.apply(this,arguments);return n(this,s)}}function T(a){var t,s,r,n,e,o,i,c,l,A,x,T,G,M,H,N,k,L,U,O,q,z,B,F,P,_,J,K,Q,W;return t=new R({props:{title:"Chimera Garden - Computational Arts MA/MFA Degree Show Goldsmiths"}}),{c:function(){f(t.$$.fragment),s=u(),r=h("div"),n=h("section"),e=h("div"),o=h("div"),i=h("div"),c=h("div"),l=u(),A=h("div"),x=h("div"),T=h("h2"),G=d("6 May 2021"),M=u(),H=h("h2"),N=d("Digital Arts Computating Degree Show"),k=u(),L=h("h2"),U=d("Goldsmiths, University of London"),O=u(),q=h("div"),z=d("Chimera Garden is a ​celebration of Computational Art now​, a\n              blend of physical and online installation and performance, a\n              four-day festival open to all."),B=u(),F=h("div"),P=h("a"),_=d("EVENTS SCHEDULE"),J=u(),K=h("a"),Q=d("VISIT ON-SITE"),this.h()},l:function(a){var f=v('[data-svelte="svelte-jnt444"]',document.head);p(t.$$.fragment,f),f.forEach(m),s=E(a),r=y(a,"DIV",{class:!0});var u=D(r);n=y(u,"SECTION",{class:!0});var h=D(n);e=y(h,"DIV",{class:!0});var d=D(e);o=y(d,"DIV",{class:!0});var w=D(o);i=y(w,"DIV",{class:!0});var I=D(i);c=y(I,"DIV",{class:!0}),D(c).forEach(m),l=E(I),A=y(I,"DIV",{class:!0});var b=D(A);x=y(b,"DIV",{});var S=D(x);T=y(S,"H2",{class:!0});var $=D(T);G=g($,"6 May 2021"),$.forEach(m),M=E(S),H=y(S,"H2",{class:!0});var C=D(H);N=g(C,"Digital Arts Computating Degree Show"),C.forEach(m),k=E(S),L=y(S,"H2",{class:!0});var V=D(L);U=g(V,"Goldsmiths, University of London"),V.forEach(m),S.forEach(m),O=E(b),q=y(b,"DIV",{class:!0});var j=D(q);z=g(j,"Chimera Garden is a ​celebration of Computational Art now​, a\n              blend of physical and online installation and performance, a\n              four-day festival open to all."),j.forEach(m),B=E(b),F=y(b,"DIV",{});var R=D(F);P=y(R,"A",{href:!0,class:!0});var W=D(P);_=g(W,"EVENTS SCHEDULE"),W.forEach(m),J=E(R),K=y(R,"A",{href:!0,class:!0});var X=D(K);Q=g(X,"VISIT ON-SITE"),X.forEach(m),R.forEach(m),b.forEach(m),I.forEach(m),w.forEach(m),d.forEach(m),h.forEach(m),u.forEach(m),this.h()},h:function(){w(c,"class","column is-6 leftColumn svelte-1uljdi2"),w(T,"class","showDates svelte-1uljdi2"),w(H,"class","subtitle svelte-1uljdi2"),w(L,"class","location svelte-1uljdi2"),w(q,"class","introBodyStrong svelte-1uljdi2"),w(P,"href","/schedule"),w(P,"class","rounded-link col-7 bd-col-7"),w(K,"href","/getting-there"),w(K,"class","rounded-link col-7 bd-col-7"),w(A,"class","column is-6"),w(i,"class","columns"),w(o,"class","container is-widescreen"),w(e,"class","hero-body"),w(n,"class","hero"),w(r,"class","hero-container")},m:function(a,f){I(t,document.head,null),b(a,s,f),b(a,r,f),S(r,n),S(n,e),S(e,o),S(o,i),S(i,c),S(i,l),S(i,A),S(A,x),S(x,T),S(T,G),S(x,M),S(x,H),S(H,N),S(x,k),S(x,L),S(L,U),S(A,O),S(A,q),S(q,z),S(A,B),S(A,F),S(F,P),S(P,_),S(F,J),S(F,K),S(K,Q),W=!0},p:$,i:function(a){W||(C(t.$$.fragment,a),W=!0)},o:function(a){V(t.$$.fragment,a),W=!1},d:function(a){j(t),a&&m(s),a&&m(r)}}}function G(a){return M.apply(this,arguments)}function M(){return(M=a(t.mark((function a(s){var r;return t.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s.params,a.next=3,this.fetch("artists.tsv").then((function(a){return a.text()}));case 3:return r=a.sent,a.abrupt("return",{artistsRows:r});case 5:case"end":return a.stop()}}),a,this)})))).apply(this,arguments)}function H(a,t,s){var r=t.artistsRows;return a.$$set=function(a){"artistsRows"in a&&s(0,r=a.artistsRows)},a.$$.update=function(){1&a.$$.dirty&&A(r).sort((function(a,t){return a.name.localeCompare(t.name,"en",{sensitivity:"base"})}))},[r]}var N=function(a){s(r,l);var t=x(r);function r(a){var s;return e(this,r),s=t.call(this),o(c(s),a,H,T,i,{artistsRows:0}),s}return r}();export default N;export{G as preload};
