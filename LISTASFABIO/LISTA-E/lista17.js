//Leia valores inteiros em duas variáveis distintas e se o resto da divisão da primeira pela segunda for 1
//escreva a soma dessas variáveis mais o resto da divisão; se for 2 escreva se o primeiro e o segundo valor
//são pares ou ímpares; se for igual a 3 multiplique a soma dos valores lidos pelo primeiro; se for igual a 4
//divida a soma dos números lidos pelo segundo, se este for diferente de zero. Em qualquer outra situação
//escreva o quadrado dos números lidos.

import { question } from "readline-sync";

function main(){

const var1 = parseInt(question(` Informe um numero Inteiro :`))
const var2 = parseInt(question(` Informe um outro numero Inteiro :`))

const restodivisao = var1 % var2
const somavariaveis = var1+var2
const multiplacaosoma = somavariaveis * var1
const divisao_soma_segundo = somavariaveis / var2

if(restodivisao === 1 ){
 
     console.log(` SOMA DAS VARIAVEIS : ${somavariaveis} `)
     console.log(` RESTO DA DIVISAO : ${restodivisao}`)

}
else if(restodivisao === 2){

    if(var1 % 2 === 0){
        console.log(` O VALOR ${var1} e PAR`)
    }else{
 
        console.log(`O VALOR ${var1} e IMPAR`)

    }

    if(var2 % 2 === 0 ){

     console.log(` O VALOR ${var2} e PAR`)

    }else{

        console.log(`O VALOR ${var2} E IMPAR`)
    }


}
else if(restodivisao === 3 ){
    
        console.log(`MULTIPLICAÇAO DA SOMA PELO PRIMEIRO VALOR : ${multiplacaosoma}`)
    

}
else if(restodivisao === 4 && restodivisao !== 0){

        console.log(` DIVISAO DA SOMA PELO SEGUNDO VALOR : ${divisao_soma_segundo} `)


}
else{

      console.log(` O valor ${var1} ao quadrado : ${var1**2} `)
      console.log(` O VALOR ${var2} ao quadrado : ${var2**2}`)
} 


}

main()












