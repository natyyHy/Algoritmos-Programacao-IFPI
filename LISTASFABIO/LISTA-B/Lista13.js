//Leia um valor em real (R$), calcule e escreva 70% deste valor.

import { question } from "readline-sync";

console.log(`====REAIS EM 70%====`)

//ENTRADA

const real = Number(question(` Valor em Real :  `))
//processamento

const real70 = Math.floor(real * (70/100))
//saida

console.log(` 70% de ${real} = ${real70}`)










