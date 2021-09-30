# P16 - Proceso Actualizacion de Assets

## Objetivo(s)

Mantener una gestion y control de los cambios que sufren los assets y lineas de codigo dia a dia, para que todos los miembros del departamento tengan facil acceso a las versiones mas recientes de los mismos.

## Entradas

1.-Asset o linea de codigo

2.-Un cambio o actualizacion a uno de dichos elementos

## Procedimiento


<table>
  <thead>
    <th>Fase</th>
    <th>Actividades</th>
    <th>Área(s) involucradas</th>
  </thead>

  <tbody>
    <tr>
      <td>Análisis</td>
      <td>
        <ul align="left">
          <li>Identifica los archivos que van a sufrir un cambio para incluirlos
      en la solicitud y utilizando la <a
      href="">
      Guía de versionado</a> identifica los cambios de versión
      necesarios.</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>CM, REQM</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Implementacion</td>
      <td>
        <ul align="left">
          <li>Crea un <strong>Pull Request</strong> hacia el repositorio de los
      archivos afectados. En caso de ser un repositorio de código sigue la <a
      href="">
      Guía de Manejo de Ramas </a> y en caso de ser un repositorio de documentación,
      e.g. Wiki, sigue la <a
      href="">Guía de Actualizacion de Wiki
      </td></li>
        </ul>
      </td>
      <td>
        <ul>
          <li>CM, REQM, RM</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Verificación y validación</td>
      <td>
        <ul align="left">
          <li>En el <strong> Pull Request </strong> describe la justificación para
          realizar el cambio.</li>
          <li>Notifica a tu equipo de la nueva solicitud para que puedan apoyarte
          con sus <em>reviews</em>.</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>CM, REQM,VAL, VER</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Corrección y Mejora</td>
      <td>
        <ul align="left">
          <li>Realiza las modificaciones necesarias a partir de los
      <em>reviews</em> de tus compañeros.</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>CM, REQM, VAL, VER</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Publicación</td>
      <td>
        <ul align="left">
          <li>Haz <em>merge</em> de los cambios o valida que se completo el pull request</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>CM, REQM, VAL, VER</li>
        </ul>
      </td>
    </tr>

    
  </tbody>
</table>

## Salidas

1. **Pull Request** aprobado y _mergeado_.
2. Asset con modificaciones

## Autores

Juan Manuel Amador Perez Flores
- 

## Auditoría

_Enlistar a las personas que revisaron el proceso_

- 

## Metricas

1. Tiempo de revisión de cambios.
2. _Breakdown_ por categoría de cambios, i.e. si fueron _fixes_, adiciones,
eliminaciones, etc.

v1.0
