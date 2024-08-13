import { question } from "readline-sync"

export function print(texto){
    return console.log(texto)
}

 export function get_number(number){

    return Number(question(number))
 }



export function get_number_positive(mensagem){

    const numero = get_number(mensagem)

    if (numero < 0 ){

        print(`Valor deve ser maior que 0!!!`)
        return get_number_positive(mensagem)
        }

    return numero
          

}

export function around_number(number, decimal_places=2){

    return number.toFixed(decimal_places)
}

export function get_number_min(mensagem,number_inferior){

    const number = get_number(mensagem)
    if(number < number_inferior){
        print(`Valor Invalido! `)
        return get_number_min(mensagem,number_inferior)
    }else{

        return number
    }
}

export function get_number_inteiro(mensagem){

    return parseInt(question(mensagem))
}

export function obter_texto(texto){

    return question(texto)
}


export function obter_valor_tipoArray(entrada){
    return question(entrada).split(" ").map(Number)
}

export function calcularPorcentagem(quantidade,total){
    return (quantidade / total) * 100
}