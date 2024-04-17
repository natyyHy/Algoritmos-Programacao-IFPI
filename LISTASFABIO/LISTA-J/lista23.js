/*Escreva um algoritmo que leia a razão de uma PG (Progressão Geométrica) e o seu primeiro termo e
escreva os N termos da PG. Ler o valor de N.*/

import { get_number, print } from "./utils/io_utils.js"

function main(){

const razao = get_number(`Informe o valor da RAZAO : `)
const primeiro_termo = get_number(`Informe o valor do PRIMEIRO TERMO : `)
let n = get_number(`Informe a quantidade de TERMOS : `)

print(`Os ${n} termos da PG sao : `)

let i = 1
while(i <= n) {  //continuidade

    const termo = primeiro_termo * Math.pow(razao,i - 1)  //trabalho

    print(`Termo ${i} : ${termo} `)
    i++  //convergencia

}

}

main()