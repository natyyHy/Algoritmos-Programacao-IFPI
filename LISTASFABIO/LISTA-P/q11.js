//Leia LimiteSuperior e LimiteInferior e escreva todos os números primos entre os limites lidos.

import { get_number, print} from "./utils/io_utils.js"

function main(){

const LimiteInferior = get_number(`Limite Inferior : `)
const LimiteSuperior = get_number(`Limite Superior : `)

//processo e saida

print(`>>>> NUMEROS PRIMOS <<<<`)
calcular_numeros_primos(LimiteInferior,LimiteSuperior)
}

main()

function calcular_numeros_primos(inicio,fim){

    for(let i = inicio; i <= fim;i++){

        let primo = true
        if(i <= 1){

            primo = false

        }else{

            
        }
    }
}