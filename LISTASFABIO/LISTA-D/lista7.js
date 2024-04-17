/*Leia 3 (três) números (cada número corresponde a um lado do triângulo), verifique e escreva se os 3
(três) números formam um triângulo (a soma de dois lados não pode ser menor que o terceiro lado). Se
formam, verifique se formam um triângulo equilátero (3 lados iguais), isósceles (2 lados iguais) ou
escaleno (3 lados diferentes). Não existe lado com tamanho 0 (zero).*/

import { question } from "readline-sync";

function main(){

//ler os 3 lados

const lado1 = Number(question(` Informe o lado 1 :`))
const lado2 = Number(question(` Informe o lado 2 :`))
const lado3 = Number(question(` Informe o lado 3 :`))

//verificar se forma um triangulo

if (lado1 > 0 && lado2 > 0 && lado3 > 0 && lado1+lado2 > lado3 && lado2+lado3 > lado1 && lado1+lado3 > lado2 ) {

     console.log(` FORMA UM TRIANGULO`)

}

//verificar o tipo

if ( lado1 === lado2 && lado2 === lado3) {

     console.log(` DO TIPO : EQUILATERO`)

    }else if (lado1 === lado2 || lado2 === lado3 || lado3 === lado1){

     console.log(` DO TIPO : ISOSCELES `)

    }    else {

     console.log(` DO TIPO : ESCALENO `)
 
    }


}

main()


















