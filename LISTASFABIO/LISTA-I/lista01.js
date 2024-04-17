//Leia uma lista de números e que para cada número lido, escreva o próprio número e a relação de seus
//divisores. (flag número = 0).

import { get_number , get_number_positive, print} from "./utils/io_utils.js"


function main(){

//entrada
print(` ====== LISTA E SEUS DIVISORES =====`)
let lista = get_number(`Informe o valor da lista : `)



//processo
calcular_RelacaoDivisores(lista)


}
while(true){
    let pergunta = get_number_positive("VOCÊ QUER ADICIONAR UM NUMERO PARA A LISTA? 1 - SIM ; 2 - NAO")
    
    if(pergunta === 1 ){
        main()
        
    }
    else if(pergunta === 2 ){

        print(` OKAY! :)`)
        break;

    }else{

        print(`ERRO !!! D: `)
        break;
    }

    
}

function calcular_RelacaoDivisores(lista){

    let numero = lista
    while(numero >= 0){

        if(lista % numero === 0 ){

            print(`--->${numero}`)

        }
        numero--

    }
}
