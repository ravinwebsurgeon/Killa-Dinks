import{j as t}from"./jsx-runtime-Dt5Dsy05.js";import{u as r}from"./variants-D4GslRAx.js";import{P as n}from"./PaginatedResourceSection-BA9qz2ab.js";import{u as o,L as m}from"./components-1kEx_GL1.js";import{I as l}from"./Image-DLSwqI1b.js";import{M as c}from"./Money-D-ynzVoa.js";import"./index-DAtz4MM6.js";const v=()=>[{title:"Hydrogen | Products"}];function I(){const{products:e}=o();return t.jsxs("div",{className:"collection",children:[t.jsx("h1",{children:"Products"}),t.jsx(n,{connection:e,resourcesClassName:"products-grid",children:({node:a,index:s})=>t.jsx(d,{product:a,loading:s<8?"eager":void 0},a.id)})]})}function d({product:e,loading:a}){const s=e.variants.nodes[0],i=r(e.handle,s.selectedOptions);return t.jsxs(m,{className:"product-item",prefetch:"intent",to:i,children:[e.featuredImage&&t.jsx(l,{alt:e.featuredImage.altText||e.title,aspectRatio:"1/1",data:e.featuredImage,loading:a,sizes:"(min-width: 45em) 400px, 100vw"}),t.jsx("h4",{children:e.title}),t.jsx("small",{children:t.jsx(c,{data:e.priceRange.minVariantPrice})})]},e.id)}export{I as default,v as meta};
