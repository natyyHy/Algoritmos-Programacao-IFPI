import { question } from "readline-sync"

function main(){
    
    let linha = 12
    let coluna = 12
    
    const coluna_escolhida = get_number()
    const operacao = question()

    let matriz = gerar_matriz_vazia(linha)

    for(let i = 0;i < linha;i++){
        for(let j = 0;j < coluna;j++){
            matriz[i][j] = get_number()
        }
    }

    console.log(matriz)
    switch(operacao){
        case 'S':
            console.log((calcular_somatorio_colunaX_matriz(coluna_escolhida,coluna,linha,matriz)).toFixed(1))
            break;
        case 'M':
            const somatorio = calcular_somatorio_colunaX_matriz(coluna_escolhida,coluna,linha,matriz)
            console.log((calcular_media(somatorio,coluna)).toFixed(1))
            break
    }
}

main()

function get_number(mensagem){
    return Number(question(mensagem))
}

function calcular_somatorio_colunaX_matriz(coluna_user,colunas,linhas,matriz){
    let somatorio = 0
    for(let i = 0; i < linhas;i++){
        let vetor_linhaAtual = matriz[i]
        for(let j = 0;j < colunas;j++){
            if(j === coluna_user){
                somatorio += vetor_linhaAtual[j]
            }
        }
    }
    return somatorio
}

function calcular_media(somatorio,quantidade){
    return somatorio / quantidade
}

function gerar_matriz_vazia(linhas){
    let matriz = []
    for(let i = 0; i < linhas;i++){
        matriz[i] = []
    }
    return matriz
}
