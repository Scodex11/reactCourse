import PropTypes from 'prop-types';

/* DESCRIPCIÓN */
// Componente que renderiza una CARD y es utilizada en el componente GifGrid

export const GifItem = ({title, url}) => {
  return (
    
    <div className="card">
      <img src={url} alt={ title }/>
      <p>{title}</p>
    </div>

  )
}


GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}


