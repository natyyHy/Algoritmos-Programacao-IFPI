/*Confira o resultado de uma competição de natação entre dois clubes. O programa deve ler o número da
prova e a quantidade de nadadores. O fim dos dados é indicado pelo número da prova igual a 0 e
quantidade de nadadores igual a 0. A seguir, para cada nadador deverá ler nome, classificação, tempo,
clube (“a” ou “b”) e determinar os pontos obtidos por cada clube, de acordo com o seguinte critério:

Lugar   Pontos
1         9
2         6 
3         4
4         3
Ao final, o algoritmo deve escrever os totais de pontos de cada clube, indicando o clube vencedor.*/

import { fazer_pergunta, get_number_inteiro, print } from "./utils/io_utils.js"

function main(){

    let classificacao
    let tipo_clube
    let totalpontos_A = 0
    let totalpontos_B = 0

    while(true){

        print(`==================================================`)
        let numero_prova = get_number_inteiro(` Informe o NUMERO DA PROVA : `)
        let quantidade_nadadores = get_number_inteiro(` Informe a QUANTIDADE DE NADADORES : `)


        if(numero_prova === 0 && quantidade_nadadores === 0 ){

            break;
        }

        while(quantidade_nadadores > 0 ){

            print(`==================================================`)
            let nome_nadador = fazer_pergunta(` Digite NOME DO NADADOR(A) : `)
            classificacao = get_number_inteiro(` Digite CLASSIFICACAO DO NADADOR(A) :`)
            let tempo = get_number_inteiro(` Digite O TEMPO DO NADADOR(A) : `)
            tipo_clube = fazer_pergunta(` Digite o CLUBE DO NADADOR(A) -> (a ou b) : `)

            ////totais de pontos de cada clube, indicando o clube vencedor

            let pontos = Calcular_Pontos(classificacao)

             if(tipo_clube === `a`){

             totalpontos_A += pontos

             }

             if(tipo_clube === `b`){

              totalpontos_B += pontos

            }
    
            quantidade_nadadores--  
        }
    
    }

        



    //SAIDA
    print(`==================================================`)
    print(`TOTAL DE PONTOS CLUBE A --> ${totalpontos_A}`)
    print(`TOTAL DE PONTOS CLUBE B --> ${totalpontos_B}`)
    print(`==================================================`)

    //ganhador
    if(totalpontos_A > totalpontos_B){

        print(` CLUBE --> A VENCEU EEEHH !!! `)

    }else if (totalpontos_B > totalpontos_A){

        print(` CLUBE --> B VENCEU EEEHHH !!! `)

    }else if(totalpontos_A === totalpontos_B){

        print(` EMPATE !!!  :O `)
    }
}

main()


function Calcular_Pontos(posicao){

    switch(posicao){

        case 1 :
            return 9;
        case 2 :
            return 6;
        case 3 : 
            return 4;
        case 4 :
            return 3;
        default:
            return 0;
    }
}
