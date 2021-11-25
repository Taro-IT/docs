# P21 - Proceso para verificación de productos de trabajo

## Objetivo(s)

- Verificar que los productos de trabajo generados para cada historia de usuario cuenten con los estándares de calidad del proyecto correspondiente.

## Entradas

- Producto de trabajo recién creado o actualizado (artefacto de análisis o diseño, código, o manuales entregables).
- [Checklists de items de trabajo de Espresso](https://docs.google.com/spreadsheets/d/1n_54rAYTKQbeS7BMTjiWpKrLYeu8Y7eRPxawOJVQQbs/edit#gid=796495081) o [Checklists de items de trabajo de Frappé](https://docs.google.com/spreadsheets/d/1BTfYvNCsBmU54sY2hRHbU0hQRsxRtR4aCTtCfFbPxrI/edit#gid=796495081)
- [Matriz de configuración Espresso](https://docs.google.com/spreadsheets/d/13zfQpqBBmqAT_znf1N4ebV_jcLBpeh_gjq9eHpkdOhk/edit#gid=1361951105) o [Matriz de configuración Frappé](https://docs.google.com/spreadsheets/d/13zfQpqBBmqAT_znf1N4ebV_jcLBpeh_gjq9eHpkdOhk/edit#gid=579763828).
- Defect log.

## Procedimiento

:::note

Si el producto de trabajo a verificar es el primero que se verifica de su historia de usuario, se deberá hacer una copia de la hoja original de la <a href="../checklists/CH02-checklist-items-trabajo">checklist de productos de trabajo</a> del equipo correspondiente y nombrarla con el identificador de la historia.

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
          <li>Si el producto de trabajo no es código, agregarlo a la matriz de configuración de la línea base pertinente, definiendo el nivel como "Dinámico" y asignándose uno mismo como owner (si dos o más personas trabajaron el producto de trabajo, elegir solo a uno).</li>
          <li>Duplicar la <a href="../checklists/CH02-checklist-items-trabajo">checklist de productos de trabajo</a> (la copia de la checklist se quedará como una nueva pestaña dentro del mismo archivo) correspondiente al equipo y nombrarla con el identificador de la historia de usuario relacionada al item.</li>
          <li>Verificar que la checklist cumple con todos y cada uno de los elementos definidos en la misma, marcándolos en la celda para los desarrolladores.</li>
          <li>Si un elemento de la checklist no se cumple dentro del producto de trabajo, hacer las correcciones necesarias. En caso de que el producto de trabajo que se está verificando sea código, registrar el incumplimiento en el defect log usando la <a href="../guias/G16-guia-registrar-defectos">guía para el defect log</a>.</li>
          <li>Subir el producto de trabajo desarrollado al lugar correspondiente para su verificación y almacenamiento: 
          <ul>
            <li>Si es un artefacto de análisis o diseño, al espacio designado para cada proyecto.</li>
            <li>Si es código, a un PR en el repositorio del equipo de acuerdo a la <a href="../guias/G12-guia-para-manejo-de-ramas">guía para manejo de ramas</a> y la <a href="../guias/G18-guia-pull-request">guía para realizar un pull request</a>.</li>
            <li>Si es un entregable para los socios, a la carpeta de Google Drive.  
            <a href="https://drive.google.com/drive/folders/1QoEbapxFqzZjgzCtYJKNwA_TtxqYiuhP?usp=sharing"> Entregables_Espresso</a> ó 
            <a href="https://drive.google.com/drive/folders/1taPaKK4cAIGSyFQELMcemIgEWR_JtF7N?usp=sharing"> Entregables_Frappé</a>.</li>
          </ul>
          </li>
          <li>Comunicar en la junta diaria del equipo o a través del canal de Slack #taro-medio-camino o #taro-cinica según corresponda, que el producto de trabajo ha sido creado/modificado y está listo para su verificación.</li>
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
          <li>VAL - 1.2</li>
          <li>VAL - 1.3</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Verificación</td>
      <td>
        <ul align="left">
          <li>Seleccionar al menos un integrante de Espresso o Frappé según corresponda (distinto al responsable del producto de trabajo) para hacer una verificación.</li>
          <li>Si el item no es código, dentro de la matriz de configuración de la línea base pertinente, actualizar/verificar que el producto de trabajo se encuentre en nivel "Controlado".</li>
          <li>Abrir la <a href="../checklists/CH02-checklist-items-trabajo">checklist de items de trabajo</a> y buscar la copia para el caso que tendrá el nombre del identificador de la historia de usuario relacionada al item.</li>
          <li>En la sección correspondiente al tipo del item, llenar los campos: ID, nombre del producto de trabajo, versión y verificador. La versión debe seguir el formato [ID_PRODUCTODETRABAJO]-VER[00], donde 00 deberá ir incrementando según las verificaciones que se hayan hecho anteriormente.</li>
          <li>Utilizando la checklist correspondiente al tipo del item, verificar que el producto de trabajo cumple con todos y cada uno de los elementos definidos en la checklist.</li>
          <li>Llenar la columna "¿Cumple?" para que refleje los resultados de la verificación anterior. Si la verificación ya se había realizado anteriormente, se deberá sobreescribir esta celda.</li>
          <li>Si el producto no cumple con un elemento:
            <ul>
                <li>Agregar comentarios en la checklist para detallar las observaciones incluyendo la fecha en la que se hizo esta verificación.</li>
                <li>Si el producto es código, registrar el incumplimiento en el defect log usando la <a href="../guias/G16-guia-registrar-defectos">guía  para el defect log</a>.</li>
                <li>Si el producto no es código:</li>
                  <ul>
                    <li>Actualizar la versión del producto de trabajo dentro de la matriz de configuración, aumentando en una unidad el valor del número de la derecha.</li>
                    <li>Dentro de la matriz de configuración en la línea base pertinente, actualizar la última fecha de modificación de dicho producto de trabajo.</li>
                  </ul>
                <li>Comunicar al owner del producto de trabajo el resultado de la verificación a través del canal de Slack #taro-medio-camino o #taro-cinica según corresponda.</li>
                <li>El owner deberá hacer las correcciones necesarias y realizar los pasos desde el último punto de la fase de Preparación del dueño.</li>
              </ul>
          </li>
          <li>Si el producto de trabajo cumple con todos los elementos, continuar con la siguiente fase. En caso de haber sobreescrito la celda, colocar la fecha en la sección de comentarios en la que se está aprobando.</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>CM - 1.2</li>
          <li>MA - 2.1</li>
          <li>MA - 2.3</li>
          <li>VER - 1.1</li>
          <li>VER - 1.2</li>
          <li>VER - 1.3</li>
          <li>VER - 2.2</li>
          <li>VER - 3.1</li> 
          <li>VAL - 2.1</li>         
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
          <li>Si el item es código, completar el PR haciendo el merge a dev y borrando la rama en la que se trabajaron los cambios. Basarse en la <a href="../guias/G18-guia-pull-request">guía para realizar un pull request</a>.</li>
          <li>Comunicar la creación/modificación exitosa del producto de trabajo, a través del canal de Slack #taro-cinica o taro-medio-camino según corresponda o en la junta diaria del equipo.</li>    
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
- Pull request aprobado listo para [liberación](P23-proceso-release-linea-base).

## Autores

- Mauricio Álvarez Milán
- Jan Limpens Gutiérrez
- Eduardo Andrés Castillo Perera
- Eric Buitrón López
- María de los Ángeles Contreras Anaya
- Adolfo Acosta Castro

## Auditoría

- Juan Manuel Amador Pérez

## Bitácora de cambios

### Versión 1.4

- Se agregan las prácticas 1.2, 1.3 y 2.1 de VAL.

### Versión 1.3

- Se cambió el proceso para incluir la verificación de entregables e incorporar prácticas de CM.

### Versión 1.2

- Se cambió el proceso para hacerlo más genérico y no sólo de revisión de código.

### Versión 1.1

- Se agregaron los links a assets necesarios.
- Se cambiaron las entradas y salidas.

### Versión 1.0

- Se creó el proceso.
