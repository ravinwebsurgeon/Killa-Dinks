import{j as e,r as t}from"./jsx-runtime-Dt5Dsy05.js";import{u as i,L as d,A as o}from"./components-1kEx_GL1.js";import{I as n}from"./Image-DLSwqI1b.js";import{M as m}from"./Money-D-ynzVoa.js";const f=()=>[{title:"Hydrogen | Home"}];function p(){const s=i();return e.jsxs("div",{className:"home",children:[e.jsx(c,{collection:s.featuredCollection}),e.jsx(l,{products:s.recommendedProducts})]})}function c({collection:s}){if(!s)return null;const a=s==null?void 0:s.image;return e.jsxs(d,{className:"featured-collection",to:`/collections/${s.handle}`,children:[a&&e.jsx("div",{className:"featured-collection-image",children:e.jsx(n,{data:a,sizes:"100vw"})}),e.jsx("h1",{children:s.title})]})}function l({products:s}){return console.log("products local",s),e.jsxs("div",{className:"recommended-products",children:[e.jsx("h2",{children:"Recommended Products"}),e.jsx(t.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(o,{resolve:s,children:a=>e.jsx("div",{className:"recommended-products-grid",children:a?a.products.nodes.map(r=>e.jsxs(d,{className:"recommended-product",to:`/products/${r.handle}`,children:[e.jsx(n,{data:r.images.nodes[0],aspectRatio:"1/1",sizes:"(min-width: 45em) 20vw, 50vw"}),e.jsx("h4",{children:r.title}),e.jsx("small",{children:e.jsx(m,{data:r.priceRange.minVariantPrice})})]},r.id)):null})})}),e.jsx("br",{})]})}export{p as default,f as meta};