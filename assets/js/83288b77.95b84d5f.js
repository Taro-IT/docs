"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1991],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return p}});var i=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(r),p=a,g=m["".concat(s,".").concat(p)]||m[p]||u[p]||n;return r?i.createElement(g,o(o({ref:t},d),{},{components:r})):i.createElement(g,o({ref:t},d))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<n;c++)o[c]=r[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},92041:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var i=r(87462),a=r(63366),n=(r(67294),r(3905)),o=["components"],l={},s="G18 - Gu\xeda de reversi\xf3n de c\xf3digo",c={unversionedId:"guias/G18-guia-reversion-codigo",id:"guias/G18-guia-reversion-codigo",isDocsHomePage:!1,title:"G18 - Gu\xeda de reversi\xf3n de c\xf3digo",description:"Objetivo(s)",source:"@site/docs/guias/G18-guia-reversion-codigo.md",sourceDirName:"guias",slug:"/guias/G18-guia-reversion-codigo",permalink:"/docs/guias/G18-guia-reversion-codigo",editUrl:"https://github.com/Taro-IT/docs/edit/main/docs/guias/G18-guia-reversion-codigo.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"G17 - Gu\xeda para Defect Log",permalink:"/docs/guias/G17-guia-defect-log"},next:{title:"G19 - Gu\xeda para Testing en Laravel",permalink:"/docs/guias/G19-guia-testing-laravel"}},d=[{value:"Objetivo(s)",id:"objetivos",children:[]},{value:"Pre-requisitos",id:"pre-requisitos",children:[]},{value:"Comandos Git para la reversi\xf3n",id:"comandos-git-para-la-reversi\xf3n",children:[{value:"git reverse",id:"git-reverse",children:[]},{value:"git reset",id:"git-reset",children:[]}]},{value:"Salidas",id:"salidas",children:[]},{value:"Autores",id:"autores",children:[]},{value:"Auditor\xeda",id:"auditor\xeda",children:[]},{value:"Versi\xf3n 2.0",id:"versi\xf3n-20",children:[]},{value:"Versi\xf3n 1.0",id:"versi\xf3n-10",children:[]},{value:"Versi\xf3n 1.0",id:"versi\xf3n-10-1",children:[]}],u={toc:d};function m(e){var t=e.components,l=(0,a.Z)(e,o);return(0,n.kt)("wrapper",(0,i.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"g18---gu\xeda-de-reversi\xf3n-de-c\xf3digo"},"G18 - Gu\xeda de reversi\xf3n de c\xf3digo"),(0,n.kt)("h2",{id:"objetivos"},"Objetivo(s)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Definir como revertir el c\xf3digo en caso de ser necesario usando la herramienta definida para el control de versiones de c\xf3digo (Git).")),(0,n.kt)("h2",{id:"pre-requisitos"},"Pre-requisitos"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Estar en la rama a revertir ")),(0,n.kt)("h2",{id:"comandos-git-para-la-reversi\xf3n"},"Comandos Git para la reversi\xf3n"),(0,n.kt)("h3",{id:"git-reverse"},"git reverse"),(0,n.kt)("p",null,"El comando ",(0,n.kt)("inlineCode",{parentName:"p"},"git reverse")," revierte el proyecto al estado de un commit, esto lo hace generando un nuevo commit que revierte los cambios realizados. De esta manera las modificaciones ",(0,n.kt)("strong",{parentName:"p"},"no son eliminadas del historial")," y pueden ser accedidas en el futuro, eso s\xed, los cambios locales que no han sido guardados ser\xe1n sobrescritos."),(0,n.kt)("p",null,"Para hacer ",(0,n.kt)("inlineCode",{parentName:"p"},"git reverse")," sobre el \xfaltimo commit:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"git reverse HEAD~1\n")),(0,n.kt)("p",null,"O sobre un commit en espec\xedfico haciendo uso del ID del dicho commit."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"git reverse 52gu\n")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"git reverse",src:r(68151).Z})),(0,n.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"Para identificar el ID de un commit en espec\xedfico puedes utilizar el comando ",(0,n.kt)("inlineCode",{parentName:"p"},"git log")," que permite ver los commits locales o ",(0,n.kt)("inlineCode",{parentName:"p"},"git log origin (<branch_name>)")," para ver los commits de una rama remota en espec\xedfico."))),(0,n.kt)("h4",{id:"utilizar-git-reverse-cuando"},"Utilizar ",(0,n.kt)("inlineCode",{parentName:"h4"},"git reverse")," cuando:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Se han hecho publicaciones que quieren revertirse pero que se desean mantener en el historial.")),(0,n.kt)("h3",{id:"git-reset"},"git reset"),(0,n.kt)("p",null,"El comando ",(0,n.kt)("inlineCode",{parentName:"p"},"git reset")," se utiliza para mover el proyecto a un commit anterior eliminando todos los commits posteriores a este del historial. "),(0,n.kt)("p",null,"Para hacer ",(0,n.kt)("inlineCode",{parentName:"p"},"git reset")," sobre el \xfaltimo commit:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"git reset HEAD~1\n")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"git reset",src:r(48226).Z})),(0,n.kt)("p",null,"O sobre un commit en espec\xedfico haciendo uso del ID de dicho commit."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"git reset 2yd5\n")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"git reset",src:r(42882).Z})),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"git reset")," puede utilizarse con dos opciones:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"git reset --soft [<commit_id>]\n")),(0,n.kt)("p",null,"Genera un reset de HEAD hacia otro commit, pero no modifica el \xedndice de archivos ni el contenido local. Esto significa que los archivos agregados o eliminados y los cambios producidos durante estos commits reseteados se mantendr\xe1n en el contenido local."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"git reset --hard [<commit>]\n")),(0,n.kt)("p",null,"Modifica el HEAD, el \xedndice de archivos y el contenido local. El estado del proyecto es el equivalente al que se encontraba en el commit al que fue reseteado."),(0,n.kt)("p",null,"Puede utilizarse ",(0,n.kt)("inlineCode",{parentName:"p"},"git reset")," cuando:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Se han hecho commits equivocados de manera local y se quieren deshacer dichos cambios "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Usar ",(0,n.kt)("inlineCode",{parentName:"li"},"git reset --hard")," si no se quiere mantener ning\xfan cambio local."),(0,n.kt)("li",{parentName:"ul"},"Usar ",(0,n.kt)("inlineCode",{parentName:"li"},"git reset --soft")," si se quieren mantener los cambios locales para hacerles commit en otro momento."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Se ha publicado informaci\xf3n sensible o que simplemente se desea eliminar del historial."))),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"Si esta trabajando de manera grupal deber\xe1 llegar a un consenso antes de utilizar ",(0,n.kt)("inlineCode",{parentName:"p"},"git reset")," para evitar conflictos."))),(0,n.kt)("h2",{id:"salidas"},"Salidas"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"La rama revertida a un punto anterior ")),(0,n.kt)("h2",{id:"autores"},"Autores"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Juan Manuel Amador Perez Flores ")),(0,n.kt)("h2",{id:"auditor\xeda"},"Auditor\xeda"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Adolfo Acosta Castro")),(0,n.kt)("h1",{id:"bit\xe1cora-de-cambios"},"Bit\xe1cora de cambios"),(0,n.kt)("h2",{id:"versi\xf3n-20"},"Versi\xf3n 2.0"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"El asset ha sido institucionalizado")),(0,n.kt)("h2",{id:"versi\xf3n-10"},"Versi\xf3n 1.0"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Se eliminan algunos p\xe1rrafos para evitar ser repetitivos."),(0,n.kt)("li",{parentName:"ul"},"Se incluye como revisar el ID de un commit en GitHub."),(0,n.kt)("li",{parentName:"ul"},'Se agrega "git reset" en un p\xe1rrafo.')),(0,n.kt)("h2",{id:"versi\xf3n-10-1"},"Versi\xf3n 1.0"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Se cre\xf3 el proceso.")))}m.isMDXComponent=!0},42882:function(e,t,r){t.Z=r.p+"assets/images/gitreset-2-5fc094ead5347bb766a03acb3d5d23e1.png"},48226:function(e,t,r){t.Z=r.p+"assets/images/gitreset-0c141b4e71aae08d3e4c11cb1d0957d5.png"},68151:function(e,t,r){t.Z=r.p+"assets/images/gitreverse-a827504e871d734c305f5562b8818f98.png"}}]);