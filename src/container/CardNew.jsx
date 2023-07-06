import TitleNew from '../components/TitleNew'
import BrandImage from '../components/BrandImage'

export default function CardNew({ firstArticles }) {
  return (
    <article>
        {
          firstArticles.map(article => {
            const { title, image } = article
            return(
              <>
                < TitleNew title={title} />
                < BrandImage imageUrl={image} />
              </>
            )
          })
        }
    </article>
  )
}
