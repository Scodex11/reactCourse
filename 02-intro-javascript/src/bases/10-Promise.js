import {getHeroeById, getHeroesByOwner} from './08-funcHeroes';

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
    
            const hero = getHeroeById(id);
            hero ? resolve(hero) : reject('No se pudo encontrar el héroe');
    
        }, 200);
    
    });
}

getHeroeByIdAsync(10)
    .then(console.log)
    .catch(console.warn);
