(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],{12:function(e,n,a){},14:function(e,n,a){},15:function(e,n,a){"use strict";a.r(n);var i=a(1),t=a.n(i),c=a(7),s=a.n(c),r=(a(12),a(6)),g=a(4),o=a(0),m=function(e){var n=e.score;return Object(o.jsxs)("nav",{children:[Object(o.jsx)("h1",{className:"header",children:"Memory-Game"}),Object(o.jsxs)("p",{children:["Score: ",n]})]})},l=function(e){var n=e.ele,a=e.hit;return Object(o.jsxs)("div",{className:"card",onClick:function(e){return function(e,n){e.preventDefault(),console.log(n.id),a(n.id)}(e,n)},children:[Object(o.jsx)("img",{src:n.img}),Object(o.jsx)("p",{children:n.name})]})},p=function(e){var n=e.array,a=e.hit;return n.map((function(e){return Object(o.jsx)(l,{ele:e,hit:a})}))};a(14);var d=function(){var e=Object(i.useState)([{name:"abelia grandiflora",img:"https://www.kapsenbergdesign.com/garden/images/xsmall/pic637.jpg",id:1},{name:"Abelmoschus manihot",img:"https://www.kapsenbergdesign.com/garden/images/xsmall/pic1098.jpg",id:2},{name:"Abutilon pictum",img:"https://www.kapsenbergdesign.com/garden/images/xsmall/pic779.jpg",id:3},{name:"Acca sellowiana",img:"https://www.kapsenbergdesign.com/garden/images/xsmall/pic755.jpg",id:4},{name:"Acer palmatum",img:"https://www.kapsenbergdesign.com/garden/images/xsmall/pic676.jpg",id:5},{name:"Achillea millefolium",img:"https://www.kapsenbergdesign.com/garden/images/xsmall/pic177.jpg",id:6},{name:"Agave ocahui",img:"https://www.kapsenbergdesign.com/garden/images/xsmall/pic1019.jpg",id:7},{name:"Agave Americana",img:"https://www.kapsenbergdesign.com/garden/images/xsmall/pic6.jpg",id:8},{name:"Agapanthus spec.",img:"https://www.kapsenbergdesign.com/garden/images/xsmall/pic72.jpg",id:9},{name:"Aesculus californica",img:"https://www.kapsenbergdesign.com/garden/images/xsmall/pic901.jpg",id:10},{name:"Aster dumosus 'Sapphire'",img:"https://www.kapsenbergdesign.com/garden/images/xsmall/pic1085.jpg",id:11},{name:"Babiana curbiscapa",img:"https://www.kapsenbergdesign.com/garden/images/xsmall/pic893.jpg",id:12}]),n=Object(g.a)(e,2),a=n[0],t=n[1],c=Object(i.useState)(0),s=Object(g.a)(c,2),l=s[0],d=s[1],u=Object(i.useState)([]),w=Object(g.a)(u,2),j=w[0],b=w[1];return Object(i.useEffect)((function(){}),[a]),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(m,{score:l}),Object(o.jsx)("div",{className:"display",children:Object(o.jsx)(p,{array:a,hit:function(e){var n=j.filter((function(n){return n==e}));console.log(j),0!=n.length?(window.alert("Sorry!! You lost \nScore ".concat(l)),window.location.reload(!1)):(b([].concat(Object(r.a)(j),[e])),d((function(e){return e+=1})),j.length>=11&&(window.alert("Congratulations you won"),window.location.reload(!1)),console.log(j),t((function(e){for(var n=12,a=[],i=function(){var i=e[Math.floor(12*Math.random())];if(0!=a.filter((function(e){return e==i})).length)return"continue";a=[].concat(Object(r.a)(a),[i]),n-=1};0!=n;)i();return a})))}})})]})},u=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(n){var a=n.getCLS,i=n.getFID,t=n.getFCP,c=n.getLCP,s=n.getTTFB;a(e),i(e),t(e),c(e),s(e)}))};s.a.render(Object(o.jsx)(t.a.StrictMode,{children:Object(o.jsx)(d,{})}),document.getElementById("root")),u()}},[[15,1,2]]]);
//# sourceMappingURL=main.25f9a315.chunk.js.map