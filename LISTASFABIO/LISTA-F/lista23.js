///Leia 2 datas (cada data é composta por 3 variáveis inteiras: dia, mês e ano) e escreva qual delas é a mais
//recente.

import { question } from "readline-sync";

function main(){

promt(`==== DATA RECENTE ====`)

promt(` DATA 1 `)
const dia1 = parseInt(question(` Informe o dia : `))
const mes1 = parseInt(question(`Informe o mes : `))
const ano1 = parseInt(question(` Informe o ano : `))

promt(` DATA 2 `)
const dia2 = parseInt(question(` Informe o dia :`))
const mes2 = parseInt(question(` Informe o mes :`))
const ano2 = parseInt(question(` Informe o ano :`))

const datacente = encontrardatarecente(dia1,mes1,ano1,dia2,mes2,ano2)

promt(` A DATA MAIS RECENTE 
DIA : ${datacente.dia}
MES : ${datacente.mes}
ANO : ${datacente.ano}
`)

}

function promt (texto){

    return console.log(texto)
}


function encontrardatarecente(d1,m1,a1,d2,m2,a2){
  if( d1 <= d2 && m1 <= m2 && a1 <= a2  ){
    
    return {dia : d1 , mes : m1 , ano : a1}

  }else{

    return {dia : d2 , mes : m2 , ano : a2}
  }

 



}





main()

















