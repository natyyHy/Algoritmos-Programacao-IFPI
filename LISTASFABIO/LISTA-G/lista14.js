/*Um posto está vendendo combustíveis com a seguinte tabela de descontos:
1. Álcool:
· até 20 litros, desconto de 3% por litro
· acima de 20 litros, desconto de 5% por litro
2. Gasolina:
· até 20 litros, desconto de 4% por litro
· acima de 20 litros, desconto de 6% por litro.
Escreva um algoritmo que leia o número de litros vendidos, o tipo de combustível (codificado da
seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se que
o preço do litro da gasolina é R$ 2,50 o preço do litro do álcool é R$ 1,90.*/

import { question } from "readline-sync";

function main(){

 const litros = parseInt(question(`Informe o numero de litros vendidos : `))
 const tipocombustivel = question(`Informe a letra do tipo do combustivel (A-álcool, G-gasolina) : `) 


 let litroAlcool = 0
 let litroGasolina = 0
 let preçoAlcool;
 let preçoGasolina;

 if(tipocombustivel === `A`){
    
    litroAlcool = litros
    preçoAlcool = litroAlcool * 1.90
    console.log(`TOTAL A PAGAR // ALCOOL : ${preçoAlcool} reais`)

 }else if(tipocombustivel === `G`){

    litroGasolina = litros
    preçoGasolina = litroGasolina * 2.50
    console.log(`TOTAL A PAGAR // GASOLINA : ${preçoGasolina} reais `)
 }


 //desconto alcool

let valorcomdesconto;


if(litroAlcool <= 20 ) {

   valorcomdesconto = calcularDesconto(preçoAlcool,3)
   console.log(`LITROS : ${litroAlcool} // COM DESCONTO 3% : ${valorcomdesconto.toFixed(2)} reais`)

}else if (litroAlcool > 20) {  

    valorcomdesconto = calcularDesconto(preçoAlcool,5)
    console.log(`LITROS : ${litroAlcool} // COM DESCONTO 5% : ${valorcomdesconto.toFixed(2)} reais`)
}

//desconto Gasolina 

if(litroGasolina <= 20 ){

    valorcomdesconto = calcularDesconto(preçoGasolina,4)
    console.log(`LITROS : ${litroGasolina} // COM DESCONTO 4% : ${valorcomdesconto.toFixed(2)} reais`)

}else if(litroGasolina > 21 ){

    valorcomdesconto = calcularDesconto(preçoGasolina,6)
    console.log(`LITROS : ${litroGasolina} // COM DESCONTO DE 6% : ${valorcomdesconto.toFixed(2)} reais`)
}


}

main()




function calcularDesconto(valor, percentualDesconto) {
    return valor - (valor * (percentualDesconto / 100))
  }




