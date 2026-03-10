import { onMounted } from 'vue'

export function useReveal(elRef) {
  onMounted(() => {
    const el = elRef.value
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('active')
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(el)
  })
}