# G20 - Guía para sincronizar, respaldar y compartir archivos de configuración y variables de entorno

## Objetivo(s)

* Orientar en la creación y sincronización de archivos de variables de entorno, también conocidos como “archivos env” para agilizar el intercambio de claves de APIs y de entornos de prueba y producción.
* Contar con un registro centralizado de configuraciones tanto para desarrollo como para producción.
* Asegurar la confidencialidad y la integridad de claves de acceso importantes que pudieran comprometer el estado del proyecto si se usan de manera inapropiada.
* Aportar valor al equipo al apoyar en el complimiento de manejo de configuración en CMMI y las evaluaciones SCAMPI

## Pre-requisitos

* Contar con un entorno de pruebas o producción según sea la configuración que se desea compartir.
* Contar con alguna aplicación o proyecto que use variables como mecanismo de configuración.
* Tener permisos de lectura y escritura al Google Drive departamental.
* Que la carpeta de variables de entorno 

## Pasos a seguir

### Para consultar las variables de entorno de algún ambiente:
* Navegar al archivo de variables de entorno del proyecto
* Localizar el archivo correspondiente al entorno que se necesite: Local, Pruebas o Producción
* Descargar el archivo seleccionado

![image](/static/img/guias/G20/Imagen1.png)

### Para actualizar un archivo
* Localizar el archivo env con la nueva versión de las variables en la computadora del desarrollador.
* Subir el archivo a la carpeta con el nombre apropiado y la terminación “.env”
* Registrar el cambio en la bitácora de actualización.

![image](/static/img/guias/G20/Imagen2.png)


### Para consultar una versión anterior de un archivo:
En ocasiones puede ser necesario consultar una versión anterior de un archivo de configuración. Esto se puede realizar usando las funciones de versionado de Google drive.
* Localizar el archivo en la carpeta correspondiente.
* Hacer click secundario y en el menú emergente hacer click en gestionar versiones
* Buscar la versión necesaria.


![image](/static/img/guias/G20/Imagen3.png)

## Salidas
* Archivo(s) env con variables de entorno en la carpeta compartida de archivos env
* Registro en la bitácora de actualización si un archivo fue actualizado

## Autores
Eduardo Andrés Castillo Perera

## Auditoría

## Referencias

[Consultar o recuperar versiones anteriores de archivos - Centro de Aprendizaje de Google Workspace](https://support.google.com/a/users/answer/9308971?hl=es)

[We need to talk about the .env | Platform.sh](https://platform.sh/blog/2021/we-need-to-talk-about-the-env/)

[The Twelve-Factor App (12factor.net)](https://12factor.net/config)


# Bitácora de cambios

## Versión 1.0
  - Se creó la guía.
