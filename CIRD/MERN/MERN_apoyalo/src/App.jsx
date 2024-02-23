// App.jsx
import React, { useState } from 'react';
import PersonCard from './components/PersonCard'; // Asegúrate de que la ruta sea correcta

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {/* Usar el componente PersonCard cuatro veces con diferentes propiedades */}
        <PersonCard
          firstName="John"
          lastName="Doe"
          age={30}
          hairColor="Brown"
        />
        <PersonCard
          firstName="Jane"
          lastName="Smith"
          age={25}
          hairColor="Blonde"
        />
        <PersonCard
          firstName="Bob"
          lastName="Johnson"
          age={40}
          hairColor="Black"
        />
        <PersonCard
          firstName="Alice"
          lastName="Williams"
          age={35}
          hairColor="Red"
        />
      </div>
    </>
  );
}

export default App;
