import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Chargers } from '../../components/chargers';
import { StationEnergy } from '../../components/station_energy';
import { fetchAssets } from '../../redux/actions/data';

export const Home = () => {
  const dispatch = useDispatch();
  
  useEffect(() => { dispatch(fetchAssets())}, [])
  
  return (
    <div className='home'>
      <div className='home__selects'>
       <StationEnergy />
       <br/>
       <Chargers />
      </div>
      <div className='home__graphics'></div>
    </div>
  )
}
