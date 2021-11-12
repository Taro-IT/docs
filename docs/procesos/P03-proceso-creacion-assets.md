# P03 - Proceso de institucionalización de assets

## Objetivo(s)

- Institucionalizar la creación o mejora de un asset (guía, política, proceso) dentro del departamento.
- Asegurar la calidad y el valor departamental de los assets generados.

## Entradas
- Propuesta/borrador de asset para el departamento, siguiendo la [guía para definición de assets](https://taro-it.github.io/docs/guias/G02-guia-definicion-assets).
- Plantilla  del asset a definir:
  - [Plantilla para procesos](https://taro-it.github.io/docs/plantillas/PL03-plantilla-para-procesos)
  - [Plantilla para guías](https://taro-it.github.io/docs/plantillas/PL02-plantilla-para-guias)
  - [Plantilla para políticas](https://taro-it.github.io/docs/plantillas/PL14-plantilla-politicas)
- [Matriz de configuración Taro](https://docs.google.com/spreadsheets/d/13zfQpqBBmqAT_znf1N4ebV_jcLBpeh_gjq9eHpkdOhk/edit#gid=0)
- Canal de slack taro-assets
- [Checklist de institucionalización](https://docs.google.com/spreadsheets/d/11vgBbxiGG13rIehFPVx6FvvmeMygKSb4eztTdh6djv8/edit#gid=0)

## Procedimiento

| Fase |   Actividades   | Área(s) involucradas |
|------|:---------------:|--------------------|
| 1. Definición | <ul align="left"><li>Verificar que el artefacto cumpla con los elementos del criterio <i>Valor Departamental</i> de la <a href="https://docs.google.com/spreadsheets/d/11vgBbxiGG13rIehFPVx6FvvmeMygKSb4eztTdh6djv8/edit#gid=0">checklist de institucionalización</a>.</li></ul> | <ul align="left"><li>OPD 1.1</li></ul> |
| 2. Creación | <ul align="left"><li>Agregar el artefacto a la <a href="https://docs.google.com/spreadsheets/d/13zfQpqBBmqAT_znf1N4ebV_jcLBpeh_gjq9eHpkdOhk/edit#gid=0">matriz de configuración</a> definiendo el nivel como "Dinámico" y asignándose uno mismo como owner (si dos o más personas están trabajando el asset elegir solo a uno).</li><li>Desarrollar el contenido del artefacto siguiendo la plantilla correspondiente.</li><li>Abrir la <a href="https://docs.google.com/spreadsheets/d/11vgBbxiGG13rIehFPVx6FvvmeMygKSb4eztTdh6djv8/edit#gid=0">checklist de institucionalización</a> (hacer una copia local si es necesario) y verificar que el artefacto cumple con todos y cada uno de los elementos definidos en la misma.</li><li>Si un elemento no se cumple dentro del artefacto, hacer las correcciones necesarias.</li><li>Subir el artefacto al repositorio siguiendo la [guía para subir assets]().</li><li>Comunicar a través del canal de slack taro-assets que el artefacto ha sido creado/modificado y está listo para su revisión.</li></ul> | <ul align="left"><li>CM 1.1</li><li>CM 2.2</li><li>CM 3.1</li><li>OPD 1.1</li><li>OPD 1.3</li></ul> |
| 3. Verificación | <ul align="left">Al menos un integrante del departamento Taro (distinto al responsable del artefacto) deberá de hacer una verificación, para eso se seguirán los siguientes pasos:<li>Dentro de la <a href="https://docs.google.com/spreadsheets/d/13zfQpqBBmqAT_znf1N4ebV_jcLBpeh_gjq9eHpkdOhk/edit#gid=0">matriz de configuración</a>, actualizar/verificar que el artefacto se encuentre en nivel "Controlado".</li><li>Duplicar la <a href="https://docs.google.com/spreadsheets/d/11vgBbxiGG13rIehFPVx6FvvmeMygKSb4eztTdh6djv8/edit#gid=0">checklist de institucionalización</a> (la copia de la checklist se quedará como una nueva pestaña dentro del mismo archivo) y nombrar el archivo, de la siguiente manera: [ID_PROCESO] - VER[00], donde 00 deberá ir incrementando según las verificaciones que se hayan hecho anteriormente.</li><li>Llenar los campos: ID, nombre del artefacto, versión y verificador.</li><li>Verificar que el artefacto cumple con todos y cada uno de los elementos definidos en la checklist.</li><li>Llenar la columna "¿Cumple?" para que refleje los resultados de la verificación anterior.</li><li>Si el artefacto no cumple con un elemento:<ul><li>Agregar comentarios para detallar las observaciones.</li><li>Comunicar a los responsables del proceso de las observaciones realizadas a través del canal de slack taro-assets.</li><li>Actualizar la versión del artefacto dentro de la <a href="https://docs.google.com/spreadsheets/d/13zfQpqBBmqAT_znf1N4ebV_jcLBpeh_gjq9eHpkdOhk/edit#gid=0">matriz de configuración</a>, aumentando en una unidad el valor del número de la derecha.</li><li>Los responsables deberán hacer las correcciones necesarias y volver a realizar los pasos desde el último paso de la fase de <b>Creación</b>.</li><li>Dentro de la <a href="https://docs.google.com/spreadsheets/d/13zfQpqBBmqAT_znf1N4ebV_jcLBpeh_gjq9eHpkdOhk/edit#gid=0">matriz de configuración</a>, se debe actualizar la última fecha de modificación de dicho artefacto.</li></ul></li><li>Si el artefacto cumple con todos los elementos, continuar con la siguiente fase.</li></ul> | <ul align="left"><li>CM 1.2</li><li>PPQA 2.1</li><li>PPQA 2.2</li><li>VER 1.1</li><li>VER 1.2</li><li>VER 1.3</li><li>VER 3.1</li></ul> |
| 4. Publicación | <ul align="left"><li>Completar el [pull request](https://taro-it.github.io/docs/guias/G20-guia-archivos-env) para poder visualizar el artefacto ya verificado en la wiki de Taro.</li><li>Agregar la liga del asset en todas las prácticas correspondientes, dentro del <a href="https://taro-it.github.io/docs/tablero-cmmi">tablero del CMMI</a>.</li><li>Dentro de la <a href="https://docs.google.com/spreadsheets/d/13zfQpqBBmqAT_znf1N4ebV_jcLBpeh_gjq9eHpkdOhk/edit#gid=0">matriz de configuración</a>:<ul><li>Definir el nivel del artefacto como "Estático".</li><li>Agregar en la columna "Nombre" el enlace al asset publicado.</li><li>Actualizar la versión del artefacto (aumentar una unidad al valor de la izquierda y poner como cero el valor de la derecha).</li></ul></li></ul> | <ul align="left"><li>OPF 3.1</li><li>CM 1.2</li></ul> |
| 5. Difusión | <ul align="left"><li>Comunicar la creación exitosa del artefacto para empezar a implementarlo en la forma de trabajo, a través del canal de slack taro-assets.</li></ul> | <ul align="left"><li>OPF 3.1</li></ul> |
| 6. Seguimiento | <ul align="left"><li>Supervisar y monitorear el desempeño del artefacto tras la puesta en práctica del mismo para determinar si necesita una mejora.</li><li>Si el artefacto se trata de un proceso, realizar auditorías siguiendo el [proceso de auditorías](https://taro-it.github.io/docs/procesos/P19-proceso-de-auditor%C3%ADas/).</li></ul> | <ul align="left"><li>CM 3.2</li><li>OPF 1.3</li><li>OPF 3.3</li><li>OPD 1.5</li></ul> |

## Salidas

- Artefacto institucionalizado y listo para ser agregado a la línea base.
- Matriz de configuración actualizada.

## Autores

- María de los Ángeles Contreras Anaya

## Auditoría
- Eric Buitrón López
- Adolfo Acosta Castro

# Bitácora de cambios

## Versión 1.0
  - Se creó el proceso.


