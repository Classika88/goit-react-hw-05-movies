"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[186],{186:function(e,t,n){n.r(t);var r=n(5861),a=n(9439),i=n(7757),u=n.n(i),s=n(2791),c=n(7689),o=n(9555),p=n(559),f=n(3521),v=n(184);t.default=function(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),n=t[0],i=t[1],l=(0,s.useState)(!1),h=(0,a.Z)(l,2),d=h[0],g=h[1],m=(0,c.UO)().movieId,_=(0,s.useState)(""),x=(0,a.Z)(_,2),w=x[0],Z=x[1];return(0,s.useEffect)((function(){if(m){var e=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,g(!0),e.next=4,(0,o.fI)(t);case 4:n=e.sent,i(n),Z(""),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),Z(e.t0.message);case 12:return e.prev=12,g(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(t){return e.apply(this,arguments)}}();e(m)}}),[m]),(0,v.jsxs)(v.Fragment,{children:[0===n.length&&(0,v.jsx)(p.P_,{children:"We don't have reviews about this movie"}),!d&&!w&&n&&(0,v.jsx)("ul",{children:n.map((function(e){var t=e.id,n=e.author,r=e.content;return(0,v.jsxs)("li",{children:[(0,v.jsxs)(p.S3,{children:["Author: ",n]}),(0,v.jsx)(p.VY,{children:r})]},t)}))}),d&&!w&&(0,v.jsx)(f.a,{})]})}},559:function(e,t,n){n.d(t,{P_:function(){return p},S3:function(){return c},VY:function(){return o}});var r,a,i,u=n(168),s=n(6444),c=s.ZP.p(r||(r=(0,u.Z)(["\n  font-size: 24px;\n  font-weight: 500;\n"]))),o=s.ZP.p(a||(a=(0,u.Z)(["\n  font-size: 16px;\n  line-height: 1.5;\n"]))),p=s.ZP.p(i||(i=(0,u.Z)(["\n  font-size: 24px;\n  line-height: 1.5;\n  font-style: italic;\n  margin-bottom: 30px;\n"])))},9555:function(e,t,n){n.d(t,{Cp:function(){return c},fG:function(){return f},fI:function(){return v},gW:function(){return o},s9:function(){return p}});var r=n(5861),a=n(7757),i=n.n(a),u=n(1912);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="63801254b5c460a3de0676d2e1a253d2",c=function(){var e=(0,r.Z)(i().mark((function e(){var t,n,r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={api_key:s,language:"en-US"},e.next=3,u.Z.get("/trending/movie/day",{params:t});case 3:return n=e.sent,r=n.data,a=r.results.map((function(e){return{id:e.id,original_title:e.original_title}})),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r,a,c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={query:t,api_key:s},e.next=3,u.Z.get("/search/movie",{params:n});case 3:return r=e.sent,a=r.data,c=a.results.map((function(e){return{id:e.id,original_title:e.original_title}})),e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r,a,c,o,p,f,v,h;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={api_key:s,language:"en-US"},e.next=3,u.Z.get("/movie/".concat(t),{params:n});case 3:return r=e.sent,a=r.data,c=a.poster_path,o=a.original_title,p=a.release_date,f=a.vote_average,v=a.overview,h=a.genres,e.abrupt("return",{poster_path:l(c),original_title:o,release_date:p.slice(0,4),vote_average:f.toFixed(1),overview:v,genres:h.map((function(e){return e.name})).join(", ")});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r,a,c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={api_key:s,language:"en-US"},e.next=3,u.Z.get("/movie/".concat(t,"/credits"),{params:n});case 3:return r=e.sent,a=r.data,c=a.cast.map((function(e){var t=e.id,n=e.name,r=e.profile_path;return{id:t,name:n,profile_path:l(r)}})),e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r,a,c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={api_key:s,language:"en-US"},e.next=3,u.Z.get("/movie/".concat(t,"/reviews"),{params:n});case 3:return r=e.sent,a=r.data,c=a.results.map((function(e){return{id:e.id,author:e.author,content:e.content}})),e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(e){return"https://image.tmdb.org/t/p/w500"+e}}}]);
//# sourceMappingURL=186.ffadde5a.chunk.js.map