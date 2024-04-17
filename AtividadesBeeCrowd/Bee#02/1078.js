import { get_number_inteiro } from "../utils/io_utils.js"

function main(){

const numero_N = get_number_inteiro(``)
if(numero_N < 2 || numero_N > 1000){

    console.log(`invalido`)

}else{
    let contagem1_a_10 = 1
    while(contagem1_a_10 <= 10 ){

        const resultado = numero_N * contagem1_a_10
        console.log(`${contagem1_a_10} x ${numero_N} = ${resultado}`)

        contagem1_a_10++
    }

}


}

main()