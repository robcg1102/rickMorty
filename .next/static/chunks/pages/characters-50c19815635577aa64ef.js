_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{KzMt:function(e,t,a){"use strict";var r=a("nKUr"),c=a("YFqc"),n=a.n(c);t.a=function(e){var t=e.next,a=e.prev,c=e.route;if(t)var s=t.split("="),i=s[s.length-1],l="/".concat(c,"?page=").concat(i);if(a)var o=a.split("="),u=o[o.length-1],m="/".concat(c,"?page=").concat(u);return Object(r.jsx)("div",{className:"contentCenter",children:Object(r.jsx)("nav",{"aria-label":"Page navigation example",children:Object(r.jsxs)("ul",{className:"pagination",children:[m&&Object(r.jsx)(n.a,{href:m,children:Object(r.jsx)("li",{className:"page-item",children:Object(r.jsx)("a",{className:"page-link",children:"< Previous"})})}),l&&Object(r.jsx)(n.a,{href:l,children:Object(r.jsx)("li",{className:"page-item",children:Object(r.jsx)("a",{className:"page-link",children:"Next >"})})})]})})})}},"muP+":function(e,t,a){"use strict";a.r(t);var r=a("o0o1"),c=a.n(r),n=a("HaE+"),s=a("nKUr"),i=a("rQ2n"),l=a("wIIz"),o=a("KzMt"),u=a("upED"),m=a("qq7r"),j=a("vDqi"),d=a.n(j),p=function(e){var t=e.allres,a=t.info,r=t.results;return Object(s.jsxs)(i.a,{title:"Characters",children:[Object(s.jsx)(u.a,{}),Object(s.jsx)(l.a,{results:r,route:"characters"}),Object(s.jsx)(o.a,{next:a.next,prev:a.prev,route:"characters"})]})};p.getInitialProps=function(){var e=Object(n.a)(c.a.mark((function e(t){var a,r,n,s,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.query.page,e.prev=1,!t.query.page){e.next=10;break}return e.next=5,d.a.get("".concat(m.a.url,"character?page=").concat(a));case 5:return r=e.sent,n=r.data,e.abrupt("return",{allres:n});case 10:return e.next=12,d.a.get("".concat(m.a.url,"character"));case 12:return s=e.sent,i=s.data,e.abrupt("return",{allres:i});case 15:e.next=20;break;case 17:return e.prev=17,e.t0=e.catch(1),e.abrupt("return",{error:e.t0});case 20:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t){return e.apply(this,arguments)}}(),t.default=p},upED:function(e,t,a){"use strict";var r=a("nKUr"),c=a("q1tI"),n=a("YFqc"),s=a.n(n);t.a=function(){var e=Object(c.useState)(""),t=e[0],a=e[1];return Object(r.jsx)("div",{className:"contentCenter",children:Object(r.jsx)("form",{className:"form-inline text-center",children:Object(r.jsxs)("div",{className:"align-items-center",children:[Object(r.jsx)("input",{type:"text",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",value:t,onChange:function(e){return a(e.target.value)},placeholder:"Search a character by name"}),Object(r.jsx)(s.a,{href:"/search?name=".concat(t),children:Object(r.jsx)("button",{className:"btn btn-primary m-1",children:"Search"})})]})})})}},wIIz:function(e,t,a){"use strict";var r=a("nKUr"),c=a("nOHt"),n=a.n(c);t.a=function(e){return Object(r.jsx)("div",{className:"contentCards",style:{textAlign:"center"},children:e.results.map((function(t,a){return Object(r.jsxs)("div",{className:"card",style:{width:"300px",margin:"15px"},children:[t.image&&Object(r.jsx)("img",{src:t.image,className:"card-img-top",alt:t.name}),!t.image&&"locations"==e.route&&Object(r.jsx)("img",{src:"https://res.cloudinary.com/robcg1102/image/upload/v1604476580/maq_img/location_oy9vzf.webp",alt:"genericImage"}),!t.image&&"episodes"==e.route&&Object(r.jsx)("img",{src:"https://res.cloudinary.com/robcg1102/image/upload/v1604477261/maq_img/s-l300_sjqhqb.png",alt:"genericImage"}),Object(r.jsxs)("div",{className:"card-body myStyleCard",children:[Object(r.jsxs)("h5",{className:"card-title",children:["Name: ",t.name]}),Object(r.jsx)("a",{className:"btn btn-primary",onClick:function(a){return n.a.push("/".concat(e.route,"/[id]"),"/".concat(e.route,"/").concat(t.id))},children:"More Info..."})]})]},a)}))})}},xU2d:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/characters",function(){return a("muP+")}])}},[["xU2d",0,2,1,3,4]]]);