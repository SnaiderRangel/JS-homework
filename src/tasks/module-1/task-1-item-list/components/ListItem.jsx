function formatPrice(price) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price)
}

function ListItem({ name, description, category, price }) {
  return (
    <li className="list-item">
      <div className="list-item__header">
        <h3 className="list-item__name">{name}</h3>
        <span className="list-item__category">{category}</span>
      </div>
      <p className="list-item__description">{description}</p>
      <span className="list-item__price">{formatPrice(price)}</span>
    </li>
  )
}

export default ListItem
