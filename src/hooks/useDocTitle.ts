import { useEffect } from 'react'

export function useDocTitle(title: string) {
  useEffect(() => {
    const originalTitle = document.title
    document.title = title
    return () => {
      document.title = originalTitle
    }
  })
}
