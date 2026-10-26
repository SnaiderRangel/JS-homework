# JS-homework

Home tasks for the EPAM React program, all in a single Vite + React app. The home page lists every task, and clicking one opens it.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

## Structure

```
src/
  pages/            home page, task page and 404
  tasks/
    index.js        list of all tasks (register new ones here)
    module-1/
      task-1-item-list/
```

Each task lives in its own folder with its components, data, styles and a README describing it.

## Adding a new task

1. Create a folder under `src/tasks/module-N/task-N-name/` with an `index.jsx` that exports the task component.
2. Add an entry to `src/tasks/index.js` with its path, module, title and description.

## Tasks

| Module | Task | Route |
| --- | --- | --- |
| 1. Core Concepts | Item list with composition | `/module-1/task-1` |

## Scripts

- `npm run dev` - start the dev server
- `npm run build` - production build
- `npm run lint` - lint the source code
