/*A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e
número de filhos. Escreva um algoritmo que leia o salário e o número de filhos de N habitantes e
escreva:
a) média de salário da população;
b) média de número de filhos;
c) percentual de pessoas com salário de até R$ 1.000,00.*/

import { get_number, print } from "./utils/io_utils.js"

function main(){

const numero_hanitantes = get_number(`Numero de HABITANTES : `)

let quantidade_populacao = 0
let quantidade_filhos = 0
let total_salario = 0
let qtd_pessoas_salarioAte1000 = 0

for(let i = 1;i <= numero_hanitantes;i++){

    print(`>>>> HABITANTE ${i} <<<<`)
    let salario = get_number(`SALARIO : `)
    let numero_filhos = get_number(`NUMERO DE FILHOS : `)

    quantidade_populacao++
    quantidade_filhos += numero_filhos
    total_salario += salario

    if(salario >= 1000){

        qtd_pessoas_salarioAte1000++
    }
}

const media_salario_populacao = total_salario / quantidade_populacao
const media_filhos = quantidade_filhos / quantidade_populacao
const percentual_pessoas_salario1000 = (qtd_pessoas_salarioAte1000 / quantidade_populacao)*100

print(`
==================
MEDIA DO SALARIO DA POPULAÇAO --> ${media_salario_populacao}
MEDIA DE FILHOS DA POPULAÇAO --> ${media_filhos}
PERCENTUAL DE PESSOAS COM SALARIO ACIMA DE 1000$ --> ${percentual_pessoas_salario1000}%`)

}

main()