////Leia a idade de uma pessoa expressa em dias e escreva-a expressa em anos, meses e dias.

import { question } from "readline-sync";

console.log(`==== IDADE DE DIAS EM ANOS/MESES/DIAS ====`)

//ENTRADA

const idadedias = Number(question(` Informe sua idade em DIAS : `))

//processamento

const ano = Math.floor(idadedias / 365)
const mes = Math.floor((idadedias % 365) / 30)
const dias = ((idadedias % 365 ) % 30)

//saida

const msg = (`
------------------------
ANO : ${ano} anos
MESES : ${mes} meses 
DIAS : ${dias} dias
------------------------

`)

console.log(msg)












