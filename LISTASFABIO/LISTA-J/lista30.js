/*Escreva um algoritmo que leia o nome de um produto, o preço e a quantidade comprada. Escreva o
nome do produto comprado e o valor total a ser pago, considerando que são oferecidos descontos pelo
número de unidades compradas, segundo a tabela abaixo: (FLAG: nome do produto = “FIM”).
a. Até 10 unidades: valor total
b. de 11 a 20 unidades: 10% de desconto
c. de 21 a 50 unidades: 20% de desconto
d. acima de 50 unidades: 25% de desconto*/

import { get_number, get_number_min, get_text, print } from "./utils/io_utils.js"

function main(){

let nome_produto = ``
let mensagem_desconto = ``
let teve_desconto = ``

while(true){

    nome_produto = get_text(`NOME DO PRODUTO (digite FIM para sair): `)
        if(nome_produto === `FIM` || nome_produto === `fim`){

            break;
        }

    let preco_produto = get_number_min(`PRECO DO PRODUTO : R$`,0)
    let quantidade_produto = get_number(`QUANTIDADES COMPRADAS DE ${nome_produto} : `)

    let valor_total_apagar = preco_produto * quantidade_produto


if(quantidade_produto > 11 || quantidade_produto > 50 ){ 

            teve_desconto = `SIM`

                if(quantidade_produto >= 11 && quantidade_produto <= 20){

                    valor_total_apagar = calcular_desconto(preco_produto,10)
                        mensagem_desconto = `DESCONTO DE 10%`
                             }

                if(quantidade_produto >= 21 && quantidade_produto <= 50){

                     valor_total_apagar = calcular_desconto(preco_produto,20)
                        mensagem_desconto = `DESCONTO DE 20%`
                             }

                 if(quantidade_produto > 50){

                      valor_total_apagar = calcular_desconto(preco_produto,25)
                        mensagem_desconto = `DESCONTO DE 25%`
                             }

}else{

        teve_desconto = `NAO`
}

    //saida
    const resultado = (`
    ==========================================
    NOME DO PRODUTO --> ${nome_produto}
    DESCONTO --> ${teve_desconto}
    VALOR TOTAL A PAGAR --> ${valor_total_apagar} R$
    ==========================================
    `)

    print(resultado)
}


}

main()

function calcular_desconto(valor_original,valor_desconto){

    const desconto = valor_original * (valor_desconto/100)

    return valor_original - desconto
}