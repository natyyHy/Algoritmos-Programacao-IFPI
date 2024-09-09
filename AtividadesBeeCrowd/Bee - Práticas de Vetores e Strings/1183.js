import { question } from "readline-sync"

function main(){

    const operador = question()
    let linhas = 12
    let colunas = 12

    let matriz = gerar_matriz_vazia(linhas)
    for(let i = 0; i < linhas;i++){
        for(let j = 0; j < colunas; j++){
            matriz[i][j] = get_number()
        }
    }

    console.log(matriz)
    switch(operador){
        case 'S':
            console.log((calcular_soma_diagonalPrincipal(linhas,colunas,matriz)).toFixed(1))
            break;
        case 'M':
            const somatorio = calcular_soma_diagonalPrincipal(linhas,colunas,matriz)
            const quantidade = quantidade_valoresDiagonalPrincipal(linhas,colunas,matriz)
            console.log(calcular_media(somatorio,quantidade).toFixed(1))
            break;
    }

}

main()

function get_number(){
    return Number(question())
}

function calcular_media(somatorio,quantidade){
    return somatorio / quantidade
}

function calcular_soma_diagonalPrincipal(linhas,colunas,matriz){
    let somatorio = 0
    for(let i = 0;i < linhas;i++){
        for(let j = i + 1; j < colunas;j++){
            somatorio += matriz[i][j]
        }
    }
    return somatorio
}

function quantidade_valoresDiagonalPrincipal(linhas,colunas,matriz){
    let quantidade = 0
    for(let i = 0;i < linhas;i++){
        for(let j = i + 1; j < colunas;j++){  
         quantidade++
        }
    }
    return quantidade
}

function gerar_matriz_vazia(linhas){
    let matriz_nova = []
    for(let i = 0; i < linhas;i++){
        matriz_nova[i] = []
    }
    return matriz_nova
}