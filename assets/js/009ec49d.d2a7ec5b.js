"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8520],{3905:function(e,a,t){t.d(a,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),u=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=u(e.components);return r.createElement(l.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(t),m=n,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||s;return t?r.createElement(g,i(i({ref:a},p),{},{components:t})):r.createElement(g,i({ref:a},p))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var s=t.length,i=new Array(s);i[0]=d;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<s;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},18134:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=t(87462),n=t(63366),s=(t(67294),t(3905)),i=["components"],o={},l="G19 - Gu\xeda para Testing en Laravel",u={unversionedId:"guias/G19-guia-testing-laravel",id:"guias/G19-guia-testing-laravel",isDocsHomePage:!1,title:"G19 - Gu\xeda para Testing en Laravel",description:"Objetivo(s)",source:"@site/docs/guias/G19-guia-testing-laravel.md",sourceDirName:"guias",slug:"/guias/G19-guia-testing-laravel",permalink:"/docs/guias/G19-guia-testing-laravel",editUrl:"https://github.com/Taro-IT/docs/edit/main/docs/guias/G19-guia-testing-laravel.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"G18 - Gu\xeda de reversi\xf3n de c\xf3digo",permalink:"/docs/guias/G18-guia-reversion-codigo"},next:{title:"G21 - Gu\xeda para realizar un pull request",permalink:"/docs/guias/G20-guia-archivos-env"}},p=[{value:"Objetivo(s)",id:"objetivos",children:[]},{value:"Pre-requisitos",id:"pre-requisitos",children:[]},{value:"Pasos a seguir",id:"pasos-a-seguir",children:[]},{value:"Salidas",id:"salidas",children:[]},{value:"Autores",id:"autores",children:[]},{value:"Auditor\xeda",id:"auditor\xeda",children:[]},{value:"Versi\xf3n 1.0",id:"versi\xf3n-10",children:[]}],c={toc:p};function d(e){var a=e.components,t=(0,n.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"g19---gu\xeda-para-testing-en-laravel"},"G19 - Gu\xeda para Testing en Laravel"),(0,s.kt)("h2",{id:"objetivos"},"Objetivo(s)"),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Generar una gu\xeda que permita a los integrantes del proyecto, generar y crear Tests de forma estandarizada y de forma\ncorrecta.")),(0,s.kt)("h2",{id:"pre-requisitos"},"Pre-requisitos"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Contar con un m\xf3dulo, p\xe1gina, secci\xf3n o interfaz a probar"),(0,s.kt)("li",{parentName:"ul"},"Leer la ",(0,s.kt)("a",{href:"https://laravel.com/docs/8.x/http-tests"},"documentaci\xf3n de laravel"))),(0,s.kt)("h2",{id:"pasos-a-seguir"},"Pasos a seguir"),(0,s.kt)("p",null,'1.- El primer paso es ubicar de forma correcta la secci\xf3n que se desea probar en este caso tomaremos el ejemplo: "login"'),(0,s.kt)("p",null,"Para nombrar nuestros test se tiene que seguir el siguiente comando con la siguiente sintaxis (Se recomienda usar este):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"php artisan make:test NombreTest\n")),(0,s.kt)("p",null,'Para generar test de tipo "unit" usa el siguiente par\xe1metro:'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"php artisan make:test NombreTest --unit\n")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},'Nota: La primera letra del nombre ser\xe1 may\xfascula seguida de la palabra "Test" tambi\xe9n con la primera letra may\xfascula ejemplo: UserTest')),(0,s.kt)("p",null,'2.- Una vez puesto el comando, podr\xe1s encontrar en la carpeta "test" dos sub carpetas: "Features" y "Unit", ahi abriras\nel que hayas creado y podr\xe1s ver una sintaxis parecida a esta.'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"<?php\n\nnamespace Tests\\Feature;\n\nuse Illuminate\\Foundation\\Testing\\RefreshDatabase;\nuse Illuminate\\Foundation\\Testing\\WithoutMiddleware;\nuse Tests\\TestCase;\n\nclass ExampleTest extends TestCase\n{\n    /**\n     * A basic test example.\n     *\n     * @return void\n     */\n    public function test_example()\n    {\n        $response = $this->get('/');\n\n        $response->assertStatus(200);\n    }\n}\n")),(0,s.kt)("p",null,"3.- El primer test que haremos ser\xe1 un Test de request HTTPS de p\xe1gina/vista, esto lo podremos hacer con lo siguiente"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"public function test_se_puede_ver_pagina_login()\n    {\n        $response = $this->get('/path-de-tu-ruta');\n        $response->assertStatus(200);\n    }\n")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Nota: El assertStatus(200) hace referencia a los c\xf3digos est\xe1ndar de HTTPS, asi que si usas el c\xf3digo 404 y pides ir\na una p\xe1gina que no existe, el test pasara, ya que la p\xe1gina regresa de manera correcta el c\xf3digo esperado")),(0,s.kt)("p",null,"En caso de que queramos asegurarnos de que se vea un view/vista espec\xedfica podemos usar la siguiente forma"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"public function test_se_puede_ver_login()\n    {\n        $response = $this->get('/login');\n        $response->assertSuccessful();\n        $response->assertViewIs('auth.login');\n    }\n")),(0,s.kt)("p",null,"4.- Para simular una autenticaci\xf3n en el sistema haremos lo siguiente"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"public function test_usario_no_puede_ver_el_login_cuando_esta_autentificado()\n    {\n        $user = User::factory(User::class)->make();\n\n        $response = $this->actingAs($user)->get('/login');\n\n        $response->assertRedirect('/home');\n    }\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},'Asignamos a la variable $user un usuario aleatorio usando el m\xe9todo "factory" y "make"'),(0,s.kt)("li",{parentName:"ul"},"En la variable $response le asignamos un estado, que seria actuar como el usuario y hacer una petici\xf3n a una ruta protegida por autenticaci\xf3n"),(0,s.kt)("li",{parentName:"ul"},'Finalmente el $response "pregunta" si fue redirigido a la ruta "/home" la cual es la ruta por defecto, aqu\xed se puede sustituir por la ruta que se espera')),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},'Nota: Asegurate de importar correctamente el modelo que deseas usar, en este caso es el de "User" y que este modelo tenga toda la definici\xf3n de la variable $fillable')),(0,s.kt)("p",null,"5.- Finalmente probamos los resultados de nuestros test con el comando"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"php artisan test\n")),(0,s.kt)("p",null,"Esto nos regresar\xe1 en consola los resultados de los tests y en cu\xe1les fallaron"),(0,s.kt)("h2",{id:"salidas"},"Salidas"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},'Tests autom\xe1ticos en la carpeta "test"')),(0,s.kt)("h2",{id:"autores"},"Autores"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Jose Carlos Pacheco Sanchez")),(0,s.kt)("h2",{id:"auditor\xeda"},"Auditor\xeda"),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Enlistar a las personas que revisaron la gu\xeda")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"})),(0,s.kt)("h2",{id:"versi\xf3n-10"},"Versi\xf3n 1.0"),(0,s.kt)("h1",{id:"bit\xe1cora-de-cambios"},"Bit\xe1cora de cambios"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Se cre\xf3 la plantilla.")))}d.isMDXComponent=!0}}]);