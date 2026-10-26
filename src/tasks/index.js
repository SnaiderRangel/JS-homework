import { lazy } from 'react'

// Register every new task here so it shows up on the home page
export const tasks = [
  {
    path: 'module-1/task-1',
    module: 1,
    moduleTitle: 'Core Concepts',
    title: 'Item list with composition',
    description: 'Render a list of items where each item is a separate child component.',
    Component: lazy(() => import('./module-1/task-1-item-list')),
  },
]
