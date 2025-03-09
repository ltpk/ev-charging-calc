import { useState, useEffect } from 'react'

/**
 * Custom hook for persisting state in localStorage
 * 
 * @param {string} key - localStorage key
 * @param {any} initialValue - Initial value if nothing is stored
 * @param {boolean} enabled - Whether to persist to localStorage
 * @returns {[any, Function]} State value and setter function
 */
export const useLocalStorage = (key, initialValue, enabled = true) => {
  // Initialize state with value from localStorage or fallback to initialValue
  const [value, setValue] = useState(() => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error('Error reading from localStorage:', error)
      return initialValue
    }
  })

  // Update localStorage when the state changes
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
