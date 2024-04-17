///Leia o turno em que um aluno estuda, sendo M para matutino, V para Vespertino ou N para Noturno e
//escreva a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.

import { question } from "readline-sync";

function main(){

const letraturno = question(` Informe a letra conforme o turno (sendo M para matutino, V para Vespertino ou N para Noturno) : `).toUpperCase()

if(letraturno !== `M` && letraturno !== `V` && letraturno !== `N`){

    promt(`Valor Invalido !!!`)

   }else if( letraturno === `M`){

    promt(` BOM DIA !!! :D`)

   }else if(letraturno === `V`){

    promt (`BOA TARDE !!! `)

   }else if(letraturno === `N `){

    promt (` BOA NOITE !!!`)
}


}

function promt(texto){
    return console.log(texto)
}


main()


















