# POL03 - Políticas para el manejo de datos

## Objetivo:

- Establecer los puntos que un miembro de Taro debe seguir y considerar al momento de tener acceso a datos sensibles para los interesados, para velar por su uso adecuado durante el desarrollo de los proyectos.

## Políticas:

### Datos sensibles

- Es toda aquella información personal privada del negocio o del interesado, como por ejemplo: datos bancarios, números telefónicos, contraseñas, licencias, etc. Generalmente son aquellos que contienen atributos identificables únicos, que identifiquen algún bien o ubicación, o que contengan información pertinente a la operación y administración del negocio.

### Manejo de datos

- Bajo ninguna circunstancia deberán ser compartidos a externos los datos sensibles de los interesados, ni parcialmente ni mucho menos en su totalidad.
- Todos los miembros de Taro deberán tener protegidas de alguna forma las cuentas por las cuales se tiene acceso a los datos, tal como puede ser la verificación en dos pasos.
- Es responsabilidad de cada miembro de Taro proteger la seguridad de todos sus dispositivos.
- No se deberá dejar desatendido en ningún momento cualquier dispositivo con la cuenta activa por la cual se puede acceder a los datos.
- Solo se deberán tratar estos datos en dispositivos de confianza.
- En el caso de poseer datos en formato físico, es responsabilidad del miembro de Taro mantenerlo siempre con su persona y propiamente destruirlos una vez su utilidad haya expirado.
- Al finalizar los proyectos debe existir una fecha después de la cual, ningún miembro de Taro debe tener acceso a dichos datos.
- Durante el desarrollo de la solución, el Architecture Owner es el responsable de compartir adecuadamente estos datos únicamente con los otros miembros del equipo de desarrollo según se refiere en la [Matriz de Configuración](https://docs.google.com/spreadsheets/d/13zfQpqBBmqAT_znf1N4ebV_jcLBpeh_gjq9eHpkdOhk/edit#gid=0).
- El Product Owner es el último responsable de asegurarse de que no se hayan modificado los permisos de acceso no aprobados.
- En caso de que se detecte una fuga de datos, el Architecture Owner bloqueará los datos de poder ser accedidos y se aplicarán las medidas de contingencia pertinentes.

### Respaldo de información

- La información ubicada en la unidad compartida de Google Drive deberá ser respaldada y resguardada por los PM y AO cada 3 semanas.
- Las [líneas base](https://taro-it.github.io/docs/politicas/POL04-Definicion%20de%20elementos%20de%20configuracion) de los proyectos deberán ser clonados por todos los miembros de Taro, se deberá utilizar el comando `git fetch` los días lunes y miércoles de cada semana para mantenerlas actualizadas.

## Bitácora de cambios

### Versión 2.0

- Se institucionalizó el asset.

### Versión 1.1

- Añadir medidas de prevención.
- Arreglar formato.
- Se agregó el respaldo de información.
- Fix de links.

### Versión 1.0

- Se creó la política.
