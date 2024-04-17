//Leia um número inteiro de metros, calcule e escreva quantos Km e quantos metros ele corresponde.

import { question } from "readline-sync";

//entrada
console.log(`==== CONVERSÃO DE METROS PARA QUILÔMETROS E METROS ==== `)

const metros = parseInt(question(` Informe um numero inteiro em metros : `))

//processamento

const quilometros = Math.floor(metros / 1000)
const metrosrestante = metros % 1000

//saida

const msg = (`
----------------------------------
METROS --> ${metros} m
----------------------------------
EM QUILOMETROS : ${quilometros} km 
EM METROS : ${metrosrestante} m
----------------------------------

`)

console.log(msg)

















