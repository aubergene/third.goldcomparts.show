import{S as e,i as t,s as l,e as a,t as s,g as r,h as n,j as o,d as i,n as c,o as h,w as u,a as f,f as v,k as m,l as d,A as g,B as _,C as p,D as E,q as y,E as b,F as I,G as w,H as O,p as N,r as T,u as k,I as C,J as $,K as j,L as x,M as D,N as S}from"./client.228a66df.js";import{t as P}from"./tsv.6a7ced64.js";import{s as R}from"./helpers.b84b4fdd.js";import{f as V,a as L}from"./index.8d124e30.js";function M(e,t,l){const a=e.slice();return a[13]=t[l],a[15]=l,a}function A(e,t,l){const a=e.slice();return a[4]=t[l],a}function B(e,t,l){const a=e.slice();return a[3]=t[l],a}function F(e,t,l){const a=e.slice();return a[2]=t[l],a}function H(e){let t,l,f,v=e[2]+"";return{c(){t=a("option"),l=s(v),this.h()},l(e){t=r(e,"OPTION",{value:!0});var a=n(t);l=o(a,v),a.forEach(i),this.h()},h(){t.__value=f=e[2],t.value=t.__value},m(e,a){c(e,t,a),h(t,l)},p(e,a){1&a&&v!==(v=e[2]+"")&&u(l,v),1&a&&f!==(f=e[2])&&(t.__value=f,t.value=t.__value)},d(e){e&&i(t)}}}function Y(e){let t,l,f,v=e[3]+"";return{c(){t=a("option"),l=s(v),this.h()},l(e){t=r(e,"OPTION",{value:!0});var a=n(t);l=o(a,v),a.forEach(i),this.h()},h(){t.__value=f=e[3],t.value=t.__value},m(e,a){c(e,t,a),h(t,l)},p(e,a){1&a&&v!==(v=e[3]+"")&&u(l,v),1&a&&f!==(f=e[3])&&(t.__value=f,t.value=t.__value)},d(e){e&&i(t)}}}function q(e){let t,l,f,v=e[4]+"";return{c(){t=a("option"),l=s(v),this.h()},l(e){t=r(e,"OPTION",{value:!0});var a=n(t);l=o(a,v),a.forEach(i),this.h()},h(){t.__value=f=e[4],t.value=t.__value},m(e,a){c(e,t,a),h(t,l)},p(e,a){1&a&&v!==(v=e[4]+"")&&u(l,v),1&a&&f!==(f=e[4])&&(t.__value=f,t.value=t.__value)},d(e){e&&i(t)}}}function z(e){let t,l,u,d,g,_,p,E,y;return{c(){t=a("div"),l=s("Sorry your filter return no results\n            "),u=a("br"),d=f(),g=a("div"),_=s("Click here to remove filters"),p=f(),this.h()},l(e){t=r(e,"DIV",{});var a=n(t);l=o(a,"Sorry your filter return no results\n            "),u=r(a,"BR",{}),d=v(a),g=r(a,"DIV",{class:!0});var s=n(g);_=o(s,"Click here to remove filters"),s.forEach(i),p=v(a),a.forEach(i),this.h()},h(){m(g,"class","button")},m(a,s){c(a,t,s),h(t,l),h(t,u),h(t,d),h(t,g),h(g,_),h(t,p),E||(y=I(g,"click",e[9]),E=!0)},p:N,d(e){e&&i(t),E=!1,y()}}}function G(e,t){let l,y,b,I,w,O,T,k,C,$,x,D,S,P,M,A,B=t[13].title+"",F=t[13].name+"",H=t[13].otherName?`  (${t[13].otherName})`:"",Y=N;return{key:e,first:null,c(){l=a("div"),y=a("a"),b=a("div"),I=f(),w=a("h6"),O=s(B),T=f(),k=a("p"),C=s(F),$=f(),x=s(H),S=f(),this.h()},l(e){l=r(e,"DIV",{class:!0});var t=n(l);y=r(t,"A",{href:!0});var a=n(y);b=r(a,"DIV",{class:!0,style:!0}),n(b).forEach(i),I=v(a),w=r(a,"H6",{class:!0});var s=n(w);O=o(s,B),s.forEach(i),T=v(a),k=r(a,"P",{class:!0});var c=n(k);C=o(c,F),$=v(c),x=o(c,H),c.forEach(i),a.forEach(i),S=v(t),t.forEach(i),this.h()},h(){m(b,"class","artwork-photo svelte-i72bty"),d(b,"background-image","url(img/artworks/"+t[13].username+"-thumb.jpeg)"),m(w,"class","svelte-i72bty"),m(k,"class","svelte-i72bty"),m(y,"href",D="artists/"+R(t[13].name)),m(l,"class","art-box svelte-i72bty"),this.first=l},m(e,t){c(e,l,t),h(l,y),h(y,b),h(y,I),h(y,w),h(w,O),h(y,T),h(y,k),h(k,C),h(k,$),h(k,x),h(l,S),A=!0},p(e,t){(!A||2&t)&&d(b,"background-image","url(img/artworks/"+e[13].username+"-thumb.jpeg)"),(!A||2&t)&&B!==(B=e[13].title+"")&&u(O,B),(!A||2&t)&&F!==(F=e[13].name+"")&&u(C,F),(!A||2&t)&&H!==(H=e[13].otherName?`  (${e[13].otherName})`:"")&&u(x,H),(!A||2&t&&D!==(D="artists/"+R(e[13].name)))&&m(y,"href",D)},r(){M=l.getBoundingClientRect()},f(){g(l),Y(),_(l,M)},a(){Y(),Y=p(l,M,V,{delay:10*t[15],duration:400})},i(e){A||(j(()=>{P||(P=E(l,L,{duration:300,y:200},!0)),P.run(1)}),A=!0)},o(e){P||(P=E(l,L,{duration:300,y:200},!1)),P.run(0),A=!1},d(e){e&&i(l),e&&P&&P.end()}}}function J(e){let t,l,u,d,g,_,p,E,N,S,P,R,V,L,J,K,Q,U,W,X,Z,ee,te,le=[],ae=new Map,se=e[0].themes,re=[];for(let t=0;t<se.length;t+=1)re[t]=H(F(e,se,t));let ne=e[0].media,oe=[];for(let t=0;t<ne.length;t+=1)oe[t]=Y(B(e,ne,t));let ie=e[0].years.reverse(),ce=[];for(let t=0;t<ie.length;t+=1)ce[t]=q(A(e,ie,t));let he=e[1];const ue=e=>e[13].username;for(let t=0;t<he.length;t+=1){let l=M(e,he,t),a=ue(l);ae.set(a,le[t]=G(a,l))}let fe=null;return he.length||(fe=z(e)),{c(){t=f(),l=a("section"),u=a("div"),d=a("div"),g=a("select"),_=a("option"),p=s("Theme");for(let e=0;e<re.length;e+=1)re[e].c();N=f(),S=a("select"),P=a("option"),R=s("Media");for(let e=0;e<oe.length;e+=1)oe[e].c();L=f(),J=a("select"),K=a("option"),Q=s("Year");for(let e=0;e<ce.length;e+=1)ce[e].c();W=f(),X=a("div");for(let e=0;e<le.length;e+=1)le[e].c();fe&&fe.c(),this.h()},l(e){y('[data-svelte="svelte-1xemdmz"]',document.head).forEach(i),t=v(e),l=r(e,"SECTION",{class:!0});var a=n(l);u=r(a,"DIV",{class:!0});var s=n(u);d=r(s,"DIV",{class:!0});var c=n(d);g=r(c,"SELECT",{});var h=n(g);_=r(h,"OPTION",{value:!0,selected:!0});var f=n(_);p=o(f,"Theme"),f.forEach(i);for(let e=0;e<re.length;e+=1)re[e].l(h);h.forEach(i),N=v(c),S=r(c,"SELECT",{});var m=n(S);P=r(m,"OPTION",{value:!0,selected:!0});var E=n(P);R=o(E,"Media"),E.forEach(i);for(let e=0;e<oe.length;e+=1)oe[e].l(m);m.forEach(i),L=v(c),J=r(c,"SELECT",{});var b=n(J);K=r(b,"OPTION",{value:!0,selected:!0});var I=n(K);Q=o(I,"Year"),I.forEach(i);for(let e=0;e<ce.length;e+=1)ce[e].l(b);b.forEach(i),W=v(c),X=r(c,"DIV",{class:!0});var w=n(X);for(let e=0;e<le.length;e+=1)le[e].l(w);fe&&fe.l(w),w.forEach(i),c.forEach(i),s.forEach(i),a.forEach(i),this.h()},h(){document.title="Final Show - 2020",_.__value=E=null,_.value=_.__value,_.selected=!0,void 0===e[2]&&j(()=>e[6].call(g)),P.__value=V=null,P.value=P.__value,P.selected=!0,void 0===e[3]&&j(()=>e[7].call(S)),K.__value=U=null,K.value=K.__value,K.selected=!0,void 0===e[4]&&j(()=>e[8].call(J)),m(X,"class","art-boxes svelte-i72bty"),m(d,"class","content"),m(u,"class","container page-max-width artists-container svelte-i72bty"),m(l,"class","section bg-col-7")},m(a,s){c(a,t,s),c(a,l,s),h(l,u),h(u,d),h(d,g),h(g,_),h(_,p);for(let e=0;e<re.length;e+=1)re[e].m(g,null);b(g,e[2]),h(d,N),h(d,S),h(S,P),h(P,R);for(let e=0;e<oe.length;e+=1)oe[e].m(S,null);b(S,e[3]),h(d,L),h(d,J),h(J,K),h(K,Q);for(let e=0;e<ce.length;e+=1)ce[e].m(J,null);b(J,e[4]),h(d,W),h(d,X);for(let e=0;e<le.length;e+=1)le[e].m(X,null);fe&&fe.m(X,null),Z=!0,ee||(te=[I(g,"change",e[6]),I(S,"change",e[7]),I(J,"change",e[8])],ee=!0)},p(e,[t]){if(1&t){let l;for(se=e[0].themes,l=0;l<se.length;l+=1){const a=F(e,se,l);re[l]?re[l].p(a,t):(re[l]=H(a),re[l].c(),re[l].m(g,null))}for(;l<re.length;l+=1)re[l].d(1);re.length=se.length}if(5&t&&b(g,e[2]),1&t){let l;for(ne=e[0].media,l=0;l<ne.length;l+=1){const a=B(e,ne,l);oe[l]?oe[l].p(a,t):(oe[l]=Y(a),oe[l].c(),oe[l].m(S,null))}for(;l<oe.length;l+=1)oe[l].d(1);oe.length=ne.length}if(9&t&&b(S,e[3]),1&t){let l;for(ie=e[0].years.reverse(),l=0;l<ie.length;l+=1){const a=A(e,ie,l);ce[l]?ce[l].p(a,t):(ce[l]=q(a),ce[l].c(),ce[l].m(J,null))}for(;l<ce.length;l+=1)ce[l].d(1);ce.length=ie.length}if(17&t&&b(J,e[4]),30&t){const l=e[1];x();for(let e=0;e<le.length;e+=1)le[e].r();le=w(le,t,ue,1,e,l,ae,X,D,G,null,M);for(let e=0;e<le.length;e+=1)le[e].a();O(),!l.length&&fe?fe.p(e,t):l.length?fe&&(fe.d(1),fe=null):(fe=z(e),fe.c(),fe.m(X,null))}},i(e){if(!Z){for(let e=0;e<he.length;e+=1)T(le[e]);Z=!0}},o(e){for(let e=0;e<le.length;e+=1)k(le[e]);Z=!1},d(e){e&&i(t),e&&i(l),C(re,e),C(oe,e),C(ce,e);for(let e=0;e<le.length;e+=1)le[e].d();fe&&fe.d(),ee=!1,$(te)}}}async function K({params:e}){return{artistsRows:await this.fetch("artists.tsv").then(e=>e.text()),tags:await this.fetch("/artists/tags.json").then(e=>e.json())}}function Q(e,t,l){let{artistsRows:a}=t,{tags:s}=t,r={title:"Artist",fn:(e,t)=>e.name.localeCompare(t.name,"en",{sensitivity:"base"})},n=null,o=null,i=null;let c,h;return e.$$set=e=>{"artistsRows"in e&&l(5,a=e.artistsRows),"tags"in e&&l(0,s=e.tags)},e.$$.update=()=>{32&e.$$.dirty&&l(10,c=P(a).sort((e,t)=>e.name.localeCompare(t.name,"en",{sensitivity:"base"}))),1052&e.$$.dirty&&l(1,h=c.filter(e=>e.title).filter(e=>(!o||e.media&&e.media.includes(o))&&(!n||e.themes&&e.themes.includes(n))&&(!i||e.years&&e.years.includes(i))).sort(r.fn))},[s,h,n,o,i,a,function(){n=S(this),l(2,n),l(0,s)},function(){o=S(this),l(3,o),l(0,s)},function(){i=S(this),l(4,i),l(0,s)},()=>l(2,n=l(3,o=l(4,i=null)))]}export default class extends e{constructor(e){super(),t(this,e,Q,J,l,{artistsRows:5,tags:0})}}export{K as preload};
