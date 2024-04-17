//Leia o valor do dólar e um valor em dólar, calcule e escreva o equivalente em real (R$).

import { question } from "readline-sync";

//entrada
console.log(`.....Dolar em Reais !!!.....`)
var dolar = Number(question(' Digite o valor da cotacao do Dolar : '))
var dolar1 = Number(question( ' Digite o valor do dolar : '))

//processamento

var calculo = dolar*dolar1

//saida

console.log(` ${dolar1} dolares equivale a ${calculo} reais `)












