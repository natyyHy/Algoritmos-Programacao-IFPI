import { get_number , print } from "./utils/io_utils.js"

//Leia um número e divida-o por dois (sucessivamente) até que o resultado seja menor que 1. Escreva o
//resultado da última divisão efetuada.

function main(){

  //entrada
  print(` >>>>> DIVISOR POR 2 SUCESSIVAMENTE <<<<<`)
  const numero = get_number(`Informe o numero : `)

  //processamento
  const resultado = calcular_divisaoPor2(numero)

  //saida
  print(`
  ------------------------------------------

   ULTIMA DIVISAO : ${resultado}
  
  ------------------------------------------
  `)

}

main()

function calcular_divisaoPor2(n){
  
   let divisor = n / 2
   let ultima_divisao;

    while(divisor > 1 ) {
       
       //sucessivamente
       n = divisor
       divisor = n / 2

       ultima_divisao = (`${n} / 2 -->  ${divisor}`)
    }  
        
   return ultima_divisao
}
