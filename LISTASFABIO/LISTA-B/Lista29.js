////Leia um número inteiro de meses, calcule e escreva quantos anos e quantos meses ele corresponde.

import { question } from "readline-sync";

//entrada

console.log(`  ==== MESES EM ANOS/MESES ====`)
const meses = parseInt(question( ` Informe o numero inteiro de MESES : `))

//processamento 

const anos = Math.floor(( meses % 12))

const mesesrestantes = meses % 7

//saida

const msg = (`
-----------------------------------
MESES INFORMADO = ${meses} meses 
-----------------------------------
ANOS : ${anos} anos
MESES : ${mesesrestantes} meses
-----------------------------------

`)

console.log(msg)




















