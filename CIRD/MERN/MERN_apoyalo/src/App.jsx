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

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validatePassword, setValidatePassword] = useState(false);

  const changeUsernameHandler = (e) => {
    setUsername(e.target.value);
    console.log(username);
  };

  const changePasswordHandler = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };

  const submitHandler = (e) => {
    setIsSubmitted(true);
    e.preventDefault();
    console.log("username: " + username);
    console.log("e.target.username.value: " + e.target.username.value);
    if (password.length < 4 || password.length > 9) {
      setValidatePassword(false);
    } else {
      setValidatePassword(true);
    }
  };

  return (
    <>
      <form action="" onSubmit={(e) => submitHandler(e)}>
        <div>
          <label htmlFor="username">Nombre de usuario</label>
          <input
            type="text"
            id="username"
            onChange={(e) => changeUsernameHandler(e)}
          />
        </div>
        <div>
          <label htmlFor="contra">Contraseña</label>
          <input
            type="password"
            id="contra"
            onChange={(e) => changePasswordHandler(e)}
          />
        </div>
        <div>
          <input type="submit" id="submitForm" value={"Registrarse"} />
        </div>
      </form>
      {password.length < 4 || password.length > 9 ? (
        <h4>La contraseña debe tener entre 4 y 8 caracteres</h4>
      ) : (
        <></>
      )}
      {isSubmitted ? (
        validatePassword ? (
          <></>
        ) : (
          <h4>Error en el submit!!!</h4>
        )
      ) : (
        <></>
      )}
    </>
  );
}

export default App;
