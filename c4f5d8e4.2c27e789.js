(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{101:function(e,t,n){"use strict";const a=(e,{target:t=document.body}={})=>{const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch(s){}return n.remove(),o&&(r.removeAllRanges(),r.addRange(o)),a&&a.focus(),l};e.exports=a,e.exports.default=a},102:function(e,t){function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,r,o]=t;if(a&&o){a=parseInt(a),o=parseInt(o);const e=a<o?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(o+=e);for(let t=a;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},103:function(e,t,n){"use strict";var a=n(3),r=n(0),o=n.n(r),l=n(91),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},c={Prism:n(23).a,theme:s};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var d=/\r\n|\r|\n/,m=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},g=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=u({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=u({},n,{backgroundColor:null}),r};function f(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var h=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?g(e.theme,e.language):void 0;return t.themeDict=n})),i(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=u({},f(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==r&&(o.style=void 0!==o.style?u({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),i(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var l=a?{display:"inline-block"}:{},s=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(s))}})),i(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,l=u({},f(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(l.style=void 0!==l.style?u({},l.style,r):r),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l})),i(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var o=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,l=0,s=[],c=[s];l>-1;){for(;(o=a[l]++)<r[l];){var i=void 0,u=t[l],g=n[l][o];if("string"==typeof g?(u=l>0?u:["plain"],i=g):(u=p(u,g.type),g.alias&&(u=p(u,g.alias)),i=g.content),"string"==typeof i){var f=i.split(d),h=f.length;s.push({types:u,content:f[0]});for(var y=1;y<h;y++)m(s),c.push(s=[]),s.push({types:u,content:f[y]})}else l++,t.push(u),n.push(i),a.push(0),r.push(i.length)}l--,t.pop(),n.pop(),a.pop(),r.pop()}return m(s),c}(void 0!==l?this.tokenize(t,a,l,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),y=n(101),v=n.n(y),b=n(102),E=n.n(b),k={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},w=n(98),j=n(90),O=function(){var e=Object(j.useThemeConfig)().prism,t=Object(w.a)().isDarkTheme,n=e.theme||k,a=e.darkTheme||n;return t?a:n},N=n(56),x=n.n(N),C=/{([\d,-]+)}/,S=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")},T=/(?:title=")(.*)(?:")/;t.a=function(e){var t=e.children,n=e.className,s=e.metastring,i=Object(j.useThemeConfig)().prism,u=Object(r.useState)(!1),d=u[0],m=u[1],p=Object(r.useState)(!1),g=p[0],f=p[1];Object(r.useEffect)((function(){f(!0)}),[]);var y=Object(r.useRef)(null),b=[],k="",w=O(),N=Array.isArray(t)?t.join(""):t;if(s&&C.test(s)){var L=s.match(C)[1];b=E()(L).filter((function(e){return e>0}))}s&&T.test(s)&&(k=s.match(T)[1]);var P=n&&n.replace(/language-/,"");!P&&i.defaultLanguage&&(P=i.defaultLanguage);var z=N.replace(/\n$/,"");if(0===b.length&&void 0!==P){for(var I,W="",B=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return S(["js","jsBlock"]);case"jsx":case"tsx":return S(["js","jsBlock","jsx"]);case"html":return S(["js","jsBlock","html"]);case"python":case"py":return S(["python"]);default:return S()}}(P),D=N.replace(/\n$/,"").split("\n"),F=0;F<D.length;){var H=F+1,_=D[F].match(B);if(null!==_){switch(_.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":W+=H+",";break;case"highlight-start":I=H;break;case"highlight-end":W+=I+"-"+(H-1)+","}D.splice(F,1)}else F+=1}b=E()(W),z=D.join("\n")}var R=function(){v()(z),m(!0),setTimeout((function(){return m(!1)}),2e3)};return o.a.createElement(h,Object(a.a)({},c,{key:String(g),theme:w,code:z,language:P}),(function(e){var t,n=e.className,r=e.style,s=e.tokens,c=e.getLineProps,i=e.getTokenProps;return o.a.createElement(o.a.Fragment,null,k&&o.a.createElement("div",{style:r,className:x.a.codeBlockTitle},k),o.a.createElement("div",{className:x.a.codeBlockContent},o.a.createElement("div",{tabIndex:0,className:Object(l.a)(n,x.a.codeBlock,"thin-scrollbar",(t={},t[x.a.codeBlockWithTitle]=k,t))},o.a.createElement("div",{className:x.a.codeBlockLines,style:r},s.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=c({line:e,key:t});return b.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),o.a.createElement("div",Object(a.a)({key:t},n),e.map((function(e,t){return o.a.createElement("span",Object(a.a)({key:t},i({token:e,key:t})))})))})))),o.a.createElement("button",{ref:y,type:"button","aria-label":"Copy code to clipboard",className:Object(l.a)(x.a.copyButton),onClick:R},d?"Copied":"Copy")))}))}},87:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(91),l=n(100),s=(n(93),n(22)),c=(n(94),n(78),n(79)),i=n.n(c);var u=function(e){var t=e.height||100;return r.a.createElement("div",{style:{height:t}})},d=n(2),m=n(80),p=n.n(m);var g=function(e){var t=e.to,n=e.children,a=(e.className,Object(d.k)());return r.a.createElement("button",{className:Object(o.a)(p.a.Button),onClick:function(){t.startsWith("http")?window.open(t,"_blank"):a.push(t)}},n)},f=n(81),h=n.n(f);var y=function(e){var t=e.version,n=e.links,a=e.defaultLink,o=[];for(var l in n)o.push(r.a.createElement("li",{key:l},r.a.createElement("a",{className:"dropdown__link",href:n[l]},l)));return r.a.createElement("div",{className:h.a.Container},r.a.createElement("a",{className:h.a.DownloadLeftButton,href:a},r.a.createElement("div",{className:h.a.DownloadLeftButtonContainer},r.a.createElement("div",{className:h.a.Version},t),r.a.createElement("div",{className:h.a.DownloadIcon}))),r.a.createElement("div",{className:"dropdown dropdown--hoverable dropdown--right"},r.a.createElement("div",{className:h.a.Dropdown}),r.a.createElement("ul",{className:"dropdown__menu"},o)))};var v=function(){var e=Object(s.default)().siteConfig,t=Object(a.useState)(null),n=t[0],o=t[1],l=Object(a.useState)(!1),c=l[0],d=l[1],m=Object(a.useState)({zip:"",exe:""}),p=m[0],f=m[1],h=Object(a.useState)(null),v=h[0],b=h[1],E=Object(a.useState)(null),k=E[0],w=E[1],j=r.a.createElement(r.a.Fragment,null);if(Object(a.useEffect)((function(){var e,t,n;if(b((e=window.navigator.userAgent,t=window.navigator.platform,n=null,-1!==["Macintosh","MacIntel","MacPPC","Mac68K"].indexOf(t)?n="Mac OS":-1!==["iPhone","iPad","iPod"].indexOf(t)?n="iOS":-1!==["Win32","Win64","Windows","WinCE"].indexOf(t)?n="Windows":/Android/.test(e)?n="Android":!n&&/Linux/.test(t)&&(n="Linux"),n)),sessionStorage.getItem("exists")){w(localStorage.getItem("cafe-dwn-version"));var a={};a.exe=localStorage.getItem("exe"),a.zip=localStorage.getItem("zip"),f(a),d(!0)}else fetch("https://api.github.com/repos/cafe-jvm-lang/cafe/releases/latest").then((function(e){return e.json()})).then((function(e){var t={};e.assets.forEach((function(e){t[e.name.split(".").pop()]=e.browser_download_url})),w(e.tag_name),f(t),d(!0)}),(function(e){o(!0)}))}),[]),n){var O=localStorage.getItem("cafe-dwn-version"),N=localStorage.getItem("exe"),x=localStorage.getItem("zip");N&&x&&(w(O),f({exe:N,zip:x}))}if(c){!function(e,t){localStorage.setItem("cafe-dwn-version",e),localStorage.setItem("exe",t.exe),localStorage.setItem("zip",t.zip),sessionStorage.setItem("exists","true")}(k,p);var C={},S=p.zip;"Windows"===v&&(C["Windows (.exe) "]=p.exe,S=p.exe),C["Portable (.zip)"]=p.zip,j=r.a.createElement(y,{version:k,links:C,defaultLink:S})}return r.a.createElement("div",{className:i.a.Container},r.a.createElement("div",{style:{padding:"5%"}},r.a.createElement("div",{className:i.a.HeaderTitle},e.tagline),r.a.createElement(u,{height:50}),r.a.createElement("div",{className:i.a.ButtonsContainer},r.a.createElement("div",{style:{marginRight:"5%"}},r.a.createElement(g,{to:"docs/quick-start/"},"Get Started")),j)))},b=n(82),E=n.n(b),k=n(83),w=n.n(k),j=n(84),O=n.n(j),N=n(103);var x=function(e){return r.a.createElement("div",{className:O.a.Container},r.a.createElement("div",{className:O.a.FeatureHeader},r.a.createElement("div",{className:O.a.FeatureTitle},"#class-free"),r.a.createElement(u,{height:20}),r.a.createElement("div",{className:O.a.FeatureDescription},"Cafe has only one construct: Object")),r.a.createElement(u,{height:20}),r.a.createElement("div",{className:O.a.CodeExample},r.a.createElement(N.a,{className:"javasccript"},"# A cafe object\nvar rect = { \n            width: 10, \n            height: 11 \n        }\n")))},C=Object(a.forwardRef)((function(e,t){return r.a.createElement("div",{ref:t,className:w.a.Container},r.a.createElement(x,null),r.a.createElement(x,null),r.a.createElement(x,null),r.a.createElement(x,null),r.a.createElement(x,null),r.a.createElement(x,null))}));var S=function(){var e=Object(a.useState)({windowWidth:void 0,windowHeight:void 0,scrollHeight:void 0}),t=e[0],n=e[1];return Object(a.useEffect)((function(){function e(){n({windowWidth:window.innerWidth,windowHeight:window.innerHeight,scrollHeight:document.documentElement.scrollHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),t};var T=function(){var e=Object(a.useRef)(null),t=Object(a.useRef)(null),n=Object(a.useRef)(null),o=S(),l=o.windowWidth,s=o.windowHeight,c=0;function i(){var e=window.pageYOffset||document.documentElement.scrollTop;0!=c&&(t.current.scrollLeft+=e-c),c=e}function d(t){var n=e.current.getBoundingClientRect();Math.round(n.top)===Math.round(t)&&i()}return Object(a.useEffect)((function(e){var a=t.current.scrollWidth-t.current.clientWidth+150;n.current.style.height=a+"px";var r=getComputedStyle(document.body).getPropertyValue("--ifm-navbar-height").trim().slice(0,-2);return d=d.bind(null,r),window.addEventListener("scroll",d),function(){window.removeEventListener("scroll",d)}}),[s,l]),r.a.createElement("div",{className:E.a.Container},r.a.createElement("div",{ref:e,className:E.a.Content},r.a.createElement("div",{className:E.a.HeaderContainer},r.a.createElement("div",{className:E.a.HeaderTagLine}," Why Cafe?"),r.a.createElement(u,{height:20}),r.a.createElement("div",{className:E.a.HeaderTitle}," Features")),r.a.createElement(u,{height:60}),r.a.createElement(C,{ref:t})),r.a.createElement("div",{ref:n,className:E.a.FakeContainer}))};var L=function(){return Object(s.default)().siteConfig,r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null),r.a.createElement(T,null))};r.a.Fragment,r.a.Fragment,r.a.Fragment;t.default=function(){return Object(s.default)().siteConfig,r.a.createElement(l.a,null,r.a.createElement(L,null))}}}]);