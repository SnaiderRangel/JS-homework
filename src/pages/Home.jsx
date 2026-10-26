import { Link } from 'react-router'
import { tasks } from '../tasks'

function groupByModule(taskList) {
  return taskList.reduce((groups, task) => {
    const key = task.module
    if (!groups[key]) {
      groups[key] = { title: task.moduleTitle, tasks: [] }
    }
    groups[key].tasks.push(task)
    return groups
  }, {})
}

function Home() {
  const modules = groupByModule(tasks)

  return (
    <>
      <h1>JS Homework</h1>
      <p className="home__intro">Select a task to see it in action.</p>

      {Object.entries(modules).map(([number, group]) => (
        <section key={number} className="module">
          <h2 className="module__title">
            Module {number}: {group.title}
          </h2>
          <ul className="task-list">
            {group.tasks.map((task) => (
              <li key={task.path}>
                <Link to={`/${task.path}`} className="task-card">
                  <span className="task-card__title">{task.title}</span>
                  <span className="task-card__description">{task.description}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </>
  )
}

export default Home
