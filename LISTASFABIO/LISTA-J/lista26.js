/*Cada espectador de um cinema respondeu a um questionário no qual constava sua idade e a sua opinião
em relação ao filme (1=ótimo, 2=bom, 3=regular, 4=péssimo). Escreva um algoritmo que leia a idade e
a opinião das pessoas, calcule e mostre ao final: (FLAG: idade = -1).
· a média das idades das pessoas que responderam ótimo;
· a quantidade de pessoas que respondeu regular;
· o percentual de pessoas que respondeu bom entre os entrevistados.*/

import { get_number, print } from "./utils/io_utils.js"

function main(){

let numeros_idade = 0
let resposta_opiniao;
let respostas_otimo = 0
let respostas_regular = 0
let respostas_bom = 0

while(true){

    print(` ====== QUESTIONARIO CINEPOLIS ======`)
    const entrada_idade = get_number(`Informe a SUA IDADE (-1 para SAIDA): `)
    
    if(entrada_idade === -1){

        break;
    }

    numeros_idade++

    print(`Informe o numero CONFORME A SUA OPNIAO -> `)
    resposta_opiniao = get_number(`(1)-> OTIMO | (2)-> BOM | (3)->REGULAR | (4)-> PESSIMO : `)

    if(resposta_opiniao === 1 ){
        respostas_otimo++
    }

    if(resposta_opiniao === 3){

        respostas_regular++
    }

    if(resposta_opiniao === 2 ){
        respostas_bom++
    }


//CALCULAR SAIDA

const media_respostas_otimo = respostas_otimo / numeros_idade
const total_qtd_respostas_regular = respostas_regular
const percentual_respotas_bom = calcular_percentual(respostas_bom,numeros_idade)


//SAIDA MEDIA DAS IDADES DE VARIAVEL OTIMO // QUANTIDADE DE REGULAR//PERCENTUAL DE PESSOAS Q RESP. BOM

const resultado = (`
============================================
MEDIA DE RESPOSTAS OTIMO -> ${media_respostas_otimo}
TOTAL DE RESPOSTAS REGULAR -> ${total_qtd_respostas_regular}
PERCENTUAL DE RESPOSTAS BOM -> ${percentual_respotas_bom} %
============================================
TOTAL DE OPINADORES : ${numeros_idade}
`)

print(resultado)

}


}

main()

function calcular_percentual(quantidade,quantidade_total){

    return ((quantidade/quantidade_total) * 100).toFixed(2)

   
}