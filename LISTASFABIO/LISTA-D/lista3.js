//Leia 3 (três) números, verifique e escreva o maior entre os números lidos.

import { question } from "readline-sync";

function main () {

//ler 3 numeros

const numero1 = Number(question(` Informe o numero 1 : `))
const numero2 = Number(question(` Informe o numero 2 :`))
const numero3 = Number(question(` Informe o numero 3 :`))

//verifica o maior

let maiornumero = numero1

if (numero2 > maiornumero) {

   maiornumero = numero2

} if (numero3 > maiornumero){

   maiornumero = numero3

}

console.log(` O MAIOR numero e ${maiornumero}`)



}

main()




















