/*Foi feita uma pesquisa de audiência de canal de TV em várias casas em Teresina, num certo dia. Para
cada casa visitada, o entrevistado informou o número do canal (2, 4, 5, 7, 10) e o número de pessoas que
estavam assistindo TV. Escreva um algoritmo que leia um número indeterminado de dados (terminando
quando for lido um canal igual a zero) e calcule o percentual de audiência para cada emissora,
mostrando ao final, o número de cada canal e sua respectiva audiência.*/

import { get_number, print } from "./utils/io_utils.js"

function main(){ 

//algoritmo que leia um número indeterminado de dados (terminando
//quando for lido um canal igual a zero)

let numero_canal;
let quantidade_entrevistados = 0
let qtd_espectador_canal_2 = 0
let qtd_espectador_canal_4 = 0
let qtd_espectador_canal_5 = 0
let qtd_espectador_canal_7 = 0
let qtd_espectador_canal_10 = 0

while(true){

    print(` ========== PESQUISA DE AUDIENCIA DE CANAL DE TV ========`)
    numero_canal = get_number(`Informe o NUMERO DOS CANAIS -> (2) ,(4),(5),(7),(10) OU (0 para SAIDA): `)

    if(numero_canal === 0 ){

        break;
    }

    quantidade_entrevistados++

    if(numero_canal === 2 ){

        qtd_espectador_canal_2++
    }

    if(numero_canal === 4 ){

        qtd_espectador_canal_4++
    }

    if(numero_canal === 5 ){

        qtd_espectador_canal_5++
    }

    if(numero_canal === 7 ){

        qtd_espectador_canal_7++
    }

    if(numero_canal === 10 ){
        qtd_espectador_canal_10++
    }

//calcule o percentual de audiência para cada emissora

const audiencia_canal_2 = calcular_percentual(qtd_espectador_canal_2,quantidade_entrevistados)
const audiencia_canal_4 = calcular_percentual(qtd_espectador_canal_4,quantidade_entrevistados)
const audiencia_canal_5 = calcular_percentual(qtd_espectador_canal_5,quantidade_entrevistados)
const audiencia_canal_7 = calcular_percentual(qtd_espectador_canal_7,quantidade_entrevistados)
const audiencia_canal_10 = calcular_percentual(qtd_espectador_canal_10,quantidade_entrevistados)

//SAIDA o número de cada canal e sua respectiva audiência

const resultado = (`
========= RESPECTIVAS AUDIENCIA DAS EMISSORAS =========
CANAL (2) --> ${audiencia_canal_2} %
CANAL (4) --> ${audiencia_canal_4} %
CANAL (5) --> ${audiencia_canal_5} %
CANAL (7) --> ${audiencia_canal_7} %
CANAL (10) --> ${audiencia_canal_10} %
=======================================================
TOTAL DE ENTREVISTADOS -> ${quantidade_entrevistados}
=======================================================

`)

print(resultado)

}


}
main()



function calcular_percentual(quantidade,quantidade_total){

    return ((quantidade/quantidade_total) * 100).toFixed(2)

   
}