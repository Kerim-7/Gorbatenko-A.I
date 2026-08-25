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

    if (!('IntersectionObserver' in window)) {
      node.classList.add('in')
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
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    io.observe(node)
    return () => io.disconnect()
  }, [])

  return createElement(
    as,
    { ref, className: `reveal ${className}`.trim(), ...rest },
    children,
  )
}
