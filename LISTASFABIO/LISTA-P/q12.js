//Leia N e uma lista de N números e escreva a soma e a média de todos os números da lista.

import { get_number, print } from "./utils/io_utils.js"

function main(){

//entrada
const numero_N = get_number(`NUMERO N : `)

//processo
let quantidade_N = 0
let soma = 0
let media = 0

for(let i = 1;i <= numero_N;i++){

    quantidade_N++
    soma += i
    print(`--> ${i}`)
}

media = soma / quantidade_N

//saida

print(`
-----------------
SOMA --> ${soma}
MEDIA ${soma} / ${quantidade_N} --> ${media}
`)
}

main()