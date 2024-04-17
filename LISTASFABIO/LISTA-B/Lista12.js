//Leia o salário de um trabalhador e escreva seu novo salário com um aumento de 25%.

import { question } from "readline-sync";

//entrada

console.log (` ==== SALARIO COM 25% DE AUMENTO ====`)

const salario = Number(question( ` Informe o seu salario : `))

//aumento de 25%

const aumento_porcentual = 25/100
const salario_aumento = salario * aumento_porcentual
const salarionovo = salario + salario_aumento


//saida

console.log ( ` Salario atual : ${salario} reais`)
console.log ( ` Aumento porcentual 25% : ${salario_aumento} reais`)
console.log( ` Salario novo = ${salarionovo} reais` )




































