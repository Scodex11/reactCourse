//Arreglos 

const arreglo = [1,2,3,4];

let arreglo2 = [...arreglo,5]; //Añadimos 5 al arreglo2 y hacemos una copia de 'arreglo'

//Crearemos una funcion que recibe un arreglo y un elemento que queremos añadir al arreglo
const arreglo3 = arreglo2.map(function(numero){
    return numero * 2;
});

console.log('Arreglo: '+ arreglo);
console.log('Arreglo2: '+ arreglo2);
console.log('Arreglo3: '+ arreglo3);