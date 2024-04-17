///Leia 5 (cinco) números inteiros, calcule a sua média e escreva os que são maiores que a média

import { question } from "readline-sync";

function main(){
    console.log(` ==== NUMEROS MAIORES QUE A MEDIA ====`)
    let numero1 = parseInt(question(` Informe um numero 1 : `)) 
    let numero2 = parseInt(question(` Informe um numero 2 : `)) 
    let numero3 = parseInt(question(` Informe um numero 3 : `)) 
    let numero4 = parseInt(question(` Informe um numero 4 : `)) 
    let numero5 = parseInt(question(` Informe um numero 5 : `)) 

//processamento media

const media = (numero1+numero2+numero3+numero4+numero5) / 5 

//Maior que a media

let numMaior = numero1

if(numero2 > media ){numMaior = numero2}
if(numero3 > media){numMaior = numero3}
if(numero4 > media){numMaior = numero4}
if(numero5 > media){numMaior = numero5}

const mensagem = (` 
==================================
Numero maior que a media ${media} : ${numMaior}
==================================
`)

console.log(mensagem)

}


main()










