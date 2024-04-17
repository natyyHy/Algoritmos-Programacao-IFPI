///Leia duas notas de um aluno e escreva na tela a palavra “Aprovado” se a média das duas notas for maior
//ou igual a 7,0. Caso a média seja inferior a 7,0, o programa deve ler a nota do exame e calcule a média
//final. Se esta média for maior ou igual a 5,0, o programa deve escreva “Aprovado”, caso contrário deve
//escreva “Reprovado”.

import { question, questionEMail } from "readline-sync";

function main() {

const nota1 = Number((question` Informe a nota 1 :`))
const nota2 = Number(question(` Informe a nota 2 :`))

//processamento 

const media = (nota1+ nota2) / 2 
let mediafinal;

if(media >= 7.0){

  console.log(` APROVADO ! `)
 
}else{

   const notafinal = Number(question(` Informe a Nota do exame final :`))
    mediafinal = (notafinal+media) / 2
}

if(mediafinal >= 5.0 ){

   console.log(`APROVADO ! `)

}else{

   console.log(` REPROVADO !`)

}



}

main()


















