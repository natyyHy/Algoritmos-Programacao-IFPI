//Leia 2 números (A, B) e escreva-os em ordem inversa (B, A).

import { question } from "readline-sync";

//entrada

console.log( ` .... TROCA DE NUMEROS ....`)

const input = (question( ` Digite dois numeros separados por virgula(ex = 2 , 3)  :  `))

//processamento

const [A , B] = input.split (',').map(Number)


//saida


console.log( ` Inverso : ${B} , ${A} .`)






















