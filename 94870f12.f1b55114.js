(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{89:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return o})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),c=(r(0),r(98)),l={id:"data-structures",title:"Data Structures",sidebar_label:"Data Structures",slug:"/fundamentals/data-structures"},u={unversionedId:"fundamentals/data-structures",id:"fundamentals/data-structures",isDocsHomePage:!1,title:"Data Structures",description:"List",source:"@site/docs/fundamentals/data-structures.md",slug:"/fundamentals/data-structures",permalink:"/cafe-docs/docs/fundamentals/data-structures",editUrl:"https://github.com/cafe-jvm-lang/cafe-docs/tree/master/docs/fundamentals/data-structures.md",version:"current",sidebar_label:"Data Structures",sidebar:"docs",previous:{title:"Cafe Fundamentals",permalink:"/cafe-docs/docs/fundamentals"},next:{title:"Prototypes",permalink:"/cafe-docs/docs/advanced/"}},o=[{value:"List",id:"list",children:[{value:"Subscript[]",id:"subscript",children:[]},{value:"Slice:",id:"slice",children:[]}]}],i={toc:o};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"list"},"List"),Object(c.b)("p",null,"Array-like data structure helps to store values in order."),Object(c.b)("p",null,"Example"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"var list = [10,{a:10}, [\u201cString\u201d]];\n")),Object(c.b)("h3",{id:"subscript"},"Subscript[]"),Object(c.b)("p",null,"This operation helps manipulate values in data structures.\t"),Object(c.b)("p",null,"Example"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'var a = [10, 20, 30];   \ncmd.println(a[1]); # 20 \nvar obj = {a: 10, b: [20,30] }; \ncmd.println(obj[a]);    # 10    \ncmd.println(obj[b][1]);     # 30\nvar x = {a:10};\nx["l"] = [0, [2,4,6,8], 10];\nx.l[1][0] = "new 2";\n')),Object(c.b)("h3",{id:"slice"},"Slice","[:]"),Object(c.b)("p",null,"Manipulate data structure over a range of values. "),Object(c.b)("p",null,"This operation slices data structure from ",Object(c.b)("inlineCode",{parentName:"p"},"start "),"index till ",Object(c.b)("inlineCode",{parentName:"p"},"end")," index(excluded)."),Object(c.b)("p",null,"Syntax"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"list[start: end]\n")),Object(c.b)("p",null,"Example"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"var x = {a:10};\nl = [0, [2,4,6,8], 10]; \nx[\u201cl\u201d] = l; \nx.l[0:1] = 3;       \nl[2:3] = [\u201cover\u201d, \u201cride\u201d];\n")))}s.isMDXComponent=!0},98:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),s=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=s(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=s(r),b=n,f=p["".concat(l,".").concat(b)]||p[b]||d[b]||c;return r?a.a.createElement(f,u(u({ref:t},i),{},{components:r})):a.a.createElement(f,u({ref:t},i))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,l=new Array(c);l[0]=b;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:n,l[1]=u;for(var i=2;i<c;i++)l[i]=r[i];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);