/*Leia N, calcule e escreva o maior quadrado menor ou igual a N. Por exemplo, se N for igual a 38, o
maior quadrado menor que 38 é 36 (quadrado de 6).*/

import { get_number, print } from "./utils/io_utils.js"

function main(){

const numero_N = get_number(`NUMERO N: `)

let maior_quadrado = 0
for(let i = 0; i <= numero_N;i++){

    const quadrado_atual= i*i
    if(quadrado_atual <= numero_N){

        maior_quadrado = i
    }
}

print(`MAIOR QUADRADO DE ${numero_N} --> ${maior_quadrado}`)
}
main()