# G24 - Guía de definicion de criterios de aceptación

## Objetivo(s)

- Definir los criterios de aceptación de una historia de usuario.

## Pre-requisitos

- [Historia de usuario](https://taro-it.github.io/docs/procesos/P13-proceso-generar-alimentar-historias-usuario "Historia de usuario").

## ¿Qué son los criterios de aceptación?

Son las condiciones sobre funcionalidad, comportamiento y calidad que una historia de usuario debe satisfacer para ser aceptado por un usuario o cliente.

Se documentan como un conjunto de enunciados que pueden verificarse de forma clara, es decir, no hay ambigüedad respecto a si la historia de usuario pasa el criterio de aceptación.

Definir criterios de aceptación para una historia de usuario sirve para:
- Desarrollar entre el equipo y los stakeholders un entendimiento claro y uniforme del funcionamiento de cada historia de usuario.
- Ayudar al equipo a entender y desglosar el trabajo que se requiere para completar cada historia de usuario. 
- Definir los límites de cada historia de usuario e identificar sus dependencias.
- Identificar casos esquina y flujos alternativos de cada historia de usuario, y definir como debe responder el sistema ante ellos.

## ¿Cómo definir un criterio de aceptación?

Para definir los criterios de aceptación se deben discutir entre los miembros del equipo las condiciones necesarias para cada una de las historias de usuario se considere completa. 

Cada criterio de aceptación debe documentarse como un enunciado con las siguientes características:

- **Es verificable**: se puede decir inequívocamente al momento de verificar una historia de usuario si esta cumple el criterio.
- **Es suficientemente especifico**: un criterio debe de contener suficiente detalle para poder verificarse y relacionarse con tareas pequeñas pero no debe de restringir las opciones de implementación del equipo.
- **No usa lenguaje técnico**: el criterio debe ser entendible para alguien sin conocimientos técnicos como pueden ser los stakeholders.
- **Usa la primera persona y la voz activa**: se debe especificar quien es la entidad que realiza cada acción mencionada en el criterio.
- **No usa conjunciones**: no se deben usar palabras como "y", "o", "pero" y "también". Su presencia indica que un criterio se puede separar en varios. 
- **No usa absolutos inalcanzables**: los atributos absolutos, como 100% de disponibilidad, no son realistas ni fáciles de verificar. No se deben usar.

## Ejemplos de criterios de aceptación
**Historia de usuario**: Como administrador quiero registrar un artículo para llevar su inventario.

**Criterios de aceptación**:
<ul>
    <li>El usuario solo puede enviar el formulario cuando todos los campos obligatorios esta llenos.</li>
    <li>El sistema muestra un mensaje de éxito cuando se registra un nuevo artículos.</li>
    <li>El sistema muestra un mensaje de error cuando se registra una cantidad de artículos mayor a 100000.</li>
</ul>

**Historia de usuario**: Como usuario quiero usar la barra de búsqueda para ingresar un nombre, autor o tema y asi encontrar los libros que coincidan.

**Criterios de aceptación**:
<ul>
    <li>La barra de búsqueda muestra un placeholder con el texto: "Palabras clave".</li>
    <li>El sistema realiza la búsqueda en el momento que el usuario hace clic en el botón de buscar.</li>
    <li>El sistema muestra un mensaje de error cuando se ingresan más de 280 caracteres.</li>
</ul>

## Salidas

- Listado de criterios de aceptación por historia de usuario.

## Autores

- Eduardo Guzmán de la Concha
- Jorge López Chávez
- Adolfo Acosta Castro

## Auditoría

- Juan José Díaz André
- Raúl Rosario Sandoval Galaviz
- José Carlos Pacheco Sánchez
- Eric Buitrón López
- Jan Limpens Gutiérrez

## Bitácora de cambios

### Versión 1.0

- Se creó la guía de definición de criterios de aceptación
