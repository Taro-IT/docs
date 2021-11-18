# P09 - Proceso para entrega de SCAMPI

## Objetivo(s)

- Evaluar los procesos del departamento con el fin de mejorarlos y alcanzar un nivel de madurez 2.

## Entradas

- Tener identificadas las áreas a evaluar.
- Necesidad de mejora y retroalimentación en áreas definidas.
- Petición de evaluación por parte del evaluador 

<table>
  <thead>
    <tr>
      <th>Fase</th>
      <th>Actividad</th>
      <th>Área(s) involucradas</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Solicitud</td>
      <td>
        <ul>
          <li>Comunicarse con el evaluador o la evaluadora para agendar fecha y hora de entrega, seguir la <a href="https://taro-it.github.io/docs/guias/G01-guia-para-agendar-juntas">guía para agendar juntas</a>.</li>
          <li>Avisar por el canal de slack taro-general la fecha y hora de la entrega.</li>
        </ul>
      </td>
      <td rowspan="3">
        <ul><li>OPF - 1.2</li><li>VER- 1.1</li><li>OPF - 1.2</li><li>VER -  1.2</li><li>VER - 1.3</li><li>VAL - 1.1</li><li>VAL - 1.2</li></ul>
      </td>
    </tr>
    <tr>
      <td>Creación</td>
      <td>
        <ul>
          <li>Crear una copia del <a href="https://docs.google.com/spreadsheets/d/1trRd8J3lm7lMjZJck7JbxtUdJlLRZkapo7FPQ3G_J24/edit#gid=209818233">tablero del SCAMPI</a> y nombrar de la siguiente manera: SCAMPI_[#deEvaluación].</li>
          <li>Agregar todas las áreas a evaluar dentro del tablero SCAMPI.</li>
          <li>Agregar el tablero SCAMPI a la matriz de configuración definiendo el nivel como "Dinámico" y asignándose uno mismo con owner(si dos o más personas están trabajando el tablero, elegir solo a uno).</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Desarrollo</td>
      <td>
        <ul>
          <li>Completar el tablero tomando como referencia la pestaña "Guía del tablero".</li>
          <li>Por cada área del CMMI a evaluar: 
            <ul>
              <li>Identificar los assets donde se define la práctica.</li>
              <li>Identificar los productos de trabajo que sirven como evidencia de la implementación de la práctica.</li>
              <li>Agregar el nombre y el enlace de los artefactos indentificados dentro de la sección y práctica correspondiente.</li>
              <li>Marcar como "Sí" a la pregunta "¿La práctica está completamente definida?" si las subprácticas están definidas en nuestra forma de trabajo.</li>
              <li>Marcar como "Sí" a la pregunta "¿La práctica está completamente implementada?" si existe evidencia de que todo el departamento lleva a cabo lo definido en la forma de trabajo.</li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Difusión</td>
      <td>
      <li>Crear una copia de la <a href="https://docs.google.com/spreadsheets/d/1Hr3ab5XTAcUgdhaBFc5iaN5Qahe8IAZbLFuvvKzY0Ss/edit#gid=0">checklist de entrega de SCAMPI </a>, se deberá nombrar de la siguiente manera: [ID_ARTEFACTO_A_EVALUAR]</li>
          <li>Llenar ID, nombre del artefacto y versión.</li>
          <li>Completar la sección "Áreas del CMMI a evaluar" indicando las áreas a evaluar dentro del tablero SCAMPI y estableciendo el "Estado" de estas como "Sin verificar".</li>
        <li>Comunicar a través del canal de slack taro-general que el tablero ha sido completado y está listo para su verificación añadiendo el enlace a la checklist creada.</li>
      </td>
      <td rowspan="2">
      <ul>
        <li>OPF - 1.2</li>
        <li>VER - 2.2</li>
        <li>VER - 3.1</li>
        <li>PPQA - 1.1</li>
        <li>PPQA - 1.2</li>
        <li>PPQA - 2.1</li>
        </ul>
      </td>
    </tr>
    <tr>
    <td>Verificación</td>
      <td>
        <ul>
          <li>Dentro de la matriz de configuración, asegurarse que el nivel del tablero es "Controlado".</li>
          <li>Verificar que los criterios de gestión de la configuración y difusión se cumplan (llenar la columna "¿Cumple?" para que refleje los resultados de dicha verificación). </li>
          <li>Para la verificación de cada área a evaluar se deberá hacer lo siguiente: 
            <ul>
              <li>Dentro de la checklist, cambiar el estado del área a "En proceso".</li>
              <li>Duplicar la hoja "Template Area" y nombrar de la siguiente manera: [Área]-VER[00], donde 00 deberá ir incrementando según las verificaciones que se hayan hecho anteriormente.</li>
              <li>Llenar área del CMMI y verificadores.</li>
              <li>Verificar que dicha área cumple con todos y cada uno de los elementos definidos en la checklist.</li>
              <li>Llenar la columna "¿Cumple?" para que refleje los resultados de la verificación anterior.</li>
          <li>Si el área no cumple con un elemento:
          	<ul>
              <li>Agregar comentarios para detallar las observaciones.</li>
              <li>Comunicar al departamento de las observaciones realizadas a través del canal de slack taro-general.</li>
              <li>Actualizar la versión del tablero dentro de la matriz de configuración, aumentando en una unidad el valor del número de la derecha.</li>
              <li>Los <a href="https://docs.google.com/spreadsheets/d/1TVphnJJ8Fs1tjc2MPeg-Vpy9lEqMeVrbBeRvzP8b-gw/edit#gid=0">responsables del área</a> deberán hacer las correcciones necesarias y comunicar que esta se ha corregido para ser verificada nuevamente.</li>
              <li>Dentro de la matriz de configuración, se debe actualizar la última fecha de modificación del tablero.</li>
            </ul>
            </li>
              <li>Una vez que el área cumpla con todos los elementos de la checklist, cambiar su estado a "Verificada".</li>
          </ul>
         </li>
          <li>Si todas las áreas y el tablero en sí cumple con todos los elementos de la checklist, continuar con la siguiente fase.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Entrega.</td>
      <td>
      	<ul>
          <li>Cambiar el nivel del tablero dentro de la matriz de configuración a "Estático".</li>
          <li>Comunicar por el canal de slack taro-general que la verificación ha sido completada y que se procederá a la entrega del tablero.</li>
          <li>Enviar el enlace del tablero al evaluador(a) para iniciar la evaluación.</li>
          <li>Agendar la fecha y hora de la sesión de retroalimentación proporcionada por el evaluador(a) dentro del calendario departamental.</li>
          <li>Comunicar la fecha y hora de la sesión de retroalimentación al departamento por el canal de slack taro-general.</li>
        </ul>
      </td>
      <td rowspan="2">
        <ul>
          <li>OPF - 1.2</li>
          <li>VAL - 2.1</li>
          <li>VAL - 2.2</li>
          <li>PPQA - 2.1</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Seguimiento</td>
      <td>
        <ul>
          Durante la sesión de retroalimentación:
          <li>Anotar las observaciones de los evaluadores en el mismo archivo entregado. </li>
          <li>Seguir el proceso para <a href="https://taro-it.github.io/docs/procesos/P28-proceso-atender-retro">atender retroalimentación</a>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>


## Salida

<ul><li>Evento en calendario virtual</li><li>Enlace con documento de SCAMPI</li></ul>

## Autores

- José Carlos Pacheco Sánchez
- Eric Buitrón López
- Eduardo Andrés Castillo Perera
- María de los Ángeles Contreras Anaya

## Auditoría
- Raúl Rosario Sandoval Galaviz

# Bitácora de cambios

## Versión 1.2
  - Se refactorizó el proceso para incluir el tablero a la matriz de configuración, referencia al proceso de retroalimentación y una mejor definición del uso de la checklist de SCAMPI.

## Versión 1.1
  - Se añadió referencia a la checklist de entrega SCAMPI.

## Versión 1.0
  - Se creó el proceso.