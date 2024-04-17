///Leia a medida de um ângulo (entre 0 e 360°) e escreva o quadrante (primeiro, segundo, terceiro ou
//quarto) em que o ângulo se localiza.

import { question } from "readline-sync";

function main () {

const medidaangulo = Number(question(`Informe a medida de um ângulo (entre 0 e 360°) : `))

if(medidaangulo >= 0 && medidaangulo <= 90 ){

    console.log(` Localizacao do Quadrante : Primeiro quadrante`)
}else if(medidaangulo >= 91 && medidaangulo <= 180 ){

    console.log(` Localizacao do Quadrante : Segundo quadrante`)
}else if(medidaangulo >= 181 && medidaangulo <= 270){

    console.log(`Localizacao do Quadrante : Terceiro quadrante`)
}else{

    console.log(`Localizacao do Quadrante : Quarto quadrante`)
}

}

main()
















