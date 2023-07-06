import './Image.css'
import defaultImage from '../assets/defaultImage.png'

export default function Image({imageUrl, isSiteImage, alt}) {

  const imageClassName = isSiteImage ? 'site-image' : 'new-image'
  const altImage = isSiteImage ? `Foto del sitio de noticias ${alt}` : alt
  const srcImage = imageUrl ?? defaultImage

  return (
    <div className='image-container'> 
        <img className={imageClassName} src={srcImage} alt={altImage} />
    </div>
  )
}
