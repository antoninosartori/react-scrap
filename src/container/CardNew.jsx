import TitleNew from '../components/TitleNew'
import Image from '../components/Image'

export default function CardNew({ firstArticles }) {
  return (
    <>
        {
          firstArticles.map(article => {
            const { title, image, url } = article
            return(
              <article key={title}>
                  <a href={url} target='_blank' rel='noreferrer' >
                    < TitleNew title={title} />
                    < Image imageUrl={image} alt={title} />
                </a>
              </article>
            )
          })
        }
    </>
  )
}
