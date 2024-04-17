
import {get_number_inteiro, print} from "../utils/io_utils.js"

function main() {
    

const numero_X = get_number_inteiro(`Informe o numero X :`)

if(numero_X < 1 || numero_X > 1000){

    print(`Numero INVALIDO`)

}else{

    let divisao = 1
    while(divisao <= numero_X){

        if(divisao % 2 === 1){
            print(`${divisao}`)
        }

        divisao++
    }

}




}
main()