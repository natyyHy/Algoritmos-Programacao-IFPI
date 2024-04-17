//Leia o valor do raio de uma circunferência, calcule e escreva seu comprimento.(c = 2 * p * r)

import { question } from "readline-sync";

console.log(`===COMPRIMENTO DE UMA CIRCUFERENCIA===`)
 const raio = Number(question(`Informe o valor do raio : `))

//processamento

const comprimento = 2 * 3.14 * raio

//saida

const msg = (`
--------------
2 x  π  x  ${raio}
--------------
COMPRIMENTO = ${comprimento.toFixed(2)}

`)

console.log(msg)













