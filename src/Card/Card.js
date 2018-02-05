import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

export const Card = (props) => {
  const propsArray = Object.entries(props);
  const renderProps = propsArray.slice(0, propsArray.length - 2);
  if (props.style) {
    renderProps.pop();
  }

  const linesToRender = renderProps.map( entry => {
    return <li 
      className='card-line title' 
      key={entry[0]}> { entry[0] } : 
      <span className='content'> { entry[1] } </span> 
    </li>;
  });

  return (
    <div className={`card ${props.style}`} 
      onClick={props.handleClick} 
      id={props.id}>
      {linesToRender}
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  style: PropTypes.string,
  handleClick: PropTypes.func.isRequired
};