/*Leia 3 (três) números (cada número corresponde a um ângulo interno do triângulo), verifique e escreva
se os 3 (três) números formam um triângulo (a soma dos ângulos internos é igual a 180o). Se formam,
verifique se formam um triângulo acutângulo (3 ângulos < 90o), retângulo (1 ângulo = 90o) ou
obtusângulo (1 ângulo > 90o). Não existe ângulo com tamanho 0o (zero grau) */

import { question } from "readline-sync";

function main() {

const angulo1 = Number(question(` Informe o ângulo interno 1 : `))
const angulo2 = Number(question(` Informe o ângulo interno 2 : `))
const angulo3 = Number(question(` Informe o ângulo interno 3 : `))

//soma dos angulos 

let soma = angulo1+angulo2+angulo3

//verifica e escrever se forma triangulo

    if( soma === 180){

     console.log(` Forma um TRIANGULO ! `)

    }

//verificar o tipo 

if ( angulo1 < 90 && angulo2 < 90 && angulo3 < 90){

     console.log(` TRIANGULO DO TIPO : ACUTANGULO ! `)

}else if ( angulo1 === 90 || angulo2 === 90 || angulo3 === 90 ) {

    console.log(` TRIANGULO TIPO : RETANGULO`)

}else{

    console.log(` TRIANGULO DO TIPO : OBTUSANGULO  `)

}


}


main()