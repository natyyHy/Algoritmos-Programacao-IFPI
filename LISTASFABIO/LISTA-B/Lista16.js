//Leia o valor do lado de um quadrado, calcule e escreva sua área. (área = lado2)

import { question } from "readline-sync";

//entrada

console.log(` ===AREA DO QUADRADO===`)

const lado = Number(question(`Informe o lado do quadrado :  `))

//processamento

const area = lado^2

//saida

const msg = (`
-----------------
lado = ${lado}
calculo = ${lado}^2
-----------------
Area = ${area}
`)

console.log(msg)






