import { Suspense } from 'react'
import { Link } from 'react-router'
import type { Task } from '../tasks'

function TaskPage({ task }: { task: Task }) {
  const { Component } = task

  return (
    <>
      <Link to="/" className="back-link">
        &larr; All tasks
      </Link>
      <p className="task-page__module">
        Module {task.module}: {task.moduleTitle}
      </p>
      <h1>{task.title}</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <Component />
      </Suspense>
    </>
  )
}

export default TaskPage
