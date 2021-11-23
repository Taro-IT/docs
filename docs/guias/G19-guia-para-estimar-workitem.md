# G19 - Guía para estimar un work item

## Objetivos

- Estimar correctamente todos los work items identificados dentro de un plan, incluso sin datos históricos.

## Pre-requisitos

- Tener un plan con los work items identificados.
- Matriz de interesados.
- Matriz de disponibilidad del equipo.

## Pasos a seguir

:::note

Todos los pasos descritos a continuación se deben realizar por cada work item.

:::

### Para la estimación de costo:

1. Identificar a las personas que serán asignadas para realizar el work item.

2. Estimar el tiempo que le llevará a todas las personas asignadas terminar el work item.
   - Si no se tienen datos históricos, es decir, métricas que indiquen si se tiende a sobreestimar o subestimar el costo, se realizará una suposición de lo que predicen que tomará ese work item.
   - Si se tienen datos históricos, a la estimación original se le restará o sumará lo que porcentualmente se tiende a sobreestimar o subestimar, respectivamente.

:::note

Si varias personas tienen asignado el mismo work item, el costo es la suma del tiempo de trabajo de esas personas, por ejemplo, si dos personas trabajan por una hora en un work item, el costo será de dos horas.

:::

3. Si el costo individual de todos los work items que tiene asignados una persona es mayor a lo que indica la matriz de disponibilidad, deberá ocurrir una renegociación del plan.

### Para la estimación de valor:

1. Obtener el costo total de la suma del costo individual de todos los work items.

2. Obtener el valor del work item de la división de costo del work item entre el costo total.

### Para la estimación de calendario:

1. Teniendo en cuenta la matriz de disponibilidad analizar cuándo se estima será la fecha de finalización de cada work item en función a la disponibilidad de la persona y el costo del work item.

2. Al momento de estimar el calendario, se debe tomar en cuenta las dependencias entre work items:

   - Identificar los work items de los cuales dependen otros work items y asignarles una fecha lo más próxima posible al inicio del plan.

3. Al acabar la estimación, si la fecha de finalización del proyecto es menor al objetivo del mismo, deberá ocurrir una renegociación.

## Salidas

- Plan actualizado.

## Autores

- Saúl Axel Palacios Acosta

## Auditoría

- María de los Ángeles Contreras Anaya

## Glosario

- **Work item**: Una tarea identificada dentro del proyecto.
- **Costo**: El costo en horas humanas que tomará en realizar un work item.
- **Costo total**: La suma del costo de todos los work items.
- **Valor**: El valor que tiene un work item en el proyecto, se obtiene dividiendo el costo del work item entre el costo total.

# Bitácoras de cambios

## Versión 1.1

- Se corrigieron errores de ortografía
- Se agregó una nota
- Se puso en bold los términos del glosario
- Falta enlazar a matrices de interesados y de disponibilidad

## Versión 1.0

- Se creó la guía
