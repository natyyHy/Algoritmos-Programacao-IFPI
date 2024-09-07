import { question } from 'readline-sync'

export function get_number_min(msg, min){
    const numero = Number(question(msg))
    if(numero < min){
        print(`\n>>> Numero deve ser maior ou igual a ${min}!`)
        return get_number_min(msg,min)
    }
    return numero
}

export function get_text(msg){
    return question(msg)
}

export function print(msg){
    return console.log(msg)
}

export function random_number(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export function get_operation(msg){
    let entrada = question(msg).toUpperCase()
    let entrada_array = entrada.split('')
    if(entrada_array.length > 2){

        print('>> Possivel apenas 1 movimento!')
        return get_operation(msg)
        
    }else if((['R','G','B'].includes(entrada_array[0]) &&
                ['R','G','B'].includes(entrada_array[1])) === false){
        print('>> Item desconhecido!')
        return get_operation(msg)
    }else if(entrada_array[0] === entrada_array[1]){
        print('>> Itens nao podem ser IGUAIS!')
        return get_operation(msg)
    }
    
    return entrada
}

export function iniciar_itens(tamanho){
    let novo_vetor = []
    let itens = 'RGB'.split('')
    while(novo_vetor.length !== tamanho){
        novo_vetor.push(itens[random_number(0,2)])
    }
    return novo_vetor
}

export function iniciar_itens_aleatorio(){
    let novo_vetor = []
    let posicoes_ja_iniciadas = []
    let letras = ['R' , 'G' , 'B']
    while(novo_vetor.length !== letras.length){
        let posicao = random_number(0,2)
        if(tem_posicao(posicoes_ja_iniciadas,posicao) === false){
            novo_vetor.push(letras[posicao])
            posicoes_ja_iniciadas.push(posicao)
        }
    }
    return novo_vetor
}

function tem_posicao(vetor,posicao){
    for(let i = 0; i < vetor.length;i++){
        if(vetor[i] === posicao) return true
    }
    return false
}

export const e_igual = (vetor , criterio) => {
    let total = 0
    for(let i of vetor){
        if(criterio(i)) total++
    }
    if(total === vetor.length) return true
    return false
}

export const numero_jogadas_minimas = (tamanho) => {
   return 2**tamanho - 1
}

