import { onMounted, onUnmounted } from 'vue'

export function useReveal(elRef, options = {}) {
  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '0px',
    once: true,
    ...options
  }

  let observer = null

  onMounted(() => {
    const el = elRef.value
    if (!el) return

    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.classList.add('active')
          if (defaultOptions.once) {
            observer.unobserve(el)
          }
        } else if (!defaultOptions.once) {
          el.classList.remove('active')
        }
      })
    }, defaultOptions)

    observer.observe(el)
  })

  onUnmounted(() => {
    if (observer && elRef.value) {
      observer.unobserve(elRef.value)
    }
  })

  return {
    // Puedes exponer métodos si es necesario
  }
}