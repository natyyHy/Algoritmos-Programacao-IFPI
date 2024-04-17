//Escreva um algoritmo para determinar o número de dígitos de um número informado.

import { get_number_verification, print } from "./utils/io_utils.js"

function main(){

 //entrada
 print(`     >>>>> NUMERO DE DIGITOS DE UM VALOR <<<<<`)
 print(`-----------------------------------------`)
 
 const numero_informado = get_number_verification(`Informe Valor : `)
 
 //processo
 const resultado_numero_digitos = calcular_digitos(numero_informado)

 //saida
 print(`
 ------------------------
   
    VALOR INFORMADO : ${numero_informado}
    NUMERO DE DIGITOS : ${resultado_numero_digitos}
 
 ------------------------
 `)


}


main()

function calcular_digitos(numero){
 
   let qtd_resto = 1;
   let divisao = numero;
   
   while ( divisao >= 10 ){
    
      divisao = Math.floor(divisao / 10)
      qtd_resto++
   }
      
   return qtd_resto;
}

/*Para calcular a quantidade de dígitos em um número sem usar linguagem de programação, você pode seguir este procedimento:

Divida o número por 10 repetidamente até que ele se torne zero.
Conte o número de vezes que você fez a divisão.
Esse número será a quantidade de dígitos do número original.*/
