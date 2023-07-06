import React from 'react'

export default function Image({imageUrl, isSiteImage, alt}) {
  const imageClassName = isSiteImage ? 'site-image' : 'new-image'
  const altImage = isSiteImage ? `Foto del sitio de noticias ${alt}` : alt
  return (
    <div className='image-container'> 
        <img className={imageClassName} src={imageUrl} alt={altImage} />
    </div>
  )
}
