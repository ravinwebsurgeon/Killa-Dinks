import{r as d,j as e}from"./jsx-runtime-Dt5Dsy05.js";import{D as R,Y as A,q as T,j as L}from"./index-DAtz4MM6.js";import{u as m,A as y}from"./ProductPrice-N-WSZsmw.js";import{y as D,d as U,z as H,B as O,_ as F,A as v,N as x,C as _,x as E,v as q,L as f,O as $,e as B,M as Y,D as G,S as Q,G as W,H as J}from"./components-1kEx_GL1.js";import{l as b}from"./logo-CpQj_orX.js";import{C as z}from"./CartMain-D08eTbXR.js";import{u as P,g as K}from"./search-DOeYwaXi.js";import{I as N}from"./Image-DLSwqI1b.js";import{M as V}from"./Money-D-ynzVoa.js";import"./variants-D4GslRAx.js";/**
 * @remix-run/react v2.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let k="positions";function Z({getKey:r,...t}){let{isSpaMode:n}=D(),s=U(),i=H();O({getKey:r,storageKey:k});let l=d.useMemo(()=>{if(!r)return null;let c=r(s,i);return c!==s.key?c:null},[]);if(n)return null;let a=((c,p)=>{if(!window.history.state||!window.history.state.key){let h=Math.random().toString(32).slice(2);window.history.replaceState({key:h},"")}try{let o=JSON.parse(sessionStorage.getItem(c)||"{}")[p||window.history.state.key];typeof o=="number"&&window.scrollTo(0,o)}catch(h){console.error(h),sessionStorage.removeItem(c)}}).toString();return d.createElement("script",F({},t,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${a})(${JSON.stringify(k)}, ${JSON.stringify(l)})`}}))}const X="/assets/favicon-DZkC1E9c.svg",ee="/assets/reset-BNfGROJi.css",se="/assets/app-DzenuVYg.css",re="/assets/tailwind-D2nRguxU.css";function te({footer:r,header:t,publicStoreDomain:n}){return e.jsx(d.Suspense,{children:e.jsx(v,{resolve:r,children:s=>{var i;return e.jsx("footer",{className:"footer",children:(s==null?void 0:s.menu)&&((i=t.shop.primaryDomain)==null?void 0:i.url)&&e.jsx(ne,{menu:s.menu,primaryDomainUrl:t.shop.primaryDomain.url,publicStoreDomain:n})})}})})}function ne({menu:r,primaryDomainUrl:t,publicStoreDomain:n}){return e.jsx("nav",{className:"footer-menu",role:"navigation",children:(r||ie).items.map(s=>{if(!s.url)return null;const i=s.url.includes("myshopify.com")||s.url.includes(n)||s.url.includes(t)?new URL(s.url).pathname:s.url;return!i.startsWith("/")?e.jsx("a",{href:i,rel:"noopener noreferrer",target:"_blank",children:s.title},s.id):e.jsx(x,{end:!0,prefetch:"intent",style:le,to:i,children:s.title},s.id)})})}const ie={id:"gid://shopify/Menu/199655620664",items:[{id:"gid://shopify/MenuItem/461633060920",resourceId:"gid://shopify/ShopPolicy/23358046264",tags:[],title:"Privacy Policy",type:"SHOP_POLICY",url:"/policies/privacy-policy",items:[]},{id:"gid://shopify/MenuItem/461633093688",resourceId:"gid://shopify/ShopPolicy/23358013496",tags:[],title:"Refund Policy",type:"SHOP_POLICY",url:"/policies/refund-policy",items:[]},{id:"gid://shopify/MenuItem/461633126456",resourceId:"gid://shopify/ShopPolicy/23358111800",tags:[],title:"Shipping Policy",type:"SHOP_POLICY",url:"/policies/shipping-policy",items:[]},{id:"gid://shopify/MenuItem/461633159224",resourceId:"gid://shopify/ShopPolicy/23358079032",tags:[],title:"Terms of Service",type:"SHOP_POLICY",url:"/policies/terms-of-service",items:[]}]};function le({isActive:r,isPending:t}){return{fontWeight:r?"bold":void 0,color:t?"grey":"white"}}const ae="/assets/rect-CHTgU-9h.png",C="/assets/user-Bef-u04q.png",ce="/assets/cart-D71c6QvK.png";function oe({header:r,isLoggedIn:t,cart:n,publicStoreDomain:s}){const{shop:i,menu:l}=r;return e.jsxs(e.Fragment,{children:[e.jsx("header",{className:"bigger-navbar bg-[#FAF7EB]",children:e.jsxs("div",{className:"banner lg:mx-[43px] relative",children:[e.jsx("div",{className:"w-full h-full",children:e.jsx(x,{prefetch:"intent",to:"/",style:j,end:!0,children:e.jsx("img",{src:ae,alt:"",className:"w-full lg:pt-[47px]  h-[400px]  lg:h-auto  object-cover pt-[20px] "})})}),e.jsx("div",{className:"lg:absolute lg:top-[47px] lg:left-0 absolute top-0 left-0 rounded-t-[50px]  right-0 h-[90px] bannerx  lg:block hidden ",children:e.jsxs("div",{className:"text-white flex justify-between  px-[200px] items-center pt-[10px]",children:[e.jsx("div",{children:e.jsx("img",{src:b,alt:"",className:"opacity-100"})}),e.jsx("div",{className:"flex gap-5 text-[18px] font-bold items-center",children:e.jsx(S,{menu:l,viewport:"desktop",primaryDomainUrl:r.shop.primaryDomain.url,publicStoreDomain:s})}),e.jsx("div",{className:"flex gap-5",children:e.jsx(M,{isLoggedIn:t,cart:n})})]})})]})}),e.jsxs("header",{className:"header mobile-header",children:[e.jsx(x,{prefetch:"intent",to:"/",style:j,end:!0,children:e.jsx("img",{src:b,alt:"",className:"h-[50px]"})}),e.jsx(S,{menu:l,viewport:"desktop",primaryDomainUrl:r.shop.primaryDomain.url,publicStoreDomain:s}),e.jsx(M,{isLoggedIn:t,cart:n})]})]})}function S({menu:r,primaryDomainUrl:t,viewport:n,publicStoreDomain:s}){const i=`header-menu-${n}`,{close:l}=m();return e.jsxs("nav",{className:i,role:"navigation",children:[n==="mobile"&&e.jsx(x,{end:!0,onClick:l,prefetch:"intent",style:j,to:"/",children:"Home"}),(r||xe).items.map(a=>{if(!a.url)return null;const c=a.url.includes("myshopify.com")||a.url.includes(s)||a.url.includes(t)?new URL(a.url).pathname:a.url;return e.jsx(x,{className:"header-menu-item",end:!0,onClick:l,prefetch:"intent",style:j,to:c,children:a.title},a.id)})]})}function M({isLoggedIn:r,cart:t}){return e.jsxs("nav",{className:"header-ctas",role:"navigation",children:[e.jsx(ue,{}),e.jsx(x,{prefetch:"intent",to:"/account",style:j,children:e.jsx(d.Suspense,{fallback:"Sign in",children:e.jsx(v,{resolve:r,errorElement:"Sign in",children:n=>n?e.jsx(e.Fragment,{children:e.jsx("img",{src:C,alt:"",className:"lg:w-[35px] lg:h-[35px] w-[30px] h-[30px]"})}):e.jsx(e.Fragment,{children:e.jsx("img",{src:C,alt:"",className:"lg:w-[35px] lg:h-[35px] w-[30px] h-[30px"})})})})}),e.jsx(de,{}),e.jsx(he,{cart:t})]})}function ue(){const{open:r}=m();return e.jsx("button",{className:"header-menu-mobile-toggle reset",onClick:()=>r("mobile"),children:e.jsx("h3",{children:"☰"})})}function de(){const{open:r}=m();return e.jsx("button",{className:"reset lg:flex hidden hover:cursor-pointer",onClick:()=>r("search"),children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"34",height:"34",fill:"white",className:"bi bi-search fill-white w-[30px] h-[30px] lg:w-[35px] lg:h-[35px] ",viewBox:"0 0 16 16",children:e.jsx("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"})})})}function I({count:r}){const{open:t}=m(),{publish:n,shop:s,cart:i,prevCart:l}=A();return e.jsxs("a",{href:"/cart",onClick:a=>{a.preventDefault(),t("cart"),n("cart_viewed",{cart:i,prevCart:l,shop:s,url:window.location.href||""})},className:"flex",children:[e.jsx("img",{src:ce,alt:"",className:"lg:w-[35x] lg:h-[35px] w-[30px] h-[30px]"}),r===null?e.jsx("span",{children:" "}):r]})}function he({cart:r}){return e.jsx(d.Suspense,{fallback:e.jsx(I,{count:null}),children:e.jsx(v,{resolve:r,children:e.jsx(pe,{})})})}function pe(){const r=_(),t=R(r);return e.jsx(I,{count:(t==null?void 0:t.totalQuantity)??0})}const xe={id:"gid://shopify/Menu/199655587896",items:[{id:"gid://shopify/MenuItem/461609500728",resourceId:null,tags:[],title:"Collections",type:"HTTP",url:"/collections",items:[]},{id:"gid://shopify/MenuItem/461609533496",resourceId:null,tags:[],title:"Blog",type:"HTTP",url:"/blogs/journal",items:[]},{id:"gid://shopify/MenuItem/461609566264",resourceId:null,tags:[],title:"Policies",type:"HTTP",url:"/policies",items:[]},{id:"gid://shopify/MenuItem/461609599032",resourceId:"gid://shopify/Page/92591030328",tags:[],title:"About",type:"PAGE",url:"/pages/about",items:[]}]};function j({isActive:r,isPending:t}){return{fontWeight:r?"bold":void 0,color:t?"grey":"black"}}const w="/search";function me({children:r,className:t="predictive-search-form",...n}){const s=E({key:"search"}),i=d.useRef(null),l=q(),a=m();function c(o){var g;o.preventDefault(),o.stopPropagation(),(g=i==null?void 0:i.current)!=null&&g.value&&i.current.blur()}function p(){var g;const o=(g=i==null?void 0:i.current)==null?void 0:g.value;l(w+(o?`?q=${o}`:"")),a.close()}function h(o){s.submit({q:o.target.value||"",limit:5,predictive:!0},{method:"GET",action:w})}return d.useEffect(()=>{var o;(o=i==null?void 0:i.current)==null||o.setAttribute("type","search")},[]),typeof r!="function"?null:e.jsx(s.Form,{...n,className:t,onSubmit:c,children:r({inputRef:i,fetcher:s,fetchResults:h,goToSearch:p})})}function u({children:r}){const t=m(),{term:n,inputRef:s,fetcher:i,total:l,items:a}=Se();function c(){s.current&&(s.current.blur(),s.current.value="")}function p(){c(),t.close()}return r({items:a,closeSearch:p,inputRef:s,state:i.state,term:n,total:l})}u.Articles=ge;u.Collections=je;u.Pages=fe;u.Products=ye;u.Queries=ve;u.Empty=Pe;function ge({term:r,articles:t,closeSearch:n}){return t.length?e.jsxs("div",{className:"predictive-search-result",children:[e.jsx("h5",{children:"Articles"}),e.jsx("ul",{children:t.map(s=>{var l;const i=P({baseUrl:`/blogs/${s.blog.handle}/${s.handle}`,trackingParams:s.trackingParameters,term:r.current??""});return e.jsx("li",{className:"predictive-search-result-item",children:e.jsxs(f,{onClick:n,to:i,children:[((l=s.image)==null?void 0:l.url)&&e.jsx(N,{alt:s.image.altText??"",src:s.image.url,width:50,height:50}),e.jsx("div",{children:e.jsx("span",{children:s.title})})]})},s.id)})})]},"articles"):null}function je({term:r,collections:t,closeSearch:n}){return t.length?e.jsxs("div",{className:"predictive-search-result",children:[e.jsx("h5",{children:"Collections"}),e.jsx("ul",{children:t.map(s=>{var l;const i=P({baseUrl:`/collections/${s.handle}`,trackingParams:s.trackingParameters,term:r.current});return e.jsx("li",{className:"predictive-search-result-item",children:e.jsxs(f,{onClick:n,to:i,children:[((l=s.image)==null?void 0:l.url)&&e.jsx(N,{alt:s.image.altText??"",src:s.image.url,width:50,height:50}),e.jsx("div",{children:e.jsx("span",{children:s.title})})]})},s.id)})})]},"collections"):null}function fe({term:r,pages:t,closeSearch:n}){return t.length?e.jsxs("div",{className:"predictive-search-result",children:[e.jsx("h5",{children:"Pages"}),e.jsx("ul",{children:t.map(s=>{const i=P({baseUrl:`/pages/${s.handle}`,trackingParams:s.trackingParameters,term:r.current});return e.jsx("li",{className:"predictive-search-result-item",children:e.jsx(f,{onClick:n,to:i,children:e.jsx("div",{children:e.jsx("span",{children:s.title})})})},s.id)})})]},"pages"):null}function ye({term:r,products:t,closeSearch:n}){return t.length?e.jsxs("div",{className:"predictive-search-result",children:[e.jsx("h5",{children:"Products"}),e.jsx("ul",{children:t.map(s=>{var a,c,p,h;const i=P({baseUrl:`/products/${s.handle}`,trackingParams:s.trackingParameters,term:r.current}),l=(c=(a=s==null?void 0:s.variants)==null?void 0:a.nodes)==null?void 0:c[0].image;return e.jsx("li",{className:"predictive-search-result-item",children:e.jsxs(f,{to:i,onClick:n,children:[l&&e.jsx(N,{alt:l.altText??"",src:l.url,width:50,height:50}),e.jsxs("div",{children:[e.jsx("p",{children:s.title}),e.jsx("small",{children:((h=(p=s==null?void 0:s.variants)==null?void 0:p.nodes)==null?void 0:h[0].price)&&e.jsx(V,{data:s.variants.nodes[0].price})})]})]})},s.id)})})]},"products"):null}function ve({queries:r,queriesDatalistId:t}){return r.length?e.jsx("datalist",{id:t,children:r.map(n=>n?e.jsx("option",{value:n.text},n.text):null)}):null}function Pe({term:r}){return r.current?e.jsxs("p",{children:["No results found for ",e.jsx("q",{children:r.current})]}):null}function Se(){var l,a;const r=E({key:"search"}),t=d.useRef(""),n=d.useRef(null);(r==null?void 0:r.state)==="loading"&&(t.current=String(((l=r.formData)==null?void 0:l.get("q"))||"")),d.useEffect(()=>{n.current||(n.current=document.querySelector('input[type="search"]'))},[]);const{items:s,total:i}=((a=r==null?void 0:r.data)==null?void 0:a.result)??K();return{items:s,total:i,inputRef:n,term:t,fetcher:r}}function we({cart:r,children:t=null,footer:n,header:s,isLoggedIn:i,publicStoreDomain:l}){return e.jsxs(y.Provider,{children:[e.jsx(Ne,{cart:r}),e.jsx(be,{}),e.jsx(ke,{header:s,publicStoreDomain:l}),e.jsx("div",{className:"",children:e.jsx(oe,{header:s,cart:r,isLoggedIn:i,publicStoreDomain:l})}),e.jsx("main",{children:t}),e.jsx(te,{footer:n,header:s,publicStoreDomain:l})]})}function Ne({cart:r}){return e.jsx(y,{type:"cart",heading:"CART",children:e.jsx(d.Suspense,{fallback:e.jsx("p",{children:"Loading cart ..."}),children:e.jsx(v,{resolve:r,children:t=>e.jsx(z,{cart:t,layout:"aside"})})})})}function be(){const r=d.useId();return e.jsx(y,{type:"search",heading:"SEARCH",children:e.jsxs("div",{className:"predictive-search",children:[e.jsx("br",{}),e.jsx(me,{children:({fetchResults:t,goToSearch:n,inputRef:s})=>e.jsxs(e.Fragment,{children:[e.jsx("input",{name:"q",onChange:t,onFocus:t,placeholder:"Search",ref:s,type:"search",list:r})," ",e.jsx("button",{onClick:n,children:"Search"})]})}),e.jsx(u,{children:({items:t,total:n,term:s,state:i,closeSearch:l})=>{const{articles:a,collections:c,pages:p,products:h,queries:o}=t;return i==="loading"&&s.current?e.jsx("div",{children:"Loading..."}):n?e.jsxs(e.Fragment,{children:[e.jsx(u.Queries,{queries:o,queriesDatalistId:r}),e.jsx(u.Products,{products:h,closeSearch:l,term:s}),e.jsx(u.Collections,{collections:c,closeSearch:l,term:s}),e.jsx(u.Pages,{pages:p,closeSearch:l,term:s}),e.jsx(u.Articles,{articles:a,closeSearch:l,term:s}),s.current&&n?e.jsx(f,{onClick:l,to:`${w}?q=${s.current}`,children:e.jsxs("p",{children:["View all results for ",e.jsx("q",{children:s.current}),"  →"]})}):null]}):e.jsx(u.Empty,{term:s})}})]})})}function ke({header:r,publicStoreDomain:t}){var n;return r.menu&&((n=r.shop.primaryDomain)==null?void 0:n.url)&&e.jsx(y,{type:"mobile",heading:"MENU",children:e.jsx(S,{menu:r.menu,viewport:"mobile",primaryDomainUrl:r.shop.primaryDomain.url,publicStoreDomain:t})})}const He=({formMethod:r,currentUrl:t,nextUrl:n,defaultShouldRevalidate:s})=>r&&r!=="GET"||t.toString()===n.toString()?!0:s;function Oe(){return[{rel:"stylesheet",href:re},{rel:"stylesheet",href:ee},{rel:"stylesheet",href:se},{rel:"preconnect",href:"https://cdn.shopify.com"},{rel:"preconnect",href:"https://shop.app"},{rel:"icon",type:"image/svg+xml",href:X}]}function Fe({children:r}){const t=T(),n=B("root");return e.jsxs("html",{lang:"en",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width,initial-scale=1"}),e.jsx(Y,{}),e.jsx(G,{})]}),e.jsxs("body",{children:[n?e.jsx(L.Provider,{cart:n.cart,shop:n.shop,consent:n.consent,children:e.jsx(we,{...n,children:r})}):r,e.jsx(Z,{nonce:t}),e.jsx(Q,{nonce:t})]})]})}function _e(){return e.jsx($,{})}function qe(){var s;const r=W();let t="Unknown error",n=500;return J(r)?(t=((s=r==null?void 0:r.data)==null?void 0:s.message)??r.data,n=r.status):r instanceof Error&&(t=r.message),e.jsxs("div",{className:"route-error",children:[e.jsx("h1",{children:"Oops"}),e.jsx("h2",{children:n}),t&&e.jsx("fieldset",{children:e.jsx("pre",{children:t})})]})}export{qe as ErrorBoundary,Fe as Layout,_e as default,Oe as links,He as shouldRevalidate};
