(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var s,o=n(4),c=n.n(o),r=n(5),i=n(6),a=n(9),l=n(7),u=n(8),b=n(1),h=n.n(b),d=(n(14),n(15),n(2)),j=n.n(d),p=n(19),N=n(0),O=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];function f(t,e){var n=e.sortType,o=e.isReversed,c=Object(u.a)(t);return console.log(n,o),n===s.LENGTH?c.sort((function(t,e){return t.length-e.length})):n===s.ALPABET&&c.sort((function(t,e){return t.localeCompare(e)})),o&&c.reverse(),c}!function(t){t[t.NONE=0]="NONE",t[t.ALPABET=1]="ALPABET",t[t.LENGTH=2]="LENGTH"}(s||(s={}));var y=function(t){Object(a.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(r.a)(this,n);for(var s=arguments.length,o=new Array(s),c=0;c<s;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={isReversed:!1,sortType:0},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.isReversed,o=e.sortType;return Object(N.jsxs)("div",{className:"section content",children:[Object(N.jsxs)("div",{className:"buttons",children:[Object(N.jsx)("button",{type:"button",className:j()("button is-info",{"is-light":o!==s.ALPABET}),onClick:function(){t.setState({sortType:s.ALPABET})},children:"Sort alphabetically"}),Object(N.jsx)("button",{type:"button",className:j()("button is-success",{"is-light":o!==s.LENGTH}),onClick:function(){t.setState({sortType:s.LENGTH})},children:"Sort by length"}),Object(N.jsx)("button",{type:"button",className:j()("button is-warning",{"is-light":!n}),onClick:function(){t.setState({isReversed:!n})},children:"Reverse"}),(o!==s.NONE||n)&&Object(N.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){t.setState({sortType:s.NONE,isReversed:!1})},children:"Reset"})]}),Object(N.jsx)("ul",{children:f(O,this.state).map((function(t){return Object(N.jsx)("li",{"data-cy":"Good",children:t},Object(p.a)())}))})]})}}]),n}(h.a.Component);c.a.render(Object(N.jsx)(y,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.4ffc16f0.chunk.js.map