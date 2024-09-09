import { question } from "readline-sync"

function main(){

    const operador = question().toUpperCase()
    let linhas = 12
    let colunas = 12
    let qtd = 0
    let somatorio = 0

    let matriz = gerar_matriz_vazia(linhas)
    for(let i = 0; i < linhas;i++){
        for(let j = 0; j < colunas; j++){
            matriz[i][j] = get_number()
        }
    }

    show_matriz(matriz)

    for(let i = 0; i < linhas;i++){
        for(let j = 0 ; j < colunas;j++){
            if((j > i) && (i + j) < linhas - 1){
                somatorio += matriz[i][j]
                qtd++
            }
        }
    }
    
    switch(operador){
        case 'S':
            console.log(`${somatorio.toFixed(1)}`)
            break;
        case 'M':
            console.log((calcular_media(somatorio,qtd)).toFixed(1))
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


function gerar_matriz_vazia(linhas){
    let matriz_nova = []
    for(let i = 0; i < linhas;i++){
        matriz_nova[i] = []
    }
    return matriz_nova
}


function show_matriz(matriz){
    for(let i = 0; i < matriz.length;i++){
        console.log( '\t' + matriz[i].join(' '))
    }
}