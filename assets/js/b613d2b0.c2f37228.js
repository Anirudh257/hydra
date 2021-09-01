(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2339],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return u},kt:function(){return d}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=p(t),d=o,f=g["".concat(c,".").concat(d)]||g[d]||s[d]||l;return t?n.createElement(f,a(a({ref:r},u),{},{components:t})):n.createElement(f,a({ref:r},u))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=g;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<l;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},5154:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return g}});var n=t(2122),o=t(9756),l=(t(7294),t(3905)),a=["components"],i={id:"colorlog",title:"Colorlog plugin",sidebar_label:"Colorlog plugin"},c=void 0,p={unversionedId:"plugins/colorlog",id:"version-0.11/plugins/colorlog",isDocsHomePage:!1,title:"Colorlog plugin",description:"Adds colorlog colored logs for hydra/joblogging and hydra/hydralogging.",source:"@site/versioned_docs/version-0.11/plugins/colorlog.md",sourceDirName:"plugins",slug:"/plugins/colorlog",permalink:"/docs/0.11/plugins/colorlog",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-0.11/plugins/colorlog.md",version:"0.11",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1630464867,formattedLastUpdatedAt:"9/1/2021",frontMatter:{id:"colorlog",title:"Colorlog plugin",sidebar_label:"Colorlog plugin"},sidebar:"version-0.11/docs",previous:{title:"Customizing Application's help",permalink:"/docs/0.11/configure_hydra/app_help"},next:{title:"Application packaging",permalink:"/docs/0.11/advanced/app_packaging"}},u=[],s={toc:u};function g(e){var r=e.components,i=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,n.Z)({},s,i,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Adds ",(0,l.kt)("a",{class:"external",href:"https://github.com/borntyping/python-colorlog",target:"_blank"},"colorlog")," colored logs for ",(0,l.kt)("inlineCode",{parentName:"p"},"hydra/job_logging")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"hydra/hydra_logging"),"."),(0,l.kt)("p",null,"Install with "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pip install hydra_colorlog\n")),(0,l.kt)("p",null,"Once installed, override ",(0,l.kt)("inlineCode",{parentName:"p"},"hydra/job_logging")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"hydra/hydra_logging")," your config:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - hydra/job_logging: colorlog\n  - hydra/hydra_logging: colorlog\n")),(0,l.kt)("p",null,"See included ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/0.11_branch/plugins/hydra_colorlog/example"},"example"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Colored log output",src:t(98).Z})))}g.isMDXComponent=!0},98:function(e,r,t){"use strict";r.Z=t.p+"assets/images/colorlog-b20147697b9d16362f62a5d0bb58347f.png"}}]);