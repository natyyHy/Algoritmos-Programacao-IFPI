///Um número é um quadrado perfeito quando a raiz quadrada do número é igual à soma das dezenas
//formadas pelos seus dois primeiros e dois últimos dígitos.
//Exemplo: √9801 = 99 = 98 + 01. O número 9801 é um quadrado perfeito.
//Escreva um algoritmo que leia um número de 4 dígitos e verifique se ele é um quadrado perfeito.

import { question } from "readline-sync";

function main(){

console.log(` ==== QUADRADO PERFEITO ====`)
const numero = parseInt(question(` Informe um numero de 4 digitos : `))

if(numero < 1000 || numero > 9999){

    console.log(`NUMERO INVALIDO ! Digite um numero de 4 digitos . `)
}

const raizquadrada = Math.sqrt(numero)
const primeiradezena = Math.floor(numero / 100)
const ultimadezena = numero % 100
const somadasdezenas = primeiradezena + ultimadezena

if(raizquadrada === somadasdezenas){
     
    console.log(`RAIZ QUADRADA : ${raizquadrada}`)
    console.log(` SOMA : ${somadasdezenas}`)
    console.log(`O NUMERO ${numero} E UM QUADRADO PERFEITO ! `)
}else{

    console.log(` NAO E UM QUADRADO PERFEITO ! `)
}

}

main()















