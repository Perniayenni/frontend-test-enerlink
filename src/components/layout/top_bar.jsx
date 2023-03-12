import React from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const TopBar = () => {
 
  return (
    <div className='top-bar'>
      <div className='top-bar__title'> <label> Inicio </label></div>
      <div className='top-bar__options'>
        <MailOutlineIcon className='icon'  color="action" />
        <NotificationsNoneIcon className='icon' color="action" />
        <div className='top-bar__circle' />
        <div className='top-bar__name'> Nombre Apellido</div>
        <KeyboardArrowDownIcon  color="action" />
      </div>
    </div>
  )
}
