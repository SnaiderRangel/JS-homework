import { useEffect, useState } from 'react'

interface ScrollPosition {
  x: number
  y: number
}

function getScrollPosition(): ScrollPosition {
  return { x: window.scrollX, y: window.scrollY }
}

export function useScrollPosition() {
  const [position, setPosition] = useState(getScrollPosition)

  useEffect(() => {
    const handleScroll = () => {
      const next = getScrollPosition()
      // only update the state when the position actually changed
      setPosition((prev) => (prev.x === next.x && prev.y === next.y ? prev : next))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return position
}
