//Leia 1 (um) número entre 0 e 100, verifique e escreva se o número é ou não primo.

import { question } from "readline-sync";

function main() {

//ler o numero entre 0 e 100

let numero = Number(question(` Informe o numero entre 0 e 100 : `))

//verificar se o numero esta entre 0 e 100
 
if ( numero > 0 && numero < 100 ) {
   
   console.log(`Numero Informado : ${numero}`)
   
}

//verificar se e primo

  const divisor = 2

 if(numero % divisor === 0){

     console.log(`O NUMERO NAO E PRIMO ! `)
 } else {

     console.log (` O NUMERO E PRIMO`)

 }

}



main()


