"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[250],{9250:function(e,t,a){a.d(t,{TH:function(){return d},UO:function(){return U},s0:function(){return C}});var n,r,u,s,o=a(7294),i=a(2599);/**
 * React Router v6.20.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function c(){return(c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}let l=o.createContext(null),f=o.createContext(null),p=o.createContext(null),v=o.createContext({outlet:null,matches:[],isDataRoute:!1});function h(){return null!=o.useContext(p)}function d(){return h()||(0,i.J0)(!1),o.useContext(p).location}function g(e){o.useContext(f).static||o.useLayoutEffect(e)}function C(){let{isDataRoute:e}=o.useContext(v);return e?function(){var e;let t,a,n,r;let{router:u}=(R.UseNavigateStable,(t=o.useContext(l))||(0,i.J0)(!1),t),s=(e=b.UseNavigateStable,(r=(n=((a=o.useContext(v))||(0,i.J0)(!1),a)).matches[n.matches.length-1]).route.id||(0,i.J0)(!1),r.route.id),f=o.useRef(!1);return g(()=>{f.current=!0}),o.useCallback(function(e,t){void 0===t&&(t={}),f.current&&("number"==typeof e?u.navigate(e):u.navigate(e,c({fromRouteId:s},t)))},[u,s])}():function(){h()||(0,i.J0)(!1);let e=o.useContext(l),{basename:t,navigator:a}=o.useContext(f),{matches:n}=o.useContext(v),{pathname:r}=d(),u=JSON.stringify((0,i.Zq)(n).map(e=>e.pathnameBase)),s=o.useRef(!1);return g(()=>{s.current=!0}),o.useCallback(function(n,o){if(void 0===o&&(o={}),!s.current)return;if("number"==typeof n){a.go(n);return}let c=(0,i.pC)(n,JSON.parse(u),r,"path"===o.relative);null==e&&"/"!==t&&(c.pathname="/"===c.pathname?t:(0,i.RQ)([t,c.pathname])),(o.replace?a.replace:a.push)(c,o.state,o)},[t,a,u,r,e])}()}function U(){let{matches:e}=o.useContext(v),t=e[e.length-1];return t?t.params:{}}var R=((n=R||{}).UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n),b=((r=b||{}).UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r);(s||(s=a.t(o,2))).startTransition;var m=((u=m||{})[u.pending=0]="pending",u[u.success=1]="success",u[u.error=2]="error",u);new Promise(()=>{})}}]);