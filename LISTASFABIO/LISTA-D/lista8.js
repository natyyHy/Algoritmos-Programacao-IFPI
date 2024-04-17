//Leia data atual (dia, mês e ano) e data de nascimento (dia, mês e ano) de uma pessoa, calcule e escreva
//sua idade exata (em anos).

import { question } from "readline-sync";

function main(){

//ler data atual
console.log(` ======= DATA ATUAL =======`)
const diaatual = Number(question(` Informe o dia atual : `))
const mesatual = Number(question(` Informe o mes atual :`))
const anoatual = Number(question(` Informe o ano atual : `))

//data de nascimento

console.log(` ====== DATA DE NASCIMENTO =====`)
const dianascido = Number(question(` Informe o dia de nascimento : `))
const mesnascido = Number(question(` Informe o mes de nascimento : `))
const anonascido = Number(question(` Informe o ano de nascimento : `))

//calculo a idade e imprimir 

let idade = calcularIdade(diaatual,mesatual,anoatual,dianascido,mesnascido,anonascido)
console.log(` A idade EXATA em ANOS : ${idade} anos`)


}

main()


//PROCESSO IDADE
function calcularIdade (diaatual,mesatual,anoatual,dianascido,mesnascido,anonascido){

 let idade = anoatual - anonascido

 //verificar se nao fez aniversario

 if (mesatual < mesnascido || (mesatual === mesnascido && diaatual < dianascido )){

    return idade 
 }

}




















