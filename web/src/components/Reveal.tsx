import {
  createElement,
  useEffect,
  useRef,
  type ElementType,
  type HTMLAttributes,
  type ReactNode,
} from 'react'

type Props = {
  children: ReactNode
  className?: string
  as?: ElementType
  /** Accordion grouping for `<details>` */
  name?: string
  open?: boolean
} & HTMLAttributes<HTMLElement>

export function Reveal({ children, className = '', as = 'div', ...rest }: Props) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const show = () => node.classList.add('in')

    if (!('IntersectionObserver' in window)) {
      show()
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px 0px 0px' },
    )

    io.observe(node)

    const rect = node.getBoundingClientRect()
    const inView = rect.top < window.innerHeight && rect.bottom > 0
    if (inView) show()

    const fallback = window.setTimeout(show, 1200)

    return () => {
      io.disconnect()
      window.clearTimeout(fallback)
    }
  }, [])

  return createElement(
    as,
    { ref, className: `reveal ${className}`.trim(), ...rest },
    children,
  )
}
