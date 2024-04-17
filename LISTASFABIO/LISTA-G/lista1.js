//Leia um número e mostre na tela se o número é positivo ou negativo.

import { question } from "readline-sync"

function main (){

const numero = parseInt(question(` Informe um numero : `))

if (numero >=0 ){

    promt(`O numero e POSITIVO `)
}else{

    promt(`O numero e NEGATIVO`)
}



}


function promt (texto){
    return console.log(texto)
}

main()















