//Leia 3 números, calcule e escreva a soma dos 2 primeiros e a diferença entre os 2 últimos.

import { question } from "readline-sync";

var n1 = Number(question( ` Numero 1 :  `))
var n2 = Number(question( ` Numero 2 :  `))
var n3 = Number(question( ` Numero 3 :  `))

//processamento

var soma12 = n1 + n2
var diferença23 = n2 - n3

//saida

console.log( `  ${n1} + ${n2} = ${soma12} `)
console.log( `  ${n2} - ${n3} = ${diferença23}`)




















