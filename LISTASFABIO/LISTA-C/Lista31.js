////Leia um número inteiro (4 dígitos binários), calcule e escreva o equivalente na base decimal.

import { question } from "readline-sync";

//ENTRADA

console.log(" === 4 NUMEROS BINARIO EM BASE DECIMAL === ")
const numero1 = parseInt(question(` Informe o numero binario 1 : `))
const numero2 = parseInt(question(` Informe o numero binario 2 : `))
const numero3 = parseInt(question(` Informe o numero binario 3 : `))
const numero4 = parseInt(question(` Informe o numero binario 4 : `))

//processamento

const decimalequivalente = ( numero1 * 2**3)+(numero2* 2**2 )+(numero3*2**1)+(numero4*2**0)

//saida

const msg = (`
------------------------------------
EQUIVALENTE EM BASE DECIMAL --> ${decimalequivalente}
------------------------------------
`)

console.log(msg)










