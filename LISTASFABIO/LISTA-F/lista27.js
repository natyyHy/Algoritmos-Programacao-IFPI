///Determine a idade de uma pessoa, em anos, meses e dias, dadas a data (dia, mês e ano) do seu
//nascimento e a data (dia, mês e ano) atual.

import { question } from "readline-sync"

function main(){

promt(`==== DATA DO SEU NASCIMENTO ====`)
const dianascido = parseInt(question(`Informe o dia de nascimento :`))
const mesnascido = parseInt(question(`Informe o mes nascido : `))
const anonascido = parseInt(question(`Informe o ano nascido : `))

promt(`===== DATA ATUAL =====`)
const diaatual = parseInt(question(` Informe o dia atual : `))
const mesatual = parseInt(question(` Informe o mes atual : `))
const anoatual = parseInt(question(`Informe o ano atual : `))

const resultadoidade = calcularidade(dianascido,diaatual,mesnascido,mesatual,anonascido,anoatual)

promt(`
=================================
IDADE EM ANOS : ${resultadoidade.ano} anos
IDADE EM MESES : ${resultadoidade.mes} meses
IDADE EM DIAS : ${resultadoidade.dia} dias
=================================
`)


}

function promt(texto){
    return console.log(texto)
}


function calcularidade(diaNas,diaAt,mesNas,mesAt,anoNas,anoAt){
  let idade = {}
  idade.ano = anoNas - anoAt
  idade.mes = mesNas - mesAt
  idade.dia = diaNas - diaAt

  return idade
}



main()




