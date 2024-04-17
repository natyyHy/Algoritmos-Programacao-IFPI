import { question } from "readline-sync"
import { get_number_inteiro } from "../utils/io_utils.js"


function main(){

    let numero_N = get_number_inteiro(``)
    
    while(numero_N >= 1){

        const entrada = question(``)
        const valores = entrada.split(" ")

        const valor_1 = parseFloat(valores[0])
        const valor_2 = parseFloat(valores[1])
        const valor_3 = parseFloat(valores[2])

        const resultado_mediaPonderada = ((valor_1*2)+(valor_2*3)+(valor_3*5)) / 10
        console.log(`${resultado_mediaPonderada.toFixed(1)}`)
        numero_N--
    }

}

main()