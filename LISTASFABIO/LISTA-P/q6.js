//Escreva a tabuada dos números de 1 a 10.

import { print } from "./utils/io_utils.js"

function main(){

//entrada

print(` >>>> TABUDADA DE 10 <<<< `)

//processo

const valor_tipo_tabuada = 10

//saida

calcular_tabuada(valor_tipo_tabuada)


}

main()

function calcular_tabuada(limite){

    for(let i = 1; i <= limite; i++){

        print(`${i} x ${limite} = ${i*limite}`)
    }

}