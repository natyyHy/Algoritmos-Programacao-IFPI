///Leia as coordenadas cartesianas (x e y) de 2 (dois) pontos no plano, que corresponderão a dois cantos de
//um retângulo. Baseado nisto, calcule e escreva a área deste retângulo. Lembre-se de que o valor da área
//não pode ser negativo.

import { question, questionEMail } from "readline-sync";

function main(){

promt(`======== AREA DO RETANGULO =======`)
const pontoX = parseInt(question(` Informe o ponto X (base) : `))
const pontoY = parseInt(question(` Informe o ponto Y (altura) : `))

const resuldadoAreaRet = calcularArea(pontoX,pontoY)

//verificar se o valor e negativo

if(resuldadoAreaRet < 0 ){

    promt(`O VALOR NAO PODE SER NEGATIVO ! `)
}else{

    promt(` AREA DO RETANGULO : ${resuldadoAreaRet}`)
}

//CALCULO AREA

function calcularArea(pX,pY){

  return pX * pY


}



}
function promt(texto){

    return console.log(texto)
}


main()















