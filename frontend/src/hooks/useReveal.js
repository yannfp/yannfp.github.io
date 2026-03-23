import { useEffect, useRef } from 'react'

/**
 * Attaches an IntersectionObserver to a container ref.
 * All children with class "reveal" inside it will animate in on scroll.
 * Pass `immediate = true` to reveal instantly (for above-the-fold content).
 */
export function useReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return

    const targets = root.querySelectorAll
      ? root.classList.contains('reveal')
        ? [root]
        : root.querySelectorAll('.reveal')
      : []

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: options.threshold ?? 0.1 }
    )

    targets.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [options.threshold])

  return ref
}

/**
 * Single element reveal.
 * Returns a ref — attach to any element to reveal it on scroll.
 */
export function useRevealEl(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.disconnect()
        }
      },
      { threshold: options.threshold ?? 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [options.threshold])

  return ref
}
