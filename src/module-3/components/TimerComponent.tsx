import { useEffect, useState } from 'react'

function TimerComponent() {
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    if (!isRunning) return

    const intervalId = setInterval(() => {
      setSeconds((prev) => prev + 1)
    }, 1000)

    // stop the interval when the timer is stopped or the component unmounts
    return () => clearInterval(intervalId)
  }, [isRunning])

  return (
    <div>
      <p>Time: {seconds}s</p>
      <button type="button" onClick={() => setIsRunning(true)} disabled={isRunning}>
        Start
      </button>
      <button type="button" onClick={() => setIsRunning(false)} disabled={!isRunning}>
        Stop
      </button>
    </div>
  )
}

export default TimerComponent
