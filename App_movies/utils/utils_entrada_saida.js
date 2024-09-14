import { question } from "readline-sync"

export function print(texto){
    return console.log(texto)
}

 export function get_number(mensagem){

    return Number(question(mensagem))
 }

export function get_number_positive(mensagem){

    const numero = get_number(mensagem)

    if (numero <= 0 ){

        print(` Valor Invalido!`)
        return get_number_positive(mensagem)
        }else{

            return numero
        }    

}

export function around_number(number, decimal_places=2){

    return number.toFixed(decimal_places)
}

export function get_number_min_max(mensagem,min,max){

    const number = get_number(mensagem)
    if(number < min || number > max){
        print(`Valor Invalido! `)
        return get_number_min_max(mensagem,min,max)
    }
    return number
}

export function get_number_inteiro(mensagem){

    return parseInt(question(mensagem))
}

export function get_text(mensagem){
    return question(mensagem)
}