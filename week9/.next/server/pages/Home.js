"use strict";(()=>{var e={};e.id=336,e.ids=[336,660],e.modules={1323:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},7220:(e,t,r)=>{r.r(t),r.d(t,{config:()=>_,default:()=>b,getServerSideProps:()=>S,getStaticPaths:()=>h,getStaticProps:()=>x,reportWebVitals:()=>v,routeModule:()=>G,unstable_getServerProps:()=>w,unstable_getServerSideProps:()=>E,unstable_getStaticParams:()=>y,unstable_getStaticPaths:()=>A,unstable_getStaticProps:()=>j});var a={};r.r(a),r.d(a,{default:()=>g});var n=r(7093),s=r(5244),l=r(1323),i=r(9209),u=r.n(i),o=r(1337),d=r.n(o),c=r(997),p=r(6689);let P={src:"/_next/static/media/logo.1f3d3cdb.svg",height:333,width:2e3,blurWidth:0,blurHeight:0},f=({showAd:e})=>e?c.jsx("div",{className:"max-w-md mx-auto bg-white p-4 my-4 rounded-md shadow-md",children:c.jsx("img",{src:P,alt:"광고",className:"w-full h-auto"})}):null,m=()=>{let[e,t]=(0,p.useState)(!0);return(0,c.jsxs)("div",{className:"p-4",children:[c.jsx("div",{className:"flex items-center space-x-4",children:c.jsx("button",{className:"px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none",onClick:()=>t(!e),children:e?"광고 숨기기":"광고 보기"})}),c.jsx(f,{showAd:e})]})};function g(){return(0,c.jsxs)("div",{className:"text-3xl",children:["Home",c.jsx(m,{})]})}let b=(0,l.l)(a,"default"),x=(0,l.l)(a,"getStaticProps"),h=(0,l.l)(a,"getStaticPaths"),S=(0,l.l)(a,"getServerSideProps"),_=(0,l.l)(a,"config"),v=(0,l.l)(a,"reportWebVitals"),j=(0,l.l)(a,"unstable_getStaticProps"),A=(0,l.l)(a,"unstable_getStaticPaths"),y=(0,l.l)(a,"unstable_getStaticParams"),w=(0,l.l)(a,"unstable_getServerProps"),E=(0,l.l)(a,"unstable_getServerSideProps"),G=new n.PagesRouteModule({definition:{kind:s.x.PAGES,page:"/Home",pathname:"/Home",bundlePath:"",filename:""},components:{App:d(),Document:u()},userland:a})},1337:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}});let a=r(167),n=a._(r(6689)),s=r(109);async function l(e){let{Component:t,ctx:r}=e,a=await (0,s.loadGetInitialProps)(t,r);return{pageProps:a}}class i extends n.default.Component{render(){let{Component:e,pageProps:t}=this.props;return n.default.createElement(e,t)}}i.origGetInitialProps=l,i.getInitialProps=l,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5244:(e,t)=>{var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{e.exports=require("react")},997:e=>{e.exports=require("react/jsx-runtime")},1017:e=>{e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[209],()=>r(7220));module.exports=a})();