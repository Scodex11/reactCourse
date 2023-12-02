//Funciones en JS

const { act } = require("react-dom/test-utils");

//Funcion flecha
const saludar = (nombre) => {
    return `Hola ${nombre}`;
}


//Funcion flecha con retorno implicito
const isActive = (nombre, active) => ({
    uid: 'ABC567',
    username: nombre,
    active : active ? 'active' : 'inactive' //Operador ternario 
});

const nombre = 'Facundo';
console.log(isActive(nombre, false)); //NO debes hacer activo = false, simplemente indica el VALOR de la variable