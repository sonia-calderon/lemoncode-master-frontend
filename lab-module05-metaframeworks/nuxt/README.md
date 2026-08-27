# Metaframeworks - Nuxt: Casas Rurales

En este laboratorio vamos a crear una aplicación sencilla de un portal de alquiler vacacional de casas rurales.

La aplicación permitirá a los usuarios listar y ver detalles de casas rurales disponibles para alquilar. Cada casa tendrá información como el nombre, descripción, ubicación, número de habitaciones, baños, precio por noche y una imagen.

### Obligatorio

- Implementar la aplicación utilizando al menos dos metaframeworks diferentes que hemos visto en clase (Next.js, Tanstack Start, Nuxt).
- Puedes utilizar lo que te sea más cómodo para estilar la aplicación (CSS, Tailwind, etc.). Eso si, ten en cuenta que los estilos deben ser compatibles con server-side rendering.
- Implementar la pantalla de listado de casas rurales.
- Implementar la pantalla de detalle de una casa rural.
- Utiliza un rendering apropiado para cada página (SSG, ISR, SSR, etc.) según las características de ésta.
- La aplicación debe ser funcional y navegable entre las dos pantallas.

### Enlaces de interés

Puedes utilizar [este mock api-server](https://github.com/Lemoncode/master-frontend-metaframeworks-lab) para obtener los datos de las casas rurales.

Endpoints:

- Listado de casas rurales: `GET /api/houses`
- Detalle de una casa rural: `GET /api/houses/:id`

### Adicional

- Implementar una funcionalidad de búsqueda en la pantalla de listado, por ejemplo, filtrar por nombre o ubicación.
- Añadir botón para reservar una casa rural.
- Optimización de imágenes para mejorar el rendimiento de la aplicación utilizando Next.js Image, Unpick para TanStack Start o Nuxt Image.

### Rendering

Se han utilizado diferentes estrategias de rendering según las necesidades de cada página:

- `/houses`: utiliza **SSR** mediante `useAsyncData`, ya que el contenido depende de los `search params` utilizados por el buscador. Los datos del listado se obtienen durante el renderizado en servidor y se reutilizan durante la hidratación en cliente.
- `/houses/[id]`: utiliza **SSG mediante prerendering**. El número de casas es reducido y sus rutas son conocidas durante el build, por lo que se generan las páginas estáticas previamente mediante `routeRules`.
- Buscador: es un **componente Vue interactivo** porque necesita gestionar el estado del campo de búsqueda y actualizar los `search params` mediante `useRouter`.
- Botón de reservar: es un **componente Vue interactivo** para gestionar el estado de la reserva en el navegador y ejecutar la acción de reserva mediante una petición `PATCH`.

# Cómo ver el proyecto

## Requisitos

- Node.js
- pnpm

## Instalación

1. Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd <nombre-del-proyecto>
```

2. Instalar dependencias del proyecto y de `api-server`

```bash
pnpm install
```

## Desarrollo

El siguiente comando inicia el servidor de desarrollo de TanStack Start/Vite y el mock API server simultáneamente:

```bash
pnpm dev
```

La aplicación estará disponible en:

http://localhost:3000

El mock API server estará disponible en:

http://localhost:3001

También se pueden ejecutar por separado:

```bash
pnpm run dev:nuxt
pnpm run start:api-server
```

## Producción

Generar el build:

```bash
pnpm run build
```
