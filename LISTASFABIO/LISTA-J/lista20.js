/*Considere que um carro vai fazer uma viagem entre duas cidades e que a distância a ser percorrida é de
600 km. No início da viagem, o carro está com o tanque cheio (50 litros). Durante o percurso foi usado
um aparelho para medir o desempenho do carro, que mostrava, quando acionado, duas informações:
· Distância percorrida desde a última medição;
· Quantidade de litros consumidos para percorrer a distância indicada.
Escreva um algoritmo que leia estas informações e escreva:
· se o carro chegou ao seu destino (distância percorrida maior ou igual a 600 km);
· se o carro parou antes de chegar por falta de combustível (consumo igual a 50 litros);
· o consumo em km/l do carro.*/

import { get_number, print } from "./utils/io_utils.js"

function main(){

const distancia_total = 600
const combustivel_total = 50

let distancia_percorrida = 0
let combustivel_consumido = 0

while(distancia_percorrida < distancia_total && combustivel_consumido < combustivel_total){

    let distancia= get_number(`Informe a distancia percorrida : Km `)
    let litro_consumido = get_number(`Informe a quantidade de litros consumidos : `)

    distancia_percorrida += distancia
    combustivel_consumido += litro_consumido

}

if(distancia_percorrida >= distancia_total){

    print(`O CARRO CHEGOU AO SEU DESTINO! -> Distancia percorrida : ${distancia_percorrida} km`)
}else if(combustivel_consumido >= combustivel_total){

    print(`O CARRO PAROU ANTES DE CHEGAR POR FALTA DE COMBUSTIVEL -> Litros consumido : ${combustivel_consumido} litros`)
}




}

main()