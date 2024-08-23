//funções para entrada e saída de dados

import { question } from "readline-sync";

export function obter_numero(mensagem){
    return Number(question(mensagem))
}

export function obter_numero_min_max(mensagem , min , max){
    const numero = obter_numero(mensagem)
    if(numero < min || numero > max){
        console.log('VALOR ACIMA OU ABAIXO DO LIMITE!')
        return obter_numero_min_max(mensagem,min,max)
    }
    
    return numero
}

export function obter_numero_max(mensagem,min){
    const maximo = obter_numero(mensagem)
    if(maximo < min){
        console.log('Maximo deve ser MAIOR!')
        return obter_numero_max(mensagem,min)
    }

    return maximo
}

export function gerar_numero_aleatorio(min,max){
    return Math.floor(Math.random() * ((max + 1) - min)) + min
}

export function obter_texto(mensagem){
    return question(mensagem)
}