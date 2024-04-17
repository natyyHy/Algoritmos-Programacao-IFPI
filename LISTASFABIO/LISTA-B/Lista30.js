////Leia um número inteiro de minutos, calcule e escreva quantos dias, quantas horas e quantos minutos ele corresponde.

import { question } from "readline-sync";

//entrada

console.log (`  ==== MINUTOS EM DIAS/HORAS/MINUTOS ====`)
const minutos = parseInt(question(` Informe o numero inteiro de MINUTOS : `))

//PROCESSAMENTO

const dias = Math.floor(minutos % 1440)
const horas = Math.floor((minutos % 1440) / 60)
const minutosrestantes = minutos % 60 

//saida

const msg = (`
----------------------------------------
MINUTOS INFORMADO : ${minutos} minutos
----------------------------------------
HORAS : ${horas} horas
MINUTOS : ${minutosrestantes} minutos
----------------------------------------

`)

console.log(msg)








