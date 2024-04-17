///Um sistema de equações lineares do tipo , pode ser resolvido segundo mostrado abaixo.
//Escreva um algoritmo que leia os coeficientes a, b, c, d, e e f, calcule e escreva os valores de x e y.
// X = (CE-BF) / (AE-BD)     Y = (AF - CD)/ (AE - BD)
import { question } from "readline-sync";

console.log(` ==== VALOR DE X E Y ====`)

//ENTRADA

const input = question(` Informe o valor de 6 Numeros separados por espaco. ( ex : A B C D E F) : `)

//processamento

const [ A,B,C,D,E,F] = input.split(" ").map(Number)

const resultadoX = (C * E - B * F) / (A * E - B * D)
const resultadoY = (A * F - C * D)/ (A * E - B * D)

//SAIDA

const mensagem = (`
----------------------------
VALOR DE X --> ${resultadoX.toFixed(2)}
VALOR DE Y --> ${resultadoY.toFixed(2)}
----------------------------
`)

console.log(mensagem)

















