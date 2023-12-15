
//Siempre para desestructurar los props utiliza llaves
export const Card = ({name, gender, status, image}) => {
  return (
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
  )
}

