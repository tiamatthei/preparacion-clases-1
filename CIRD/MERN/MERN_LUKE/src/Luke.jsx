import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Luke = () => {
  const [inputs, setInputs] = useState("");
  const [buscableslista, setBuscableslista] = useState([]);
  const [selectedResource, setSelectedResource] = useState("");
  const [datosBusqueda, setDatosBusqueda] = useState({});

  useEffect(() => {
    axios.get(`https://swapi.dev/api/`).then(function (response) {
      {
        let buscables = [];
        Object.keys(response.data).forEach((buscable) => {
          buscables.push({
            texto: buscable,
            url: response.data[buscable],
          });
        });
        setBuscableslista(buscables);
        setSelectedResource(buscables[0].url);
      }
    });
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    const urlBuscar = selectedResource + inputs;
    axios.get(urlBuscar).then(function (response) {
      setDatosBusqueda(response.data);
      console.log(response.data);
    });
  }

  return (
    <>
      <div className="container mt-5">
        <form className="d-grid gap-2" onSubmit={handleSubmit}>
          <select
            id="resource"
            value={selectedResource}
            onChange={(e) => setSelectedResource(e.target.value)}
          >
            {buscableslista.map((buscable, index) => {
              return (
                <option key={index} value={buscable.url}>
                  {buscable.texto}
                </option>
              );
            })}
          </select>
          <input
            type="text"
            value={inputs}
            className="form-control"
            placeholder=""
            onChange={(e) => setInputs(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Buscar
          </button>
        </form>
      </div>
    </>
  );
};
export default Luke;
