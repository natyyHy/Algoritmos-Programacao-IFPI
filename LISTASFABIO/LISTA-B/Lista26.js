///Leia um número inteiro de dias, calcule e escreva quantas semanas e quantos dias ele corresponde.

import { question } from "readline-sync";

//entrada

console.log (` ==== CONVERSÃO DE DIAS EM SEMANAS E DIAS ==== `)
const dias = parseInt(question(` Informe o numero inteiro de DIAS : `))

//processamento

const semana = Math.floor( dias / 7);
const diasrestantes = dias % 7 ;

//saida

const msg = (` 
--------------------------------
DIAS INFORMADO : ${dias} dias 
--------------------------------
EM SEMANAS : ${semana} semanas
EM DIAS : ${dias} dias 
--------------------------------

`)


console.log(msg)













