/*Um fazendeiro possui fichas de controle sobre sua boiada. Cada ficha contém numero de identificação,
nome e peso (em kg) do boi. Escreva um algoritmo que leia os dados de N fichas e ao final, escreva o
numero de identificação e o peso do boi mais magro e do boi mais gordo.*/

import { get_name, get_number, print } from "./utils/io_utils.js"

function main(){

print(` >>>> CONTADOR FICHAS BOI <<<< `)

print(`------------------------------`)
const numeros_fichas = get_number(`Informe o numero de FICHAS : `)

//gordo
let nome_boiGordo = ``
let number_identicacao_boiGordo = 0
let boi_gordo = 0

//magro
let nome_boiMagro = ``
let number_identicacao_boiMagro = 0
let boi_magro = Infinity

for(let i = 1;i <= numeros_fichas;i++){

    print(`------------------------------`)
    print(`>>> BOI NUMERO ${i} <<<`)
    const nome_boi = get_name(`NOME DO BOI : `)
    const numero_identificacao = get_number(`NUMERO DE IDENTIFICACAO : `)
    const peso_boi = get_number(`PESO DO BOI :`)

    if(peso_boi < boi_magro){

        nome_boiMagro = nome_boi
        number_identicacao_boiMagro = numero_identificacao
        boi_magro = peso_boi
    }

    if(peso_boi > boi_gordo){

        nome_boiGordo = nome_boi
        number_identicacao_boiGordo = numero_identificacao
        boi_gordo = peso_boi
        
    }
}

print(`------------------------------`)
print(`>>> BOI MAGRO <<<
NOME --> ${nome_boiMagro}
IDENTIFICACAO --> ${number_identicacao_boiMagro}
PESO --> ${boi_magro} kg

>>> BOI GORDO <<<
NOME --> ${nome_boiGordo}
IDENTIFICACAO --> ${number_identicacao_boiGordo}
PESO --> ${boi_gordo} KG
`)


}

main()