# REST API

Vamos a consumir una API pública para mostrar datos de la serie Rick & Morty: https://rickandmortyapi.com/

Cómo punto de entrada vamos a partir del Boilerplate de Lemoncode.

Tendrás que cambiar las escenas, rutas y pods a `character-collection` y `character`

### Ejercicio 1

Crear un proyecto en el que vamos a obtener una lista de actores de la API Rest de Rick & Morty, utilizando Axios o Fetch

Navegando a la página de un `character` vamos a mostrar el detalle del mismo (segunda llamada a la API Rest).

### Ejercicio 2

Para simular escrituras vamos a utilizar un servidor local (carpeta `server` del proyecto). Este servidor mock tiene como datos los 5 primeros personajes e implementa los métodos:

- GET list
- GET character
- PUT

Además de los campos que nos da la API real, hemos añadimos uno nuevo donde guardar la mejor frase de cada personaje

- El campo se llamará `bestSentence`.

Objetivo:

- Reemplazar los endpoints para que apunten al servidor local
- El usuario puede editar y guardar el campo `bestSentence`.

### Challenge

- Implementar paginación.
- Implementar busqueda de characters.

# Cómo ver el proyecto

## Requisitos

- Node.js
- pnpm

## Cómo ejecutar

1. Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd <nombre-del-proyecto>
```

2. Instalar dependencias

```bash
pnpm install
```

En el caso del ejercicio 2,

```bash
pnpm install
cd server
pnpm install
```

3. Levantar el servidor en desarrollo

```bash
pnpm start
```
