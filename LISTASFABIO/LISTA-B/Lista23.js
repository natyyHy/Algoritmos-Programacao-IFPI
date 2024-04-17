// Leia um valor em kg (quilograma), calcule e escreva o equivalente em g (grama).

import { question } from "readline-sync";

//entrada

console.log(` ==== QUILOGRAMA EM GRAMA ==== `)
const kg = Number(question(` Informe o valor de KG : `))

//PROCESSAMENTO

const grama = kg * 1000

//saida

const msg = (`
-------------------
QUILOGRAMAS : ${kg} kg
CALCULO ---> ${kg} X 1000
-------------------
EM GRAMAS ---> ${grama.toLocaleString()} gramas
`)

console.log(msg)














