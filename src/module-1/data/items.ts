export interface Item {
  id: number
  name: string
  description: string
  category: string
  price: number
}

export const items: Item[] = [
  {
    id: 1,
    name: 'Wireless Headphones',
    description: 'Over-ear headphones with noise cancellation and 30h battery life.',
    category: 'Audio',
    price: 129.99,
  },
  {
    id: 2,
    name: 'Mechanical Keyboard',
    description: 'Compact 75% layout with hot-swappable switches.',
    category: 'Accessories',
    price: 89.5,
  },
  {
    id: 3,
    name: '4K Monitor',
    description: '27-inch IPS display with USB-C power delivery.',
    category: 'Displays',
    price: 349,
  },
  {
    id: 4,
    name: 'Ergonomic Mouse',
    description: 'Vertical design that reduces wrist strain during long sessions.',
    category: 'Accessories',
    price: 45.99,
  },
  {
    id: 5,
    name: 'USB-C Hub',
    description: '7-in-1 hub with HDMI, SD card reader and 100W pass-through charging.',
    category: 'Accessories',
    price: 39.9,
  },
]
