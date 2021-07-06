(self.webpackChunkespresso=self.webpackChunkespresso||[]).push([[398],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=l,h=m["".concat(i,".").concat(d)]||m[d]||c[d]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3919:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function l(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return l}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return r},Z:function(){return o}});var a=n(2263),l=n(3919);function r(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var r=void 0===a?{}:a,o=r.forcePrependBaseUrl,s=void 0!==o&&o,i=r.absolute,p=void 0!==i&&i;if(!n)return n;if(n.startsWith("#"))return n;if((0,l.b)(n))return n;if(s)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return p?e+u:u}(r,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},9532:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var a=n(2122),l=n(9756),r=(n(7294),n(3905)),o=n(4996),s=["components"],i={title:"High Performance Computing",sidebar_label:"HPC"},p=void 0,u={unversionedId:"setup/hpc",id:"setup/hpc",isDocsHomePage:!1,title:"High Performance Computing",description:"In order to perform computationally heavy calculations, we would require access",source:"@site/docs/setup/hpc.mdx",sourceDirName:"setup",slug:"/setup/hpc",permalink:"/espresso/setup/hpc",editUrl:"https://github.com/pranabdas/espresso/blob/master/docs/setup/hpc.mdx",version:"current",frontMatter:{title:"High Performance Computing",sidebar_label:"HPC"},sidebar:"docs",previous:{title:"Installation",permalink:"/espresso/setup/install"},next:{title:"Jupyter notebooks",permalink:"/espresso/setup/jupyter"}},c=[{value:"Useful UNIX commands",id:"useful-unix-commands",children:[]},{value:"Running jobs at NUS HPC",id:"running-jobs-at-nus-hpc",children:[]},{value:"Abort and restart a calculation",id:"abort-and-restart-a-calculation",children:[]},{value:"Compiling Quantum Espresso using Intel\xae Math Kernel Libraries (MKL)",id:"compiling-quantum-espresso-using-intel-math-kernel-libraries-mkl",children:[]},{value:"Resources",id:"resources",children:[]}],m={toc:c};function d(e){var t=e.components,n=(0,l.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In order to perform computationally heavy calculations, we would require access\nto high performance computing facilities."),(0,r.kt)("h2",{id:"useful-unix-commands"},"Useful UNIX commands"),(0,r.kt)("p",null,"Connect to a login node via ssh:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ssh {username}@atlas9.nus.edu.sg\n")),(0,r.kt)("p",null,"Secure copy files between local and remote machines:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"scp {username}@10.10.0.2:/remote/file.txt /local/directory\nscp local/file.txt {username}@10.10.0.2:/remote/directory\n")),(0,r.kt)("p",null,"Check disk usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"du -hs .\ndu -hs /path/\n")),(0,r.kt)("p",null,"Rsync to synchronize two folders:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rsync -azhv --delete /source/my_project/ /destination/my_project\n")),(0,r.kt)("h2",{id:"running-jobs-at-nus-hpc"},"Running jobs at NUS HPC"),(0,r.kt)("p",null,"Check your storage quota:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"hpc s\n")),(0,r.kt)("p",null,"PBS commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"hpc pbs summary\n")),(0,r.kt)("p",null,"Example scrips for job submissions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"hpc pbs script parallel20\nhpc pbs vasp\n")),(0,r.kt)("p",null,"List available modules:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"module avail\n")),(0,r.kt)("p",null,"Load a module:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"module load {module-name}\n")),(0,r.kt)("p",null,"Purge loaded modules:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"module purge\n")),(0,r.kt)("p",null,"Quantum Espresso is already installed in NUS HPC clusters. Here is a sample job\nscript for ",(0,r.kt)("a",{parentName:"p",href:"https://nusit.nus.edu.sg/hpc/"},"NUS HPC")," clusters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="my_sample_job.txt"',title:'"my_sample_job.txt"'},"#!/bin/bash\n#PBS -q parallel12\n#PBS -l select=2:ncpus=12:mpiprocs=12:mem=45GB\n#PBS -j eo\n#PBS -N qe-job\nsource /etc/profile.d/rec_modules.sh\nmodule load espresso6.5-intel_18\n## module load espresso6.5-Centos6_Intel\ncd $PBS_O_WORKDIR;\nnp=$( cat  ${PBS_NODEFILE} |wc -l );\nmpirun -np $np -f ${PBS_NODEFILE} pw.x -inp qe-scf.in > qe-scf.out\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Notice that the lines beginning with ",(0,r.kt)("inlineCode",{parentName:"p"},"#PBS")," are actually PBS commands, not\ncomments. For comments, I am using ",(0,r.kt)("inlineCode",{parentName:"p"},"##"),"."))),(0,r.kt)("p",null,"Query about a queue systems:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"qstat -q\n")),(0,r.kt)("p",null,"Check status of a particular queue system:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"qstat -Qx parallel20\n")),(0,r.kt)("p",null,"Submitting a job:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"qsub my_sample_job.txt\n")),(0,r.kt)("p",null,"Check running jobs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"qstat\n")),(0,r.kt)("p",null,"Details about a job:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"qstat -f {job-id}\n")),(0,r.kt)("p",null,"Stopping a job:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"qdel {job-id}\n")),(0,r.kt)("h2",{id:"abort-and-restart-a-calculation"},"Abort and restart a calculation"),(0,r.kt)("p",null,"If you need to modify certain parameter while the program is running, e.g., you\nwant to change the ",(0,r.kt)("inlineCode",{parentName:"p"},"mixing_beta")," value because SCF accuracy is oscillation\nwithout any sign of convergence. Create an empty file named ",(0,r.kt)("inlineCode",{parentName:"p"},"{prefix}.EXIT")," in\nthe directory where you have the input file or in the ",(0,r.kt)("inlineCode",{parentName:"p"},"outdir")," as set in the\n",(0,r.kt)("inlineCode",{parentName:"p"},"&CONTROL")," card of input file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"touch {prefix}.EXIT\n")),(0,r.kt)("p",null,"That will stop the program on next iteration, and save the state. In order to\nrestart, set the ",(0,r.kt)("inlineCode",{parentName:"p"},"restart_mode")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"&CONTROL")," card to ",(0,r.kt)("inlineCode",{parentName:"p"},"'restart'")," and re-run\nafter necessary changes. You must re-submit the job with same number of\nprocessors."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"&CONTROL\n  ...\n  restart_mode = 'restart'\n  ...\n/\n")),(0,r.kt)("h2",{id:"compiling-quantum-espresso-using-intel-math-kernel-libraries-mkl"},"Compiling Quantum Espresso using Intel","\xae"," Math Kernel Libraries (MKL)"),(0,r.kt)("p",null,"If you need a newer or specific version of Quantum Espresso that is not\ninstalled in the NUS clusters or you have modified the source codes yourself,\nhere are the steps that I followed to successfully compile. Download and\ndecompress the source files."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/QEF/q-e/releases/download/qe-6.7.0/qe-6.7-ReleasePack.tgz\ntar zxvf qe-6.7-ReleasePack.tgz\n")),(0,r.kt)("p",null,"Load the necessary modules (applicable for NUS clusters, last checked in May\n2021):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"module load xe_2018\nmodule load fftw/3.3.7\n")),(0,r.kt)("p",null,"Go to QE directory and run ",(0,r.kt)("inlineCode",{parentName:"p"},"configure"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd qe-6.7\n./configure\n")),(0,r.kt)("p",null,"You will see output something like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"...\nBLAS_LIBS=  -lmkl_intel_lp64  -lmkl_sequential -lmkl_core\nLAPACK_LIBS=\nFFT_LIBS=\n...\n")),(0,r.kt)("p",null,"For me the ",(0,r.kt)("inlineCode",{parentName:"p"},"LAPACK_LIBS")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"FFT_LIBS")," libs were not automatically detected. We\nneed to specify them manually. First get the link libraries line specific to\nyour version of MKL and other configurations from the ",(0,r.kt)("a",{parentName:"p",href:"https://software.intel.com/content/www/us/en/develop/tools/oneapi/components/onemkl/link-line-advisor.html"},"Intel link advisor"),".\nFor my case, the link line was:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"-L${MKLROOT}/lib/intel64 -lmkl_scalapack_lp64 -lmkl_intel_lp64 -lmkl_sequential -lmkl_core -lmkl_blacs_intelmpi_lp64 -lpthread -lm -ldl\n")),(0,r.kt)("img",{src:(0,o.Z)("/img/intel-link-line-adviser.png"),alt:"Intel link line adviser",width:"600px"}),(0,r.kt)("p",null,"We need to insert the link for ",(0,r.kt)("inlineCode",{parentName:"p"},"BLAS_LIBS"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"LAPACK_LIBS"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"SCALAPACK_LIBS"),".\nWe also need to find out where is the FFTW lib located. In NUS HPC, we can use\n",(0,r.kt)("inlineCode",{parentName:"p"},"module avail")," command to see where a particular module is located, usually\nunder ",(0,r.kt)("inlineCode",{parentName:"p"},"/app1/modules/"),". Open ",(0,r.kt)("inlineCode",{parentName:"p"},"make.inc")," and make following changes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="make.inc"',title:'"make.inc"'},"# ...\nCFLAGS         = -O2 $(DFLAGS) $(IFLAGS)\nCFLAGS         = -O3 $(DFLAGS) $(IFLAGS)\nF90FLAGS       = $(FFLAGS) -nomodule -fpp $(FDFLAGS) $(CUDA_F90FLAGS) $(IFLAGS) $(MODFLAGS)\n\n# compiler flags with and without optimization for fortran-77\n# the latter is NEEDED to properly compile dlamch.f, used by lapack\n- FFLAGS         = -O2 -assume byterecl -g -traceback\n+ FFLAGS         = -O3 -assume byterecl -g -traceback\nFFLAGS_NOOPT   = -O0 -assume byterecl -g -traceback\n# ...\n# If you have nothing better, use the local copy\n# BLAS_LIBS = $(TOPDIR)/LAPACK/libblas.a\n- BLAS_LIBS      =   -lmkl_intel_lp64  -lmkl_sequential -lmkl_core\n+ BLAS_LIBS      = -L${MKLROOT}/lib/intel64 -lmkl_scalapack_lp64 -lmkl_intel_lp64 -lmkl_sequential -lmkl_core -lmkl_blacs_intelmpi_lp64 -lpthread -lm -ldl\n# If you have nothing better, use the local copy\n# LAPACK_LIBS_SWITCH = internal\n# LAPACK_LIBS = $(TOPDIR)/LAPACK/liblapack.a\n- LAPACK_LIBS    =\n+ LAPACK_LIBS    = -L${MKLROOT}/lib/intel64 -lmkl_scalapack_lp64 -lmkl_intel_lp64 -lmkl_sequential -lmkl_core -lmkl_blacs_intelmpi_lp64 -lpthread -lm -ldl\nLAPACK_LIBS_SWITCH = external\n\n- SCALAPACK_LIBS =\n+ SCALAPACK_LIBS = -L${MKLROOT}/lib/intel64 -lmkl_scalapack_lp64 -lmkl_intel_lp64 -lmkl_sequential -lmkl_core -lmkl_blacs_intelmpi_lp64 -lpthread -lm -ldl\n\n# nothing needed here if the the internal copy of FFTW is compiled\n# (needs -D__FFTW in DFLAGS)\n\n- FFT_LIBS       =\n+ FFT_LIBS       = -L/app1/centos6.3/gnu/fftw/3.3.7/lib/ -lmpi\n# ...\n")),(0,r.kt)("p",null,"Now we are ready to compile:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make all -j8\n")),(0,r.kt)("p",null,"I am parallelizing with 8 processors to speed things up. You may add the\n",(0,r.kt)("inlineCode",{parentName:"p"},"qe-6.7/bin")," path to your ",(0,r.kt)("inlineCode",{parentName:"p"},".bashrc"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"echo 'export PATH=\"/home/svu/{username}/qe-6.7/bin:$PATH\"' >> ~/.bashrc\n")),(0,r.kt)("p",null,"And don't forget to load dependencies before calling QE executables."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"module load xe_2018\nmodule load fftw/3.3.7\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you are submitting job via PBS queue, you need to provide full path of the QE\nexecutables, e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/svu/{username}/qe-6.7/bin/pw.x"),". PBS system won't read\nyour bash settings, neither the relative paths of your login node would apply."))),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nusit.nus.edu.sg/services/getting-started/introductory-guide-for-new-hpc-users/"},"https://nusit.nus.edu.sg/services/getting-started/introductory-guide-for-new-hpc-users/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://help.nscc.sg/pbspro-quickstartguide/"},"https://help.nscc.sg/pbspro-quickstartguide/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=doudMLEaq3w"},"https://www.youtube.com/watch?v=doudMLEaq3w"))))}d.isMDXComponent=!0}}]);