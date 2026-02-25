# Webpack
### Obligatorio
Implementar una aplicación simple que:

- Tenga el bundling montado con webpack.
- Muestre un logo (por ejemplo el de lemoncode u otro que queráis).
- Muestre el texto "hola mundo" estilado con SASS.

### Opcional
Esta parte es opcional, por si queréis seguir practicando.

- Mostrar un hola mundo desarrollado con React.
- Añadir typescript
- Tener una versión de build de producción.
- Tener variables de entorno para diferentes entornos (desarrollo y producción).
- Tener una forma de medir cuanto ocupa cada librería y nuestro código en el bundle.

# Cómo ver el proyecto
## Requisitos
- Node.js
- npm

## Cómo ejecutar
1. Clonar el repositorio
```bash
git clone <url-del-repositorio>
cd <nombre-del-proyecto>
```
2. Instalar dependencias
```bash
npm install
```
3. Levantar el servidor 
- En desarrollo
```bash
npm start
```
- En Producción
```bash
npm run start:prod
```
4. Ver tamaño del bundle
```bash
npm run build:perf
```