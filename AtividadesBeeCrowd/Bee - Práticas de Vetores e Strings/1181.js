import { question } from "readline-sync"

function main(){
    
    let linha = 12
    let coluna = 12
    
    const linha_escolhida = get_number()
    const operacao = question()

    let matriz = gerar_matriz_vazia(linha)

    for(let i = 0;i < linha;i++){
        for(let j = 0;j < coluna;j++){
            matriz[i][j] = get_number()
        }
    }

    switch(operacao){
        case 'S':
            console.log((calcular_somatorio_linhaX_matriz(linha_escolhida,linha,matriz)).toFixed(1))
            break;
        case 'M':
            console.log((calcular_media_linhaX_matriz(linha_escolhida,linha,matriz)).toFixed(1))
    }
}

main()

function get_number(mensagem){
    return Number(question(mensagem))
}

function calcular_media_linhaX_matriz(linha_user,linha,matriz){
    let somatorio = calcular_somatorio_linhaX_matriz(linha_user,linha,matriz)
    let quantidade = 0
    for(let i = 0;i < linha;i++){
        if(matriz[i]){
            quantidade++
        }
    }
    return somatorio / quantidade
}

function calcular_somatorio_linhaX_matriz(linha_user,linha,matriz){
    let somatorio = 0
    for(let i = 0; i < linha;i++){
        if(i === linha_user){
            somatorio += reduzir(matriz[i],(elem1 , elem2) => elem1 + elem2, 0)
        }
    }
    return somatorio
}

function gerar_matriz_vazia(linhas){
    let matriz = []
    for(let i = 0; i < linhas;i++){
        matriz[i] = []
    }
    return matriz
}

function reduzir(vetor,funcao,valor_inicial){
    let acumulador = 0
    for(let i of vetor){
        acumulador += funcao(i,valor_inicial)
    }
    return acumulador
}