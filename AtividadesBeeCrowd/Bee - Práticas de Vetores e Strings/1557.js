import { question } from "readline-sync"

function main(){

    let n = get_number_min_max('',0,15)

    let matriz = []
    let valor = 0

    for(let i = 0; i < n;i++){
        let linha = []
        for(let j = 0; j < n;j++){
            if(i === j){
                linha.push(2**j)
            }
        }
        matriz.push(linha)
    }

    show_matriz(matriz)

}

main()

function get_number_min_max(msg,min,max){
    const entrada = Number(question(msg))
    if(entrada < min || entrada > max) return get_number_min_max(msg,min,max)
        return entrada
}

function print(msg){
    return console.log(msg)
}

function show_matriz(matriz){
    for(let linha of matriz){
        print(linha.join(' '))
    }
}