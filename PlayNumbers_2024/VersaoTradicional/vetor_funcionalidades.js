//funções relacionadas às operações que serão chamadas na aplicação (vetor_app.js)
import { gerar_numero_aleatorio, obter_numero, obter_numero_max, obter_numero_min_max, obter_texto } from './utils.js'
import { gerar_vetor, gerar_vetor_valor_informado, mostrar_itens_vetor , gerar_vetor_de_arquivoInformado , calcular_quantidade_vetor , calcular_somatorio_vetor ,
    calcular_media_vetor, filtrar, eh_number_positivo, eh_number_negativo,mapear,gerar_multiplicacao_com,gerar_expoenciacao_com
    ,gerar_substituicao,tem_number, gerar_remover_item,ordenar_vetor_ordem_crescente,mostrar_itens_e_posicao_vetor,tem_posicao_number,
    ordenar_vetor_ordem_decrecente,
    reverter_vetor} from './vetor_utils.js'
    
import { writeFileSync } from "fs"

export function print(text){
    return console.log(text)
}

export function iniciar_vetor_numerico(){
    print('>>>> ---- INICIANDO VETOR ---- <<<<')
    print(`(1)-VETOR COM DADOS AUTOMATICOS`)
    print(`(2)-INFORMAR VALORES`)
    print(`(3)-CARREGAR VALORES DE UM ARQUIVO\n`)

    const escolhaUsuario = obter_numero_min_max('SELECIONE UMA OPCAO: ', 1,3)

    let novo_vetor = []
    if(escolhaUsuario === 1){
        const tamanho = obter_numero('TAMANHO: ')
        const min = obter_numero('MINIMO: ')
        const max = obter_numero_max('MAXIMO: ', min)
        novo_vetor = gerar_vetor(tamanho,min,max)

        return novo_vetor

    }else if(escolhaUsuario === 2){
        const tamanho = obter_numero('TAMANHO: ')
        const min = obter_numero('MINIMO: ')
        const max = obter_numero_max('MAXIMO: ', min)
        novo_vetor = gerar_vetor_valor_informado(tamanho,min,max)

        return novo_vetor

    }else{
        const nome_arquivo = obter_texto('DIGITE O CAMINHO COMPLETO DO ARQUIVO: ')
        novo_vetor = gerar_vetor_de_arquivoInformado(nome_arquivo)
        
        return novo_vetor
    }

}

export function mostrar_todos_valores(vetor){
    if(vetor.length === 0){
        return console.log('NAO HA NENHUM VALOR NO VETOR NUMERICO!')
    }else {
        print('>>>> ---- VALORES --- <<<<')
        mostrar_itens_vetor(vetor, "VETOR NUMERICO")
        print(`>>>> ------- <<<<`)
    }
}

export function resetar_vetor(){
    return []
}

export function mostrar_quantidade_vetor(vetor_numerico){
    let quantidade = calcular_quantidade_vetor(vetor_numerico)
    return print(`\n>>>>>> VETOR QUANTIDADE: ${quantidade} <<<<<<\n`)
}

export function mostrar_menorEmaior_e_posicoes(vetor){
    let posicao_do_maior = 0
    let posicao_do_menor = 0

    let maior_valor = 0
    let menor_valor = 0

    for(let i = 1; i < vetor.length;i++){

        if(vetor[i] > vetor[posicao_do_maior]){
            maior_valor = vetor[i]
            posicao_do_maior = i

        }else if(vetor[i] < vetor[posicao_do_menor]){
            menor_valor = vetor[i]
            posicao_do_menor = i
        }
    }

    const resultado = `\n>>> MAIOR VALOR: ${maior_valor} (POSICAO: ${posicao_do_maior})\n>>> MENOR VALOR: ${menor_valor} (POSICAO: ${posicao_do_menor})\n`
    return print(resultado)
}

