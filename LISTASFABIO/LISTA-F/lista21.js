//Realize arredondamentos de números utilizando a regra usual da matemática: se a parte fracionaria for
//maior do que ou igual a 0,5, o numero é arredondado para o inteiro imediatamente superior, caso
//contrario, é arredondado para o inteiro imediatamente inferior.

import { question } from "readline-sync";

function main(){

console.log(` ===== arredondamentos de números =====`)
const numero = parseFloat(promt(` Informe um numero : `))

const resultadoredondado = arrendodamento(numero)

console.log(` Numero arrendodado : ${resultadoredondado} `)

//imprimir

function promt (texto){
    return question(texto)
    
  }
}


//processamento

function arrendodamento (n1){
 
  const partefracionaria = n1 % 1
  
  if(partefracionaria >= 0.5 ){
    return Math.ceil(n1) // para cima
  }else{
    return Math.floor(n1) //para baixo
  }

}

main ()
