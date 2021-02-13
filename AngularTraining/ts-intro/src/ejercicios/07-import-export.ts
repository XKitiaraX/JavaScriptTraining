import {calculaISV, Producto} from "./06-desestructuracion-funcion";

/*
    ===== Código de TypeScript =====
*/

const carritoCompras: Producto[] = [
    {
        desc: 'Telefono1',
        precio: 100
    },
    {
        desc: 'Telefono2',
        precio: 150
    }
];

const [total, isv] = calculaISV(carritoCompras);

console.log('Total', total);
console.log('ISV', isv);
