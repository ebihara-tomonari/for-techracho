(window.webpackJsonp=window.webpackJsonp||[]).push([[10,3],{356:function(t,e,r){var content=r(360);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(28).default)("9fa93e7e",content,!0,{sourceMap:!1})},359:function(t,e,r){"use strict";r(356)},360:function(t,e,r){var n=r(27)(!1);n.push([t.i,".more-link{display:none}",""]),t.exports=n},366:function(t,e,r){"use strict";r.r(e);var n={props:{post:{type:Object,required:!0,default:function(){}}}},l=(r(359),r(79)),c=r(103),o=r.n(c),v=r(379),d=r(355),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"pa-2 ma-2",attrs:{outlined:"",tile:""}},[r("NuxtLink",{attrs:{to:"/articles/"+t.post.id}},[r("v-card-title",[t._v(t._s(t.post.title.rendered))])],1),t._v(" "),r("v-card-text",{staticClass:"pt-0"},[r("div",{staticClass:"text--primary",domProps:{innerHTML:t._s(t.post.excerpt.rendered)}})])],1)}),[],!1,null,null,null);e.default=component.exports;o()(component,{VCard:v.a,VCardText:d.a,VCardTitle:d.b})},401:function(t,e,r){"use strict";r.r(e);var n=r(21),l=(r(87),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"localhost",e.next=3,t.$axios.get("http://".concat("localhost","/wp-json/wp/v2/posts?_fields=id,slug,title,excerpt&per_page=6")).then((function(t){r=t.data}));case 3:return e.abrupt("return",{posts:r});case 4:case"end":return e.stop()}}),e)})))()}}),c=r(79),o=r(103),v=r.n(o),d=r(343),f=r(402),h=r(407),_=r(371),C=r(380),x=r(353),w=r(58),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-container",{staticClass:"px-0",attrs:{fluid:""}},[r("v-carousel",[r("v-carousel-item",[r("v-sheet",{attrs:{height:"100%",tile:""}},[r("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[r("div",{staticClass:"text-h2"},[t._v("\n              Slide 1\n            ")])])],1)],1),t._v(" "),r("v-carousel-item",[r("v-sheet",{attrs:{height:"100%",tile:""}},[r("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[r("div",{staticClass:"text-h2"},[t._v("\n              Slide 2\n            ")])])],1)],1),t._v(" "),r("v-carousel-item",[r("v-sheet",{attrs:{height:"100%",tile:""}},[r("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[r("div",{staticClass:"text-h2"},[t._v("\n              Slide 3\n            ")])])],1)],1)],1)],1),t._v(" "),r("v-container",[r("h2",[t._v("New Articles")]),t._v(" "),r("v-row",{attrs:{"no-gutters":""}},t._l(t.posts,(function(t){return r("v-col",{key:t.id,attrs:{cols:"12",sm:"4"}},[r("ArticlesCard",{attrs:{post:t}})],1)})),1)],1),t._v(" "),r("v-row",{staticClass:"my-5",attrs:{justify:"center"}},[r("v-btn",{attrs:{to:"/archives/1",nuxt:""}},[t._v("\n      all article archives\n    ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{ArticlesCard:r(366).default}),v()(component,{VBtn:d.a,VCarousel:f.a,VCarouselItem:h.a,VCol:_.a,VContainer:C.a,VRow:x.a,VSheet:w.a})}}]);