//Em um frigorífico, cada boi traz em seu pescoço um cartão contendo o seu n.o de identificação e seu
//peso. Escreva um algoritmo que leia um conjunto de cartões e escreva o n.o de identificação e o peso do
//boi mais magro e do boi mais gordo. (Flag: n.o identificação=0)

import { get_number, print } from "./utils/io_utils.js"

function main(){

print(` ==== FRIGORIFICO ====`)

let numero_boi_magro;
let peso_boi_magro = 1000000000
let numero_boi_gordo;
let peso_boi_gordo = 0
let contagem_numero_boi = 0
while(true){


    let numero_identificacao = get_number(`Informe o NUMERO DE IDENTIFICACAO (0 para saida) :`)

    if(numero_identificacao === 0){

        break;
    }else{

        contagem_numero_boi++
    }

    let numero_peso = get_number(`Informe o PESO DO BOI : KG `)
    
    //CALCULO NUMERO DE IDENTIFICAÇAO DO BOI MAIS MAGRO E GORDO

    while(contagem_numero_boi > 0 ){

        if(numero_peso < peso_boi_magro){

            peso_boi_magro = numero_peso
            numero_boi_magro = numero_identificacao
        }

        if(numero_peso > peso_boi_gordo){

            peso_boi_gordo = numero_peso
            numero_boi_gordo = numero_identificacao
        }

        contagem_numero_boi-- //convergencia
    }

    //saida

    print(` BOI MAIS MAGRO -> Numero de Indentificacao : ${numero_boi_magro} | Peso : ${peso_boi_magro} kg`)
    print(` BOI MAIS GORDO -> Numero de Identificacao : ${numero_boi_gordo} | Peso : ${peso_boi_gordo} kg`)
}
}
main()