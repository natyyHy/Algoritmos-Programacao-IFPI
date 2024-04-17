//Leia um número N, some todos os números inteiros entre 1 e N e escreva o resultado obtido.

import { get_number_inteiro, print } from "./utils/io_utils.js"

function main(){

//entrada

const numero_N = get_number_inteiro(`NUMERO N : `)

//processo e saida

const resultado = calcular_somatorio(numero_N)

print(`------------`)
print(`SOMATORIO --> ${resultado}`)
}

main()

function calcular_somatorio(numero){

    let somatorio = 0
    for(let i = 1 ; i <= numero;i++){

        print(`------------`)
        print(`${i} +`)
        somatorio += i
    }

    return somatorio
}