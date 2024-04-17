///Leia 2 (duas) frações (numerador e denominador), calcule e escreva a soma destas frações, escrevendo o resultado em forma de fração

import { question } from "readline-sync";

console.log(` ==== SOMA DE DUAS FRAÇOES ====`)

//ENTRADA

const numerador1 = Number(question( ` Informe o numerador da fraçao 1 : `))
const denominador1 = Number(question(` Informe o denomidador da fraçao 1 : `))

const numerador2 = Number(question(` Informe o numerador da fraçao 2 : `))
const denomidador2 = Number(question(` Informe o denomidador da fraçao 2 :`))

//processamento 

const numeradornovo1 = numerador1 * denomidador2
const numeradornovo2 = numerador2 * denominador1
const denominadorcomun = denominador1 * denomidador2

const numeradorsoma = numeradornovo1 + numeradornovo2 

//saida 

const mensagem = (`
-------------------------------
FRAÇAO 1 : ${numerador1} / ${denominador1}
FRAÇAO 2 : ${numerador2} / ${denomidador2}
-------------------------------
SOMA FRAÇAO : ${numeradorsoma} / ${denominadorcomun}

`)
console.log(mensagem)













