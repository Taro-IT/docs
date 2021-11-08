# P32 - Proceso de validación de entregables

## Objetivo(s)

- Asegurar la calidad y el valor de los productos de trabajo que serán entregados a los socios como parte de la solución desarrollada.

## Entradas

- [Matriz de configuración Espresso](https://docs.google.com/spreadsheets/d/13zfQpqBBmqAT_znf1N4ebV_jcLBpeh_gjq9eHpkdOhk/edit#gid=1361951105) o [Matriz de configuración Frappé](https://docs.google.com/spreadsheets/d/13zfQpqBBmqAT_znf1N4ebV_jcLBpeh_gjq9eHpkdOhk/edit#gid=579763828)

- [Checklist de entregables al socio](https://docs.google.com/spreadsheets/d/1wST9KADIe5ZCH-hZoYNgSNMPLOhMUgYj8227s5_rzLw/edit#gid=0)

- Producto de trabajo a validar.

- Canal de slack taro-general

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
        <td>1. Definición</td>
        <td>
          <ul>
            <li>Agregar el producto de trabajo a la matriz de configuración de la línea base pertinente, definiendo el nivel como "Dinámico" y asignándose uno mismo como owner (si dos o más personas están trabajando el producto, elegir solo a uno).</li>
            <li>Abrir la <a href="https://docs.google.com/spreadsheets/d/1wST9KADIe5ZCH-hZoYNgSNMPLOhMUgYj8227s5_rzLw/edit#gid=0">checklist de entregables al socio</a> (hacer una copia local si es necesario) y verificar que el artefacto cumple con todos y cada uno de los elementos definidos en la misma.</li>
            <li>Si un elemento de la checklist no se cumple dentro del artefacto, hacer las correcciones necesarias.</li>
            <li>Subir el artefacto desarrollado a Google Drive en la carpeta correspondiente: <a href="https://drive.google.com/drive/folders/1QoEbapxFqzZjgzCtYJKNwA_TtxqYiuhP?usp=sharing">Entregables_Espresso</a> ó <a href="https://drive.google.com/drive/folders/1taPaKK4cAIGSyFQELMcemIgEWR_JtF7N?usp=sharing">Entregables_Frappé.</a></li>
            <li>Comunicar a través del canal de slack taro-medio-camino o taro-cinica según corresponda, que el artefacto ha sido creado/modificado y está listo para su validación.</li>
          </ul>
        </td>
        <td>
          <ul><li>CM- 1.1</li><li>CM - 2.2</li><li>CM - 3.1</li><li>OPD -  1.1</li><li>OPD - 1.3</li></ul>
        </td>
      </tr>
      <tr>
        <td>2. Validación</td>
        <td>
          <ul>
            Al menos un integrante de Espresso o Frappé según corresponda (distinto al responsable del producto de trabajo) deberá de hacer una verificación, para eso se seguirán los siguientes pasos:
            <li>Dentro de la matriz de configuración de la línea base pertinente, actualizar/verificar que el producto de trabajo se encuentre en nivel "Controlado".</li>
            <li>Duplicar la checklist <a href="https://docs.google.com/spreadsheets/d/1wST9KADIe5ZCH-hZoYNgSNMPLOhMUgYj8227s5_rzLw/edit#gid=0">checklist de entregables al socio</a> (la copia de la checklist se quedará como una nueva pestaña dentro del mismo archivo) y se deberá de nombrar de la siguiente manera: [ID_PRODUCTODETRABAJO]-VER[00], donde 00 deberá ir incrementando según las verificaciones que se hayan hecho anteriormente.</li>
            <li>Llenar los campos: ID, nombre del producto de trabajo, versión y verificador.</li>
            <li>Verificar que el producto de trabajo cumple con todos y cada uno de los elementos definidos en la checklist.</li>
            <li>Llenar la columna "¿Cumple?" para que refleje los resultados de la verificación anterior.</li>
            <li> Si el artefacto no cumple con un elemento:
              <ul>
                <li>Agregar comentarios para detallar las observaciones.</li>
                <li>Comunicar al owner del producto de trabajo las observaciones realizadas a través del canal de slack taro-medio-camino o taro-cinica según corresponda.</li>
                <li>Actualizar la versión del producto de trabajo dentro de la matriz de configuración, aumentando en una unidad el valor del número de la derecha.</li>
                <li>El owner deberá hacer las correcciones necesarias y realizar los pasos desde el último punto de la fase de Creación.</li>
                <li>Dentro de la matriz de configuración en la línea base pertinente, actualizar la última fecha de modificación de dicho producto de trabajo.</li>
              </ul>
            </li>
            <li>Si el producto de trabajo cumple con todos los elementos, continuar con la siguiente fase.</li>
          </ul>
        </td>
        <td>
        <ul>
          <li>CM - 1.2</li>
          <li>PPQA - 2.1</li>
          <li>PPQA - 2.2</li>
          <li>VER - 1.1</li>
          <li>VER - 1.2</li>
          <li>VER - 1.3</li>
          <li>VER - 3.1</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>Difusión</td>
        <td>
          <ul>
            <li>Dentro de la matriz de configuración en la línea base pertinente, definir el nivel del producto de trabajo como "Estático" y actualizar la versión del mismo (aumentar una unidad el valor de la izquierda y poner en cero el valor de la derecha).</li>
            <li>Comunicar la creación exitosa del producto de trabajo, a través del canal de slack taro-cinica o taro-medio-camino según corresponda o en la daily meeting del equipo.</li>
          </ul>
        </td>
        <td><ul><li>CM - 1.2</li><li>OPF - 3.1</li></ul></td>
      </tr>
    </tbody>
  </table>

## Salida

- Artefacto validado y listo para ser entregado a los socios.
- Matriz de configuración actualizada.

## Autores

- María de los Ángeles Contreras Anaya

## Auditoría

- 

# Bitácora de cambios

## Versión 1.0

- Se creó el proceso.