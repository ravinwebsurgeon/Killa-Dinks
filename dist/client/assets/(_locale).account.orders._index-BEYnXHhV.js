import{j as t}from"./jsx-runtime-Dt5Dsy05.js";import{P as c}from"./PaginatedResourceSection-BA9qz2ab.js";import{u as o,L as e}from"./components-1kEx_GL1.js";import{f as a}from"./index-DAtz4MM6.js";import{M as l}from"./Money-D-ynzVoa.js";const p=()=>[{title:"Orders"}];function g(){const{customer:n}=o(),{orders:s}=n;return t.jsx("div",{className:"orders",children:s.nodes.length?t.jsx(d,{orders:s}):t.jsx(i,{})})}function d({orders:n}){return t.jsx("div",{className:"acccount-orders",children:n!=null&&n.nodes.length?t.jsx(c,{connection:n,children:({node:s})=>t.jsx(u,{order:s},s.id)}):t.jsx(i,{})})}function i(){return t.jsxs("div",{children:[t.jsx("p",{children:"You haven't placed any orders yet."}),t.jsx("br",{}),t.jsx("p",{children:t.jsx(e,{to:"/collections",children:"Start Shopping →"})})]})}function u({order:n}){var r;const s=(r=a(n.fulfillments)[0])==null?void 0:r.status;return t.jsxs(t.Fragment,{children:[t.jsxs("fieldset",{children:[t.jsx(e,{to:`/account/orders/${btoa(n.id)}`,children:t.jsxs("strong",{children:["#",n.number]})}),t.jsx("p",{children:new Date(n.processedAt).toDateString()}),t.jsx("p",{children:n.financialStatus}),s&&t.jsx("p",{children:s}),t.jsx(l,{data:n.totalPrice}),t.jsx(e,{to:`/account/orders/${btoa(n.id)}`,children:"View Order →"})]}),t.jsx("br",{})]})}export{g as default,p as meta};