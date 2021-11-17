
# P31 - Proceso para revisión de código

## Objetivo(s)

- Verificar que el código cuente con los estándares de calidad del equipo del departamento correspondiente.

## Entradas

- Subtarea lista para seguir el proceso de revisión originada del [proceso de trabajo en parejas](P23-proceso-trabajo-parejas)

## Procedimiento


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
          <li>Con base en la checklist de código del equipo correspondiente, el dueño del Pull Request (PR), verifica que cada ítem de la checklist sea cumplido en los cambios realizados en el código. Si un ítem no se cumple, se registra en el Defect Log y se corrige.</li>
          <li>Se comunica por medio de Slack o bien en la junta diaria del equipo que se creó un nuevo PR y que es necesario revisarlo.</li>
          <li>Se asigna una pareja que revisará el PR de manera aleatoria.</li>
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
          <li>La pareja que revisa el PR se dirige a la sección Files Changed para ver los archivos que fueron modificados en este PR.</li>
          <li>Utilizando la checklist de código del equipo correspondiente, la pareja marca si se cumplen los ítems de la misma en los cambios hechos por el autor del PR. Si algo no se cumple, se registra en el Defect Log.</li>
          <li>Si el PR es para revisar algun asset departamental, se debe seguir la <a href="../guias/G03-guia-revision-assets">Guía para revisión de assets</a></li>
        </ul>
      </td>
      <td>
        <ul>
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
          <li>Si se encontraron defectos al revisar el PR, se solicitan cambios, indicando el archivo y la modificación necesaria.</li>
          <li>Si no se encontraron defectos, la pareja aprueba el PR, notifica al autor, se hace el merge a dev y se borra la rama en la que se trabajaron los cambios.</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>MA 2.4</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Salidas

- Pull Request aprobado listo para lbieración bajo el proceso de liberación

## Autores

- Mauricio Alvarez Milán

## Auditoría

- 
## Bitácora de cambios

### Versión 1.0

- Se creó el proceso

### Versión 1.1

- Se agregaron los links a assets necesarios
- Se cambiaron las entradas y salidas