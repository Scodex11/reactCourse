import { useFetch, useCounter } from "../hooks";
import { Card, Loading } from "./"; //Porque estamos en el mismo directorio que index.js

export const MultipleCustomHooks = () => {
  const { counter, increment, decrement } = useCounter(1);

  const { data, isLoading, error } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  );

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  // Verificar si hay datos antes de desestructurar
  if (!data) {
    return <p>No hay datos disponibles.</p>;
  }

  // Desestructurar solo name y status
  const { name, status, image, gender } = data;

  return (
    <>
      <h1>Rick and Morty API</h1>
      <h4>
        <i>
          This app was developed to learn about Hooks and how mixed two and
          consume an API about Rick and Morty{" "}
        </i>
      </h4>
      <p>Link to API: </p>
      <a href="https://rickandmortyapi.com/">https://rickandmortyapi.com/</a>
      <hr />

      {isLoading ? <Loading /> : <Card name={name} status={status} image={image} gender = {gender}/>}


      <div className="d-flex align-items-center justify-content-center">
        <button
          disabled={isLoading}
          className="btn btn-primary mt-2"
          onClick={() => decrement(1)}
        >
          Back
        </button>
        <button
          disabled={isLoading}
          className="btn btn-primary mt-2"
          onClick={() => increment(1)}
        >
          Next
        </button>
      </div>
    </>
  );
};
