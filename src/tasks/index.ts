import { lazy, type ComponentType, type LazyExoticComponent } from 'react'

export interface Task {
  path: string
  module: number
  moduleTitle: string
  title: string
  description: string
  Component: LazyExoticComponent<ComponentType>
}

// Register every new task here so it shows up on the home page
export const tasks: Task[] = [
  {
    path: 'module-1/task-1',
    module: 1,
    moduleTitle: 'Core Concepts',
    title: 'Item list with composition',
    description: 'Render a list of items where each item is a separate child component.',
    Component: lazy(() => import('./module-1/task-1-item-list')),
  },
]
