///O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem do 
//distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que a percentagem do distribuidor seja de 28% e os impostos 
//de 45%, escreva um algoritmo que leia o custo de fábrica de um carro e escreva o custo ao consumidor.

//RASCULHO
// custofabricacom28 = custo * (28/100) 
// impostos --> custofabrica * (45/100)  
//soma --> custofabricacom28 + impostos

import { question } from "readline-sync";

console.log(` ==== CUSTO DO CARRO NOVO ====`)

//ENTRADA

const custofabrica = Number(question(` Informe o valor do custo da fabrica : `)) 

//PROCESSAMENTO 

const custofrabricacom28 = custofabrica * (28/100)
const impostos = custofabrica * (45/100)
const custototal = custofrabricacom28 + impostos

//SAIDA

const mensagem = (`
---------------------------------------
CUSTO DA FABRICA INFORMADO : ${custofabrica} reais
CUSTO DA FABRICA COM 28% : ${Math.round(custofrabricacom28)} reais
CUSTO DOS IMPOSTOS COM 45% : ${impostos} reais
---------------------------------------
CUSTO TOTAL DO CONSUMIDADOR : ${custototal} reais

`)
console.log(mensagem)



























