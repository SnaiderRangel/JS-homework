import { useEffect, useRef } from 'react'

type KeyHandlers = Record<string, () => void>

function isTypingTarget(target: EventTarget | null) {
  return (
    target instanceof HTMLElement &&
    (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)
  )
}

export function useKeyBoardPress(keyHandlers: KeyHandlers) {
  // keep the latest handlers without re-adding the listener on every render
  const handlersRef = useRef(keyHandlers)

  useEffect(() => {
    handlersRef.current = keyHandlers
  })

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // don't react to keys typed into other inputs on the page
      if (isTypingTarget(event.target)) return

      const handler = handlersRef.current[event.key]
      if (handler) {
        handler()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])
}
