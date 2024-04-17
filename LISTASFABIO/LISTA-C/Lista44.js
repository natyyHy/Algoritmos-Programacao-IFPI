///Sabendo que latão é constituído de 70% de cobre e 30% de zinco, escreva um algoritmo que calcule a
//quantidade de cada um desses componentes para se obter certa quantidade de latão (em kg), informada
//pelo usuário.
// quantidadecobre = 70/100  quantidadezinco = 30 / 100
// quantidadetotalzinco///cobre * quantidadeKG

import { question } from "readline-sync";

console.log(` ==== QUANTIDADE DO LATAO EM KG ====`)

//ENTRADA

const quantidadeKG = Number(question(` Informe a quantidade de latao em KG : `))

//PROCESSAMENTO

const quantidadecobre = (70 / 100) * quantidadeKG
const quantidadezinco = (30 / 100 ) * quantidadeKG

//saida

const mensagem = (`
------------------------------------
QUANTIDADE DE COBRE : ${quantidadecobre} KG
QUANTIDADE DE ZINCO : ${quantidadezinco} KG
------------------------------------
`)

console.log(mensagem)


















