(this["webpackJsonpsimple-maths-game"]=this["webpackJsonpsimple-maths-game"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(4),s=n.n(r),i=(n(9),n(2)),u=(n(10),n(0)),o=function(e){return Object(u.jsx)(u.Fragment,{children:j.range(1,e.count).map((function(t){return Object(u.jsx)("div",{className:"star"},e.starId)}))})},l=function(e){return Object(u.jsx)("button",{className:"number",style:{backgroundColor:b[e.status]},onClick:function(){return e.onClick(e.number,e.status)},children:e.number})},m=function(e){return Object(u.jsxs)("div",{className:"game-done",children:[Object(u.jsx)("div",{className:"message",style:{color:"lost"===e.gameStatus?"red":"green"},children:"lost"===e.gameStatus?"GameOver":"Nice"}),Object(u.jsx)("button",{onClick:e.onClick,children:"Play Again"})]})},d=function(e){var t=function(){var e=Object(a.useState)(j.random(1,9)),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(j.range(1,9)),s=Object(i.a)(r,2),u=s[0],o=s[1],l=Object(a.useState)([]),m=Object(i.a)(l,2),d=m[0],b=m[1],f=Object(a.useState)(10),g=Object(i.a)(f,2),h=g[0],O=g[1];return Object(a.useEffect)((function(){h>0&&u.length>0&&setTimeout((function(){O((h-.1).toFixed(2))}),100)})),{stars:n,availableNums:u,candidateNums:d,secondsLeft:h,setGameState:function(e){if(j.sum(e)!==n)b(e);else{var t=u.filter((function(t){return!e.includes(t)}));c(j.randomSumIn(t,9)),o(t),b([])}}}}(),n=t.stars,c=t.availableNums,r=t.candidateNums,s=t.secondsLeft,d=t.setGameState,b=j.sum(r)>n,f=0===c.length?"won":s<=0?"lost":"active",g=function(e,t){if("active"==f&&"used"!=t){var n="available"===t?r.concat(e):r.filter((function(t){return t!==e}));d(n)}};return Object(u.jsxs)("div",{className:"game",children:[Object(u.jsx)("div",{className:"help",children:"Pick 1 or more numbers that sum to the number of stars"}),Object(u.jsxs)("div",{className:"body",children:[Object(u.jsx)("div",{className:"left",children:"active"!=f?Object(u.jsx)(m,{onClick:e.startNewGame,gameStatus:f}):Object(u.jsx)(o,{count:n})}),Object(u.jsx)("div",{className:"right",children:j.range(1,9).map((function(e){return Object(u.jsx)(l,{status:(t=e,c.includes(t)?r.includes(t)?b?"wrong":"candidate":"available":"used"),number:e,onClick:g},e);var t}))})]}),Object(u.jsxs)("div",{className:"timer",children:["Time Remaining: ",s]})]})},b={available:"lightgray",used:"lightgreen",wrong:"lightcoral",candidate:"deepskyblue"},j={sum:function(e){return e.reduce((function(e,t){return e+t}),0)},range:function(e,t){return Array.from({length:t-e+1},(function(t,n){return e+n}))},random:function(e,t){return e+Math.floor(Math.random()*(t-e+1))},randomSumIn:function(e,t){for(var n=[[]],a=[],c=0;c<e.length;c++)for(var r=0,s=n.length;r<s;r++){var i=n[r].concat(e[c]),u=j.sum(i);u<=t&&(n.push(i),a.push(u))}return a[j.random(0,a.length-1)]}},f=function(){var e=Object(a.useState)(1),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(u.jsx)(d,{startNewGame:function(){return c(n+1)}},n)},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root")),g()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.9876c559.chunk.js.map