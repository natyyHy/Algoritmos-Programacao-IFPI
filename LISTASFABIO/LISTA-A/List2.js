//Leia um valor em horas e um valor em minutos, calcule e escreva o equivalente em minutos.

import { question } from 'readline-sync' 

//entrada

var hora = Number(question( ' Digite hora : '))

// processamento

var minuto_eqv = hora * 60

//saida

console.log(`${hora} horas equivale a ${minuto_eqv} minutos`);



