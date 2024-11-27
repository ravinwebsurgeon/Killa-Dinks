import{r as p,j as y}from"./jsx-runtime-Dt5Dsy05.js";import{b as re,L as ce,v as Be,d as ne,w as He,x as Ge}from"./components-1kEx_GL1.js";const Fe="modulepreload",Ke=function(e){return"/"+e},ue={},Je=function(t,r,n){let a=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),i=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));a=Promise.allSettled(r.map(c=>{if(c=Ke(c),c in ue)return;ue[c]=!0;const u=c.endsWith(".css"),l=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${l}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":Fe,u||(d.as="script"),d.crossOrigin="",d.href=c,i&&d.setAttribute("nonce",i),document.head.appendChild(d),u)return new Promise((m,f)=>{d.addEventListener("load",m),d.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=o,window.dispatchEvent(i),!i.defaultPrevented)throw o}return a.then(o=>{for(const i of o||[])i.status==="rejected"&&s(i.reason);return t().catch(s)})};function R(e){if(!e){const t=`flattenConnection(): needs a 'connection' to flatten, but received '${e??""}' instead.`;return console.error(t+" Returning an empty array"),[]}return"nodes"in e?e.nodes:"edges"in e&&Array.isArray(e.edges)?e.edges.map(t=>{if(!(t!=null&&t.node))throw new Error("flattenConnection(): Connection edges must contain nodes");return t.node}):[]}const L="_shopify_y",V="_shopify_s";var Ye=new Set(["domain","path","max-age","expires","samesite","secure","httponly"]);function ze(e){let t={},r,n,a=0,s=e.split(/;\s*/g),o,i;for(;a<s.length;a++)if(n=s[a],r=n.indexOf("="),~r){if(o=n.substring(0,r++).trim(),i=n.substring(r).trim(),i[0]==='"'&&(i=i.substring(1,i.length-1)),~i.indexOf("%"))try{i=decodeURIComponent(i)}catch{}Ye.has(n=o.toLowerCase())?n==="expires"?t.expires=new Date(i):n==="max-age"?t.maxage=+i:t[n]=i:t[o]=i}else(o=n.trim().toLowerCase())&&(o==="httponly"||o==="secure")&&(t[o]=!0);return t}function Qe(e,t,r={}){let n=e+"="+encodeURIComponent(t);return r.expires&&(n+="; Expires="+new Date(r.expires).toUTCString()),r.maxage!=null&&r.maxage>=0&&(n+="; Max-Age="+(r.maxage|0)),r.domain&&(n+="; Domain="+r.domain),r.path&&(n+="; Path="+r.path),r.samesite&&(n+="; SameSite="+r.samesite),(r.secure||r.samesite==="None")&&(n+="; Secure"),r.httponly&&(n+="; HttpOnly"),n}const de="xxxx-4xxx-xxxx-xxxxxxxxxxxx";function z(){let e="";try{const t=window.crypto,r=new Uint16Array(31);t.getRandomValues(r);let n=0;e=de.replace(/[x]/g,a=>{const s=r[n]%16,o=a==="x"?s:s&3|8;return n++,o.toString(16)}).toUpperCase()}catch{e=de.replace(/[x]/g,r=>{const n=Math.random()*16|0;return(r==="x"?n:n&3|8).toString(16)}).toUpperCase()}return`${Ze()}-${e}`}function Ze(){let e=0,t=0;e=new Date().getTime()>>>0;try{t=performance.now()>>>0}catch{t=0}return Math.abs(e+t).toString(16).toLowerCase().padStart(8,"0")}function De(e){const t=ze(e);return{[L]:t[L]||"",[V]:t[V]||""}}const P={PAGE_VIEW:"PAGE_VIEW",ADD_TO_CART:"ADD_TO_CART",PAGE_VIEW_2:"PAGE_VIEW_2",COLLECTION_VIEW:"COLLECTION_VIEW",PRODUCT_VIEW:"PRODUCT_VIEW",SEARCH_VIEW:"SEARCH_VIEW"},N={article:"article",blog:"blog",captcha:"captcha",cart:"cart",collection:"collection",customersAccount:"customers/account",customersActivateAccount:"customers/activate_account",customersAddresses:"customers/addresses",customersLogin:"customers/login",customersOrder:"customers/order",customersRegister:"customers/register",customersResetPassword:"customers/reset_password",giftCard:"gift_card",home:"index",listCollections:"list-collections",forbidden:"403",notFound:"404",page:"page",password:"password",product:"product",policy:"policy",search:"search"},Xe={hydrogen:"hydrogen",headless:"headless"},le={hydrogen:"6167201",headless:"12875497473"};function I(e,t){return{schema_id:e,payload:t,metadata:{event_created_at_ms:Date.now()}}}function v(e){const t={id:"",resource:null,resourceId:null,search:"",searchParams:new URLSearchParams,hash:""};if(typeof e!="string")return t;try{const{search:r,searchParams:n,pathname:a,hash:s}=new URL(e),o=a.split("/"),i=o[o.length-1],c=o[o.length-2];return!i||!c?t:{id:`${i}${r}${s}`||"",resource:c??null,resourceId:i||null,search:r,searchParams:n,hash:s}}catch{return t}}function E(e,t){return typeof e!="object"?{}:(Object.entries(e).forEach(([r,n])=>{n&&(t[r]=n)}),t)}function et(e){return typeof document>"u"?(console.error(`${e} should only be used within the useEffect callback or event handlers`),!0):!1}const tt="trekkie_storefront_page_view/1.4",rt="myshopify.dev";function pe(e){const t=e,{id:r,resource:n}=v(t.resourceId),a=n?n.toLowerCase():void 0;return[I(tt,E({pageType:t.pageType,customerId:parseInt(v(t.customerId).id||"0"),resourceType:a,resourceId:parseInt(r)},nt(t)))]}function nt(e){return{appClientId:e.shopifySalesChannel?le[e.shopifySalesChannel]:le.headless,isMerchantRequest:ot(e.url),hydrogenSubchannelId:e.storefrontId||e.hydrogenSubchannelId||"0",isPersistentCookie:e.hasUserConsent,uniqToken:e.uniqueToken,visitToken:e.visitToken,microSessionId:z(),microSessionCount:1,url:e.url,path:e.path,search:e.search,referrer:e.referrer,title:e.title,shopId:parseInt(v(e.shopId).id),currency:e.currency,contentLanguage:e.acceptedLanguage||"en"}}function ot(e){if(typeof e!="string")return!1;const t=new URL(e).hostname;return t.indexOf(rt)!==-1||t==="localhost"}const at="2024.10.0",A="custom_storefront_customer_tracking/1.2",Oe="page_rendered",xe="collection_page_rendered",Re="product_page_rendered",it="product_added_to_cart",Le="search_submitted";function W(e){return{canonical_url:e.canonicalUrl||e.url,customer_id:parseInt(v(e.customerId).id||"0")}}function st(e){const t=e,r=W(t),n=t.pageType,a=[];switch(a.push(I(A,E({event_name:Oe,...r},T(t)))),n){case N.collection:a.push(I(A,E({event_name:xe,...r,collection_name:t.collectionHandle,collection_id:parseInt(v(t.collectionId).id)},T(t))));break;case N.product:a.push(I(A,E({event_name:Re,...r,products:oe(t.products),total_value:t.totalValue},T(t))));break;case N.search:a.push(I(A,E({event_name:Le,...r,search_string:t.searchString},T(t))));break}return a}function ct(e){const t=e,r=W(t);return[I(A,E({event_name:Oe,...r},T(t)))]}function ut(e){const t=e,r=W(t);return[I(A,E({event_name:xe,...r,collection_name:t.collectionHandle,collection_id:parseInt(v(t.collectionId).id)},T(t)))]}function dt(e){const t=e,r=W(t);return[I(A,E({event_name:Re,...r,products:oe(t.products),total_value:t.totalValue},T(t)))]}function lt(e){const t=e,r=W(t);return[I(A,E({event_name:Le,...r,search_string:t.searchString},T(t)))]}function pt(e){const t=e,r=v(t.cartId),n=r!=null&&r.id?`${r.id}`:null;return[I(A,E({event_name:it,customerId:t.customerId,cart_token:n,total_value:t.totalValue,products:oe(t.products),customer_id:parseInt(v(t.customerId).id||"0")},T(t)))]}function T(e){return{source:e.shopifySalesChannel||Xe.headless,asset_version_id:e.assetVersionId||at,hydrogenSubchannelId:e.storefrontId||e.hydrogenSubchannelId||"0",is_persistent_cookie:e.hasUserConsent,deprecated_visit_token:e.visitToken,unique_token:e.uniqueToken,event_time:Date.now(),event_id:z(),event_source_url:e.url,referrer:e.referrer,user_agent:e.userAgent,navigation_type:e.navigationType,navigation_api:e.navigationApi,shop_id:parseInt(v(e.shopId).id),currency:e.currency,ccpa_enforced:e.ccpaEnforced||!1,gdpr_enforced:e.gdprEnforced||!1,gdpr_enforced_as_string:e.gdprEnforced?"true":"false",analytics_allowed:e.analyticsAllowed||!1,marketing_allowed:e.marketingAllowed||!1,sale_of_data_allowed:e.saleOfDataAllowed||!1}}function oe(e){return e?e.map(t=>{const r=E({variant_gid:t.variantGid,category:t.category,sku:t.sku,product_id:parseInt(v(t.productGid).id),variant_id:parseInt(v(t.variantGid).id)},{product_gid:t.productGid,name:t.name,variant:t.variantName||"",brand:t.brand,price:parseFloat(t.price),quantity:Number(t.quantity||0)});return JSON.stringify(r)}):[]}function B(e,t){const{eventName:r,payload:n}=e;if(!n.hasUserConsent)return Promise.resolve();let a=[];const s=n;return r===P.PAGE_VIEW?a=a.concat(pe(s),st(s)):r===P.ADD_TO_CART?a=a.concat(pt(n)):r===P.PAGE_VIEW_2?a=a.concat(pe(s),ct(s)):r===P.COLLECTION_VIEW?a=a.concat(ut(s)):r===P.PRODUCT_VIEW?a=a.concat(dt(s)):r===P.SEARCH_VIEW&&(a=a.concat(lt(s))),a.length?ht(a,t):Promise.resolve()}function ft(){return typeof window>"u"||!window.navigator?!1:/Chrome-Lighthouse/.test(window.navigator.userAgent)}const fe="sendShopifyAnalytics request is unsuccessful";function ht(e,t){if(ft())return Promise.resolve();const r={events:e,metadata:{event_sent_at_ms:Date.now()}};try{return fetch(t?`https://${t}/.well-known/shopify/monorail/unstable/produce_batch`:"https://monorail-edge.shopifysvc.com/unstable/produce_batch",{method:"post",headers:{"content-type":"text/plain"},body:JSON.stringify(r)}).then(n=>{if(!n.ok)throw new Error("Response failed");return n.text()}).then(n=>{n&&JSON.parse(n).result.forEach(s=>{s.status!==200&&console.error(fe,`

`,s.message)})}).catch(n=>{console.error(fe,n)})}catch{return Promise.resolve()}}function mt(){if(et("getClientBrowserParameters"))return{uniqueToken:"",visitToken:"",url:"",path:"",search:"",referrer:"",title:"",userAgent:"",navigationType:"",navigationApi:""};const[e,t]=vt(),r=De(document.cookie);return{uniqueToken:r[L],visitToken:r[V],url:location.href,path:location.pathname,search:location.search,referrer:document.referrer,title:document.title,userAgent:navigator.userAgent,navigationType:e,navigationApi:t}}function gt(){try{const e=(performance==null?void 0:performance.getEntriesByType)&&(performance==null?void 0:performance.getEntriesByType("navigation"));if(e&&e[0]){const t=window.performance.getEntriesByType("navigation")[0].type;return t&&t.toString()}}catch{}}function yt(){var e,t;try{if(PerformanceNavigation&&((e=performance==null?void 0:performance.navigation)==null?void 0:e.type)!==null&&((t=performance==null?void 0:performance.navigation)==null?void 0:t.type)!==void 0){const r=performance.navigation.type;switch(r){case PerformanceNavigation.TYPE_NAVIGATE:return"navigate";case PerformanceNavigation.TYPE_RELOAD:return"reload";case PerformanceNavigation.TYPE_BACK_FORWARD:return"back_forward";default:return`unknown: ${r}`}}}catch{}}function vt(){try{let e="PerformanceNavigationTiming",t=gt();return t||(t=yt(),e="performance.navigation"),t?[t,e]:["unknown","unknown"]}catch{}return["error","error"]}const he={};function _t(e,t){const r=he[e];if(r)return r;const n=new Promise((a,s)=>{const o=document.createElement("script");t!=null&&t.module?o.type="module":o.type="text/javascript",o.src=e,o.onload=()=>{a(!0)},o.onerror=()=>{s(!1)},(t==null?void 0:t.in)==="head"?document.head.appendChild(o):document.body.appendChild(o);const i=t==null?void 0:t.attributes;i&&Object.keys(i).forEach(c=>{o.setAttribute(c,i[c])})});return he[e]=n,n}function ae(e,t){const[r,n]=p.useState("loading");return p.useEffect(()=>{_t(e,t).then(()=>n("done")).catch(()=>n("error"))},[e]),r}const wt=60*60*24*360*1,Pt=60*30;function Et(e){const{hasUserConsent:t=!1,domain:r="",checkoutDomain:n=""}=e||{};p.useEffect(()=>{const a=De(document.cookie);let s=r||window.document.location.host;if(n){const i=n.split(".").reverse(),c=s.split(".").reverse(),u=[];i.forEach((l,d)=>{l===c[d]&&u.push(l)}),s=u.reverse().join(".")}/^localhost/.test(s)&&(s="");const o=s?/^\./.test(s)?s:`.${s}`:"";t?(G(L,a[L]||z(),wt,o),G(V,a[V]||z(),Pt,o)):(G(L,"",0,o),G(V,"",0,o))},[e,t,r,n])}function G(e,t,r,n){document.cookie=Qe(e,t,{maxage:r,domain:n,samesite:"Lax",path:"/"})}var me=new Set,Ve=e=>{me.has(e)||(console.warn(e),me.add(e))},ge=new Set,ye=e=>{ge.has(e)||(console.error(new Error(e)),ge.add(e))};p.lazy(()=>Je(()=>import("./log-seo-tags-TY72EQWZ-DCHH-_Gl.js"),[]));function nr({connection:e,children:t=()=>(console.warn("<Pagination> requires children to work properly"),null)}){let r=re().state==="loading",{endCursor:n,hasNextPage:a,hasPreviousPage:s,nextPageUrl:o,nodes:i,previousPageUrl:c,startCursor:u}=Ct(e),l=p.useMemo(()=>({pageInfo:{endCursor:n,hasPreviousPage:s,hasNextPage:a,startCursor:u},nodes:i}),[n,a,s,u,i]),d=p.useMemo(()=>p.forwardRef(function(f,h){return a?p.createElement(ce,{preventScrollReset:!0,...f,to:o,state:l,replace:!0,ref:h}):null}),[a,o,l]),m=p.useMemo(()=>p.forwardRef(function(f,h){return s?p.createElement(ce,{preventScrollReset:!0,...f,to:c,state:l,replace:!0,ref:h}):null}),[s,c,l]);return t({state:l,hasNextPage:a,hasPreviousPage:s,isLoading:r,nextPageUrl:o,nodes:i,previousPageUrl:c,NextLink:d,PreviousLink:m})}function F(e){let t=new URLSearchParams(e);return t.delete("cursor"),t.delete("direction"),t.toString()}function M(e){throw new Error(`The Pagination component requires ${"`"+e+"`"} to be a part of your query. See the guide on how to setup your query to include ${"`"+e+"`"}: https://shopify.dev/docs/custom-storefronts/hydrogen/data-fetching/pagination#setup-the-paginated-query`)}function Ct(e){e.pageInfo||M("pageInfo"),typeof e.pageInfo.startCursor>"u"&&M("pageInfo.startCursor"),typeof e.pageInfo.endCursor>"u"&&M("pageInfo.endCursor"),typeof e.pageInfo.hasNextPage>"u"&&M("pageInfo.hasNextPage"),typeof e.pageInfo.hasPreviousPage>"u"&&M("pageInfo.hasPreviousPage");let t=Be(),{state:r,search:n,pathname:a}=ne(),s=new URLSearchParams(n).get("direction")==="previous",o=p.useMemo(()=>{var d;return!((d=globalThis==null?void 0:globalThis.window)!=null&&d.__hydrogenHydrated)||!r||!(r!=null&&r.nodes)?R(e):s?[...R(e),...r.nodes]:[...r.nodes,...R(e)]},[r,e]),i=p.useMemo(()=>{var _,w,O,q,j;let d=(_=globalThis==null?void 0:globalThis.window)==null?void 0:_.__hydrogenHydrated,m=!d||((w=r==null?void 0:r.pageInfo)==null?void 0:w.startCursor)===void 0?e.pageInfo.startCursor:r.pageInfo.startCursor,f=!d||((O=r==null?void 0:r.pageInfo)==null?void 0:O.endCursor)===void 0?e.pageInfo.endCursor:r.pageInfo.endCursor,h=!d||((q=r==null?void 0:r.pageInfo)==null?void 0:q.hasPreviousPage)===void 0?e.pageInfo.hasPreviousPage:r.pageInfo.hasPreviousPage,g=!d||((j=r==null?void 0:r.pageInfo)==null?void 0:j.hasNextPage)===void 0?e.pageInfo.hasNextPage:r.pageInfo.hasNextPage;return r!=null&&r.nodes&&(s?(m=e.pageInfo.startCursor,h=e.pageInfo.hasPreviousPage):(f=e.pageInfo.endCursor,g=e.pageInfo.hasNextPage)),{startCursor:m,endCursor:f,hasPreviousPage:h,hasNextPage:g}},[s,r,e.pageInfo.hasNextPage,e.pageInfo.hasPreviousPage,e.pageInfo.startCursor,e.pageInfo.endCursor]),c=p.useRef({params:F(n),pathname:a});p.useEffect(()=>{window.__hydrogenHydrated=!0},[]),p.useEffect(()=>{(F(n)!==c.current.params||a!==c.current.pathname)&&(c.current={pathname:a,params:F(n)},t(`${a}?${F(n)}`,{replace:!0,preventScrollReset:!0,state:{nodes:void 0,pageInfo:void 0}}))},[a,n]);let u=p.useMemo(()=>{let d=new URLSearchParams(n);return d.set("direction","previous"),i.startCursor&&d.set("cursor",i.startCursor),`?${d.toString()}`},[n,i.startCursor]),l=p.useMemo(()=>{let d=new URLSearchParams(n);return d.set("direction","next"),i.endCursor&&d.set("cursor",i.endCursor),`?${d.toString()}`},[n,i.endCursor]);return{...i,previousPageUrl:u,nextPageUrl:l,nodes:o}}var Ne="cartFormInput";function D({children:e,action:t,inputs:r,route:n,fetcherKey:a}){let s=Ge({key:a});return y.jsxs(s.Form,{action:n||"",method:"post",children:[(t||r)&&y.jsx("input",{type:"hidden",name:Ne,value:JSON.stringify({action:t,inputs:r})}),typeof e=="function"?e(s):e]})}D.INPUT_NAME=Ne;D.ACTIONS={AttributesUpdateInput:"AttributesUpdateInput",BuyerIdentityUpdate:"BuyerIdentityUpdate",Create:"Create",DiscountCodesUpdate:"DiscountCodesUpdate",GiftCardCodesUpdate:"GiftCardCodesUpdate",LinesAdd:"LinesAdd",LinesRemove:"LinesRemove",LinesUpdate:"LinesUpdate",NoteUpdate:"NoteUpdate",SelectedDeliveryOptionsUpdate:"SelectedDeliveryOptionsUpdate",MetafieldsSet:"MetafieldsSet",MetafieldDelete:"MetafieldDelete"};function It(e){let t={};for(let o of e.entries()){let i=o[0],c=e.getAll(i);t[i]=c.length>1?c:o[1]}let{cartFormInput:r,...n}=t,{action:a,inputs:s}=r?JSON.parse(String(r)):{};return{action:a,inputs:{...s,...n}}}D.getFormInput=It;var Ue="__h_pending_";function At(e){return Ue+e}function ve(e){return e.startsWith(Ue)}function or(e){let t=He();if(!t||!t.length)return e;let r=e!=null&&e.lines?structuredClone(e):{lines:{nodes:[]}},n=r.lines.nodes,a=!1;for(let{formData:s}of t){if(!s)continue;let o=D.getFormInput(s);if(o.action===D.ACTIONS.LinesAdd)for(let i of o.inputs.lines){if(!i.selectedVariant){console.error("[h2:error:useOptimisticCart] No selected variant was passed in the cart action. Make sure to pass the selected variant if you want to use an optimistic cart");continue}let c=n.find(u=>{var l;return u.merchandise.id===((l=i.selectedVariant)==null?void 0:l.id)});a=!0,c?(c.quantity=(c.quantity||1)+(i.quantity||1),c.isOptimistic=!0):n.unshift({id:At(i.selectedVariant.id),merchandise:i.selectedVariant,isOptimistic:!0,quantity:i.quantity||1})}else if(o.action===D.ACTIONS.LinesRemove)for(let i of o.inputs.lineIds){let c=n.findIndex(u=>u.id===i);if(c!==-1){if(ve(n[c].id)){console.error("[h2:error:useOptimisticCart] Tried to remove an optimistic line that has not been added to the cart yet");continue}n.splice(c,1),a=!0}else console.warn(`[h2:warn:useOptimisticCart] Tried to remove line '${i}' but it doesn't exist in the cart`)}else if(o.action===D.ACTIONS.LinesUpdate)for(let i of o.inputs.lines){let c=n.findIndex(u=>i.id===u.id);if(c>-1){if(ve(n[c].id)){console.error("[h2:error:useOptimisticCart] Tried to update an optimistic line that has not been added to the cart yet");continue}n[c].quantity=i.quantity,n[c].quantity===0&&n.splice(c,1),a=!0}else console.warn(`[h2:warn:useOptimisticCart] Tried to update line '${i.id}' but it doesn't exist in the cart`)}}return a&&(r.isOptimistic=a),r.totalQuantity=n.reduce((s,o)=>s+o.quantity,0),r}function ar({handle:e,options:t=[],variants:r=[],productPath:n="products",waitForNavigation:a=!1,children:s}){var m;let o=t;(m=o[0])!=null&&m.values&&(Ve("[h2:warn:VariantSelector] product.options.values is deprecated. Use product.options.optionValues instead."),o[0]&&!o[0].optionValues&&(o=t.map(f=>{var h;return{...f,optionValues:((h=f.values)==null?void 0:h.map(g=>({name:g})))||[]}})));let i=r instanceof Array?r:R(r),{searchParams:c,path:u,alreadyOnProductPage:l}=Tt(e,n,a),d=o.filter(f=>{var h;return((h=f==null?void 0:f.optionValues)==null?void 0:h.length)===1});return p.createElement(p.Fragment,null,...p.useMemo(()=>o.map(f=>{let h,g=[];for(let _ of f.optionValues){let w=new URLSearchParams(l?c:void 0);w.set(f.name,_.name),d.forEach(k=>{k.optionValues[0].name&&w.set(k.name,k.optionValues[0].name)});let O=i.find(k=>{var se;return(se=k==null?void 0:k.selectedOptions)==null?void 0:se.every(x=>w.get(x==null?void 0:x.name)===(x==null?void 0:x.value))}),q=c.get(f.name),j=q?q===_.name:!1;j&&(h=_.name);let ie="?"+w.toString();g.push({value:_.name,optionValue:_,isAvailable:O?O.availableForSale:!0,to:u+ie,search:ie,isActive:j,variant:O})}return s({option:{name:f.name,value:h,values:g}})}),[o,i,s]))}function Tt(e,t,r){let{pathname:n,search:a}=ne(),s=re();return p.useMemo(()=>{let o=/(\/[a-zA-Z]{2}-[a-zA-Z]{2}\/)/g.exec(n),i=o&&o.length>0;t=t.startsWith("/")?t.substring(1):t;let c=i?`${o[0]}${t}/${e}`:`/${t}/${e}`;return{searchParams:new URLSearchParams(r||s.state!=="loading"?a:s.location.search),alreadyOnProductPage:c===n,path:c}},[n,a,r,e,t,s])}function ir(e,t){let r=re(),[n,a]=p.useState([]);if(p.useEffect(()=>{Promise.resolve(t).then(s=>{var o,i;s&&a(s instanceof Array?s:((i=(o=s.product)==null?void 0:o.variants)==null?void 0:i.nodes)||[])}).catch(s=>{reportError(new Error("[h2:error:useOptimisticVariant] An error occurred while resolving the variants for the optimistic product hook.",{cause:s}))})},[t]),r.state==="loading"){let s=new URLSearchParams(r.location.search),o=!1,i=n.find(c=>c.selectedOptions?c.selectedOptions.every(u=>s.get(u.name)===u.value):(o||(o=!0,reportError(new Error("[h2:error:useOptimisticVariant] The optimistic product hook requires your product query to include variants with the selectedOptions field."))),!1));if(i)return{...i,isOptimistic:!0}}return e}var qe=p.createContext(void 0);qe.Provider;var St=()=>p.useContext(qe);p.forwardRef((e,t)=>{let{waitForHydration:r,src:n,...a}=e;if(r)return y.jsx(kt,{src:n,options:a});let s=St();return y.jsx("script",{suppressHydrationWarning:!0,...a,src:n,nonce:s,ref:t})});function kt({src:e,options:t}){if(!e)throw new Error("`waitForHydration` with the Script component requires a `src` prop");return ae(e,{attributes:t}),null}function U(e){let{type:t,data:r={},customData:n}=e,a=ne(),{publish:s,cart:o,prevCart:i,shop:c,customData:u}=Z(),l=a.pathname+a.search,d={...r,customData:{...u,...n},cart:o,prevCart:i,shop:c};return p.useEffect(()=>{c!=null&&c.shopId&&(d={...d,url:window.location.href},s(t,d))},[s,l,c==null?void 0:c.shopId]),null}function bt(e){return y.jsx(U,{...e,type:"page_viewed"})}function Dt(e){return y.jsx(U,{...e,type:"product_viewed"})}function Ot(e){return y.jsx(U,{...e,type:"collection_viewed"})}function xt(e){return y.jsx(U,{...e,type:"cart_viewed"})}function Rt(e){return y.jsx(U,{...e,type:"search_viewed"})}function Lt(e){return y.jsx(U,{...e})}var C={PAGE_VIEWED:"page_viewed",PRODUCT_VIEWED:"product_viewed",COLLECTION_VIEWED:"collection_viewed",CART_VIEWED:"cart_viewed",SEARCH_VIEWED:"search_viewed",CART_UPDATED:"cart_updated",PRODUCT_ADD_TO_CART:"product_added_to_cart",PRODUCT_REMOVED_FROM_CART:"product_removed_from_cart",CUSTOM_EVENT:"custom_"},Vt="https://cdn.shopify.com/shopifycloud/consent-tracking-api/v0.1/consent-tracking-api.js",Nt="https://cdn.shopify.com/shopifycloud/privacy-banner/storefront-banner.js";function X(e){console.error(`[h2:error:useCustomerPrivacy] Unable to setup Customer Privacy API: Missing consent.${e} configuration.`)}function Ut(e){let{withPrivacyBanner:t=!1,onVisitorConsentCollected:r,onReady:n,...a}=e;ae(t?Nt:Vt,{attributes:{id:"customer-privacy-api"}});let{observing:s,setLoaded:o}=qt({withPrivacyBanner:t,onLoaded:n}),i=p.useMemo(()=>{let{checkoutDomain:u,storefrontAccessToken:l}=a;return u||X("checkoutDomain"),l||X("storefrontAccessToken"),(l.startsWith("shpat_")||l.length!==32)&&console.error("[h2:error:useCustomerPrivacy] It looks like you passed a private access token, make sure to use the public token"),{checkoutRootDomain:u,storefrontAccessToken:l,storefrontRootDomain:Pe(u),country:a.country,locale:a.locale}},[a,Pe,X]);p.useEffect(()=>{let u=l=>{r&&r(l.detail)};return document.addEventListener("visitorConsentCollected",u),()=>{document.removeEventListener("visitorConsentCollected",u)}},[r]),p.useEffect(()=>{if(!t||s.current.privacyBanner)return;s.current.privacyBanner=!0;let u=window.privacyBanner||void 0;Object.defineProperty(window,"privacyBanner",{configurable:!0,get(){return u},set(l){if(typeof l=="object"&&l!==null&&"showPreferences"in l&&"loadBanner"in l){let d=l;d.loadBanner(i),u=Ce({privacyBanner:d,config:i}),o.privacyBanner(),we()}}})},[t,i,Ce,o.privacyBanner]),p.useEffect(()=>{if(s.current.customerPrivacy)return;s.current.customerPrivacy=!0;let u=null,l=window.Shopify||void 0;Object.defineProperty(window,"Shopify",{configurable:!0,get(){return l},set(d){typeof d=="object"&&d!==null&&Object.keys(d).length===0&&(l=d,Object.defineProperty(window.Shopify,"customerPrivacy",{configurable:!0,get(){return u},set(m){if(typeof m=="object"&&m!==null&&"setTrackingConsent"in m){let f=m;u={...f,setTrackingConsent:Ee({customerPrivacy:f,config:i})},l={...l,customerPrivacy:u},o.customerPrivacy(),we()}}}))}})},[i,Ee,o.customerPrivacy]);let c={customerPrivacy:Q()};return t&&(c.privacyBanner=ee()),c}var _e=!1;function we(){if(_e)return;_e=!0;let e=new CustomEvent("shopifyCustomerPrivacyApiLoaded");document.dispatchEvent(e)}function qt({withPrivacyBanner:e,onLoaded:t}){let r=p.useRef({customerPrivacy:!1,privacyBanner:!1}),[n,a]=p.useState(e?[!1,!1]:[!1]),s=n.every(Boolean),o={customerPrivacy:()=>{a(e?i=>[!0,i[1]]:()=>[!0])},privacyBanner:()=>{e&&a(i=>[i[0],!0])}};return p.useEffect(()=>{s&&t&&t()},[s,t]),{observing:r,setLoaded:o}}function Pe(e){if(typeof window>"u")return;let t=window.document.location.host,r=e.split(".").reverse(),n=t.split(".").reverse(),a=[];return r.forEach((s,o)=>{s===n[o]&&a.push(s)}),a.reverse().join(".")}function Ee({customerPrivacy:e,config:t}){let r=e.setTrackingConsent,{locale:n,country:a,...s}=t;function o(i,c){r({...s,headlessStorefront:!0,...i},c)}return o}function Ce({privacyBanner:e,config:t}){let r=e.loadBanner,n=e.showPreferences;function a(o){if(typeof o=="object"){r({...t,...o});return}r(t)}function s(o){if(typeof o=="object"){n({...t,...o});return}n(t)}return{loadBanner:a,showPreferences:s}}function Q(){var e;try{return window.Shopify&&window.Shopify.customerPrivacy?(e=window.Shopify)==null?void 0:e.customerPrivacy:null}catch{return null}}function ee(){try{return window&&(window!=null&&window.privacyBanner)?window.privacyBanner:null}catch{return null}}var jt="2024.10.0";function Mt(){let e=Q();if(!e)throw new Error("Shopify Customer Privacy API not available. Must be used within a useEffect. Make sure to load the Shopify Customer Privacy API with useCustomerPrivacy() or <AnalyticsProvider>.");return e}function $t({consent:e,onReady:t,domain:r}){let{subscribe:n,register:a,canTrack:s}=Z(),[o,i]=p.useState(!1),[c,u]=p.useState(!1),l=p.useRef(!1),{checkoutDomain:d,storefrontAccessToken:m,language:f}=e,{ready:h}=a("Internal_Shopify_Analytics");return Ut({...e,locale:f,checkoutDomain:d||"mock.shop",storefrontAccessToken:m||"abcdefghijklmnopqrstuvwxyz123456",onVisitorConsentCollected:()=>u(!0),onReady:()=>u(!0)}),Et({hasUserConsent:c?s():!0,domain:r,checkoutDomain:d}),p.useEffect(()=>{l.current||(l.current=!0,n(C.PAGE_VIEWED,Bt),n(C.PRODUCT_VIEWED,Ht),n(C.COLLECTION_VIEWED,Gt),n(C.SEARCH_VIEWED,Ft),n(C.PRODUCT_ADD_TO_CART,Kt),i(!0))},[n]),p.useEffect(()=>{o&&c&&(h(),t())},[o,c,t]),null}function K(e){console.error(`[h2:error:ShopifyAnalytics] Unable to send Shopify analytics: Missing shop.${e} configuration.`)}function H(e){var n,a,s,o;let t=Mt(),r=t.analyticsProcessingAllowed();if(!((n=e==null?void 0:e.shop)!=null&&n.shopId)){K("shopId");return}if(!((a=e==null?void 0:e.shop)!=null&&a.acceptedLanguage)){K("acceptedLanguage");return}if(!((s=e==null?void 0:e.shop)!=null&&s.currency)){K("currency");return}if(!((o=e==null?void 0:e.shop)!=null&&o.hydrogenSubchannelId)){K("hydrogenSubchannelId");return}return{shopifySalesChannel:"hydrogen",assetVersionId:jt,...e.shop,hasUserConsent:r,...mt(),ccpaEnforced:!t.saleOfDataAllowed(),gdprEnforced:!(t.marketingAllowed()&&t.analyticsProcessingAllowed()),analyticsAllowed:t.analyticsProcessingAllowed(),marketingAllowed:t.marketingAllowed(),saleOfDataAllowed:t.saleOfDataAllowed()}}function Wt(e,t){if(t===null)return;let r=H(e);return r?{...r,cartId:t.id}:void 0}var S={};function Bt(e){let t=H(e);t&&(B({eventName:P.PAGE_VIEW_2,payload:{...t,...S}}),S={})}function Ht(e){let t=H(e);if(t&&je({type:"product",products:e.products})){let r=te(e.products);S={pageType:N.product,resourceId:r[0].productGid},t={...t,...S,products:te(e.products)},B({eventName:P.PRODUCT_VIEW,payload:t})}}function Gt(e){let t=H(e);t&&(S={pageType:N.collection,resourceId:e.collection.id},t={...t,...S,collectionHandle:e.collection.handle,collectionId:e.collection.id},B({eventName:P.COLLECTION_VIEW,payload:t}))}function Ft(e){let t=H(e);t&&(S={pageType:N.search},t={...t,...S,searchString:e.searchTerm},B({eventName:P.SEARCH_VIEW,payload:t}))}function Kt(e){let{cart:t,currentLine:r}=e,n=Wt(e,t);!n||!(r!=null&&r.id)||Jt({matchedLine:r,eventPayload:n})}function Jt({matchedLine:e,eventPayload:t}){let r={id:e.merchandise.product.id,variantId:e.merchandise.id,title:e.merchandise.product.title,variantTitle:e.merchandise.title,vendor:e.merchandise.product.vendor,price:e.merchandise.price.amount,quantity:e.quantity,productType:e.merchandise.product.productType,sku:e.merchandise.sku};je({type:"cart",products:[r]})&&B({eventName:P.ADD_TO_CART,payload:{...t,products:te([r])}})}function b(e,t,r,n){if(e==="cart"){let a=`${r?"merchandise":"merchandise.product"}.${t}`;console.error(`[h2:error:ShopifyAnalytics] Can't set up cart analytics events because the \`cart.lines[].${a}\` value is missing from your GraphQL cart query. In your project, search for where \`fragment CartLine on CartLine\` is defined and make sure \`${a}\` is part of your cart query. Check the Hydrogen Skeleton template for reference: https://github.com/Shopify/hydrogen/blob/main/templates/skeleton/app/lib/fragments.ts#L25-L56.`)}else{let a=`${n||t}`;console.error(`[h2:error:ShopifyAnalytics] Can't set up product view analytics events because the \`${a}\` is missing from your \`<Analytics.ProductView>\`. Make sure \`${a}\` is part of your products data prop. Check the Hydrogen Skeleton template for reference: https://github.com/Shopify/hydrogen/blob/main/templates/skeleton/app/routes/products.%24handle.tsx#L159-L165.`)}}function je({type:e,products:t}){return!t||t.length===0?(b(e,"",!1,"data.products"),!1):(t.forEach(r=>{if(!r.id)return b(e,"id",!1),!1;if(!r.title)return b(e,"title",!1),!1;if(!r.price)return b(e,"price.amount",!0,"price"),!1;if(!r.vendor)return b(e,"vendor",!1),!1;if(!r.variantId)return b(e,"id",!0,"variantId"),!1;if(!r.variantTitle)return b(e,"title",!0,"variantTitle"),!1}),!0)}function te(e){return e.map(t=>{let r={productGid:t.id,variantGid:t.variantId,name:t.title,variantName:t.variantTitle,brand:t.vendor,price:t.price,quantity:t.quantity||1,category:t.productType};return t.sku&&(r.sku=t.sku),t.productType&&(r.category=t.productType),r})}function Ie(e){console.error(`[h2:error:CartAnalytics] Can't set up cart analytics events because the \`cart.${e}\` value is missing from your GraphQL cart query. In your project, search for where \`fragment CartApiQuery on Cart\` is defined and make sure \`${e}\` is part of your cart query. Check the Hydrogen Skeleton template for reference: https://github.com/Shopify/hydrogen/blob/main/templates/skeleton/app/lib/fragments.ts#L59.`)}function Yt({cart:e,setCarts:t}){let{publish:r,shop:n,customData:a,canTrack:s,cart:o,prevCart:i}=Z(),c=p.useRef(null);return p.useEffect(()=>{if(e)return Promise.resolve(e).then(u=>{if(u&&u.lines){if(!u.id){Ie("id");return}if(!u.updatedAt){Ie("updatedAt");return}}t(({cart:l,prevCart:d})=>(u==null?void 0:u.updatedAt)!==(l==null?void 0:l.updatedAt)?{cart:u,prevCart:l}:{cart:l,prevCart:d})}),()=>{}},[t,e]),p.useEffect(()=>{if(!o||!(o!=null&&o.updatedAt)||(o==null?void 0:o.updatedAt)===(i==null?void 0:i.updatedAt))return;let u;try{u=JSON.parse(localStorage.getItem("cartLastUpdatedAt")||"")}catch{u=null}if(o.id===(u==null?void 0:u.id)&&o.updatedAt===(u==null?void 0:u.updatedAt))return;let l={eventTimestamp:Date.now(),cart:o,prevCart:i,shop:n,customData:a};if(o.updatedAt===c.current)return;c.current=o.updatedAt,r("cart_updated",l),localStorage.setItem("cartLastUpdatedAt",JSON.stringify({id:o.id,updatedAt:o.updatedAt}));let d=i!=null&&i.lines?R(i==null?void 0:i.lines):[],m=o.lines?R(o.lines):[];d==null||d.forEach(f=>{let h=m.filter(g=>f.id===g.id);if((h==null?void 0:h.length)===1){let g=h[0];f.quantity<g.quantity?r("product_added_to_cart",{...l,prevLine:f,currentLine:g}):f.quantity>g.quantity&&r("product_removed_from_cart",{...l,prevLine:f,currentLine:g})}else r("product_removed_from_cart",{...l,prevLine:f})}),m==null||m.forEach(f=>{let h=d.filter(g=>f.id===g.id);(!h||h.length===0)&&r("product_added_to_cart",{...l,currentLine:f})})},[o,i,r,n,a,s]),null}var zt="https://cdn.shopify.com/shopifycloud/perf-kit/shopify-perf-kit-1.0.1.min.js";function Qt({shop:e}){let t=p.useRef(!1),{subscribe:r,register:n}=Z(),{ready:a}=n("Internal_Shopify_Perf_Kit"),s=ae(zt,{attributes:{id:"perfkit","data-application":"hydrogen","data-shop-id":v(e.shopId).id.toString(),"data-storefront-id":e.hydrogenSubchannelId,"data-monorail-region":"global","data-spa-mode":"true","data-resource-timing-sampling-rate":"100"}});return p.useEffect(()=>{s!=="done"||t.current||(t.current=!0,r(C.PAGE_VIEWED,()=>{var o;(o=window.PerfKit)==null||o.navigate()}),r(C.PRODUCT_VIEWED,()=>{var o;(o=window.PerfKit)==null||o.setPageType("product")}),r(C.COLLECTION_VIEWED,()=>{var o;(o=window.PerfKit)==null||o.setPageType("collection")}),r(C.SEARCH_VIEWED,()=>{var o;(o=window.PerfKit)==null||o.setPageType("search")}),r(C.CART_VIEWED,()=>{var o;(o=window.PerfKit)==null||o.setPageType("cart")}),a())},[r,a,s]),null}var Zt={canTrack:()=>!1,cart:null,customData:{},prevCart:null,publish:()=>{},shop:null,subscribe:()=>{},register:()=>({ready:()=>{}}),customerPrivacy:null,privacyBanner:null},Me=p.createContext(Zt),J=new Map,$={};function $e(){return Object.values($).every(Boolean)}function Ae(e,t){var r;J.has(e)||J.set(e,new Map),(r=J.get(e))==null||r.set(t.toString(),t)}var Y=new Map;function Te(e,t){if(!$e()){Y.set(e,t);return}We(e,t)}function We(e,t){(J.get(e)??new Map).forEach((r,n)=>{try{r(t)}catch(a){typeof a=="object"&&a instanceof Error?console.error("Analytics publish error",a.message,n,a.stack):console.error("Analytics publish error",a,n)}})}function Se(e){return $.hasOwnProperty(e)||($[e]=!1),{ready:()=>{$[e]=!0,$e()&&Y.size>0&&(Y.forEach((t,r)=>{We(r,t)}),Y.clear())}}}function ke(){try{return window.Shopify.customerPrivacy.analyticsProcessingAllowed()}catch{}return!1}function be(e,t){return`[h2:error:Analytics.Provider] - ${e} is required. Make sure ${t} is defined in your environment variables. See https://h2o.fyi/analytics/consent to learn how to setup environment variables in the Shopify admin.`}function Xt({canTrack:e,cart:t,children:r,consent:n,customData:a={},shop:s=null,cookieDomain:o}){var _;let i=p.useRef(!1),{shop:c}=er(s),[u,l]=p.useState(!!e),[d,m]=p.useState({cart:null,prevCart:null}),[f,h]=p.useState(e?()=>e:()=>ke);if(c)if(/\/68817551382$/.test(c.shopId))Ve("[h2:error:Analytics.Provider] - Mock shop is used. Analytics will not work properly.");else{if(!n.checkoutDomain){let w=be("consent.checkoutDomain","PUBLIC_CHECKOUT_DOMAIN");ye(w)}if(!n.storefrontAccessToken){let w=be("consent.storefrontAccessToken","PUBLIC_STOREFRONT_API_TOKEN");ye(w)}n!=null&&n.country||(n.country="US"),n!=null&&n.language||(n.language="EN"),n.withPrivacyBanner===void 0&&(n.withPrivacyBanner=!1)}let g=p.useMemo(()=>({canTrack:f,...d,customData:a,publish:f()?Te:()=>{},shop:c,subscribe:Ae,register:Se,customerPrivacy:Q(),privacyBanner:ee()}),[u,f,d,(_=d.cart)==null?void 0:_.updatedAt,d.prevCart,Te,Ae,a,c,Se,JSON.stringify($),Q,ee]);return y.jsxs(Me.Provider,{value:g,children:[r,!!c&&y.jsx(bt,{}),!!c&&!!t&&y.jsx(Yt,{cart:t,setCarts:m}),!!c&&n.checkoutDomain&&y.jsx($t,{consent:n,onReady:()=>{i.current=!0,l(!0),h(e?()=>e:()=>ke)},domain:o}),!!c&&y.jsx(Qt,{shop:c})]})}function Z(){let e=p.useContext(Me);if(!e)throw new Error("[h2:error:useAnalytics] 'useAnalytics()' must be a descendent of <AnalyticsProvider/>");return e}function er(e){let[t,r]=p.useState(null);return p.useEffect(()=>(Promise.resolve(e).then(r),()=>{}),[r,e]),{shop:t}}var sr={CartView:xt,CollectionView:Ot,CustomView:Lt,ProductView:Dt,Provider:Xt,SearchView:Rt};export{or as D,ir as G,ar as M,Z as Y,D as a,R as f,sr as j,St as q,nr as z};