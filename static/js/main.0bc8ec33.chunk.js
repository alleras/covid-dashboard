(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{26:function(e,t,a){e.exports={App:"App_App__1pkG7"}},27:function(e,t,a){e.exports={infoDashboard:"InfoDashboard_infoDashboard__gB9Ar",dashItem:"InfoDashboard_dashItem__CJlrz"}},3:function(e,t,a){e.exports={graphGroup:"Dash_graphGroup__pNx9X",graph:"Dash_graph__orXhK",axis:"Dash_axis__2QDWx","y-axis":"Dash_y-axis__2EAs1",grid:"Dash_grid__2Fslt",tick:"Dash_tick__hTryi",graphContainer:"Dash_graphContainer__3RES6",top:"Dash_top__3UCPN",low:"Dash_low__FsZTN",data:"Dash_data__V2IRp",medium:"Dash_medium__2Mpxf",high:"Dash_high__1DYu2",critical:"Dash_critical__TuLUd",severe:"Dash_severe__C2aNL",bottom:"Dash_bottom__13aGn"}},4:function(e,t,a){e.exports={infoItem:"InfoItem_infoItem__2peAf",icon:"InfoItem_icon__39J6D",text:"InfoItem_text__3dODb",title:"InfoItem_title__3oPMH",description:"InfoItem_description__1ypuv",amount:"InfoItem_amount__3RQmG"}},73:function(e,t,a){e.exports=a(81)},78:function(e,t,a){},79:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(25),o=a.n(i),c=(a(78),a(79),a(5)),s=a.n(c),l=a(7),u=a(1),m=a(26),d=a.n(m);var v=function(e){var t=e.handler,a=e.mock,r="AIzaSyD7AUSyC4Ywj6PETcxb3VoRJuCvyJabJaQ",i="https://maps.googleapis.com/maps/api/geocode/json",o={coords:{latitude:40.714224,longitude:-73.961452}},c=Object(n.useState)(null),m=Object(u.a)(c,2),d=m[0],v=m[1];function h(e){return p.apply(this,arguments)}function p(){return(p=Object(l.a)(s.a.mark((function e(t){var a,n,o,c,l,u,m;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.coords,e.next=3,fetch("".concat(i,"?latlng=").concat(a.latitude,",").concat(a.longitude,"&key=").concat(r));case 3:return e.next=5,e.sent.json();case 5:if(n=e.sent,o=null,"OK"===n.status)for(c=n.results[0],l=0,u=c.address_components.length;l<u;l++)(m=c.address_components[l]).types.indexOf("administrative_area_level_1")>=0&&(o=m.short_name);console.log("Detected state : "+o),v(o);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){if(a)return h(o),!0;navigator.geolocation?navigator.geolocation.getCurrentPosition(h):console.log("Geolocation is not supported by this browser")}),[]),Object(n.useEffect)((function(){d&&(sessionStorage.setItem("province",d),t(d))}),[d]),null};var h=function(e){var t={AZ:"Arizona",AL:"Alabama",AK:"Alaska",AR:"Arkansas",CA:"California",CO:"Colorado",CT:"Connecticut",DC:"District of Columbia",DE:"Delaware",FL:"Florida",GA:"Georgia",HI:"Hawaii",ID:"Idaho",IL:"Illinois",IN:"Indiana",IA:"Iowa",KS:"Kansas",KY:"Kentucky",LA:"Louisiana",ME:"Maine",MD:"Maryland",MA:"Massachusetts",MI:"Michigan",MN:"Minnesota",MS:"Mississippi",MO:"Missouri",MT:"Montana",NE:"Nebraska",NV:"Nevada",NH:"New Hampshire",NJ:"New Jersey",NM:"New Mexico",NY:"New York",NC:"North Carolina",ND:"North Dakota",OH:"Ohio",OK:"Oklahoma",OR:"Oregon",PA:"Pennsylvania",RI:"Rhode Island",SC:"South Carolina",SD:"South Dakota",TN:"Tennessee",TX:"Texas",UT:"Utah",VT:"Vermont",VA:"Virginia",WA:"Washington",WV:"West Virginia",WI:"Wisconsin",WY:"Wyoming",AS:"American Samoa",GU:"Guam",MP:"Northern Mariana Islands",PR:"Puerto Rico",VI:"U.S. Virgin Islands",UM:"U.S. Minor Outlying Islands"};return null!=t[e]?t[e]:e};var p=function(e){var t=e.provinceList,a=e.handleChange,i=e.province,o=Object(n.useState)(i||""),c=Object(u.a)(o,2),s=c[0],l=c[1];return r.a.createElement(r.a.Fragment,null,t&&r.a.createElement("select",{value:s,onChange:function(e){a(e.target.value),l(e.target.value)}},t.map((function(e){return r.a.createElement("option",{value:e.state,key:e.state},h(e.state))}))))};var f=function(e){var t=e.provinceHandler,a=e.provinceList,i=Object(n.useState)(!1),o=Object(u.a)(i,2),c=o[0],s=o[1];return r.a.createElement(r.a.Fragment,null,"Select a state from the list: "," ",r.a.createElement(p,{provinceList:a,handleChange:t})," "," or "," ",r.a.createElement("a",{href:"#",onClick:function(){return s(!0)}},"Click here to determine your location"),c&&r.a.createElement(v,{handler:t}))},g=a(28),E=a(2);var b=function(e){var t=Object(n.useRef)(),a=Object(n.useRef)(),i=Object(n.useState)(!1),o=Object(u.a)(i,2),c=o[0],s=o[1],l=e.style;return Object(n.useEffect)((function(){var e=function(){s(c>=100?0:c++)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),Object(n.useEffect)((function(){var n=E.j(a.current).node(),r=parseInt(window.getComputedStyle(n).width)-e.margin.left-e.margin.right,i=parseInt(window.getComputedStyle(n).height)-e.margin.top-e.margin.bottom,o=E.j(t.current).select(".group-container").attr("transform","translate("+e.margin.left+","+e.margin.top+")"),c=E.i().range([0,r]),s=E.h().range([i,0]);c.domain(E.d(e.data,(function(e){return e.date}))),s.domain([0,E.f(e.data,(function(e){return+e.cases}))]);var l=E.a(c).tickSizeOuter(0).tickFormat(E.k("%b"));o.select(".x-axis").attr("transform","translate(0,"+i+")").transition().duration(300).call(l);var u=E.b(s).tickSizeOuter(0);o.select(".y-axis").transition().duration(300).call(u),o.select(".dataPath").datum(e.data).transition().duration(300).attr("d",E.e().x((function(e){return c(e.date)})).y((function(e){return s(e.cases)})).curve(E.c)).attr("fill","none").attr("stroke","#A14EBF").attr("stroke-width",2.2),e.data.filter((function(e){return e.average})).length>0&&o.select(".sevenDayPath").datum(e.data).transition().duration(300).attr("d",E.e().x((function(e){return c(e.date)})).y((function(e){return s(e.average)})).curve(E.c)).attr("fill","none").attr("stroke","white").attr("stroke-dasharray",4),o.select(".gridLinesPath").transition().duration(300).call(E.b(s).tickSize(-r).tickFormat("")).call((function(e){return e.select(".domain").remove()})).attr("stroke-dasharray","2")}),[e,c]),r.a.createElement("div",{className:l.graph,ref:a,style:{width:"100%"}},r.a.createElement("svg",{ref:t,style:{width:"100%",height:"100%"}},r.a.createElement("g",{className:"group-container"},r.a.createElement("g",{className:"".concat(l.axis," x-axis")}),r.a.createElement("g",{className:"".concat(l.axis," y-axis")}),r.a.createElement("path",{className:"".concat(l.data," dataPath")}),r.a.createElement("path",{className:"sevenDayPath"}),r.a.createElement("g",{className:"".concat(l.grid," gridLinesPath")}))))};var _=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Cumulative Covid-19 cases in ",e.provinceName),e.data?r.a.createElement(b,{data:e.data.map((function(e,t){return{cases:e.cases,date:e.date}})),margin:{top:10,bottom:30,left:60,right:30},id:e.id,style:e.style}):r.a.createElement("small",null,"No data available. Please try again later"))};function y(e,t,a){var n=e.slice(t-3,t+3).map((function(e){return e[a]})),r=E.g(n);return void 0===r?0:r}var w=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"New Daily Covid-19 cases in ",e.provinceName),e.data?r.a.createElement(b,{data:e.data.map((function(t,a){return{cases:t.newCases,date:t.date,average:y(e.data,a,"newCases")}})),margin:{top:10,bottom:30,left:60,right:30},id:e.id,style:e.style}):r.a.createElement("small",null,"No data available. Please try again later"))},x=a(4),C=a.n(x);var N=function(e){return r.a.createElement("div",{className:C.a.infoItem},r.a.createElement("div",{className:C.a.icon},r.a.createElement("img",{src:"covid-icons/".concat(e.icon)})),r.a.createElement("div",{className:C.a.text},r.a.createElement("div",{className:C.a.title},e.title),r.a.createElement("div",{className:C.a.description},e.description)),r.a.createElement("div",{className:C.a.amount},r.a.createElement("span",null,e.current,e.suffix)))};var I=a(27),O=a.n(I);var j=function(e){var t=e.data,a=e.additionalData,i=Object(n.useState)(100),o=Object(u.a)(i,2),c=o[0],s=o[1],l=Object(n.useState)([0,0]),m=Object(u.a)(l,2),d=m[0],v=m[1],h=Object(n.useState)([0,0]),p=Object(u.a)(h,2),f=p[0],g=p[1],E=Object(n.useState)([0,0]),b=Object(u.a)(E,2),_=b[0],y=b[1];Object(n.useEffect)((function(){if(t){var e,a,n=t.slice(t.length-7,t.length),r=(e=function(e,t){for(var a=0,n=0,r=0;r<t.length;r++)e[r]<=0||t[r]<=0||(a+=e[r],n+=t[r]);return n/a*100}(n.map((function(e){return e.positiveTests+e.negativeTests})),n.map((function(e){return e.positiveTests}))),a=1,Number(Math.round(e+"e"+a)+"e-"+a));s(r),v(t.map((function(e){return e.hospitalBeds.currentUsageCovid})).filter((function(e){return null!==e})).slice(-2)),g(t.map((function(e){return e.icuBeds.currentUsageCovid})).filter((function(e){return null!==e})).slice(-2)),y(t.map((function(e){return e.deaths})).slice(-2))}}),[t]);var w=a?100*a.vaccinationsInitiatedRatio:null;return r.a.createElement(r.a.Fragment,null,t&&r.a.createElement("div",{className:O.a.infoDashboard},r.a.createElement(N,{icon:"infected-lungs.svg",title:"Positivity Rate",description:"The percentage of positive tests results out of all Covid-19 tests done.",current:c}),r.a.createElement(N,{icon:"hospital.svg",title:"Currently Hospitalized",current:d[1],description:"Current amount of people hospitalized due to Covid-19."}),r.a.createElement(N,{icon:"ventilator.svg",title:"In ICU",description:"Current amount of patients with the disease using ICU beds.",current:f[1]}),r.a.createElement(N,{icon:"death.svg",title:"Deaths",description:"Covid-19 related deaths.",current:_[1]}),r.a.createElement(N,{icon:"vaccine.svg",title:"Population Vaccinated (1st dose)",description:"Percentage of the state's population that has received at least one dose of the Covid-19 vaccine.",current:w.toFixed(1),suffix:"%"})))},k=[{mainText:"Low",subText:"On track for containment"},{mainText:"Medium",subText:"Slow disease growth"},{mainText:"High",subText:"At risk of outbreak"},{mainText:"Critical",subText:"Active outbreak"},{mainText:"Severe",subText:"Severe outbreak"}];var D=function(e){var t=e.severity,a=k[t];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Risk level - ",a.mainText)," ",r.a.createElement("h4",null,a.subText))},S=a(3),A=a.n(S);var T=function(e){var t=e.province,a=e.provinceList,i=e.provinceHandler,o=e.API_KEY,c=Object(n.useState)(null),m=Object(u.a)(c,2),d=m[0],v=m[1],f=Object(n.useState)(null),E=Object(u.a)(f,2),b=E[0],y=E[1],x=h(t);Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var a,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=!1,console.log("Fetching data for: "+t),e.prev=2,e.next=5,fetch("https://api.covidactnow.org/v2/state/".concat(t,".timeseries.json?apiKey=").concat(o));case 5:return e.next=7,e.sent.json();case 7:a=e.sent,e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(2),console.log("Could not retrieve data. Error: "+e.t0),e.abrupt("return");case 14:y(a),n=a.actualsTimeseries.filter((function(e){return null!==e.newCases||null!==e.cases})),r=n.map((function(e){var t=e.date.toString(),a=new Date(t.slice(0,4),t.slice(5,7)-1,t.slice(8,10));return Object(g.a)({},e,{date:a})})),v(r);case 18:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]);var C=[{level:"low",style:A.a.low},{level:"medium",style:A.a.medium},{level:"high",style:A.a.high},{level:"critical",style:A.a.critical},{level:"severe",style:A.a.severe}];return r.a.createElement(r.a.Fragment,null,a&&d?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:A.a.top+" "+C[b?b.riskLevels.overall:null].style},r.a.createElement("h1",null,"Covid-19 in ",x),r.a.createElement(D,{severity:b?b.riskLevels.overall:null}),r.a.createElement("div",null,"If you want to see the data from another state, select it here: "),r.a.createElement(p,{province:t,provinceList:a,handleChange:i}),r.a.createElement("div",{className:A.a.graphGroup},r.a.createElement("div",{className:A.a.graphContainer},r.a.createElement(w,{data:d,provinceName:x,style:A.a})),r.a.createElement("div",{className:A.a.graphContainer},r.a.createElement(_,{data:d,provinceName:x,style:A.a})))),r.a.createElement("div",{className:A.a.bottom},r.a.createElement(j,{data:d,additionalData:b?b.metrics:null}))):r.a.createElement(r.a.Fragment,null,"Loading..."))};var M=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Credits"),r.a.createElement("p",null,"Created by ",r.a.createElement("a",{href:"https://alleras.github.io"},"Agustin Lleras")),r.a.createElement("p",null,"Using data from ",r.a.createElement("a",{href:"https://covidactnow.org/"},"Covid Act Now")),r.a.createElement("p",null,"Uses Reverse Geolocation with the Google Maps API"),r.a.createElement("p",null,"Icons by ",r.a.createElement("a",{href:"https://vulcanca.com/news/vulcan-creates-icons-for-covid-19-messaging"},"Vulcan")," and ",r.a.createElement("a",{href:"https://www.iconfinder.com/becris"},"Becris")))},L="b702d2590f054d019dd497ca87fc7de5";var P=function(){var e=sessionStorage.getItem("province"),t=Object(n.useState)(e||null),a=Object(u.a)(t,2),i=a[0],o=a[1],c=Object(n.useState)(null),m=Object(u.a)(c,2),v=m[0],h=m[1];return Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.covidactnow.org/v2/states.json?apiKey=".concat(L));case 2:return e.next=4,e.sent.json();case 4:t=e.sent,h(t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement("div",{className:d.a.App},i?r.a.createElement(r.a.Fragment,null,r.a.createElement(T,{province:i,provinceList:v,provinceHandler:o,API_KEY:L}),r.a.createElement(M,null)):r.a.createElement(f,{provinceList:v,provinceHandler:o}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[73,1,2]]]);
//# sourceMappingURL=main.0bc8ec33.chunk.js.map