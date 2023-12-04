import PropTypes from 'prop-types'; //Para los tipos de las PROPS


export const FirstApp = ({name, subTitle, number}) => {
   return (
    <>
        <h1>Primer App de: <i>{name}</i></h1>
        <p> {subTitle} </p>
        <p>Prop numero: {number}</p>
    </>
  )
}


//Deben estar al final por ESTANDARIZACIÓN

FirstApp.propTypes = {
    name: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
}

FirstApp.defaultProps = {
    name: 'Sin nombre',
    subTitle: 'Sin subtitulo',
    number: 0,
}

