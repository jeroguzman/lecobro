import { useEffect, useRef } from 'react'

export const useScrollAnimation = (options = {}) => {
  const ref = useRef(null)
  const { threshold = 0.1, delay = 0 } = options

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate-in')
          }, delay)
          observer.unobserve(entry.target)
        }
      })
    }, {
      threshold,
      rootMargin: '0px 0px -50px 0px'
    })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold, delay])

  return ref
}

export const useScrollReveal = () => {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const children = entry.target.querySelectorAll('[data-reveal]')
          children.forEach((child, i) => {
            setTimeout(() => {
              child.classList.add('animate-in')
            }, i * 100)
          })
          observer.unobserve(entry.target)
        }
      })
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return ref
}
