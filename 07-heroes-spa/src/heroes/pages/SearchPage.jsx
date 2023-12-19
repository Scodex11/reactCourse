import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import queryString from "query-string";
import { HeroCard } from "../components/";
import { getHeroesByName } from "../helpers";
import { useForm } from "../hooks";

export const SearchPage = () => {
  const { searchText, onInputChange, onResetForm } = useForm({
    searchText: "", //Es el 'name' que te solicita el Hook
  });

  const navigate = useNavigate(); //Nos permite navegar entre rutas
  const location = useLocation(); //Nos permite saber en que ruta estamos

  const { q = "" } = queryString.parse(location.search); //q es el nombre del queryParam
  const heroesFiltered = getHeroesByName(q);


  /* Mensajes predefinidos*/
  const showSearch = (q.length === 0);
  const showError  = (q.length > 0) && heroesFiltered.length === 0;



  const onSearchSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim().length <= 1) return;

    navigate(`?q=${searchText}`); //Envia según queryParams
    // onResetForm();
  };

  return (
    <>
      <h1>SearchPage</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />

          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Find your hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />

            <button
              type="submit"
              className="btn m-1 btn-block btn-outline-primary"
            >
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {/* TODO: Hacer comprobaciones válidas */}
          <div
            className="alert alert-primary animate__animated animate__fadeIn"
            style={{ display: showSearch ? "" : "none" }}
          >
            Search a hero
          </div>

          <div
            className="alert alert-danger animate__animated animate__fadeIn"
            style={{ display: showError ? "" : "none" }}
          >
            No hero with <b>{q}</b>
          </div>

          <div className="card-columns">
            {heroesFiltered.map((hero) => (
              <HeroCard key={hero.id} {...hero} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
