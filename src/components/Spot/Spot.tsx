import React from 'react'
import "./spot.scss"

const Spot = ({ spot }) => {

  return (

    <div className='spot-container' style={{ backgroundClip: `${spot.license_plate ? 'occupied' : 'available'}` }}>
      <div className='spot-details'>
        <div className='pk'>{spot.pk}</div>
        <div className='timestamp'>{spot.timestamp}</div>
        <div className='license-plate'>{spot.license_plate}</div>
        <div className='vehicule-type'>{spot.vehicule_type}</div>
        <div className='spot-type'>{spot.spot_type}</div>
      </div>
    </div>
  )
}

export default Spot