import { useState } from "react";

export const useCounter = (initValue = 10) => {
  const [counter, setCounter] = useState(initValue);

  const increment = (value = 1) => {
    setCounter(counter + value);
  };

  const decrement = (value = 1) => {
    //Esta validación existe porque la API de Rick and Morty no permite valores iguales a 0 y se rompe
    if (counter === 1) return;
    setCounter(counter - value);
  };

  const reset = () => {
    setCounter(initValue);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
