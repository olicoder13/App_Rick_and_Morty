import React from 'react'
import '../components/styles/locationCard.css'

const LocationCard = ({location}) => {
  //console.log(location);
  return (
    <div className='location'>
        <h2 className='location__title'>{location?.name}</h2>
        <ul className='location__list'>
            <li className='location__item'><span>Type:</span> <span>{location?.type}</span></li>
            <li className='location__item'><span>Dimension:</span> <span>{location?.dimension}</span></li>
            <li className='location__item'><span>Population:</span> <span>{location?.residents.length}</span></li>
        </ul>
    </div>
  )
}

export default LocationCard;