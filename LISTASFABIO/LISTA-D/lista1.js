//Leia 3 (três) números, verifique e escreva quantos números iguais existem entre os números.

import { question } from "readline-sync";

function main () {

//ler os tres numeros 
let numero1 = parseInt(question(` Informe o numero 1 : `))
let numero2 = parseInt(question(` Informe o numero 2 : `))
let numero3 = parseInt(question(` Informe o numero 3 : `))

//verifar quantos numeros iguais

if (numero1 === numero2 && numero2 === numero3 && numero3 === numero1){

    console.log(` Existem tres numeros iguais ! `)
    return 3

} else if ( numero1 === numero2|| numero2 === numero3 || numero3 === numero1 ) {

    console.log(` Existem dois numeros iguais !`)
    return 2
} else {
    console.log (` Nao existe nenhum numero igual ! `)
    return 0
       }


}
// chama a funçao principal 
main ();



















