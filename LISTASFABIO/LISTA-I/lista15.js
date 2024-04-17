//Leia um número (entre 0 e 255) na base decimal, calcule e escreva este número na base binária
//e na base hexadecimal.

import { get_number_inteiro, get_number_min , print } from "./utils/io_utils.js"

function main(){

//VERIFICAÇAO NUMERO 0 A 255
let numero_base_decimal = get_number_min(`Informe o numero da BASE DECIMAL (0 a 255):`,0)

    if(numero_base_decimal > 255){

        print(`Numero Decimal Invalido!`)
        return
    }

//CALCULAR BASE BINARIA
const resultado_numero_base_binaria = converter_para_reverso(calcular_base_binaria(numero_base_decimal))

//CALCULAR BASE HEXDECIMAL
const resultado_numero_base_hexadecimal = converter_para_reverso(calcular_base_hexadecimal(numero_base_decimal))

//SAIDA
print(`==================================================`)
print(` NUMERO BASE DECIMAL INFORMADO : ${numero_base_decimal}`)
print(` BASE BINARIA --- > ${resultado_numero_base_binaria}`)
print(` BASE HEXADECIMAL ---> ${resultado_numero_base_hexadecimal}`) 


}

main()



function converter_para_reverso(numero){

    return numero.split('').reverse().join('')
}



function calcular_base_binaria(numero_decimal){

    let divisao = numero_decimal //1 ESTADO ANTERIOR
    let mensagem = ``
    while(divisao > 0 ){ //2.EXPRESSAO DE CONTINUIDADE

        //trabalho
        if(divisao % 2 === 0 ){

            mensagem += `0`
        }else{

            mensagem += `1`
        }
        //convergencia de dados
        divisao = Math.floor(divisao / 2)

    }

    return mensagem
}

function calcular_base_hexadecimal(numero_decimal){

    let divisao = numero_decimal //estado anterior
    let mensagem = ``

    while(divisao > 0 ){  //continuidade
        mensagem += (divisao % 16) //trabalho

        divisao = Math.floor(divisao / 16) //convergencia

    } 

    return mensagem
}