export function mostrar_somatorio_dos_valores(vetor){
    let somatorio = calcular_somatorio_vetor(vetor)
    return print(`\n >>>>>> SOMATORIO DE ${vetor} : ${somatorio} <<<<<< \n`)
}

export function mostrar_media_valores(vetor){
    const media = calcular_media_vetor(vetor)
    return print(`\n >>>>>> MEDIA DE ${vetor}: ${media} <<<<<< \n`)
}

export function mostrar_valores_positivos_quantidade(vetor){

    const numeros_positivos = filtrar(vetor,eh_number_positivo)
    mostrar_itens_vetor(numeros_positivos,"NUMEROS POSIIVOS")
    
    const quantidade_positivos = calcular_quantidade_vetor(numeros_positivos)
    print(`--------------------\n`)
    return print(`QUANTIDADE: ${quantidade_positivos}`)
}

export function mostrar_valores_negativos_quantidade(vetor){
    const numeros_negativos = filtrar(vetor,eh_number_negativo)
    mostrar_itens_vetor(numeros_negativos,"NUMEROS NEGATIVOS")
    
    const quantidade_negativos = calcular_quantidade_vetor(numeros_negativos)
    print(`--------------------\n`)
    return print(`QUANTIDADE: ${quantidade_negativos}`)
}

export function multiplicar_valores_de_vetor(vetor,numero){

  const multiplicar_com_valor = gerar_multiplicacao_com(numero)

    let novo_vetor = mapear(vetor,multiplicar_com_valor)
    return novo_vetor
}

export function elevar_valores_de_vetor(vetor,numero){
    const elevar_com_valor = gerar_expoenciacao_com(numero)

    let novo_vetor = mapear(vetor,elevar_com_valor)
    return novo_vetor

}

export function reduzir_fracao(vetor,fracao){
    let fracao_array = fracao.split('/').map(Number)
    let novo_vetor = []
    let numerador = fracao_array[0] , denominador = fracao_array[1]
    for(let i = 0; i < vetor.length ; i++){
        const reduzido = ((vetor[i] * numerador) / denominador).toFixed(2)
        novo_vetor.push(reduzido)
    }
    return novo_vetor
}

export function substituir_numeros_negativos_por_aleatorio(vetor,min,max){

    const substituir_de_valor_pra = gerar_substituicao(min,max)

    let novo_vetor = []
    for(let i of vetor){
        if(eh_number_negativo(i)){
            novo_vetor.push(substituir_de_valor_pra(i))
        }else{
            novo_vetor.push(i)
        }
    }
    
    return novo_vetor
}

export function ordenar_vetor(vetor,ordem_tipo){

    if(ordem_tipo === 1){ //CRECENTE

        const novo_vetor = ordenar_vetor_ordem_crescente(vetor)
        mostrar_itens_vetor(novo_vetor,'VALORES EM ORDEM CRESCENTE')
        return novo_vetor

    }else if(ordem_tipo === 2){ //DECRECENTE
        const novo_vetor = ordenar_vetor_ordem_decrecente(vetor)
        mostrar_itens_vetor(novo_vetor,'VALORES EM ORDEM DECRECENTE')
        return novo_vetor

    }else if(ordem_tipo === 3){ //REVERSE
        const novo_vetor = reverter_vetor(vetor)
        mostrar_itens_vetor(novo_vetor,'VALORES REVERTIDOS')
        return novo_vetor
    }
}

export function embaralhar_vetor(vetor){
    let novo_vetor = []
    let min = 0 , max = vetor.length - 1

    let posicoes_ja_sorteadas = []

    while(novo_vetor.length !== vetor.length){
        
        const posicao_sorteada = gerar_numero_aleatorio(min,max)
        
        if(tem_number(posicoes_ja_sorteadas,posicao_sorteada) === false){ /// RETORNAR FALSE PORQUE QUERO APENAS i(NUMERO) QUE NAO TENHAM SIDO SORTEADOS //FUNÇAO NAO DEVE ACHAR i QUE JA FOI SORTEADO
            
            if(posicao_sorteada >= min && posicao_sorteada <= max){ //POSIÇAO DEVE ESTAR ENTRE O INTERVALO DO VETOR ORIGINAL
                
                posicoes_ja_sorteadas.push(posicao_sorteada)  //PUXAR NUMERO DE POSIÇAO
                novo_vetor.push(vetor[posicao_sorteada])  //PUXAR VALOR DA POSIÇAO
            }
        } 
    }

    return novo_vetor
}

