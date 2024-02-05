import React, { useEffect } from 'react'
import useFech from '../hooks/useFech';
import './styles/residentCard.css'


const ResidentCard = ({url_link}) => {
    //console.log(url_link);
  const [oneResident, getOneResident] = useFech();

  useEffect(() => {
    const url = url_link;
    getOneResident(url);
  }, [])
  //console.log(oneResident);
  return (
    <article className='resident'>
      <figure className="resident__photo">
        <img src={oneResident?.image} alt="" />
      <figcaption className='resident__status'>
        <div className={`resident__circulo ${oneResident?.status}`}></div>
        <p>{oneResident?.status}</p>
      </figcaption>
      </figure>
      <h3 className='resident__name'>{oneResident?.name}</h3>
      <hr />
      <ul className='resident__list'>
        <li className='resident__item'><span>Specie </span> <span>{oneResident?.species}</span></li>
        <li className='resident__item'><span>Origin</span> <span>{oneResident?.origin.name}</span></li>
        <li className='resident__item'><span>Eppisodes where appear</span> <span>{oneResident?.episode[0].substring(oneResident?.episode[0].length - 2)}</span></li>
      </ul>
    </article>
  )
}

export default ResidentCard;