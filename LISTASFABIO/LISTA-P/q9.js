//Leia LimiteSuperior e LimiteInferior e escreva todos os números pares entre os limites lidos.

import { get_number, print} from "./utils/io_utils.js"

function main(){

//entrada

const LimiteSuperior = get_number(`Limite Superior: `)
const LimiteInferior = get_number(`Limite Inferior : `)

if(LimiteInferior >= LimiteSuperior){

    print(`Error!!`)
    return
}

//processo e saida

print(`>>> NUMEROS PARES ENTRE ${LimiteInferior} E ${LimiteSuperior} <<<`)
calcular_numeros_pares_limites(LimiteInferior,LimiteSuperior)

}

main()

function calcular_numeros_pares_limites(inicio,fim){

    for(let i = inicio ; i <= fim;i++){

        if(i % 2 === 0 ){

            print(`---> ${i}`)
        }
    }
}