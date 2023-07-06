import React from 'react'
import CardNew from './CardNew'
import Image from '../components/Image'

export default function RowNew({ name, firstArticles, imageSite}) {
  return (
    <section className='row-new'>
        < Image imageUrl={imageSite} isSiteImage alt={name}/>
        < CardNew firstArticles={firstArticles} />
    </section>
  )
}
