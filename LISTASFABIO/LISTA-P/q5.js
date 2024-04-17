import { get_number, print } from "./utils/io_utils.js"

//Leia um número, calcule e escreva seu fatorial.

function main(){

//entrada
const numero_informado = get_number(`NUMERO: `)

//processo e saida

const fatorial_numero = calcular_fatorial(numero_informado)

print(`FATORIAL DE ${numero_informado} --> ${fatorial_numero}`)


}

main()

function calcular_fatorial(numero){

    let fatorial = 1
    let limite = numero
   for(let i = 1; i <= limite ;i++  ){

        print(`${i} x`)
        print(`------------`)
        fatorial *= i
   }

       return fatorial
}