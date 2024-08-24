//funções relacionadas às operações que serão chamadas na aplicação (vetor_app.js)
    
import { writeFileSync } from "fs"
import { calcular_media, gerar_numero_aleatorio, obter_numero, obter_numero_max, obter_numero_min_max, obter_texto } from "./utils.js"
import { eh_numero_negativo, eh_numero_positivo, filter, gerar_elevar_com, gerar_multiplicacao_com, gerar_numero_nao_igual_a, gerar_reducao_fracao, gerar_se_tem_number, gerar_vetor_de_arquivoInformado, gerar_vetor_valor_informado, gerar_vetor_valores_aleatorios, identificar_posicao_vetor, inverter_vetor, maior, mapear, menor, mostrar_itens, reduzir, somar, tem_number, tem_posicao_number } from "./vetor_utils.js"
import { mostrar_itens_e_posicao_vetor } from "../versaoTradicional/vetor_utils.js"


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
        novo_vetor = gerar_vetor_valores_aleatorios(tamanho,min,max)

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

export function mostrar_valores(vetor){
   if(vetor.length === 0) return print('\n >>> NAO HA NENHUM VALOR NO VETOR <<<\n')
   mostrar_itens(vetor,"VETOR NUMERICO")
}

export function resetar_vetor(){
    return []
}

export function mostrar_quantidade_vetor(vetor){

    mostrar_itens(vetor,'QUANTIDADE VETOR')
    return print(`QUANTIDADE: ${vetor.length}`)
}

export function mostrar_menorEmaior_e_posicoes(vetor){

    let valor_inicial = vetor[0]
    const menor_valor = reduzir(vetor,menor, valor_inicial)
    const posicao_menor_valor = identificar_posicao_vetor(vetor,menor_valor)

    const maior_valor = reduzir(vetor,maior,valor_inicial)
    const posicao_maior_valor = identificar_posicao_vetor(vetor,maior_valor)

    mostrar_itens_e_posicao_vetor(vetor,'MENOR VALOR E MAIOR VALOR DO VETOR')
    return print(`\nMENOR VALOR : ${menor_valor} (POSICAO : ${posicao_menor_valor})\nMAIOR VALOR : ${maior_valor} (POSICAO : ${posicao_maior_valor})`)
}

export function mostrar_somatorio_dos_valores(vetor){

    let valor_inicial = vetor[0]
    const somatorio = reduzir(vetor,somar,valor_inicial)

    mostrar_itens(vetor,'SOMATORIO DO VETOR')
    return print(`SOMATORIO: ${somatorio}`)
}

export function mostrar_media_valores(vetor){

   const somatorio = reduzir(vetor,somar,vetor[0])
   const quantidade = vetor.length
   const media = calcular_media(somatorio,quantidade)

   mostrar_itens(vetor,'MEDIA DO VETOR')
   print(`MEDIA: ${media}`)
}

export function mostrar_valores_positivos_quantidade(vetor){

    const numeros_positivos = filter(vetor,eh_numero_positivo)
    mostrar_itens(numeros_positivos,'VALORES POSITIVOS DO VETOR')
    return print(`QUANTIDADE: ${numeros_positivos.length}`)

}

export function mostrar_valores_negativos_quantidade(vetor){
    const numeros_negativos = filter(vetor,eh_numero_negativo)
    mostrar_itens(numeros_negativos,'VALORES NEGATIVOS DO VETOR')
    return print(`QUANTIDADE: ${numeros_negativos.length}`)
}

export function multiplicar_valores_de_vetor(vetor,numero){

    const multiplicar = gerar_multiplicacao_com(numero)
    const numeros_multiplicados = mapear(vetor,multiplicar)
    mostrar_itens(numeros_multiplicados,`VALORES MULTIPLICADOS POR ${numero}`)
    return numeros_multiplicados
}

export function elevar_valores_de_vetor(vetor,numero){

   const elevar_numero = gerar_elevar_com(numero)
   const numeros_elevados = mapear(vetor,elevar_numero)
   mostrar_itens(numeros_elevados,`VALORES ELEVADOS POR ${numero}`)
   return numeros_elevados

}

export function reduzir_fracao(vetor,fracao){
    
    let fracao_em_vetor = fracao.split('/').map(Number)
    let numerador = fracao_em_vetor[0] , denominador = fracao_em_vetor[1]
    const reduzir = gerar_reducao_fracao(numerador,denominador)
    const numeros_reduzidos = mapear(vetor,reduzir)
    mostrar_itens(numeros_reduzidos,`VALORES REDUZIDOS POR FRACAO ${fracao}`)
    return numeros_reduzidos
}

export function substituir_numeros_negativos_por_aleatorio(vetor,min,max){
    const numeros_negativos = filter(vetor,eh_numero_negativo)

    let novo_vetor = []
    for(let i = 0; i < vetor.length;i++){
        if(tem_number(numeros_negativos,vetor[i])){
            novo_vetor.push(vetor[i] = gerar_numero_aleatorio(min,max))
        }else{
            novo_vetor.push(vetor[i])
        }
    }
    return novo_vetor
}

