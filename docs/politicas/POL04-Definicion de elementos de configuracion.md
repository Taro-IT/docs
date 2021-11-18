# POL04 - Políticas para los elementos de configuración y líneas base.

## Objetivo(s)

- Definir los productos de trabajo que están bajo Gestión de la Configuración dentro del departamento y los criterios para identificarlos.

- Definir las líneas base del departamento con el propósito de dar acceso a todos los elementos de configuración.

## Políticas

### Criterios para identificar elementos de configuración

- Todos los elementos que deban ser incluidos en un entregable o liberación.
- Todos los elementos que se espera que cambien con el tiempo ya sea por cambio de requisitos o correcciones.
- Código fuente y herramientas necesarias para construir un producto.
- Documentos que servirán como base para el desarrollo de un equipo.

### Productos de trabajo bajo Gestión de la Configuración

Los elementos de configuración identificados a partir de los criterios de la sección anterior, son los siguientes:

#### Internos

*Definen la forma de trabajo del departamento.*

- Procesos
- Políticas
- Guías
- Checklists
- Plantillas
- WBS
- Mapa de procesos

#### Entregables

Relativos al proyecto de software que deben ser entregados a los clientes.

- Handbook de arquitectura
- Configuración de las herramientas
- Diagramas y documentación técnica
- Wireframes
- Código fuente
- Suites de pruebas
- Manuales de usuario

#### Otros 

Son productos utilizados por el departamento para dar soporte en el desarrollo de la solución.

- Matriz de trazabilidad

### Nivel de los elementos de configuración

Los elementos de configuración tienen 3 niveles, estos se definen a continuación:

1. #### **Nivel dinámico**

   No existe ningún control ni gestión sobre el elemento de configuración. Para que un elemento de configuración de nivel dinámico pase a nivel controlado debe haber un proceso/mecanismo que permita tener un historial de cambios y versiones.

2. #### Nivel controlado

   Nivel intermedio donde existe cierto control sobre los elementos de configuración pero que aún no han sido verificados. Para que un elemento de configuración entre o salga de nivel controlado se debe seguir un proceso de verificación que se describe en el *proceso de institucionalización*. 

3. #### **Nivel estático**

   El conjunto de todos los elementos de configuración en nivel estático en una instancia de tiempo forman una línea base. Una línea base es un snapshot o una versión de los elementos de configuración que han sido aprobados y gestionados previamente en el nivel controlado.

### Líneas base

#### ¿Qué es una línea base?

Una línea base es la especificación de elementos de la configuración que han sido:

- **Identificados:** Son productos de trabajo que entran en la categoría de elementos de configuración según los criterios definidos y que siguen la *Guía de manejo de configuración* y *Guía de control de ramas* según sea necesario.

- **Auditados:** Productos de trabajo que han pasado por el *Proceso de auditorías* y han sido corregidos y aprobados.
- **Comunicados:** Productos de trabajo cuya existencia y cambios realizados se han comunicado a los miembros del departamento a través del canal de Slack #taro-assets
- **Controlados:** Productos de trabajo cuyas modificaciones fueron sometidas al *Proceso de modificación de assets*.

Y por lo tanto, corresponden a la última versión liberada y que está siendo usada por el departamento o los stakeholders.

#### Líneas base de Taro

| Línea base                                       | Matriz de configuración                                      |
| ------------------------------------------------ | ------------------------------------------------------------ |
| [Departamental](https://github.com/Taro-IT/docs) | [Matriz de configuración Taro](https://docs.google.com/spreadsheets/d/13zfQpqBBmqAT_znf1N4ebV_jcLBpeh_gjq9eHpkdOhk/edit#gid=0) |
| [Espresso](https://github.com/Taro-IT/Espresso)  | [Matriz de configuración Espresso](https://docs.google.com/spreadsheets/d/13zfQpqBBmqAT_znf1N4ebV_jcLBpeh_gjq9eHpkdOhk/edit#gid=1361951105) |
| [Frappé](https://github.com/Taro-IT/frappe)      | [Matriz de configuración Frappé](https://docs.google.com/spreadsheets/d/13zfQpqBBmqAT_znf1N4ebV_jcLBpeh_gjq9eHpkdOhk/edit#gid=579763828) |

El código fuente de los proyectos de equipo usara el control de versiones que brinda la herramienta Git. Las ramas base junto con su equivalente en el nivel de elemento de configuración serían los siguientes:

- **Rama main**:   Representa el nivel estático del código fuente. Además, establece una versión o un snapshot de la línea base del código fuente. El código en este nivel sería el utilizado en ambiente de producción.
- **Rama develop**:  Representa el nivel controlado del código fuente. Para pasar de un nivel dinámico a nivel controlado, o de nivel controlado a nivel estático se deben emplear mecanismos y validaciones que permiten verificar que se estén cumpliendo con los estándares de calidad del departamento.
- **Rama dinámica**:   Representa el nivel dinámico y en esta se encuentra todo el código que está en desarrollo, una vez que los cambios son validados cambia a nivel controlado en la rama develop.


## Versión 1.0
