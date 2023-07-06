import TitleNew from '../components/TitleNew'
import Image from '../components/Image'

export default function CardNew({ firstArticles }) {
  return (
    <article>
        {
          firstArticles.map(article => {
            const { title, image } = article
            return(
              <>
                < TitleNew title={title} />
                < Image imageUrl={image} alt={title} />
              </>
            )
          })
        }
    </article>
  )
}
