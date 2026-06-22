# Angular: Layout completo de mini-aplicación

### Obligatorio

En este ejercicio se practica:

- CLI para crear componentes y servicios.
- Añadir Angular Material al proyecto.
- Diseño del layout completo de una aplicación.
- Programación de un servicio para gestionar el estado de la aplicación.
- Inyección de servicios.
- Routing.
- Formulario.

1; Crea un nuevo proyecto de Angular con routing y con estilos scss.

2; Añade Angular Material.

3; Crea los componentes necesarios para crear el layout que se describe a continuación. Tendrás componentes de layout (cabecera pública, cabecera privada, pie, menú público, menú privado…) y componentes enrutados (la página home, la página login, la página acerca de, la página galería…)

Esta aplicación tendrá 2 menús. Un menú público que se mostrará cuando el usuario todavía no haya hecho login y un menú privado que se mostrará cuando el usuario haya hecho login.

Enlaces del menú público:

- Home => Te lleva a la página de bienvenida de la aplicación
- Login => Te lleva a un formulario de login
- Acerca de => Te lleva a la página “Acerca de”

Enlaces del menú privado:

- Dashboard
- Galería
- CRUD
- Profile

Deberá aparecer un logo y el nombre de la web en la cabecera y algún contenido estático en el pie.

4; Configura el routing para asignar una url a cada una de las 7 páginas de los menús. Puedes enseñar (de momentos) los dos menús simultáneamente en la pantalla para comprobar que funcionan.

Los componentes todavía no tienen ningún contenido. No hay que programarlos. En este punto basta con que existan y se muestra su contenido por defecto: ‘xxxxxx works’

5; Crea un formulario de login con 2 campos: username y password. Pon validaciones y mensajes de error. Al hacer submit del formulario, el componente invocará al método login() del servicio descrito en el siguiente punto.

6; Crea un servicio Auth que gestione el estado relacionado con la autenticación del usuario. Este servicio debe ofrecer cuatro métodos:

- login({username: string, password: string}): boolean
- logout(): void
- isLogged(): boolean
- getUsername(): string

El método de login devolverá true para la combinación válida username = ‘lemoncode’ y password: ‘12345678’. Para el resto de combinaciones devolverá false. (Un simple if es suficiente para esta simulación de login). Si la combinación válida que os sugiero no cumpliera las validaciones de vuestro formulario de login, podéis utilizar cualquier otra combinación válida que se adapte a vuestro caso.

7; Modifica el componente de login para que si al invocar al servicio de login, éste último devuelve true, el componente redirija al usuario al dashboard.

8; Haz que solamente se muestre el menú público si el usuario no está logueado y el menú privado si el usuario sí está logueado.

9; Añade un botón de salir en la cabecera de la web que solamente se muestre si el usuario está logueado

10; También en la cabecera, y solamente cuando el usuario esté logueado, muestra el username del usuario.

11; RETO. Añade persistencia al estado de autenticación guardando el estado en el localstorage.

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

3. Levantar el servidor en desarrollo

```bash
pnpm ng serve
```

4. Utiliza las siguientes credenciales para acceder:

| Usuario   | Contraseña |
| --------- | ---------- |
| lemoncode | 12345678   |
