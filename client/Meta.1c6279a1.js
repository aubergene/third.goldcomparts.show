import{S as e,i as t,s as o,e as r,a as n,t as i,g as a,f as c,h as s,j as p,d as l,k as m,n as g,o as h,w as y,p as d,x as u,y as f,z as E}from"./client.c9971637.js";import{B as A}from"./constants.11e4a587.js";function M(e){let t,o,u,f,E,M,T,k,j,v,x,H,S,W,q,I,L,b,w,K,N;return{c(){t=r("link"),o=n(),u=r("title"),f=i(e[1]),E=n(),M=r("link"),k=n(),j=r("meta"),v=n(),x=r("meta"),S=n(),W=r("meta"),q=n(),I=r("meta"),b=n(),w=r("meta"),K=n(),N=r("meta"),this.h()},l(r){t=a(r,"LINK",{rel:!0,href:!0}),o=c(r),u=a(r,"TITLE",{});var n=s(u);f=p(n,e[1]),n.forEach(l),E=c(r),M=a(r,"LINK",{rel:!0,href:!0}),k=c(r),j=a(r,"META",{property:!0,content:!0}),v=c(r),x=a(r,"META",{property:!0,content:!0}),S=c(r),W=a(r,"META",{property:!0,content:!0}),q=c(r),I=a(r,"META",{property:!0,content:!0}),b=c(r),w=a(r,"META",{property:!0,content:!0}),K=c(r),N=a(r,"META",{property:!0,content:!0}),this.h()},h(){m(t,"rel","stylesheet"),m(t,"href","css/global.css"),m(M,"rel","canonical"),m(M,"href",T=A+e[0]+"/"),m(j,"property","og:title"),m(j,"content",e[1]),m(x,"property","og:url"),m(x,"content",H=A+e[0]+"/"),m(W,"property","og:description"),m(W,"content",e[2]),m(I,"property","og:image"),m(I,"content",L=A+e[3]),m(w,"property","og:image:width"),m(w,"content",e[4]),m(N,"property","og:image:height"),m(N,"content",e[5])},m(e,r){g(e,t,r),g(e,o,r),g(e,u,r),h(u,f),g(e,E,r),g(e,M,r),g(e,k,r),g(e,j,r),g(e,v,r),g(e,x,r),g(e,S,r),g(e,W,r),g(e,q,r),g(e,I,r),g(e,b,r),g(e,w,r),g(e,K,r),g(e,N,r)},p(e,[t]){2&t&&y(f,e[1]),1&t&&T!==(T=A+e[0]+"/")&&m(M,"href",T),2&t&&m(j,"content",e[1]),1&t&&H!==(H=A+e[0]+"/")&&m(x,"content",H),4&t&&m(W,"content",e[2]),8&t&&L!==(L=A+e[3])&&m(I,"content",L),16&t&&m(w,"content",e[4]),32&t&&m(N,"content",e[5])},i:d,o:d,d(e){e&&l(t),e&&l(o),e&&l(u),e&&l(E),e&&l(M),e&&l(k),e&&l(j),e&&l(v),e&&l(x),e&&l(S),e&&l(W),e&&l(q),e&&l(I),e&&l(b),e&&l(w),e&&l(K),e&&l(N)}}}function T(e,t,o){let r;const{page:n}=u();f(e,n,e=>o(7,r=e));let{url:i=r.path}=t,{title:a}=t,{description:c="6 May 2021"}=t,{image:s="/img/social/facebook_1200x630.jpg"}=t,{imageWidth:p=1200}=t,{imageHeight:l=630}=t;return E(()=>()=>{document.head.querySelector("title").remove(),document.head.querySelector('link[rel="canonical"').remove(),Array.from(document.head.querySelectorAll('meta[property*="og"')).forEach(e=>e.remove())}),e.$$set=e=>{"url"in e&&o(0,i=e.url),"title"in e&&o(1,a=e.title),"description"in e&&o(2,c=e.description),"image"in e&&o(3,s=e.image),"imageWidth"in e&&o(4,p=e.imageWidth),"imageHeight"in e&&o(5,l=e.imageHeight)},[i,a,c,s,p,l,n]}class k extends e{constructor(e){super(),t(this,e,T,M,o,{url:0,title:1,description:2,image:3,imageWidth:4,imageHeight:5})}}export{k as M};
