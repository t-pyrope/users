(this.webpackJsonpusers=this.webpackJsonpusers||[]).push([[0],{42:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(14),s=n.n(a),i=n(8),u=n(30),o=n(4),d=n(7),b={people:[],displayPeople:[]},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_PEOPLE":return Object(d.a)(Object(d.a)({},e),{},{people:t.payload.people});case"LOAD_DISPLAY":return Object(d.a)(Object(d.a)({},e),{},{displayPeople:t.payload.displayPeople});default:return Object(d.a)({},e)}},j={checkedItems:[]},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_ITEM":return Object(d.a)(Object(d.a)({},e),{},{checkedItems:t.payload.checkedItems});default:return Object(d.a)({},e)}},O=Object(i.c)({people:l,checked:f}),p=(n(42),n(10)),h=n(9),x=n(5),m=n(6),g=n(20),v=n.n(g),y=n(32),k=n(33),E=n.n(k),C=function(){return function(){var e=Object(y.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://gist.githubusercontent.com/bunopus/f48fbb06578003fb521c7c1a54fd906a/raw/e5767c1e7f172c6375f064a9441f2edd57a79f15/test_users.json");case 2:n=e.sent,t({type:"FETCH_PEOPLE",payload:{people:n.data}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},I=function(e){return function(t){t({type:"LOAD_DISPLAY",payload:{displayPeople:e}})}},P=n(0),_=function(){var e=Object(c.useState)([]),t=Object(h.a)(e,2),n=t[0],r=t[1],a=Object(o.b)();Object(c.useEffect)((function(){a(C())}),[a]);var s=Object(o.c)((function(e){return e.people})).people;Object(c.useEffect)((function(){a(I(s))}),[a,s]);var i=Object(o.c)((function(e){return e.people})).displayPeople,u=function(e){return Object(P.jsxs)("tr",{children:[Object(P.jsx)("td",{children:e.name}),Object(P.jsx)("td",{children:e.age}),Object(P.jsx)("td",{children:e.gender}),Object(P.jsx)("td",{children:e.department}),Object(P.jsxs)("td",{className:"hide",children:[e.address.city,","," ",e.address.street]})]},e.id)},d=function(e,t){var n=Object(p.a)(i);switch(e){case"age":"asc"===t&&n.sort((function(e,t){return e.age-t.age})),"desc"===t&&n.sort((function(e,t){return t.age-e.age}));break;case"name":"asc"===t&&n.sort((function(e,t){return e.name>t.name?1:-1})),"desc"===t&&n.sort((function(e,t){return t.name>e.name?1:-1}));break;case"gender":"asc"===t&&n.sort((function(e,t){return e.gender>t.gender?1:-1})),"desc"===t&&n.sort((function(e,t){return t.gender>e.gender?1:-1}));break;case"department":"asc"===t&&n.sort((function(e,t){return e.department>t.department?1:-1})),"desc"===t&&n.sort((function(e,t){return t.department>e.department?1:-1}));break;case"address":"asc"===t&&n.sort((function(e,t){return"".concat(e.address.city).concat(e.address.street)>"".concat(t.address.city).concat(t.address.street)?1:-1})),"desc"===t&&n.sort((function(e,t){return"".concat(t.address.city).concat(t.address.street)>"".concat(e.address.city).concat(e.address.street)?1:-1}));break;default:return Object(p.a)(n)}return r(n),null};return Object(P.jsx)(P.Fragment,{children:i.length&&Object(P.jsx)("div",{className:"table-panel",children:Object(P.jsxs)("table",{children:[Object(P.jsx)("thead",{children:Object(P.jsxs)("tr",{children:[Object(P.jsxs)("th",{children:["Name",Object(P.jsx)("button",{type:"button",onClick:function(){return d("name","asc")},"aria-label":"ascending",children:Object(P.jsx)(x.a,{icon:m.b})}),Object(P.jsx)("button",{type:"button",onClick:function(){return d("name","desc")},"aria-label":"descending",children:Object(P.jsx)(x.a,{icon:m.a})})]}),Object(P.jsxs)("th",{children:["Age",Object(P.jsx)("button",{type:"button",onClick:function(){return d("age","asc")},"aria-label":"ascending",children:Object(P.jsx)(x.a,{icon:m.b})}),Object(P.jsx)("button",{type:"button",onClick:function(){return d("age","desc")},"aria-label":"descending",children:Object(P.jsx)(x.a,{icon:m.a})})]}),Object(P.jsxs)("th",{children:["Gender",Object(P.jsx)("button",{type:"button",onClick:function(){return d("gender","asc")},"aria-label":"ascending",children:Object(P.jsx)(x.a,{icon:m.b})}),Object(P.jsx)("button",{type:"button",onClick:function(){return d("gender","desc")},"aria-label":"descending",children:Object(P.jsx)(x.a,{icon:m.a})})]}),Object(P.jsxs)("th",{children:["Department",Object(P.jsx)("button",{type:"button",onClick:function(){return d("department","asc")},"aria-label":"ascending",children:Object(P.jsx)(x.a,{icon:m.b})}),Object(P.jsx)("button",{type:"button",onClick:function(){return d("department","desc")},"aria-label":"descending",children:Object(P.jsx)(x.a,{icon:m.a})})]}),Object(P.jsxs)("th",{className:"hide",children:["Address",Object(P.jsx)("button",{type:"button",onClick:function(){return d("address","asc")},"aria-label":"ascending",children:Object(P.jsx)(x.a,{icon:m.b})}),Object(P.jsx)("button",{type:"button",onClick:function(){return d("address","desc")},"aria-label":"descending",children:Object(P.jsx)(x.a,{icon:m.a})})]})]})}),Object(P.jsx)("tbody",{children:n.length?n.map((function(e){return u(e)})):i.map((function(e){return u(e)}))})]})})})},N=function(e){var t=e.v,n=e.num,r=e.checkedItems,a=e.setCheckedItems,s=Object(c.useState)(!1),i=Object(h.a)(s,2),u=i[0],d=i[1],b=Object(o.b)();Object(c.useEffect)((function(){b(C())}),[b]);var l=Object(o.c)((function(e){return e.people})).people;Object(c.useEffect)((function(){b(I(l))}),[b]);var j=function(e){var t=e.target.value;d(!u),function(e){var t=Object(p.a)(l),n=[],c=Object(p.a)(r);if(u){var s=c.indexOf(e);c.splice(s,1)}else c.push(e);if(0===c.length)return a(c),void b(I(t));var i=[];t.map((function(e){return c.forEach((function(t){var c=Object.values(e);(c.includes(t)||c[5].city===t)&&(n.push(e),i.push(e.id))})),null}));var o=i.reduce((function(e,t){return e[t]?e[t]+=1:e[t]=1,e}),{}),d=[];Object.keys(o).forEach((function(e){o[e]>=c.length&&d.push(e)}));var j=[];t.map((function(e){return d.includes(e.id)&&j.push(e),null})),a(c),b(I(j))}(t)};return Object(P.jsxs)("label",{htmlFor:"checkbox".concat(t),className:"filter-variant",children:[Object(P.jsx)("input",{type:"checkbox",name:"checkbox-".concat(t.toLowerCase()),value:t,onChange:function(e){return j(e)},onKeyDown:function(e){return j(e)},checked:u?"checked":""}),t," ","(",n,")"]},t)};N.defaultProps={checkedItems:[]};var w=N,F=function(e){return function(t){t({type:"CHECK_ITEM",payload:{checkedItem:e}})}},L=function(){var e=Object(c.useState)([]),t=Object(h.a)(e,2),n=t[0],r=t[1],a=Object(o.b)();Object(c.useEffect)((function(){a(C())}),[a]),Object(c.useEffect)((function(){a(I())}),[a]);var s=Object(o.c)((function(e){return e.people})).displayPeople;Object(c.useEffect)((function(){a(F(n))}),[n]);var i=function(e,t){var c;return c="string"===typeof e[0][t]||"number"===typeof e[0][t]?e.reduce((function(e,n){var c=n[t];return c in e?e[c]+=1:e[c]=1,e}),{}):e.reduce((function(e,n){var c=n[t].city;return c in e?e[c]+=1:e[c]=1,e}),{}),Object.entries(c).map((function(e){var t=Object(h.a)(e,2),c=t[0],a=t[1];return Object(P.jsx)(w,{v:c,num:a,checkedItems:n,setCheckedItems:r},c)}))};return Object(P.jsx)(P.Fragment,{children:s.length&&Object(P.jsxs)("div",{className:"filter-panel",children:[Object(P.jsx)("h3",{children:"Filter"}),Object(P.jsxs)("div",{className:"filters",children:[Object(P.jsx)("div",{className:"filter-item",children:i(s,"gender")}),Object(P.jsx)("div",{className:"filter-item",children:i(s,"department")}),Object(P.jsx)("div",{className:"filter-item",children:i(s,"address")})]})]})})};var S=function(){return Object(P.jsxs)("div",{className:"App",children:[Object(P.jsx)(L,{}),Object(P.jsx)(_,{})]})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,65)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))},T=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,A=Object(i.e)(O,T(Object(i.a)(u.a)));s.a.render(Object(P.jsx)(r.a.StrictMode,{children:Object(P.jsx)(o.a,{store:A,children:Object(P.jsx)(S,{})})}),document.getElementById("root")),D()}},[[64,1,2]]]);
//# sourceMappingURL=main.bd3d1e84.chunk.js.map