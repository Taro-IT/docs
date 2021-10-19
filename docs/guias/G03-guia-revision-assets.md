# G03 - Guía para Revisar Assets para la Wiki

## Objetivo(s)

- Entender cómo se realiza la revisión de un pull request de assets para la wiki.

## Pre-requisitos

- El pull request del asset debe estar en la columna **In Review** en el tablero de la Documentación WIKI.
  ![Columna In Review del tablero](../../static/img/guias/G03/in-review-column.png)

## Pasos a seguir

### Flujo para hacer la revisión

1. En la tab **Pull requests** usar el filtro `review-requested:USERNAME` para localizar rápidamente los pull requests que requieren revisión.

   ![Filtro review-requested](../../static/img/guias/G03/search-review-requested.png)

:::note

Esta búsqueda también regresara aquellas revisiones que sean asignadas tanto al usuario específico como a un equipo.

![Filtro review-requested](../../static/img/guias/G03/reviewers.png)

:::

:::note

Adicionalmente, el filtro `reviewed-by:USERNAME` permite ver que pull requests ya han sido revisados por el usuario.

![Filtro reviewed-by](../../static/img/guias/G03/search-reviewed-by.png)

:::

2. Encontrar el comentario con la versión más reciente del asset propuesto en el tab **Conversation**. El comentario tendrá una liga donde se puede ver el preview del asset y puede llegar a tener imágenes para mostrar cosas que sólo se verán bien cuando se haga el deploy.

3. Revisar el asset prestando atención a la ortografía y asegurarse de que cumpla con el objetivo propuesto.

4. Ir al tab de **Files Changed**

   ![Tab de Files Changed](../../static/img/guias/G03/files-changed.png)

5. Hacer los [comentarios](#cómo-hacer-comentarios-para-un-archivo) y/o [modificaciones](#cómo-hacer-modificaciones-de-un-archivo) que veas necesarios y marcar cada archivo como viewed (para asegurarte de haber revisado todos los cambios).

   ![Marcar como viewed](../../static/img/guias/G03/mark-viewed.png)

:::tip

Puedes ver el archivo como código o como se vería el markdown usando este toggle.

![Vista en markdown](../../static/img/guias/G03/markdown-toggle.png)

![Vista en código](../../static/img/guias/G03/markdown-toggle-2.png)

:::

:::note

No todos los archivos se podrán ver o tendrán cambios que requieran revisión. Aún así la recomendación es marcarlos como viewed.

:::

6. Cuando hayas terminado tu revisión, haz clic en **Review changes**, deja algún comentario general de tu revisión, selecciona el tipo de revisión que quieres dejar y da clic en **Submit review**.

   ![Submit review](../../static/img/guias/G03/submit-review.png)

:::note

Si durante tu revisión realizaste modificaciones y se hicieron commits a la rama, el comentario general debería incluir lo siguiente:

- La liga al preview del asset con tus modificaciones.

- Las imágenes de cómo se vería tu modificación al hacer deploy si es algo que sólo se ve en Docusaurus.

:::

7. Tu revisión debería salir en el tab **Conversation** del pull request.

   ![Resultado](../../static/img/guias/G03/final-result.png)

### Cómo hacer comentarios para un archivo

1. Dar clic en el botón **+** en la línea en la que quieras dejar el comentario.

   ![Clic en +](../../static/img/guias/G03/inline-comment.png)

2. Escribe tu comentario y da clic en **Add review comment** o en **Start a review**.

   ![Escribir comentario](../../static/img/guias/G03/add-comment.png)

   ![Empezar revisión](../../static/img/guias/G03/start-review.png)

3. Tu comentario se verá así.

   ![Comentario](../../static/img/guias/G03/comment-saved.png)

### Cómo hacer modificaciones de un archivo

1. Dar clic en **...** y luego en **_Edit file_** en el archivo que quieras modificar.

   ![Editar archivo](../../static/img/guias/G03/edit-file.png)

2. Realiza los cambios que consideres necesarios usando la pestaña preview como ayuda para revisarlos.

3. Realiza el commit de tus cambios usando la estructura de la siguiente imagen. Asegurate de seleccionar la opción para hacer el commit en la misma rama del pull request.

   ![Hacer commit](../../static/img/guias/G03/commit-changes.png)

4. El commit debería salir en el tab **Conversation** del pull request.

   ![Resultado de commit](../../static/img/guias/G03/commit-history.png)

## Salidas

- El resultado de la revisión en la conversación del pull request del asset.

## Autores

- Eric Buitrón López
- Saul Axel Palacios Acosta

## Auditoría

- José Carlos Pacheco Sánchez
- Iván Alejandro Díaz Peralta
- Karla Daniela Romero Pérez

# Bitácora de cambios

## Versión 1.0
  - Se creó la guía
