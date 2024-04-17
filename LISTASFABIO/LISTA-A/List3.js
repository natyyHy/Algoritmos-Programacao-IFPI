//Leia um valor em minutos, calcule e escreva o equivalente em horas e minutos


import { question } from "readline-sync";


let minuto;
let valido = false; 

while(!valido) {

    minuto = Number(question( ' Digite quantos minutos : ')) ;

if (isNaN(minuto))   
{
     console.log(`Por favor digite um numero valido `)
  
} 
else

 {
    valido = true 
 }} 

 const equiv_hora = Math.floor (minuto / 60)
const equiv_minuto = minuto % 60;
 
//saida

 
console.log(` ${minuto} minutos equivale a ${equiv_hora} horas e ${equiv_minuto} minutos`)






