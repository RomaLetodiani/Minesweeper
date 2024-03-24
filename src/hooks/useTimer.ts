import { useState } from 'react'
import useInterval from './useInterval'

/**
 * Custom hook for a timer.
 * @returns {{ seconds: number; isRunning: boolean; startTimer: () => void; pauseTimer: () => void; resetTimer: () => void }} - Object containing timer state and functions.
 */
const useTimer = (): {
  seconds: number
  isRunning: boolean
  startTimer: () => void
  pauseTimer: () => void
  resetTimer: () => void
} => {
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(true)

  // Define functions to manage the timer
  const startTimer = () => setIsRunning(true)
  const pauseTimer = () => setIsRunning(false)
  const resetTimer = () => {
    setSeconds(0)
    setIsRunning(true)
  }

  // Effect to decrement seconds when timer is running
  useInterval(
    () => {
      if (isRunning) {
        setSeconds((prevSeconds) => prevSeconds + 1)
      } else {
        setIsRunning(false) // Pause when at 0 or not running
      }
    },
    isRunning ? 1000 : null,
  )

  return { seconds, isRunning, startTimer, pauseTimer, resetTimer }
}

export default useTimer

// Example usage
// const { seconds, isRunning, startTimer, resetTimer, pauseTimer } = useTimer();
