//Leia um número e, a seguir, leia uma lista de números até achar um igual ao primeiro número lido.

import { get_number , print} from "./utils/io_utils.js"

function main(){

//entrada
print(` >>>>>> ENCONTRAR NA LISTA DE NUMEROS O NUMERO INFORMADO <<<<< `)
const numero_informado = get_number(` Informe o numero : `)

//processamento

calcular_Lista(numero_informado)


}

main()


function calcular_Lista(numero) {
   
    let contagem_lista = 1
    let numero_atual;
    do{
        numero_atual = get_number(`Lista ${contagem_lista} : Informe um numero : `)
        
        if(numero_atual === numero ){

            print(`=====================`)
            print(` NUMERO ${numero} --> Lista ${contagem_lista} `)
    
        }

        contagem_lista++
    
    } 
    while(numero_atual != numero);
}