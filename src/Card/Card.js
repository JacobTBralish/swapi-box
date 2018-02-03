import React from 'react'
import './Card.css'

export const Card = (props) => {
  const propsArray = Object.entries(props)
  const renderProps = propsArray.slice(0, propsArray.length - 2)
  if(props.style) {
    renderProps.pop()
  }

  const linesToRender = renderProps.map( entry => {
    return <li className='card-line' key={entry[0]}> { entry[0] } : { entry[1] } </li>
  })

  return (
    <div className={`card ${props.style}`} 
         onClick={props.handleClick} 
         id={props.id}>
      {linesToRender}
    </div>
  )
} 