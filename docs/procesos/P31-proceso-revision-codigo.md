
# P31 - Proceso para revisión de items de trabajo

## Objetivo(s)

- Verificar que los items de trabajo cuenten con los estándares de calidad del equipo del departamento correspondiente.

## Entradas

- Subtarea lista para seguir el proceso de revisión originada del [proceso de trabajo en parejas](P23-proceso-trabajo-parejas).

## Procedimiento

:::note

Si es la primera vez que se revisa un item de una historia de usuario, realizar una hoja duplicada de la <a href="../checklists/CH02-checklist-items-trabajo">checklist original de items de trabajo</a> del equipo correspondiente con el identificador del caso.

:::

<table>
  <thead>
    <th>Fase</th>
    <th>Actividades</th>
    <th>Área(s) involucradas</th>
  </thead>

  <tbody>
    <tr>
      <td>Preparación del dueño</td>
      <td>
        <ul align="left">
          <li>Con base en la <a href="../checklists/CH02-checklist-items-trabajo">checklist de items de trabajo</a> del equipo correspondiente,  verifica que cada punto se cumpla. Si un ítem no se cumple, se registra en el Defect Log y se corrige.</li>
          <li>Se comunica por medio de Slack o bien en la junta diaria del equipo que hay un item de trabajo listo para revisión.</li>
          <li>Se asigna una pareja que revisará el item de manera aleatoria.</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>VER 1.1</li>
          <li>VER 2.1</li>
          <li>MA 2.1</li>
          <li>MA 2.3</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Revisión</td>
      <td>
        <ul align="left">
          <li>Si el cambio a revisar está en un PR, la pareja se dirige a la sección Files Changed para ver los archivos que fueron modificados en este PR.</li>
          <li>Utilizando la checklist de la fase correspondiente del item, la pareja marca si se cumplen los puntos de la misma en los cambios hechos por la persona que realizó los cambios. Si algo no se cumple, se registra en el Defect Log.</li>
          <li>Si el item a revisar es algun asset departamental, se debe seguir la <a href="../guias/G03-guia-revision-assets">Guía para revisión de assets</a></li>
        </ul>
      </td>
      <td>
        <ul>
          <li>PPQA 1.2</li>
          <li>VER 1.1</li>
          <li>VER 2.2</li>
          <li>VER 3.1</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Post-revisión</td>
      <td>
        <ul align="left">
          <li>Si se encontraron defectos durante la revisión, se solicitan cambios, indicando el archivo y la modificación necesaria.</li>
          <li>Si no se encontraron defectos, notifica al autor. Si se revisó un PR, se hace el merge a dev y se borra la rama en la que se trabajaron los cambios.</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>PPQA 2.1</li>
          <li>MA 2.4</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Salidas

- Pull Request aprobado listo para liberación bajo el proceso de liberación.

- Subtarea lista para la siguiente etapa de la fase de construcción siguiendo el [proceso de trabajo en parejas](P23-proceso-trabajo-parejas).

## Autores

- Mauricio Alvarez Milán
- Jan Limpens Gutiérrez
- Eduardo Andrés Castillo Perera
- Eric Buitrón López

## Auditoría

- 

## Bitácora de cambios

### Versión 1.0

- Se creó el proceso

### Versión 1.1

- Se agregaron los links a assets necesarios
- Se cambiaron las entradas y salidas

### Versión 1.2

- Se cambió el proceso para hacerlo más génerico y no sólo de revisión de código.
