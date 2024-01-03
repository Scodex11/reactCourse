import { setPokemons, startLoadingPokemons } from "./pokemonSlice";
import { pokemonApi } from "../../../api/pokemonAPI";

//THUNKS: Acciones ASÍNCRONAS que se llamarán ANTES de ejecutar un REDUCE (síncrono)

export const getPokemons = (page = 0) => {
  //RETORNA la acción a realizar y el ROOTSTATE

  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());

    const { data } = await pokemonApi.get(
      `?limit=10&offset=${page * 10}`
    );

    dispatch(
      setPokemons({
        page: page + 1,
        pokemons: data.results,
      })
    );
  };
};
