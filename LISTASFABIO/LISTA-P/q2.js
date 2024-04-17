//Leia N e escreva todos os números inteiros pares de 1 a N.

import { get_number_inteiro, print } from "./utils/io_utils.js"

function main(){

//entrada
const numero_N = get_number_inteiro(`Numero N : `)

//saida

print(`----------------`)
calcular_imprimir_numeros_pares(numero_N)
print(`----------------`)

}

main()

function calcular_imprimir_numeros_pares(numero){

    for(let i = 1; numero >= i;i++){

        if(i % 2 === 0 ){

            print(`${i} --> PAR`)
        }
    }
}