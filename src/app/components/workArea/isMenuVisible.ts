import { useState, useEffect, useRef } from 'react'

export default function isMenuVisible (initialIsVisible: boolean) {
  const [isVisible, setIsVisible] = useState(initialIsVisible)
  const ref = useRef<any>(null)

  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [])

  return { ref, isVisible, setIsVisible }
}
