/*Escreva um algoritmo que gere um número aleatório inteiro (utilize a função rand(): aleatorio = rand())
e solicite um número ao usuário. O objetivo é que o usuário acerte o número gerado. Se o número
digitado for menor que o gerado, escreva “Maior”, se for maior, escreva “Menor”, e solicite novamente
um número ao usuário. Repita este processo ate que o usuário acerte o número gerado. Após isso,
escreva em quantas tentativas o usuário acertou.*/

import { get_number_inteiro, print } from "./utils/io_utils.js"

function main(){

print(` ==== ACERTE O NUMERO ====`)
print(`=== INFORME UM NUMERO PARA SER SORTEADO ! === `)
const entrada_numero = get_number_inteiro(`Informe um numero para sortear : `)

const numero_aleatorio = calcular_numero_aleatorio(1,entrada_numero)

let numero_usuario;
let qtd_tentativas = 0

while(numero_usuario != numero_aleatorio){

    numero_usuario = get_number_inteiro(`NUMERO : `)
    if(numero_usuario < numero_aleatorio){

        print(` O NUMERO SORTEADO E -> MAIOR!`)
    }

    if(numero_usuario > numero_aleatorio){

        print(`O NUMERO SORTEADO E -> MENOR !`)
    }


    qtd_tentativas++
}

print(`PARABENS! VOCE ACERTOU O NUMERO SORTEADO -> ${numero_aleatorio}`)
print(`APOS -> ${qtd_tentativas} TENTATIVAS !`)

}

main()

function calcular_numero_aleatorio(min,max){

    return  Math.floor(Math.random() * (max - min +1))
}