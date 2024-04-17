/*Leia vários códigos do jogador (1 ou 2) que ganhou o ponto, em uma partida de pingue-pongue, e
responda quem ganha a partida. A partida chega ao final se:
· Um dos jogadores chega a 21 pontos e a diferença de pontos entre os jogadores é maior ou igual a 2.
· Se a primeira não for atendida, ganha aquele que, com mais de 21 pontos, consiga colocar uma
diferença de 2 pontos sobre o adversário.*/

import { get_number, print } from "./utils/io_utils.js"

function main(){

    let total_pontos1 = 0
    let total_pontos2 = 0

    while(true){

        const pontos1 = get_number(`Informe os PONTOS do jogador(1) : `) 
        const pontos2 = get_number(`Informe os PONTOS do jogador(2) : `) 
        
        total_pontos1 += pontos1
        total_pontos2 += pontos2


        print(`=======================`)
        print(`TOTAL 1 : ${total_pontos1}`)
        print(`TOTAL 2 : ${total_pontos2}`)


        //fim dos dados
        const diferença_de_pontos1 = total_pontos1 - total_pontos2
        const diferença_de_pontos2 = total_pontos2 - total_pontos1

        if(total_pontos1 >= 21 && diferença_de_pontos1 >=2 ){

        print(` JOGADOR 1 GANHOU !!! :D `)
        break;

        }else if(total_pontos2 >= 21 && diferença_de_pontos2 >= 2 ){

        print(`JOGADOR 2 GANHOU !!! `)
        break;
    }
    

   


     }
}

main()