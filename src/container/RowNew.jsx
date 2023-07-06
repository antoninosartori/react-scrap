import './RowNew.css'
import CardNew from './CardNew'
import Image from '../components/Image'

export default function RowNew({ name, firstArticles, imageSite}) {
  return (
    <section className='row-new'>
        < Image imageUrl={imageSite} isSiteImage alt={name}/>
        <div className='row-new_scroll'>
          < CardNew firstArticles={firstArticles} />
        </div>
    </section>
  )
}
