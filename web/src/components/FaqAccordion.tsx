import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Reveal } from './Reveal'

export type FaqEntry = {
  q: string
  a: string
  links?: readonly { readonly to: string; readonly label: string }[]
}

type Props = {
  items: readonly FaqEntry[]
  name: string
  renderLinks?: boolean
}

export function FaqAccordion({ items, name, renderLinks = false }: Props) {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <div className="faq-list">
      {items.map((item) => (
        <Reveal
          as="details"
          className="faq-item"
          key={item.q}
          name={name}
          open={openId === item.q}
          onToggle={(event) => {
            const details = event.currentTarget as HTMLDetailsElement
            if (details.open) setOpenId(item.q)
            else if (openId === item.q) setOpenId(null)
          }}
        >
          <summary>{item.q}</summary>
          <p>{item.a}</p>
          {renderLinks && item.links ? (
            <p className="faq-links">
              {item.links.map((link) => (
                <Link key={link.to} to={link.to}>
                  {link.label}
                </Link>
              ))}
            </p>
          ) : null}
        </Reveal>
      ))}
    </div>
  )
}
