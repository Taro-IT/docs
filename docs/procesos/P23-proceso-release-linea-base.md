# P23 - Proceso de release de línea base

## Objetivo(s)

- Permitir generar un release de las líneas base definidas del departamento.

## Entradas

- [Repositorio de la línea base a desplegar](https://taro-it.github.io/docs/politicas/POL04-Definicion%20de%20elementos%20de%20configuracion).
- La rama con todos los ítems de trabajo [previamente verificados y aprobados](https://taro-it.github.io/docs/procesos/P21-proceso-verificacion-items).



Si no se tiene claro lo que es una línea base, revisar la [política de elementos de configuración y líneas base](../politicas/POL04-Definicion%20de%20elementos%20de%20configuracion).



## Procedimiento

| Fase              |                                                                                                                                                                                                                                                                                                                                                                                               Actividades                                                                                                                                                                                                                                                                                                                                                                                                | Área(s) involucradas                                           |
| ----------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | -------------------------------------------------------------- |
| 1.Identificación. |                                                                                                                                                                                                                          <ul align="left"><li>Verificar que haya ocurrido al menos una de las siguientes: <ul><li>Se acerca una fecha de entrega con los socios o del SCAMPI.</li><li>La rama de develop ha adquirido suficientes funciones como para presentarlas en una demo.</li><li>Se ha completado un epic o módulo completo de historias de usuario.</li></ul></li></ul>                                                                                                                                                                                                                          | <ul><li>VER - 1.2</li><li>OPF - 3.1</li></ul>                  |
| 2. Preparación.   | <ul align="left"><li>Crear la rama de release siguiendo la [guía de deployment Frappé](https://taro-it.github.io/frappe/guides/PPG05-guia-deployment) o la [guía de release de Gitflow](https://docs.github.com/es/repositories/releasing-projects-on-github/managing-releases-in-a-repository).</li><li>En caso de ser un despliegue de la wiki seguir la [guía de release de la wiki](https://taro-it.github.io/docs/guias/G28-guia-de-release-de-la-wiki).</li><li>Corregir los comentarios generados para el release en caso de ser necesario.</li><li>Crear un respaldo dentro de una carpeta con el nombre del release en el [respaldo de releases](https://drive.google.com/drive/u/0/folders/1f6aYc0JVOozt5lnQEEq-tqHd7mNK6Sim).</li><li>Agregar al folder una subcarpeta con toda la documentación para el socio.</li></ul> | <ul><li>CM - 3.2</li><li>OPF - 3.1</li><li>OPF - 3.2</li></ul> |
| 3. Despliegue.    |                                                                                                                                                                                                                         <ul align="left"><li>Desplegar la página en el ambiente de producción siguiendo el [manual de despliegue de Espresso](https://taro-it.github.io/Espresso_doc/handbook_arquitectura/configuration/manual-despliegue) o en el caso de Frappé y la wiki departamental, una vez concluidas las pruebas se hará el despliegue de forma automática.</li></ul>                                                                                                                                                                                                                          | <ul><li>CM - 1.3</li><li>OPF - 3.1</li></ul>                   |

## Salida

- Release de línea base publicada.

## Autores

- Juan Manuel Amador Pérez Flores
- Eric Buitrón López

## Auditoría

- Adolfo Acosta Castro

## Bitácora de cambios

### Versión 1.0

- Se creó el proceso.
