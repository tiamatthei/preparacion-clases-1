import PropTypes from "prop-types";

const FilteredList = ({ items, filtro, setFiltro }) => {
  return (
    <>
      {items.map((item, i) => {
        const start = item.indexOf(filtro);
        const end = start + filtro.length;

        return (
          <div key={i} className="alert alert-primary mt-3">
            {item.slice(0, start)}
            <strong>
              <em>{item.slice(start, end)}</em>
            </strong>
            {item.slice(end)}
          </div>
        );
      })}
    </>
  );
};

FilteredList.PropTypes = {
  items: PropTypes.array.isRequired,
  filtro: PropTypes.string.isRequired
};

export default FilteredList;
