import { useState, useEffect, useRef } from 'react'

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
  enabled = true
): [T, (value: T) => void] {
  const [value, setValue] = useState<T>(() => {
    if (!enabled) return initialValue
    try {
      const item = localStorage.getItem(key)
      return item ? (JSON.parse(item) as T) : initialValue
    } catch (error) {
      console.error('Error reading from localStorage:', error)
      return initialValue
    }
  })

  // Track previous value to only write on actual changes
  const prevValueRef = useRef(value)

  useEffect(() => {
    if (!enabled) return
    if (prevValueRef.current === value) return
    prevValueRef.current = value
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error('Error writing to localStorage:', error)
    }
  }, [key, value, enabled])

  return [value, setValue]
}
