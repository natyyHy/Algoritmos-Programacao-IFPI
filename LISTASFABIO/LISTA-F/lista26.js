//Leia os 3 (três) lados de um triângulo e identifique sua hipotenusa e seus catetos.

import { question } from "readline-sync";

function main(){

const ladoA = parseInt(question(` Informe o lado A : `))
const ladoB = parseInt(question(` Informe o lado B : `))
const ladoC = parseInt(question(` Informe o lado C : `))


//encontrar o maior lado//hipotenusa

let hipotenusa; 
if(ladoA >= ladoB && ladoC) {
      
    hipotenusa = ladoA
}else if(ladoB >= ladoA && ladoC){

    hipotenusa = ladoB
}else{
    hipotenusa = ladoC
}

//encontrar lado adjacente e oposto

let catetoadjacente1, catetoadjacente2 , catetooposto
if(hipotenusa === ladoA){

    catetoadjacente1 = ladoB
    catetoadjacente2 = ladoC
    catetooposto = Math.sqrt(ladoB ** 2 + ladoC **2)

}else if(hipotenusa === ladoB){

    catetoadjacente1 = ladoA
    catetoadjacente2 = ladoC
    catetooposto = Math.sqrt(ladoA **2 + ladoC **2)
}else{

    catetoadjacente1 = ladoA
    catetoadjacente2 = ladoB
    catetooposto = Math.sqrt(ladoA **2 + ladoB**2)
}

//saida

const mensagem = (`
===============================
HIPOTENUSA : lado ${hipotenusa}
CATETO ADJACENTE 1 : lado ${catetoadjacente1}
CATETO ADJACENTE 2 : lado ${catetoadjacente2}
CATETO OPOSTO : ${catetooposto.toFixed(2)}
================================

`)

console.log(mensagem)



}





main()
















