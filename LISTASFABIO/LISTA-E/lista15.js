//Leia a quantidade de horas aula dadas por dois professores e o valor por hora recebido por cada um.
//Escreva na tela qual dos professores tem salário total maior

import { question } from "readline-sync";

function main(){

const horasdadaProf1 = Number(question(` Quantidade de HORAS dadas (Professor 1 ): `))
const valorporhora1 = Number(question(` Valor($) por hora recebido (Professor 1 ): `))
console.log(`=====================================================`)
const horasdadaProf2 = Number(question(` Quantidade de HORAS dadas (Professor 2 ): `))
const valorporhora2 = Number(question(` Valor($) por hora recebido (Professor 2 ): `))

//processamento

const salarioprof1 = horasdadaProf1 * valorporhora1
const salarioprof2 = horasdadaProf2 * valorporhora2


let salariomaior;

if(salarioprof1 > salarioprof2){
 
    salariomaior = salarioprof1
    console.log(`O PROFESSOR 1 TEM O MAIOR SALARIO : ${salariomaior} reais`)
   
}else if(salarioprof2 > salarioprof1){

   salariomaior = salarioprof2
   console.log(` O PROFESSOR 2 TEM O MAIOR SALARIO : ${salariomaior}`)
   
}else if(salarioprof1 === salarioprof2){

   console.log(` Ambos professores tem salarios iguais !! `)

}



}

main()
















