# G17 - Guía para Defect Log

## Objetivo(s)

- Orientar la forma de registro y trazabilidad de los defectos encontrados en los proyectos de los equipos [Espresso](https://github.com/Taro-IT/espresso/) y [Frappé](https://github.com/Taro-IT/frappe/)

## Pre-requisitos

- Haber encontrado uno o más defectos.

- Tener abierto el Defect Log del equipo correspondiente.
  
  [Espresso](https://docs.google.com/spreadsheets/d/1aiQkJpEtYj8rsVycI7SMNlh0WW4Pyh4iquz-D7aa-DA/edit#gid=0)


  [Frappé](https://docs.google.com/spreadsheets/d/1p8eNzn0IgJH-SGfaK-i6bGYGC0DOQpu-bQXMhOE0LYU/edit#gid=136918999)

## Pasos a seguir

### Asignar clasificación al defecto encontrado

Con base en la tabla `Table C20 Defect Type Standard` identificar qué tipo de defecto es el que se identificó y registrarlo como una nueva fila en la tabla con la lista de defectos en la columna `Tipo de Defecto`.

### Agregar descripción

En la columna `Descripción` se debe explicar de manera breve y clara el defecto encontrado.

### Severidad

Con base en la tabla `Nivel de severidad`, se debe asignar uno de éstos al defecto encontrado, agregándolo en la columna `Severidad` de la lista de defectos.

:::note

Los niveles de severidad están basados en el [estándar de IBM](https://www.ibm.com/support/pages/ibm-enterprise-support-and-preferred-care-severity-definitions)

:::

### Agregar fecha en la que se encontró

En la columna `Fecha de hallazgo` se debe registrar la fecha en la que se identificó el defecto.

### Registrar fase en donde se encontró

En la columna `Fase de hallazgo` se debe registrar la fase en donde **se identificó** el defecto (Análisis, Diseño, Desarrollo, Pruebas, Verificación o Entrega).

### Regitrar fase en donde se inyectó

En la columna `Fase de inyección` se debe registrar la fase en donde **se originó** el defecto (Análisis, Diseño, Desarrollo, Pruebas, Verificación o Entrega).

### Registrar quién lo encontró

En la columna `Encontrado por:` se debe registrar el nombre de la(s) persona(s) que detectó el defecto por primera vez.

### Actualizar el estatus

Cuando se registra por primera vez el defecto, la columna `Estatus` deberá tener el valor `Encontrado`.

Cuando se comience a corregir el defecto, este valor deberá ser actualizado por `Corrigiendo`, y cuando se haya solucionado por completo, el valor deberá ser `Arreglado`.

### Registrar fecha de correcicón

Una vez que el estatus del defcto sea `Arreglado`, en la columna `Fecha de corrección` se debe registrar la fecha en la que se solucionó el defecto por completo.

### Registrar quién lo corrigió

En la columna `Corregido por:` se debe registrar el nombre de la(s) persona(s) que trabajaron en el defecto hasta que se solucionara por completo.

### Registrar costo del defecto

Finalmente, en la columna `Costo (hrs)` se debe registrar la cantidad de horas trabajadas que tomó solucionar el defecto por completo.



## Salidas

- Uno o más defectos nuevos identificados y registrados.

## Autores

- Iván Alejandro Díaz Peralta
- Mauricio Alvarez Milán 

## Auditoría

- Adolfo Acosta Castro

## Versión 1.0

- Se creó el proceso.