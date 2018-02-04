import React from 'react'
import './Welcome.css'

const Welcome = ({scroll}) => {
  return(
    <section className="crawl-container">
      <div className="crawl">
        <div className="title">
          <h5> {scroll.episodeTitle} </h5>
          <h1 className='film-title'> {scroll.title} </h1>
        </div>
        <p className='body-text'> {scroll.opening_crawl} </p>
      </div>
    </section>
  ) 
}

export default Welcome