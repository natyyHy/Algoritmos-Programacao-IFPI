/*Supondo-se que a população de uma cidade A seja de 200.000 habitantes, com uma taxa anual de
crescimento na ordem de 3.5%, e que a população de uma cidade B seja de 800.000 habitantes,
crescendo a uma taxa anual de 1.35%, Escreva um algoritmo que determine quantos anos serão
necessários, para que a população da cidade A ultrapasse a população da cidade B.*/

import { get_number_inteiro , print} from "./utils/io_utils.js"

function main(){

const quantidade_populacao_cidadeA = get_number_inteiro(`HABITANTES CIDADE (A) : `)
const quantidade_populacao_cidadeB = get_number_inteiro(`HABITANTES CIDADE (B) : `)

let anos_necessarios_contagem = 0
let crescimento_populacaoA = quantidade_populacao_cidadeA
let crescimento_populacaoB = quantidade_populacao_cidadeB

    while(crescimento_populacaoA < crescimento_populacaoB){ //continuidade

        anos_necessarios_contagem++ //trabalho

        //convergencia de dados
        crescimento_populacaoA = crescimento_populacaoA * (1 + (3.5/100))
        crescimento_populacaoB = crescimento_populacaoB * (1 + (1.35/100))

    }

print(`ANOS NECESSARIOS PARA POPULAÇAO (A) ULTRAPASSAR POPULAÇAO (B) ---> ${anos_necessarios_contagem} anos`)

    }
main()