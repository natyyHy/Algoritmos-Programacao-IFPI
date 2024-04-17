/*/Escreva um algoritmo que leia um conjunto de dados de um grupo de 100 pessoas, sexo (1=Masculino,
2=Feminino), idade e estado civil (1=Casado, 2=Solteiro, 3=Divorciado, 4=Viúvo) e escreva:
· Média de idade das mulheres;
· Média de idade dos homens;
· O percentual de homens solteiros;
· O percentual de mulheres solteiras;
· A quantidade de mulheres divorciadas acima de 30 anos.*/

import { calcular_percentual, get_number, print } from "./utils/io_utils.js"

function main(){ 

let numero_de_pessoas = 0  //estado

let qtd_pessoas_masculino = 0
let somatorio_idade_masculino = 0

let qtd_pessoas_feminino = 0
let somatorio_idade_feminino = 0

let qtd_masculino_solteiro = 0
let qtd_feminino_solteiro = 0

let qtd_feminino_divorciada_30anos = 0

while(numero_de_pessoas < 100){   //continuidade

    const entrada_tipo_sexo = get_number(`Informe o NUMERO conforme o seu TIPO DE SEXO (1=Masculino) (2=Feminino) :`) //TRABALHO
    
    if(entrada_tipo_sexo === 1 ){

        print(`=== SEXO TIPO (1=Masculino) ===`)
        const idade_masculino = get_number(`Informe a SUA IDADE : `)
        const estado_civil_homens = get_number(`Informe o ESTADO CIVIL (1=Casado, 2=Solteiro, 3=Divorciado, 4=Viúvo) :`)

            if(estado_civil_homens === 2 ){

                    qtd_masculino_solteiro++
            }
            
        qtd_pessoas_masculino++
        somatorio_idade_masculino += idade_masculino

    }

    if(entrada_tipo_sexo === 2 ){

        print(`=== SEXO TIPO (2=Feminino) ===`)
        const idade_feminino = get_number(`(2=Feminino) Informe a SUA IDADE : `)
        const estado_civil_feminino = get_number(`Informe o ESTADO CIVIL (1=Casado, 2=Solteiro, 3=Divorciado, 4=Viúvo) :`)

             if(estado_civil_feminino === 2 ){

                    qtd_feminino_solteiro++
             }

                if(idade_feminino === 30 && estado_civil_feminino === 3 ){

                    qtd_feminino_divorciada_30anos++
                }
            
        qtd_pessoas_feminino++
        somatorio_idade_feminino += idade_feminino

    }
    numero_de_pessoas++  //convergencia


//CALCULAR RESULTADOS

const media_idade_feminino = somatorio_idade_feminino / qtd_pessoas_feminino
const media_idade_masculino = somatorio_idade_masculino / qtd_pessoas_masculino

const percentual_masculino_solteiro = calcular_percentual(qtd_masculino_solteiro,qtd_pessoas_masculino)
const percentual_feminino_solteiro = calcular_percentual(qtd_feminino_solteiro,qtd_pessoas_feminino)
const total_qtd_feminino_30anos = qtd_feminino_divorciada_30anos

    //SAIDA

const resultado = (`
==================================================
MEDIA DE IDADE DAS MULHERES -> ${media_idade_feminino}
MEDIA DE IDADE DOS HOMENS -> ${media_idade_masculino}
PERCENTUAL DE HOMENS SOLTEIROS -> ${percentual_masculino_solteiro} %
PERCENTUAL DE MULHERES SOLTEIRAS -> ${percentual_feminino_solteiro} %
TOTAL DE MULHERES DIVORCIADAS ACIMA DE 30 ANOS -> ${total_qtd_feminino_30anos}
=================================================`)

print(resultado)

}


}

main()