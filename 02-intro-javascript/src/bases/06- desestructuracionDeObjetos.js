//Desestructuración de objetos



const persona = {
    nombre: 'Juan',
    edad: 30,
    ciudad: 'Madrid'
};


// // Desestructuración de objetos
const { nombre, edad, ciudad } = persona

// console.log(nombre); // Output: Juan
// console.log(edad); // Output: 30
// console.log(ciudad); // Output: Madrid


// // Desestructuración de objetos con alias
// const { nombre: nombrePersona, edad: edadPersona, ciudad: ciudadPersona } = persona;
// console.log(nombrePersona); // Output: Juan
// console.log(edadPersona); // Output: 30
// console.log(ciudadPersona); // Output: Madrid



//Retornando un objeto
const usarContexto = ({ nombre, edad, ciudad, clave = "Pedro del Oeste" }) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
}

//La funcion usarContexto recibe como parametro un objeto, y retorna un objeto con los valores que necesitamos

const { nombreClave, anios, latlng: { lat, lng } } = usarContexto(persona);

console.log(nombre, nombreClave, anios, ciudad);