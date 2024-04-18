import PropTypes from "prop-types";

const CajitaColores = ({ index, color }) => {
  return (
    <div
      key={index}
      style={{
        width: "200px",
        height: "200px",
        backgroundColor: color.color,
        marginRight: "20px",
        marginBottom: "20px",
      }}
    >
      <h2>{color.task}</h2>
    </div>
  );
};

CajitaColores.PropTypes = {
  index: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default CajitaColores;
