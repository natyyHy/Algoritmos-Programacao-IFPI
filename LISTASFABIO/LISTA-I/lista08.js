//Leia um numero X e, a seguir, leia e escreva uma lista de números com o término da lista ocorrendo
//quando a soma de dois números consecutivos da lista for igual a X.

import { get_number , print } from "./utils/io_utils.js"

function main(){

//entrada
print(` >>>>> SOMA DE DOIS NUMEROS CONSECUTIVOS SER IGUAL A X <<<<<`)

const numero_X = get_number(`Informe o numero X : `) 

//processo

const resultado = calcular_Soma_Consecutiva(numero_X)

//saida
print(`-----------------`)
print(`SOMA : ${resultado}`)

}

main()

function calcular_Soma_Consecutiva(numero){

    let contagem = 1;
    let soma = 0;
    let resultado = 0;
    while(soma <= numero){
            print(`| ${contagem} = ${soma}|`)
            soma += contagem
            resultado = soma - contagem
            contagem++

    }
    return resultado


}