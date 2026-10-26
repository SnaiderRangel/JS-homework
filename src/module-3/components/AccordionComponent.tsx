import { useState } from 'react'
import { useKeyBoardPress } from '../hooks/useKeyBoardPress'

function AccordionComponent() {
  const [isOpen, setIsOpen] = useState(false)

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  useKeyBoardPress({
    Enter: open,
    '+': open,
    Escape: close,
    '-': close,
  })

  return (
    <div className="accordion">
      <button
        type="button"
        className="accordion__header"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        // Enter is already handled by useKeyBoardPress, don't let it also trigger a click
        onKeyDown={(event) => event.key === 'Enter' && event.preventDefault()}
      >
        <span>What is a custom hook?</span>
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div className="accordion__content">
          <p>
            A custom hook is a function whose name starts with &quot;use&quot; and that calls other
            hooks. It lets you reuse stateful logic between components.
          </p>
        </div>
      )}
      <p className="hint">Press Enter or + to open, Escape or - to close.</p>
    </div>
  )
}

export default AccordionComponent
