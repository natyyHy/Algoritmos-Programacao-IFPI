//Leia 5 (cinco) números inteiros e escreva o maior e o menor deles. Considere que todos os valores são
//diferentes.

import { question } from "readline-sync";

function main () {

let numero1 = parseInt(question(` Informe um numero 1 : `)) 
let numero2 = parseInt(question(` Informe um numero 2 : `)) 
let numero3 = parseInt(question(` Informe um numero 3 : `)) 
let numero4 = parseInt(question(` Informe um numero 4 : `)) 
let numero5 = parseInt(question(` Informe um numero 5 : `)) 

//processamento

let menor = numero1
let maior = numero1

if(numero2 < menor){ menor = numero2}
if(numero2 > maior){maior = numero2}

if(numero3 < menor){menor = numero3}
if(numero3 > maior){maior = numero3}

if(numero4 < menor){menor = numero4}
if(numero4 > maior){maior = numero4}

if(numero5 < menor){menor = numero5}
if(numero5 > maior){maior = numero5}

const mensagem =
(`==================
O MAIOR NUMERO : ${maior}
MENOR NUMERO : ${menor}
======================

`)

console.log(mensagem)

}

main()














