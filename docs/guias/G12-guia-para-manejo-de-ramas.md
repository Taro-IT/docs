# G12 - Guía para manejo de ramas

## Objetivo(s)

- Guiar sobre el uso de control de versiones 

## Pre-requisitos

- Tener git instalado

## Ramas permanentes

Las ramas permanentes son las líneas de código sobre las que se derivan las demás ramas y se integran continuamente.

![ramasMainGit](../../static/img/guias/G13/ramasMainGit.png)

### Master

En esta rama sólo existe código que está listo para desplegarse en producción, es la versión estable de los proyectos, es decir, la que contiene una solución utilizable. Dicha rama ha pasado todo el cluster de pruebas, además de las reviews de cada uno de los pull request generados. 

El merge de `dev` a `master` se realiza a través de un pull request. El único caso en donde se puede realizar un push directo a esta es con un hotfix, pero dicha acción deberá de ser aprobada por al menos un architecture owner.


### Dev

La rama de `dev` contiene las features más recientes, dichas features se agregan de una rama local a `dev` a través de un pull request cuando están completas según los criterios de aceptación. 

## Ramas temporales

Las ramas temporales son las ramas en las que se trabaja de forma local. Dichas ramas derivan de la rama permanente `dev`. La convención para nombrarlas es: 

`[Prefijo]/[Contexto/Epic]/[Nombre del item de trabajo]`.

La siguiente tabla explica los prefijos aceptados actualmente:


| Prefijo | Descripción | Ejemplo |
| ------- | ----------- | ------- |
| setup   | Esta rama es utilizada para hacer modificaciones al **ambiente de desarrollo.**| `setup/django/cambio-json-file` |
| feature | Esta rama es utilizada para el **desarrollo** de las _user stories_ o _features_ de la aplicación. | `feature/users/login_facebook` |
| fix     | Esta rama es utilizada para **arreglar errores** en el código dentro del ambiente de desarrollo. | `fix/users/login_facebook` |
| hotfix     | Esta rama es utilizada para **arreglar errores** en el código dentro del ambiente de producción. | `hotfix/users/login_facebook` |
| refactor    | Esta rama es utilizada para **cambiar y mejorar la lógica** utilizada en un _feature_. Generalmente estos cambios son necesarios después de la _validación de usabilidad_ con el cliente. | `refactor/users/login_facebook`
| docs    | Esta rama es utilizada para la subida o modificación de **documentos** en el repositorio. | `docs/G13-guia-para-manejo-de-ramas`

## Forma de trabajo

![gitflow](../../static/img/guias/G13/gitflow.png)

Para poder comenzar a desarrollar de forma local es necesario seguir los siguientes pasos:

- Clonar el repositorio base sobre el que se va a trabajar, puede ser cualquiera de los listados a continuación:

    - <p><a href="https://github.com/Taro-IT/docs"> Línea base del departamento</a></p>

    - <p><a href="https://github.com/Taro-IT/Espresso"> Línea base de Espresso</a></p>

    - <p><a href="https://github.com/Taro-IT/frappe"> Línea base de Frappe</a></p>

- Crear de forma local la rama `dev` y sincronizarla con la rama `dev` remota
<code><pre>git branch dev
git checkout dev
git pull origin dev
</pre></code>

- Crear la rama de trabajo de manera local siguiendo el sistema de ramas temporales y situarse en la misma.

<code><pre>git checkout -b feature/finance/invoice-payments 
</pre></code>

:::note

En este punto se encuentra sobre la rama local de desarrollo, por lo que se pueden agregar todos los cambios que sean necesarios haciendo commits de manera regular y siguiendo el estándar de [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

:::

<code><pre>
git add -A
git commit -m "feat(invoice-payments): add connection with third-party service" 
</pre></code>

- Una vez que se ha terminado el trabajo de forma local, se deberán traer los cambios de la rama `dev` remota y así asegurar que los conflictos que puedan existir se resuelvan de manera local: 

<code><pre>
git pull dev 
</pre></code>

- Después de resolver los conflictos, se deberán de enviar los cambios locales al repositorio remoto donde se solicitará el pull request hacia `dev`.
    
<code><pre>
git push origin feature/finance/invoice-payments 
</pre></code>   

- Seguir la [guía para realizar un pull request](https://taro-it.github.io/docs/guias/G20-guia-archivos-env).

- Una vez aprobado el pull request, eliminar la rama local sobre la que se estaba trabajando desde la UI de GitHub.

## Autores
- Juan Manuel Amador Perez Flores

## Auditoría
- Adolfo Acosta Castro
- María de los Ángeles Contreras Anaya

# Bitácora de cambios

## Versión 1.1
  - Se corrigen errores de ortografía
  - Se quitan párrafos u oraciones repetitivas
  - Se añaden saltos de línea entre comandos para que sea más fácil de entender.
  - Se agrega el prefijo hotfix

## Versión 1.0
  - Se creó la guía.
