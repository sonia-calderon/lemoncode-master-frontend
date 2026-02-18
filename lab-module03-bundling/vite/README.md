# Vite
### Obligatorio
Montar una semilla de proyecto con vite que:

- Esté configurado con TypeScript y que permita detectar errores de tipos en la terminal si los hubiera.
- Se pueda ver el tamaño del bundle.
- Tenga los scripts ```start``` para levantar el servidor de desarrollo y ```preview``` para levantar el bundle de producción.
- Tenga variables de entorno. Puedes usar una cadena de texto que muestres con un console.log donde en desarrollo, mientras lo levantas en local con ```npm start``` tenga un valor, pero al hacer la build y verlo con ```npm run preview``` tenga otro valor.
- Creéis un elemento H1 con texto utilizando la API del DOM y ese H1 esté estilado con CSSModules

### Opcional
Añadir al proyecto semilla de Vite la configuración necesaria para que al hacer la build también genere los ficheros de forma comprimida (GZIP y BROTLI), por lo que al hacer la build deberán existir los ficheros ```dist/index.js.gz``` y un ```dist/index.js.br```.