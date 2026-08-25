type Props = {
  light?: boolean
}

export function Logo({ light = false }: Props) {
  return (
    <span className={`logo${light ? ' logo-light' : ''}`}>
      Горбатенко А.И.
    </span>
  )
}
