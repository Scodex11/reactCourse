import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; //Métodos para conectar con el store

import { getPokemons } from "./store/slices/pokemon/pokemonThunks";

export const PokemonApp = ({}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  const {
    isLoading,
    page,
    pokemons = [],
  } = useSelector((state) => state.pokemons);

  return (
    <>
      <h1>Pokemon App</h1>
      <hr />

      <span>Loading: {isLoading ? "True" : "False"}</span>

      <h3>Listado de Pokemons</h3>
      <ul>
        {pokemons.map(({ name }) => (
          <li>PokeName: {name}</li>
        ))}
      </ul>

      <button
        disabled={isLoading}
        onClick={() => {
          dispatch(getPokemons(page));
        }}
      >
        Next
      </button>
    </>
  );
};
