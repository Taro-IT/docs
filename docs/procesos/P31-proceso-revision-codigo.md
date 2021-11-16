
# P31 - Proceso para verificación de items de trabajo

## Objetivo(s)

- Verificar que los items de trabajo generados para cada historia de usuario cuenten con los estándares de calidad del proyecto correspondiente.

## Entradas

- Item de trabajo recién creado o actualizado (artefacto de análisis o diseño, código, o manuales entregables)
- [Checklists de items de trabajo de Espresso](https://docs.google.com/spreadsheets/d/1n_54rAYTKQbeS7BMTjiWpKrLYeu8Y7eRPxawOJVQQbs/edit#gid=796495081) o [Checklists de items de trabajo de Frappé](https://docs.google.com/spreadsheets/d/1BTfYvNCsBmU54sY2hRHbU0hQRsxRtR4aCTtCfFbPxrI/edit#gid=796495081)
- [Matriz de configuración Espresso](https://docs.google.com/spreadsheets/d/13zfQpqBBmqAT_znf1N4ebV_jcLBpeh_gjq9eHpkdOhk/edit#gid=1361951105) o [Matriz de configuración Frappé](https://docs.google.com/spreadsheets/d/13zfQpqBBmqAT_znf1N4ebV_jcLBpeh_gjq9eHpkdOhk/edit#gid=579763828)
- Defect Log

## Procedimiento

:::note

Si el item de trabajo a verificar es el primero que se verifica de su historia de usuario, se deberá hacer una copia de la hoja original de la <a href="../checklists/CH02-checklist-items-trabajo">checklist de items de trabajo</a> del equipo correspondiente y nombrarla con el identificador de la historia.

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
          <li>Si el item no es código, agregarlo a la matriz de configuración de la línea base pertinente, definiendo el nivel como "Dinámico" y asignándose uno mismo como owner (si dos o más personas están trabajando el item, elegir solo a uno).</li>
          <li>Duplicar la <a href="../checklists/CH02-checklist-items-trabajo">checklist de items de trabajo</a> (la copia de la checklist se quedará como una nueva pestaña dentro del mismo archivo) correspondiente al equipo y nombrarla con el identificador de la historia de usuario relacionada al item.</li>
          <li>Verificar que la checklist cumple con todos y cada uno de los elementos definidos en la misma, marcándolos en la celda para los desarrolladores.</li>
          <li>Si un elemento de la checklist no se cumple dentro del item de trabajo, hacer las correcciones necesarias. En caso de que el item verificándose sea código, registrar el incumplimiento en el Defect Log usando la <a href="../guias/G17-guia-defect-log">guía  para el Defect Log</a>.</li>
          <li>Subir el item de trabajo desarrollado al lugar correspondiente para su verificación y almacenamiento: 
          <ul>
            <li>Si es un artefacto de análisis o diseño, a la carpeta correspondiente</li>
            <li>Si es código a un PR acuerdo con la guía de ramas y de PRs***</li>
            <li>Si es un entregable para los socios, a la carpeta de Google Drive  
            <a href="https://drive.google.com/drive/folders/1QoEbapxFqzZjgzCtYJKNwA_TtxqYiuhP?usp=sharing"> Entregables_Espresso</a> ó 
            <a href="https://drive.google.com/drive/folders/1taPaKK4cAIGSyFQELMcemIgEWR_JtF7N?usp=sharing"> Entregables_Frappé.</a></li>
          </ul>
          </li>
          <li>Comunicar en la junta diaria del equipo o a través del canal de slack taro-medio-camino o taro-cinica según corresponda, que el item de trabajo ha sido creado/modificado y está listo para su verificación.</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>CM - 1.1</li>
          <li>CM - 2.2</li>
          <li>CM - 3.1</li>
          <li>OPD - 1.1</li>
          <li>OPD - 1.3</li>
          <li>VER - 1.1</li>
          <li>VER - 2.1</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Verificación</td>
      <td>
        <ul align="left">
          <li>Seleccionar al menos un integrante de Espresso o Frappé según corresponda (distinto al responsable del item de trabajo) para hacer una verificación.</li>
          <li>Si el item no es código, dentro de la matriz de configuración de la línea base pertinente, actualizar/verificar que el producto de trabajo se encuentre en nivel "Controlado".</li>
          <li>Abrir la <a href="../checklists/CH02-checklist-items-trabajo">checklist de items de trabajo</a> y buscar la copia para el caso que tendrá el nombre del identificador de la historia de usuario relacionada al item.</li>
          <li>En la sección correspondiente al tipo del item, llenar los campos: ID, nombre del item de trabajo, versión y verificador. La version debe seguir el formato [ID_PRODUCTODETRABAJO]-VER[00], donde 00 deberá ir incrementando según las verificaciones que se hayan hecho anteriormente.</li>
          <li>Utilizando la checklist correspondiente al tipo del item, verificar que el item de trabajo cumple con todos y cada uno de los elementos definidos en la checklist.</li>
          <li>Llenar la columna "¿Cumple?" para que refleje los resultados de la verificación anterior.</li>
          <li>Si el item no cumple con un elemento:
            <ul>
                <li>Agregar comentarios en la checklist para detallar las observaciones.</li>
                <li>Si el item es código, registrar el incumplimiento en el Defect Log usando la <a href="../guias/G17-guia-defect-log">guía  para el Defect Log</a>.</li>
                <li>Si el item no es código:</li>
                  <ul>
                    <li>Actualizar la versión del item de trabajo dentro de la matriz de configuración, aumentando en una unidad el valor del número de la derecha.</li>
                    <li>Dentro de la matriz de configuración en la línea base pertinente, actualizar la última fecha de modificación de dicho item de trabajo.</li>
                  </ul>
                <li>Comunicar al owner del item de trabajo el resultado de la verificación a través del canal de slack taro-medio-camino o taro-cinica según corresponda.</li>
                <li>El owner deberá hacer las correcciones necesarias y realizar los pasos desde el último punto de la fase de Preparación del dueño.</li>
              </ul>
          </li>
          <li>Si el item de trabajo cumple con todos los elementos, continuar con la siguiente fase.</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>CM - 1.2</li>
          <li>MA - 2.1</li>
          <li>MA - 2.3</li>
          <li>VER - 1.1</li>
          <li>VER - 2.2</li>
          <li>VER - 3.1</li>
          <li>VER - 1.1</li>
          <li>VER - 1.2</li>
          <li>VER - 1.3</li>
          <li>VER - 3.1</li>
          <li>PPQA - 1.2</li>
          <li>PPQA - 2.1</li>
          <li>PPQA - 2.2</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Difusión</td>
      <td>
        <ul align="left">
          <li>Si el item no es código, dentro de la matriz de configuración en la línea base pertinente, definir el nivel del producto de trabajo como "Estático" y actualizar la versión del mismo (aumentar una unidad el valor de la izquierda y poner en cero el valor de la derecha).</li>
          <li>Si el item es código, completar el PR haciendo el merge a dev y borrando la rama en la que se trabajaron los cambios. Basarse en la <a href="../guias/G20-guia-archivos-env">guía para realizar un pull request</a>.</li>
          <li>Comunicar la creación/modificación exitosa del producto de trabajo, a través del canal de slack taro-cinica o taro-medio-camino según corresponda o en la daily meeting del equipo.</li>    
        </ul>
      </td>
      <td>
        <ul>
          <li>CM - 1.2</li>
          <li>OPF - 3.1</li>
          <li>PPQA - 2.1</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Salidas

- Producto de trabajo verificado.
- Pull Request aprobado listo para liberación.

## Autores

- Mauricio Alvarez Milán
- Jan Limpens Gutiérrez
- Eduardo Andrés Castillo Perera
- Eric Buitrón López
- María de los Ángeles Contreras Anaya
- Adolfo Acosta Castro


## Auditoría

- 

## Bitácora de cambios

### Versión 1.0

- Se creó el proceso

### Versión 1.1

- Se agregaron los links a assets necesarios
- Se cambiaron las entradas y salidas

### Versión 1.2

- Se cambió el proceso para hacerlo más genérico y no sólo de revisión de código.

### Versión 1.3

- Se cambió el proceso para incluir la verificación de entregables e incorporar prácticas de CM.
