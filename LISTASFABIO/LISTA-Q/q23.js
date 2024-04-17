/*Uma determinada empresa armazena para cada funcionário uma ficha contendo o código, o número de
horas trabalhadas e o seu no de dependentes. Considerando que a empresa paga R$ 12,00 por hora e R$
40,00 por dependentes e que sobre o salário são feitos descontos de 8,5% para o INSS e 5% para IR.
Escreva um algoritmo que leia o código, número de horas trabalhadas e número de dependentes de N
funcionários. Após a leitura de cada ficha, escreva os valores descontados para cada imposto e o salário
líquido do funcionário.*/

import { get_number, print } from "./utils/io_utils.js"

function main(){

print(` ==== EMPRESA X ====`)    
const quantidade_funcionarios = get_number(`--> Numero de FUNCIONARIOS : `)


for(let i = 1; i <= quantidade_funcionarios;i++){

    print(`======== FICHA ${i} ========`)
    const numero_codico = get_number(`CODICO : `)
    const horas_trabalhadas = get_number(`HORAS TRABALHADAS : `)
    const numero_depedentes = get_number(`QUANTIDADE DE DEPEDENTES : `)

    let total_valor_horasTrabalhadas = horas_trabalhadas * 12.00
    let total_valor_depedentes = numero_depedentes * 40.00

    let salario_bruto = total_valor_depedentes + total_valor_horasTrabalhadas

    let valor_desconto_INSS = calcular_desconto_INSS(salario_bruto)
    let valor_desconto_IR = calcular_desconto_IR(salario_bruto)

    let salario_liquido = salario_bruto - valor_desconto_INSS - valor_desconto_IR

    print(`
    =====================================
    VALOR DESCONTADO INSS --> ${valor_desconto_INSS.toFixed(2)}
    VALOR DESCONTADO IR --> ${valor_desconto_IR.toFixed(2)}

    SALARIO LIQUIDO --> ${salario_liquido.toFixed(2)} reais
    =====================================`)

}


}

main()

function calcular_desconto_INSS(numero){

    return numero * (8.5/100)
}

function calcular_desconto_IR(numero){

    return numero * (5/100)
}