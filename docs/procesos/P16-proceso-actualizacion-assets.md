# P16 - Proceso de Actualización de Assets

## Objetivo(s)

- Mantener una gestión y control de los cambios que sufren los assets y líneas de código día a día, para que todos los miembros del departamento tengan fácil acceso a las versiones más recientes de los mismos.

## Entradas

1.-Asset o línea de código

2.-Un cambio o actualización a uno de dichos elementos

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
      <td>Implementación</td>
      <td>
        <ul align="left">
          <li>Crea un <strong>Pull Request</strong> hacia el repositorio de los
      archivos afectados. En caso de ser un repositorio de código sigue la <a
      href="">
      Guía de Manejo de Ramas </a> y en caso de ser un repositorio de documentación,
      e.g. Wiki, sigue la <a href="">Guía de Actualización de Wiki</a>
          </li>
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
          <li>CM, REQM, VAL, VER</li>
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
          <li>Haz <em>merge</em> de los cambios o valida que se completó el pull request</li>
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

- Juan Manuel Amador Pérez Flores
 

## Auditoría

- Eric Buitrón López
- Adolfo Acosta Castro

## Métricas

1. Tiempo de revisión de cambios.
2. _Breakdown_ por categoría de cambios, i.e. sí fueron _fixes_, adiciones,
eliminaciones, etc.

v1.1
