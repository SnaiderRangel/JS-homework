export interface Todo {
  id: string
  text: string
  completed: boolean
}

export type TodoAction =
  | { type: 'ADD_TODO'; payload: string }
  | { type: 'TOGGLE_TODO'; payload: string }
  | { type: 'REMOVE_TODO'; payload: string }

export function todoReducer(state: Todo[], action: TodoAction): Todo[] {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: crypto.randomUUID(), text: action.payload, completed: false }]
    case 'TOGGLE_TODO':
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo,
      )
    case 'REMOVE_TODO':
      return state.filter((todo) => todo.id !== action.payload)
    default:
      return state
  }
}
