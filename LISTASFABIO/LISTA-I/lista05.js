//Leia dois números X e N. A seguir, escreva o resultado das divisões de X por N onde, após cada
//divisão, X passa a ter como conteúdo o resultado da divisão anterior e N é decrementado de 1 em 1, até
//chegar a 2.

import { around_number, get_number_verification , print } from "./utils/io_utils.js"

function main(){

 //saida
 print(` >>>> DIVISAO DE X POR N <<<<<`)
 const X = get_number_verification(`Informe o valor de X : `)
 const N = get_number_verification(`Informe o valor de N : `)

 //processo
 const resultado = calcular_divisao(X,N)

 //saida
 print(`
 ------------------------
    DIVISAO DE ${X} POR ${N} : ${around_number(resultado,2)}
 ------------------------
 `)

}
main()

function calcular_divisao(x,n){
  
    let dividendo_X = x
    let divisor_N = n

    while(divisor_N > 2 ){

        //após cada divisão, X passa a ter como conteúdo o resultado da divisão anterior
        dividendo_X = dividendo_X / divisor_N
        //N é decrementado de 1 em 1, até chegar a 2.
        divisor_N--
    }

    return dividendo_X / divisor_N
}