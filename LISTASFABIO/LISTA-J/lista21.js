//Leia 2 números inteiros e escreva a multiplicação dos mesmos, sem que o operador de multiplicação (*)
//seja utilizado.

import { get_number_inteiro, print } from "./utils/io_utils.js"

function main(){

//LER DOIS NUMEROS INTEIROS
const numero_1 = get_number_inteiro(`Informe o numero (1) :`)
const numero_2 = get_number_inteiro(`Informe o numero (2) : `)

//ESCREVER A MULTIPLICAÇAO DOS MESMO SEM USAR *

let contador_de_vezes = numero_1
let multiplicação = 0

while(contador_de_vezes > 0){ ///continuidade

    multiplicação +=  numero_2  //trabalho
    contador_de_vezes--  //convergencia
}

print(`MULTIPLICACAO -> ${numero_1} X ${numero_2} = ${multiplicação}`)
}

main()