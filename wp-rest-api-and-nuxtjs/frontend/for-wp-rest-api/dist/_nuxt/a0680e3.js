(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{395:function(t,e,n){"use strict";n.r(e);var r=n(25),o=(n(95),n(26),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"localhost",e.next=3,t.$axios.$get("http://".concat("localhost","/wp-json/wp/v2/posts/").concat(t.params.id));case 3:return n=e.sent,e.abrupt("return",{post:n});case 5:case"end":return e.stop()}}),e)})))()}}),c=n(85),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("this is article detail page.\n  "),n("h2",[t._v(t._s(t.post.title.rendered))]),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.post.content.rendered)}})])}),[],!1,null,null,null);e.default=component.exports}}]);