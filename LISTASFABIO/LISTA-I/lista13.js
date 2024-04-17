/*Leia o salário de funcionários de uma empresa, calcule e escreva o novo salário (segundo os critérios
descritos abaixo), a soma dos salários atuais, a soma dos salários reajustados e a diferença entre as 2
somas. (Flag: salário=0)

De                Até          Acréscimo
R$ 0,00        R$ 2.999,99     25 %
R$ 3.000,00    R$ 5.999,99     20 %
R$ 6.000,00    R$ 9.999,99     15 %
Acima de R$ 10.000,00          10 % */

import { get_number , print} from "./utils/io_utils.js"

function main(){

let soma_salario_atuais = 0
let soma_salario_reajustados = 0

    while(true){

        print(`==================================================`)
        const salario_informado = get_number(`Informe o SALARIO ATUAL (0 para saida):`)
        if(salario_informado === 0 ){

            break;
        }

        const salario_reajustado = calcular_reajuste_salario(salario_informado)

        soma_salario_atuais += salario_informado
        soma_salario_reajustados += salario_reajustado

        print(`==================================================`)
        print(`SOMA TOTAL DOS SALARIOS ATUAIS : ${soma_salario_atuais}`)
        print(`SOMA TOTAL DOS SALARIOS REAJUSTADOS : ${soma_salario_reajustados}`)

        const diferença_das_somas = salario_informado - salario_reajustado
        print(`DIFERENCA ENTRE DAS DUAS SOMAS SALARIAS : ${diferença_das_somas}`)


     }


}

function calcular_reajuste_salario(salario){

    if(salario <= 2999.99){
        
        return salario * (25/100)

    }else if(salario <= 5999.99){

        return salario * (20/100)

    }else if(salario <= 9999.99){

        return salario * (15/100)

    }else{

        return salario * (10/100)
    }


}



main()