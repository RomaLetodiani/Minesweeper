import { RefObject, useEffect, useRef, useState } from 'react'

const useLongPress = <T extends HTMLElement>(
  ref: RefObject<T>,
  duration: number = 500,
): boolean => {
  const [isLongPress, setIsLongPress] = useState<boolean>(false)
  const timeout = useRef<number | null>(null)

  useEffect(() => {
    const handleTouchStart = () => {
      timeout.current = window.setTimeout(() => {
        setIsLongPress(true)
      }, duration)
    }

    const handleTouchEnd = () => {
      if (timeout.current !== null) {
        clearTimeout(timeout.current)
      }
      setIsLongPress(false)
    }

    const element = ref.current

    if (element) {
      element.addEventListener('touchstart', handleTouchStart)
      element.addEventListener('touchend', handleTouchEnd)

      return () => {
        element.removeEventListener('touchstart', handleTouchStart)
        element.removeEventListener('touchend', handleTouchEnd)
      }
    }
  }, [ref, duration])

  return isLongPress
}

export default useLongPress
