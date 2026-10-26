import { lazy, type ComponentType, type LazyExoticComponent } from 'react'

export interface Module {
  id: string
  label: string
  Component: LazyExoticComponent<ComponentType>
}

// Register every new module here so it shows up in the selector
export const modules: Module[] = [
  {
    id: 'module-1',
    label: 'Module - 1',
    Component: lazy(() => import('./module-1/AppModule1')),
  },
  {
    id: 'module-2',
    label: 'Module - 2',
    Component: lazy(() => import('./module-2/AppModule2')),
  },
]
