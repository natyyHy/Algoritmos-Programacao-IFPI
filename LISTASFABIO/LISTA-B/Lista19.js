//Leia o valor do raio de uma esfera, calcule e escreva seu volume. (v = (4 * p * r3) / 3) (p = 3,14)

import { question } from "readline-sync"


console.log(`===VOLUME DA ESFERA===`)
const raio = Number(question(`Informe o valor do raio : `))

//processamento

const volume = (4 * 3.14 * raio) / 3

//saida

const msg = (`
-------------------
calculo = 4 * 3.14 * ${raio} / 3
-------------------
VOLUME --> ${volume.toFixed(2)}

`)

console.log(msg)






