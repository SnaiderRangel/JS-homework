import ItemList from './components/ItemList'
import { items } from './data/items'
import './styles.css'

function AppModule1() {
  return (
    <section className="task">
      <h2 className="task__title">Task 1 - Item list with composition</h2>
      <ItemList items={items} />
    </section>
  )
}

export default AppModule1
