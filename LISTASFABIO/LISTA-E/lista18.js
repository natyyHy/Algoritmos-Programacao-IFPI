//Leia dois valores e uma das seguintes operações a serem executadas (codificadas da seguinte forma: 1 –
//Adição, 2 – Subtração, 3 – Multiplicação e 4 – Divisão). Calcule e escreva o resultado dessa operação
//sobre os dois valores lidos.

import { question } from "readline-sync";

function realizaroperaçao(operaçao,valor1,valor2) {
        
    switch (operaçao){

      case 1 : 
      return valor1 + valor2

      case 2 :
        return valor1 - valor2

      case 3 : 
      return valor1 * valor2
 
      case 4 :  
        if(valor2 !== 0){

        return valor1 / valor2  }else{
            
            console.log(`Error na divisao`)}

      
    } 

    
}



function main() {


const operaçao = parseInt(question(` Informe o tipo de operaçao a ser executada( 1 - Adiçao, 2 - Subtracao, 3 - Multiplicacao e 4 - Divisao) :`))
const valor1 = parseFloat(question(` Informe o primeiro valor :`))
const valor2 = parseFloat(question(` Informe o segundo valor :  `))

const resultado = realizaroperaçao(valor1,valor2,operaçao)

console.log(` O RESULTADO DE ${valor1} E ${valor2} por ${operaçao} : ${resultado}`)



}
main()






















