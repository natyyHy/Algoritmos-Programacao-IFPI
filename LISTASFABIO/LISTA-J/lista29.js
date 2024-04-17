/*Escreva um algoritmo que calcula o retorno de um investimento financeiro. O usuário deve informar
quanto será investido por mês e qual será a taxa de juros mensal. O algoritmo deve informar o saldo do
investimento após um ano (soma das aplicações mensais + juros compostos), e perguntar ao usuário se
deseja calcular o ano seguinte, sucessivamente. Por exemplo, caso o usuário deseje investir R$ 100,00
por mês, e tenha uma taxa de juros de 1% ao mês, o algoritmo forneceria a seguinte saída:
Saldo do investimento após 1 ano: 1268.25
Deseja processar mais um ano (S/N) ?*/

import { get_number, get_text, print } from "./utils/io_utils.js"

function main(){

    while(true){

    const investimento_PorMes = get_number(`Informe o INVESTIMENTO POR MES : `)
    const taxa_juros_mensal = get_number(`Informe a TAXA DE JUROS MENSAL: `)
    const taxa_juros_mensal_decimal = taxa_juros_mensal / 100

    const total_investimento_mes = investimento_PorMes * Math.pow(1 + taxa_juros_mensal_decimal,12)
    const total_investimento_ano = total_investimento_mes * 12

    print(`SALDO DO INVESTIMENTO APOS 1 ANO : ${total_investimento_ano.toFixed(2)} R$`)

    const resposta = get_text(`DESEJA PROCESSAR MAIS UM ANO? (S/N) :`)
        
        if(resposta === `N`){

            print(`ENCERRADO!`)
            break;

        }else{

            print(`ERROR DE ENTRADA!`)
            break;
        }

}

}
main()