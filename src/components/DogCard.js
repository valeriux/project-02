import React from 'react'

const DogCard = ({ name, image }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-header-title">{name}</h3>
      </div>
      <div id="card_images" className="card-image">
        <figure className="image">
          <img src={image} alt={name} />
        </figure>
      </div>
    </div>
  )
}

export default DogCard
