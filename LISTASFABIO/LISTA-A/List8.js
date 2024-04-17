//Leia 2 números, calcule e escreva a divisão da soma pela subtração dos números lidos.

//n1+n2 = x           
//n1-n2 = y             x/y

import { question } from "readline-sync";

//entrada

const n1 = Number(question( ` Numero 1 : `))
const n2 = Number(question( ` Numero 2 : `))

//processamento

const soma12 = n1+n2
const subtração = n1-n2
const divisao = soma12/subtração

//saida

console.log( ` A divisao da soma pela subtraçao de ${n1} e ${n2} e igual a = ${divisao}`)













