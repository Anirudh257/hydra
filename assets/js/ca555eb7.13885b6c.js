(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{234:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(8),i=(n(0),n(278)),o=n(285),c={id:"intro",title:"Overview",sidebar_label:"Introduction"},u={unversionedId:"configure_hydra/intro",id:"configure_hydra/intro",isDocsHomePage:!1,title:"Overview",description:"Many things in Hydra can be customized. This includes:",source:"@site/docs/configure_hydra/Intro.md",slug:"/configure_hydra/intro",permalink:"/docs/next/configure_hydra/intro",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/configure_hydra/Intro.md",version:"current",lastUpdatedBy:"mhnatiuk",lastUpdatedAt:1618676935,formattedLastUpdatedAt:"4/17/2021",sidebar_label:"Introduction",sidebar:"docs",previous:{title:"Read-only config",permalink:"/docs/next/patterns/write_protect_config_node"},next:{title:"job",permalink:"/docs/next/configure_hydra/job"}},s=[{value:"Runtime variables",id:"runtime-variables",children:[{value:"hydra.job:",id:"hydrajob",children:[]},{value:"hydra.runtime:",id:"hydraruntime",children:[]},{value:"Hydra resolvers",id:"hydra-resolvers",children:[]}]}],l={toc:s};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Many things in Hydra can be customized. This includes:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Launcher configurations"),Object(i.b)("li",{parentName:"ul"},"Sweeper configuration"),Object(i.b)("li",{parentName:"ul"},"Logging configuration"),Object(i.b)("li",{parentName:"ul"},"Run and Multirun output directory patterns"),Object(i.b)("li",{parentName:"ul"},"Application help (--help and --hydra-help)")),Object(i.b)("p",null,"Hydra can be customized using the same methods you are already familiar with from the tutorial.\nYou can include some Hydra config snippet in your own config to override it directly, or compose in different\nconfigurations provided by plugins or by your own code. You can also override everything in Hydra from the command\nline just like with your own configuration."),Object(i.b)("p",null,"The Hydra configuration actually lives in the same config object as your configuration, but is removed prior to running\nyour function to reduce confusion.\nYou can view the configuration with ",Object(i.b)("inlineCode",{parentName:"p"},"--cfg hydra|job|all")),Object(i.b)("p",null,"The Hydra configuration itself is composed from multiple config files. here is a partial list:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="hydra/config"',title:'"hydra/config"'},"defaults:\n  - job_logging : default     # Job's logging config\n  - launcher: basic           # Launcher config\n  - sweeper: basic            # Sweeper config\n  - output: default           # Output directory\n")),Object(i.b)("p",null,"You can view the Hydra config structure ",Object(i.b)(o.b,{to:"hydra/conf/__init__.py",mdxType:"GithubLink"},"here"),"."),Object(i.b)("p",null,"You can view the Hydra config using ",Object(i.b)("inlineCode",{parentName:"p"},"--cfg hydra"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="$ python my_app.py --cfg hydra"',title:'"$',python:!0,"my_app.py":!0,"--cfg":!0,'hydra"':!0},"hydra:\n  run:\n    dir: outputs/${now:%Y-%m-%d}/${now:%H-%M-%S}\n  sweep:\n    dir: multirun/${now:%Y-%m-%d}/${now:%H-%M-%S}\n    subdir: ${hydra.job.num}\n  launcher:\n    _target_: hydra._internal.core_plugins.basic_launcher.BasicLauncher\n  sweeper:\n    _target_: hydra._internal.core_plugins.basic_sweeper.BasicSweeper\n    max_batch_size: null\n  hydra_logging:\n    version: 1\n    formatters:\n    ...\n")),Object(i.b)("h2",{id:"runtime-variables"},"Runtime variables"),Object(i.b)("p",null,"The Hydra config is large. To reduce clutter in your own config it's being deleted from the config object\nHydra is passing to the function annotated by ",Object(i.b)("inlineCode",{parentName:"p"},"@hydra.main()"),"."),Object(i.b)("p",null,"There are two ways to access the Hydra config:"),Object(i.b)("h4",{id:"in-your-config-using-the-hydra-resolver"},"In your config, using the ",Object(i.b)("inlineCode",{parentName:"h4"},"hydra")," resolver:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"config_name: ${hydra:job.name}\n")),Object(i.b)("p",null,"Pay close attention to the syntax: The resolver name is ",Object(i.b)("inlineCode",{parentName:"p"},"hydra"),", and the ",Object(i.b)("inlineCode",{parentName:"p"},"key")," is passed after the colon."),Object(i.b)("h4",{id:"in-your-code-using-the-hydraconfig-singleton"},"In your code, using the HydraConfig singleton."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"from hydra.core.hydra_config import HydraConfig\n\n@hydra.main()\ndef my_app(cfg: DictConfig) -> None:\n    print(HydraConfig.get().job.name)\n")),Object(i.b)("p",null,"The following variables are populated at runtime.  "),Object(i.b)("h3",{id:"hydrajob"},"hydra.job:"),Object(i.b)("p",null,"Fields under ",Object(i.b)("strong",{parentName:"p"},"hydra.job"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"name")," : Job name, defaults to the Python file name without the suffix. can be overridden."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"override_dirname")," : Pathname derived from the overrides for this job"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"id")," : Job ID in the underlying jobs system (SLURM etc)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"num")," : job serial number in sweep"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"config_name")," : The name of the config used by the job (Output only)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"env_set"),": Environment variable to set for the launched job"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"env_copy"),": Environment variable to copy from the launching machine"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"config"),": fine-grained configuration for job")),Object(i.b)("h3",{id:"hydraruntime"},"hydra.runtime:"),Object(i.b)("p",null,"Fields under ",Object(i.b)("strong",{parentName:"p"},"hydra.runtime"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"version"),": Hydra's version"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"cwd"),": Original working directory the app was executed from"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"choices"),": A dictionary containing the final config group choices."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"config_sources"),": The final list of config sources used to compose the config.")),Object(i.b)("h3",{id:"hydra-resolvers"},"Hydra resolvers"),Object(i.b)("p",null,"Hydra supports several ",Object(i.b)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/blob/master/hydra/core/utils.py"},"OmegaConf resolvers")," by default."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"hydra"),": Interpolates into the ",Object(i.b)("inlineCode",{parentName:"p"},"hydra")," config node. e.g. Use ",Object(i.b)("inlineCode",{parentName:"p"},"${hydra:job.name}")," to get the Hydra job name."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"now"),": Creates a string representing the current time using\n",Object(i.b)("a",{parentName:"p",href:"https://docs.python.org/3/library/datetime.html#strftime-and-strptime-behavior"},"strftime"),".\ne.g. for formatting the time you can use something like",Object(i.b)("inlineCode",{parentName:"p"},"${now:%H-%M-%S}"),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"python_version"),": Return a string representing the runtime python version by calling ",Object(i.b)("inlineCode",{parentName:"p"},"sys.version_info"),".\nTakes an optional argument of a string with the values major, minor or macro.\ne.g:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"default: ${python_version:}          # 3.8\nmajor:   ${python_version:major}     # 3\nminor:   ${python_version:minor}     # 3.8\nmicro:   ${python_version:micro}     # 3.8.2\n")),Object(i.b)("p",null,"You can learn more about OmegaConf ",Object(i.b)("a",{class:"external",href:"https://omegaconf.readthedocs.io/en/latest/usage.html#access-and-manipulation",target:"_blank"},"here"),"."))}d.isMDXComponent=!0},278:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=l(n),p=r,f=d["".concat(o,".").concat(p)]||d[p]||b[p]||i;return n?a.a.createElement(f,c(c({ref:t},s),{},{components:n})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},279:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},280:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(11),o=n(279),c=n(7),u=Object(r.createContext)({collectLink:function(){}}),s=n(281),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.a=function(e){var t,n,d,b=e.isNavLink,p=e.to,f=e.href,g=e.activeClassName,m=e.isActive,h=e["data-noBrokenLinkCheck"],y=e.autoAddBaseUrl,v=void 0===y||y,j=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),O=Object(s.b)().withBaseUrl,w=Object(r.useContext)(u),N=p||f,_=Object(o.a)(N),D=null==N?void 0:N.replace("pathname://",""),A=void 0!==D?(n=D,v&&function(e){return e.startsWith("/")}(n)?O(n):n):void 0,x=Object(r.useRef)(!1),C=b?i.e:i.c,P=c.default.canUseIntersectionObserver;Object(r.useEffect)((function(){return!P&&_&&window.docusaurus.prefetch(A),function(){P&&d&&d.disconnect()}}),[A,P,_]);var V=null!==(t=null==A?void 0:A.startsWith("#"))&&void 0!==t&&t,k=!A||!_||V;return A&&_&&!V&&!h&&w.collectLink(A),k?a.a.createElement("a",Object.assign({href:A},N&&!_&&{target:"_blank",rel:"noopener noreferrer"},j)):a.a.createElement(C,Object.assign({},j,{onMouseEnter:function(){x.current||(window.docusaurus.preload(A),x.current=!0)},innerRef:function(e){var t,n;P&&e&&_&&(t=e,n=function(){window.docusaurus.prefetch(A)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),n())}))}))).observe(t))},to:A||""},b&&{isActive:m,activeClassName:g}))}},281:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r=n(10),a=n(279);function i(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,c=void 0!==o&&o,u=i.absolute,s=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(c)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+l:l}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},282:function(e,t,n){try{e.exports=n(283)}catch(a){var r={};e.exports={useAllDocsData:function(){return r},useActivePluginAndVersion:function(){}}}},283:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var r=n(23),a=n(38),i=n(284);t.useAllDocsData=function(){return a.useAllPluginInstancesData("docusaurus-plugin-content-docs")},t.useDocsData=function(e){return a.usePluginData("docusaurus-plugin-content-docs",e)},t.useActivePlugin=function(e){void 0===e&&(e={});var n=t.useAllDocsData(),a=r.useLocation().pathname;return i.getActivePlugin(n,a,e)},t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var n=t.useActivePlugin(e),a=r.useLocation().pathname;if(n)return{activePlugin:n,activeVersion:i.getActiveVersion(n.pluginData,a)}},t.useVersions=function(e){return t.useDocsData(e).versions},t.useLatestVersion=function(e){var n=t.useDocsData(e);return i.getLatestVersion(n)},t.useActiveVersion=function(e){var n=t.useDocsData(e),a=r.useLocation().pathname;return i.getActiveVersion(n,a)},t.useActiveDocContext=function(e){var n=t.useDocsData(e),a=r.useLocation().pathname;return i.getActiveDocContext(n,a)},t.useDocVersionSuggestions=function(e){var n=t.useDocsData(e),a=r.useLocation().pathname;return i.getDocVersionSuggestions(n,a)}},284:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var r=n(23);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});var a=Object.entries(e).find((function(e){e[0];var n=e[1];return!!r.matchPath(t,{path:n.path,exact:!1,strict:!1})})),i=a?{pluginId:a[0],pluginData:a[1]}:void 0;if(!i&&n.failfast)throw new Error("Can't find active docs plugin for pathname="+t+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return i},t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))},t.getActiveVersion=function(e,n){var a=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==a})),[a]).find((function(e){return!!r.matchPath(n,{path:e.path,exact:!1,strict:!1})}))},t.getActiveDocContext=function(e,n){var a,i,o=t.getActiveVersion(e,n),c=null==o?void 0:o.docs.find((function(e){return!!r.matchPath(n,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:o,activeDoc:c,alternateDocVersions:c?(a=c.id,i={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===a&&(i[e.name]=t)}))})),i):{}}},t.getDocVersionSuggestions=function(e,n){var r=t.getLatestVersion(e),a=t.getActiveDocContext(e,n),i=a.activeVersion!==r;return{latestDocSuggestion:i?null==a?void 0:a.alternateDocVersions[r.name]:void 0,latestVersionSuggestion:i?r:void 0}}},285:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return l}));var r=n(3),a=n(0),i=n.n(a),o=n(280),c=n(10),u=n(282);function s(e){return i.a.createElement(o.a,Object(r.a)({},e,{to:(t=e.to,a=Object(u.useActiveVersion)(),Object(c.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!==(n=null==a?void 0:a.name)&&void 0!==n?n:"current"]+t),target:"_blank"}));var t,n,a}function l(e){var t,n=null!==(t=e.text)&&void 0!==t?t:"Example";return i.a.createElement(s,e,i.a.createElement("span",null,"\xa0"),i.a.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}}}]);