"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[533],{193:function(n,e,t){t.d(e,{AX:function(){return x},DF:function(){return f},MX:function(){return d},Zn:function(){return s},bs:function(){return u}});var r=t(861),i=t(757),a=t.n(i),o=t(388);function s(){return c.apply(this,arguments)}function c(){return(c=(0,r.Z)(a().mark((function n(){var e,t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"https://api.themoviedb.org/3/trending/all/day?api_key=97c2f5e78e10e2e692a512d9b4d0312c",n.next=3,o.Z.get("https://api.themoviedb.org/3/trending/all/day?api_key=97c2f5e78e10e2e692a512d9b4d0312c");case 3:return e=n.sent,n.next=6,e.data;case 6:return t=n.sent,n.next=9,t.results;case 9:return r=n.sent,n.abrupt("return",r);case 11:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function u(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function n(e){var t,r,i,s;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="https://api.themoviedb.org/3/search/movie?api_key=97c2f5e78e10e2e692a512d9b4d0312c&language=en-US&query=".concat(e,"&page=1&include_adult=false"),n.next=3,o.Z.get(t);case 3:return r=n.sent,n.next=6,r.data;case 6:return i=n.sent,n.next=9,i.results;case 9:return s=n.sent,n.abrupt("return",{filmsArr:s,data:i});case 11:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function n(e){var t,r,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="https://api.themoviedb.org/3/movie/".concat(e,"?api_key=97c2f5e78e10e2e692a512d9b4d0312c&language=en-US"),n.next=3,o.Z.get(t);case 3:return r=n.sent,n.next=6,r.data;case 6:return i=n.sent,n.abrupt("return",i);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function n(e){var t,r,i,s;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=97c2f5e78e10e2e692a512d9b4d0312c&language=en-US&page=1"),n.next=3,o.Z.get(t);case 3:return r=n.sent,n.next=6,r.data;case 6:return i=n.sent,n.next=9,i.results;case 9:return s=n.sent,n.abrupt("return",s);case 11:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function n(e){var t,r,i,s;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=97c2f5e78e10e2e692a512d9b4d0312c&language=en-US"),n.next=3,o.Z.get(t);case 3:return r=n.sent,n.next=6,r.data;case 6:return i=n.sent,n.next=9,i.cast;case 9:return s=n.sent,n.abrupt("return",s);case 11:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},533:function(n,e,t){t.r(e),t.d(e,{default:function(){return b}});var r,i,a=t(885),o=t(791),s=t(689),c=t(193),u=t(1),p=t(168),d=t(444),l=d.ZP.div(r||(r=(0,p.Z)(["\n  margin-right: 50px;\n"]))),f=d.ZP.div(i||(i=(0,p.Z)(["\n  font-size: 18px;\n"]))),h=t(563),x=t(184),v=function(n){var e=n.poster_path,t=n.original_title,r=n.release_date,i=n.vote_average,a=n.overview,o=n.genres,s="https://image.tmdb.org/t/p/w500/".concat(e);return(0,x.jsxs)(u.E,{children:[(0,x.jsx)(l,{children:(0,x.jsx)("img",{src:e?s:h,alt:t,width:"360"})}),(0,x.jsxs)(f,{children:[(0,x.jsxs)("h2",{children:[t," (",r.slice(0,4),")"]}),(0,x.jsxs)("p",{children:["User Score: ",10*i.toFixed(1),"%"]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("h3",{children:"Overview"}),(0,x.jsx)("p",{children:a})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("h3",{children:"Genres"}),(0,x.jsx)("p",{children:o.map((function(n){return n.name+" "}))})]})]})]})},g=t(678),b=function(){var n,e,t,r,i,p,d=(0,o.useState)({}),l=(0,a.Z)(d,2),f=l[0],h=l[1],b=(0,s.UO)().movieId,m=(0,s.TH)();(0,o.useEffect)((function(){b&&(0,c.MX)(b).then((function(n){var e=n.id,t=n.poster_path,r=n.original_title,i=n.release_date,a=n.vote_average,o=n.overview,s=n.genres;h({id:e,poster_path:t,original_title:r,release_date:i,vote_average:a,overview:o,genres:s})})).catch((function(n){return console.log(n.message)}))}),[b]);var w=f.poster_path,Z=f.original_title,_=f.release_date,k=f.vote_average,y=f.overview,j=f.genres;return(0,x.jsxs)(g.W2,{children:[(0,x.jsx)(u.E,{children:(0,x.jsx)(u.o,{to:null!==(n=null===(e=m.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/",children:"Go back"})}),f.id&&(0,x.jsx)(v,{poster_path:w,original_title:null!==Z&&void 0!==Z?Z:"none",release_date:_,vote_average:null!==k&&void 0!==k?k:0,overview:null!==y&&void 0!==y?y:"none",genres:null!==j&&void 0!==j?j:[{id:1,name:"none"}]}),(0,x.jsxs)(u.E,{children:[(0,x.jsx)(u.o,{to:"cast",state:{from:null!==(t=null===(r=m.state)||void 0===r?void 0:r.from)&&void 0!==t?t:"/"},children:"Cast"}),(0,x.jsx)(u.o,{to:"reviews",state:{from:null!==(i=null===(p=m.state)||void 0===p?void 0:p.from)&&void 0!==i?i:"/"},children:"Reviews"})]}),(0,x.jsx)(o.Suspense,{fallback:(0,x.jsx)("div",{children:"Loading..."}),children:(0,x.jsx)(s.j3,{})})]})}},1:function(n,e,t){t.d(e,{E:function(){return c},o:function(){return u}});var r,i,a=t(168),o=t(731),s=t(444),c=s.ZP.div(r||(r=(0,a.Z)(["\n  width: 1440px;\n  margin: 0 auto 30px;\n  display: flex;\n"]))),u=(0,s.ZP)(o.OL)(i||(i=(0,a.Z)(["\n  box-sizing: border-box;\n  width: 150px;\n  height: 50px;\n  margin-right: 20px;\n  font-size: 20px;\n  padding: 10px 30px;\n  text-align: center;\n  background-color: #fff;\n  font-weight: 500;\n  line-height: 30px;\n  border: 1px solid black;\n  border-radius: 4px;\n  text-decoration: none;\n  color: black;\n  &:hover,\n  &:focus {\n    background-color: orange;\n    color: white;\n  }\n"])))},678:function(n,e,t){t.d(e,{I_:function(){return v},Mg:function(){return h},W2:function(){return d},aV:function(){return l},l0:function(){return f},yt:function(){return x}});var r,i,a,o,s,c,u=t(168),p=t(444),d=p.ZP.div(r||(r=(0,u.Z)(["\n  padding-top: 120px;\n  width: 1440px;\n  margin: 0 auto;\n"]))),l=p.ZP.ul(i||(i=(0,u.Z)(["\n  padding: 30px 0 60px;\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n  flex-wrap: wrap;\n  margin: 0;\n"]))),f=p.ZP.form(a||(a=(0,u.Z)(["\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n  border: 1px solid black;\n"]))),h=p.ZP.button(o||(o=(0,u.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    opacity: 1;\n  }\n"]))),x=p.ZP.input(s||(s=(0,u.Z)(["\n  display: inline-block;\n  width: 550px;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),v=p.ZP.span(c||(c=(0,u.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"])))},563:function(n,e,t){n.exports=t.p+"static/media/noPoster.1e8273014f51215e1592.png"}}]);
//# sourceMappingURL=533.6949fd0d.chunk.js.map