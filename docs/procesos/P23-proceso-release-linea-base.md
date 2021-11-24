# P23 - Proceso de release de línea base

## Objetivo(s)

- Permitir generar un release de las líneas base definidas del departamento.

## Entradas

- Repositorio de la línea base a desplegar.
- La rama con todos los ítems de trabajo [previamente verificados y aprobados](P21-proceso-verificacion-items).

:::info

Si no se tiene claro lo que es una línea base, revisar la [Política de Elementos de configuración y líneas base](../politicas/POL04-Definicion%20de%20elementos%20de%20configuracion).

:::

## Procedimiento

| Fase |   Actividades   | Área(s) involucradas |
|------|:---------------:|--------------------|
| 1.Identificación. | <ul align="left"><li>Verificar que haya ocurrido al menos una de las siguientes: <ul><li>Se acerca una fecha de entrega con los socios o del SCAMPI.</li><li>La rama de develop ha adquirido suficientes funciones como para presentarlas en una demo.</li><li>Se ha completado un Epic o Módulo completo de User Stories.</li></ul></li></ul>| <ul><li>VER - 1.2</li></ul> |
| 2. Preparación. | <ul align="left"><li>Crear la rama de release siguiendo la [Guía de deployment Frappé](https://taro-it.github.io/frappe/guides/PPG05-guia-deployment) o la [Guía de release de Gitflow](https://docs.github.com/es/repositories/releasing-projects-on-github/managing-releases-in-a-repository).</li><li>En caso de ser un despliegue de la wiki seguir la [guía de despliegue de la wiki](../guias/G27-Guía-de-release-de-la-wiki).</li><li>Corregir los comentarios generados para el release en caso de ser necesario.</li><li>Crear un respaldo dentro de una carpeta con el nombre del release en [Respaldo de releases](https://drive.google.com/drive/u/0/folders/1f6aYc0JVOozt5lnQEEq-tqHd7mNK6Sim).</li><li>Agregar al folder una subcarpeta con toda la documentación para el socio.</li></ul> | <ul><li>CM - 3.2</li></ul> |
| 3. Despliegue. | <ul align="left"><li>Desplegar la página en el ambiente de producción siguiendo el [manual de despliegue de espresso](https://taro-it.github.io/Espresso_doc/handbook_arquitectura/configuration/manual-despliegue) o en el caso de Frappé y la wiki departamental, una vez concluidas las pruebas se hará el despliegue de forma automática.</li></ul>| <ul><li>CM - 1.3</li></ul> |

## Salida

- Release de línea base publicada.

## Autores

- Juan Manuel Amador Pérez Flores
- Eric Buitrón López

## Auditoría

## Bitácora de cambios

### Versión 1.0

- Se creó el proceso.