export function ordenar_vetor(vetor,ordem_tipo){

    if(ordem_tipo === 1){
        let vetor_atual = vetor
        let ordem_crecente = []

        while(ordem_crecente.length !== vetor.length){

            let valor_inicial = vetor_atual[0]
            const menor_valor = reduzir(vetor_atual,menor, valor_inicial)
            ordem_crecente.push(menor_valor)

            const numero_nao_igual = gerar_numero_nao_igual_a(menor_valor)

            vetor_atual = filter(vetor_atual,numero_nao_igual)
        
        }

        mostrar_itens(ordem_crecente,'VALORES EM ORDEM CRECENTE')
        return ordem_crecente

    }else if(ordem_tipo === 2){
        let vetor_atual = vetor
        let ordem_decresente = []

        while(ordem_decresente.length !== vetor.length){

            let valor_inicial = vetor_atual[0]
            const maior_valor = reduzir(vetor_atual,maior, valor_inicial)
            ordem_decresente.push(maior_valor)

            const numero_nao_igual = gerar_numero_nao_igual_a(maior_valor)

            vetor_atual = filter(vetor_atual,numero_nao_igual)
        
        }

        mostrar_itens(ordem_decresente,'VALORES EM ORDEM DECRECENTE')
        return ordem_decresente

    }else if(ordem_tipo === 3){

        const numeros_revertidos = inverter_vetor(vetor)
        mostrar_itens(numeros_revertidos,'VALORES REVERTIDOS')
        return numeros_revertidos
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
   
    let opcao = -1
   let novo_vetor = vetor
   while(opcao !== 2){
    print('(1)-ADICIONAR NUMERO\n(2)-SAIR\n')
        opcao = obter_numero_min_max('OPCAO: ' , 1 , 2)
        if(opcao === 1){
            novo_vetor.push(obter_numero('\nVALOR A ADICIONAR: \n'))
            print('\n>>> VALOR ADICIONADO <<<\n')
        }
   }
   print('Encerrando...')
   return novo_vetor
}

export function remover_itens_valor_exato(vetor){

   mostrar_itens(vetor,'ESCOLHA ITENS QUE DESEJA REMOVER')
   
   let novo_vetor = vetor
   let opcao = -1
   
   while(opcao !== 2){

        print(`(1)-ESCOLHER ITEM\n(2)-SAIR`)
        opcao = obter_numero_min_max('OPCAO: ',1 , 2)

            if(opcao === 1){

                const item = obter_numero('\nITEM: ')

                if(tem_number(novo_vetor,item)){

                    novo_vetor = filter(novo_vetor, valor => valor !== item)
                    mostrar_itens(novo_vetor,'VALORES ATUAIS')

                }else{

                    print('VALOR NAO ENCONTRADO!Tente Novamente')
                    return remover_itens_valor_exato(vetor)
                }
                
            }
        }

   return novo_vetor
}

export function remover_porPosicao(vetor){
    mostrar_itens_e_posicao_vetor(vetor,'ESCOLHA A POSICAO DO VALOR QUE DESEJA REMOVER')

    let novo_vetor = vetor
    let opcao = -1
    while(opcao !== 2){
        print('\n(1)-ESCOLHER POSICAO\n(2)-SAIR')
        opcao = obter_numero_min_max('OPCAO: ',1 , 2)
        if(opcao === 1){
            const posicao = obter_numero_min_max('POSICAO: ' , 0 , novo_vetor.length)
            if(tem_posicao_number(novo_vetor,posicao)){

                const valor_da_posicao = novo_vetor[posicao]
                novo_vetor = filter(novo_vetor, valor => valor !== valor_da_posicao)
                mostrar_itens_e_posicao_vetor(novo_vetor,'POSICAOES DOS VALORES ATUAIS')

            }else{
                print('\n>>> POSICAO NAO ENCONTRADA <<<')
                return remover_porPosicao(vetor)
            }
        }
    }

    return novo_vetor
   
}

export function editar_valor_posicao(vetor){
    mostrar_itens_e_posicao_vetor(vetor,'ESCOLHA A POSICAO DO VALOR QUE DESEJA EDITAR')

    let opcao = -1
    while(opcao !== 2){
        print('\n(1)-ESCOLHER POSICAO\n(2)-SAIR')
        opcao = obter_numero_min_max('OPCAO: ',1 , 2)
        if(opcao === 1){

            const posicao = obter_numero_min_max('POSICAO: ' , 0 , vetor.length)
            
            if(tem_posicao_number(vetor,posicao)){

                vetor[posicao] = obter_numero('VALOR: ')
                print(`\n>>> VALOR NA POSICAO ${posicao} EDITADO PARA ${vetor[posicao]} <<<\n`)
                    
                mostrar_itens_e_posicao_vetor(vetor,'VALORES ATUAIS')

            }else{
                print('\n>>> POSICAO NAO ENCONTRADA <<<')
                return remover_porPosicao(vetor)
            }
        }
    }

    return vetor
}

export function salvar_arquivo(vetor){
    let dados = ''
    for(let i of vetor){
        dados += `${i}\n`
    }
    print('Arquivo escrito com sucesso.\n')
    writeFileSync('vetor_numerico.txt' , dados)

}
