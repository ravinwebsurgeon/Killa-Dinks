import{j as e}from"./jsx-runtime-Dt5Dsy05.js";import{j as l}from"./index-DAtz4MM6.js";import{S as n,a as s}from"./SearchResults-BLeJwHc4.js";import{u as d}from"./components-1kEx_GL1.js";import"./search-DOeYwaXi.js";import"./Image-DLSwqI1b.js";import"./Money-D-ynzVoa.js";const g=()=>[{title:"Hydrogen | Search"}];function v(){const{type:o,term:t,result:r,error:i}=d();return o==="predictive"?null:e.jsxs("div",{className:"search",children:[e.jsx("h1",{children:"Search"}),e.jsx(n,{children:({inputRef:a})=>e.jsxs(e.Fragment,{children:[e.jsx("input",{defaultValue:t,name:"q",placeholder:"Search…",ref:a,type:"search"})," ",e.jsx("button",{type:"submit",children:"Search"})]})}),i&&e.jsx("p",{style:{color:"red"},children:i}),!t||!(r!=null&&r.total)?e.jsx(s.Empty,{}):e.jsx(s,{result:r,term:t,children:({articles:a,pages:m,products:h,term:c})=>e.jsxs("div",{children:[e.jsx(s.Products,{products:h,term:c}),e.jsx(s.Pages,{pages:m,term:c}),e.jsx(s.Articles,{articles:a,term:c})]})}),e.jsx(l.SearchView,{data:{searchTerm:t,searchResults:r}})]})}export{v as default,g as meta};
