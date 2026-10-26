import { useEffect, useRef, type RefObject } from 'react'

export function useOutsideClick<T extends HTMLElement>(
  ref: RefObject<T | null>,
  onOutsideClick: () => void,
) {
  // keep the latest callback without re-adding the listener on every render
  const callbackRef = useRef(onOutsideClick)

  useEffect(() => {
    callbackRef.current = onOutsideClick
  })

  useEffect(() => {
    const handleMouseDown = (event: MouseEvent) => {
      const element = ref.current
      if (element && !element.contains(event.target as Node)) {
        callbackRef.current()
      }
    }

    document.addEventListener('mousedown', handleMouseDown)

    return () => document.removeEventListener('mousedown', handleMouseDown)
  }, [ref])
}
