import React from 'react'
import BrandImage from '../components/BrandImage'
import CardNew from './CardNew'

export default function RowNew({ name, firstArticles, imageSite}) {
  return (
    <section>
        < BrandImage imageUrl={imageSite}/>
        < CardNew firstArticles={firstArticles} />
    </section>
  )
}
