///Leia 2 (duas) notas parciais de um aluno, calcule a média e escreva a mensagem:
//o "Aprovado", se a média alcançada for maior ou igual a 7;
//o "Reprovado", se a média for menor do que 7;
//o "Aprovado com Distinção", se a média for igual a 10.

import { question } from "readline-sync";

function main(){

promt(` ==== APROVADO/NAO APROVADO =====`)

const nota1 = parseInt(question(` Informe a nota quantitativa : `))
const nota2 = parseInt(question(`Informe a nota qualitativa : `))
promt(`========================================`)

const mediadoaluno = calcularmedia(nota1,nota2)
promt(`MEDIA : ${mediadoaluno}`)

if( mediadoaluno >= 7.0 && mediadoaluno <= 9.9 ){


    promt (` SITUAÇAO : APROVADO !`)

}else if(mediadoaluno < 7.0 ){
    promt(` SITUAÇAO : REPROVADO ! `)

}else if(mediadoaluno === 10 ){

    promt(` APROVADO COM DISTINÇAO !`)
}



}


function calcularmedia(n1,n2){

   return (n1 + n2 ) / 2
}




function promt(texto){
    return console.log(texto)
}




main ()














