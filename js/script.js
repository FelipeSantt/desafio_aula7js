// Desafio 01 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];

const numIpares = ((str) => str.filter((num) => num % 2 != 0))
const divisorTerco = ((str) => str.filter((num) => num % 3 === 0))

console.log(numIpares(numbers));
console.log(divisorTerco(numbers));


// Desafio 2

let words = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
let strnumbers = ['cinquenta', 'doze', 'tres', 'quatorze', 'cinco', 'treze', 'sete', 'oito', 'noventa', 'vinte'];

const contLetras = ((str) => str.map(str => str.length));

console.log(contLetras(words));
console.log(contLetras(strnumbers));

const ordemCrescente = ((str) => contLetras(str).sort());

console.log(ordemCrescente(words));
console.log(ordemCrescente(strnumbers));

//Desafio 3

let data = '2024-01-03 13:10:00';
let strDate = '2024-12-25 18:15:00';

const strData = ((str) => str = (new Date(str).getDay()) + '/' + (new Date(str).getMonth()) + '/' + (new Date(str).getFullYear()));

console.log(strData(data));
console.log(strData(strDate));

const strHoras = ((str) => str = (new Date(str).getHours('00')) + ':' + (new Date(str).getMinutes('00')));

console.log(strHoras(data));
console.log(strHoras(strDate));





