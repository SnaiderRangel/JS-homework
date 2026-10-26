import { useState, type KeyboardEvent } from 'react'
import type { Item, ItemListProps } from '../types'

function ItemListFunctional({ items: initialItems }: ItemListProps) {
  // copy the items from props so we can add/remove them locally
  const [items, setItems] = useState<Item[]>(initialItems)
  const [inputValue, setInputValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  const addItem = () => {
    const name = inputValue.trim()
    if (!name) return

    setItems((prevItems) => [...prevItems, { id: crypto.randomUUID(), name }])
    setInputValue('')
  }

  const deleteItem = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      setInputValue('')
    }

    if (event.key === 'Enter') {
      addItem()
    }
  }

  return (
    <div>
      <input
        type="text"
        className={isFocused ? 'focused' : ''}
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onKeyDown={handleKeyDown}
      />
      <button type="button" onClick={addItem} disabled={!inputValue.trim()}>
        Add
      </button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <p>{item.name}</p>
            <button type="button" onClick={() => deleteItem(item.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ItemListFunctional
