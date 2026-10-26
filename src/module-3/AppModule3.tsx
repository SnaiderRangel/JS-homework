import type { ComponentType } from 'react'
import AccordionComponent from './components/AccordionComponent'
import DropDownComponent from './components/DropDownComponent'
import FetchComponent from './components/FetchComponent'
import ResizeComponent from './components/ResizeComponent'
import ThemeComponent from './components/theme/ThemeComponent'
import TimerComponent from './components/TimerComponent'
import ToDoComponent from './components/todo/ToDoComponent'
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
  { id: 'resize', title: 'useEffect - Resize', Component: ResizeComponent },
  { id: 'theme', title: 'useContext - Theme', Component: ThemeComponent },
  { id: 'todo', title: 'useReducer - TodoList', Component: ToDoComponent },
  { id: 'dropdown', title: 'useOutsideClick - Dropdown', Component: DropDownComponent },
  { id: 'accordion', title: 'useKeyBoardPress - Accordion', Component: AccordionComponent },
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
