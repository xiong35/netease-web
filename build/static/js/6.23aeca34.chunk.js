(this["webpackJsonpnetease-web"]=this["webpackJsonpnetease-web"]||[]).push([[6],{265:function(e,t,n){"use strict";function a(e){return"string"===typeof e&&(e=parseInt(e)),isNaN(e)?"":e<1e4?e.toString():e<1e8?(Math.round(e/1e3)/10).toString()+"\u4e07":(Math.round(e/1e7)/10).toString()+"\u4ebf"}n.d(t,"a",(function(){return a}))},267:function(e,t,n){"use strict";function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY/mm/dd HH:MM",n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];"string"===typeof e&&(e=Number(e.length<13?e+"000":e)),"number"===typeof e&&(e=new Date(e<1e12?1e3*e:e));var a=new Date,c=new Date;if(c.setDate(a.getDate()-1),!n){var r=(a.getTime()-e.getTime())/6e4;if(r<1)return"\u521a\u521a";if(r<59)return"".concat(Math.round(r)," \u5206\u949f\u524d");t=a.getFullYear()===e.getFullYear()?a.toLocaleDateString()===e.toLocaleDateString()?"\u4eca\u5929 HH:MM":c.toLocaleDateString()===e.toLocaleDateString()?"\u6628\u5929 HH:MM":"mm/dd HH:MM":"YYYY/mm/dd HH:MM"}var i={"Y+":e.getFullYear().toString(),"m+":(e.getMonth()+1).toString(),"d+":e.getDate().toString(),"H+":e.getHours().toString(),"M+":e.getMinutes().toString(),"S+":e.getSeconds().toString()};return Object.keys(i).reduce((function(e,t){return e.replace(new RegExp("(".concat(t,")"),"g"),(function(e){return i[t].padStart(e.length,"0")}))}),t)}n.d(t,"a",(function(){return a}))},268:function(e,t,n){},269:function(e,t,n){"use strict";n(270);var a=n(24),c=n(267),r=n(1);t.a=function(e){return Object(r.jsxs)("div",{className:"album_detail-body-comments-item",children:[Object(r.jsx)(a.a,{src:e.data.user.avatarUrl,alt:e.data.user.nickname,className:"album_detail-body-comments-item-avatar",onClick:function(){window.location.href="/user-detail?uid=".concat(e.data.user.userId)}}),Object(r.jsxs)("div",{className:"album_detail-body-comments-item-body",children:[Object(r.jsxs)("div",{className:"album_detail-body-comments-item-body-upper",children:[Object(r.jsx)("span",{className:"album_detail-body-comments-item-body-upper-nick_name",onClick:function(){window.location.href="/user-detail?uid=".concat(e.data.user.userId)},children:e.data.user.nickname+":"}),Object(r.jsx)("span",{className:"album_detail-body-comments-item-body-upper-content",children:e.data.content})]}),0!==e.data.beReplied.length?Object(r.jsxs)("div",{className:"album_detail-body-comments-item-body-replied",children:[Object(r.jsxs)("span",{className:"album_detail-body-comments-item-body-replied-name",onClick:function(){window.location.href="/user-detail?uid=".concat(e.data.beReplied[0].user.userId)},children:["@",e.data.beReplied[0].user.nickname,"\uff1a"]}),Object(r.jsx)("span",{className:"album_detail-body-comments-item-body-replied-content",children:e.data.beReplied[0].content})]}):"",Object(r.jsx)("div",{className:"album_detail-body-comments-item-body-date",children:Object(c.a)(e.data.time)})]})]})}},270:function(e,t,n){},271:function(e,t,n){"use strict";n(268);var a=n(50);var c=n(1);t.a=function(e){var t,n,r=e.page,i=e.setPage,s=e.totalPage,o=(t=s,n=r,(t=Math.ceil(t))<11?Array.from({length:t},(function(e,t){return t+1})):n<=8?[1,2,3,4,5,6,7,8,9,"...",t]:n>=t-8?[1,"...",t-9,t-8,t-7,t-6,t-5,t-4,t-3,t-2,t-1,t]:[1,"..."].concat(Object(a.a)(Array.from({length:7},(function(e,t){return n-3+t}))),["...",t]));return s<2?null:Object(c.jsxs)("div",{className:"c-pager",children:[Object(c.jsx)("div",{className:"c-pager-prev c-pager-item ".concat(1===r?"disabled":""),onClick:function(){return i(r-1)},children:"<"}),o.map((function(e,t){return Object(c.jsx)("div",{className:"c-pager-item ".concat(e===r?"active":""),onClick:function(){return"..."!==e&&i(e)},children:e},t)})),Object(c.jsx)("div",{className:"c-pager-next c-pager-item ".concat(r===Math.ceil(s)?"disabled":""),onClick:function(){return i(r+1)},children:">"})]})}},296:function(e,t,n){},297:function(e,t,n){},298:function(e,t,n){},312:function(e,t,n){"use strict";n.r(t);n(296);var a=n(17),c=n(24),r=n(20),i=n(26),s=(n(297),n(50)),o=n(6),u=n(0);function l(){var e=Object(u.useState)(!1),t=Object(o.a)(e,2),n=(t[0],t[1]);return{forceUpdate:function(){n((function(e){return!e}))}}}var d=n(1);var m=function(e){var t=e.lyric,n=i.a.getCurrentTime(),a=function(e){var t=Object(u.useState)(0),n=Object(o.a)(t,2),a=n[0],c=n[1],r=l().forceUpdate;return Object(u.useEffect)((function(){var t=setInterval((function(){var t=i.a.getCurrentTime(),n=Object(s.a)(e).reverse().find((function(e){return e.startSec<=t}));r(),n&&n.ref&&c(-n.ref.offsetTop)}),500);return function(){return clearInterval(t)}}),[e]),{marginTop:a}}(t),c=a.marginTop;return Object(d.jsx)("div",{className:"lyric",children:Object(d.jsxs)("div",{className:"lyric-scroll-wrap",children:[Object(d.jsx)("div",{className:"lyric-mask top"}),Object(d.jsx)("div",{className:"lyric-warp",style:{marginTop:c},children:t.map((function(e,t){if(!e.content)return null;var a=e.startSec<=n?"section":"div";return Object(d.jsx)(a,{className:"lyric-item",ref:function(t){return e.ref=t},onClick:function(){return i.a.currentTime=e.startSec},children:e.content},100*e.startSec+t)}))}),Object(d.jsx)("div",{className:"lyric-mask bottom"})]})})},b=(n(298),n(271)),j=n(265),f=n(269),p=n(3),g=n.n(p),O=n(5),v=n(12);function h(e){return x.apply(this,arguments)}function x(){return(x=Object(O.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.a)({url:"/comment/music?id=".concat(t.musicID,"&limit=").concat(14,"&offset=").concat(14*(t.page-1)),method:"GET"});case 2:if((n=e.sent)&&"number"===typeof n.total){e.next=5;break}return e.abrupt("return",null);case 5:return e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y=function(e){var t=function(e){var t=Object(u.useState)(null),n=Object(o.a)(t,2),a=n[0],c=n[1],r=Object(u.useState)(null),i=Object(o.a)(r,2),s=i[0],l=i[1],d=Object(u.useState)(1),m=Object(o.a)(d,2),b=m[0],j=m[1],f=Object(u.useState)(0),p=Object(o.a)(f,2),g=p[0],O=p[1];return Object(u.useEffect)((function(){h({page:b,musicID:e}).then((function(e){e&&(l(e.comments),O(e.total),c(e.hotComments))}))}),[b]),Object(u.useEffect)((function(){h({page:1,musicID:e}).then((function(e){e&&(c(e.hotComments),l(e.comments),O(e.total),j(1))}))}),[e]),{hotComments:a,comments:s,setPage:j,total:g,page:b}}(e.musicID),n=t.setPage,a=t.comments,c=t.hotComments,r=t.page,i=t.total,s=Object(u.useRef)(null);return Object(d.jsxs)("div",{className:"music_comments",children:[c&&c.length&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h3",{children:"\u70ed\u8bc4"}),c.map((function(e){return Object(d.jsx)(f.a,{data:e},e.commentId)}))]}),a&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("h3",{style:{marginTop:"-60px",paddingTop:"80px"},ref:s,children:["\u6b4c\u66f2\u8bc4\u8bba(",Object(j.a)(i),")"]}),a.map((function(e){return Object(d.jsx)(f.a,{data:e},e.commentId)}))]}),Object(d.jsx)(b.a,{page:r,setPage:function(e){n(e),s.current&&s.current.scrollIntoView()},totalPage:i/14})]})};var N=Object(a.a)((function(){var e=r.a.curMusic,t=function(){var e=l().forceUpdate;return Object(u.useEffect)((function(){var t=setInterval(e,500);return function(){return clearInterval(t)}}),[]),{isPlaying:!(i.a.audioRef&&i.a.audioRef.paused)}}().isPlaying;return Object(d.jsxs)("div",{className:"music_detail",children:[Object(d.jsxs)("div",{className:"music_detail-title",children:[Object(d.jsx)("div",{className:"music_detail-title-music_name",children:e.name}),Object(d.jsx)("div",{className:"music_detail-title-artist_name",children:e.ar.map((function(e){return e.name})).join("/")})]}),Object(d.jsxs)("div",{className:"music_detail-song",children:[Object(d.jsx)("div",{className:"music_detail-song-disc",children:Object(d.jsx)("div",{className:"music_detail-song-disc-cover ".concat(t?"":"paused"),children:Object(d.jsx)(c.a,{src:e.al.picUrl,className:"music_detail-song-disc-cover-img",alt:e.al.name})})}),Object(d.jsx)(m,{lyric:i.a.lyric})]}),Object(d.jsx)(y,{musicID:e.id})]})}));t.default=N}}]);
//# sourceMappingURL=6.23aeca34.chunk.js.map