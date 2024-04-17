/*Leia um número inteiro menor que 1000 e imprima a quantidade de centenas, dezenas e unidades do
número. Observando os termos no plural a colocação do "e", da vírgula entre outros. Exemplos:
o 326 = 3 centenas, 2 dezenas e 6 unidades
o 12 = 1 dezena e 2 unidades*/

import { question } from "readline-sync";

function main(){

  const numeroinformado = parseInt(question(`Informe um numero menor que 1000 : `))


  let numerovalido;
  if(numeroinformado < 1000 ){

   numerovalido = numeroinformado
  }else{

    console.log(` DIGITE UM NUMERO MENOR QUE 1000 !! `)
    return;
  }

  
  const numerocentena = Math.floor(numerovalido / 100 )
  const numerodezena = Math.floor((numerovalido % 100) / 10 ) 
  const numerounidade = numerovalido % 10 

  //saida
  
   promt(`
   ===================================
   ${verificarcolocaçao(numerocentena,`centena`)} ${verificarcolocaçao(numerodezena, `dezena`)} e ${verificarcolocaçao(numerounidade , `unidade`)}
   ===================================
   `)


}

main()

function promt(texto){

    return console.log(texto)
}

function verificarcolocaçao(valor,tipo){
   
   if(valor === 0 ){
     
     return ``

   }else if( valor === 1 ){

    return `${valor} ${tipo}`

   }else{

    return `${valor} ${tipo}s`
    }

}



