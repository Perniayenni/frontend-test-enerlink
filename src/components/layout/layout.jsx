import React from 'react'
import { SideBar } from './side_bar'
import { TopBar } from './top_bar'

export const Layout = ({children, isTestEnv}) => {
  return (
    <div className='layout'>
      <div className='layout__content-left'>
        <SideBar />
      </div>
      <div className='layout__content-right'>
        <div className='layout__content-top-bar'> <TopBar/> </div>
        <div className='layout__content-data'>
          {children }
        </div>
      </div>
    </div>
  )
}
