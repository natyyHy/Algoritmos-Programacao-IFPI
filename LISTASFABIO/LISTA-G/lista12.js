//Leia um número e escreva se o número é inteiro ou decimal

import { question } from "readline-sync";

function main(){

const numero = parseFloat(question(` Informe um numero : `))

console.log(`NUMERO INFORMADO : ${numero}`)

if(Number.isInteger(numero)){

    console.log(`O numero e INTEIRO`)
}else{

    console.log(`O numero e DECIMAL `)
}



}

main()



