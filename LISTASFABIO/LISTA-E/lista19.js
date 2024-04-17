//Leia a altura (em metros) e peso (em Kg) de uma pessoa, em seguida calcule o índice de massa corpórea(IMC = peso / altura2). 
//Ao final, escreva se a pessoa está com peso normal (IMC abaixo de 25), obeso(IMC entre 25 e 30) 
//ou obesidade mórbida (IMC acima de 30).

import { question } from "readline-sync";



function calculoImc(altura,peso){

  return peso / (altura**2)
}


function Tipocorpo(imc) {

   if (imc < 25 ) {
    return "Peso Normal"
   }else if(imc >= 25 && imc <= 30){
    return "Obeso"
   }else{
    return "Obesidade Morbida"
   }


}



function main() {

console.log(` ===== INDICE DE MASSA CORPOREA =====`)
const altura = parseFloat(question(` Informe a altura :`))
const peso = parseFloat(question(` Informe o peso :`))

const imc = calculoImc(altura,peso)
const classificacao = Tipocorpo(imc)

console.log(`IMC : ${imc.toFixed(2)}`)
console.log(` Indice Corporea : ${classificacao}`)




}

main()













