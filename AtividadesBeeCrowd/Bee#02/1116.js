import { question } from "readline-sync"
import { get_number_inteiro } from "./utils/io_utils.js"

function main(){

let numero_acasos = get_number_inteiro(``)

while(numero_acasos >= 1 ){

    const valores = question(``).split(" ")
    const valor_X = parseInt(valores[0])
    const valor_Y = parseInt(valores[1])

    if(valor_Y === 0 ){
     
        console.log(`divisao impossivel`)
    }else{
        let divisao = valor_X / valor_Y
        console.log(divisao.toFixed(1))

    }
    
    numero_acasos--
}

}

main()