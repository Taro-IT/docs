# P24 - Proceso de mejora continua

## Objetivo(s)

- Institucionalizar la propuesta de mejoras a los artefactos de Taro.
- Asegurar el valor departamental de los artefactos.

## Entradas

- Mejora identificada en algún artefacto del departamento o equipo.

## Procedimiento

<table>
  <tr>
    <th>Fase</th>
    <th>Actividades</th>
    <th>Áreas involucrada(s)</th>
  </tr>
  <tr>
    <td>1. Definición</td>
    <td>
      <ul>
        <li>Verificar que la propuesta de mejora cumpla con al menos uno de los criterios de mejora definidos dentro de la plantilla de <a href="https://docs.google.com/spreadsheets/d/1B628YnkHppCLynz_SScm_8jGJMQRmqfNjoib9KChrU8/edit#gid=1718709943">propuestas de mejora</a>.
          <ul>
            <li>Si cumple, seleccionar las casillas correspondientes bajo la columna "Criterios de mejora" y pasar a la siguiente fase.</li>
            <li>Si no cumple, la propuesta no es de valor para Taro, terminar el proceso.</li>
          </ul>
        </li>
      </ul>
    </td>
    <td>
      <ul>
        <li>OPF - 1.3</li>
      </ul>
    </td>
  </tr>
    <tr>
    <td>2. Creación</td>
    <td>
      <ul>
        <li>Agregar la propuesta a la <a href="https://docs.google.com/spreadsheets/d/1B628YnkHppCLynz_SScm_8jGJMQRmqfNjoib9KChrU8/edit#gid=0">bitácora de mejoras</a> asignarse uno mismo como owner, agregar la fecha bajo la columna "Fecha de creación" y cambiar el estado a "Creada".</li>
        <li>Duplicar la plantilla de <a href="https://docs.google.com/spreadsheets/d/1B628YnkHppCLynz_SScm_8jGJMQRmqfNjoib9KChrU8/edit#gid=1718709943">propuesta de mejora</a> en el mismo archivo de Excel y nombrar de la siguiente manera: PIP-[0] donde el número entre corchetes deberá ir incrementando según las propuestas realizadas.</li>
        <li>Desarrollar la propuesta siguiendo la plantilla:
          <ul>
            <li>Llenar el campo "Owner" con el nombre de uno mismo.</li>
            <li>Detallar la propuesta de mejora bajo la columna "Descripción".</li>
            <li>Definir la línea base donde será implementada la propuesta bajo la columna "Alcance".</li>
            <li>Enlistar las áreas del CMMI que se verán beneficiadas por la implementación de dicha propuesta de mejora.</li>
            <li>Enlistar los artefactos que se verán afectados por la implementación de dicha propuesta de mejora.</li>
            <li>Detallar bajo la columna "Razón de la propuesta" la situación que originó dicha propuesta de mejora.</li>
            <li>Detallar bajo la columna "Resultado esperado" como se espera cumplir con los criterios de mejora seleccionados.</li>
          </ul>
        </li>
        <li>Comunicar a través del canal de Slack #taro-propuestas la definición o modificación de la propuesta de mejora y la línea base a la que se realiza dicha mejora.</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>OPF - 1.3</li>
        <li>OPF - 2.1</li>
      </ul>
    </td>
  </tr>
    <tr>
    <td>3. Aprobación</td>
    <td>
      <ul>
        Al menos un integrante de la línea base donde se implementará la propuesta (distinto al owner de la propuesta) deberá de aprobarla, para eso se seguirán los siguientes pasos:
        <li>Validar que la propuesta de mejora cumpla con los criterios de mejora definidos en el reporte de mejora.</li>
        <li>Si si cumple, cambiar el estado dentro de la <a href="https://docs.google.com/spreadsheets/d/1B628YnkHppCLynz_SScm_8jGJMQRmqfNjoib9KChrU8/edit#gid=0">bitácora de mejoras</a> a "Aprobada" y comunicar su aprobación al owner de la misma para que este pueda seguir con el proceso.</li>
        <li>Si no cumple: 
          <ul>
            <li>Cambiar el estado dentro de la <a href="https://docs.google.com/spreadsheets/d/1B628YnkHppCLynz_SScm_8jGJMQRmqfNjoib9KChrU8/edit#gid=0">bitácora de mejoras</a> a "Rechazada".</li>
            <li>Detallar en la columna de "Comentarios" la razón por la cual se rechazó.</li>
            <li>Comunicar al owner de la propuesta el estatus de la misma a través de Slack.</li>
            <li>El owner deberá de hacer las correcciones necesarias y volver a realizar el último paso de la fase de "Creación".</li>
          </ul>
        </li>
      </ul>
    </td>
    <td>
      <ul>
        <li>OPF - 1.3</li>
      </ul>
    </td>
  </tr>
    <tr>
    <td>4. Implementación</td>
    <td>
      <ul>
        <li>Por cada asset a modificar: 
          <ul>
            <li>Avisar al owner sobre las modificaciones que se van a realizar.</li>
            <li>Seguir el <a href="P03-proceso-institucionalizacion-assets">proceso de institucionalización de assets</a>.</li>
          </ul></li>
        <li>Una vez que todos los cambios han sido implementados, registrar la fecha en la <a href="https://docs.google.com/spreadsheets/d/1B628YnkHppCLynz_SScm_8jGJMQRmqfNjoib9KChrU8/edit#gid=0">bitácora de mejoras</a> bajo la columna "Fecha de finalización".</li>
        <li>Definir bajo la columna "Tiempo de evaluación" el intervalo de tiempo que se esperará a partir de la fase de "Difusión" para documentar los resultados de la propuesta.</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>OPF - 2.2</li>
      </ul>
    </td>
  </tr>
    <tr>
    <td>5. Difusión</td>
    <td>
      <ul>
        <li>Avisar a los integrantes de Taro a través del canal de Slack #taro-propuestas que la propuesta de mejora ha sido aprobada y definida.</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>OPF - 3.1</li>
      </ul>
    </td>
  </tr>
    <tr>
    <td>6. Seguimiento</td>
    <td>
      <ul>
        Una vez que ha pasado el tiempo de evaluación definido en la <a href="https://docs.google.com/spreadsheets/d/1B628YnkHppCLynz_SScm_8jGJMQRmqfNjoib9KChrU8/edit#gid=0">bitácora de mejoras</a>:
        <li>Documentar los resultados de la implementación de la propuesta de mejora bajo la columna "Resultado obtenido" dentro del reporte de mejora correspondiente.</li>
        <li>Actualizar la <a href="https://docs.google.com/spreadsheets/d/1B628YnkHppCLynz_SScm_8jGJMQRmqfNjoib9KChrU8/edit#gid=0">bitácora de mejoras</a>, indicando bajo la columna "Resultado" si la propuesta de mejora fue exitosa o no de acuerdo al "Resultado esperado" y "Resultado obtenido".</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>OPF - 3.4</li>
      </ul>
    </td>
  </tr>
</table>

## Salidas

- Propuesta de mejora definida e implementada.
- Matriz de mejoras actualizada.

## Autores

- María de los Ángeles Contreras Anaya

## Auditoría

- José Carlos Pacheco Sánchez

## Bitácora de cambios

### Versión 1.0

- Se creó el proceso.
