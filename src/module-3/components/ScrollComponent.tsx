import { useScrollPosition } from '../hooks/useScrollPosition'

function ScrollComponent() {
  const { x, y } = useScrollPosition()

  return (
    <div>
      <p>
        Scroll position: vertical {Math.round(y)}px, horizontal {Math.round(x)}px
      </p>
      <p className="hint">Scroll the page to see the values change.</p>
    </div>
  )
}

export default ScrollComponent
