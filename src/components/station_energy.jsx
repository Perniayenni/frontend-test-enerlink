import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectData } from '../redux/selectors/data'
import { Card } from './card'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { fetchChargers, fetchStations } from '../redux/actions/data';
import { TotalEnergy } from './total_energy';

export const StationEnergy = () => {
  const { assets, stations } = useSelector(selectData)
  const [assetId, setAssetId] = useState('')
  const [stationId, setStationId] = useState('')
  const [station, setStation] = useState({})
  const dispatch = useDispatch();

  const handleChangeAsset = (event) => {
    setAssetId(event.target.value);
    dispatch(fetchStations({'assetId': event.target.value}))
  };

  const handleChangeStation = (event) => {
    setStationId(event.target.value);
    dispatch(fetchChargers({'stationId': event.target.value}))
    setStation(stations.find(station => station.id === event.target.value))
  };

  const header = () => {
    return (
      <div className='station-energy__selects'>
        <div>
          <label>ACTIVO</label>
          <FormControl sx={{ m: 1, minWidth: 120, backgroundColor: '#ffff', borderRadius: 1 }} size="small">
            <Select
              labelId="select-assets"
              id="demo-select-small"
              value={assetId}
              onChange={handleChangeAsset}
            >
              <MenuItem value=''>Seleccione</MenuItem>
            {assets.map(asset => (
              <MenuItem key={asset.id} value={asset.id}>{asset.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        </div>
      
        <div>
          <label>ESTACIÓN</label>
          <FormControl sx={{ m: 1, minWidth: 120, backgroundColor: '#ffff', borderRadius: 1 }} size="small">
            <Select
                labelId="select-assets"
                id="demo-select-small"
                value={stationId}
                defaultValue=''
                onChange={handleChangeStation}
              >
              <MenuItem value=''>Seleccionar Estación</MenuItem>
              {stations.map(station => (
                <MenuItem key={station.id} value={station.id}>{station.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
    )
  }

  const content = () => {
    return (
      <TotalEnergy 
        title='Energía total estación'
        total={station?.total_energy}
      />
    )
  }
  return (
    <Card
      header={header()}
      content= {content()}
      footer={station.address}
    />
  )
}
