# Metaframeworks - NextJS: Casas Rurales

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

- `/houses`: Utiliza `searchParams` para realizar búsquedas en cada petición, mientras que el listado se obtiene con `revalidate: 10` para reutilizar los datos durante 10 segundos.
- `/houses/[houseId]`: `getHouse` utiliza `cache: 'no-store'` para obtener siempre el estado de reserva actualizado. `generateStaticParams` proporciona los IDs de las casas conocidos durante el build.
- Buscador: es un Client Component porque necesita gestionar interacción y estado en el navegador.
- Botón de reservar: es un Client Component para gestionar el estado de reserva.

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

2. Instalar dependencias

```bash
pnpm install
```

## Desarrollo

El siguiente comando inicia Next.js y el mock API server simultáneamente:

```bash
pnpm start
```

La aplicación estará disponible en:

http://localhost:3000

También se pueden ejecutar por separado:

```bash
pnpm run start:dev
pnpm run start:api-server
```

## Producción

Generar el build:

```bash
pnpm run build
```

Iniciar Next.js en producción:

```bash
pnpm run start:prod
```

La aplicación estará disponible en:

http://localhost:8080

En producción, el mock API server debe estar ejecutándose aparte:

```bash
pnpm run start:api-server
```

## Variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto:

BASE_API_URL=http://localhost:3001/api
BASE_PICTURES_URL=http://localhost:3001
IMAGES_DOMAIN=localhost

Estas variables se utilizan para:

`BASE_API_URL`: URL base del mock API server.
`BASE_PICTURES_URL`: URL base utilizada para cargar las imágenes de las casas.
`IMAGES_DOMAIN`: dominio permitido por next/image para optimizar las imágenes externas.
