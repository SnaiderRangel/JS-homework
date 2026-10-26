import ItemList from './components/ItemList'
import { items } from './data/items'

function App() {
  return (
    <main className="app">
      <h1>Module 1: Core Concepts</h1>
      <ItemList items={items} />
    </main>
  )
}

export default App
