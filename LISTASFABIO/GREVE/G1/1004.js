import { question } from "readline-sync"

function main(){

//entrada
const valor_1 = get_number_inteiro(``)
const valor_2 = get_number_inteiro(``)

//processo
const PROD = calcular_produto(valor_1,valor_2)

//saida
console.log(`PROD = ${PROD}`)
}

main()

function get_number_inteiro(mensagem){

    return parseInt(question(mensagem))
}

function calcular_produto(numero_1,numero_2){

    return numero_1 * numero_2
}