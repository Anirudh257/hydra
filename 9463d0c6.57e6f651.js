(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{204:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var i=n(2),a=n(10),r=(n(0),n(249)),o={id:"contributing",title:"Contributing",sidebar_label:"Contributing"},l={id:"development/contributing",isDocsHomePage:!1,title:"Contributing",description:"This guide assumes you have forked and checked-out the repository.",source:"@site/docs/development/contributing.md",permalink:"/docs/next/development/contributing",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/development/contributing.md",version:"next",lastUpdatedBy:"Shagun Sodhani",lastUpdatedAt:1592808227,sidebar_label:"Contributing",sidebar:"docs",previous:{title:"Ray example",permalink:"/docs/next/experimental/ray_example"},next:{title:"Release process",permalink:"/docs/next/development/release"},latestVersionMainDocPermalink:"/docs/intro"},c=[{value:"Environment setup",id:"environment-setup",children:[]},{value:"Nox",id:"nox",children:[]},{value:"Code style guide",id:"code-style-guide",children:[]},{value:"Testing",id:"testing",children:[{value:"With pytest",id:"with-pytest",children:[]},{value:"With nox",id:"with-nox",children:[]}]},{value:"NEWS Entries",id:"news-entries",children:[{value:"Contents of a NEWS entry",id:"contents-of-a-news-entry",children:[]}]}],s={rightToc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This guide assumes you have forked and checked-out the repository.\nIt is recommended that you install Hydra in a virtual environment like conda or virtualenv."),Object(r.b)("h3",{id:"environment-setup"},"Environment setup"),Object(r.b)("p",null,"Install ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://docs.conda.io/en/latest/miniconda.html"}),"Miniconda")," and create an empty Conda environment with:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"conda create -n hydra38 python=3.8 -y\n")),Object(r.b)("div",{class:"alert alert--info",role:"alert"},Object(r.b)("strong",null,"NOTE"),": The core Hydra framework supports Python 3.6 or newer. You may need to create additional environments for different Python versions if CI detect issues on supported version of Python."),Object(r.b)("br",null),Object(r.b)("p",null,"Activate the environment:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"conda activate hydra38\n")),Object(r.b)("p",null,"From the source tree, install Hydra in development mode with the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"pip install -r requirements/dev.txt -e .\n")),Object(r.b)("h2",{id:"nox"},"Nox"),Object(r.b)("p",null,"Hydra is using a test automation tool called ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/theacodes/nox"}),"nox")," to manage tests, linting, code coverage etc.\n",Object(r.b)("inlineCode",{parentName:"p"},"nox")," will run all the configured sessions. You can see the full list of nox sessions with ",Object(r.b)("inlineCode",{parentName:"p"},"nox -l")," and run specific sessions\nwith ",Object(r.b)("inlineCode",{parentName:"p"},"nox -s NAME")," (you may need to quote the session name in some cases)"),Object(r.b)("h2",{id:"code-style-guide"},"Code style guide"),Object(r.b)("p",null,"The code need to pass verification by the following tools:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"black .")," : Automatic code formatting for Python"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"flake8")," : PEP8 compliance checker for Python, this includes copyright header verification"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"isort .")," : Ensure imports are sorted properly"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"mypy --strict .")," : Ensures code passes strict type checking"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"yamllint .")," : Ensures that yaml files are syntactically correct and properly indented.")),Object(r.b)("p",null,"The easiest way to run the required verifications is: "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"nox -s lint")," : for the Hydra core"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"nox -s lint_plugins")," : for the included plugins")),Object(r.b)("p",null,"isort is a bit tricky to run for plugins. the best way to get it to sort the plugins imports is with the FIX environment\nvariable:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"$ FIX=1 nox -s lint_plugins\n")),Object(r.b)("p",null,"It is also recommended that you install pre-commit hooks (use ",Object(r.b)("inlineCode",{parentName:"p"},"pre-commit install"),").\npre-commit will execute some of the above tets when you commit your code locally.\nYou can disable it by appending ",Object(r.b)("inlineCode",{parentName:"p"},"-n")," to your commit command: ",Object(r.b)("inlineCode",{parentName:"p"},"git commit -am wip -n")),Object(r.b)("p",null,"Pull requests that does not lint will fail the automated testing."),Object(r.b)("h2",{id:"testing"},"Testing"),Object(r.b)("h3",{id:"with-pytest"},"With pytest"),Object(r.b)("p",null,"Use ",Object(r.b)("inlineCode",{parentName:"p"},"pytest")," at the repository root to run all the Hydra core tests.\nTo run the tests of individual plugins, use ",Object(r.b)("inlineCode",{parentName:"p"},"pytest plugins/NAME"),"."),Object(r.b)("div",{class:"alert alert--info",role:"alert"},Object(r.b)("strong",null,"NOTE"),": Some plugins support fewer versions of Python than the Hydra core."),Object(r.b)("h3",{id:"with-nox"},"With nox"),Object(r.b)("p",null,"See ",Object(r.b)("inlineCode",{parentName:"p"},"nox -l"),". a few examples:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"nox -s test_core")," will test Hydra core on all supported Python versions"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},'nox -s "test_core-3.6(pip install)"')," : Test on Python 3.6 with ",Object(r.b)("inlineCode",{parentName:"li"},"pip install")," as installation method"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},'nox -s "test_plugins-3.8(pip install -e)"')," : Test plugins on Python 3.8 with ",Object(r.b)("inlineCode",{parentName:"li"},"pip install -e")," as installation method")),Object(r.b)("h2",{id:"news-entries"},"NEWS Entries"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"NEWS.rst")," file is managed using ",Object(r.b)("inlineCode",{parentName:"p"},"towncrier")," and all non trivial changes\nmust be accompanied by a news entry."),Object(r.b)("p",null,"To add an entry to the news file, first you need to have created an issue\ndescribing the change you want to make. A Pull Request itself ",Object(r.b)("em",{parentName:"p"},"may")," function as\nsuch, but it is preferred to have a dedicated issue (for example, in case the\nPR ends up rejected due to code quality reasons)."),Object(r.b)("p",null,"Once you have an issue or pull request, you take the number and you create a\nfile inside of the ",Object(r.b)("inlineCode",{parentName:"p"},"news/")," directory named after that issue number with one of the following extensions:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"api_change")," : API Change (Renames, deprecations and removals)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"feature")," : Addition of a new feature"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"bugfix")," : Fixing of a bug"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"docs")," : Addition or updates to documentation"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"plugin")," : Addition of changes to a plugin"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"config")," : Changes or addition to the configuration structure"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"maintenance")," : Changes that improve maintainability of the code")),Object(r.b)("p",null,"If your issue or PR number is ",Object(r.b)("inlineCode",{parentName:"p"},"1234")," and this change is fixing a bug, then you would\ncreate a file ",Object(r.b)("inlineCode",{parentName:"p"},"news/1234.bugfix"),". PRs can span multiple categories by creating\nmultiple files (for instance, if you added a feature and deprecated/removed the\nold feature at the same time, you would create ",Object(r.b)("inlineCode",{parentName:"p"},"news/NNNN.feature")," and\n",Object(r.b)("inlineCode",{parentName:"p"},"news/NNNN.api_change"),"). Likewise if a PR touches multiple issues/PRs you may\ncreate a file for each of them with the exact same contents and Towncrier will\ndeduplicate them."),Object(r.b)("h3",{id:"contents-of-a-news-entry"},"Contents of a NEWS entry"),Object(r.b)("p",null,"The contents of this file is markdown formatted text that will be used\nas the content of the news file entry. You do not need to reference the issue\nor PR numbers here as towncrier will automatically add a reference to all of\nthe affected issues when rendering the news file."),Object(r.b)("p",null,"In order to maintain a consistent style in the ",Object(r.b)("inlineCode",{parentName:"p"},"NEWS.md"),' file, it is\npreferred to keep the news entry to the point, in sentence case, shorter than\n80 characters and in an imperative tone -- an entry should complete the sentence\n"This change will ...". In rare cases, where one line is not enough, use a\nsummary line in an imperative tone followed by a blank line separating it\nfrom a description of the feature/change in one or more paragraphs, each wrapped\nat 80 characters. Remember that a news entry is meant for end users and should\nonly contain details relevant to an end user.'))}b.isMDXComponent=!0},249:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),u=i,m=p["".concat(o,".").concat(u)]||p[u]||d[u]||r;return n?a.a.createElement(m,l(l({ref:t},s),{},{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);