import React from 'react'

export const TotalEnergy = ({title, total}) => {
  return (
    <div className='total-energy'>
        <label>{title}</label>
        <div className='total-energy__total'>
          {total ? <> { total } kW</> : <> - kW</>}
        </div>
      </div>
  )
}
