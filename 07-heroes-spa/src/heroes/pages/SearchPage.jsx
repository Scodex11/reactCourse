import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom"
import queryString from 'query-string'
import { HeroCard } from "../components/"
import { getHeroesByName } from "../helpers"
import {useForm} from '../hooks'

export const SearchPage = () => {

  const {searchText, onInputChange} = useForm({
    searchText: '' //Es el 'name' que te solicita el Hook 
  });

  const navigate = useNavigate(); //Nos permite navegar entre rutas
  const location = useLocation(); //Nos permite saber en que ruta estamos


  const {q = ''} = queryString.parse(location.search); //q es el nombre del queryParam
  const heroesFiltered = getHeroesByName(q);

  const onSearchSubmit = (e) => {
    e.preventDefault();
    if(searchText.trim().length <= 1) return;

    navigate(`?q=${searchText}`); //Envia según queryParams
  }

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

          {
            (q === '')
            &&
            <div className="alert alert-info">
              Search a hero
            </div>
          }

          {
            (q !== '' && q.length <= 1)
            &&
            <div className="alert alert-danger">
              Search a hero
            </div>
          }
            
            {
              (q !== '' && q.length > 1)
              &&
              <div className="alert alert-success">
                Hero: <b>{q}</b>
              </div>
            }


          <div className="card-columns">
            {
              heroesFiltered.map(hero => (
                <HeroCard
                  key={hero.id}
                  {...hero}
                />
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}
