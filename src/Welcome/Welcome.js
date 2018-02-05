import React from 'react';
import './Welcome.css';
import PropTypes from 'prop-types';

const Welcome = ({ scroll }) => {
  return (
    <section className="crawl-container">
      <div className="crawl">
        <div className="title">
          <h5> {scroll.episodeTitle} </h5>
          <h1 className='film-title'> {scroll.title} </h1>
        </div>
        <p className='body-text'> {scroll.opening_crawl} </p>
      </div>
    </section>
  );
};

Welcome.propTypes = {
  scroll: PropTypes.shape({
    episodeTitle: PropTypes.string,
    title: PropTypes.string,
    opening_crawl: PropTypes.string,
    episode_id: PropTypes.number,
    release_date: PropTypes.string
  })
};

export default Welcome;