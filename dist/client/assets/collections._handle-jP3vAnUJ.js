import{j as i}from"./jsx-runtime-Dt5Dsy05.js";import{j as a}from"./index-DAtz4MM6.js";import{u as o}from"./variants-D4GslRAx.js";import{P as r}from"./PaginatedResourceSection-BA9qz2ab.js";import{u as l,L as c}from"./components-1kEx_GL1.js";import{I as m}from"./Image-DLSwqI1b.js";import{M as d}from"./Money-D-ynzVoa.js";const I=({data:e})=>[{title:`Hydrogen | ${(e==null?void 0:e.collection.title)??""} Collection`}];function C(){const{collection:e}=l();return i.jsxs("div",{className:"collection",children:[i.jsx("h1",{children:e.title}),i.jsx("p",{className:"collection-description",children:e.description}),i.jsx(r,{connection:e.products,resourcesClassName:"products-grid",children:({node:t,index:n})=>i.jsx(x,{product:t,loading:n<8?"eager":void 0},t.id)}),i.jsx(a.CollectionView,{data:{collection:{id:e.id,handle:e.handle}}})]})}function x({product:e,loading:t}){const n=e.variants.nodes[0],s=o(e.handle,n.selectedOptions);return i.jsxs(c,{className:"product-item",prefetch:"intent",to:s,children:[e.featuredImage&&i.jsx(m,{alt:e.featuredImage.altText||e.title,aspectRatio:"1/1",data:e.featuredImage,loading:t,sizes:"(min-width: 45em) 400px, 100vw"}),i.jsx("h4",{children:e.title}),i.jsx("small",{children:i.jsx(d,{data:e.priceRange.minVariantPrice})})]},e.id)}export{C as default,I as meta};
