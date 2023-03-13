import React from 'react'

export const Card = ({header, content, footer}) => {
  return (
    <div className='card'>
      <div className='card__header'>
        {header}
      </div>
      <div className='card__content'>
        {content}
        <div className='card__footer'>
          {footer}
        </div>
      </div>
    </div>
  )
}
