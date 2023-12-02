console.log("Inicio");

// Operación síncrona
function operacionSincrona() {
    console.log("Operación sincrona completada");
}

operacionSincrona();

// Operación asíncrona
function operacionAsincrona() {
    setTimeout(function() {
        console.log("Operación asíncrona completada");
    }, 200);
}

operacionAsincrona();

// Otra operación síncrona
function otraOperacionSincrona() {
    console.log("Otra operación sincrona completada");
}

otraOperacionSincrona();

console.log("Fin");
