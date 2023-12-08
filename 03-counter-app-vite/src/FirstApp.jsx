import PropTypes from 'prop-types'; //Para los tipos de las PROPS


export const FirstApp = ({name, title, subTitle}) => {
   return (
    <>
        <h1 data-testid = "test-title"> {title} </h1>
        <p>{subTitle}</p>
        <p>{name}</p>
    </>
  )
}


//Deben estar al final por ESTANDARIZACIÓN

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
    title: 'Sin titulo',
    subTitle: 'Sin subtitulo',
    name: 'Sin nombre',
}

