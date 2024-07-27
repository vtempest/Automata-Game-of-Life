import{s as Ie,f as Oe,n as fe,r as Be,o as Te,e as Ve}from"../chunks/scheduler.ai0Xrpo1.js";import{S as Se,i as Fe,e as P,s as N,y as Z,b as he,c as R,d as C,g as v,h as G,z as $,f as de,A as Ce,o as f,j as q,k as m,B as Ee,C as Q,l as De,D as me,E as Ne,F as Ge,u as je,v as Ue,w as He,t as Xe,a as Ye,x as ze}from"../chunks/index.CciZhzbl.js";function ae(o){return(o==null?void 0:o.length)!==void 0?o:Array.from(o)}const ue=[{name:"Point On/Off"},{name:"Glider",array:[[0,2],[1,0],[1,2],[2,1],[2,2]]},{name:"Spaceship",array:[[1,0],[4,0],[0,1],[0,2],[4,2],[0,3],[1,3],[2,3],[3,3]]},{name:"Pulsar",array:[[0,0],[2,0],[4,0],[0,1],[4,1],[0,2],[4,2],[0,3],[4,3],[0,4],[2,4],[4,4]]},{name:"Glider Gun",array:[[25,0],[22,1],[23,1],[24,1],[25,1],[30,1],[13,2],[21,2],[22,2],[23,2],[24,2],[30,2],[12,3],[14,3],[21,3],[24,3],[34,3],[35,3],[11,4],[15,4],[16,4],[21,4],[22,4],[23,4],[24,4],[34,4],[35,4],[0,5],[1,5],[11,5],[15,5],[16,5],[22,5],[23,5],[24,5],[25,5],[0,6],[1,6],[11,6],[15,6],[16,6],[25,6],[12,7],[14,7],[13,8]]},{name:"Goose",array:[[0,0],[0,1],[0,2],[1,0],[1,10],[1,11],[2,1],[2,8],[2,9],[2,10],[2,12],[3,3],[3,4],[3,7],[3,8],[4,4],[5,8],[6,4],[6,5],[6,9],[7,3],[7,5],[7,7],[7,8],[8,3],[8,5],[8,8],[8,10],[8,11],[9,2],[9,7],[9,8],[10,2],[10,3],[11,2],[11,3]]},{name:"Bar",array:[[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0]]},{name:"R-pentomino",array:[[0,1],[1,0],[1,1],[1,2],[2,0]]},{name:"Beehive",array:[[0,0],[0,6],[1,0],[1,6],[2,1],[2,5],[3,2],[3,3],[3,4]]},{name:"Tumbler",array:[[0,1],[0,2],[1,0],[2,1],[2,3],[2,4],[3,2],[3,4],[5,2],[5,4],[6,1],[6,3],[6,4],[7,0],[8,1],[8,2]]},{name:"Octagon",array:[[0,6],[0,7],[1,5],[1,8],[2,4],[2,9],[3,3],[3,10],[4,3],[4,10],[5,4],[5,9],[6,5],[6,8],[7,6],[7,7]]},{name:"Pinwheel",array:[[0,4],[0,5],[1,4],[1,5],[3,4],[3,5],[3,6],[3,7],[4,3],[4,8],[4,10],[4,11],[5,3],[5,7],[5,8],[5,10],[5,11],[6,0],[6,1],[6,3],[6,5],[6,8],[7,0],[7,1],[7,3],[7,6],[7,8],[8,4],[8,5],[8,6],[8,7],[10,6],[10,7],[11,6],[11,7]]},{name:"Unix",array:[[0,4],[0,5],[1,0],[1,1],[1,3],[2,0],[2,1],[2,4],[2,7],[3,5],[3,7],[4,6],[6,5],[6,6],[7,5],[7,6]]},{name:"Lightsaber",array:[[1,0],[1,1],[2,0],[2,2],[3,1],[3,2],[4,3],[4,4],[5,3],[6,4],[6,6],[8,6],[8,8],[9,9],[10,8],[10,9]]}];function Pe(o,t,r){const a=o.slice();return a[34]=t[r],a[36]=r,a}function Re(o,t,r){const a=o.slice();return a[34]=t[r],a[36]=r,a}function Le(o,t,r){const a=o.slice();return a[38]=t[r],a}function We(o){let t;return{c(){t=Z("polygon"),this.h()},l(r){t=$(r,"polygon",{points:!0}),C(t).forEach(v),this.h()},h(){f(t,"points","5 3 19 12 5 21")},m(r,a){q(r,t,a)},d(r){r&&v(t)}}}function qe(o){let t,r;return{c(){t=Z("rect"),r=Z("rect"),this.h()},l(a){t=$(a,"rect",{x:!0,y:!0,width:!0,height:!0}),C(t).forEach(v),r=$(a,"rect",{x:!0,y:!0,width:!0,height:!0}),C(r).forEach(v),this.h()},h(){f(t,"x","6"),f(t,"y","4"),f(t,"width","4"),f(t,"height","16"),f(r,"x","14"),f(r,"y","4"),f(r,"width","4"),f(r,"height","16")},m(a,g){q(a,t,g),q(a,r,g)},d(a){a&&(v(t),v(r))}}}function Je(o){let t,r=o[38].name+"",a;return{c(){t=P("option"),a=he(r),this.h()},l(g){t=R(g,"OPTION",{});var _=C(t);a=de(_,r),_.forEach(v),this.h()},h(){t.__value=o[38].name,Ne(t,t.__value)},m(g,_){q(g,t,_),m(t,a)},p:fe,d(g){g&&v(t)}}}function xe(o){let t,r,a,g,_,p;function y(){return o[13](o[36])}return{c(){t=P("button"),r=he(o[36]),a=N(),this.h()},l(h){t=R(h,"BUTTON",{class:!0});var k=C(t);r=de(k,o[36]),a=G(k),k.forEach(v),this.h()},h(){f(t,"class",g=`w-8 h-8 text-sm font-medium rounded-md focus:outline-none ${o[4].includes(o[36])?"bg-blue-500 text-white":"bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"}`)},m(h,k){q(h,t,k),m(t,r),m(t,a),_||(p=Q(t,"click",y),_=!0)},p(h,k){o=h,k[0]&16&&g!==(g=`w-8 h-8 text-sm font-medium rounded-md focus:outline-none ${o[4].includes(o[36])?"bg-blue-500 text-white":"bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"}`)&&f(t,"class",g)},d(h){h&&v(t),_=!1,p()}}}function Ae(o){let t,r,a,g,_,p;function y(){return o[14](o[36])}return{c(){t=P("button"),r=he(o[36]),a=N(),this.h()},l(h){t=R(h,"BUTTON",{class:!0});var k=C(t);r=de(k,o[36]),a=G(k),k.forEach(v),this.h()},h(){f(t,"class",g=`w-8 h-8 text-sm font-medium rounded-md focus:outline-none ${o[3].includes(o[36])?"bg-blue-500 text-white":"bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"}`)},m(h,k){q(h,t,k),m(t,r),m(t,a),_||(p=Q(t,"click",y),_=!0)},p(h,k){o=h,k[0]&8&&g!==(g=`w-8 h-8 text-sm font-medium rounded-md focus:outline-none ${o[3].includes(o[36])?"bg-blue-500 text-white":"bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"}`)&&f(t,"class",g)},d(h){h&&v(t),_=!1,p()}}}function Ke(o){let t,r,a,g,_,p,y,h,k,X,A,E,M,L,j,F,I,Y,J,ee,S,V,oe="Born:",te,D,W,B,U,le="Survive:",K,H,ne,se;function ge(n,w){return n[2]?qe:We}let re=ge(o),l=re(o),e=ae(ue),s=[];for(let n=0;n<e.length;n+=1)s[n]=Je(Le(o,e,n));let d=ae(Array(9)),c=[];for(let n=0;n<d.length;n+=1)c[n]=xe(Re(o,d,n));let b=ae(Array(9)),u=[];for(let n=0;n<b.length;n+=1)u[n]=Ae(Pe(o,b,n));return{c(){t=P("div"),r=P("div"),a=P("canvas"),g=N(),_=P("div"),p=P("div"),y=P("button"),h=Z("svg"),l.c(),X=N(),A=P("select");for(let n=0;n<s.length;n+=1)s[n].c();E=N(),M=P("span"),L=he(o[1]),j=N(),F=P("button"),I=Z("svg"),Y=Z("path"),ee=N(),S=P("div"),V=P("span"),V.textContent=oe,te=N(),D=P("div");for(let n=0;n<c.length;n+=1)c[n].c();W=N(),B=P("div"),U=P("span"),U.textContent=le,K=N(),H=P("div");for(let n=0;n<u.length;n+=1)u[n].c();this.h()},l(n){t=R(n,"DIV",{class:!0});var w=C(t);r=R(w,"DIV",{class:!0});var i=C(r);a=R(i,"CANVAS",{class:!0}),C(a).forEach(v),i.forEach(v),g=G(w),_=R(w,"DIV",{class:!0});var z=C(_);p=R(z,"DIV",{class:!0});var O=C(p);y=R(O,"BUTTON",{class:!0,"aria-label":!0});var be=C(y);h=$(be,"svg",{class:!0,viewBox:!0,fill:!0});var _e=C(h);l.l(_e),_e.forEach(v),be.forEach(v),X=G(O),A=R(O,"SELECT",{class:!0});var ve=C(A);for(let T=0;T<s.length;T+=1)s[T].l(ve);ve.forEach(v),E=G(O),M=R(O,"SPAN",{class:!0});var pe=C(M);L=de(pe,o[1]),pe.forEach(v),j=G(O),F=R(O,"BUTTON",{class:!0,"aria-label":!0});var ye=C(F);I=$(ye,"svg",{class:!0,viewBox:!0,fill:!0,stroke:!0,"stroke-width":!0});var we=C(I);Y=$(we,"path",{d:!0}),C(Y).forEach(v),we.forEach(v),ye.forEach(v),ee=G(O),S=R(O,"DIV",{class:!0});var ie=C(S);V=R(ie,"SPAN",{class:!0,"data-svelte-h":!0}),Ce(V)!=="svelte-x1adka"&&(V.textContent=oe),te=G(ie),D=R(ie,"DIV",{class:!0});var ke=C(D);for(let T=0;T<c.length;T+=1)c[T].l(ke);ke.forEach(v),ie.forEach(v),W=G(O),B=R(O,"DIV",{class:!0});var ce=C(B);U=R(ce,"SPAN",{class:!0,"data-svelte-h":!0}),Ce(U)!=="svelte-8cl6o7"&&(U.textContent=le),K=G(ce),H=R(ce,"DIV",{class:!0});var Me=C(H);for(let T=0;T<u.length;T+=1)u[T].l(Me);Me.forEach(v),ce.forEach(v),O.forEach(v),z.forEach(v),w.forEach(v),this.h()},h(){f(a,"class","absolute inset-0 w-full h-full cursor-pointer"),f(r,"class","flex-grow relative"),f(h,"class","w-6 h-6"),f(h,"viewBox","0 0 24 24"),f(h,"fill","currentColor"),f(y,"class","flex-shrink-0 w-12 h-12 bg-black hover:bg-gray-800 text-white rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"),f(y,"aria-label",k=o[2]?"Pause":"Play"),f(A,"class","bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"),o[5]===void 0&&Oe(()=>o[12].call(A)),f(M,"class","bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium"),f(Y,"d","M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"),f(I,"class","w-6 h-6"),f(I,"viewBox","0 0 24 24"),f(I,"fill","none"),f(I,"stroke","currentColor"),f(I,"stroke-width","2"),f(F,"class",J=`flex-shrink-0 w-12 h-12 text-white rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ${o[6]?"bg-blue-600 hover:bg-blue-700":"bg-gray-600 hover:bg-gray-700"}`),f(F,"aria-label","Toggle Random Rules"),f(V,"class","text-sm font-medium whitespace-nowrap"),f(D,"class","flex space-x-1"),f(S,"class","flex items-center space-x-2"),f(U,"class","text-sm font-medium whitespace-nowrap"),f(H,"class","flex space-x-1"),f(B,"class","flex items-center space-x-2"),f(p,"class","flex items-center space-x-2 p-2 overflow-x-auto"),f(_,"class","bg-gray-100 dark:bg-gray-800 shadow-md fixed bottom-0 left-0 right-0"),f(t,"class","h-screen w-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-hidden")},m(n,w){q(n,t,w),m(t,r),m(r,a),o[11](a),m(t,g),m(t,_),m(_,p),m(p,y),m(y,h),l.m(h,null),m(p,X),m(p,A);for(let i=0;i<s.length;i+=1)s[i]&&s[i].m(A,null);Ee(A,o[5],!0),m(p,E),m(p,M),m(M,L),m(p,j),m(p,F),m(F,I),m(I,Y),m(p,ee),m(p,S),m(S,V),m(S,te),m(S,D);for(let i=0;i<c.length;i+=1)c[i]&&c[i].m(D,null);m(p,W),m(p,B),m(B,U),m(B,K),m(B,H);for(let i=0;i<u.length;i+=1)u[i]&&u[i].m(H,null);ne||(se=[Q(a,"click",o[7]),Q(y,"click",o[8]),Q(A,"change",o[12]),Q(F,"click",o[10])],ne=!0)},p(n,w){if(re!==(re=ge(n))&&(l.d(1),l=re(n),l&&(l.c(),l.m(h,null))),w[0]&4&&k!==(k=n[2]?"Pause":"Play")&&f(y,"aria-label",k),w[0]&32&&Ee(A,n[5]),w[0]&2&&De(L,n[1]),w[0]&64&&J!==(J=`flex-shrink-0 w-12 h-12 text-white rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ${n[6]?"bg-blue-600 hover:bg-blue-700":"bg-gray-600 hover:bg-gray-700"}`)&&f(F,"class",J),w[0]&528){d=ae(Array(9));let i;for(i=0;i<d.length;i+=1){const z=Re(n,d,i);c[i]?c[i].p(z,w):(c[i]=xe(z),c[i].c(),c[i].m(D,null))}for(;i<c.length;i+=1)c[i].d(1);c.length=d.length}if(w[0]&520){b=ae(Array(9));let i;for(i=0;i<b.length;i+=1){const z=Pe(n,b,i);u[i]?u[i].p(z,w):(u[i]=Ae(z),u[i].c(),u[i].m(H,null))}for(;i<u.length;i+=1)u[i].d(1);u.length=b.length}},i:fe,o:fe,d(n){n&&v(t),o[11](null),l.d(),me(s,n),me(c,n),me(u,n),ne=!1,Be(se)}}}let x=5;function Qe(o,t,r){let a,g,_=[],p=[],y,h,k=10,X=0,A=!1,E=[2,3],M=[3],L=0,j="Point On/Off",F,I=!1,Y;Te(()=>{B(),D(),J()});function J(){h=Math.floor(window.innerWidth/x),y=Math.floor((window.innerHeight-100)/x),_=Array(y).fill().map(()=>Array(h).fill(0)),p=Array(y).fill().map(()=>Array(h).fill(0)),r(0,a.width=h*x,a),r(0,a.height=y*x,a),g=a.getContext("2d"),g.fillStyle="white",g.fillRect(0,0,h*x,y*x),r(1,X=0)}function ee(l){const e=a.getBoundingClientRect(),s=Math.floor((l.clientX-e.left)/x),d=Math.floor((l.clientY-e.top)/x);j==="Point On/Off"?(_[d][s]=_[d][s]?0:1,_[d][s]?S(s,d):V(s,d)):ue.find(b=>b.name===j).array.forEach(([b,u])=>{S(s+b,d+u)})}function S(l,e){if(l<0||e<0||l>=h||e>=y)return;_[e][l]=1;const s=[],d=[[l-1,e-1],[l-1,e],[l-1,e+1],[l,e-1],[l,e+1],[l+1,e-1],[l+1,e],[l+1,e+1]];for(const[b,u]of d)if(b>=0&&u>=0&&b<h&&u<y&&_[u][b]===1){const n=p[u][b];n&&n!=="000"&&n!=="FFF"&&s.push(n)}let c="";if(s.length)c=s.reduce((u,n)=>[u[0]+parseInt(n.slice(0,2),16),u[1]+parseInt(n.slice(2,4),16),u[2]+parseInt(n.slice(4,6),16)],[0,0,0]).map(u=>Math.floor(u/s.length).toString(16).padStart(2,"0")).join("");else{const b=[[l-2,e-2],[l-2,e-1],[l-2,e],[l-2,e+1],[l-2,e+2],[l+2,e-2],[l+2,e-1],[l+2,e],[l+2,e+1],[l+2,e+2],[l-1,e+2],[l+1,e+2],[l-1,e-2],[l+1,e-2],[l,e+2],[l,e-2]];for(const[u,n]of b)if(u>=0&&n>=0&&u<h&&n<y&&_[n][u]===1){const w=p[n][u];if(w&&w!=="FFF"){c=w;break}}}(!c||c==="FFF")&&(c=Array(3).fill().map(()=>Math.floor(Math.random()*256).toString(16).padStart(2,"0")).join("")),c==="FFF"&&(c="FC4"),g.fillStyle="#"+c,p[e][l]=c,g.fillRect(l*x,e*x,x,x)}function V(l,e){l<0||e<0||l>=h||e>=y||(_[e][l]=0,p[e][l]=0,g.fillStyle="#FFF",g.fillRect(l*x,e*x,x,x))}function oe(){const l=_.map(e=>[...e]);for(let e=0;e<y;e++)for(let s=0;s<h&&!(e>0&&e<y-1&&!l[e-1].includes(1)&&!l[e].includes(1)&&!l[e+1].includes(1));s++){const d=te(s,e,l);l[e][s]===0&&M.includes(d)||l[e][s]===1&&(E.includes(d)||M.includes(d))?S(s,e):l[e][s]===1&&!M.includes(d)&&!E.includes(d)&&V(s,e)}}function te(l,e,s){let d=0;for(let c=-1;c<=1;c++)for(let b=-1;b<=1;b++){if(b===0&&c===0)continue;const u=l+b,n=e+c;u>=0&&u<h&&n>=0&&n<y&&(d+=s[n][u])}return d}function D(){r(2,A=!A),A?F=setInterval(()=>{r(1,X++,X),oe()},k*20):clearInterval(F)}function W(l,e){const s=new Date().getTime();s-L<500||(L=s,l==="birth"?M.includes(e)?r(4,M=M.filter(d=>d!==e)):r(4,M=[...M,e].sort((d,c)=>d-c)):E.includes(e)?r(3,E=E.filter(d=>d!==e)):r(3,E=[...E,e].sort((d,c)=>d-c)))}function B(){r(6,I=!I),I?Y=setInterval(()=>{U(),H()},5e3):clearInterval(Y)}function U(){le("birth"),le("survive"),K("birth"),K("survive"),r(4,M=[...M]),r(3,E=[...E])}function le(l){const s=[...l==="birth"?M:E],d=Math.floor(Math.random()*2)+1;for(let c=0;c<d;c++)if(Math.random()<.5&&s.length>3){const b=Math.floor(Math.random()*s.length);s.splice(b,1)}else{const b=Math.floor(Math.random()*9);s.includes(b)||s.push(b)}l==="birth"?r(4,M=s):r(3,E=s)}function K(l){const e=l==="birth"?M:E;if(!e.some(s=>s<3)){const s=Math.floor(Math.random()*3);e.push(s)}for(;e.length<3;){const s=Math.floor(Math.random()*9);e.includes(s)||e.push(s)}e.sort((s,d)=>s-d),l==="birth"?r(4,M=e):r(3,E=e)}function H(){const e=ue[Math.floor(Math.random()*ue.length)].array,s=Math.floor(Math.random()*(h-e[0].length)),d=Math.floor(Math.random()*(y-e.length));e.forEach((c,b)=>{c.forEach((u,n)=>{if(u===1){const w=s+n,i=d+b;w>=0&&w<h&&i>=0&&i<y&&S(w,i)}})})}function ne(l){Ve[l?"unshift":"push"](()=>{a=l,r(0,a)})}function se(){j=Ge(this),r(5,j)}return[a,X,A,E,M,j,I,ee,D,W,B,ne,se,l=>W("birth",l),l=>W("survive",l)]}class Ze extends Se{constructor(t){super(),Fe(this,t,Qe,Ke,Ie,{},null,[-1,-1])}}function $e(o){let t,r;return t=new Ze({}),{c(){je(t.$$.fragment)},l(a){Ue(t.$$.fragment,a)},m(a,g){He(t,a,g),r=!0},p:fe,i(a){r||(Xe(t.$$.fragment,a),r=!0)},o(a){Ye(t.$$.fragment,a),r=!1},d(a){ze(t,a)}}}class lt extends Se{constructor(t){super(),Fe(this,t,null,$e,Ie,{})}}export{lt as component};
