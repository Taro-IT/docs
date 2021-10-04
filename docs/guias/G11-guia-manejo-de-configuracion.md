# G11 - Guía de manejo de configuración

## Objetivo(s)

- Guiar a los miembros del departamento Taro sobre qué es el manejo de la configuración y las diferentes prácticas que se deben aplicar a los artefactos.

## Pre-requisitos

- Existe al menos algún artefacto.

## Pasos a seguir

### ¿Cómo manejar la configuración?

El manejo de configuración dentro de Taro nos permite mantener consistencia en los artefactos y los cambios que sufren, de tal forma que sea visible y accesible la evolución de nuestro trabajo para todos los miembros del departamento. 

Además, nos permite manejar las versiones de forma correcta para pode, de ser necesario, ver información generada en el pasado de forma ordenada.

Para poder cumplir con ello se siguen las siguientes prácticas:

#### Uso de identificadores únicos

Permiten identificar de forma rápida y clara el tipo de artefacto con el que se está trabajando.

- [Identificadores de assets](https://taro-it.github.io/docs/guias/G02-guia-definicion-assets)

Si tu artefacto no se encuentra en la guía anterior, puedes utilizar la siguiente tabla para encontrar el identificador único:

| Tipo de artefacto       | Prefijo | Ejemplo |
| ----------------------- | ------- | ------- |
| Diagrama                | DG      | DG09    |
| Wireframe               | WF      | WF01    |
| Checklist               | CH      | CH03    |
| Manual de usuario       | MU      | MU07    |
| Modelo Entidad Relación | MER     | MER10   |

Si tu artefacto no se encuentra definido en ninguna de las guías, definir un identificador único para el mismo y actualizar la tabla de arriba de acuerdo al [Proceso para actualizar assets](https://github.com/Taro-IT/docs/pull/75).

Para el caso de artefactos de equipo, se deberá utilizar el siguiente prefijo y concatenarse con un guión antes del código del artefacto de la tabla anterior:

- Espresso - **SS**
- Frappe - **PP**

Así para un diagrama del equipo Frappe, el nombre sería **PP-DG01**

#### Uso del Sistema de Control de Versiones

Permite mantener un registro constante de los cambios que sufre un artefacto. Taro utiliza la herramienta **Git** en conjunto con un sistema de nombres para llevar este control.

Para determinar de manera rápida y sencilla el estatus de un artefacto se definen los siguientes códigos de versión:

**X.YZ**

| Código | Descripción                                                  | Tipo      |
| ------ | ------------------------------------------------------------ | --------- |
| X      | Representa cambios de gran magnitud a un artefacto.          | Número    |
| Y      | Representa cambios menores a un artefacto.                   | Número    |
| Z      | Representa si la versión ya fue validada por el Configuration Control Board o es una versión inicial. (se quita la letra al ser validada por el CCB) | Letra "a" |

Así una versión de un artefacto que ha recibido 1 cambio de gran magnitud y 3 cambios menores y que ya ha sido validado por el CCB deberá versionarse así: **2.3**

**Nota:** Todas las versiones de todos los artefactos deben partir del **1.0a** donde se entiende que se trata de una versión inicial que no ha sido validada.

## Salidas

- Artefactos con identificador único correcto y versionado.

## Autores

- Juan Manuel Amador Pérez Flores
- María de los Ángeles Contreras Anaya

## Auditoría

- 

V1.0a