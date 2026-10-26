import { Component, type ChangeEvent, type KeyboardEvent } from 'react'
import type { ItemListProps, ItemListState } from '../types'

class ItemListClass extends Component<ItemListProps, ItemListState> {
  constructor(props: ItemListProps) {
    super(props)
    // copy the items from props so we can add/remove them locally
    this.state = {
      items: props.items,
      inputValue: '',
      isFocused: false,
    }
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: event.target.value })
  }

  handleFocus = () => {
    this.setState({ isFocused: true })
  }

  handleBlur = () => {
    this.setState({ isFocused: false })
  }

  handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      this.setState({ inputValue: '' })
    }

    if (event.key === 'Enter') {
      this.addItem()
    }
  }

  addItem = () => {
    const name = this.state.inputValue.trim()
    if (!name) return

    this.setState((prevState) => ({
      items: [...prevState.items, { id: crypto.randomUUID(), name }],
      inputValue: '',
    }))
  }

  deleteItem = (id: string) => {
    this.setState((prevState) => ({
      items: prevState.items.filter((item) => item.id !== id),
    }))
  }

  render() {
    const { items, inputValue, isFocused } = this.state

    return (
      <div>
        <input
          type="text"
          className={isFocused ? 'focused' : ''}
          value={inputValue}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onKeyDown={this.handleKeyDown}
        />
        <button type="button" onClick={this.addItem} disabled={!inputValue.trim()}>
          Add
        </button>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <p>{item.name}</p>
              <button type="button" onClick={() => this.deleteItem(item.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default ItemListClass
