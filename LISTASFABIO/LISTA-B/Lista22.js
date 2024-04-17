//Leia um valor em km, calcule e escreva o equivalente em m.

import { question } from "readline-sync";

//entrada

console.log (`==== QUILOMETROS PARA METROS ====`)
const km = Number(question(` Informe o valor em KM : `))

//processamento

const equiv_metros = km * 1000

//saida

const msg = (`
-----------------
QUILOMETROS --> ${km} km
CALCULO --> ${km} x 1000
-----------------
EM METROS ---> ${equiv_metros.toLocaleString()} metros  
`)
                                    
console.log(msg)





