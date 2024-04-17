//Leia o valor da base e altura de um triângulo, calcule e escreva sua área. (área=(base * altura)/2)

import { question } from "readline-sync";

//entrada

console.log( `====CALCULO AREA DO TRIANGULO====`)
const base = Number(question(` Informe o valor da Base : `))
const altura = Number(question(` Informe o valor da Altura : `))


//processamento
const area = (base*altura)/2

const mensagem = (`   
-----------------
Base = ${base}
Altura = ${altura}
------------------
Area = ${area}

`)

console.log(mensagem)




