//Leia 1 (um) número inteiro e escreva se este número é par ou impar.

import { question } from "readline-sync";

function main () {

let numeroInt = parseInt(question(` Informe um numero : `))    

//processamento 

if ( numeroInt % 2 === 0 ) {

   console.log(` O Numero ${numeroInt} e PAR `)

}else{

   console.log(` O Numero ${numeroInt} e IMPAR `)

}

}

main()
















