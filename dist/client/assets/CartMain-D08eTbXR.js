import{j as t,r as m}from"./jsx-runtime-Dt5Dsy05.js";import{a as o,D as v}from"./index-DAtz4MM6.js";import{u as y,P as g}from"./ProductPrice-N-WSZsmw.js";import{u as N}from"./variants-D4GslRAx.js";import{I as A}from"./Image-DLSwqI1b.js";import{L as b}from"./components-1kEx_GL1.js";import{M as I}from"./Money-D-ynzVoa.js";function D({layout:e,line:n}){var u;const{id:s,merchandise:i}=n,{product:r,title:a,image:d,selectedOptions:c}=i,h=N(r.handle,c),{close:x}=y();return t.jsxs("li",{className:"cart-line",children:[d&&t.jsx(A,{alt:a,aspectRatio:"1/1",data:d,height:100,loading:"lazy",width:100}),t.jsxs("div",{children:[t.jsx(b,{prefetch:"intent",to:h,onClick:()=>{e==="aside"&&x()},children:t.jsx("p",{children:t.jsx("strong",{children:r.title})})}),t.jsx(g,{price:(u=n==null?void 0:n.cost)==null?void 0:u.totalAmount}),t.jsx("ul",{children:c.map(l=>t.jsx("li",{children:t.jsxs("small",{children:[l.name,": ",l.value]})},l.name))}),t.jsx(q,{line:n})]})]},s)}function q({line:e}){if(!e||typeof(e==null?void 0:e.quantity)>"u")return null;const{id:n,quantity:s,isOptimistic:i}=e,r=Number(Math.max(0,s-1).toFixed(0)),a=Number((s+1).toFixed(0));return t.jsxs("div",{className:"cart-line-quantity",children:[t.jsxs("small",{children:["Quantity: ",s,"   "]}),t.jsx(p,{lines:[{id:n,quantity:r}],children:t.jsx("button",{"aria-label":"Decrease quantity",disabled:s<=1||!!i,name:"decrease-quantity",value:r,children:t.jsx("span",{children:"− "})})})," ",t.jsx(p,{lines:[{id:n,quantity:a}],children:t.jsx("button",{"aria-label":"Increase quantity",name:"increase-quantity",value:a,disabled:!!i,children:t.jsx("span",{children:"+"})})})," ",t.jsx(L,{lineIds:[n],disabled:!!i})]})}function L({lineIds:e,disabled:n}){return t.jsx(o,{route:"/cart",action:o.ACTIONS.LinesRemove,inputs:{lineIds:e},children:t.jsx("button",{disabled:n,type:"submit",children:"Remove"})})}function p({children:e,lines:n}){return t.jsx(o,{route:"/cart",action:o.ACTIONS.LinesUpdate,inputs:{lines:n},children:e})}function R({cart:e,layout:n}){var i,r,a;const s=n==="page"?"cart-summary-page":"cart-summary-aside";return t.jsxs("div",{"aria-labelledby":"cart-summary",className:s,children:[t.jsx("h4",{children:"Totals"}),t.jsxs("dl",{className:"cart-subtotal",children:[t.jsx("dt",{children:"Subtotal"}),t.jsx("dd",{children:(r=(i=e.cost)==null?void 0:i.subtotalAmount)!=null&&r.amount?t.jsx(I,{data:(a=e.cost)==null?void 0:a.subtotalAmount}):"-"})]}),t.jsx(k,{discountCodes:e.discountCodes}),t.jsx(G,{giftCardCodes:e.appliedGiftCards}),t.jsx(U,{checkoutUrl:e.checkoutUrl})]})}function U({checkoutUrl:e}){return e?t.jsxs("div",{children:[t.jsx("a",{href:e,target:"_self",children:t.jsx("p",{children:"Continue to Checkout →"})}),t.jsx("br",{})]}):null}function k({discountCodes:e}){var s;const n=((s=e==null?void 0:e.filter(i=>i.applicable))==null?void 0:s.map(({code:i})=>i))||[];return t.jsxs("div",{children:[t.jsx("dl",{hidden:!n.length,children:t.jsxs("div",{children:[t.jsx("dt",{children:"Discount(s)"}),t.jsx(f,{children:t.jsxs("div",{className:"cart-discount",children:[t.jsx("code",{children:n==null?void 0:n.join(", ")})," ",t.jsx("button",{children:"Remove"})]})})]})}),t.jsx(f,{discountCodes:n,children:t.jsxs("div",{children:[t.jsx("input",{type:"text",name:"discountCode",placeholder:"Discount code"})," ",t.jsx("button",{type:"submit",children:"Apply"})]})})]})}function f({discountCodes:e,children:n}){return t.jsx(o,{route:"/cart",action:o.ACTIONS.DiscountCodesUpdate,inputs:{discountCodes:e||[]},children:n})}function G({giftCardCodes:e}){const n=m.useRef([]),s=m.useRef(null),i=(e==null?void 0:e.map(({lastCharacters:d})=>`***${d}`))||[];function r(d){const c=d.replace(/\s/g,"");n.current.includes(c)||n.current.push(c),s.current.value=""}function a(){n.current=[]}return t.jsxs("div",{children:[t.jsx("dl",{hidden:!i.length,children:t.jsxs("div",{children:[t.jsx("dt",{children:"Applied Gift Card(s)"}),t.jsx(C,{children:t.jsxs("div",{className:"cart-discount",children:[t.jsx("code",{children:i==null?void 0:i.join(", ")})," ",t.jsx("button",{onSubmit:()=>a,children:"Remove"})]})})]})}),t.jsx(C,{giftCardCodes:n.current,saveAppliedCode:r,children:t.jsxs("div",{children:[t.jsx("input",{type:"text",name:"giftCardCode",placeholder:"Gift card code",ref:s})," ",t.jsx("button",{type:"submit",children:"Apply"})]})})]})}function C({giftCardCodes:e,saveAppliedCode:n,children:s}){return t.jsx(o,{route:"/cart",action:o.ACTIONS.GiftCardCodesUpdate,inputs:{giftCardCodes:e||[]},children:i=>{var a;const r=(a=i.formData)==null?void 0:a.get("giftCardCode");return r&&n&&n(r),s}})}function E({layout:e,cart:n}){var c,h,x,u,l;const s=v(n),i=!!((h=(c=s==null?void 0:s.lines)==null?void 0:c.nodes)!=null&&h.length),a=`cart-main ${s&&!!((u=(x=s==null?void 0:s.discountCodes)==null?void 0:x.filter(j=>j.applicable))!=null&&u.length)?"with-discount":""}`,d=(s==null?void 0:s.totalQuantity)>0;return t.jsxs("div",{className:a,children:[t.jsx(S,{hidden:i,layout:e}),t.jsxs("div",{className:"cart-details",children:[t.jsx("div",{"aria-labelledby":"cart-lines",children:t.jsx("ul",{children:(((l=s==null?void 0:s.lines)==null?void 0:l.nodes)??[]).map(j=>t.jsx(D,{line:j,layout:e},j.id))})}),d&&t.jsx(R,{cart:s,layout:e})]})]})}function S({hidden:e=!1}){const{close:n}=y();return t.jsxs("div",{hidden:e,children:[t.jsx("br",{}),t.jsx("p",{children:"Looks like you haven’t added anything yet, let’s get you started!"}),t.jsx("br",{}),t.jsx(b,{to:"/collections",onClick:n,prefetch:"viewport",children:"Continue shopping →"})]})}export{E as C};