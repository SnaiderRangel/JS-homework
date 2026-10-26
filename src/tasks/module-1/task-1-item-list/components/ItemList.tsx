import type { Item } from '../data/items'
import ListItem from './ListItem'

interface ItemListProps {
  items: Item[]
}

function ItemList({ items }: ItemListProps) {
  if (items.length === 0) {
    return <p className="item-list__empty">No items to display.</p>
  }

  return (
    <ul className="item-list">
      {items.map((item) => (
        <ListItem
          key={item.id}
          name={item.name}
          description={item.description}
          category={item.category}
          price={item.price}
        />
      ))}
    </ul>
  )
}

export default ItemList
