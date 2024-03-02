import React from 'react';

function Card(props) {
  const { title, text, image, link } = props;

  return (
    <div className="card">
      <img className='card-image' src={image} alt="profile picture" style={{ width: '200px' }}></img>
      <h2 className='card-title'>{title}</h2>
      <p className='card-text'>{text}</p>
      <a href={link} className="card-link">
        <button className="card-button">View Restaurant</button>
      </a>
    </div>
  );
}

export default Card;