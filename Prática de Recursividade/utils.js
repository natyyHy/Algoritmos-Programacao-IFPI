import { question } from 'readline-sync'

export function get_number(msg){
    return Number(question(msg))
}

export function print(msg){
    return console.log(msg)
}

export function random_number(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export function filter(vetor,criterio){
    for(let i of vetor){
        (criterio(i)) ? true : false
    }
}