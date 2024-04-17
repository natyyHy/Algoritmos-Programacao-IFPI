//Leia 2 números inteiros, calcule e escreva o quociente e o resto da divisão do 1o pelo 2o.
//escreve quociente n1,n2 //resto divisao n1,n2 %
import { question } from "readline-sync";

console.log( `....Quociente e Resto.....`)

const n1 = Number(question( `Numero 1 : `))
const n2 = Number(question( `Numero 2 : `))

//processamento

const quociente = Math.floor(n1/n2);
const resto = n1%n2

//saida

console.log( ` Quociente de ${n1} / ${n2} = ${quociente}`)
console.log( ` Resto da divisao de ${n1} % ${n2} = ${resto}` )



























