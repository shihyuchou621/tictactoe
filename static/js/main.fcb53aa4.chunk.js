(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n.n(r),i=n(9),o=n.n(i),s=(n(15),n(2)),l=n(6),u=n(7),j=n(3);function O(e){for(var t=",036,147,258,012,345,678,048,246,",n={O:t,X:t},c=0;c<e.length;c++){var r=e[c];if(r&&(n[r]=n[r].replace(new RegExp(c,"g"),""),n[r].includes(",,")))return r}return e.every((function(e){return e}))?"T":""}n(16);var b=function(e,t){for(var n=",036,147,258,012,345,678,048,246,",c=0;c<9;c++){var r=t?"O":"X";e[c]===r&&(n=n.replace(new RegExp(c,"g"),""))}return n},f=function(e,t,n,c){var r=Object(j.a)(e);return""===e[n]&&""===e[c]?(r[Math.random()<.5?n:c]=t?"X":"O",r):r},d=function(){function e(){Object(l.a)(this,e)}return Object(u.a)(e,[{key:"play",value:function(e,t){var n=Object(j.a)(e);if(""===e[4])return n[4]=t?"X":"O",n;for(var c=0;c<9;c++)if(b(e,!t).includes(",".concat(c,","))&&""===e[c])return n[c]=t?"X":"O",n;for(var r=0;r<9;r++)if(b(e,t).includes(",".concat(r,","))&&""===e[r])return n[r]=t?"X":"O",n;return(n=f(e,t,0,8)).join("")!==e.join("")||(n=f(e,t,2,6)).join("")!==e.join("")||(n=f(e,t,1,7)).join("")!==e.join("")||(n=f(e,t,3,5)).join("")!==e.join("")||(n[e.findIndex((function(e){return""===e}))]=t?"X":"O"),n}}]),e}();function v(){var e=this,t=Object(r.useState)(!0),n=Object(s.a)(t,2),a=n[0],i=n[1],o=Object(r.useState)(!1),l=Object(s.a)(o,2),u=l[0],b=l[1],f=Object(r.useState)(!0),v=Object(s.a)(f,2),h=v[0],x=v[1],g=Object(r.useState)(Array(9).fill("")),m=Object(s.a)(g,2),p=m[0],X=m[1],N=Object(r.useState)(""),k=Object(s.a)(N,2),y=k[0],C=k[1],S=Object(r.useState)(!1),w=Object(s.a)(S,2),T=w[0],B=w[1];Object(r.useEffect)((function(){if(!y&&(u||""!==p.join(""))){var e=(new d).play(p,a);X(e);var t=O(e);t&&C(t)}}),[p.filter((function(e){return e===(a?"O":"X")})).length,T]);var E=function(e){if(T&&""===p[e]){var t=Object(j.a)(p);t[e]=a?"O":"X",X(t);var n=O(t);n&&C(n)}},P=function(){C(!1),X(Array(9).fill("")),i(!0),x(!0),B(!1),b(!1)};return Object(c.jsxs)("div",{children:[Object(c.jsxs)("button",{className:"choiceBtn ",disabled:T,onClick:function(){i(!a),x(!h)},children:["You: ",h?"O":"X"]}),Object(c.jsxs)("button",{className:"choiceBtn",disabled:T,onClick:function(){b(!u)},children:["first hand: ",u?"AI":"You"]}),Object(c.jsxs)("div",{className:"plate",children:[p.map((function(t,n){return Object(c.jsx)("div",{className:"unit ".concat(T&&!y?"":"disabled"),onClick:E.bind(e,n),children:t},n)})),!T&&Object(c.jsx)("button",{className:"startBtn overPlate",onClick:function(){B(!T)},children:"START"})]}),Object(c.jsx)("div",{className:y?"cloth":""}),("O"===y||"X"===y)&&Object(c.jsxs)("div",{className:"overPlate",children:[Object(c.jsxs)("div",{className:"resultText",children:["winner: ",y]}),Object(c.jsx)("button",{className:"startBtn",onClick:P,children:"reset"})]}),"T"===y&&Object(c.jsxs)("div",{className:"overPlate",children:[Object(c.jsx)("div",{className:"resultText",children:"break even"}),Object(c.jsx)("button",{className:"startBtn",onClick:P,children:"reset"})]})]})}var h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))},x=[0,2,6,8],g=",036,147,258,012,345,678,048,246,",m=new(function(){function e(){Object(l.a)(this,e)}return Object(u.a)(e,[{key:"play",value:function(e,t){var n=Object(j.a)(e);if(n.filter((function(e){return e})).length<2)return n[n[4]?x[~~(Math.random()*x.length)]:4]=t,n;for(var c={O:g,X:g},r="O"===t?"X":"O",a=0;a<e.length;a++)if(e[a]===r){console.log(a),c[r]=c[r].replace(new RegExp(a,"g"),"");var i=c[r].match(/,\d,/)||[],o=Object(s.a)(i,1)[0];o&&console.log(o)}return""}}]),e}());console.log(m.play(["X","","O","","O","","X","","O"],"X")),o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root")),h()}},[[17,1,2]]]);
//# sourceMappingURL=main.fcb53aa4.chunk.js.map