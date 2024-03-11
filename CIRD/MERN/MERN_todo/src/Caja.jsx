import { useState } from "react";
import React from "react";
import CajitaColores from "./CajitaColores";

const divStyle = {
  width: "500px",
};

const Caja = () => {
  const [tareas, setTareas] = useState([]);
  const [newColor, setNewColor] = useState("");
  const [newTask, setNewTask] = useState("");

  const handleColorChange = (event) => {
    setNewColor(event.target.value);
  };

  const handleTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddColor = () => {
    if (isValidColor(newColor)) {
      setTareas([
        ...tareas,
        {
          color: newColor,
          task: newTask,
        },
      ]);
      setNewColor("");
      setNewTask("");
    } else {
      alert("Ingrese un color válido.");
    }
  };

  const isValidColor = (color) => {
    const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    const namedColorRegex =
      /^(aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow)$/i;
    return hexColorRegex.test(color) || namedColorRegex.test(color);
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div
          className="contenedor d-flex align-items-center justify-content-center mx-auto mt-3"
          style={divStyle}
        >
          <label className="form-label m-2">Color </label>
          <input
            type="text"
            className="form-control"
            value={newColor}
            onChange={handleColorChange}
          />
          <input
            type="text"
            className="form-control"
            value={newTask}
            onChange={handleTaskChange}
          />
          <input
            type="submit"
            value="Add"
            className="btn btn-primary m-2"
            onClick={handleAddColor}
          />
        </div>
      </form>

      <div
        className="mx-auto"
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "5px",
          width: "700px",
        }}
      >
        {tareas.map((color, index) => (
          <CajitaColores index={index} color={color} handleCheck={setTareas} />
        ))}
      </div>
    </div>
  );
};

export default Caja;
