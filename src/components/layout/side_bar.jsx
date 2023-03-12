import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';

export const SideBar = () => {
  const items = [
    {id: 1, name: 'Inicio', icon: <HomeIcon color="action" />},
    {id: 2, name: 'Consumo', icon: <LightbulbIcon color="action" />},
    {id: 3, name: 'Informes', icon:<BarChartIcon  color="action" />},
    {id: 4, name: 'Configuraciones', icon: <SettingsIcon  color="action" />}
  ]

  return (
    <div className='side-bar'>
      <div className='side-bar__logo'>
        <img className='logo' alt='logo' src='/assets/logo.png' />
      </div>
      <div className='side-bar__content-items'>
        <div className='side-bar__items'>
          {items.map(item => (
            <div key={item.id} className='side-bar__item'><span>{item.icon} </span>{item.name}</div>
            )
          )}
        </div>
        <div className='side-bar__change-mode'>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
          <div className='side-bar__change-mode--label'>Modo Oscuro</div>
        </div>
      </div>
    </div>
  )
}
