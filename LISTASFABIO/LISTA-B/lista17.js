//Leia o valor da base e altura de um retângulo, calcule e escreva sua área. (área = base * altura)

import { question } from "readline-sync";

console.log(` ===AREA DO RETANGULO===`)

//ENTRADA

const base = Number(question(` Informe a base : `))
const altura = Number(question(` Informe a altura : `))

//processamento

const area = base*altura

//saida

const msg = ( `
----------------
calculo --> ${base} x ${altura} 
AREA ---> ${area}
----------------

`)

console.log(msg)






