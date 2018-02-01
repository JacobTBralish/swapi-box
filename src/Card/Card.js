import React from 'react'
import './Card.css'

export const Card = ({...props}) => {
  
  const linesToRender = Object.entries(props).map( entry => {
    return <li key={entry[0]}> { entry[0] } : { entry[1] } </li>
  })

  return (
    <div className='card'>
      {linesToRender}
    </div>
  )
} 