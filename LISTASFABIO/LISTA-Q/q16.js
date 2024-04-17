/*Leia um número N, calcule e escreva os N primeiros termos de seqüência de Fibonacci
(0,1,1,2,3,5,8,...). O valor lido para N sempre será maior ou igual a 2.*/

import { get_number, print } from "./utils/io_utils.js"

function main(){

//entrada
const numero_N = get_number(`NUMERO N : `)

    let numeroNovo = 1
    let numeroAnterior = 0
    let sequenciaFibonacci = "0, 1"
    for(let i = 2; i <= numero_N; i++){

        let proximoNumero = numeroNovo + numeroAnterior
        sequenciaFibonacci += ", " + proximoNumero
        numeroAnterior = numeroNovo
        numeroNovo = proximoNumero
        
    }

    print(sequenciaFibonacci)
}

main()