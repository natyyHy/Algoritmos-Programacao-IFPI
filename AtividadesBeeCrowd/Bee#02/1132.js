//Imprima a soma de todos os valores não divisíveis por 13

import { question } from "readline-sync"

function main(){

let valor_X = parseInt(question(``))
let valor_Y = parseInt(question(``))

let menor_numero = Math.min(valor_X,valor_Y)
let maior_numero = Math.max(valor_X,valor_Y)

let soma = 0
while(menor_numero <= maior_numero){

    if(menor_numero % 13 !== 0 ){
        soma += menor_numero
    }

    menor_numero++
}

console.log(soma)
}

main()