# P08 - Proceso de gestión de riesgos

## Objetivo(s)

- Identificar, analizar y priorizar los riesgos para el departamento y para los equipos.
- Tener un control y un monitoreo sobre los riesgos.

## Entradas

- Riesgo no gestionado identificado en la [definición de un plan](./P11-proceso-de-definicion-del-plan-inicial), o en la [retrospectiva de la iteración](./P16-proceso-retrospective).

## Procedimiento

| Fase              |                                                                                                                                                                                                                                                                                                                                                                          Actividades                                                                                                                                                                                                                                                                                                                                                                          | Área(s) involucradas                                                             |
| ----------------- | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | -------------------------------------------------------------------------------- |
| 1. Identificación | <ul align="left"><li>Abrir la [Matriz de riesgos de Taro](https://docs.google.com/spreadsheets/d/1L_IWQMrYGR4vnJVB-YF48OHtPyNLnXWxmzz2g-aHHGM/edit#gid=0), [Matriz de riesgos de Frappé](https://docs.google.com/spreadsheets/d/11f-Dfe_lYfQPmQ0-v8wUIxH0FNwlYDN0DKBrRPcf1ks/edit#gid=0), o [Matriz de riesgos de Espresso](https://docs.google.com/spreadsheets/d/1JnAqpLpd-TLpKlqAa5cpC9Z8KsISirue2D7bM9T4GQQ/edit#gid=0).</li><li> Consultar la [Guía para definir riesgos](../guias/G06-guia-definicion-riesgos). </li><li>Encontrar y documentar la causa o el origen del riesgo.</li><li>Describir el riesgo y categorizarlo de acuerdo a las categorías dentro de la guía.</li><li>Identificar a los stakeholders involucrados en el riesgo.</li></ul> | <ul><li>RKM - 1.1</li><li>RKM - 1.2</li><li>RKM -2.1</li> <li>PP - 2.2</li></ul> |
| 2. Análisis       |                                                                                                       <ul align="left"><li>Definir la probabilidad de que el riesgo ocurra (en porcentaje).</li><li> Definir el impacto que tendría el riesgo en caso de ocurrir (en una escala del 1 - 10, siendo 1 un impacto muy pequeño, y 10 un impacto muy grande). </li><li> Definir la magnitud del riesgo multiplicando la probabilidad con el impacto. Los riesgos con mayor magnitud serán los de mayor prioridad. </li><li>Definir la clasificación del riesgo de acuerdo a la [Guía para definir riesgos](../guias/G06-guia-definicion-riesgos).</li></ul>                                                                                                       | <ul><li>RKM - 1.2</li><li>RKM - 2.2</li><li>PP - 2.2</li></ul>                   |
| 3. Estrategias    |                                                                                                                                                        <ul align="left"><li> En caso de que el riesgo dependa del departamento, se plantea un plan de mitigación (de lo contrario no se hace).</li><li> Definir un plan de contingencia (procedimientos alternativos a la operación normal del departamento para evitar el riesgo).</li><li> En caso de que el riesgo sea de magnitud alta (más de 6.0), agregar en forma de work item actividades a realizar para que el riesgo no suceda. </li></ul>                                                                                                                                                        | <ul><li>RKM - 1.2</li><li>RKM - 3.1</li><li>PMC - 1.3</li></ul>                  |
| 4. Documentación  |                                                                                                                                                                                                                                                                                             <ul align="left"><li> Documentar los cambios realizados en la bitácora de cambios del plan de riesgos, con la fecha de modificación y el autor de la misma.</li></ul>                                                                                                                                                                                                                                                                                             | <ul><li>RKM - 3.2</li></ul>                                                      |

## Salidas

- Ítems de trabajo de los riesgos de mayor prioridad.
- En caso de exceder la magnitud 6, salen ítems de trabajo para contemplar en el [plan de la iteración](./P12-proceso-planeacion-de-iteracion).

## Autores

- Iván Alejandro Díaz
- Jan Limpens

## Auditoría

- Eric Butirón
- Jose Carlos Pacheco

## Bitácora de cambios

### Versión 2.0

- Se institucionalizó el asset.

### Versión 1.3

- Se elimina la fase 5 ya que esta se incluye en otros procesos y se pasa la lista para clasificar un riesgo a la [Guía para definir riesgos](../guias/G06-guia-definicion-riesgos).

### Versión 1.2

- Se agregaron links a procesos en entradas y salidas.
- Se corrigieron errores de sintaxis.

### Versión 1.1

- Se aclararon algunos puntos del proceso.
- Se agregó una fase de seguimiento.

### Versión 1.0

- Se creó el proceso.
