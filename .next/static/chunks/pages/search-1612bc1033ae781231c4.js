_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{"19J2":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search",function(){return r("eOhz")}])},eOhz:function(e,t,r){"use strict";r.r(t);var a=r("o0o1"),n=r.n(a),c=r("HaE+"),s=r("nKUr"),i=r("rQ2n"),l=r("wIIz"),o=r("upED"),u=r("nOHt"),m=r("qq7r"),d=r("vDqi"),j=r.n(d),b=function(e){var t=Object(u.useRouter)();if(e.allres)var r=e.allres.results;return Object(s.jsxs)(i.a,{title:"Search Results",children:[Object(s.jsx)(o.a,{}),r&&Object(s.jsx)(l.a,{results:r,route:"characters"}),!r&&Object(s.jsxs)("h2",{className:"p-5",children:["Not results with: ",Object(s.jsx)("b",{children:t.query.name})]})]})};b.getInitialProps=function(){var e=Object(c.a)(n.a.mark((function e(t){var r,a,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query.name,e.prev=1,e.next=4,j.a.get("".concat(m.a.url,"character/?name=").concat(r));case 4:return a=e.sent,c=a.data,e.abrupt("return",{allres:c});case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",{error:e.t0});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),t.default=b},upED:function(e,t,r){"use strict";var a=r("nKUr"),n=r("q1tI"),c=r("YFqc"),s=r.n(c);t.a=function(){var e=Object(n.useState)(""),t=e[0],r=e[1];return Object(a.jsx)("div",{className:"contentCenter",children:Object(a.jsx)("form",{className:"form-inline text-center",children:Object(a.jsxs)("div",{className:"align-items-center",children:[Object(a.jsx)("input",{type:"text",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",value:t,onChange:function(e){return r(e.target.value)},placeholder:"Search a character by name"}),Object(a.jsx)(s.a,{href:"/search?name=".concat(t),children:Object(a.jsx)("button",{className:"btn btn-primary m-1",children:"Search"})})]})})})}},wIIz:function(e,t,r){"use strict";var a=r("nKUr"),n=r("nOHt"),c=r.n(n);t.a=function(e){return Object(a.jsx)("div",{className:"contentCards",style:{textAlign:"center"},children:e.results.map((function(t,r){return Object(a.jsxs)("div",{className:"card",style:{width:"300px",margin:"15px"},children:[t.image&&Object(a.jsx)("img",{src:t.image,className:"card-img-top",alt:t.name}),!t.image&&"locations"==e.route&&Object(a.jsx)("img",{src:"https://res.cloudinary.com/robcg1102/image/upload/v1604476580/maq_img/location_oy9vzf.webp",alt:"genericImage"}),!t.image&&"episodes"==e.route&&Object(a.jsx)("img",{src:"https://res.cloudinary.com/robcg1102/image/upload/v1604477261/maq_img/s-l300_sjqhqb.png",alt:"genericImage"}),Object(a.jsxs)("div",{className:"card-body myStyleCard",children:[Object(a.jsxs)("h5",{className:"card-title",children:["Name: ",t.name]}),Object(a.jsx)("a",{className:"btn btn-primary",onClick:function(r){return c.a.push("/".concat(e.route,"/[id]"),"/".concat(e.route,"/").concat(t.id))},children:"More Info..."})]})]},r)}))})}}},[["19J2",0,2,1,3,4]]]);