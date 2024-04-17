//Leia uma letra, verifique se letra é "F" ou "M" e escreva F - Feminino, M - Masculino, Sexo Inválido.

import { question } from "readline-sync";

function main(){

const letra = question(` Informe uma letra ( ex : F ou M ) : `)


let letravalida;

if(letra === `F` || letra === `f` || letra === `M` || letra === `m`){

   letravalida = letra

   promt(` LETRA VALIDA ! `)

   }else{

   promt(`LETRA INVALIDA ! `)

}

if(letravalida === `F`){

    promt(` F - Feminino`)

    }else if(letravalida === `M` ){

    promt(` M - Masculino`)

    }else{

    promt(` Sexo Invalido ! `)
}




}

function promt(texto){
    return console.log(texto)
}



main()

















