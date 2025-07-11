import { useState, useEffect } from 'react'

export function useLocalStorage<T>(key: string, initialValue: T, enabled = true): [T, (value: T) => void] {
  const [value, setValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error('Error reading from localStorage:', error)
      return initialValue
    }
  })

  useEffect(() => {
    if (enabled) {
      try {
        localStorage.setItem(key, JSON.stringify(value))
      } catch (error) {
        console.error('Error writing to localStorage:', error)
      }
    }
  }, [key, value, enabled])

  return [value, setValue]
}