export function adicionar_novos_valores(vetor){
    const quantidade = obter_numero('\nQUANTIDADE DE VALORES QUE DESEJA ADICIONA: ')
    let novo_vetor = vetor
    for(let i = 1 ; i <= quantidade;i++){
        const valor = obter_numero(`VALOR(${i}): `)
        novo_vetor.push(valor)
        print('>> ADICIONADO! <<')
    }

    return novo_vetor
}

export function remover_itens_valor_exato(vetor){
    
    const quantidade = obter_numero('\nQUANTIDADE DE VALORES QUE DESEJA REMOVER: ')
    let valoresRemover = []
    for(let i = 0; i < quantidade;i++){
        
        const valor_escolhido = obter_numero('\nINFORME O VALOR QUE DESEJE REMOVER: ')

        if(tem_number(vetor,valor_escolhido)){
            valoresRemover.push(valor_escolhido)
            print('\n>> ADICIONADO <<')
        }else{
            print('VALOR NAO ENCONTRADO!Tente Novamente')
            return remover_itens_valor_exato(vetor)
        }
        
    }

    let se_houver_remover_item = gerar_remover_item(valoresRemover)
    const novo_vetor = filtrar(vetor,se_houver_remover_item)

    return novo_vetor
}

export function remover_porPosicao(vetor){

    mostrar_itens_e_posicao_vetor(vetor,'POSICOES DO VETOR')

    const quantidade = obter_numero('\nQUANTIDADE DE VALORES QUE DESEJA REMOVER: \n')

    let posicoes_a_ser_excluidas = []
    for(let i = 0; i < quantidade ; i++){
        const posicaoEscolhida = obter_numero(`POSICAO: \n`)

        if(tem_posicao_number(vetor,posicaoEscolhida)){

            vetor[posicaoEscolhida] = obter_numero('VALOR: ')

        }else{

            print('\nPOSICAO NAO ENCONTRADO!Tente Novamente')
            return remover_porPosicao(vetor)
        }
    }

    let novo_vetor = []
    for(let i = 0; i < vetor.length;i++){
        if(tem_posicao_number(posicoes_a_ser_excluidas,i) === false){
            novo_vetor.push(vetor[i])
        }
    }

    return novo_vetor

}

export function editar_valor_posicao(vetor){
    mostrar_itens_e_posicao_vetor(vetor,'POSICOES DO VETOR')

    const posicaoEscolhida = obter_numero('POSICAO DO VALOR A EDITAR: ')

    let novo_vetor = []
    if(tem_posicao_number(vetor,posicaoEscolhida)){

        for(let i = 0; i < vetor.length ; i++){

            if(i === posicaoEscolhida){
                console.log(`\n>>> POSICAO ${posicaoEscolhida}(VALOR: ${vetor[posicaoEscolhida]}) SELECIONADA <<<\n`)
                novo_vetor.push(vetor[i] = obter_numero('DIGITE VALOR: '))
            }else{
                novo_vetor.push(vetor[i])
            }
        }

    }else{
        print('\nPOSICAO NAO ENCONTRADO!Tente Novamente')
        return editar_valor_posicao(vetor)
    }

    return novo_vetor
}

export function salvar_arquivo(vetor){
    let dados = ''
    for(let i of vetor){
        dados += `${i}\n`
    }
    print('Arquivo escrito com sucesso.\n')
    writeFileSync('vetor_numerico.txt' , dados)

}
