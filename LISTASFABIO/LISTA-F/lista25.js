//Verifique a validade de uma senha fornecida pelo usuário. A senha é 1234. O algoritmo deve escrever
//uma mensagem de permissão de acesso ou não.

import { question } from "readline-sync";

function main(){

promt(` ===== VALIDADE DA SENHA =====`)

const senhafornecida = parseInt(question(` Informe a senha : `))

const senha = 1234

if(senhafornecida === senha ){

   promt(` ACESSO PERMITIDO ! `)
}else{

    promt(` ACESSO NEGADO !`)
}

}


function promt(texto){

    return console.log(texto)
}




main()













