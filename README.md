# JS-homework

Home tasks for the EPAM React program. Each module lives in its own folder under `modules/` and is a small Vite + React app.

## Structure

```
modules/
  module-1-core-concepts/
package.json   <- shared dependencies (React, Vite, oxlint)
```

The repo uses [npm workspaces](https://docs.npmjs.com/cli/using-npm/workspaces), so dependencies are installed once at the root and shared by every module.

## Getting started

```bash
npm install
npm run dev:m1
```

| Module | Topic | Run |
| --- | --- | --- |
| 1 | Core Concepts | `npm run dev:m1` |

Other useful scripts:

- `npm run build` - builds every module
- `npm run lint` - lints all modules
