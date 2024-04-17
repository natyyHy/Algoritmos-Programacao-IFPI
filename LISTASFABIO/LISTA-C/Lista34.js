//Leia 3 números, calcule e escreva a média dos números.

console.log(` === MEDIA DE TRES NUMEROS ===`)
import { question } from "readline-sync"

//entrada
const numero1 = Number(question(` Informe o numero 1 :`))
const numero2 = Number(question(` Informe o numero 2 :`))
const numero3 = Number(question(` Informe o numero 3 :`))

//processamento 

const media = (numero1+numero2+numero3) / 3

//saida

const msg = (`
---------------------------------
NUMEROS --> ${numero1} , ${numero2} , ${numero3}
---------------------------------
MEDIA --> ${media.toFixed(2)}
`)

console.log(msg)










