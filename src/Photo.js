import React from 'react'

const Photo = ({
  alt_description: description,
  urls: { regular: image },
  likes,
  user: {
    name: user,
    profile_image: { medium: user_image },
    portfolio_url: link,
  },
}) => {
  return (
    <article className='photo'>
      <img src={image} alt={description} />
      <div className='photo-info'>
        <div>
          <h4>{user}</h4>
          <p>{likes} likes</p>
        </div>
        <a href={link}>
          <img src={user_image} alt={user} className='user-img' />
        </a>
      </div>
    </article>
  )
}

export default Photo
