"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[99],{3905:function(e,a,r){r.d(a,{Zo:function(){return u},kt:function(){return v}});var n=r(67294);function t(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function i(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?i(Object(r),!0).forEach((function(a){t(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function l(e,a){if(null==e)return{};var r,n,t=function(e,a){if(null==e)return{};var r,n,t={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var c=n.createContext({}),s=function(e){var a=n.useContext(c),r=a;return e&&(r="function"==typeof e?e(a):o(o({},a),e)),r},u=function(e){var a=s(e.components);return n.createElement(c.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var r=e.components,t=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),v=t,m=p["".concat(c,".").concat(v)]||p[v]||d[v]||i;return r?n.createElement(m,o(o({ref:a},u),{},{components:r})):n.createElement(m,o({ref:a},u))}));function v(e,a){var r=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l.mdxType="string"==typeof e?e:t,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},44822:function(e,a,r){r.r(a),r.d(a,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var n=r(87462),t=r(63366),i=(r(67294),r(3905)),o=["components"],l={},c="G20 - Gu\xeda para sincronizar, respaldar y compartir archivos de configuraci\xf3n y variables de entorno",s={unversionedId:"guias/G20-guia-archivos-env",id:"guias/G20-guia-archivos-env",isDocsHomePage:!1,title:"G20 - Gu\xeda para sincronizar, respaldar y compartir archivos de configuraci\xf3n y variables de entorno",description:"Objetivo(s)",source:"@site/docs/guias/G20-guia-archivos-env.md",sourceDirName:"guias",slug:"/guias/G20-guia-archivos-env",permalink:"/docs/guias/G20-guia-archivos-env",editUrl:"https://github.com/Taro-IT/docs/edit/main/docs/guias/G20-guia-archivos-env.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"G19 - Gu\xeda para Testing en Laravel",permalink:"/docs/guias/G19-guia-testing-laravel"},next:{title:"PL01 - Plantilla para Minutas",permalink:"/docs/plantillas/PL01-plantilla-para-minutas"}},u=[{value:"Objetivo(s)",id:"objetivos",children:[]},{value:"Pre-requisitos",id:"pre-requisitos",children:[]},{value:"Pasos a seguir",id:"pasos-a-seguir",children:[{value:"Para consultar las variables de entorno de alg\xfan ambiente:",id:"para-consultar-las-variables-de-entorno-de-alg\xfan-ambiente",children:[]},{value:"Para actualizar un archivo",id:"para-actualizar-un-archivo",children:[]},{value:"Para consultar una versi\xf3n anterior de un archivo:",id:"para-consultar-una-versi\xf3n-anterior-de-un-archivo",children:[]}]},{value:"Salidas",id:"salidas",children:[]},{value:"Autores",id:"autores",children:[]},{value:"Auditor\xeda",id:"auditor\xeda",children:[]},{value:"Referencias",id:"referencias",children:[]},{value:"Versi\xf3n 1.0",id:"versi\xf3n-10",children:[]}],d={toc:u};function p(e){var a=e.components,l=(0,t.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,l,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"g20---gu\xeda-para-sincronizar-respaldar-y-compartir-archivos-de-configuraci\xf3n-y-variables-de-entorno"},"G20 - Gu\xeda para sincronizar, respaldar y compartir archivos de configuraci\xf3n y variables de entorno"),(0,i.kt)("h2",{id:"objetivos"},"Objetivo(s)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Orientar en la creaci\xf3n y sincronizaci\xf3n de archivos de variables de entorno, tambi\xe9n conocidos como \u201carchivos env\u201d para agilizar el intercambio de claves de APIs y de entornos de prueba y producci\xf3n."),(0,i.kt)("li",{parentName:"ul"},"Contar con un registro centralizado de configuraciones tanto para desarrollo como para producci\xf3n."),(0,i.kt)("li",{parentName:"ul"},"Asegurar la confidencialidad y la integridad de claves de acceso importantes que pudieran comprometer el estado del proyecto si se usan de manera inapropiada."),(0,i.kt)("li",{parentName:"ul"},"Aportar valor al equipo al apoyar en el cumplimento de manejo de configuraci\xf3n en CMMI y las evaluaciones SCAMPI")),(0,i.kt)("h2",{id:"pre-requisitos"},"Pre-requisitos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Contar con un entorno de pruebas o producci\xf3n seg\xfan sea la configuraci\xf3n que se desea compartir."),(0,i.kt)("li",{parentName:"ul"},"Contar con alguna aplicaci\xf3n o proyecto que use variables como mecanismo de configuraci\xf3n."),(0,i.kt)("li",{parentName:"ul"},"Tener permisos de lectura y escritura al Google Drive departamental."),(0,i.kt)("li",{parentName:"ul"},"Que la carpeta de variables de entorno se encuentre accesible para los participantes del proyecto."),(0,i.kt)("li",{parentName:"ul"},"Hoja de c\xe1lculo para registrar los cambios de los archivos.")),(0,i.kt)("h2",{id:"pasos-a-seguir"},"Pasos a seguir"),(0,i.kt)("h3",{id:"para-consultar-las-variables-de-entorno-de-alg\xfan-ambiente"},"Para consultar las variables de entorno de alg\xfan ambiente:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Navegar al archivo de variables de entorno del proyecto"),(0,i.kt)("li",{parentName:"ul"},"Localizar el archivo correspondiente al entorno que se necesite: Local, Pruebas o Producci\xf3n"),(0,i.kt)("li",{parentName:"ul"},"Descargar el archivo seleccionado")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:r(27705).Z})),(0,i.kt)("h3",{id:"para-actualizar-un-archivo"},"Para actualizar un archivo"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Localizar el archivo env con la nueva versi\xf3n de las variables en la computadora del desarrollador."),(0,i.kt)("li",{parentName:"ul"},"Subir el archivo a la carpeta con el nombre apropiado y la terminaci\xf3n \u201c.env\u201d"),(0,i.kt)("li",{parentName:"ul"},"Registrar el cambio en la bit\xe1cora de actualizaci\xf3n.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:r(61152).Z})),(0,i.kt)("h3",{id:"para-consultar-una-versi\xf3n-anterior-de-un-archivo"},"Para consultar una versi\xf3n anterior de un archivo:"),(0,i.kt)("p",null,"En ocasiones puede ser necesario consultar una versi\xf3n anterior de un archivo de configuraci\xf3n. Esto se puede realizar usando las funciones de versionado de Google drive."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Localizar el archivo en la carpeta correspondiente."),(0,i.kt)("li",{parentName:"ul"},"Hacer click secundario y en el men\xfa emergente hacer click en gestionar versiones"),(0,i.kt)("li",{parentName:"ul"},"Buscar la versi\xf3n necesaria.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:r(38333).Z})),(0,i.kt)("h2",{id:"salidas"},"Salidas"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Archivo(s) env con variables de entorno en la carpeta compartida de archivos env"),(0,i.kt)("li",{parentName:"ul"},"Registro en la bit\xe1cora de actualizaci\xf3n si un archivo fue actualizado")),(0,i.kt)("h2",{id:"autores"},"Autores"),(0,i.kt)("p",null,"Eduardo Andr\xe9s Castillo Perera"),(0,i.kt)("h2",{id:"auditor\xeda"},"Auditor\xeda"),(0,i.kt)("h2",{id:"referencias"},"Referencias"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://support.google.com/a/users/answer/9308971?hl=es"},"Consultar o recuperar versiones anteriores de archivos - Centro de Aprendizaje de Google Workspace")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://platform.sh/blog/2021/we-need-to-talk-about-the-env/"},"We need to talk about the .env | Platform.sh")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://12factor.net/config"},"The Twelve-Factor App (12factor.net)")),(0,i.kt)("h1",{id:"bit\xe1cora-de-cambios"},"Bit\xe1cora de cambios"),(0,i.kt)("h2",{id:"versi\xf3n-10"},"Versi\xf3n 1.0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Se cre\xf3 la gu\xeda.")))}p.isMDXComponent=!0},27705:function(e,a,r){a.Z=r.p+"assets/images/Imagen1-a2227f9f689a89b61c7897c89f205f2e.png"},61152:function(e,a,r){a.Z=r.p+"assets/images/Imagen2-0336088c9ece6dfa3c2ebcd90d0ca041.png"},38333:function(e,a,r){a.Z=r.p+"assets/images/Imagen3-b414c791ac3049ec8840d65159360050.png"}}]);