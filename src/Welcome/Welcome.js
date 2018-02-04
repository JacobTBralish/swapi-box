import React from 'react'
import './Welcome.css'

const Welcome = ({scroll}) => {
  return <h5> {scroll.opening_crawl} </h5>
}

export default Welcome