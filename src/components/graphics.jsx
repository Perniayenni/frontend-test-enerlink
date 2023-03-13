import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';
import { Card } from './card';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    
  },
};

const labels = ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '16:00'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(145, 201, 187)',
      backgroundColor: 'rgb(145, 201, 187)'
    }
  ],
};

const header = () => {
  return(
    <div className='chargers__select'>
      <label>Resumen</label>
      <FormControl sx={{ m: 1, minWidth: 220, backgroundColor: '#ffff', borderRadius: 1 }} size="small">
        <Select
          labelId="select-assets"
          id="demo-select-small"
        >
          <MenuItem value=''>Seleccione</MenuItem>
          <MenuItem value='0'>Últimas 24 horas</MenuItem>
          <MenuItem value='1'>Último mes</MenuItem>
          <MenuItem value='2'>Personalizado</MenuItem>
        
      </Select>
      </FormControl>
    </div>
  )
  
}

const content = () => {
  return (
    <Line options={options} data={data} />
  )
}

export const Graphics = () => {
  return (
    <Card
      header={header()}
      content={content()}
    />
  )
}

