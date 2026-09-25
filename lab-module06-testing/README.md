# Testing

### Obligatorio

Partiendo del ejemplo `05-testing/01-react/05-real-project/00-boilerplate` del respositorio de Lemoncode.

- Crear y clonar el repositorio donde entregaréis el laboratorio.
- Subir esos ficheros tal cuál haciendo un commit/push en la rama main.
- Crear nueva rama llamada `feature/laboratorio-testing-obligatorio`.
- Implementar los ejercicios obligatorios.
  - Añadir tests al mapper `./src/pods/project/project.mapper.ts`.
  - Añadir tests al componente `./src/common/components/confirmation-dialog/confirmation-dialog.component.tsx`.
  - Añadir tests al hook `./src/common/components/confirmation-dialog/confirmation-dialog.hook.ts`.
- Crear una pull request desde la rama `feature/laboratorio-testing-obligatorio` hacia la rama `main` para que se vean los nuevos cambios.
- Por último, entregar el laboratorio en el campus dejando dicha pull request abierta para su corrección.

### Opcional

Crear nueva rama llamada `feature/laboratorio-testing-opcional` partiendo de la rama anterior `feature/laboratorio-testing-obligatorio`.

Desafios:

- Añadir test al componente `./src/common/components/spinner/spinner.component.tsx`.
- Añadir pipeline de CI (integración continua) con Github Actions, para los unit tests.
- Añadir tests e2e usando Cypress de una `scene`. Podéis elegir cualquiera de las disponibles (login, submodule-list, employee-list, employee, project-list, project).
- Añadir pipeline de CI (integración continua) con Github Actions para los e2e. Incluso podéis usar la misma pipeline que los unit tests

Una vez completados los desafíos que queráis presentar, crear otra pull request nueva, pero esta vez desde la rama `feature/laboratorio-testing-opcional` hacia la rama `feature/laboratorio-testing-obligatorio`.

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
pnpm start
```

## Cómo testar

En la rama `feature/laboratorio-testing-obligatorio`

```bash
pnpm test
```

En la rama `feature/laboratorio-testing-opcional`

```bash
pnpm start
pnpm run test:e2e
```

or

```bash
pnpm run test:e2e:ci
```
