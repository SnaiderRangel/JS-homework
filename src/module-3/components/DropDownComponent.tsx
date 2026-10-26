import { useRef, useState } from 'react'
import { useOutsideClick } from '../hooks/useOutsideClick'

const options = ['Profile', 'Settings', 'Log out']

function DropDownComponent() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useOutsideClick(dropdownRef, () => setIsOpen(false))

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button type="button" onClick={() => setIsOpen((prev) => !prev)}>
        Open dropdown
      </button>
      {isOpen && (
        <ul className="dropdown__menu">
          {options.map((option) => (
            <li key={option} className="dropdown__item">
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default DropDownComponent
