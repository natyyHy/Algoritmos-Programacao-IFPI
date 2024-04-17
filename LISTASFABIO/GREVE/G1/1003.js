import { question } from "readline-sync"

function main(){

//entrada
const A = get_number_inteiro(``)
const B = get_number_inteiro(``)

//processo
const SOMA = calcular_soma_dois_inteiros(A,B)

//saida
console.log(`SOMA = ${SOMA}`)

}

main()

function get_number_inteiro(mensagem){

    return parseInt(question(mensagem))
}

function calcular_soma_dois_inteiros(numero_1,numero_2){

    return numero_1 + numero_2
}