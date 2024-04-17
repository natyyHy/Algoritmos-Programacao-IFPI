//Leia N e escreva todos os números inteiros pares de 1 a N.

import { get_number_inteiro, print } from "./utils/io_utils.js"

function main(){

const valor_N = get_number_inteiro(`valor N:`)

for(let i = 1; i <= valor_N;i++){

    if(i % 2 === 0){
        print(i)
    }
}

}

main()