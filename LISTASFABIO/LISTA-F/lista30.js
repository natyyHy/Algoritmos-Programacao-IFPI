//Existem números de 4 dígitos (entre 1000 e 9999) que obedecem à seguinte característica: se dividirmos
//o número em dois números de dois dígitos, um composto pela dezena e pela unidade, e outro pelo
//milhar e pela centena, se somarmos estes dois novos números gerando um terceiro, o quadrado deste
//terceiro número é exatamente o número original de quatro dígitos. Por exemplo:
//2025 -> dividindo: 20 e 25 -> somando temos 45 -> 452 = 2025.

import { question } from "readline-sync";

function main(){

const numero = parseInt(question(` Informe um numero de 4 digitos : `))

if(numero < 1000 || numero > 9999){

    console.log(`DIGITE UM NUMERO VALIDO DE 4 DIGITOS`)
}

const milhar = Math.floor(numero / 1000)
const centena = Math.floor((numero % 1000) / 100)
const dezena = Math.floor((numero % 100 ) / 10)
const unidade = numero % 10 




const soma = (milhar * 10 + centena) + (dezena * 10 + unidade)
const quadradosoma = soma**2



if(quadradosoma === numero){

    console.log(` O Numero atende as caracteristicas `)
}else{

    console.log(`O Numero NAO atende as caracteristicas `)
}
}






main()












