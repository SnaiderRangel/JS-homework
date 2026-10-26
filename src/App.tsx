import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import TaskPage from './pages/TaskPage'
import { tasks } from './tasks'

function App() {
  return (
    <main className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        {tasks.map((task) => (
          <Route key={task.path} path={task.path} element={<TaskPage task={task} />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  )
}

export default App
