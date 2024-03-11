// App.jsx
/**
 * <>
      <div>
        <PersonCard
          firstName="John"
          lastName="Doe"
          age={30}
          hairColor="Brown"
          favoritos={favoritos}
          setFavoritos={setFavoritos}
        />
        <PersonCard
          firstName="Jane"
          lastName="Smith"
          age={25}
          hairColor="Blonde"
          favoritos={favoritos}
          setFavoritos={setFavoritos}
        />
        <PersonCard
          firstName="Bob"
          lastName="Johnson"
          age={40}
          hairColor="Black"
          favoritos={favoritos}
          setFavoritos={setFavoritos}
        />
        <PersonCard
          firstName="Mike"
          lastName="Williams"
          age={35}
          hairColor="Red"
          favoritos={favoritos}
          setFavoritos={setFavoritos}
        />
        <h1>Favoritos</h1>
        <ul>
          {favoritos.map((nombre, index) => (
            <li key={index}>{nombre}</li>
          ))}
        </ul>
      </div>
    </>
 */

import React, { useState } from "react";
import PersonCard from "./components/PersonCard";

import "./App.css";
import "./Caja.jsx";
import Caja from "./Caja.jsx";

function App() {
  return <Caja />;
}

export default App;
