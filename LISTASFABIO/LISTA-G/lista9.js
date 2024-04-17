//Leia um número e exiba o dia correspondente da semana. (1-Domingo, 2- Segunda etc.), se digitar outro
//valor deve aparecer valor inválido

import { question } from "readline-sync";

function main(){

   promt(`=====================================================================`)
   const numero = parseInt(question(` Informe um numero(dia) correspondente da semana (ex : 1-Domingo, 2- Segunda etc) : `))
   

    if(numero > 7  ) {

     promt(` Valor INVALIDO !! `)
     }

    if (numero === 1 ){

     promt(` 1 - DOMINGO `)

     }else if(numero === 2 ){

        promt(`2 - SEGUNDA `)
     }else if(numero === 3 ){

        promt(`3 - TERÇA FEIRA `)
     }else if(numero === 4 ){

        promt(`4 - QUARTA FEIRA `)
     }else if(numero === 5 ){

        promt(`5 - QUINTA FEIRA `)
     }else if(numero === 6 ){

        promt(`6 - SEXTA FEIRA `)
     }else if (numero === 7 ){

        promt(` 7 - SABADO `)
     }



}


function promt(texto){

    return console.log(texto)
}










main()

















