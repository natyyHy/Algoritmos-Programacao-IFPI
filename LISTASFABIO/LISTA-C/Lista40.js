////Calcule a quantidade de dinheiro gasta por um fumante. Dados de entrada: o número de anos que ele fuma, o no de cigarros fumados por dia e o preço de uma carteira (1 carteira tem 20 cigarros).

import { question } from "readline-sync";

console.log (` ==== DESPESA EM CIGARROS ====`)

//ENTRADA

const anosFumando = Number(question(` Informe o numero de anos que voce fuma : `))
const cigarrospordia = Number(question(` Informe o numero de cigarros fumados por dia : `))
const preçocarteira = Number(question(` Informe o preco da carteira de cigarro : `))

//processamento 

//Total de cigarros por ano

const cigarrosporano = cigarrospordia * 365 * anosFumando 

//Total de carteiras consumidas

const carteirasconsumidas = Math.floor(cigarrosporano / 20)

//total de gasto em cigarros 

const gastototal = carteirasconsumidas * preçocarteira

///saida 

const mensagem = ( `
-----------------------------------------
TOTAL DE CIGARROS POR ANO : ${cigarrosporano}
TOTAL DE CARTEIRAS DE CIGARROS CONSUMIDAS : ${carteirasconsumidas}
-----------------------------------------
TOTAL DE DESPESAS EM CIGARRO : ${gastototal} reais 

`)
console.log(mensagem)












