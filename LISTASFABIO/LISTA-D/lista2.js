//Leia 2 (dois) números, verifique e escreva o menor e o maior entre os números lidos.

import { question } from "readline-sync"


function main () {

//ler dois numeros

const numero1 = Number(question(` Informe o numero 1 :`))
const numero2 = Number(question(` Informe o numero 2 :`))

//verificar o maior e menor
 
if (numero1 > numero2) {

    console.log(` O MAIOR numero e ${numero1}`)
    console.log(` O MENOR numero e ${numero2}`)

} else if (numero1 < numero2){

    console.log(` O MAIOR numero e ${numero2}`)
    console.log(` O MENOR numero e ${numero1}`)
}

}

main()























