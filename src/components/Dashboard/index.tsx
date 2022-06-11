import { useState, useEffect } from 'react';
import './style.css'
import { Link } from 'react-router-dom';
import { dashboard } from '../../services/dashboard';

type Spot = {
  _id: string;
  thumbnail_url: string;
  techs: string[];
  company: string;
  price: number;
}

const Dashboard = () => {
  // criamos o estado para inicializar os nossos spots
  const [spots, setSpots] = useState<Spot[]>([])

  const loadSpots = async () => {
    
    const user_id  = localStorage.getItem('user');

    if(user_id) {
      const response = await dashboard.spotList(user_id);
      setSpots(response.data);
    }
  }

  // serve para controlar os efeitos colaterais e ciclo de vida da aplicacao.
  useEffect(() => {
    loadSpots();
    console.log('opa')
  }, [])

  return (
    <>
    <ul className='spot-list'>
      {spots.map(spot => (
        <li key={spot._id}>
          <header style={{ backgroundImage: `url(${spot.thumbnail_url})` }}></header>
          <h2><strong>{spot.company}</strong></h2>
          <p>Techs: {spot.techs.map((tech, index) => {
            if(index === spot.techs.length - 1) {
              return `${tech}.`
            }
            return `${tech}, `
          })}</p>
          <p className='value'>{spot.price}</p>
        </li>
      ))}
      </ul>
      <Link to="/new">
        <button className='btn'>Cadastrar novo spot</button>
      </Link>
    </>
  )
}

export default Dashboard