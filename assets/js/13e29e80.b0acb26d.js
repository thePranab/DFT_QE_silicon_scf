(self.webpackChunkespresso=self.webpackChunkespresso||[]).push([[754],{3905:function(n,e,t){"use strict";t.d(e,{Zo:function(){return c},kt:function(){return f}});var r=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function p(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var s=r.createContext({}),l=function(n){var e=r.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},c=function(n){var e=l(n.components);return r.createElement(s.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,i=n.originalType,s=n.parentName,c=p(n,["components","mdxType","originalType","parentName"]),d=l(t),f=a,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return t?r.createElement(m,o(o({ref:e},c),{},{components:t})):r.createElement(m,o({ref:e},c))}));function f(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var i=t.length,o=new Array(i);o[0]=d;var p={};for(var s in e)hasOwnProperty.call(e,s)&&(p[s]=e[s]);p.originalType=n,p.mdxType="string"==typeof n?n:a,o[1]=p;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9090:function(n,e,t){"use strict";t.r(e),t.d(e,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var r=t(2122),a=t(9756),i=(t(7294),t(3905)),o=["components"],p={title:"Spin polarized bandstructure calculation for nickel",sidebar_label:"Ni (spin pol. bands)"},s=void 0,l={unversionedId:"hands-on/ni",id:"hands-on/ni",isDocsHomePage:!1,title:"Spin polarized bandstructure calculation for nickel",description:"We prepare the input file pwscfni.in and run the calculation:",source:"@site/docs/hands-on/ni.md",sourceDirName:"hands-on",slug:"/hands-on/ni",permalink:"/espresso/hands-on/ni",editUrl:"https://github.com/pranabdas/espresso/blob/master/docs/hands-on/ni.md",version:"current",frontMatter:{title:"Spin polarized bandstructure calculation for nickel",sidebar_label:"Ni (spin pol. bands)"},sidebar:"docs",previous:{title:"Fe (magnetic)",permalink:"/espresso/hands-on/fe"},next:{title:"DFT+U calculation",permalink:"/espresso/hands-on/dft-u"}},c=[],u={toc:c};function d(n){var e=n.components,p=(0,a.Z)(n,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,p,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We prepare the input file ",(0,i.kt)("inlineCode",{parentName:"p"},"pw_scf_ni.in")," and run the calculation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mpirun -np 8 pw.x -i pw_scf_ni.in > pw_scf_ni.out\n")),(0,i.kt)("p",null,"Prepare the input file for bands calculation ",(0,i.kt)("inlineCode",{parentName:"p"},"pw_bands_ni.in")," with our desired\nk-path and run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mpirun -np 8 pw.x -i pw_bands_ni.in > pw_bands_ni.out\n")),(0,i.kt)("p",null,"Now we perform the ",(0,i.kt)("strong",{parentName:"p"},"bands.x")," calculation with ",(0,i.kt)("inlineCode",{parentName:"p"},"spin_component=1")," to process\nonly the spin up bands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="src/ni/bands_ni_spinup.in"',title:'"src/ni/bands_ni_spinup.in"'},"&BANDS\n    outdir='./tmp/',\n    prefix='ni',\n    filband='ni_bands_spinup',\n    spin_component = 1,\n/\n")),(0,i.kt)("p",null,"Run the calculation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mpirun -np 8 bands.x -i bands_ni_up.in > bands_ni_up.out\n")),(0,i.kt)("p",null,"Similarly, we process the spin down bands ",(0,i.kt)("inlineCode",{parentName:"p"},"spin_component=2")," and plot them."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ni spin polarized bands",src:t(1897).Z})))}d.isMDXComponent=!0},1897:function(n,e,t){"use strict";e.Z=t.p+"assets/images/ni-spin-bands-28a1f6d047e378e2bda9fd69130c55f7.png"}}]);