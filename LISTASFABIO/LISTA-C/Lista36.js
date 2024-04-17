////Leia a idade de uma pessoa expressa em anos, meses e dias e escreva-a expressa apenas em dias.

import { question } from "readline-sync";

console.log(` ==== IDADE EM DIAS ====`)

//ENTRADA

console.log(`---- DATA DE NASCIMENTO ----`)
const  anonascido = Number(question(` Informe o ano em que nasceu : `))
const  mesnascido = Number(question(` Informe o mes em que nasceu : `))
const  dianascido = Number(question(` Informe o dia em que nasceu : `))

//DATA ATUAL

console.log(`--- DATA ATUAL ---`)
const anoatual = Number(question(` Informe o ano atual :`))
const mesatual = Number(question(` Informe o mes atual :`))
const diaatual = Number(question(` Informe o dia atual :`))

//processamento

const diferencaano = anoatual - anonascido
const diferencames  = mesatual - mesnascido
const diferencadia = diaatual - dianascido

const Idadetotal = diferencaano * 365 + diferencames * 30 + diferencadia

//saida

const msg = (`
--------------------------------
SUA IDADE EM DIAS SAO  :  ${Idadetotal} DIAS
--------------------------------
`)
console.log(msg)












