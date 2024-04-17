//Leia um número inteiro (3 dígitos) e escreva o inverso do número. (Ex.: número = 532 ; inverso = 235)

import { question } from "readline-sync";

console.log("===== INVERSO DOS NÚMEROS =====");

let numero;
let valido = false;

while (!valido) {
    numero = Number(question("Por favor, digite um numero inteiro de tres digitos: "));

    // Verifica se o número é válido
    if (Number.isInteger(numero) && numero >= 100 && numero <= 999) {    /// <------ revisar essa parte 
        valido = true;
    } else {
        console.log("Por favor, digite um numero inteiro de tres digitos valido.");
    }
}

// Processamento
const inverso = Number(numero.toString().split('').reverse().join(''));

// Saída
console.log(`INVERSO = ${inverso}`);