(self.webpackChunkespresso=self.webpackChunkespresso||[]).push([[922],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return y}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=i(r),y=a,d=m["".concat(u,".").concat(y)]||m[y]||s[y]||o;return r?n.createElement(d,l(l({ref:t},c),{},{components:r})):n.createElement(d,l({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1207:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return i},toc:function(){return c},default:function(){return m}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),l=["components"],p={title:"Jupyter notebooks"},u=void 0,i={unversionedId:"setup/jupyter",id:"setup/jupyter",isDocsHomePage:!1,title:"Jupyter notebooks",description:"There are several ways you can run Jupyterlab in your computer.",source:"@site/docs/setup/jupyter.md",sourceDirName:"setup",slug:"/setup/jupyter",permalink:"/espresso/setup/jupyter",editUrl:"https://github.com/pranabdas/espresso/blob/master/docs/setup/jupyter.md",version:"current",frontMatter:{title:"Jupyter notebooks"},sidebar:"docs",previous:{title:"HPC",permalink:"/espresso/setup/hpc"},next:{title:"Crystal structure",permalink:"/espresso/setup/crystal-structure"}},c=[{value:"1. Install in your computer",id:"1-install-in-your-computer",children:[]},{value:"2. Install python packages via virtualenv",id:"2-install-python-packages-via-virtualenv",children:[]},{value:"3. Run on a container",id:"3-run-on-a-container",children:[]}],s={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"There are several ways you can run Jupyterlab in your computer."),(0,o.kt)("h2",{id:"1-install-in-your-computer"},"1. Install in your computer"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install ",(0,o.kt)("a",{parentName:"li",href:"https://www.python.org"},"Python 3")," in your computer",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# on ubuntu / debian\napt install python3 python3-pip\n"))),(0,o.kt)("li",{parentName:"ul"},"Install required python packages in your computer",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip3 install --upgrade -r requirements.txt\n# or\npip3 install --upgrade numpy scipy matplotlib jupyterlab\n"))),(0,o.kt)("li",{parentName:"ul"},"Run Jupyterlab",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"jupyter-lab\n# or the classic jupyter notebook\njupyter-notebook\n")))),(0,o.kt)("h2",{id:"2-install-python-packages-via-virtualenv"},"2. Install python packages via virtualenv"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install Python 3 and virtualenv in your computer",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip3 install --upgrade virtualenv\n"))),(0,o.kt)("li",{parentName:"ul"},"create virtual environment in the project directory",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd qe-dft\nvirtualenv venv\n"))),(0,o.kt)("li",{parentName:"ul"},"activate virtual env",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"source venv/bin/activate\n"))),(0,o.kt)("li",{parentName:"ul"},"Install required python packages under virtualenv"),(0,o.kt)("li",{parentName:"ul"},"Launch Jupyterlab"),(0,o.kt)("li",{parentName:"ul"},"Once done, deactivate virtualenv",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"deactivate\n")))),(0,o.kt)("h2",{id:"3-run-on-a-container"},"3. Run on a container"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Docker")),(0,o.kt)("li",{parentName:"ul"},"Create image with Python and required packages installed",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# build using the Dockerfile included in my repo\n# adjust the Dockerfile according to your needs\ndocker build -t espresso .\n"))),(0,o.kt)("li",{parentName:"ul"},"Run a container with port forwarding",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it --rm -p 8888:8888 -v ${PWD}:/home espresso bash\n"))),(0,o.kt)("li",{parentName:"ul"},"Launch Jupyterlab")))}m.isMDXComponent=!0}}]);