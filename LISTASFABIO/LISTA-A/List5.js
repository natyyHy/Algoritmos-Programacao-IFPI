//Leia um número inteiro (3 dígitos), calcule e escreva a soma de seus elementos (C + D + U).

import { question } from "readline-sync";

//entrada

console.log( ` ==== SOMA DE C + D + U ==== `)
var numero = Number(question( ` Digite um numero : `))

//processamento

var centena = Math.floor(numero / 100)
var resto = numero % 100
var dezena = Math.floor(resto / 10)
var unidade = resto % 10

var soma = centena+dezena+unidade

//saida

console.log( `    ===SOMATORIA===
${centena} + ${dezena} + ${unidade} = ${soma}`)

























