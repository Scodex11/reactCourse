import { useFetch } from "../hooks/useFetch";
import { useCounter } from "../hooks/useCounter";

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

      {isLoading ? (
        <div className="alert alert-info text-center">Cargando</div>
      ) : (
        <>
          <div className="card-container">
            <img src={image} alt={name} />

            <blockquote className="blockquote text-center">
              <p className="mb-3">
                <b>Character: </b>
                {name}
              </p>
              <p className="mb-3">
                <b>Gender: </b>
                {gender}
              </p>
              <footer className="blockquote-footer">
                <b>State:</b> {status}
              </footer>
            </blockquote>
          </div>
        </>
      )}
      <div className="d-flex align-items-center justify-content-center">
        <button disabled = {isLoading} className="btn btn-primary mt-2" onClick={() => decrement(1)}>
          Back
        </button>
        <button disabled = {isLoading} className="btn btn-primary mt-2" onClick={() => increment(1)}>
          Next
        </button>
      </div>
    </>
  );
};
