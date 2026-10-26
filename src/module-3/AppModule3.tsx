import type { ComponentType } from 'react'
import FetchComponent from './components/FetchComponent'
import TimerComponent from './components/TimerComponent'
import './styles.css'

interface HookTask {
  id: string
  title: string
  Component: ComponentType
}

// Each hook task is rendered in its own section
const reactHooks: HookTask[] = [
  { id: 'timer', title: 'useEffect - Timer', Component: TimerComponent },
  { id: 'fetch', title: 'useEffect - Fetch', Component: FetchComponent },
]

function AppModule3() {
  return (
    <div className="module-3">
      {reactHooks.map(({ id, title, Component }) => (
        <section key={id} className="task">
          <h2 className="task__title">{title}</h2>
          <Component />
        </section>
      ))}
    </div>
  )
}

export default AppModule3
