//Leia um valor inteiro N. Apresente o quadrado de cada um dos valores pares, de 1 até N, inclusive N, se for o caso.

import {get_number_inteiro} from "./utils/io_utils.js"

const numero_N = get_number_inteiro(``)

if(numero_N < 1 || numero_N > 2000){

    console.log(`Invalido`)

}else{

    let resultado = []
    let contador_num_N = numero_N
    while(contador_num_N > 1){

        if(contador_num_N % 2 === 0 ){

            const raizquadrada = contador_num_N ** 2 
            resultado.push(`${contador_num_N}^2 = ${raizquadrada}`)
        }

        contador_num_N--
    }

    resultado.reverse().forEach(resultado => console.log(resultado))
}