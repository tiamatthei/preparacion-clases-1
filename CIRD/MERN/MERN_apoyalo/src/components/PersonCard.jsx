import React from 'react';

import './PersonCard.css';

const PersonCard = (props) => {

  const personCardStyle = {
    backgroundColor: "blue",
  };

  return (
    <div style={personCardStyle} >
      <h2>{props.firstName} {props.lastName}</h2>
      <p>Age: {props.age}</p>
      <p>Hair Color: {props.hairColor}</p>
    </div>
  );
};

export default PersonCard;
