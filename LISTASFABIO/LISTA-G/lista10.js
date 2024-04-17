/*Leia as duas notas parciais obtidas por um aluno numa disciplina ao longo de um semestre, e calcule a
sua média. A atribuição de conceitos obedece à tabela abaixo:
Média de Aproveitamento Conceito
Entre 9.0 e 10.0 A
Entre 7.5 e 9.0 B
Entre 6.0 e 7.5 C
Entre 4.0 e 6.0 D
Entre 4.0 e zero E
O algoritmo deve mostrar na tela as notas, a média, o conceito correspondente e a mensagem
“APROVADO” se o conceito for A, B ou C ou “REPROVADO” se o conceito for D ou E.*/

import { question } from "readline-sync";

function main (){

  const nota1 = parseInt(question(`Informe a primeira nota : `))
  const nota2 = parseInt(question(`Informe a segunda nota : `))

  const mediadoaluno = calcularmedia(nota1,nota2)

  let mediaconceito;
  let situaçao;

  if(mediadoaluno <= 10.0  && mediadoaluno >= 9.0  ) {

    mediaconceito = `A`
    situaçao = `APROVADO`

  }else if(mediadoaluno <= 8.9 && mediadoaluno >= 7.5 ){

    mediaconceito = `B`
    situaçao = `APROVADO`

  }else if(mediadoaluno <= 7.4 && mediadoaluno >= 6.0){

    mediaconceito = `C`
    situaçao = `APROVADO`

  }else if(mediadoaluno <= 5.9 && mediadoaluno >= 4.0){

    mediaconceito = `D`
    situaçao = `REPROVADO `

  }else if(mediadoaluno <= 3.9 && mediadoaluno >= 0 ){

    mediaconceito = `E`
    situaçao = `REPROVADO`
  }


  
  const mensagem = (`
  ============================
  MEDIA : ${mediadoaluno}
  CONCEITO CORRESPONDENTE : ${mediaconceito}
  SITUAÇAO : ${situaçao}
  ============================
  
  `)

  console.log(mensagem)
}

main()



function calcularmedia(n1,n2){

    return (n1 + n2) / 2
}



