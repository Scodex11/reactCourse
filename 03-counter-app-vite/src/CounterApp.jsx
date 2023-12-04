import { useState } from "react";
import PropTypes from "prop-types"; //Para los tipos de las PROPS

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value); // HOOK para manejar el estado de la variable

  const handleAdd = () => {
    //setCounter(counter + 1);
    setCounter((c) => c + 1); //Es lo mismo que la linea anterior, pero sin usar el 'counter'
  };

  const handleSubs = () => {
    setCounter((c) => c - 1); 
  };
  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2> {/*Para manejar los cambios se utiliza el 'counter'*/}
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleSubs}>-1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

CounterApp.defaultProps = {
  value: 0,
};
