"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[779],{193:function(e,n,t){t.d(n,{AX:function(){return x},DF:function(){return h},MX:function(){return d},Zn:function(){return i},bs:function(){return o}});var r=t(861),a=t(757),c=t.n(a),u=t(388);function i(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(c().mark((function e(){var n,t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/trending/all/day?api_key=97c2f5e78e10e2e692a512d9b4d0312c",e.next=3,u.Z.get("https://api.themoviedb.org/3/trending/all/day?api_key=97c2f5e78e10e2e692a512d9b4d0312c");case 3:return n=e.sent,e.next=6,n.data;case 6:return t=e.sent,e.next=9,t.results;case 9:return r=e.sent,e.abrupt("return",r);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function e(n){var t,r,a,i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.themoviedb.org/3/search/movie?api_key=97c2f5e78e10e2e692a512d9b4d0312c&language=en-US&query=".concat(n,"&page=1&include_adult=false"),e.next=3,u.Z.get(t);case 3:return r=e.sent,e.next=6,r.data;case 6:return a=e.sent,e.next=9,a.results;case 9:return i=e.sent,e.abrupt("return",{filmsArr:i,data:a});case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function e(n){var t,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.themoviedb.org/3/movie/".concat(n,"?api_key=97c2f5e78e10e2e692a512d9b4d0312c&language=en-US"),e.next=3,u.Z.get(t);case 3:return r=e.sent,e.next=6,r.data;case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function e(n){var t,r,a,i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=97c2f5e78e10e2e692a512d9b4d0312c&language=en-US&page=1"),e.next=3,u.Z.get(t);case 3:return r=e.sent,e.next=6,r.data;case 6:return a=e.sent,e.next=9,a.results;case 9:return i=e.sent,e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function e(n){var t,r,a,i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=97c2f5e78e10e2e692a512d9b4d0312c&language=en-US"),e.next=3,u.Z.get(t);case 3:return r=e.sent,e.next=6,r.data;case 6:return a=e.sent,e.next=9,a.cast;case 9:return i=e.sent,e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},1:function(e,n,t){t.d(n,{E:function(){return s},o:function(){return o}});var r,a,c=t(168),u=t(731),i=t(444),s=i.ZP.div(r||(r=(0,c.Z)(["\n  width: 1440px;\n  margin: 0 auto 30px;\n  display: flex;\n"]))),o=(0,i.ZP)(u.OL)(a||(a=(0,c.Z)(["\n  box-sizing: border-box;\n  width: 150px;\n  height: 50px;\n  margin-right: 20px;\n  font-size: 20px;\n  padding: 10px 30px;\n  text-align: center;\n  background-color: #fff;\n  font-weight: 500;\n  line-height: 30px;\n  border: 1px solid black;\n  border-radius: 4px;\n  text-decoration: none;\n  color: black;\n  &:hover,\n  &:focus {\n    background-color: orange;\n    color: white;\n  }\n"])))},779:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var r,a=t(885),c=t(791),u=t(689),i=t(193),s=t(168),o=t(444).ZP.p(r||(r=(0,s.Z)(["\n  font-size: 20px;\n"]))),p=t(1),d=t(184),f=function(){var e=(0,c.useState)([]),n=(0,a.Z)(e,2),t=n[0],r=n[1],s=(0,u.UO)().movieId;return(0,c.useEffect)((function(){s&&(0,i.DF)(s).then(r).catch((function(e){return console.log(e.message)}))}),[s]),(0,d.jsx)(p.E,{children:t.length>0?(0,d.jsx)("ul",{children:t.map((function(e){var n=e.id,t=e.author,r=e.content;return(0,d.jsxs)("li",{children:[(0,d.jsxs)("h2",{children:["Author: ",t]}),(0,d.jsx)("p",{children:r})]},n)}))}):(0,d.jsx)(o,{children:"We don't have any reviews for this movie"})})}}}]);
//# sourceMappingURL=779.9efff74d.chunk.js.map