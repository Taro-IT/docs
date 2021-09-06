# Guía para la Definición de Assets

## Objetivo

**Principal:** Diferenciar entre los 3 tipos de assets: procesos, guías y políticas.

**Secundario:** Definir la categoría de un asset que se este creando.

## Pre-requisitos

 -Tener el objetivo del asset que se quiere crear definido.

## Pasos a seguir

### Árbol de decisiones

```mermaid
flowchart TD
    A[Inicio] --> B{"¿El objetivo está 
                    enfocado en 
                    seguir reglas?"};
    B -->|Sí| C["El asset es 
                una política"];
    B -->|No| D{"¿El objetivo está
                relacionado con
                el aprendizaje?"}
    D -->|Sí| E["El asset es 
                una guía"]
    D -->|No| F{"¿El resultado del
                objetivo debe ser
                el mismo siempre?"}
    F -->|Sí| G["El asset es 
                un proceso"]
    F -->|No| H["No es necesario un asset o el 
                objetivo no está bien definido"]
```

:::info

El árbol de decisiones fue creado con [mermaid](https://mermaid-js.github.io/mermaid/#/README) y [mdx-mermaid](https://github.com/sjwall/mdx-mermaid)

:::

### Características de los assets

#### Procesos

- Los resultados son replicables.
- Se ejecuta de la misma manera siempre y en el mismo orden.
- Tiene pre-requisitos, salidas y procedimientos específicos.
- Sigue un formato específico.

#### Guías

- Enseña a hacer algo.
- Tiene recomendaciones y pasos a seguir.
- Puede no ejecutarse de la misma manera siempre.

#### Políticas

- Reglas estrictas que deben seguirse.

## Salidas

- La categoría del asset que se está creando.

## Autores

- Eric Buitrón López (basándome en esta [guía](https://impulse-semestrei.github.io/guias/Guadecreacindeprocesos.html) de otro departamento de semestre i)

## Auditoría

-
