//Leia LimiteSuperior e LimiteInferior e escreva todos os números ímpares entre os limites lidos.

import { get_number, print} from "./utils/io_utils.js"

function main(){

const LimiteInferior = get_number(`Limite Inferior : `)
const LimiteSuperior = get_number(`Limite Superior : `)

//processo

print(`>>>> NUMEROS IMPARES <<<<`)
calcular_numeros_impares(LimiteInferior,LimiteSuperior)

}

main()

function calcular_numeros_impares(inicio,fim){

    for(let i = inicio; i <= fim; i++){

        if(i % 2 >= 1){

            print(`---> ${i}`)
        }    
    }
}