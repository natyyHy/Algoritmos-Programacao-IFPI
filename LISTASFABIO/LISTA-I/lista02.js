//Leia 2 (dois) números, calcule e escreva o mmc (mínimo múltiplo comum) entre os números lidos.

import { get_number, print} from "./utils/io_utils.js"

function main(){

  //entrada
  print(`>>>>> CALCULADORA MMC ( MINIMO MULTIPLO COMUM ) <<<<<`)
  print(`--------------------------------------------------------`)
  const numero1 = get_number(`Informe um numero : `)
  const numero2 = get_number(`Informe outro numero : `)

  //processamento
  const resultado = calcular_mmc(numero1,numero2)


  //saida
  print(`----------------------------`)
  print(`MMC : ${resultado}`)


}

function calcular_mmc(n1,n2){
 
  let divisor_contador = 2
  let mmc = 1 
  
  while(n1 > 1 || n2 > 1 ){

    if(n1 % divisor_contador === 0 || n2 % divisor_contador === 0){
    
      print(` ${n1} , ${n2} ------ ${divisor_contador} X`) 
      mmc *= divisor_contador
      if(n1 % divisor_contador === 0){
        
        n1 /= divisor_contador
      }
      if(n2 % divisor_contador === 0 ){

        n2 /= divisor_contador

      }
    }else{

      divisor_contador++
    }
  }

  return mmc; 
  }



main()