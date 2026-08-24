import { SITE } from '../data/content'

export function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Здравствуйте! Хочу записаться на консультацию.')}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Написать в WhatsApp"
    >
      <img src="/images/image2.png" alt="" width={56} height={56} />
    </a>
  )
}
