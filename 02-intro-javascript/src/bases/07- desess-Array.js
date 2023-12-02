const useState = (valor) => {
    return [valor, () => {console.log('Hola mundo')}]//Retornamos un arreglo con el valor y una funcion 
}

//Pasamos por parámetro GOKU
//Desesctructuramos 'nombre'  y 'setNombre' -> funcion creada dentro del arreglo

const [nombre, setNombre] = useState('Goku');

//Imprimimos el primer valor
console.log(nombre);
//Usamos la función 
setNombre();
