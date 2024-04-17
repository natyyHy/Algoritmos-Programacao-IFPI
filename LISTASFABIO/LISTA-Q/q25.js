/*Em uma eleição presidencial existem 3 (três) candidatos. Os votos são informados através de códigos.
Os dados utilizados para a contagem dos votos obedecem à seguinte codificação:
· 1, 2, 3 = voto para os respectivos candidatos;
· 9 = voto nulo;
· 0 = voto em branco;
Escreva um algoritmo que leia o código votado por N eleitores. Ao final, calcule e escreva:
a) total de votos para cada candidato;
b) total de votos nulos;
c) total de votos em branco;
d) quem venceu a eleição.*/

import { get_number, print } from "./utils/io_utils.js"

function main(){

    print(`===== ELEICAO PRESIDENCIAL =====`)
    const numero_eleitores = get_number(`NUMERO DE HABITANTES : `)

    //variaveis

    let total_votos_1 = 0
    let total_votos_2 = 0
    let total_votos_3 = 0
    let total_votos_9 = 0
    let total_votos_0 = 0

    let vencedor = ``

    //loop
    for(let i = 1;i <= numero_eleitores;i++){

        print(`==== ESCOLHA DO VOTO ELEITOR ${i} ====`)
        print(`(1) -> Lula (2) -> Bolsonaro (3) -> Candidato Padre (9) -> Nulo (0) -> Nenhum`)
        const voto_informado = get_number(`Escolha o seu voto : `)

        if(voto_informado === 1 ){

            total_votos_1++
        }

        if(voto_informado === 2 ){

            total_votos_2++
        }

        if(voto_informado === 3 ){

            total_votos_3++
        }

        if(voto_informado >= 9 ){

            total_votos_9
        }

        if(voto_informado === 0 ){

            total_votos_0++
        }

    }

    if(total_votos_1 > total_votos_2 && total_votos_1 > total_votos_3){

        vencedor = `LULA VENCEU`
    }else if(total_votos_2 > total_votos_1 && total_votos_2 > total_votos_3){

        vencedor = `BOLSONARO VENCEU`
    }else if(total_votos_3 > total_votos_1 && total_votos_3 > total_votos_2){

        vencedor = `CANDIDATO PADRE VENCEU`
    }else{

        vencedor = `NENHUM VENCEU`
    }

    const resultado = (`
    =================================
    TOTAL VOTOS LULA(1) --> ${total_votos_1}
    TOTAL VOTOS BOLSONARO(2) --> ${total_votos_2}
    TOTAL VOTOS CANDIDATO PADRE(3) --> ${total_votos_3}
    TOTAL VOTOS NULOS(9) --> ${total_votos_9}
    TOTAL VOTOS BRANCOS(0) --> ${total_votos_0}
    =================================
    VENCEDOR ---> ${vencedor}
    =================================`)

    print(resultado)

}

main()