import { useEffect, useState } from 'react'

// <T> Is a 'Generic' means that we pass the type through the parameter
// example: useDebounce<string>('Hello', 500)

export function useDebounce<T>(value: T, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}
