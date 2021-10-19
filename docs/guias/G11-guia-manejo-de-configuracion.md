# G11 - Guía de manejo de configuración

## Objetivo(s)

- Guiar a los miembros del departamento Taro sobre qué es el manejo de la configuración y las diferentes prácticas que se deben aplicar a los artefactos.

## Pre-requisitos

- Existe al menos algún artefacto.

## Pasos a seguir

### ¿Cómo manejar la configuración?

El manejo de configuración dentro de Taro nos permite mantener consistencia en los artefactos y los cambios que sufren, de tal forma que sea visible y accesible la evolución de nuestro trabajo para todos los miembros del departamento. 

Además, nos permite manejar las versiones de forma correcta para poder, de ser necesario, ver información generada en el pasado de forma ordenada.

Para poder cumplir con ello se siguen las siguientes prácticas:

#### Uso de identificadores únicos

Permiten identificar de forma rápida y clara el tipo de artefacto con el que se está trabajando.

- [Identificadores de assets](https://taro-it.github.io/docs/guias/G02-guia-definicion-assets)

Si tu artefacto no se encuentra en la guía anterior, puedes utilizar la siguiente tabla para encontrar el identificador único:

| Tipo de artefacto             | Prefijo | Ejemplo |
| ----------------------------- | ------- | ------- |
| Diagrama (cualquiera del UML) | DG      | DG09    |
| Wireframe                     | WF      | WF01    |
| Checklist                     | CH      | CH03    |
| Manual de Usuario             | MS      | MU07    |
| Modelos (MER y MR)            | M       | M10     |
| Work Breakdown Structure      | WBS     | WBS     |
| Handbook de Arquitectura      | HA      | HA      |
| Suites de Pruebas             | TS      | TS06    |
| Mapa de Procesos              | MP      | MP      |
| Documentación Técnica         | DT      | DT06    |
| Matrices                      | MAT     | MAT05   |



Si tu artefacto no se encuentra definido en ninguna de las guías, definir un identificador único para el mismo y actualizar la tabla de arriba de acuerdo al [Proceso para actualizar assets](https://github.com/Taro-IT/docs/pull/75).

Para el caso de artefactos de equipo, se deberá utilizar el siguiente prefijo y concatenarse con un guión antes del código del artefacto de la tabla anterior:

- Espresso - **SS**
- Frappe - **PP**

Así para un diagrama del equipo Frappe, el nombre sería **PP-DG01**

#### Uso del Sistema de Control de Versiones

Permite mantener un registro constante de los cambios que sufre un artefacto. Taro utiliza la herramienta **Git** en conjunto con un sistema de nombres para llevar este control.

Para determinar de manera rápida y sencilla el estatus de un artefacto se definen los siguientes códigos de versión:

**X.Y**

| Código | Descripción                                                  | Tipo   |
| ------ | ------------------------------------------------------------ | ------ |
| X      | Representa una versión de nivel estático del artefacto, es decir una versión que se incluye en una línea base. | Número |
| Y      | Representa cambios realizados a un artefacto durante un nivel controlado. | Número |

Así un artefacto que ha sido incluido en una línea base y que ha sufrido 3 cambios ya que la forma de trabajo ha permitido identificar que el artefacto no cumple con su función como debería, deberá versionarse así: **1.3**

**Nota:** Todas las versiones de todos los artefactos deben partir del **0.0** donde se entiende que se trata de una versión inicial en nivel dinámico.

## Salidas

- Artefactos con identificador único correcto y versionado.

## Autores

- Juan Manuel Amador Pérez Flores
- María de los Ángeles Contreras Anaya

## Auditoría

- Eric Buitrón López

# Bitácora de cambios

## Versión 1.0
  - Se creó la guía.
