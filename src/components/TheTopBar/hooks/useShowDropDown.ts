import { useEffect, useState } from 'react'

export const useShowDropDown = () => {
  const [showDropDown, setShowDropDown] = useState(false)

  useEffect(() => {
    if (!showDropDown) return
    const closeDropDown = () => {
      setShowDropDown(false)
    }
    document.addEventListener('click', closeDropDown)
    return () => document.removeEventListener('click', closeDropDown)
  }, [showDropDown])

  return { showDropDown, setShowDropDown }
}
