import { e_igual, get_number_min, get_operation, get_text, iniciar_itens, numero_jogadas_minimas, print } from './utils_game.js'

function main(){

    print('>>> JOGO HANOI RGB - (ROGERIO GORDINHO E BONITO >:3) <<<\n')

    let numero_itens = get_number_min('>>> Digite o numero de itens para Torre R: ',2)
    print('')
    let nome_jogador_1 = get_text('>>> Nome Jogador 1: ')
    print('')
    let nome_jogador_2 = get_text('>>> Nome Jogador 2: ')

    let torre_inicial = iniciar_itens(numero_itens)

    let torre_inicial_v1 = [... torre_inicial]
    let jogadas_player1 = iniciar_jogo(numero_itens,nome_jogador_1,torre_inicial_v1)
    let torre_inicial_v2 = [... torre_inicial]
    let jogadas_player2 = iniciar_jogo(numero_itens,nome_jogador_2,torre_inicial_v2)

    let vencedor = ''
    if(jogadas_player1 === jogadas_player2) vencedor = 'EMPATE'
        else{
            vencedor = jogadas_player1 < jogadas_player2 ? nome_jogador_1 : nome_jogador_2   
        }

     print(
`\t------------------------------------
\t>>> Jogador ${vencedor} VENCEU ! <<<
\t-------------------------------------
\t>>> Jogadas Jogador 1 ${nome_jogador_1}: ${jogadas_player1} jogadas
\t>>> Jogadas Jogador 2 ${nome_jogador_2}: ${jogadas_player2} jogadas\n`)
    
}

main()

function iniciar_jogo(tamanho,nome,torre_inicial){
    //acaba quando o jogador completar o jogo (RETORNAR QUANTIDADE DE MOVIMENTOS)
    print(`\n >>> Jogador ${nome}! O jogo COMEÇOU!\n`)
    print(`\n>>> Quantidade minima de movimentos: ${numero_jogadas_minimas(tamanho)}\n`)
    let jogadas = 0

    let torre_R = torre_inicial
    let torre_G = []
    let torre_B = []

    while(!(jogo_finalizado(torre_R,torre_G,torre_B))){

        print(' >>> ESTADO DAS TORRE <<<\n')
        print(`Torre de R ---> ` + imprimir_torre(torre_R))
        print(`Torre de G ---> ` + imprimir_torre(torre_G))
        print(`Torre de B ---> ` + imprimir_torre(torre_B))

        let operacao_user = get_operation('\n>> selecione o movimento (Ex: RG , Item de Torre R para Torre G): ')

        let torre_origem = [] , torre_destino = []

        switch (operacao_user) {
            case 'RG':
                torre_origem = torre_R
                torre_destino = torre_G        
                break;
            case 'RB':
                torre_origem = torre_R
                torre_destino = torre_B  
                break;
            case 'GR':
                torre_origem = torre_G
                torre_destino = torre_R
                break;
            case 'GB':
                torre_origem = torre_G
                torre_destino = torre_B
                break;
            case 'BR':
                torre_origem = torre_B
                torre_destino = torre_R
                break;
            case 'BG':
                torre_origem = torre_B
                torre_destino = torre_G
                break;
        }

        if(torre_origem.length === 0){
            print('')
            print('>>> Erro! Torre de Origem Vazia!')
            print('')
        }else {
            torre_destino.push(torre_origem.pop())
            jogadas++
            print('\n>>> Movimentos Efetudos: ' + jogadas)
        }
    }

    print(`\n >>> Parabens Jogador ${nome}! Voce completou ${jogadas} jogadas !\n`)
    return jogadas

}

function jogo_finalizado(torreR,torreG,torreB){

    if(e_igual(torreR, elem => elem === 'R') &&
        e_igual(torreG,elem => elem === 'G') &&
            e_igual(torreB,elem => elem === 'B')){
                return true
            }

    return false
}

function imprimir_torre(torre){
    let img = torre.length > 0 ? torre.join(' ') : '[ vazio ]'
    return img
}