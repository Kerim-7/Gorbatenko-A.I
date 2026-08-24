import { conferencePhotos, conferences } from '../data/content'
import { Reveal } from './Reveal'

export function Conferences() {
  return (
    <section className="section conferences" id="conferences" aria-labelledby="conferences-heading">
      <div className="wrap">
        <Reveal className="section-head">
          <h2 id="conferences-heading">Конференции и конгрессы</h2>
          <p>
            Регулярное участие в профильных форумах по ортопедии, хирургии стопы и ортобиологии
          </p>
        </Reveal>

        <Reveal as="ul" className="conf-timeline">
          {conferences.map((item) => (
            <li key={`${item.year}-${item.title}`}>
              <time dateTime={item.year}>{item.year}</time>
              <div>
                <strong>{item.title}</strong>
                <span>{item.detail}</span>
              </div>
            </li>
          ))}
        </Reveal>

        <Reveal className="conf-mosaic">
          {conferencePhotos.map((photo) => (
            <figure className="conf-shot" key={photo.src}>
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <figcaption>{photo.caption}</figcaption>
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
