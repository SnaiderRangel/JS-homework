# JS-homework

Home tasks for the EPAM React Global Program, in a single Vite + React + TypeScript app.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173 and pick a module from the dropdown in the top-right corner.

## Structure

```
src/
  App.tsx           layout and selected module
  components/       shared components (header)
  modules.ts        list of modules shown in the selector
  module-1/
    AppModule1.tsx  entry point for module 1
  module-2/
    AppModule2.tsx  entry point for module 2
```

Each module folder has its own components, data, styles and a README with the task description.

## Adding a new module

1. Create `src/module-N/AppModuleN.tsx`.
2. Register it in `src/modules.ts`.

## Modules

| Module | Topic |
| --- | --- |
| 1 | Core Concepts |
| 2 | React components |

## Scripts

- `npm run dev` - start the dev server
- `npm run build` - type check and production build
- `npm run lint` - lint the source code
