//Leia um valor em m, calcule e escreva o equivalente em cm.

import { question } from "readline-sync";

//entrada

console.log(`==== METROS EM CENTIMETROS ====`)

const metro = Number(question(` Informe o valor em METROS : `)) 

//processamento 

const cm = metro* 100

//saida

const msg = (`
----------------
METROS --> ${metro} m
CALCULO --> ${metro} X 100
----------------
EM CENTIMETROS : ${cm.toLocaleString()} cm
`)

console.log(msg)











