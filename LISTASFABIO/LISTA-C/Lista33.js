//Leia um número inteiro (3 dígitos), calcule e escreva a soma do número com seu inverso.(Ex.: número = 532 ; inverso = 235 ; soma = 532 + 235 = 767).

import { question } from "readline-sync";

console.log(` === SOMA DO NUMERO COM SEU INVERSO ===`)

//entrada

const numero = parseInt(question(` Informe o numero de 3 digitos : `))

//verifica a entrada de 3digitos
if ((/^\d{3}$/).test(numero)) {

//calculo do inverso
const inverso = parseInt(numero.toString().split("").reverse().join(""))
const soma = inverso + numero

//saida
const msg = (`
--------------------------------------
NUMERO --> ${numero}
INVERSO --> ${inverso}
--------------------------------------
SOMA --> ${numero} + ${inverso} = ${soma}
`)

console.log(msg)



}

else {

console.log (` POR FAVOR DIGITE O NUMERO DE EXATAMENTE DE 3 DIGITOS !!`)

}






