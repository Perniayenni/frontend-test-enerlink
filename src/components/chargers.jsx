import React, { useState } from 'react'
import { Card } from './card'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { selectData } from '../redux/selectors/data';
import { fetchConnectors, getCharger } from '../redux/actions/data';
import { TotalEnergy } from './total_energy';

export const Chargers = () => {
  const { charger, chargers, connectors }  = useSelector(selectData)
  const [chargerId, setChargerId] = useState('')
  const dispatch = useDispatch();

  const handleChangeChargers = (event) => {
    setChargerId(event.target.value);
    dispatch(fetchConnectors({'chargerId': event.target.value}))
    dispatch(getCharger(event.target.value))
  };

  const header = () => {
    return (
      <div className='chargers__select'>
          <label>ACTIVO</label>
          <FormControl sx={{ m: 1, minWidth: 220, backgroundColor: '#ffff', borderRadius: 1 }} size="small">
            <Select
              labelId="select-assets"
              id="demo-select-small"
              value={chargerId}
              onChange={handleChangeChargers}
            >
              <MenuItem value=''>Seleccione</MenuItem>
              {chargers.map(charger => (
                <MenuItem key={charger?.id} value={charger?.id}>{charger?.name}</MenuItem>
              ))}
          </Select>
        </FormControl>
      </div>
    )
  }

  const content = () => {
    return (
      <>
        <>
        <label>Conectores:</label>
          <div className='chargers__connectors'>
            {connectors.map(connector => (
              <div key={connector.id} className='chargers__connector'>
                <label>Conector {connector?.name}</label>
              </div>
            ))}
          </div>
        </>
        
        <TotalEnergy
          title='Energía total suministrada'
          total={charger?.energy_supplied}
        />
      </>
    )
  }

  return (
    <Card
      header={header()}
      content={content()}
    />
  )
}
