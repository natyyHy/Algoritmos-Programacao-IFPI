import {tem_posicao} from './utils_string.js'

export function get_atributo_vetor_objeto(objeto,atributo){
    let novo_arr = []

    for(let i = 0; i < objeto.length;i++){
        let arr = objeto[i]
        novo_arr.push(arr[atributo])
    }
    return novo_arr
}

export function mapear(vetor,transformacao){
    let novo_arr = []
    for(let i = 0; i < vetor.length;i++){
        novo_arr.push(transformacao(vetor[i]))
    }
    return novo_arr
}

export function filter(vetor,atributo,criterio){
    let novo_arr = []
    for(let i = 0; i < vetor.length;i++){
        let arr = vetor[i]
        if(criterio(arr[atributo])){
            novo_arr.push(arr[atributo])
        }
    }
    return novo_arr
}

export function reduce(vetor,funcao,valor_inicial){
    let acumulador = valor_inicial
    for(let i = 0;i < vetor.length;i++){
        acumulador = funcao(acumulador, vetor[i])
    }
    return acumulador
}

export function show_vetor(titulo,vetor){
    console.log(titulo)
    for(let i of vetor){
        console.log(`\t${i}`)
    }
}

export function show_vetor1_vetor2(titulo, vetor1, vetor2, mensagem_opcional = ''){
    console.log(titulo)
    for (let i = 0; i < vetor1.length; i++){
        if (mensagem_opcional.length > 0) {
            console.log(`\t${vetor1[i]} - ${vetor2[i]} ${mensagem_opcional}`)
        } else {
            console.log(`\t${vetor1[i]} - ${vetor2[i]}`)
        }
    }
}


export function get_names_movies(arr,atributo_comparador,atributo_retornador,arr_ordenado){
    let nomes = []
    let filmes_utilizados = []

    for(let i = 0; i < arr_ordenado.length;i++){
        for(let j = 0; j < arr.length;j++){
            let filme = arr[j]
            if(tem_posicao(filmes_utilizados,j) === false && (Number(filme[atributo_comparador]) === arr_ordenado[i])){
                nomes.push(filme[atributo_retornador])
                filmes_utilizados.push(j)
                break;
            }
        }
    }
    return nomes
}