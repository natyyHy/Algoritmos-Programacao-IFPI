import { question } from "readline-sync"

function main(){

//entrada
const A = get_number_inteiro(``)
const B = get_number_inteiro(``)

//processo
const X = calcular_soma_dois_numeros(A,B)

//SAIDA
console.log(`X = ${X}`)

}

main()

function get_number_inteiro(mensagem){

    return parseInt(question(mensagem))
}

function calcular_soma_dois_numeros(numero_1,numero_2){

    return numero_1 + numero_2

}