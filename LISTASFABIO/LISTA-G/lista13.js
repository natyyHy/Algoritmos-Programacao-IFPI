/*Faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
a) "Telefonou para a vítima ?"
b) "Esteve no local do crime ?"
c) "Mora perto da vítima ?"
d) "Devia para a vítima ?"
e) "Já trabalhou com a vítima ?"
O algoritmo deve no final emitir uma classificação sobre a participação da pessoa no crime. Se a pessoa
responder positivamente a 2 questões ela deve ser classificada como "Suspeita", entre 3 e 4 como
"Cúmplice" e 5 como "Assassino". Caso contrário, ele será classificado como "Inocente".*/

import { question } from "readline-sync";

function main(){

let resposta = []
resposta.push(question(`a) Telefonou para a vítima (sim/nao)?`))
resposta.push(question(`b) Esteve no local do crime (sim/nao)?`))
resposta.push(question(`c) Mora perto da vítima (sim/nao) ?`))
resposta.push(question(`d) Devia para a vítima ? (sim/nao) `))
resposta.push(question(`e) Já trabalhou com a vítima (sim/nao) ?`))

//contar quantas respostas são "sim"

 const positivas = resposta.filter((resposta) => resposta.toLowerCase() === 'sim').length 

 console.log(`CLASSIFICAÇAO --> `)

if(positivas === 2 ){

   console.log(`Suspeito`)

 }else if(positivas >= 3 && positivas <= 4 ){

    console.log(`Cumplice`)
 }else if(positivas === 5 ){

    console.log(`Assasino`)

 }else {

    console.log(`Inocente`)
}

}

main()










