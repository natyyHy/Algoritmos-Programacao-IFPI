///Leia a hora do início de um jogo e a hora de fim do jogo (cada hora é composta por 2 variáveis inteiras:
//hora e minuto). Calcule e escreva a duração do jogo (horas e minutos), sabendo-se que o tempo
//máximo de duração do jogo é de 24 horas e que ele pode iniciar-se em um dia e terminar no dia
//seguinte.

import { question } from "readline-sync";

function main(){

const horainicio = parseInt(promt(` Informe as HORAS do inicio do jogo :`))
const mininicio = parseInt(promt(` Informe os MINUTOS finais do jogo:`))

const horafim = parseInt(promt(` Informe as HORAS do fim do jogo : `))
const minfim = parseInt(promt(` Informe os MINUTOS finais do jogo :`))

const duraçao = calculoduraçao(horainicio,mininicio,horafim,minfim)

console.log(`==============================`)
console.log(` DURAÇAO DO JOGO : ${duraçao.hora} horas e ${duraçao.minuto} minutos`)
console.log(`===============================`)


function promt(texto){

    return (question(texto))
}


function calculoduraçao(hora1,min1,hora2,min2){

   const iniciominuto = hora1 * 60 + min1 
   const fimminuto = hora2 * 60 + min2

  let diferençaminutos = fimminuto - iniciominuto

  if(diferençaminutos < 0 ){
    
    diferençaminutos += 24 * 60
  }

  const hora = Math.floor(diferençaminutos/60)
  const minuto = diferençaminutos % 60

  return {hora,minuto}
}



}

main()



