///Leia os coeficientes (A, B e C) de uma equações de 2° grau e escreva suas raízes. Vale lembrar que o
//coeficiente A deve ser diferente de 0 (zero).

import { question } from "readline-sync";

function main(){

promt(`===== coeficiente (A, B e C) de uma equaçao de 2° grau =====`)
const A = parseFloat(question(` Informe o coeficiente de A : `))

if (A === 0 ){

  console.log(` O COEFICIENTE DE A DEVE SER DIFERENTE DE 0`)
  return;
}

const B = parseFloat(question(` Informe o coeficiente de B : `))
const C = parseFloat(question(` Informe o coeficiente de C : `))

const delta = calculardelta(A,B,C)

if(delta < 0){

  promt(`A EQUAÇAO NAO POSSUI RAIZES REAIS `)

}else if(delta === 0 ){
  const raiz = calcularraizunica(A,B)
  promt(` A EQUAÇAO POSSUI UMA RAIZ REAL : ${raiz}`)
}else{
  const raizduas = calcularduasraizes(A,B,delta)
  promt(` A EQUAÇAO POSSUI DUAS RAIZES REAIS : ${raizduas}`)
  }

}

//processamento

function calculardelta(a,b,c){

  return b ** 2 - 4 * a * c
  

}

function calcularraizunica(a,b){

  return -b / (2 * a)


}

function calcularduasraizes(a,b,delta){

  const raiz1 = (-b + Math.sqrt(delta)) / (2 * a)
  const raiz2 = (-b - Math.sqrt(delta)) / (2 * a)
  return {raiz1,raiz2}

}

function promt(texto){

    return console.log(texto)
}


main()
















