////Leia um número inteiro de horas, calcule e escreva quantas semanas, quantos dias e quantas horas ele corresponde.
//   semanas = horas  / 168       dias =  (horas % 168) / 24)        horas = horas % 24

import { question } from "readline-sync";

//entrada

console.log(` === CONVERSÃO DE HORAS EM SEMANAS/DIAS/HORAS ====`)

const horas = parseInt(question(` Informe um numero inteiro de HORAS : `))

//processamento

const semanas = Math.floor( horas / 168 )
const dias = Math.floor((horas % 168) / 24 )
const horasrestantes = horas % 24 

//saida

const msg = (`
------------------------
HORAS INFORMADO : ${horas} horas 
-------------------------
SEMANAS : ${semanas} semanas
DIAS :  ${dias} dias
HORAS :  ${horasrestantes} horas 
--------------------------

`)

console.log(msg)










