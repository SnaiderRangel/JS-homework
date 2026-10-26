import ItemListClass from './components/ItemListClass'
import ItemListFunctional from './components/ItemListFunctional'
import ModalForm from './components/ModalForm'
import { items } from './data/items'
import './styles.css'

function AppModule2() {
  return (
    <div className="module-2">
      <section className="task">
        <h2 className="task__title">Task 1 - React class component</h2>
        <ItemListClass items={items} />
      </section>

      <section className="task">
        <h2 className="task__title">Task 2 - React functional component</h2>
        <ItemListFunctional items={items} />
      </section>

      <section className="task">
        <h2 className="task__title">Task 3 - React portal</h2>
        <ModalForm />
      </section>
    </div>
  )
}

export default AppModule2
