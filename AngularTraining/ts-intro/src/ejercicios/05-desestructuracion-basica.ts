/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volume: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volume: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}

const {volume, segundo, cancion, detalles} = reproductor;
const {autor} = detalles;


// console.log('El volumen actual es: ', volume);
// console.log('El segundo actual es: ', segundo);
// console.log('La cancion actual es: ', cancion);
// console.log('El autor es: ', autor);

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [, , p3] = dbz;

console.log('Personaje 1: ', dbz[0]);
console.log('Personaje 2: ', dbz[1]);
console.log('Personaje 3: ', p3);

