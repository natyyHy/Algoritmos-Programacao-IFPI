//Leia N e uma lista de N números e escreva o maior número da lista.

import { get_number, print } from "./utils/io_utils.js"

function main(){

//entrada
const numero_N = get_number(`NUMERO N : `)

//processo
const maior_numero = calcula_maior_numero(numero_N)

//saida

print(`--------------`)
print(`MAIOR NUMERO --> ${maior_numero}`)

}

main()

function calcula_maior_numero(numero){

    let maior_numero = Number.MIN_SAFE_INTEGER
    for(let i = 1 ; i <= numero;i++){

        const lista_numero = get_number(`Numero ${i} : `)
        if(lista_numero > maior_numero){

            maior_numero = lista_numero
        }
    }

    return maior_numero
}

