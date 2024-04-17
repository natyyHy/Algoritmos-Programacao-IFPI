import { get_number_inteiro } from "../utils/io_utils.js"

function main(){

let valorate100 = 1
let posicao = 0
let maior_numero = 0
while(valorate100 <= 100){

    let numero = get_number_inteiro(``)
    if(numero > maior_numero){
        maior_numero = numero
        posicao = valorate100
    }
    valorate100++
}

console.log(`${maior_numero}`)
console.log(`${posicao}`)

}

main()