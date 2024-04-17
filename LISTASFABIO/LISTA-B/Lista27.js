/////Leia um número inteiro de segundos, calcule e escreva quantas horas, quantos minutos e quantos segundos ele corresponde.
//   horas = segundos / 3600              minutos = (segundos % 3600) / 60              segundos = segundos % 60


import { question } from "readline-sync";

//entrada

console.log (` ==== CONVERSÃO DE SEGUNDOS EM HORAS/MINUTOS/SEGUNDOS ====`)

const segundos = parseInt(question(` Informe o numero inteiro de SEGUNDOS : `))

//PROCESSAMENTO 

const horas = Math.floor( segundos / 3600 )
const minutos = Math.floor(( segundos % 3600 ) / 60 )
const segundosrestantes = segundos % 60 

//saida

const msg = (`
--------------------------
SEGUNDO INFORMADO : ${segundos} segundos
--------------------------
HORAS : ${horas} horas
MINUTOS : ${minutos} minutos
SEGUNDOS : ${segundosrestantes} segundos 
--------------------------

`)


console.log(msg)







