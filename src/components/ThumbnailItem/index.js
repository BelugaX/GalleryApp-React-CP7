// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {imagesDetails, clickThumbnail, isActive} = props
  const {id, thumbnailUrl, imageAltText} = imagesDetails

  const onClickThumbnail = () => {
    clickThumbnail(id)
  }

  const activeThumbClassName = isActive ? 'active-thumbnail' : ''

  return (
    <li className="thumbnail-list">
      <button className="thumb-btn" type="button" onClick={onClickThumbnail}>
        <img
          src={thumbnailUrl}
          alt={imageAltText}
          className={activeThumbClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
