/*Leia as variáveis A0, Limite e R e escreva os valores menores que Limite gerados pela Progressão
Aritmética que tem por valor inicial A0 e razão R.*/

import { get_number, print } from "./utils/io_utils.js"

function main(){

//entrada

let variavel_A = get_number(`Informe valor de A : `)
let variavel_R = get_number(`Informe valor de R :`)
const variavel_Limite = get_number(`Informe Limite : `)

//processamento

for(let i = variavel_A; i <= variavel_R;i++){

    if(i < variavel_Limite){

        print(`--> ${i} menor que ${variavel_Limite}`)
    }

}


}

main()