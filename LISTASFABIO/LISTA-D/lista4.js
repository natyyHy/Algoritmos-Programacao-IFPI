/*Leia 1 (um) número de 2 (dois) dígitos, verifique e escreva se o algarismo da dezena é igual ou diferente
do algarismo da unidade.*/

import { question } from "readline-sync";

function main(){

const numero = Number(question(` Informe um numero de DOIS digitos : `))

// Obter os algarismos da dezena e da unidade
const dezena = Math.floor(numero / 10)
const unidade = numero % 10

//verificar se o algarismo e igual ou diferente do algarismo da unidade

if ( dezena === unidade ) {

   console.log(` A DEZENA E IGUAL DO ALGARISMO DA UNIDADE `)

} else {

   console.log(` A DEZENA E DIFERENTE DO ALGARISMO DA UNIDADE `)

}


}

main()


















