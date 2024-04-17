/*Uma companhia financeira debita um juro de 0.85% diário sobre o saldo não pago de um empréstimo.
Com um empréstimo de R$ 3.000,00, um pagamento de R$ 200,00 é feito todo dia útil. Escreva um
algoritmo que calcule quantos dias úteis são necessários para se concluir o pagamento do empréstimo.*/

import { get_number_inteiro, print } from "./utils/io_utils.js"

function main(){

const empretismo = get_number_inteiro(`Informe o valor do EMPRETISMO :`)
const pagamento_diario = get_number_inteiro(`Informe o valor do PAGAMENTO DIARIO:`)

const total_de_dias_uteis = calcular_dias_uteis_pagamento(empretismo,pagamento_diario)

print(`O TOTAL DE DIAS UTEIS NECESSARIAS PARA A CONCLUSAO : ${total_de_dias_uteis} dias`)

}

main()

function calcular_dias_uteis_pagamento(empretismo,pag_diario){

    let saldo = empretismo
    let diasuteis = 0

    while(saldo > 0 ){

        saldo -= pag_diario
        saldo *= (1 + (0.85 / 100))

        diasuteis++
    }

    return diasuteis
}