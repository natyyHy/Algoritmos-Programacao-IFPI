///Escreva um algoritmo que, tendo como dados de entrada 2 pontos quaisquer no plano, ponto1 (x1,y1) e
//ponto2 (x2,y2), escreva a distância entre eles, conforme fórmula abaixo. 
// D = raiz quadrada de (x1-x2)**2 + (y2-y1)**2       FUNÇAO Retorna raiz quadrada -> sqrt()

import { question } from "readline-sync";

console.log(`==== DISTANCIA ENTRE OS PONTOS ====`)

//ENTRADA

const input1 = question(` Informe o valor de X1 e Y1 : `)
const input2 = question(` Informe o valor do x2 e Y2 :`)

//PROCESSAMENTO

const [ X1 , Y1] = input1.split(" ").map(Number)
const [ X2 , Y2 ] = input2.split(" ").map(Number)

const X1X2 = (X1-X2)**2
const Y1Y2 = (Y1-Y2)**2

//CALCULO DA RAIZ QUADRADA DA SOMA USANDO FUNÇAO (sqrt)

const distancia = Math.sqrt(X1X2 + Y1Y2)

//SAIDA

const mensagem = (`
-------------------------------------
A DISTANCIA ENTRE OS PONTOS É : ${distancia}
-------------------------------------
`)

console.log(mensagem)













