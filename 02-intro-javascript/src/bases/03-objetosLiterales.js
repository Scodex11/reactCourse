// const nombre  = "Facundo";
// const apellido = "Garcia";

// const nombreCompleto = `${nombre} ${apellido}`;

// console.log(nombreCompleto);

// function getSaludo(nombre) {
//     return 'Hola ' + nombre;
// }

// console.log(`Este es un texto: ${getSaludo(nombreCompleto)}`);


const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
};

console.log(persona);

// Esto no es una copia, es una referencia, es una mala practica
const persona2 = persona;
persona2.nombre = 'Peter';
// Aqui se modifica la propiedad de PERSONA, NO persona2
console.log(persona2); //Se podría decir que lo estamos reenombrando


// Esto si es una copia, es una buena practica
const persona3 = {...persona};
persona3.nombre = 'Pana';
console.log(persona3); 
console.log(persona); // Aqui no se modifica la propiedad de PERSONA, si no que se mantiene intacta (exceptuando 'Peter' que lo modificamos en Persona2)