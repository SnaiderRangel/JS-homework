import { useReducer, useState, type FormEvent } from 'react'
import { todoReducer } from './todoReducer'

function ToDoComponent() {
  const [todos, dispatch] = useReducer(todoReducer, [])
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const text = inputValue.trim()
    if (!text) return

    dispatch({ type: 'ADD_TODO', payload: text })
    setInputValue('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="New todo"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button type="submit" disabled={!inputValue.trim()}>
          Add
        </button>
      </form>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? 'todo todo--completed' : 'todo'}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
              />
              <span>{todo.text}</span>
            </label>
            <button type="button" onClick={() => dispatch({ type: 'REMOVE_TODO', payload: todo.id })}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ToDoComponent
