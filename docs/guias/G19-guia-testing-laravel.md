# G19 - Guía para Testing en Laravel

## Objetivo(s)

_Generar una guía que permita a los integrantes del proyecto, generar y crear Tests de forma estandarizada y de forma
correcta._

## Pre-requisitos

- Contar con un módulo, página, sección o interfaz a probar
- Leer la <a href="https://laravel.com/docs/8.x/http-tests">documentación de laravel</a>

## Pasos a seguir


1.- El primer paso es ubicar de forma correcta la sección que se desea probar en este caso tomaremos el ejemplo: "login"

Para nombrar nuestros test se tiene que seguir el siguiente comando con la siguiente sintaxis (Se recomienda usar este):
```
php artisan make:test NombreTest
```

Para generar test de tipo "unit" usa el siguiente parámetro:
```
php artisan make:test NombreTest --unit
```

_Nota: La primera letra del nombre será mayúscula seguida de la palabra "Test" también con la primera letra mayúscula ejemplo: UserTest_

2.- Una vez puesto el comando, podrás encontrar en la carpeta "test" dos sub carpetas: "Features" y "Unit", ahi abriras
el que hayas creado y podrás ver una sintaxis parecida a esta.
```
<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function test_example()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }
}
```

3.- El primer test que haremos será un Test de request HTTPS de página/vista, esto lo podremos hacer con lo siguiente
```
public function test_se_puede_ver_pagina_login()
    {
        $response = $this->get('/path-de-tu-ruta');
        $response->assertStatus(200);
    }
```

_Nota: El assertStatus(200) hace referencia a los códigos estándar de HTTPS, asi que si usas el código 404 y pides ir
a una página que no existe, el test pasara, ya que la página regresa de manera correcta el código esperado_

En caso de que queramos asegurarnos de que se vea un view/vista específica podemos usar la siguiente forma
```
public function test_se_puede_ver_login()
    {
        $response = $this->get('/login');
        $response->assertSuccessful();
        $response->assertViewIs('auth.login');
    }
```

4.- Para simular una autenticación en el sistema haremos lo siguiente
```
public function test_usario_no_puede_ver_el_login_cuando_esta_autentificado()
    {
        $user = User::factory(User::class)->make();

        $response = $this->actingAs($user)->get('/login');

        $response->assertRedirect('/home');
    }
```

- Asignamos a la variable $user un usuario aleatorio usando el método "factory" y "make"
- En la variable $response le asignamos un estado, que seria actuar como el usuario y hacer una petición a una ruta protegida por autenticación
- Finalmente el $response "pregunta" si fue redirigido a la ruta "/home" la cual es la ruta por defecto, aquí se puede sustituir por la ruta que se espera

_Nota: Asegurate de importar correctamente el modelo que deseas usar, en este caso es el de "User" y que este modelo tenga toda la definición de la variable $fillable_

5.- Finalmente probamos los resultados de nuestros test con el comando
```
php artisan test
```

Esto nos regresará en consola los resultados de los tests y en cuáles fallaron

## Salidas

- Tests automáticos en la carpeta "test"
## Autores

- Jose Carlos Pacheco Sanchez


## Auditoría

_Enlistar a las personas que revisaron la guía_

-

## Versión 1.0

# Bitácora de cambios

- Se creó la plantilla.
