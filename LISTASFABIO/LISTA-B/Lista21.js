//Leia uma temperatura em °F, calcule e escreva a equivalente em °C. (t°C = (5 * t°F - 160) / 9).

import { question } from "readline-sync";

console.log(` ===TEMPERATURA °F EQUIVALENTE EM °C ===`)

//ENTRADA

 const tempF = Number(question(` Informe a Temperatura em °F : `))

//PROCESSAMENTO

const equivalenteC = (5 * tempF - 160) / 9

//saida

const msg = (`
----------------
TEMPERATURA °F --> ${tempF}
CALCULO -->  (5  X ${tempF} - 160) / 9
----------------
EM TEMPERATURA °C --> ${equivalenteC.toFixed(2)}

`)

console.log (msg)



















