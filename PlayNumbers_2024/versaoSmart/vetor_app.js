import { adicionar_novos_valores, editar_valor_posicao, elevar_valores_de_vetor, embaralhar_vetor, iniciar_vetor_numerico, mostrar_media_valores, mostrar_menorEmaior_e_posicoes, mostrar_quantidade_vetor, mostrar_somatorio_dos_valores, mostrar_valores, mostrar_valores_negativos_quantidade, mostrar_valores_positivos_quantidade, multiplicar_valores_de_vetor, ordenar_vetor, reduzir_fracao, remover_itens_valor_exato, remover_porPosicao, resetar_vetor, salvar_arquivo, substituir_numeros_negativos_por_aleatorio } from './vetor_funcionalidades.js'
import { obter_numero, obter_numero_max, obter_numero_min_max, obter_texto, print } from './utils.js'
import { menu } from './menu.js'

function main (){

    let escolhaUsuario = 1
    let vetor_numerico = []

    while(escolhaUsuario !== 16){
        menu()
        escolhaUsuario = obter_numero_min_max('SELECIONE UMA OPCAO: ',1,16)

        if(escolhaUsuario !== 16){

            if (escolhaUsuario === 1) {

                vetor_numerico = iniciar_vetor_numerico()

            } else if (escolhaUsuario === 2) {

                mostrar_valores(vetor_numerico)

            } else if (escolhaUsuario === 3) {

                vetor_numerico = resetar_vetor()
                print('\n >>>>>> RESETADO COM SUCESSO <<<<<< \n')

            } else if (escolhaUsuario === 4) {

                mostrar_quantidade_vetor(vetor_numerico)

            } else if (escolhaUsuario === 5) {

                mostrar_menorEmaior_e_posicoes(vetor_numerico)

            } else if (escolhaUsuario === 6) {

                mostrar_somatorio_dos_valores(vetor_numerico) 

            } else if (escolhaUsuario === 7) {

                mostrar_media_valores(vetor_numerico)

            } else if (escolhaUsuario === 8) {

                mostrar_valores_positivos_quantidade(vetor_numerico)

            } else if (escolhaUsuario === 9) {

                mostrar_valores_negativos_quantidade
                (vetor_numerico)

            } else if (escolhaUsuario === 10) {

                print(`(1)-MULTIPLICAR POR UM VALOR\n(2)-ELEVAR AO EXPOENTE\n(3)-REDUZIR A UMA FRACAO\n(4)-SUBSTITUIR VALORES NEGATIVOS POR UM NUMERO ALEATORIO\n`)
                print(`(5)-ORDENAR VALORES\n(6)-EMBARALHAR VALORES`)
                const escolhaUser = obter_numero_min_max('ESCOLHA O TIPO DE ATUALIZACAO: ', 1, 6)

                if(escolhaUser === 1){

                    print('>>>> MULTIPLICAÇAO SELECIONADA <<<<\n')
                    const numero = obter_numero('DIGITE O VALOR QUE DESEJE MULTIPLICAR: ')
                    vetor_numerico = multiplicar_valores_de_vetor(vetor_numerico,numero)

                }else if(escolhaUser === 2){

                    print('>>>> EXPONENCIACAO SELECIONADA <<<<\n')
                    const numero = obter_numero('DIGITE O VALOR QUE DESEJE ELEVAR: ')
                    vetor_numerico = elevar_valores_de_vetor(vetor_numerico,numero)

                }else if(escolhaUser === 3){

                    print('>>>> REDUCAO DE UMA FRACAO SELECIONADA <<<<\n')
                    const numero = obter_texto('DIGITE A FRACAO: ')
                    vetor_numerico = reduzir_fracao(vetor_numerico,numero)

                }else if(escolhaUser === 4){

                    print('>>>> SUBSTITUIR NUMEROS NEGATIVOS POR UM N. ALEATORIO SELECIONADA <<<<\n')
                    print(`>>>> SELECIONE A FAIXA DO NUMERO ALEATORIO\n`)
                    const numero_min = obter_numero('MINIMO: ')
                    const numero_max = obter_numero_max('MAXIMO: ',numero_min)
                    vetor_numerico = substituir_numeros_negativos_por_aleatorio(vetor_numerico,numero_min,numero_max)

                }else if(escolhaUser === 5){

                    print('>>>> ORDENAR VALORES SELECIONADA <<<<\n')

                    print(`SELECIONE A ORDEM QUE DESEJA\n`)
                    print(`(1)-CRESCENTE\n(2)-DECRECENTE\n(3)-REVERTIDO\n`)
                    const ordemEscolhida = obter_numero('OPCAO: ')
                    vetor_numerico = ordenar_vetor(vetor_numerico,ordemEscolhida)
                    
                }else if(escolhaUser === 6){

                    print('>>>> EMBARALHAR VALORES SELECIONADA <<<<\n')
                    vetor_numerico = embaralhar_vetor(vetor_numerico)
                }

            } else if (escolhaUsuario === 11) {

                vetor_numerico = adicionar_novos_valores(vetor_numerico)

            } else if (escolhaUsuario === 12) {

                vetor_numerico = remover_itens_valor_exato(vetor_numerico)

            } else if (escolhaUsuario === 13) {

                vetor_numerico = remover_porPosicao(vetor_numerico)

            } else if (escolhaUsuario === 14) {

                vetor_numerico = editar_valor_posicao(vetor_numerico)
                
            } else if (escolhaUsuario === 15) {

                print('\n>>>> VETOR NUMERICO SALVO COM SUCESSO <<<<\n')
                salvar_arquivo(vetor_numerico)
            }
        }
    }

    salvar_arquivo(vetor_numerico)
    print('\nSALVANDO ARQUIVO......\nARQUIVO SALVO!')
    print('Encerrando...')
}

main()