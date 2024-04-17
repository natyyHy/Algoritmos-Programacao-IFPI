import { question } from "readline-sync"
import { calcular_percentual, get_number_inteiro } from "./utils/io_utils.js"

function main(){

let numero_acasos = get_number_inteiro(``)


let total_coelhos = 0
let total_ratos = 0
let total_sapo = 0
let quantidade_cobaia = 0

while(numero_acasos >= 1 ){

    const entrada = question(``)
    const valores = entrada.split(" ")
    let quantia = parseInt(valores[0])
    const tipo_cobaia = valores[1]

        if(tipo_cobaia === `C`){
            total_coelhos += quantia

        }

        if(tipo_cobaia === `R`){

            total_ratos += quantia
        }

        if(tipo_cobaia === `S`){

            total_sapo += quantia
        }
    
    quantidade_cobaia += quantia

    numero_acasos--
}

const percentual_coelhos = calcular_percentual(total_coelhos,quantidade_cobaia)
const percentual_ratos = calcular_percentual(total_ratos,quantidade_cobaia)
const percentual_sapos = calcular_percentual(total_sapo,quantidade_cobaia)


const resultado =
(`Total: ${quantidade_cobaia} cobaias
Total de coelhos: ${total_coelhos}
Total de ratos: ${total_ratos}
Total de sapos: ${total_sapo}
Percentual de coelhos: ${percentual_coelhos} %
Percentual de ratos: ${percentual_ratos} %
Percentual de sapos: ${percentual_sapos} %`)

console.log(resultado)

}

main()

function calcular_percentual(quantidade,quantidade_total){

    return ((quantidade/quantidade_total) * 100).toFixed(2)

   
}
