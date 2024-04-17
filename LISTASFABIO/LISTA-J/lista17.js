/*Em um concurso de beleza, cada candidata tem um cartão contendo nome, altura e peso. Escreva um
algoritmo que leia um conjunto de cartões e escreva o nome e a altura da candidata mais alta e da mais
baixa; o nome e o peso da candidata mais magra e da mais gorda. (Flag: nome = 'FIM').*/

import { get_number, get_text, print } from "./utils/io_utils.js"

function main(){

  let nome
  while(true){

  nome = get_text(`Informe o nome da CANDIDATA (fim para saida) : `)

    if(nome === `fim`){
        print(` === FIM ===`)
        break;
    }

  let altura = get_number(`Informe a ALTURA da cantidata : `)
  let peso = get_number(`Informe o peso da CANDIDATA : `)

   // Verifica a candidata mais alta


   let nomeMaisAlta = ``
   let alturaMaisAlta =Number.NEGATIVE_INFINITY
   let nomeMaisBaixo = ``
   let alturaMaisBaixa = Number.NEGATIVE_INFINITY
   let nomeMaisGordo = ``
   let pesoMaisGordo = Number.NEGATIVE_INFINITY
   let nomeMaisMagro = ``
   let pesoMaisMagro = Number.NEGATIVE_INFINITY
 
   if(altura > alturaMaisAlta){
 
     alturaMaisAlta = altura
     nomeMaisAlta = nome
 
   }
 
   if(altura < alturaMaisBaixa){
 
     alturaMaisBaixa = altura
     nomeMaisBaixo = nome
   }
 
   if(peso > pesoMaisGordo){
 
     pesoMaisGordo = peso
     nomeMaisGordo = nome
 
   }
 
   if(peso < pesoMaisMagro ){
 
     pesoMaisMagro = peso
     nomeMaisMagro = peso
   }


//saida
print(`=================================`)
print(`CANDIDATA MAIS ALTA : ${nomeMaisAlta}`)
print(`CANDITADA MAIS BAIXA : ${nomeMaisBaixo}`)
print(`=================================`)
print(`CANDITADA MAIS GORDA : ${nomeMaisGordo}`)
print(`CANDITADA MAIS MAGRA : ${nomeMaisGordo}`)
}


}

main()