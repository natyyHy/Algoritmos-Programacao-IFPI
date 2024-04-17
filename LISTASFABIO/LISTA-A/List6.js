//Leia uma velocidade em km/h, calcule e escreva esta velocidade em m/s. (Vm/s = Vkm/h / 3.6)

import { question } from "readline-sync";

var velocidade_kmh = Number(question( ` Quilometros por hora : `))

var ms_equiv = Math.floor(velocidade_kmh/3.6)

console.log( `${velocidade_kmh} km/s equivale a ${ms_equiv} m/s`)

















