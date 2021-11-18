# P15 - Proceso de auditorías

## Objetivo(s)

- Brindar un mecanismo para evaluar objetivamente procesos y productos de trabajo.
- Identificar y comunicar las no conformidades en productos de trabajo realizados.
- Asegurar la calidad de los procesos y los productos de trabajo realizados por el departamento.

## Entradas

- Contar con la plantilla de [informe de auditoría](https://docs.google.com/spreadsheets/d/10fpQ2uBc86t82SmW0gbTYlMPVWJhpLYFydRohknl13g/edit#gid=2040736568).
- Proceso a auditar y línea base definida en la [bitácora de auditorías](https://docs.google.com/spreadsheets/d/10fpQ2uBc86t82SmW0gbTYlMPVWJhpLYFydRohknl13g/edit#gid=0).
- Auditoría requerida comunicada al departamento a través del canal de Slack taro-ccb.

## Procedimiento

<table>
  <thead>
    <th>Fase</th>
    <th>Actividades</th>
    <th>Área(s) involucradas</th>
  </thead>
    <tbody>
    <tr>
      <td>Preparación</td>
      <td>
        <ul align="left">
          <li>Seleccionar el proceso a auditar en orden de ingreso a la bitácora de auditorías.</li>
          <li>Dentro de la bitácora de auditorías, llenar el campo de auditores.</li>
          <li>Hacer una copia de la plantilla informe de auditorías y nombrarla con el identificador de la auditoría correspondiente, es decir el nombre para el archivo de la primer auditoría debería de ser: AU01.</li>
          <li>Llenar los datos requeridos, tales como: ID de auditoría, nombre del proceso a auditar y versión.</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>VER 1.1</li>
          <li>VER 1.2</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Ejecución</td>
      <td>
        <ul align="left">
          <li>Dentro de la bitácora de auditorías llenar el campo de fecha de auditoría y cambiar el estado a "En curso".</li>
          <li>Abrir el proceso que se está auditando y los productos de trabajo necesarios que permitan visualizar el uso del proceso auditado.</li>
          <li>Verificar paso por paso el proceso, en caso de que existan no conformidades registrarlas dentro del informe de auditoría.</li>
          <li>Por cada, no conformidad identificada cambiar el estado de la misma a "En espera" para que los responsables del proceso le den seguimiento.</li>
          <li>En la bitácora de auditorías:</li>
          	<ul>
              <li>Cambiar el estado de la auditoría a "Completada".</li>
              <li>Si se identificaron no conformidades, marcar el checkbox de la columna correspondiente, poner el estado de las mismas como "Identificadas" y definir una fecha límite para su resolución.</li>
          </ul>
        </ul>
      </td>
      <td>
        <ul>
          <li>CM 1.2</li>
          <li>CM 2.1</li>
          <li>CM 2.2</li>
          <li>PPQA 1.1</li>
          <li>PPQA 2.2</li>
          <li>VER 1.2</li>
          <li>VER 1.3</li>
          <li>VER 2.2</li>
          <li>VER 3.1</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Comunicación de resultados</td>
      <td>
        <ul align="left">
          <li>Notificar a los responsables del proceso a través del canal de Slack taro-ccb que la auditoría ha finalizado para que estos revisen el resultado de la misma.</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>PPQA 2.1</li>
        </ul>
      </td>
    </tr>
      <tr>
      <td>Seguimiento</td>
      <td>
        <ul align="left">
          <li>Los responsables del proceso deben revisar el informe de auditoría.</li>
          <li>Si se identificaron no conformidades:
            <ul>
              <li>Designar con el otro responsable del proceso una fecha para la corrección de no conformidades, teniendo en cuenta la fecha límite.</li>
              <li>Al empezar a trabajar en estas correcciones, cambiar el estado en la bitácora de auditorías a "En curso".</li>
              <li>Corregir cada una de las no conformidades identificadas y cambiar su estado dentro del informe de auditoría a corregido.</li>
              <li>Si existe un desacuerdo entre auditor y responsable del producto de trabajo sobre alguna no conformidad, cambiar el estado de esta a "Reconsiderado" y explicar en la columna de "Comentarios" el porqué del desacuerdo.</li>
              <li>Al terminar con el listado de no conformidades, cambiar el estado de las mismas dentro de la bitácora de auditorías a "Resueltas" y llenar el campo "Fecha real de resolución" con la fecha pertinente.</li>
              <li>Comunicar por medio del canal de Slack taro-ccb a los auditores del proceso de la resolución de no conformidades.</li>
            </ul>
          </li>
          <li>Los auditores deben revisar que las no conformidades se hayan resuelto de manera satisfactoria y cambiar el estado de la auditoría a "Completada".</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>PPQA 2.1</li>
          <li>PPQA 2.2</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Salidas

- Informe de auditoría generado con todas las no conformidades resueltas.
- Bitácora de auditorías actualizada.

## Autores

- María de los Ángeles Contreras Anaya

## Auditoría

- Jan Limpens Gutiérrez
- Raul Rosario Sandoval Galaviz


# Bitácora de cambios

## Versión 1.0
  - Se creó el proceso.


