(self.webpackChunkespresso=self.webpackChunkespresso||[]).push([[151],{3905:function(e,n,a){"use strict";a.d(n,{Zo:function(){return c},kt:function(){return d}});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function s(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?s(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=t.createContext({}),p=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},c=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||s;return a?t.createElement(f,i(i({ref:n},c),{},{components:a})):t.createElement(f,i({ref:n},c))}));function d(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=a[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3310:function(e,n,a){"use strict";a.r(n),a.d(n,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var t=a(2122),r=a(9756),s=(a(7294),a(3905)),i=["components"],o={title:"Spin-Orbit Coupling"},l=void 0,p={unversionedId:"hands-on/soc",id:"hands-on/soc",isDocsHomePage:!1,title:"Spin-Orbit Coupling",description:"In oder to consider spin orbit coupling effect in our electronic structure",source:"@site/docs/hands-on/soc.md",sourceDirName:"hands-on",slug:"/hands-on/soc",permalink:"/espresso/hands-on/soc",editUrl:"https://github.com/pranabdas/espresso/blob/master/docs/hands-on/soc.md",version:"current",frontMatter:{title:"Spin-Orbit Coupling"},sidebar:"docs",previous:{title:"DFT+U calculation",permalink:"/espresso/hands-on/dft-u"},next:{title:"Resources",permalink:"/espresso/resources"}},c=[{value:"Non collinear spin",id:"non-collinear-spin",children:[]},{value:"Strategy for convergence",id:"strategy-for-convergence",children:[]},{value:"Bandstructure of Fe with SOC",id:"bandstructure-of-fe-with-soc",children:[]},{value:"SOC calculation for GaAs",id:"soc-calculation-for-gaas",children:[]}],m={toc:c};function u(e){var n=e.components,o=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,t.Z)({},m,o,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"In oder to consider spin orbit coupling effect in our electronic structure\ncalculation in quantum espresso, we need to use a full relativistic pseudo\npotential. Following settings are needed in the ",(0,s.kt)("inlineCode",{parentName:"p"},"&SYSTEM")," card:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"&SYSTEM\n    ...\n    noncolin = .true.\n    lspinorb = .true.\n    ...\n/\n")),(0,s.kt)("h2",{id:"non-collinear-spin"},"Non collinear spin"),(0,s.kt)("p",null,"In simple spin polarized calculation (",(0,s.kt)("inlineCode",{parentName:"p"},"nspin=2"),"), the spin quantum number (up or\ndown) is considered in the calculation. In non-collinear case, the spin has more\ndegrees of freedom, and can be oriented in any direction. Non-collinear\nmagnetism is quite common in nature, where the spins are not parallel\n(ferromagnetic) or anti-parallel (antiferromagnetic), rather they orient in\nspirals, helicoids, canted or disordered. Non-collinear magnetism can occur\nbecause of geometric frustration of magnetic interaction. It can also occur due\nto the magnetocrystalline anisotropy which is the result of interaction between\nthe spin and lattice interaction. This relativistic effect comes via spin-orbit\ncoupling."),(0,s.kt)("p",null,"We can constrain the magnetic moment:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"&SYSTEM\n  ...\n  constrained_magnetization = 'atomic direction'\n  ...\n/\n")),(0,s.kt)("p",null,"Starting magnetization can be specified by ",(0,s.kt)("inlineCode",{parentName:"p"},"angle1")," (angle with ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"z")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"z")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.04398em"}},"z")))))," axis) and\n",(0,s.kt)("inlineCode",{parentName:"p"},"angle2")," (angle of projection in ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mi",{parentName:"mrow"},"y")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"xy")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.19444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y")))))," plane). Also check the penalty function\n(",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"\u03bb")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\lambda")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"\u03bb"))))),")."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"&SYSTEM\n  ...\n  angle1(i) = 0.0d0\n  angle2(i) = 0.0d0\n  lambda = 0.5\n  ...\n/\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"i")," is the index of the atom in ",(0,s.kt)("inlineCode",{parentName:"p"},"ATOMIC_SPECIES")," card."),(0,s.kt)("h2",{id:"strategy-for-convergence"},"Strategy for convergence"),(0,s.kt)("p",null,"Spin-orbit coupling calculations are often hard to converge. Use a smaller\n",(0,s.kt)("inlineCode",{parentName:"p"},"mixing_beta")," for such calculations. First perform a collinear calculation with\nnon-relativistic pseudopotential, and then start from the obtained charge\ndensity to perform non-colinear spin orbit calculation."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"&ELECTRONS\n  ...\n  mixing_beta = 1.0000000000d-01\n  startingpot = 'file'\n/\n")),(0,s.kt)("p",null,"When starting with non-collinear calculation from an existing charge density\nfile from a collinear lsda calculation, we need to set ",(0,s.kt)("inlineCode",{parentName:"p"},"lforcet=.true."),". It\nassumes previous density points in z direction, and rotates in the direction\nspecified by ",(0,s.kt)("inlineCode",{parentName:"p"},"angle1")," (initial magnetization angle with z axis in degrees), and\n",(0,s.kt)("inlineCode",{parentName:"p"},"angle2")," (angle in degrees for projections in x-y plane)."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"&SYSTEM\n...\n  angle1(i) = 0.0\n  angle2(i) = 0.0\n  lforcet = .true.\n/\n")),(0,s.kt)("p",null,"Also, make sure that energy and charge density cutoffs are sufficient. Certain\npseudo potentials might have issues, try with pseudo potentials from a different\nlibrary. In case of metallic systems, remember to apply smearing."),(0,s.kt)("h2",{id:"bandstructure-of-fe-with-soc"},"Bandstructure of Fe with SOC"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="src/fe/pw.scf.fe_soc.in"',title:'"src/fe/pw.scf.fe_soc.in"'},"&control\n   calculation='scf'\n   restart_mode='from_scratch',\n   pseudo_dir = '../pseudos/',\n   outdir='./tmp/'\n   prefix='fe'\n/\n\n&system\n   ibrav = 3,\n   celldm(1) =5.39,\n   nat= 1,\n   ntyp= 1,\n   noncolin=.true.,\n   lspinorb=.true.,\n   starting_magnetization(1)=0.3,\n   ecutwfc = 70,\n   ecutrho = 850.0,\n   occupations='smearing',\n   smearing='marzari-vanderbilt',\n   degauss=0.02\n/\n\n&electrons\n   diagonalization='david'\n   conv_thr = 1.0e-8\n   mixing_beta = 0.7\n/\n\nATOMIC_SPECIES\nFe 55.845 Fe.rel-pbe-spn-rrkjus_psl.1.0.0.UPF\n\nATOMIC_POSITIONS alat\nFe 0.0 0.0 0.0\n\nK_POINTS AUTOMATIC\n14 14 14 1 1 1\n")),(0,s.kt)("p",null,"Run the scf calculation:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"mpirun -np 8 pw.x -i pw.scf.fe_soc.in > pw.scf.fe_soc.out\n")),(0,s.kt)("p",null,"Prepare the input file for ",(0,s.kt)("inlineCode",{parentName:"p"},"nscf")," ",(0,s.kt)("inlineCode",{parentName:"p"},"bands")," calculation:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="src/fe/pw.bands.fe_soc.in"',title:'"src/fe/pw.bands.fe_soc.in"'},"&control\n   calculation='bands'\n   restart_mode='from_scratch',\n   pseudo_dir = '../pseudos/',\n   outdir='./tmp/'\n   prefix='fe'\n/\n\n&system\n   ibrav = 3,\n   celldm(1) =5.39,\n   nat= 1, ntyp= 1,\n   noncolin=.true.,\n   lspinorb=.true.,\n   starting_magnetization(1)=0.3,\n   ecutwfc = 70,\n   ecutrho = 850.0,\n   occupations='smearing',\n   smearing='marzari-vanderbilt',\n   degauss=0.02\n/\n&electrons\n   diagonalization='david'\n   conv_thr = 1.0e-8\n   mixing_beta = 0.7\n/\n\nATOMIC_SPECIES\nFe 55.845 Fe.rel-pbe-spn-rrkjus_psl.1.0.0.UPF\n\nATOMIC_POSITIONS alat\nFe 0.0 0.0 0.0\n\nK_POINTS tpiba_b\n6\n0.000  0.000  0.000  40  !gamma\n0.000  1.000  0.000  40  !H\n0.500  0.500  0.000  30  !N\n0.000  0.000  0.000  30  !gamma\n0.500  0.500  0.500  30  !P\n0.000  1.000  0.000   1  !H\n")),(0,s.kt)("p",null,"Run the ",(0,s.kt)("inlineCode",{parentName:"p"},"bands")," calculation:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"mpirun -np 8 pw.x -i pw.bands.fe_soc.in > pw.bands.fe_soc.out\n")),(0,s.kt)("p",null,"Finally post process the bandstructure data:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="src/fe/pp.bands.fe_soc.in"',title:'"src/fe/pp.bands.fe_soc.in"'},"&BANDS\n    outdir='./tmp/',\n    prefix='fe',\n    filband='fe_bands_soc.dat',\n/\n")),(0,s.kt)("p",null,"In this case ",(0,s.kt)("inlineCode",{parentName:"p"},"spin_component")," has been removed and we add ",(0,s.kt)("inlineCode",{parentName:"p"},"lsigma(3)=.true."),"\nthat instructs the program to compute the expectation value for the ",(0,s.kt)("inlineCode",{parentName:"p"},"z"),"\ncomponent of the spin operator for each eigenfunction and save all values in\nthe file ",(0,s.kt)("inlineCode",{parentName:"p"},"fe.noncolin.data.3"),". All values in this case are either +1/2 or -1/2."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"mpirun -np 8 bands.x -i pp.bands.fe_soc.in > pp.bands.fe_soc.out\n")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Fe bands",src:a(3711).Z})),(0,s.kt)("h2",{id:"soc-calculation-for-gaas"},"SOC calculation for GaAs"),(0,s.kt)("p",null,"Please check the respective ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/pranabdas/espresso/tree/master/src/GaAs"},"input files"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"mpirun -np 8 pw.x -i pw.scf.GaAs_soc.in > pw.scf.GaAs_soc.out\nmpirun -np 8 pw.x -i pw.bands.GaAs_soc.in > pw.bands.GaAs_soc.out\nmpirun -np 8 bands.x -i pp.bands.GaAs_soc.in > pp.bands.GaAs_soc.out\n")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"GaAs bands",src:a(1265).Z})))}u.isMDXComponent=!0},1265:function(e,n,a){"use strict";n.Z=a.p+"assets/images/GaAs-soc-bands-518e9ab7f6ba3c38e10d21c1fe40ce9b.png"},3711:function(e,n,a){"use strict";n.Z=a.p+"assets/images/fe-soc-bands-de6c4f09552c8c90ba653e2309a8751a.png"}}]);