import React from 'react'

const DogCard = ({ name }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-header-title">{name}</h3>
      </div>
    </div>
  )
}

export default DogCard
