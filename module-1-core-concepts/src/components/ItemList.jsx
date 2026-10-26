import ListItem from './ListItem'

function ItemList({ items }) {
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
