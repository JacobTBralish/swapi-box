import React from 'react'

export const Card = ({...props}) => {
  
  const linesToRender = Object.entries(props).map( entry => {
    return <li key={entry}> { entry[0] } : { entry[1] } </li>
  })

  return (
    <div>
      {linesToRender}
    </div>
  )
} 