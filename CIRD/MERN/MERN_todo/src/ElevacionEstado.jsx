import PropTypes from "prop-types";
import FilteredList from "./FilteredList";
import { useState } from "react";

const ElevacionEstado = ({ items }) => {
  const [filtro, setFiltro] = useState("");
  return (
    <>
      <FilteredList
        filtro={filtro}
        items={items.filter((item) => item.indexOf(filtro) > -1)}
      />
    </>
  );
};

ElevacionEstado.PropTypes = {
  items: PropTypes.array.isRequired,
};

export default ElevacionEstado;
