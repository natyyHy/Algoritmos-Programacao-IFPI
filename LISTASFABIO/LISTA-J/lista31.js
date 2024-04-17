/*Escreva um algoritmo que leia um número decimal (até 3 dígitos) e escreva o seu equivalente em
numeração romana. Utilize funções para obter cada dígito do número decimal e para a transformação
de numeração decimal para romana (Dica: 1 = I, 5 = V, 10 = X, 50 = L, 100 = C, 500 = D, 1.000 = M).*/

import { get_number, print } from "./utils/io_utils.js"

function main(){

while(true){ 
const entrada_numero_decimal = get_number(`Informe um numero ate 3 DIGITOS (-1 para sair):`) 
    if(entrada_numero_decimal > 999){

        print(` ERROR! Numero de ate 3 DIGITOS !`)
        break;
    }

    if(entrada_numero_decimal === -1){

        print(`== FIM ==`)
        break;
    }

        const centenas = Math.floor(entrada_numero_decimal / 100)
        const dezenas = Math.floor((entrada_numero_decimal % 100) / 10)
        const unidades = entrada_numero_decimal % 10

        const romano_centena = converterDigitosEmRomanos(centenas,`C`,`D`,`M`)
        const romano_dezena = converterDigitosEmRomanos(dezenas,`X`,`L`,`C`)
        const romano_unidade = converterDigitosEmRomanos(unidades,`I`,`V`,`X`)
    
//saida
const resultado = (`
================================
NUMERO DECIMAL --> ${entrada_numero_decimal}
EM NUMERACAO ROMANA --> ${romano_centena}${romano_dezena}${romano_unidade}
===============================`)

print(resultado)

}


}
main()

function converterDigitosEmRomanos(digito,unidade,cinco,dez){

    if(digito === 1) return unidade;
    if(digito === 2) return unidade + unidade
    if(digito === 3) return unidade + unidade + unidade
    if(digito === 4) return unidade + cinco
    if(digito === 5) return cinco
    if(digito === 6) return cinco + unidade
    if(digito === 7 ) return cinco + unidade + unidade
    if(digito === 8) return cinco + unidade + unidade + unidade
    if(digito === 9 ) return cinco + dez
    return `` // se digito for 0
}