# Vue: Meal Planner

En este ejercicio, deberás crear una aplicación web utilizando Vue 3 (con la plantilla de `create-vue`) que permita planificar las comidas de una semana.

La interfaz de usuario debe tener los siguientes elementos:

- Un formulario que permita añadir un plato, indicando:
  - El nombre del plato (campo de texto).
  - El día de la semana (selector o menú desplegable).
- Un botón "Agregar" que añada el plato al plan semanal.
- Una vista principal donde se muestren los días de la semana con los platos planificados.
  - Cada día puede mostrar una lista de platos (por ejemplo: "Comida" o "Cena").
  - Cada plato debe tener un botón "Eliminar" para borrarlo del plan.
- El estado de la aplicación (lista de platos planificados) debe gestionarse con Pinia.
- Una vez se añada un plato, el formulario debe limpiarse automáticamente.

### Obligatorio

- Usar Vue Router para organizar la aplicación con al menos dos vistas:
  - Una vista "Plan semanal" (lista de comidas por día).
  - Una vista "Lista de platos favoritos" (opcionalmente, platos frecuentes para reutilizar).
- Gestionar el estado global de las comidas con Pinia.
- Mantener una estructura clara de componentes (por ejemplo: MealForm.vue, MealList.vue, DayCard.vue, etc.).
- El diseño puede hacerse con Tailwind CSS (recomendado por rapidez) o con CSS propio.

### Adicional

- 💾 Persistencia del estado: usar el plugin `pinia-plugin-persistedstate` para que el plan semanal no se pierda al recargar la página.
- ✏️ Editar platos existentes: permitir modificar el nombre o el día de un plato.
- 🔍 Filtrar o buscar platos por nombre o por día.
- 🗓️ Añadir categorías de comidas (por ejemplo: "Desayuno", "Comida", "Cena") y permitir filtrarlas.
- 🎨 Mejorar la apariencia con Tailwind o CSS personalizado:
  - Mostrar los días en tarjetas o columnas.
  - Usar colores, espaciados y tipografía para hacerlo más legible.
- 📱 Diseño responsive, para que se vea bien en móviles.
- 🧺 Funcionalidades extra:
  - Botón para limpiar el plan semanal completo.
  - Contador de platos planificados.
  - Exportar el menú semanal como texto (para copiar o imprimir).
  - Navegación adicional: "Plan semanal" / "Platos favoritos" / "Configuración".

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
pnpm dev
```
