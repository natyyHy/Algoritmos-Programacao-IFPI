///Leia uma letra e verifique se a letra digitada é vogal ou consoante.

import { question } from "readline-sync";

function main(){

promt(` ===== IDENTIFICAR VOGAL OU CONSOANTE =====`)

const letra = question(` Informe uma letra (Vogal ou consoante ) : `).toLocaleLowerCase()

if(letra === `a`|| letra === `e` || letra === `i`||letra === `o`||letra === `u`){

    promt(`A LETRA ${letra} E UMA VOGAL ! `)
}else if( (letra >= `a ` && letra <= `z` ) && letra != `a` && letra != `e` && letra != `i ` && letra != `o ` && letra != `u`){

    promt(`A LETRA ${letra} E UMA CONSOANTE !`)
}


}


function promt(texto){
    return console.log(texto)
}




main()




