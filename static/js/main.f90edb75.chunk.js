(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{15:function(e,t,r){},17:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r(5),s=r(6),a=r(3),i=(r(15),r(0));function u(e){return Object(i.jsx)("button",{className:"square",onClick:e.onClick,children:e.value})}function l(){var e=Object(n.useState)({squares:Array(9).fill(null),xIsNext:!0}),t=Object(a.a)(e,2),r=t[0],c=t[1];function s(e){return Object(i.jsx)(u,{id:e,value:r.squares[e],onClick:function(){return function(e){var t=r.squares;if(o(t)||t[e])return;t[e]=r.xIsNext?"X":"O",c({squares:t,xIsNext:!r.xIsNext})}(e)}})}var l,j=o(r.squares);return l="Draw"===j?"Draw":j?"Winner: "+j:"".concat(r.xIsNext?"X":"O"," is next"),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h2",{children:l}),Object(i.jsxs)("div",{className:"App",children:[s(0)," ",s(1)," ",s(2),s(3)," ",s(4)," ",s(5),s(6)," ",s(7)," ",s(8)]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{style:{marginTop:"2%"},onClick:function(){c({squares:Array(9).fill(null),xIsNext:!0})},children:"new Game"})})]})}function o(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var n=Object(a.a)(t[r],3),c=n[0],i=n[1],u=n[2];if(e[c]&&e[c]===e[i]&&e[c]===e[u])return e[c]}var l,o=!0,j=Object(s.a)(e);try{for(j.s();!(l=j.n()).done;){if(null==l.value){o=!1;break}}}catch(x){j.e(x)}finally{j.f()}return o?"Draw":null}var j=document.getElementById("root");Object(c.createRoot)(j).render(Object(i.jsx)(n.StrictMode,{children:Object(i.jsx)(l,{})}))}},[[17,1,2]]]);
//# sourceMappingURL=main.f90edb75.chunk.js.map