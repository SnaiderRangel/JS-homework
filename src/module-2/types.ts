export interface Item {
  id: string
  name: string
}

export interface ItemListProps {
  items: Item[]
}

export interface ItemListState {
  items: Item[]
  inputValue: string
  isFocused: boolean
}
