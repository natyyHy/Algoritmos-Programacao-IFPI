//Leia um número inteiro (3 dígitos), calcule e escreva a diferença entre o número e seu inverso.

import { question } from "readline-sync";

//entrada

console.log(`=== DIFERENÇA ENTRE O NUMERO E SEU INVERSO ===`)

const numero = parseInt(question(` Informe o numero inteiro de 3 digitos :`))

//processamento

//VERIFICA SE O NUMERO TEM TRES DIGITOS

if ((/^\d{3}$/).test(numero)) {

 //calcula o inverso

 const inverso = parseInt(numero.toString().split("").reverse().join(""))

 const diferenca = numero - inverso

 const msg = (`
 ------------------------------ 
 DIFERENÇA ENTRE O NUMERO
 E SEU INVERSO --> ${diferenca}
 ------------------------------
 `)

 console.log(msg)

  }
else {

console.log(` POR FAVOR DIGITE O NUMERO DE APROXIDAMENTE 3 DIGITOS ! `)

}
















