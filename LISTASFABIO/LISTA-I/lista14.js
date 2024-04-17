/*Emita o resultado de uma pesquisa de opinião pública a respeito das eleições presidenciais. O
entrevistado deverá escolher entre 3 candidatos (Serra=45, Dilma=13 ou Ciro Gomes=23), ou então
responder: indeciso=99, outros=98, nulo/branco=0. O algoritmo deve ler a opinião de voto de cada
entrevistado, encerrando-se a pesquisa com a opinião sendo igual a –1. Ao final, devem ser mostrados:
· a porcentagem de cada candidato;
· a porcentagem dos outros candidatos;
· a porcentagem de eleitores indecisos;
· a porcentagem de votos nulos/brancos;
· o total de entrevistados;
· uma mensagem indicando a possibilidade ou não de haver 2o turno.*/

import { get_number, print } from "./utils/io_utils.js"

function main(){

let votos_Serra_45 = 0
let votos_Dilma_13 = 0
let votos_CiroGomes_23 = 0
let votos_indeciso_99 = 0
let votos_outros_98 = 0
let votos_nulo_0 = 0

while(true){ 

    print(` ====== PESQUISA OPINIAO PUBLICA ========`)
    print(`==========================================`)
    print(` Escolha o numero da opcao que deseja opinar -> `)
    print(`(45) -> SERRA (13) -> DILMA (23) -> CIRO GOMES (99) -> indeciso (98) -> outros (0) -> nulo`)
    print(`==========================================`)
    const escolha_opiniao = get_number(` DIGITE NUMERO (-1 para saida) :`)

    if(escolha_opiniao === -1){
        break;
    }


    if(escolha_opiniao === 45){
        votos_Serra_45++
    }

    if(escolha_opiniao === 13 ){
        votos_Dilma_13++
    }

    if(escolha_opiniao === 23){
        votos_CiroGomes_23++
    }

    if(escolha_opiniao === 99 ){
        votos_indeciso_99++
    }

    if(escolha_opiniao === 98 ){
        votos_outros_98
    }

    if(escolha_opiniao === 0){
        votos_nulo_0++
    }
}

//CALCULO PORCENTAGEM
const total_entrevistados = votos_CiroGomes_23+votos_Dilma_13+votos_Serra_45+votos_indeciso_99+votos_nulo_0+votos_outros_98

const porcentagem_votos_serra = calcular_porcentagem(votos_Serra_45,total_entrevistados)
const porcentagem_votos_dilma = calcular_porcentagem(votos_Dilma_13,total_entrevistados)
const porcentagem_votos_sirogomes = calcular_porcentagem(votos_CiroGomes_23,total_entrevistados)
const porcentagem_outros_canditado = calcular_porcentagem(votos_outros_98,total_entrevistados)
const porcentagem_eleitores_indecisos = calcular_porcentagem(votos_indeciso_99,total_entrevistados)
const porcentagem_votos_nulos = calcular_porcentagem(votos_nulo_0,total_entrevistados)


print(` >>>>>  PORCENTAGEM DE CADA CANTIDADO <<<<<`)
print(`===================================================`)
print(` PORCENTAGEM CANDITADO SERRA (45): ${porcentagem_votos_serra.toFixed(2)} %`)
print(` PORCENTAGEM CANDITADO DILMA (13) : ${porcentagem_votos_dilma.toFixed(2)} %`)
print(` PORCENTAGEM CANDITADO CIRO GOMES (23): ${porcentagem_votos_sirogomes.toFixed(2)} %`)
print(`===================================================`)
print(`PORCENTAGEM DE OUTROS CANDITADO : ${porcentagem_outros_canditado.toFixed(2)} %`)
print(`PORCENTAGEM ELEITORES INDECISOS : ${porcentagem_eleitores_indecisos.toFixed(2)} %`)
print(`PORCENTAGEM DE VOTOS NULOS : ${porcentagem_votos_nulos.toFixed(2)} % `)
print(`TOTAL DE ENTREVISTADOS : ${total_entrevistados}`)

}

main()

function calcular_porcentagem(quantidade,total){

    return (quantidade / total) * 100
}