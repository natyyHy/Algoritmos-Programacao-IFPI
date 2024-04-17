//Leia N e escreva todos os números inteiros de 1 a N.

import{ get_number_inteiro, print } from "./utils/io_utils.js"

function main(){

//entrada

print(` >>> NUMERO ATE N <<< `)

const numero_N = get_number_inteiro(`Digite N : `)

//processamento

let inicio = 0

if(numero_N <= 0 ){    //numero negativo

    inicio = numero_N
    for(let i = inicio ; i <= 1 ; i++){

        print(i)
    }
}else{ 
    inicio = 1
    for(let i = inicio ; i <= numero_N ; i++){   //numero positivo

        print(i)
    }
}


}

main()