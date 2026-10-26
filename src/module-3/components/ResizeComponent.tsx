import { useEffect, useState } from 'react'

function getWindowSize() {
  return { width: window.innerWidth, height: window.innerHeight }
}

function ResizeComponent() {
  const [size, setSize] = useState(getWindowSize)

  useEffect(() => {
    const handleResize = () => setSize(getWindowSize())

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <p>
      Window size: {size.width} x {size.height}
    </p>
  )
}

export default ResizeComponent
