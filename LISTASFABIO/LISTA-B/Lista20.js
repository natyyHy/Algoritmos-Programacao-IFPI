////Leia uma temperatura em °C, calcule e escreva a equivalente em °F. (t°F = (9 * t°C + 160) / 5)

import { question } from "readline-sync";

console.log(`====TEMPERATURA °C EM °F====`)

///ENTRADA

const TempC = Number(question(` Informe a temperatura em °C : `))

///processamento 

const tempF = (9 * TempC + 160) / 5

///saida

const msg = (`

--------------
TEMPERATURA °C = ${TempC}
CALCULO = (9 x ${TempC} + 160) / 5
--------------
EM TEMPERATURA °F --> ${tempF}

`)


console.log(msg)















