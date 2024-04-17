import { get_number_inteiro } from "./utils/io_utils.js"

function main(){

let numero_acasos = get_number_inteiro(``)

let total_in = 0
let total_out = 0

while(numero_acasos > 0){

    let valor_X = get_number_inteiro(``)

    if (valor_X >= 10 && valor_X <= 20) {
        total_in++
    } else {
        total_out++
    }

    numero_acasos--
}

console.log(`${total_in} in`)
console.log(`${total_out} out`)

}

main()