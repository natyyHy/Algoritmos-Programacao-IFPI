///Leia três números inteiros e positivos (A, B, C) e calcule a seguinte expressão  ( D = R + S / 2 ) onde R = ( A + B )**2  e  S = ( B + C )**2 :

import { question } from "readline-sync";

console.log(` === A , B e C NA EXPRESSAO D= R + S / 2 ====`)

//ENTRADA

const input = question(` Informe o valor de tres numeros inteiros separados por espaço ( A B C) : `)  

//processamento

const [A , B , C ] = input.split(" ").map(Number) /// <--- SEPARAR OS NUMEROS DA VARIAVEL INPUT E CONVERTE PARA Number 


// Calcula R = (A + B)^2

const valorR = (A + B)**2         

// Calcula S = (B + C)^2

const valorS = ( B + C )**2       

// Calcula D = (R + S) / 2

const valorD =  ( valorR + valorS ) / 2                     

//saida

const mensagem = (`
-------------------------
VALOR DE S : ${valorS}
VALOR DE R : ${valorR}
-------------------------
RESULTADO DE D : ${valorD}
`)
console.log(mensagem)










