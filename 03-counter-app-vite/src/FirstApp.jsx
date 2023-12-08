import PropTypes from 'prop-types'; //Para los tipos de las PROPS


export const FirstApp = ({name, title, subTitle}) => {
   return (
    <>
        <h1>{title}</h1>
        <p>{subTitle}</p>
        <p>{name}</p>
    </>
  )
}


//Deben estar al final por ESTANDARIZACIÓN

FirstApp.propTypes = {
    name: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
    name: 'Sin nombre',
    subTitle: 'Sin subtitulo',
    title: 'Sin asdasdasdasdds',
}

