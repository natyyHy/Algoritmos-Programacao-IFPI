//Leia 2 (dois) números, calcule e escreva o mdc (máximo divisor comum) entre os números lidos.

import { get_number, print } from "./utils/io_utils.js"

function main(){

    //entrada
  print(` >>>>> CALCULADORA MDC (MAXIMO DIVISOR COMUM ) <<<<<`)
  const numero1 = get_number(` Informe numero (1) : `)
  const numero2 = get_number(` Informe numero (2) : `)
  print(`---------------------------------------------------`)


   //processamento
   const resultado = calcular_mdc(numero1,numero2)

   //saida
   print(`
   --------------------------
     MDC DE ${numero1} E ${numero2}
          ----> ${resultado}
   --------------------------
   `)


}


main()

function calcular_mdc(n1,n2){

  let minimo = Math.min(n1,n2);
  let mensagem = 0;

  while(true){

    if(n1 % minimo === 0 && n2 % minimo === 0 ){

        mensagem = minimo
        break;

    }
   minimo-- 
}
       return mensagem;

}
