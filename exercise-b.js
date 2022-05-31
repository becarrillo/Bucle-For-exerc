let calificaciones = [90.5, 87.4, 65.6, 40.57];
let suma = 0;

for (let i = 0; i < calificaciones.length; i++) {
    suma += calificaciones[i];
}

let resultado = suma / calificaciones.length;
console.log(resultado);