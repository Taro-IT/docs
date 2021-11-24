# P25 - Proceso para validación con socios

## Objetivo(s)

- Validar que el producto de trabajo cumple con las expectativas del socio formador en el entorno previsto.

## Entradas

- Productos de trabajo completados.

## Procedimiento

<table>
  <tr>
    <th>Fase</th>
    <th>Actividades</th>
    <th>Áreas involucrada(s)</th>
  </tr>
   <tr>
    <td>1. Preparación</td>
    <td>
      <ul>
        <li>Duplicar el <a href="https://docs.google.com/spreadsheets/d/1qlU1dm3yrt6iGMJEEK14aC9Ro99d33SdCeGvpf3zztI/edit?usp=sharing">reporte de validación</a> en la carpeta de validaciones correspondiente: <a href="https://drive.google.com/drive/folders/16ncpQ51ZNpd6tjy-koKBeN0j4hBXHQlf?usp=sharing">Frappé</a> o <a href="https://drive.google.com/drive/folders/153m6UxG5n3pG-ElVZlr6RJT_uLDoOfnb?usp=sharing">Espresso</a> y nombrarlo de la siguiente manera: VAL-[1], donde el número entre corchetes deberá de ir incrementando según las validaciones realizadas.</li>
        <li>Seleccionar los productos de trabajo a validar con el socio, documentar dicha selección bajo la columna "Productos a validar".</li>
        <li>Seguir la <a href="../guias/G29-guia-validacion-socios">guía para validación con socios</a> y por cada producto de trabajo seleccionado:
          <ul>
            <li>Identificar el alcance de la validación y documentarlo bajo la columna "Alcance".</li>
            <li>Enlistar los criterios de aceptación bajo la columna "Criterios".</li>
            <li>Definir el método de validación y plasmarlo bajo la columna "Método".</li>
          </ul>
        </li>
      </ul>
    </td>
    <td>
      <ul>
        <li>VAL - 1.1</li>
      </ul>
    </td>
  </tr>
    <tr>
    <td>2. Preparación de entorno</td>
    <td>
      <li>Definir los dispositivos electrónicos necesarios para la validación y plasmarlos bajo la columna "Dispositivos".</li>
      <li>Definir el software necesario para la validación bajo la columna de "Ambiente":
        <ul>
          <li>Si la validación tiene un alcance de "Funcionalidad", seguir el proceso de ambiente de validación del equipo correspondiente: Frappé o Espresso y documentar el software necesario en el reporte.</li>
          <li>Si la validación tiene un alcance de "Análisis", Diseño" o "Capacitación", seguir la <a href="">guía para validación con socios</a>.</li>
        </ul>
      </li>
      <li>Definir cualquier otra herramienta necesaria para la validación bajo la columna "Otras".</li>
      <li>Si la validación tiene un alcance de "Funcionalidad" definir "Inputs" y "Outputs" para la validación de cada producto de trabajo.</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>VAL - 1.2</li>
        <li>VAL - 1.3</li>
      </ul>
    </td>
  </tr>
    <tr>
    <td>3. Validación</td>
    <td>
      <ul>
        Seguir el método de validación seleccionado:
        <li>Agendar una reunión con los socios siguiendo la <a href="https://taro-it.github.io/docs/guias/G01-guia-para-agendar-juntas">guía para agendar juntas</a>.</li>
        <li>Si el método es "Demo": 
          <ul>
            <li>Definir si la demostración será en vivo o grabada bajo la columna "Tipo".</li>
            <li>Si la demo será en vivo, preparar el entorno en el dispositivo eléctronico adecuado, diez minutos antes de la reunión con socios.</li>
            <li>Si la demo será grabada, grabar con anticipación el video y tenerlo listo para su reproducción cinco minutos antes de la reunión con socios.</li>
            <li>Llevar a cabo la demostración de los productos de trabajo.</li>
          </ul>
        </li>
        <li>Si el método es "Think aloud":
          <ul>
            <li>Comunicar a los socios los dispositivos electrónicos que se usarán para la validación.</li>
            <li>Designar una parte de la reunión para duplicar el entorno de validación en los dispositivos de los socios.</li>
            <li>Llevar a cabo la validación de los productos de trabajo.</li>
          </ul>
        </li>
        <li>Si el método es "Discusión":
          <ul>
            <li>Se deberá especificar en la minuta los puntos a discutir con los socios.</li>
            <li>Un miembro del equipo deberá liderar la discusión con los socios y compartirá su pantalla si es necesario para que los socios tengan una mejor idea de lo que se está discutiendo.
            </li>
          </ul>
        </li>
        <li>Por cada producto de trabajo validado, asegurarse de obtener una aprobación explícita del socio y documentarla bajo la columna "¿Aprobado?".</li>
        <li>Si el producto no es aprobado se deberá de detallar bajo la columna "Comentarios" las razones por las cuales se llego a esa conclusión.</li>
        <li>De ser necesario, añadir a la matriz de compromisos de <a href="https://docs.google.com/spreadsheets/d/13DkKZZyyB2OHshchbra921zE3AGMBl91GKeLuofNgL8/edit#gid=866452596">Frappé</a> o de <a href="https://docs.google.com/spreadsheets/d/13DkKZZyyB2OHshchbra921zE3AGMBl91GKeLuofNgL8/edit#gid=0">Espresso</a> según corresponda, los cambios solicitados por parte de los socios siguiendo la <a href="https://taro-it.github.io/docs/guias/G22-guia-matriz-compromisos">guía para llenar la matriz compromisos.</a></li>
      </ul>
    </td>
    <td>
      <ul>
        <li>VAL - 2.1</li>
      </ul>
    </td>
  </tr>
	<tr>
    <td>4. Análisis</td>
    <td>
      <ul>
        <li>Definir bajo la columna "¿Cumple?" si los resultados obtenidos eran los resultados esperados.</li>
        <li>Si no eran los resultados esperados, analizar e identificar la causa y el origen de dicha desviación entre lo esperado y lo obtenido.</li>
        <li>Registrar los defectos identificados en el defect log de <a href="https://docs.google.com/spreadsheets/d/1p8eNzn0IgJH-SGfaK-i6bGYGC0DOQpu-bQXMhOE0LYU/edit#gid=136918999">Frappé</a> o de <a href="https://docs.google.com/spreadsheets/d/1n6PMomqQTDm6H63FSoyWhuyGEX2YNRk_ZnLx1ZDeG1A/edit#gid=193018758">Espresso</a> según corresponda, siguiendo la <a href="https://taro-it.github.io/docs/guias/G16-guia-registrar-defectos">guia para registrar defectos</a>.</li>
        <li>Seguir el <a href="https://taro-it.github.io/docs/procesos/P19-proceso-atender-retro">proceso para atender retroalimentación</a> con los comentarios realizados por los socios.</li>
        <li>Si se identificó alguna mejora en la forma de trabajo para evitar los defectos o desviaciones encontradas, seguir el <a href="https://taro-it.github.io/docs/procesos/P24-proceso-mejora-continua">proceso de mejora continua</a>.</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>VAL - 2.2</li>
      </ul>
    </td>
	</tr>
</table>




## Salidas

- Producto de trabajo validado.

## Autores

- María de los Angeles Contreras Anaya

## Auditoría

- 

## Bitácora de cambios

### Versión 1.0
- Se creó el proceso