import React from "react";
import "./PersonCard.css";
import { useState } from "react";

const PersonCard = (props) => {
  const [bgColor, setBgColor] = useState("blue");

  const personCardStyle = {
    backgroundColor: bgColor,
  };


  const favoritosHandler = () => {
    setBgColor("red");
    console.log("cambia a red");
    props.setFavoritos([...props.favoritos, props.firstName]);
  }


  const buttonStyle = { margin: "10px" };

  return (
    <div style={personCardStyle}>
      <h2>
        {props.firstName} {props.lastName}
      </h2>
      <p>Age: {props.age}</p>
      <p>Hair Color: {props.hairColor}</p>
      <button
        style={buttonStyle}
        onClick={favoritosHandler}
      >
        Agregar a favoritos
      </button>
    </div>
  );
};

export default PersonCard;
