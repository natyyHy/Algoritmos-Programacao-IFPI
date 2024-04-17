//Leia 3 (três) números e escreva-os em ordem crescente.

import { question } from "readline-sync";

function main (){
console.log(`===== ORDEM CRESCENTE =====`)
let numero1 = Number(question(` Informe o numero 1 : `))
let numero2 = Number(question(` Informe o numero 2 : `))
let numero3 = Number(question(` Informe o numero 3 : `))

//processamento

 let maximo = Math.max(numero1,numero2,numero3)
 let minimo = Math.min(numero1,numero2,numero3)
  return crescente(numero1,numero2,numero3,maximo,minimo)

}

function crescente (num1,num2,num3,max,min){

    let meio ;
 if(num1 != max && num1 != min){

    meio = num1

}else if( num2!= max && num2 != min){

    meio = num2

}else{

   meio = num3



}
  const msg = (`
  =============================
  NUMERO INFORMADO : ${num1}${num2}${num3}
  ORDEM CRESCENTE : ${min}${meio}${max}
  =============================
  `)
  console.log(msg)

 


 }

main()
