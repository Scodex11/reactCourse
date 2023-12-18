import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers"
import { useMemo } from "react"



export const HeroPage = () => {

  const { id } = useParams() //Hook que utiliza URL params para obtener datos, detacar: ' path="hero/:id" ' -> es por
                            //ello que se puede usar 'id' como key
  

  const hero = useMemo(() => getHeroById(id), [id]) //useMemo() -> Hook que permite memorizar una función y cambia solo cuando sus dependencias cambian

  if (!hero) {
    return <Navigate to="/marvel" />
  }

  const { superhero, publisher, alter_ego, first_appearance, characters } = hero

  const navigate = useNavigate();

  const onReturn = (publisher) => {
    // let path = '';
    // if (publisher === 'DC Comics') {
    //   path = '/dc'
    //   navigate(path, { replace: true });
    // } else {
    //   path = '/marvel'
    //   navigate(path, { replace: true });
    // }
    
    navigate(-1)// Otra forma de hacerlo
  }

  return (
    <>
      <h1>Hero: {hero.superhero}</h1>

      <div className="row mt-5">
        <div className="col-4">
          <img
            src={`../assets/heroes/${id}.jpg`}
            alt={hero.superhero}
            className="img-thumbnail animate__animated animate__fadeInLeft"
          />
        </div>

        <div className="col-8">
          <h3>Alter Ego: <b>{hero.alter_ego}</b></h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <b>Editorial: </b> {hero.publisher}
            </li>
            <li className="list-group-item">
              <b>Primera aparición: </b> {hero.first_appearance}
            </li>
            <li className="list-group-item">
              <b>Personaje/s: </b> {hero.characters}
            </li>
          </ul>

          <button className="btn btn-outline-info mt-5" onClick={onReturn}>
            Volver
          </button>
        </div>
      </div>
    </>
  )
}
