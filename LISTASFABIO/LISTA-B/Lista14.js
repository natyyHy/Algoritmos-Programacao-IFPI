//Leia 3 notas de um aluno e o peso de cada nota, calcule e escreva a média ponderada.
// n1*p1+ n2*p2+ n3*p3    /  p1+p2+p3

import { question } from "readline-sync";

console.log(` ===MEDIA PONDERADA===  `)


//ENTRADA

const n1 = Number(question(` Nota 1 : `))
const p1 = Number(question(` Peso 1 : `))
const n2 = Number(question(` Nota 2 : `))
const p2 = Number(question(` Peso 2 : `))
const n3 = Number(question(` Nota 3 : `))
const p3 = Number(question(` Peso 3 : `))

//PROCESSAMENTO

const notapeso1 = n1*p1
const notapeso2 = n2*p2
const notapeso3 = n3*p3
const notatotal = notapeso1+notapeso2+notapeso3
const media = notatotal/ (p1+p2+p3)

//saida

const mensagem = `

=== RESULTADO ===

Nota 1 --> ${n1} Peso 1 --> ${p1} Total --> ${notapeso1}
Nota 2 --> ${n2} Peso 1 --> ${p2} Total --> ${notapeso2}
Nota 3 --> ${n3} Peso 1 --> ${p3} Total --> ${notapeso3}
 ----------------------------------------------------
 MEDIA = ${media}

`
console.log(mensagem)










