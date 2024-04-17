//Leia N , LimiteSuperior e LimiteInferior e escreva todos os múltiplos de N entre os limites lidos.

import { get_number, print} from "./utils/io_utils.js"

function main(){

//entrada

const numero_N = get_number(`NUMERO N : `)
const LimiteInferior = get_number(`Limite INFERIOR : `)
const LimiteSuperior = get_number(`Limite SUPERIOR : `)

//processamento e saida

print(`>>> MULTIPLOS DE ${numero_N} <<<`)

calcular_numeros_multiplos(numero_N,LimiteInferior,LimiteSuperior)

}

main()

function calcular_numeros_multiplos(numero_multiplo,limiteinicio,limitefim){

    for(let i = limiteinicio; i <= limitefim;i++){

        if(i % numero_multiplo === 0 ){

            print(`--> ${i}`)
        }
    }
}