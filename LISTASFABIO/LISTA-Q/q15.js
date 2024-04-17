//Leia N, calcule e escreva os N primeiros termos de seqüência (1, 3, 6, 10, 15,...).

import { get_number, print } from "./utils/io_utils.js"

function main(){

const numero_N = get_number(`NUMERO N : `)

let contador = 0
for(let i = 1;i <= numero_N;i++){

    print(`${i}`)
    contador++
    i += contador
}

}

main()