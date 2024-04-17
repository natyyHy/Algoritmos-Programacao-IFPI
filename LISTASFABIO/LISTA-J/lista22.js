//Leia 2 números inteiros e escreva o quociente e o resto da divisão dos mesmos, sem que os operadores
//de divisão (/ e %) sejam utilizados.

import { get_number_inteiro, print } from "./utils/io_utils.js"

function main(){

const numero_1 = get_number_inteiro(`Informe o numero (1) : `)
const numero_2 = get_number_inteiro(`Informe o numero (2) : `)

const resultado = calcular_divisao(Math.abs(numero_1),Math.abs(numero_2))  // MATH ABS PARA CONVERTER NUMERO NEGATIVO EM POSITIVO 

//saida
print(`DIVISAO -> ${numero_1} / ${numero_2} | Quociente -> ${resultado.quociente} | Resto -> ${resultado.resto}`)

}

main()

function calcular_divisao(dividendo,divisor){

    let quociente = 0

    while(dividendo >= divisor){

        dividendo -= divisor
        quociente++

    }

    const resto = dividendo

    return { quociente , resto }
}