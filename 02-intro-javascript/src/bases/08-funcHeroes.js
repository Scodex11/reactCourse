import {heroes} from '../data/heroes';

const getHeroeById = (id) => {
    const hero = heroes.find((heroe) => heroe.id === id);
    return hero ? hero.name : null;
}


// console.log(getHeroeById(2))


const getHeroesByOwner = (owner) => { return heroes.filter((hero) => hero.owner === owner);}

// console.log(getHeroesByOwner('Marvel'))

//NOTAS:
//Un 'callback' ->  una función que se pasa como argumento a otra función 
//y que se ejecuta después de que esa función ha completado su tarea

// En el caso anterior, el call back es ' (hero) => hero.owner === owner '

export {getHeroeById, getHeroesByOwner};