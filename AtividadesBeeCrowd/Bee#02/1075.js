
import {get_number_inteiro} from "./utils/io_utils.js"

const numero_N = get_number_inteiro(``)

if(numero_N > 10000){

    console.log(`invalido`)

}else{

    let numero1a10000 = 1
    while(numero1a10000 <= 10000 ){

        if(numero1a10000 % numero_N === 2){
            console.log(`${numero1a10000}`)
        }
        numero1a10000++
    }

}