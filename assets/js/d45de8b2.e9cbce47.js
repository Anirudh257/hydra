(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{236:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return i})),a.d(n,"metadata",(function(){return o})),a.d(n,"toc",(function(){return c})),a.d(n,"default",(function(){return p}));var t=a(3),r=a(8),l=(a(0),a(278)),i={id:"joblib_launcher",title:"Joblib Launcher plugin",sidebar_label:"Joblib Launcher plugin"},o={unversionedId:"plugins/joblib_launcher",id:"version-1.0/plugins/joblib_launcher",isDocsHomePage:!1,title:"Joblib Launcher plugin",description:"PyPI",source:"@site/versioned_docs/version-1.0/plugins/joblib_launcher.md",slug:"/plugins/joblib_launcher",permalink:"/docs/plugins/joblib_launcher",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.0/plugins/joblib_launcher.md",version:"1.0",lastUpdatedBy:"mhnatiuk",lastUpdatedAt:1618676935,formattedLastUpdatedAt:"4/17/2021",sidebar_label:"Joblib Launcher plugin",sidebar:"version-1.0/docs",previous:{title:"Colorlog plugin",permalink:"/docs/plugins/colorlog"},next:{title:"Ray Launcher plugin",permalink:"/docs/plugins/ray_launcher"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]}],b={toc:c};function p(e){var n=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(t.a)({},b,a,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://pypi.org/project/hydra-joblib-launcher/"},Object(l.b)("img",{parentName:"a",src:"https://img.shields.io/pypi/v/hydra-joblib-launcher",alt:"PyPI"})),"\n",Object(l.b)("img",{parentName:"p",src:"https://img.shields.io/pypi/l/hydra-joblib-launcher",alt:"PyPI - License"}),"\n",Object(l.b)("img",{parentName:"p",src:"https://img.shields.io/pypi/pyversions/hydra-joblib-launcher",alt:"PyPI - Python Version"}),"\n",Object(l.b)("a",{parentName:"p",href:"https://pypistats.org/packages/hydra-joblib-launcher"},Object(l.b)("img",{parentName:"a",src:"https://img.shields.io/pypi/dm/hydra-joblib-launcher.svg",alt:"PyPI - Downloads"})),"\n",Object(l.b)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/plugins/hydra_joblib_launcher/example"},Object(l.b)("img",{parentName:"a",src:"https://img.shields.io/badge/-Example%20application-informational",alt:"Example application"})),"\n",Object(l.b)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/plugins/hydra_joblib_launcher"},Object(l.b)("img",{parentName:"a",src:"https://img.shields.io/badge/-Plugin%20source-informational",alt:"Plugin source"}))),Object(l.b)("p",null,"The Joblib Launcher plugin provides a launcher for parallel tasks based on ",Object(l.b)("a",{parentName:"p",href:"https://joblib.readthedocs.io/en/latest/parallel.html"},Object(l.b)("inlineCode",{parentName:"a"},"Joblib.Parallel")),"."),Object(l.b)("h3",{id:"installation"},"Installation"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-commandline"},"pip install hydra-joblib-launcher --upgrade\n")),Object(l.b)("h3",{id:"usage"},"Usage"),Object(l.b)("p",null,"Once installed, add ",Object(l.b)("inlineCode",{parentName:"p"},"hydra/launcher=joblib")," to your command line. Alternatively, override ",Object(l.b)("inlineCode",{parentName:"p"},"hydra/launcher")," in your config:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - hydra/launcher: joblib\n")),Object(l.b)("p",null,"By default, process-based parallelism using all available CPU cores is used. By overriding the default configuration, it is e.g. possible limit the number of parallel executions."),Object(l.b)("p",null,"The JobLibLauncherConf backing the config is defined ",Object(l.b)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/blob/master/plugins/hydra_joblib_launcher/hydra_plugins/hydra_joblib_launcher/config.py"},"here"),":"),Object(l.b)("p",null,"You can discover the Joblib Launcher parameters with:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="$ python your_app.py hydra/launcher=joblib --cfg hydra -p hydra.launcher"',title:'"$',python:!0,"your_app.py":!0,"hydra/launcher":"joblib","--cfg":!0,hydra:!0,"-p":!0,'hydra.launcher"':!0},"# @package hydra.launcher\n_target_: hydra_plugins.hydra_joblib_launcher.joblib_launcher.JoblibLauncher\nn_jobs: 10\nbackend: null\nprefer: processes\nrequire: null\nverbose: 0\ntimeout: null\npre_dispatch: 2*n_jobs\nbatch_size: auto\ntemp_folder: null\nmax_nbytes: null\nmmap_mode: r\n")),Object(l.b)("p",null,"See ",Object(l.b)("a",{parentName:"p",href:"https://joblib.readthedocs.io/en/latest/parallel.html"},Object(l.b)("inlineCode",{parentName:"a"},"Joblib.Parallel")," documentation")," for full details about the parameters above."),Object(l.b)("div",{class:"alert alert--info",role:"alert"},"NOTE: The only supported JobLib backend is Loky (process-based parallelism)."),Object(l.b)("br",null),Object(l.b)("p",null,"An ",Object(l.b)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/plugins/hydra_joblib_launcher/example"},"example application")," using this launcher is provided in the plugin repository."),Object(l.b)("p",null,"Starting the app with ",Object(l.b)("inlineCode",{parentName:"p"},"python my_app.py --multirun task=1,2,3,4,5")," will launch five parallel executions:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-text"},"$ python my_app.py --multirun task=1,2,3,4,5\n[HYDRA] Joblib.Parallel(n_jobs=-1,verbose=0,timeout=None,pre_dispatch=2*n_jobs,batch_size=auto,temp_folder=None,max_nbytes=None,mmap_mode=r,backend=loky) is launching 5 jobs\n[HYDRA] Launching jobs, sweep output dir : multirun/2020-02-18/10-00-00\n[__main__][INFO] - Process ID 14336 executing task 2 ...\n[__main__][INFO] - Process ID 14333 executing task 1 ...\n[__main__][INFO] - Process ID 14334 executing task 3 ...\n[__main__][INFO] - Process ID 14335 executing task 4 ...\n[__main__][INFO] - Process ID 14337 executing task 5 ...\n")))}p.isMDXComponent=!0},278:function(e,n,a){"use strict";a.d(n,"a",(function(){return s})),a.d(n,"b",(function(){return d}));var t=a(0),r=a.n(t);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function c(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),p=function(e){var n=r.a.useContext(b),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},s=function(e){var n=p(e.components);return r.a.createElement(b.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},h=r.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,l=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(a),h=t,d=s["".concat(i,".").concat(h)]||s[h]||u[h]||l;return a?r.a.createElement(d,o(o({ref:n},b),{},{components:a})):r.a.createElement(d,o({ref:n},b))}));function d(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=a.length,i=new Array(l);i[0]=h;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:t,i[1]=o;for(var b=2;b<l;b++)i[b]=a[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);